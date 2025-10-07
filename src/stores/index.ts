import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// ===== أنواع البيانات =====
export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'EMPLOYEE' | 'USER';
  avatar?: string;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  sku: string;
  price: number;
  stock: number;
  image?: string;
  categoryId: string;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  product?: Product;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: string;
  total: number;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

// ===== متجر المصادقة =====
interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: Partial<User>) => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,

        login: async (email: string, password: string) => {
          set({ isLoading: true });
          try {
            // TODO: استبدل به API call حقيقي
            const response = await fetch('/api/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
              const { user, token } = await response.json();
              set({ user, token, isAuthenticated: true });
            } else {
              throw new Error('فشل في تسجيل الدخول');
            }
          } catch (error) {
            set({ isAuthenticated: false });
            throw error;
          } finally {
            set({ isLoading: false });
          }
        },

        logout: () => {
          set({ user: null, token: null, isAuthenticated: false });
        },

        register: async (userData: Partial<User>) => {
          set({ isLoading: true });
          try {
            const response = await fetch('/api/auth/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(userData),
            });

            if (response.ok) {
              const { user, token } = await response.json();
              set({ user, token, isAuthenticated: true });
            } else {
              throw new Error('فشل في إنشاء الحساب');
            }
          } catch (error) {
            throw error;
          } finally {
            set({ isLoading: false });
          }
        },

        updateProfile: async (userData: Partial<User>) => {
          const { user } = get();
          if (!user) throw new Error('المستخدم غير مسجل الدخول');

          try {
            const response = await fetch(`/api/users/${user.id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(userData),
            });

            if (response.ok) {
              const updatedUser = await response.json();
              set({ user: { ...user, ...updatedUser } });
            } else {
              throw new Error('فشل في تحديث الملف الشخصي');
            }
          } catch (error) {
            throw error;
          }
        },
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated }),
      }
    ),
    { name: 'AuthStore' }
  )
);

// ===== متجر المنتجات =====
interface ProductStore {
  products: Product[];
  categories: any[];
  selectedCategory: string | null;
  searchQuery: string;
  sortBy: 'name' | 'price' | 'popularity';
  isLoading: boolean;

  fetchProducts: (categoryId?: string) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  setCategory: (categoryId: string | null) => void;
  setSortBy: (sort: 'name' | 'price' | 'popularity') => void;
  clearProducts: () => void;
}

export const useProductStore = create<ProductStore>()(
  devtools(
    (set, get) => ({
      products: [],
      categories: [],
      selectedCategory: null,
      searchQuery: '',
      sortBy: 'name',
      isLoading: false,

      fetchProducts: async (categoryId?: string) => {
        set({ isLoading: true });
        try {
          const response = await fetch(`/api/products${categoryId ? `?category=${categoryId}` : ''}`);
          if (response.ok) {
            const products = await response.json();
            set({ products, isLoading: false });
          } else {
            throw new Error('فشل في جلب المنتجات');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      searchProducts: async (query: string) => {
        set({ isLoading: true, searchQuery: query });
        try {
          const response = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
          if (response.ok) {
            const products = await response.json();
            set({ products, isLoading: false });
          } else {
            throw new Error('فشل في البحث عن المنتجات');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      setCategory: (categoryId: string | null) => {
        set({ selectedCategory: categoryId });
        if (categoryId) {
          get().fetchProducts(categoryId);
        } else {
          get().fetchProducts();
        }
      },

      setSortBy: (sort: 'name' | 'price' | 'popularity') => {
        set({ sortBy: sort });
        // TODO: إعادة ترتيب المنتجات حسب المعيار الجديد
      },

      clearProducts: () => {
        set({ products: [], searchQuery: '' });
      },
    }),
    { name: 'ProductStore' }
  )
);

// ===== متجر سلة التسوق =====
interface CartStore {
  items: CartItem[];
  total: number;
  itemCount: number;
  isOpen: boolean;

  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  checkout: () => Promise<Order>;
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        total: 0,
        itemCount: 0,
        isOpen: false,

        addItem: (product: Product, quantity = 1) => {
          const { items } = get();
          const existingItem = items.find(item => item.productId === product.id);

          let newItems: CartItem[];
          if (existingItem) {
            newItems = items.map(item =>
              item.productId === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            const newItem: CartItem = {
              id: Date.now().toString(),
              productId: product.id,
              quantity,
              price: product.price,
              product,
            };
            newItems = [...items, newItem];
          }

          const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          set({ items: newItems, total, itemCount });
        },

        removeItem: (productId: string) => {
          const { items } = get();
          const newItems = items.filter(item => item.productId !== productId);
          const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          set({ items: newItems, total, itemCount });
        },

        updateQuantity: (productId: string, quantity: number) => {
          if (quantity <= 0) {
            get().removeItem(productId);
            return;
          }

          const { items } = get();
          const newItems = items.map(item =>
            item.productId === productId
              ? { ...item, quantity }
              : item
          );

          const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          set({ items: newItems, total, itemCount });
        },

        clearCart: () => {
          set({ items: [], total: 0, itemCount: 0 });
        },

        toggleCart: () => {
          set(state => ({ isOpen: !state.isOpen }));
        },

        checkout: async () => {
          const { items, total } = get();
          if (items.length === 0) throw new Error('السلة فارغة');

          try {
            const response = await fetch('/api/orders', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                items: items.map(item => ({
                  productId: item.productId,
                  quantity: item.quantity,
                  price: item.price,
                })),
                total,
              }),
            });

            if (response.ok) {
              const order = await response.json();
              get().clearCart();
              return order;
            } else {
              throw new Error('فشل في إتمام الطلب');
            }
          } catch (error) {
            throw error;
          }
        },
      }),
      {
        name: 'cart-storage',
        partialize: (state) => ({ items: state.items, total: state.total, itemCount: state.itemCount }),
      }
    ),
    { name: 'CartStore' }
  )
);

// ===== متجر الطلبات =====
interface OrderStore {
  orders: Order[];
  currentOrder: Order | null;
  isLoading: boolean;

  fetchOrders: () => Promise<void>;
  fetchOrderById: (id: string) => Promise<void>;
  updateOrderStatus: (id: string, status: string) => Promise<void>;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    (set) => ({
      orders: [],
      currentOrder: null,
      isLoading: false,

      fetchOrders: async () => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/orders');
          if (response.ok) {
            const orders = await response.json();
            set({ orders, isLoading: false });
          } else {
            throw new Error('فشل في جلب الطلبات');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      fetchOrderById: async (id: string) => {
        set({ isLoading: true });
        try {
          const response = await fetch(`/api/orders/${id}`);
          if (response.ok) {
            const order = await response.json();
            set({ currentOrder: order, isLoading: false });
          } else {
            throw new Error('فشل في جلب الطلب');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      updateOrderStatus: async (id: string, status: string) => {
        try {
          const response = await fetch(`/api/orders/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status }),
          });

          if (response.ok) {
            const updatedOrder = await response.json();
            set(state => ({
              orders: state.orders.map(order =>
                order.id === id ? { ...order, status } : order
              ),
              currentOrder: state.currentOrder?.id === id ? { ...state.currentOrder, status } : state.currentOrder,
            }));
          } else {
            throw new Error('فشل في تحديث حالة الطلب');
          }
        } catch (error) {
          throw error;
        }
      },
    }),
    { name: 'OrderStore' }
  )
);

