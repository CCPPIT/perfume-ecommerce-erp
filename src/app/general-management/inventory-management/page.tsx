'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Download,
  Upload,
  Settings,
  RefreshCw,
  Archive,
  Truck,
  MapPin,
  Calendar,
  DollarSign,
  Activity,
  Target,
  Award,
  Users,
  Building2,
  Globe,
  Zap
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function InventoryManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'stock', label: 'المخزون', icon: Package },
    { id: 'movements', label: 'الحركات', icon: Truck },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'alerts', label: 'التنبيهات', icon: AlertTriangle },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <SidebarLayout
      currentSection="inventory-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Package className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">إدارة المخزون</h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  نظام شامل لإدارة ومراقبة المخزون وضمان توفر المواد بالكميات والجودة المطلوبة
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">إجمالي الأصناف</span>
                    </div>
                    <div className="text-2xl font-bold">2,847 صنف</div>
                    <div className="text-sm text-blue-200">نشط في المخزون</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">نقص المخزون</span>
                    </div>
                    <div className="text-2xl font-bold">23 صنف</div>
                    <div className="text-sm text-blue-200">يحتاج إعادة طلب</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">قيمة المخزون</span>
                    </div>
                    <div className="text-2xl font-bold">8.5M ريال</div>
                    <div className="text-sm text-blue-200">إجمالي القيمة</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">الحركات اليومية</span>
                    </div>
                    <div className="text-2xl font-bold">156 حركة</div>
                    <div className="text-sm text-blue-200">دخول وخروج</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة صنف جديد
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  جرد شامل
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  تقرير المخزون
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
                  {tab.id === 'alerts' && (
                    <TikTokBadge variant="error" size="sm">23</TikTokBadge>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && <InventoryOverviewTab />}
          {activeTab === 'stock' && <StockManagementTab />}
          {activeTab === 'movements' && <MovementsTab />}
          {activeTab === 'reports' && <InventoryReportsTab />}
          {activeTab === 'alerts' && <AlertsTab />}
          {activeTab === 'settings' && <InventorySettingsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Inventory Overview Tab Component
function InventoryOverviewTab() {
  const inventoryStats = [
    {
      title: 'إجمالي الأصناف',
      value: '2,847 صنف',
      change: '+156 هذا الشهر',
      trend: 'up',
      icon: Package,
      color: 'blue'
    },
    {
      title: 'قيمة المخزون',
      value: '8.5M ريال',
      change: '+12% نمو',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'نقص المخزون',
      value: '23 صنف',
      change: '-5 أصناف',
      trend: 'down',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'دوران المخزون',
      value: '4.2 مرات',
      change: '+0.3 تحسن',
      trend: 'up',
      icon: RefreshCw,
      color: 'purple'
    }
  ];

  const lowStockItems = [
    {
      name: 'حبر طابعة ليزر أسود',
      code: 'INK-LZR-001',
      currentStock: 5,
      minStock: 20,
      supplier: 'شركة التوريدات المحدودة',
      lastOrder: '2024-01-10'
    },
    {
      name: 'ورق طباعة A4',
      code: 'PPR-A4-001',
      currentStock: 12,
      minStock: 50,
      supplier: 'مؤسسة المواد المكتبية',
      lastOrder: '2024-01-08'
    },
    {
      name: 'بطاريات AA',
      code: 'BAT-AA-001',
      currentStock: 8,
      minStock: 30,
      supplier: 'شركة الإلكترونيات',
      lastOrder: '2024-01-05'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Inventory Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventoryStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800' :
                'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'red' ? 'text-red-600 dark:text-red-400' :
                    'text-purple-600 dark:text-purple-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'red' ? 'text-red-900 dark:text-red-100' :
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
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                  'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'red' ? 'text-red-600' :
                    'text-purple-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Low Stock Alerts and Inventory Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Low Stock Items */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            تنبيهات نقص المخزون
          </h3>

          <div className="space-y-4">
            {lowStockItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>الكود: {item.code}</span>
                    <span>•</span>
                    <span>المورد: {item.supplier}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">
                      المخزون الحالي: {item.currentStock} / {item.minStock}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      آخر طلب: {formatDate(item.lastOrder)}
                    </span>
                  </div>
                </div>

                <TikTokButton size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  طلب توريد
                </TikTokButton>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Inventory Distribution */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            توزيع المخزون حسب الفئات
          </h3>

          <div className="space-y-6">
            {[
              { category: 'المواد المكتبية', count: 456, percentage: 16, value: '1.2M ريال' },
              { category: 'المعدات التقنية', count: 234, percentage: 8, value: '3.4M ريال' },
              { category: 'الأثاث والتجهيزات', count: 189, percentage: 7, value: '2.1M ريال' },
              { category: 'المواد الاستهلاكية', count: 892, percentage: 31, value: '890K ريال' },
              { category: 'الأدوات والمعدات', count: 567, percentage: 20, value: '1.8M ريال' }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{category.category}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 dark:text-white">{category.count}</span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{category.value}</div>
                  </div>
                </div>

                <TikTokProgress value={category.percentage} max={35} className="h-3" />
                <div className="text-sm text-gray-600 dark:text-gray-400 text-right">
                  {category.percentage}% من إجمالي المخزون
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Inventory Performance Metrics */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          مؤشرات أداء المخزون
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'دوران المخزون',
              value: '4.2 مرات',
              target: '5 مرات',
              status: 'جيد',
              description: 'عدد مرات بيع وإعادة شراء المخزون'
            },
            {
              title: 'فترة بقاء المخزون',
              value: '87 يوم',
              target: '75 يوم',
              status: 'يحتاج تحسين',
              description: 'متوسط الوقت الذي يبقى فيه الصنف في المخزون'
            },
            {
              title: 'نسبة الفاقد',
              value: '2.3%',
              target: '2%',
              status: 'ممتاز',
              description: 'نسبة الفاقد والتالف من إجمالي المخزون'
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                الهدف: {metric.target}
              </div>
              <TikTokBadge className={
                metric.status === 'ممتاز' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                metric.status === 'جيد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              }>
                {metric.status}
              </TikTokBadge>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </TikTokCard>
    </div>
  );
}

// Stock Management Tab Component
function StockManagementTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Package className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المخزون والأصناف
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع الأصناف في المخزون مع تتبع الكميات والحركات والتنبيهات
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إضافة صنف جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Movements Tab Component
function MovementsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Truck className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          حركات المخزون والنقل
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تتبع جميع حركات المخزون من الدخول والخروج والنقل بين المستودعات
        </p>
        <TikTokButton size="lg" variant="outline">
          <Plus className="w-5 h-5 mr-2" />
          حركة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Inventory Reports Tab Component
function InventoryReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير المخزون والجرد
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة عن حالة المخزون والجرد الدوري مع تحليلات شاملة
        </p>
        <TikTokButton size="lg">
          <Download className="w-5 h-5 mr-2" />
          تصدير تقرير الجرد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Alerts Tab Component
function AlertsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تنبيهات وإشعارات المخزون
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          مراقبة مستمرة للمخزون مع تنبيهات فورية للحالات الطارئة والنقص
        </p>
        <TikTokBadge variant="error" size="lg">23 تنبيه نشط</TikTokBadge>
      </div>
    </TikTokCard>
  );
}

// Inventory Settings Tab Component
function InventorySettingsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Settings className="w-20 h-20 text-gray-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إعدادات إدارة المخزون
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات نظام إدارة المخزون والتنبيهات والتفضيلات المختلفة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
