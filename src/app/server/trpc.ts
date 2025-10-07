import { initTRPC, TRPCError } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { PrismaClient } from '@prisma/client';

// إنشاء Prisma Client مع تحسينات الأداء
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
    errorFormat: 'pretty',
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// إنشاء tRPC context
export async function createContext(opts: CreateNextContextOptions) {
  const { req, res } = opts;

  // TODO: استخراج المستخدم من التوكن
  const user = null; // سيتم استبداله بنظام المصادقة الحقيقي

  return {
    prisma,
    req,
    res,
    user,
  };
}

type Context = Awaited<ReturnType<typeof createContext>>;

// إنشاء tRPC instance
const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof Error && 'flatten' in error.cause
            ? (error.cause as any).flatten()
            : null,
      },
    };
  },
});

// إنشاء middleware للمصادقة
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'يجب تسجيل الدخول أولاً',
    });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

// إنشاء middleware للتحقق من الأذونات
const enforceUserHasPermission = (requiredPermissions: string[]) =>
  t.middleware(({ ctx, next }) => {
    if (!ctx.user) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'يجب تسجيل الدخول أولاً',
      });
    }

    // TODO: التحقق من الأذونات بناءً على دور المستخدم
    const userPermissions = (ctx.user as any)?.role === 'SUPER_ADMIN' ? ['*'] : [];

    const hasPermission = requiredPermissions.some(permission =>
      userPermissions.includes('*') || userPermissions.includes(permission)
    );

    if (!hasPermission) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'ليس لديك صلاحية للوصول إلى هذا المورد',
      });
    }

    return next({
      ctx: {
        ...ctx,
        user: ctx.user,
      },
    });
  });

// إنشاء procedures مع الـ middleware المختلفة
export const router = t.router;
export const procedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
export const adminProcedure = t.procedure.use(
  enforceUserHasPermission(['admin', 'manage_users', 'manage_products'])
);

// إنشاء type للـ context
export type { Context };