// ===== متجر الإشعارات =====
interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  isLoading: boolean;

  fetchNotifications: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
}

export const useNotificationStore = create<NotificationStore>()(
  devtools(
    (set, get) => ({
      notifications: [],
      unreadCount: 0,
      isLoading: false,

      fetchNotifications: async () => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/notifications');
          if (response.ok) {
            const notifications = await response.json();
            const unreadCount = notifications.filter((n: Notification) => !n.isRead).length;
            set({ notifications, unreadCount, isLoading: false });
          } else {
            throw new Error('فشل في جلب الإشعارات');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      markAsRead: async (id: string) => {
        try {
          const response = await fetch(`/api/notifications/${id}/read`, {
            method: 'PATCH',
          });

          if (response.ok) {
            set(state => ({
              notifications: state.notifications.map(notification =>
                notification.id === id
                  ? { ...notification, isRead: true }
                  : notification
              ),
              unreadCount: Math.max(0, state.unreadCount - 1),
            }));
          } else {
            throw new Error('فشل في تحديث الإشعار');
          }
        } catch (error) {
          throw error;
        }
      },

      markAllAsRead: async () => {
        try {
          const response = await fetch('/api/notifications/read-all', {
            method: 'PATCH',
          });

          if (response.ok) {
            set(state => ({
              notifications: state.notifications.map(notification => ({
                ...notification,
                isRead: true,
              })),
              unreadCount: 0,
            }));
          } else {
            throw new Error('فشل في تحديث الإشعارات');
          }
        } catch (error) {
          throw error;
        }
      },

      addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => {
        const newNotification: Notification = {
          ...notification,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        };

        set(state => ({
          notifications: [newNotification, ...state.notifications],
          unreadCount: !notification.isRead ? state.unreadCount + 1 : state.unreadCount,
        }));
      },
    }),
    { name: 'NotificationStore' }
  )
);

// ===== متجر الإعدادات =====
interface SettingsStore {
  language: string;
  currency: string;
  theme: 'light' | 'dark' | 'auto';
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };

  setLanguage: (language: string) => void;
  setCurrency: (currency: string) => void;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  updateNotificationSettings: (settings: Partial<SettingsStore['notifications']>) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  devtools(
    persist(
      (set) => ({
        language: 'ar',
        currency: 'SAR',
        theme: 'auto',
        notifications: {
          email: true,
          push: true,
          sms: false,
        },

        setLanguage: (language: string) => set({ language }),
        setCurrency: (currency: string) => set({ currency }),
        setTheme: (theme: 'light' | 'dark' | 'auto') => set({ theme }),
        updateNotificationSettings: (settings) =>
          set(state => ({
            notifications: { ...state.notifications, ...settings },
          })),
      }),
      {
        name: 'settings-storage',
      }
    ),
    { name: 'SettingsStore' }
  )
);
