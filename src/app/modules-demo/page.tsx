'use client';

import { useState } from 'react';
import {
  LoginForm,
  ProductCard,
  OrderCard,
  CustomerCard,
  InventoryItem,
  SupplierCard,
  TransactionCard,
  EmployeeCard,
  CampaignCard,
  Header,
  MobileNavigation,
  Sidebar,
  TikTokStaggerContainer,
  TikTokPageTransition,
} from '../../components';
import { Card } from '../../components/ui/card';

export default function ModulesDemoPage() {
  const [currentTab, setCurrentTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('dashboard');

  // Sample data for demo
  const demoProducts = [
    {
      id: '1',
      name: 'عطر شانيل نمبر 5',
      description: 'عطر كلاسيكي فاخر',
      price: 299,
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&h=300&fit=crop',
      category: 'عطور نسائية',
      stock: 15,
      rating: 4.8,
      isFeatured: true,
    },
  ];

  const demoOrders = [
    {
      id: '1',
      orderNumber: 'ORD-001',
      customerName: 'أحمد محمد',
      customerPhone: '+966501234567',
      total: 299,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
      items: [
        { name: 'عطر شانيل نمبر 5', quantity: 1, price: 299 },
      ],
    },
  ];

  const demoCustomers = [
    {
      id: '1',
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      phone: '+966501234567',
      totalOrders: 5,
      totalSpent: 1250,
      loyaltyPoints: 250,
      tier: 'gold' as const,
      joinDate: new Date().toISOString(),
    },
  ];

  const demoInventory = [
    {
      id: '1',
      productName: 'عطر شانيل نمبر 5',
      sku: 'CHN-005-100',
      currentStock: 15,
      minStock: 5,
      maxStock: 50,
      location: 'المستودع الرئيسي - رف A1',
      expiryDate: '2025-12-31',
      condition: 'new' as const,
      lastUpdated: new Date().toISOString(),
    },
  ];

  const demoSuppliers = [
    {
      id: '1',
      name: 'شركة العطور الفرنسية',
      contact: 'جان بيير',
      email: 'contact@frenchperfume.com',
      phone: '+33123456789',
      address: 'باريس، فرنسا',
      rating: 4.8,
      totalOrders: 25,
      totalSpent: 15000,
      status: 'active' as const,
      joinDate: new Date().toISOString(),
    },
  ];

  const demoTransactions = [
    {
      id: '1',
      type: 'income' as const,
      amount: 299,
      description: 'بيع عطر شانيل نمبر 5',
      category: 'مبيعات',
      date: new Date().toISOString(),
      reference: 'ORD-001',
      account: 'حساب المبيعات',
    },
  ];

  const demoEmployees = [
    {
      id: '1',
      name: 'فاطمة أحمد',
      position: 'مديرة المبيعات',
      department: 'المبيعات',
      email: 'fatima@perfumestore.com',
      phone: '+966507654321',
      hireDate: new Date().toISOString(),
      salary: 8000,
      status: 'active' as const,
    },
  ];

  const demoCampaigns = [
    {
      id: '1',
      name: 'حملة عيد الأم',
      type: 'social' as const,
      status: 'active' as const,
      budget: 5000,
      spent: 3200,
      metrics: {
        impressions: 15000,
        clicks: 450,
        conversions: 23,
        ctr: 3.0,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header
        title="عرض المكونات المنظمة"
        subtitle="تجريب جميع المكونات المصنفة حسب الوحدات"
        onMenuClick={() => setSidebarOpen(true)}
      />

      {/* Main Content */}
      <TikTokPageTransition>
        <div className="p-6 pb-20">
          <TikTokStaggerContainer className="space-y-8">
            {/* Authentication Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🔐 مكونات المصادقة
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">نموذج تسجيل الدخول</h3>
                  <LoginForm
                    onSubmit={async (data: { email: string; password: string }) => { console.log('Login:', data); await new Promise(resolve => setTimeout(resolve, 1000)); }}
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">نموذج إنشاء الحساب</h3>
                  <LoginForm
                    onSubmit={(data) => console.log('Register:', data)}
                  />
                </div>
              </div>
            </section>

            {/* Products Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🛍️ مكونات المنتجات
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onEdit={() => console.log('Edit product:', product.id)}
                    onDelete={() => console.log('Delete product:', product.id)}
                    onAddToCart={() => console.log('Add to cart:', product.id)}
                  />
                ))}
              </div>
            </section>

            {/* Orders Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📦 مكونات الطلبات
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    onView={() => console.log('View order:', order.id)}
                    onUpdateStatus={(status) => console.log('Update status:', status)}
                  />
                ))}
              </div>
            </section>

            {/* Customers Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                👥 مكونات العملاء
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoCustomers.map((customer) => (
                  <CustomerCard
                    key={customer.id}
                    customer={customer}
                    onView={() => console.log('View customer:', customer.id)}
                    onEdit={() => console.log('Edit customer:', customer.id)}
                  />
                ))}
              </div>
            </section>

            {/* Inventory Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📦 مكونات المخزون
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoInventory.map((item) => (
                  <InventoryItem
                    key={item.id}
                    item={item}
                    onAdjust={() => console.log('Adjust inventory:', item.id)}
                    onTransfer={() => console.log('Transfer inventory:', item.id)}
                  />
                ))}
              </div>
            </section>

            {/* Suppliers Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🏢 مكونات الموردين
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoSuppliers.map((supplier) => (
                  <SupplierCard
                    key={supplier.id}
                    supplier={supplier}
                    onView={() => console.log('View supplier:', supplier.id)}
                    onEdit={() => console.log('Edit supplier:', supplier.id)}
                  />
                ))}
              </div>
            </section>

            {/* Accounting Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                💰 مكونات المحاسبة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoTransactions.map((transaction) => (
                  <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                    onView={() => console.log('View transaction:', transaction.id)}
                    onEdit={() => console.log('Edit transaction:', transaction.id)}
                  />
                ))}
              </div>
            </section>

            {/* HR Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                👨‍💼 مكونات الموارد البشرية
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoEmployees.map((employee) => (
                  <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    onView={() => console.log('View employee:', employee.id)}
                    onEdit={() => console.log('Edit employee:', employee.id)}
                  />
                ))}
              </div>
            </section>

            {/* Marketing Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📢 مكونات التسويق
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoCampaigns.map((campaign) => (
                  <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    onView={() => console.log('View campaign:', campaign.id)}
                    onEdit={() => console.log('Edit campaign:', campaign.id)}
                  />
                ))}
              </div>
            </section>

            {/* Analytics Module */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📊 مكونات التحليلات
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">150,000</div>
                  <div className="text-sm text-gray-600 mb-2">إجمالي الإيرادات</div>
                  <div className="text-sm text-green-600 font-medium">↗ +12.5%</div>
                </Card>

                <Card className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,250</div>
                  <div className="text-sm text-gray-600 mb-2">إجمالي الطلبات</div>
                  <div className="text-sm text-green-600 font-medium">↗ +8.3%</div>
                </Card>

                <Card className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">890</div>
                  <div className="text-sm text-gray-600 mb-2">إجمالي العملاء</div>
                  <div className="text-sm text-green-600 font-medium">↗ +15.2%</div>
                </Card>

                <Card className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">3.2%</div>
                  <div className="text-sm text-gray-600 mb-2">معدل التحويل</div>
                  <div className="text-sm text-red-600 font-medium">↘ -2.1%</div>
                </Card>
              </div>
            </section>
          </TikTokStaggerContainer>
        </div>
      </TikTokPageTransition>

      {/* Mobile Navigation */}
      <MobileNavigation
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
    </div>
  );
}
