import { z } from 'zod';
import { procedure, router, protectedProcedure, adminProcedure } from '../trpc';

// مخططات البيانات للمصادقة
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
});

const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().optional(),
  avatar: z.string().optional(),
});

// مخططات البيانات للمنتجات
const createProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  sku: z.string().min(1),
  categoryId: z.string(),
  price: z.number().positive(),
  cost: z.number().positive().optional(),
  stock: z.number().int().min(0),
  minStock: z.number().int().min(0).optional(),
  maxStock: z.number().int().min(0).optional(),
  image: z.string().optional(),
  images: z.array(z.string()).optional(),
  brand: z.string().optional(),
  weight: z.number().positive().optional(),
  volume: z.string().optional(),
  ingredients: z.any().optional(),
  notes: z.any().optional(),
  gender: z.enum(['MALE', 'FEMALE', 'UNISEX']).optional(),
  season: z.array(z.enum(['SPRING', 'SUMMER', 'FALL', 'WINTER', 'ALL_SEASONS'])).optional(),
  occasion: z.array(z.enum(['DAILY', 'WORK', 'PARTY', 'WEDDING', 'SPORT', 'SPECIAL'])).optional(),
  isActive: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
});

const updateProductSchema = createProductSchema.partial();

// تعريف الـ routers الفرعية أولاً
const authRouter = router({
  login: procedure
    .input(loginSchema)
    .mutation(async ({ input, ctx }) => {
      // TODO: تنفيذ منطق تسجيل الدخول
      return {
        user: {
          id: '1',
          email: input.email,
          name: 'مستخدم تجريبي',
          role: 'USER' as const,
        },
        token: 'fake-token',
      };
    }),

  register: procedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      // TODO: تنفيذ منطق إنشاء الحساب
      return {
        user: {
          id: Date.now().toString(),
          email: input.email,
          name: input.name,
          role: 'USER' as const,
        },
        token: 'fake-token',
      };
    }),

  me: protectedProcedure.query(async ({ ctx }) => {
    // TODO: جلب بيانات المستخدم الحالي
    return ctx.user;
  }),

  updateProfile: protectedProcedure
    .input(updateProfileSchema)
    .mutation(async ({ input, ctx }) => {
      // TODO: تحديث ملف المستخدم الشخصي
      if (!ctx.user) throw new Error('المستخدم غير مسجل الدخول');

      const updatedUser = { ...(ctx.user as any), ...input };
      return updatedUser;
    }),

  logout: protectedProcedure.mutation(async ({ ctx }) => {
    // TODO: تنفيذ منطق تسجيل الخروج
    return { success: true };
  }),
});

const productsRouter = router({
  list: procedure
    .input(
      z.object({
        categoryId: z.string().optional(),
        search: z.string().optional(),
        page: z.number().int().min(1).default(1),
        limit: z.number().int().min(1).max(100).default(20),
        sortBy: z.enum(['name', 'price', 'popularity', 'createdAt']).default('createdAt'),
        sortOrder: z.enum(['asc', 'desc']).default('desc'),
      })
    )
    .query(async ({ input, ctx }) => {
      const { categoryId, search, page, limit, sortBy, sortOrder } = input;

      const skip = (page - 1) * limit;

      const where: any = {
        isActive: true,
      };

      if (categoryId) {
        where.categoryId = categoryId;
      }

      if (search) {
        where.OR = [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
          { sku: { contains: search, mode: 'insensitive' } },
        ];
      }

      const [products, total] = await Promise.all([
        ctx.prisma.product.findMany({
          where,
          skip,
          take: limit,
          orderBy: { [sortBy]: sortOrder },
          include: {
            category: true,
            variants: true,
            _count: {
              select: { reviews: true },
            },
          },
        }),
        ctx.prisma.product.count({ where }),
      ]);

      return {
        products,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      };
    }),

  getById: procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const product = await ctx.prisma.product.findUnique({
        where: { id: input.id },
        include: {
          category: true,
          variants: true,
          reviews: {
            take: 10,
            orderBy: { createdAt: 'desc' },
            include: {
              user: { select: { name: true, avatar: true } },
              customer: { select: { name: true } },
            },
          },
          inventory: {
            include: { warehouse: true },
          },
        },
      });

      if (!product) {
        throw new Error('المنتج غير موجود');
      }

      return product;
    }),

  create: adminProcedure
    .input(createProductSchema)
    .mutation(async ({ input, ctx }) => {
      const product = await ctx.prisma.product.create({
        data: {
          ...input,
          season: input.season || [],
          occasion: input.occasion || [],
        },
      });

      return product;
    }),

  update: adminProcedure
    .input(z.object({
      id: z.string(),
      data: updateProductSchema,
    }))
    .mutation(async ({ input, ctx }) => {
      const { id, data } = input;

      const product = await ctx.prisma.product.update({
        where: { id },
        data: {
          ...data,
          season: data.season,
          occasion: data.occasion,
        },
      });

      return product;
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.product.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  categories: procedure.query(async ({ ctx }) => {
    return ctx.prisma.category.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: {
          select: { products: true },
        },
      },
    });
  }),
});

// جمع جميع الـ routers في الـ router الرئيسي
export const appRouter = router({
  // ===== المصادقة =====
  auth: authRouter,

  // ===== المنتجات =====
  products: productsRouter,

  // مثال أساسي - سيتم توسيعه لاحقاً
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;