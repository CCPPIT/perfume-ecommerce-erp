'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Handshake,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Download,
  Upload,
  Settings,
  Target,
  Users,
  Calendar,
  DollarSign,
  Activity,
  Award,
  CheckCircle,
  Clock,
  Globe,
  Zap,
  Lightbulb,
  Heart,
  Share2,
  Mail,
  Phone,
  Monitor,
  Smartphone,
  Tablet,
  Star,
  ThumbsUp,
  MessageSquare,
  HeartHandshake,
  Rocket,
  PieChart,
  LineChart,
  Receipt,
  ShoppingBag,
  CreditCard,
  Calculator,
  Gift,
  Percent,
  Trophy,
  Package
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function SalesManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'orders', label: 'الطلبات', icon: ShoppingBag },
    { id: 'customers', label: 'العملاء', icon: Users },
    { id: 'products', label: 'المنتجات', icon: Package },
    { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
    { id: 'reports', label: 'التقارير', icon: PieChart }
  ];

  return (
    <SidebarLayout
      currentSection="sales-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Handshake className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">إدارة المبيعات</h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  نظام شامل لإدارة عمليات البيع وتعزيز العلاقات مع العملاء وزيادة الإيرادات
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingBag className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">إجمالي الطلبات</span>
                    </div>
                    <div className="text-2xl font-bold">2,847 طلب</div>
                    <div className="text-sm text-blue-200">هذا الشهر</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">إجمالي الإيرادات</span>
                    </div>
                    <div className="text-2xl font-bold">15.7M ريال</div>
                    <div className="text-sm text-blue-200">+12% نمو</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">العملاء النشطين</span>
                    </div>
                    <div className="text-2xl font-bold">1,234 عميل</div>
                    <div className="text-sm text-blue-200">+8% نمو</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">معدل التحويل</span>
                    </div>
                    <div className="text-2xl font-bold">23.4%</div>
                    <div className="text-sm text-blue-200">+3.2% تحسن</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Plus className="w-4 h-4 mr-2" />
                  طلب بيع جديد
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  تقرير المبيعات
                </TikTokButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && <SalesOverviewTab />}
          {activeTab === 'orders' && <OrdersTab />}
          {activeTab === 'customers' && <CustomersTab />}
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'analytics' && <SalesAnalyticsTab />}
          {activeTab === 'reports' && <SalesReportsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Sales Overview Tab Component
function SalesOverviewTab() {
  const salesStats = [
    {
      title: 'إجمالي المبيعات',
      value: '15,750,000 ريال',
      change: '+12%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'عدد الطلبات',
      value: '2,847 طلب',
      change: '+8%',
      trend: 'up',
      icon: ShoppingBag,
      color: 'blue'
    },
    {
      title: 'قيمة الطلب المتوسط',
      value: '5,534 ريال',
      change: '+4%',
      trend: 'up',
      icon: Calculator,
      color: 'purple'
    },
    {
      title: 'معدل رضا العملاء',
      value: '94%',
      change: '+2%',
      trend: 'up',
      icon: Heart,
      color: 'pink'
    }
  ];

  const topProducts = [
    {
      name: 'عطر فرنسي فاخر',
      sales: '2,340,000 ريال',
      orders: 234,
      growth: '+15%'
    },
    {
      name: 'عطر شرقي تقليدي',
      sales: '1,890,000 ريال',
      orders: 189,
      growth: '+22%'
    },
    {
      name: 'عطر حديث معاصر',
      sales: '1,560,000 ريال',
      orders: 156,
      growth: '+8%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Sales Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                stat.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800' :
                'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-200 dark:border-pink-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-pink-600 dark:text-pink-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    stat.color === 'purple' ? 'text-purple-900 dark:text-purple-100' :
                    'text-pink-900 dark:text-pink-100'
                  } mt-2`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-1 ${
                    stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-pink-100 dark:bg-pink-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-pink-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Top Products and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Performing Products */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            أفضل المنتجات أداءً
          </h3>

          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{product.orders} طلب</span>
                    <span>•</span>
                    <span className="text-green-600 dark:text-green-400">{product.growth}</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {product.sales}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Recent Orders */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            الطلبات الأخيرة
          </h3>

          <div className="space-y-4">
            {[
              {
                id: 'ORD-2024-001',
                customer: 'أحمد محمد علي',
                amount: '1,250 ريال',
                status: 'مكتمل',
                date: '2024-01-15'
              },
              {
                id: 'ORD-2024-002',
                customer: 'فاطمة أحمد حسن',
                amount: '890 ريال',
                status: 'قيد التجهيز',
                date: '2024-01-14'
              },
              {
                id: 'ORD-2024-003',
                customer: 'محمد حسن علي',
                amount: '2,100 ريال',
                status: 'مكتمل',
                date: '2024-01-13'
              }
            ].map((order, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </p>
                    <TikTokBadge className={
                      order.status === 'مكتمل' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }>
                      {order.status}
                    </TikTokBadge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {order.customer}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {order.amount}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(order.date)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Sales Performance Chart */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          أداء المبيعات الشهري
        </h3>

        <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              سيتم عرض الرسم البياني التفاعلي قريباً
            </p>
          </div>
        </div>
      </TikTokCard>
    </div>
  );
}

// Orders Tab Component
function OrdersTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <ShoppingBag className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الطلبات والمبيعات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع الطلبات من الاستلام وحتى التسليم والمتابعة
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          طلب بيع جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Customers Tab Component
function CustomersTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Users className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة العملاء والعلاقات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          بناء وتعزيز العلاقات مع العملاء وتحسين تجربة الخدمة والدعم
        </p>
        <TikTokButton size="lg" variant="outline">
          <Users className="w-5 h-5 mr-2" />
          عرض جميع العملاء
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Products Tab Component
function ProductsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Package className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المنتجات والخدمات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إدارة شاملة لجميع المنتجات والخدمات مع تتبع المخزون والأسعار
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إضافة منتج جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Sales Analytics Tab Component
function SalesAnalyticsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التحليلات والإحصائيات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تحليلات متقدمة وإحصائيات مفصلة لقياس أداء المبيعات والتنبؤ بالاتجاهات
        </p>
        <TikTokButton size="lg" variant="outline">
          <BarChart3 className="w-5 h-5 mr-2" />
          عرض التحليلات المفصلة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Sales Reports Tab Component
function SalesReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <PieChart className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير المبيعات الشاملة
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة وشاملة عن أداء المبيعات مع التحليلات والتوصيات
        </p>
        <TikTokButton size="lg">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير الشامل
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
