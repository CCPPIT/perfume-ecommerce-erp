'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Users,
  TrendingUp,
  FileText,
  Settings,
  Calendar,
  DollarSign,
  Activity,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Package,
  Truck,
  Receipt,
  Plus,
  Download,
  Upload,
  Eye,
  Filter,
  Search,
  Edit,
  Trash2,
  MoreVertical
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function ProcurementManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'purchase-orders', label: 'طلبات الشراء', icon: ShoppingCart },
    { id: 'suppliers', label: 'الموردين', icon: Users },
    { id: 'contracts', label: 'العقود', icon: FileText },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <SidebarLayout
      currentSection="procurement-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <ShoppingCart className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">إدارة المشتريات</h1>
                <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
                  نظام شامل لإدارة عمليات الشراء والتوريد وضمان الكفاءة والفعالية في التوريد
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">طلبات الشراء</span>
                    </div>
                    <div className="text-2xl font-bold">247 طلب</div>
                    <div className="text-sm text-emerald-200">هذا الشهر</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">الموردين النشطين</span>
                    </div>
                    <div className="text-2xl font-bold">89 مورد</div>
                    <div className="text-sm text-emerald-200">معتمدين</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">قيمة المشتريات</span>
                    </div>
                    <div className="text-2xl font-bold">12.5M ريال</div>
                    <div className="text-sm text-emerald-200">هذا الشهر</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">نسبة التنفيذ</span>
                    </div>
                    <div className="text-2xl font-bold">94%</div>
                    <div className="text-sm text-emerald-200">في الوقت المحدد</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Plus className="w-4 h-4 mr-2" />
                  طلب شراء جديد
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  تقرير المشتريات
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
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
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
          {activeTab === 'overview' && <ProcurementOverviewTab />}
          {activeTab === 'purchase-orders' && <PurchaseOrdersTab />}
          {activeTab === 'suppliers' && <SuppliersTab />}
          {activeTab === 'contracts' && <ContractsTab />}
          {activeTab === 'reports' && <ProcurementReportsTab />}
          {activeTab === 'settings' && <ProcurementSettingsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Procurement Overview Tab Component
function ProcurementOverviewTab() {
  const procurementStats = [
    {
      title: 'طلبات الشراء المعتمدة',
      value: '234 طلب',
      change: '+12% هذا الشهر',
      trend: 'up',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'طلبات قيد المراجعة',
      value: '13 طلب',
      change: '-3 طلبات',
      trend: 'down',
      icon: Clock,
      color: 'yellow'
    },
    {
      title: 'متوسط وقت المعالجة',
      value: '3.2 أيام',
      change: '-0.5 يوم',
      trend: 'down',
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'توفير في التكاليف',
      value: '8.7%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const recentOrders = [
    {
      id: 'PO-2024-001',
      supplier: 'شركة التوريدات المحدودة',
      amount: '450,000 ريال',
      status: 'معتمد',
      items: 12,
      date: '2024-01-15'
    },
    {
      id: 'PO-2024-002',
      supplier: 'مؤسسة المعدات التقنية',
      amount: '280,000 ريال',
      status: 'قيد المراجعة',
      items: 8,
      date: '2024-01-14'
    },
    {
      id: 'PO-2024-003',
      supplier: 'شركة المواد المكتبية',
      amount: '95,000 ريال',
      status: 'معتمد',
      items: 25,
      date: '2024-01-13'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Procurement Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {procurementStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800' :
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    'text-purple-600 dark:text-purple-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'yellow' ? 'text-yellow-900 dark:text-yellow-100' :
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    'text-purple-900 dark:text-purple-100'
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
                  stat.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    'text-purple-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders and Supplier Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Purchase Orders */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            طلبات الشراء الأخيرة
          </h3>

          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-emerald-600" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </p>
                    <TikTokBadge className={
                      order.status === 'معتمد' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }>
                      {order.status}
                    </TikTokBadge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {order.supplier}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{order.items} صنف</span>
                    <span>•</span>
                    <span>{formatDate(order.date)}</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {order.amount}
                  </p>
                  <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Supplier Performance */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            أداء الموردين الرئيسيين
          </h3>

          <div className="space-y-6">
            {[
              { name: 'شركة التوريدات المحدودة', performance: 94, orders: 45, onTime: 92 },
              { name: 'مؤسسة المعدات التقنية', performance: 89, orders: 32, onTime: 87 },
              { name: 'شركة المواد المكتبية', performance: 96, orders: 28, onTime: 94 },
              { name: 'مؤسسة الخدمات اللوجستية', performance: 91, orders: 19, onTime: 89 }
            ].map((supplier, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{supplier.name}</span>
                  <div className="text-right">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                      {supplier.performance}%
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {supplier.orders} طلب
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">الأداء العام:</span>
                    <TikTokProgress value={supplier.performance} max={100} className="h-2 mt-1" />
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">التسليم في الوقت:</span>
                    <TikTokProgress value={supplier.onTime} max={100} className="h-2 mt-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Procurement Process Overview */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          سير عمل المشتريات
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'طلب الشراء',
              description: 'تقديم طلب الشراء من قبل الإدارات',
              count: '247 طلب',
              status: 'نشط'
            },
            {
              step: '2',
              title: 'المراجعة والموافقة',
              description: 'مراجعة الطلب واعتماد الميزانية',
              count: '13 طلب',
              status: 'قيد المراجعة'
            },
            {
              step: '3',
              title: 'التفاوض والتعاقد',
              description: 'التفاوض مع الموردين وإبرام العقود',
              count: '8 عقد',
              status: 'قيد التفاوض'
            },
            {
              step: '4',
              title: 'التنفيذ والتسليم',
              description: 'تنفيذ الطلب وتسليم المواد المطلوبة',
              count: '234 طلب',
              status: 'منفذ'
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="font-bold text-emerald-600">{process.step}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {process.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {process.description}
                  </p>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {process.count}
                  </div>
                  <TikTokBadge className={
                    process.status === 'نشط' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    process.status === 'قيد المراجعة' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    process.status === 'قيد التفاوض' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                  }>
                    {process.status}
                  </TikTokBadge>
                </div>
              </div>

              {index < 3 && (
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </TikTokCard>
    </div>
  );
}

// Purchase Orders Tab Component
function PurchaseOrdersTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <ShoppingCart className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة طلبات الشراء
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام متكامل لإدارة جميع طلبات الشراء من التقديم وحتى التنفيذ والتسليم
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          طلب شراء جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Suppliers Tab Component
function SuppliersTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Users className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الموردين
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إدارة شاملة لقاعدة الموردين وتقييم أدائهم وتطوير العلاقات التجارية
        </p>
        <TikTokButton size="lg" variant="outline">
          <UserPlus className="w-5 h-5 mr-2" />
          إضافة مورد جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Contracts Tab Component
function ContractsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <FileText className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة العقود والتعاقدات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إدارة شاملة لجميع العقود والتعاقدات مع الموردين والشركاء التجاريين
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          عقد جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Procurement Reports Tab Component
function ProcurementReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير المشتريات والتوريد
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة عن أداء المشتريات والتوريد مع تحليلات متقدمة ورسوم بيانية
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير الشامل
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Procurement Settings Tab Component
function ProcurementSettingsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Settings className="w-20 h-20 text-gray-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إعدادات المشتريات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات نظام المشتريات والتفضيلات والصلاحيات والتكوينات المختلفة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
