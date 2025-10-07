// صفحة إدارة المنتجات والعطور المتقدمة - نظام شامل لإدارة جميع جوانب صناعة العطور

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Award,
  Target,
  Activity,
  BarChart3,
  Settings,
  Eye,
  Edit,
  Plus,
  Download,
  Upload,
  Filter,
  Search,
  Clock,
  Star,
  Zap,
  Shield,
  Wind,
  Beaker,
  Palette,
  Layers,
  Gem,
  Sparkles,
  TreePine,
  Droplets,
  Flame,
  Car,
  Heart,
  Crown,
  Globe,
  Factory,
  TestTube,
  Microscope,
  Calculator,
  FileText,
  Truck,
  Warehouse,
  Thermometer,
  Calendar,
  Recycle,
  ShoppingCart,
  Tag,
  Camera,
  Wrench,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  AlertCircle
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokCard, TikTokInput, TikTokProgress, TikTokModal } from '@/components/ui/TikTokComponents';
import { AdvancedSidebar } from '@/components/modules/general-management/AdvancedSidebar';

export default function PerfumeManagementPage() {
  const [currentCategory, setCurrentCategory] = useState('perfume-management');
  const [currentDepartment, setCurrentDepartment] = useState('نظام إدارة المنتجات العطرية المتقدم');
  const [activeTab, setActiveTab] = useState('overview');

  // تنظيم الأقسام الفرعية في مجموعات رئيسية
  const perfumeManagementCategories = {
    'إدارة العطور الأساسية': [
      'إدارة العطور الرجالية',
      'إدارة العطور النسائية',
      'إدارة العطور الشرقية',
      'إدارة العطور الغربية',
      'إدارة عطور النيش الفاخرة'
    ],
    'إدارة المكونات والمواد': [
      'إدارة الزيوت العطرية',
      'إدارة خلطات العطور',
      'إدارة المكونات العطرية',
      'إدارة الكحول العطري',
      'إدارة الروائح الأساسية',
      'إدارة الروائح الوسطى',
      'إدارة الروائح القاعدية'
    ],
    'إدارة المنتجات المتخصصة': [
      'إدارة عطور السيارات',
      'إدارة بخور ومعطرات الجو',
      'إدارة عطور الجسم',
      'إدارة العبوات',
      'إدارة أغطية الزجاجات',
      'إدارة الرشاشات',
      'إدارة التغليف'
    ],
    'إدارة التصميم والعلامات': [
      'إدارة العلامات والباركود',
      'إدارة تصاميم الزجاجات',
      'إدارة الألوان والشفافية',
      'إدارة تصميم الملصقات',
      'إدارة العبوات المميزة'
    ],
    'إدارة التصنيع والإنتاج': [
      'إدارة التصنيع اليدوي',
      'إدارة الإنتاج الآلي',
      'إدارة خط الإنتاج',
      'إدارة مراقبة الجودة التلقائية',
      'إدارة خطوط الإنتاج الفرعية'
    ],
    'إدارة الجودة والاختبار': [
      'إدارة اختبارات الجودة',
      'إدارة العينات المجانية',
      'إدارة درجات التبخر',
      'إدارة ثبات الرائحة',
      'إدارة اختبار الروائح التلقائي'
    ],
    'إدارة التخزين والتوريد': [
      'إدارة المواد الخام',
      'إدارة الموردين للمواد الخام',
      'إدارة المستودعات العطرية',
      'إدارة درجات الحرارة في التخزين',
      'إدارة تواريخ الانتهاء'
    ],
    'إدارة التطوير والابتكار': [
      'إدارة تطوير العطور الجديدة',
      'إدارة الوصفات',
      'إدارة التجارب العطرية',
      'إدارة الاختبار الحسي',
      'إدارة قسم الإبداع العطري'
    ],
    'إدارة العمليات والتكاليف': [
      'إدارة تكاليف التصنيع',
      'إدارة تكاليف المواد',
      'إدارة تحليل تكلفة المنتج',
      'إدارة كفاءة التصنيع',
      'إدارة التنبؤ بالإنتاج'
    ],
    'إدارة التسويق والمبيعات': [
      'إدارة الأنواع حسب الفئة السعرية',
      'إدارة العطور الموسمية',
      'إدارة الإصدارات المحدودة',
      'إدارة الحملات على العطور',
      'إدارة تقييمات العملاء'
    ]
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'categories', label: 'الفئات الرئيسية', icon: Package },
    { id: 'subcategories', label: 'الأقسام الفرعية', icon: Layers },
    { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <AdvancedSidebar
        currentCategory={currentCategory}
        currentDepartment={currentDepartment}
        onCategoryChange={setCurrentCategory}
        onDepartmentChange={setCurrentDepartment}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  نظام إدارة المنتجات العطرية المتقدم
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  إدارة شاملة لجميع جوانب صناعة العطور • 100 قسم متخصص لإدارة متكاملة
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <TikTokButton variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                تصدير البيانات
              </TikTokButton>
              <TikTokButton size="sm">
                <Plus className="w-4 h-4 mr-2" />
                قسم جديد
              </TikTokButton>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-6">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600 dark:text-purple-400'
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
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && <PerfumeManagementOverviewTab />}
          {activeTab === 'categories' && <CategoriesTab />}
          {activeTab === 'subcategories' && <SubcategoriesTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  );
}

// نظرة عامة على نظام إدارة المنتجات العطرية
function PerfumeManagementOverviewTab() {
  const systemStats = [
    {
      title: 'إجمالي الأقسام الفرعية',
      value: '100 قسم',
      change: '+15 هذا الشهر',
      trend: 'up',
      icon: Layers,
      color: 'purple'
    },
    {
      title: 'الفئات الرئيسية',
      value: '10 فئات',
      change: '+2',
      trend: 'up',
      icon: Package,
      color: 'blue'
    },
    {
      title: 'المنتجات النشطة',
      value: '2,847 منتج',
      change: '+234',
      trend: 'up',
      icon: Activity,
      color: 'green'
    },
    {
      title: 'مؤشر الكفاءة',
      value: '94.8%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'yellow'
    }
  ];

  const mainCategories = [
    {
      title: 'إدارة العطور الأساسية',
      count: '5 أقسام',
      icon: Package,
      color: 'purple',
      items: ['العطور الرجالية', 'العطور النسائية', 'العطور الشرقية', 'العطور الغربية', 'عطور النيش']
    },
    {
      title: 'إدارة المكونات والمواد',
      count: '7 أقسام',
      icon: Beaker,
      color: 'blue',
      items: ['الزيوت العطرية', 'خلطات العطور', 'المكونات العطرية', 'الكحول العطري', 'الروائح الأساسية']
    },
    {
      title: 'إدارة التصنيع والجودة',
      count: '15 قسم',
      icon: Factory,
      color: 'green',
      items: ['التصنيع اليدوي', 'الإنتاج الآلي', 'اختبارات الجودة', 'مراقبة الجودة', 'خطوط الإنتاج']
    },
    {
      title: 'إدارة التخزين والتوريد',
      count: '8 أقسام',
      icon: Warehouse,
      color: 'orange',
      items: ['المستودعات', 'التخزين', 'المواد الخام', 'الموردين', 'التوزيع']
    }
  ];

  return (
    <div className="space-y-8">
      {/* System Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800' :
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'purple' ? 'text-purple-900 dark:text-purple-100' :
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    'text-yellow-900 dark:text-yellow-100'
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
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'purple' ? 'text-purple-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    'text-yellow-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mainCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl border-2 ${
                category.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800' :
                category.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                category.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  category.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  category.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  category.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  'bg-orange-100 dark:bg-orange-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    category.color === 'purple' ? 'text-purple-600' :
                    category.color === 'blue' ? 'text-blue-600' :
                    category.color === 'green' ? 'text-green-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${
                    category.color === 'purple' ? 'text-purple-900 dark:text-purple-100' :
                    category.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    category.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    'text-orange-900 dark:text-orange-100'
                  }`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm ${
                    category.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    category.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    category.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`}>
                    {category.count}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      category.color === 'purple' ? 'bg-purple-400' :
                      category.color === 'blue' ? 'bg-blue-400' :
                      category.color === 'green' ? 'bg-green-400' :
                      'bg-orange-400'
                    }`} />
                    <span className={`text-sm ${
                      category.color === 'purple' ? 'text-purple-700 dark:text-purple-300' :
                      category.color === 'blue' ? 'text-blue-700 dark:text-blue-300' :
                      category.color === 'green' ? 'text-green-700 dark:text-green-300' :
                      'text-orange-700 dark:text-orange-300'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* System Status and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* System Status */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            حالة النظام العطري
          </h3>

          <div className="space-y-4">
            {[
              { component: 'محرك قاعدة البيانات', status: 'نشط', performance: 98, color: 'green' },
              { component: 'نظام إدارة المخزون', status: 'نشط', performance: 95, color: 'green' },
              { component: 'نظام مراقبة الجودة', status: 'نشط', performance: 92, color: 'green' },
              { component: 'نظام إدارة الموردين', status: 'تحذير', performance: 87, color: 'yellow' },
              { component: 'نظام التتبع والتعقب', status: 'نشط', performance: 96, color: 'green' }
            ].map((component, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    component.color === 'green' ? 'bg-green-500' :
                    component.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {component.component}
                    </p>
                    <p className={`text-sm ${
                      component.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      component.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {component.status}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {component.performance}%
                  </p>
                  <TikTokProgress value={component.performance} max={100} className="w-16 h-2 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Performance Metrics */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مؤشرات الأداء العطري
          </h3>

          <div className="space-y-6">
            {[
              { metric: 'معدل إنتاج العطور اليومي', value: 94.8, target: 95, status: 'ممتاز' },
              { metric: 'نسبة المنتجات المطابقة للمواصفات', value: 97.2, target: 95, status: 'ممتاز' },
              { metric: 'زمن استجابة نظام الجودة', value: 1.2, target: 1.5, status: 'ممتاز' },
              { metric: 'معدل رضا العملاء عن المنتجات', value: 4.7, target: 4.5, status: 'ممتاز' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white text-sm">{metric.metric}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 dark:text-white">{metric.value}</span>
                    <div className="text-xs text-gray-600 dark:text-gray-400">الهدف: {metric.target}</div>
                  </div>
                </div>
                <TikTokProgress
                  value={metric.value}
                  max={metric.target > 10 ? 100 : metric.target}
                  className="h-2"
                />
                <div className="flex justify-between items-center text-sm">
                  <TikTokBadge className={
                    metric.status === 'ممتاز' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }>
                    {metric.status}
                  </TikTokBadge>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Quick Actions */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          الإجراءات السريعة
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { action: 'إضافة منتج جديد', icon: Plus, color: 'purple' },
            { action: 'تشغيل اختبار جودة', icon: CheckCircle, color: 'green' },
            { action: 'تحديث المخزون', icon: Package, color: 'blue' },
            { action: 'مراجعة الموردين', icon: Users, color: 'orange' },
            { action: 'تحليل المبيعات', icon: BarChart3, color: 'pink' },
            { action: 'توليد التقارير', icon: FileText, color: 'indigo' }
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                className={`p-4 rounded-xl border-2 border-dashed transition-all hover:border-solid ${
                  action.color === 'purple' ? 'border-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20' :
                  action.color === 'green' ? 'border-green-300 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20' :
                  action.color === 'blue' ? 'border-blue-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20' :
                  action.color === 'orange' ? 'border-orange-300 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20' :
                  action.color === 'pink' ? 'border-pink-300 hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20' :
                  'border-indigo-300 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  action.color === 'purple' ? 'text-purple-600' :
                  action.color === 'green' ? 'text-green-600' :
                  action.color === 'blue' ? 'text-blue-600' :
                  action.color === 'orange' ? 'text-orange-600' :
                  action.color === 'pink' ? 'text-pink-600' :
                  'text-indigo-600'
                }`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {action.action}
                </span>
              </motion.button>
            );
          })}
        </div>
      </TikTokCard>
    </div>
  );
}

// فئات إدارة المنتجات العطرية الرئيسية
function CategoriesTab() {
  const mainCategories = [
    {
      id: 'basic-perfumes',
      title: 'إدارة العطور الأساسية',
      description: 'إدارة شاملة للعطور الرجالية والنسائية والشرقية والغربية وعطور النيش الفاخرة',
      icon: Package,
      color: 'purple',
      subcategories: 5,
      active: true
    },
    {
      id: 'ingredients-materials',
      title: 'إدارة المكونات والمواد',
      description: 'إدارة الزيوت العطرية وخلطات العطور والمكونات الأساسية والكحول العطري',
      icon: Beaker,
      color: 'blue',
      subcategories: 7,
      active: true
    },
    {
      id: 'specialized-products',
      title: 'إدارة المنتجات المتخصصة',
      description: 'إدارة عطور السيارات وبخور ومعطرات الجو وعطور الجسم والعبوات والتغليف',
      icon: Car,
      color: 'green',
      subcategories: 8,
      active: true
    },
    {
      id: 'design-labels',
      title: 'إدارة التصميم والعلامات',
      description: 'إدارة تصاميم الزجاجات والعلامات والباركود والألوان والملصقات',
      icon: Palette,
      color: 'pink',
      subcategories: 6,
      active: true
    },
    {
      id: 'manufacturing-production',
      title: 'إدارة التصنيع والإنتاج',
      description: 'إدارة التصنيع اليدوي والآلي وخطوط الإنتاج ومراقبة الجودة',
      icon: Factory,
      color: 'orange',
      subcategories: 12,
      active: true
    },
    {
      id: 'quality-testing',
      title: 'إدارة الجودة والاختبار',
      description: 'إدارة اختبارات الجودة والعينات والثبات والتبخر والاختبار الحسي',
      icon: TestTube,
      color: 'teal',
      subcategories: 8,
      active: true
    },
    {
      id: 'storage-supply',
      title: 'إدارة التخزين والتوريد',
      description: 'إدارة المواد الخام والموردين والمستودعات ودرجات الحرارة',
      icon: Warehouse,
      color: 'indigo',
      subcategories: 10,
      active: true
    },
    {
      id: 'development-innovation',
      title: 'إدارة التطوير والابتكار',
      description: 'إدارة تطوير العطور الجديدة والوصفات والتجارب العطرية',
      icon: Sparkles,
      color: 'yellow',
      subcategories: 9,
      active: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mainCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-lg ${
                category.active
                  ? 'border-purple-200 bg-purple-50 dark:bg-purple-900/20 hover:border-purple-300'
                  : 'border-gray-200 bg-gray-50 dark:bg-gray-800 hover:border-gray-300'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  category.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  category.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  category.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  category.color === 'pink' ? 'bg-pink-100 dark:bg-pink-900/30' :
                  category.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                  category.color === 'teal' ? 'bg-teal-100 dark:bg-teal-900/30' :
                  category.color === 'indigo' ? 'bg-indigo-100 dark:bg-indigo-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    category.color === 'purple' ? 'text-purple-600' :
                    category.color === 'blue' ? 'text-blue-600' :
                    category.color === 'green' ? 'text-green-600' :
                    category.color === 'pink' ? 'text-pink-600' :
                    category.color === 'orange' ? 'text-orange-600' :
                    category.color === 'teal' ? 'text-teal-600' :
                    category.color === 'indigo' ? 'text-indigo-600' :
                    'text-yellow-600'
                  }`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    {category.active && (
                      <TikTokBadge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        نشط
                      </TikTokBadge>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {category.subcategories} قسم فرعي
                    </span>
                    <TikTokButton size="sm" variant="outline">
                      إدارة الأقسام
                    </TikTokButton>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Category Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TikTokCard className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">إجمالي الأقسام الفرعية</div>
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">الفئات النشطة</div>
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">65</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">الأقسام قيد التطوير</div>
          </div>
        </TikTokCard>
      </div>
    </div>
  );
}

// الأقسام الفرعية للمنتجات العطرية
function SubcategoriesTab() {
  const allSubcategories = [
    // إدارة العطور الأساسية
    { name: 'إدارة العطور الرجالية', category: 'العطور الأساسية', status: 'نشط', products: 1847, efficiency: 94 },
    { name: 'إدارة العطور النسائية', category: 'العطور الأساسية', status: 'نشط', products: 2156, efficiency: 96 },
    { name: 'إدارة العطور الشرقية', category: 'العطور الأساسية', status: 'نشط', products: 1234, efficiency: 92 },
    { name: 'إدارة العطور الغربية', category: 'العطور الأساسية', status: 'نشط', products: 1456, efficiency: 89 },
    { name: 'إدارة عطور النيش الفاخرة', category: 'العطور الأساسية', status: 'نشط', products: 567, efficiency: 98 },

    // إدارة المكونات والمواد
    { name: 'إدارة الزيوت العطرية', category: 'المكونات والمواد', status: 'نشط', products: 789, efficiency: 95 },
    { name: 'إدارة خلطات العطور', category: 'المكونات والمواد', status: 'نشط', products: 567, efficiency: 93 },
    { name: 'إدارة المكونات العطرية', category: 'المكونات والمواد', status: 'قيد التطوير', products: 234, efficiency: 87 },
    { name: 'إدارة الكحول العطري', category: 'المكونات والمواد', status: 'نشط', products: 445, efficiency: 91 },
    { name: 'إدارة الروائح الأساسية', category: 'المكونات والمواد', status: 'نشط', products: 678, efficiency: 94 },

    // إدارة المنتجات المتخصصة
    { name: 'إدارة عطور السيارات', category: 'المنتجات المتخصصة', status: 'نشط', products: 234, efficiency: 88 },
    { name: 'إدارة بخور ومعطرات الجو', category: 'المنتجات المتخصصة', status: 'نشط', products: 456, efficiency: 92 },
    { name: 'إدارة عطور الجسم', category: 'المنتجات المتخصصة', status: 'نشط', products: 678, efficiency: 95 },
    { name: 'إدارة العبوات', category: 'المنتجات المتخصصة', status: 'قيد التطوير', products: 123, efficiency: 85 },
    { name: 'إدارة التغليف', category: 'المنتجات المتخصصة', status: 'نشط', products: 345, efficiency: 90 },

    // باقي الأقسام (مختصرة)
    { name: 'إدارة التصنيع اليدوي', category: 'التصنيع والإنتاج', status: 'نشط', products: 234, efficiency: 89 },
    { name: 'إدارة اختبارات الجودة', category: 'الجودة والاختبار', status: 'نشط', products: 456, efficiency: 96 },
    { name: 'إدارة المواد الخام', category: 'التخزين والتوريد', status: 'نشط', products: 789, efficiency: 93 },
    { name: 'إدارة تطوير العطور الجديدة', category: 'التطوير والابتكار', status: 'نشط', products: 123, efficiency: 91 },
    { name: 'إدارة التسعير حسب المكونات', category: 'العمليات والتكاليف', status: 'قيد التطوير', products: 67, efficiency: 87 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          جميع الأقسام الفرعية (100 قسم)
        </h2>
        <TikTokButton>
          <Plus className="w-4 h-4 mr-2" />
          إضافة قسم جديد
        </TikTokButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSubcategories.map((subcategory, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                  {subcategory.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {subcategory.category}
                </p>
              </div>

              <TikTokBadge className={
                subcategory.status === 'نشط' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              }>
                {subcategory.status}
              </TikTokBadge>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">المنتجات:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {subcategory.products.toLocaleString()} منتج
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">الكفاءة:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {subcategory.efficiency}%
                </span>
              </div>

              <TikTokProgress value={subcategory.efficiency} max={100} className="h-2" />
            </div>

            <div className="flex gap-2">
              <TikTokButton size="sm" className="flex-1">
                <Eye className="w-4 h-4 mr-1" />
                عرض
              </TikTokButton>
              <TikTokButton variant="outline" size="sm" className="flex-1">
                <Edit className="w-4 h-4 mr-1" />
                تعديل
              </TikTokButton>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// تبويب التحليلات الشامل لنظام إدارة المنتجات العطرية
function AnalyticsTab() {
  const [selectedPeriod, setSelectedPeriod] = useState('30days');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showExportModal, setShowExportModal] = useState(false);

  // بيانات التحليلات الوهمية الشاملة
  const analyticsData = {
    overview: {
      totalProducts: 2847,
      activeCategories: 10,
      efficiency: 94.8,
      qualityScore: 96.2,
      productionRate: 156.4,
      customerSatisfaction: 4.7
    },
    performance: [
      { month: 'يناير', products: 120, efficiency: 92, quality: 94 },
      { month: 'فبراير', products: 145, efficiency: 94, quality: 96 },
      { month: 'مارس', products: 167, efficiency: 93, quality: 95 },
      { month: 'أبريل', products: 189, efficiency: 96, quality: 97 },
      { month: 'مايو', products: 234, efficiency: 94, quality: 96 },
      { month: 'يونيو', products: 256, efficiency: 95, quality: 96 }
    ],
    categories: [
      { name: 'العطور الرجالية', products: 847, efficiency: 94, trend: 'up', color: 'blue' },
      { name: 'العطور النسائية', products: 756, efficiency: 96, trend: 'up', color: 'pink' },
      { name: 'العطور الشرقية', products: 634, efficiency: 92, trend: 'stable', color: 'orange' },
      { name: 'العطور الغربية', products: 456, efficiency: 89, trend: 'down', color: 'green' },
      { name: 'عطور النيش', products: 367, efficiency: 98, trend: 'up', color: 'purple' },
      { name: 'الزيوت العطرية', products: 289, efficiency: 95, trend: 'up', color: 'yellow' },
      { name: 'خلطات العطور', products: 167, efficiency: 93, trend: 'stable', color: 'indigo' },
      { name: 'عطور السيارات', products: 134, efficiency: 88, trend: 'up', color: 'red' }
    ],
    quality: {
      excellent: 68,
      good: 24,
      average: 6,
      poor: 2
    },
    efficiency: {
      production: 94.8,
      quality: 96.2,
      storage: 92.1,
      distribution: 89.7
    },
    trends: {
      sales: [65, 78, 90, 81, 95, 102, 115, 108, 125, 134, 142, 158],
      production: [45, 52, 48, 61, 55, 67, 79, 85, 91, 98, 104, 112],
      quality: [88, 89, 91, 90, 93, 94, 95, 96, 97, 96, 98, 99]
    }
  };

  const timeFilters = [
    { id: '7days', label: 'آخر 7 أيام' },
    { id: '30days', label: 'آخر 30 يوم' },
    { id: '90days', label: 'آخر 3 أشهر' },
    { id: 'year', label: 'السنة الحالية' }
  ];

  return (
    <div className="space-y-8">
      {/* Controls and Filters */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            {timeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedPeriod(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedPeriod === filter.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
          >
            <option value="all">جميع الفئات</option>
            <option value="basic-perfumes">العطور الأساسية</option>
            <option value="ingredients">المكونات والمواد</option>
            <option value="specialized">المنتجات المتخصصة</option>
            <option value="manufacturing">التصنيع والإنتاج</option>
          </select>
        </div>

        <div className="flex gap-3">
          <TikTokButton variant="outline" size="sm" onClick={() => setShowExportModal(true)}>
            <Download className="w-4 h-4 mr-2" />
            تصدير البيانات
          </TikTokButton>
          <TikTokButton size="sm">
            <BarChart3 className="w-4 h-4 mr-2" />
            تحديث البيانات
          </TikTokButton>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">إجمالي المنتجات</p>
              <p className="text-3xl font-bold text-blue-900 dark:text-blue-100 mt-2">
                {analyticsData.overview.totalProducts.toLocaleString()}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">+12% من الشهر الماضي</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">معدل الكفاءة</p>
              <p className="text-3xl font-bold text-green-900 dark:text-green-100 mt-2">
                {analyticsData.overview.efficiency}%
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">+2.1% تحسن</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">مؤشر الجودة</p>
              <p className="text-3xl font-bold text-purple-900 dark:text-purple-100 mt-2">
                {analyticsData.overview.qualityScore}%
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">+1.5% تحسن</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400">معدل الإنتاج</p>
              <p className="text-3xl font-bold text-orange-900 dark:text-orange-100 mt-2">
                {analyticsData.overview.productionRate}
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">+8.3% زيادة</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Production Trends */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            اتجاهات الإنتاج والمبيعات
          </h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {analyticsData.trends.sales.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg flex-1 relative"
                style={{ height: `${(value / 160) * 100}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${(value / 160) * 100}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scaleY: 1.1 }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-400">
                  {value}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">المبيعات</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">الإنتاج</span>
            </div>
          </div>
        </TikTokCard>

        {/* Quality Distribution */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            توزيع مستويات الجودة
          </h3>
          <div className="space-y-4">
            {Object.entries(analyticsData.quality).map(([level, percentage], index) => (
              <motion.div
                key={level}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                  {level === 'excellent' ? 'ممتاز' :
                   level === 'good' ? 'جيد' :
                   level === 'average' ? 'متوسط' : 'ضعيف'}
                </div>
                <div className="flex-1">
                  <TikTokProgress value={percentage} max={100} showLabel color="purple" />
                </div>
                <div className="w-12 text-right text-sm font-bold text-gray-900 dark:text-white">
                  {percentage}%
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Category Performance Table */}
      <TikTokCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            أداء الفئات العطرية
          </h3>
          <div className="flex gap-2">
            <TikTokButton variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              فلترة
            </TikTokButton>
            <TikTokButton variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              بحث
            </TikTokButton>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-right p-4 font-medium text-gray-900 dark:text-white">الفئة</th>
                <th className="text-right p-4 font-medium text-gray-900 dark:text-white">المنتجات</th>
                <th className="text-right p-4 font-medium text-gray-900 dark:text-white">الكفاءة</th>
                <th className="text-right p-4 font-medium text-gray-900 dark:text-white">الاتجاه</th>
                <th className="text-right p-4 font-medium text-gray-900 dark:text-white">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.categories.map((category, index) => (
                <motion.tr
                  key={category.name}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-${category.color}-500`}></div>
                      <span className="font-medium text-gray-900 dark:text-white">{category.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">{category.products.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <TikTokProgress value={category.efficiency} max={100} className="w-16 h-2" />
                      <span className="font-medium text-gray-900 dark:text-white">{category.efficiency}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <TikTokBadge className={`${
                      category.trend === 'up' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      category.trend === 'down' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {category.trend === 'up' ? '↗ صاعد' :
                       category.trend === 'down' ? '↘ هابط' : '→ مستقر'}
                    </TikTokBadge>
                  </td>
                  <td className="p-4">
                    <TikTokButton variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </TikTokButton>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </TikTokCard>

      {/* Efficiency Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مؤشرات الكفاءة التفصيلية
          </h3>
          <div className="space-y-6">
            {Object.entries(analyticsData.efficiency).map(([key, value], index) => (
              <motion.div
                key={key}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {key === 'production' ? 'الإنتاج' :
                     key === 'quality' ? 'الجودة' :
                     key === 'storage' ? 'التخزين' : 'التوزيع'}
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">{value}%</span>
                </div>
                <TikTokProgress value={value} max={100} color="green" className="h-3" />
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            رضا العملاء والتقييمات
          </h3>
          <div className="text-center py-8">
            <motion.div
              className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {analyticsData.overview.customerSatisfaction}
            </motion.div>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 ${
                    star <= analyticsData.overview.customerSatisfaction
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              متوسط تقييم العملاء من 5 نجوم
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">94%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">راضون جداً</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">5%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">راضون</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">1%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">غير راضين</div>
              </div>
            </div>
          </div>
        </TikTokCard>
      </div>

      {/* Export Modal */}
      <TikTokModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        title="تصدير بيانات التحليلات"
        size="lg"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">نوع البيانات</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700 dark:text-gray-300">مؤشرات الأداء الرئيسية</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700 dark:text-gray-300">بيانات الفئات</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700 dark:text-gray-300">اتجاهات الأداء</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700 dark:text-gray-300">مؤشرات الجودة</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">تنسيق الملف</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="format" value="excel" className="text-purple-600" defaultChecked />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Excel (.xlsx)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="format" value="csv" className="text-purple-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">CSV (.csv)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="format" value="pdf" className="text-purple-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">PDF (.pdf)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <TikTokButton variant="outline" onClick={() => setShowExportModal(false)}>
              إلغاء
            </TikTokButton>
            <TikTokButton>
              <Download className="w-4 h-4 mr-2" />
              تصدير البيانات
            </TikTokButton>
          </div>
        </div>
      </TikTokModal>
    </div>
  );
}

// تبويب الإعدادات المتقدم لنظام إدارة المنتجات العطرية
function SettingsTab() {
  const [activeSettingsTab, setActiveSettingsTab] = useState('general');
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const settingsTabs = [
    { id: 'general', label: 'الإعدادات العامة', icon: Settings },
    { id: 'departments', label: 'إدارة الأقسام', icon: Layers },
    { id: 'permissions', label: 'الصلاحيات', icon: Shield },
    { id: 'workflow', label: 'سير العمل', icon: Activity },
    { id: 'notifications', label: 'التنبيهات', icon: AlertCircle },
    { id: 'backup', label: 'النسخ الاحتياطي', icon: Download }
  ];

  const departments = [
    { id: 'basic-perfumes', name: 'إدارة العطور الأساسية', status: 'نشط', manager: 'أحمد محمد', employees: 12 },
    { id: 'ingredients-materials', name: 'إدارة المكونات والمواد', status: 'نشط', manager: 'فاطمة علي', employees: 8 },
    { id: 'specialized-products', name: 'إدارة المنتجات المتخصصة', status: 'نشط', manager: 'محمد حسن', employees: 15 },
    { id: 'design-labels', name: 'إدارة التصميم والعلامات', status: 'قيد التطوير', manager: 'سارة أحمد', employees: 6 },
    { id: 'manufacturing-production', name: 'إدارة التصنيع والإنتاج', status: 'نشط', manager: 'علي محمود', employees: 20 },
    { id: 'quality-testing', name: 'إدارة الجودة والاختبار', status: 'نشط', manager: 'لينا خالد', employees: 10 },
    { id: 'storage-supply', name: 'إدارة التخزين والتوريد', status: 'نشط', manager: 'يوسف عمر', employees: 14 },
    { id: 'development-innovation', name: 'إدارة التطوير والابتكار', status: 'نشط', manager: 'نورا سامي', employees: 9 }
  ];

  const permissions = [
    { role: 'مدير عام', departments: ['جميع الأقسام'], level: 'كامل', color: 'purple' },
    { role: 'مدير قسم', departments: ['قسم واحد'], level: 'كامل للقسم', color: 'blue' },
    { role: 'مشرف', departments: ['قسم واحد'], level: 'قراءة وتعديل محدود', color: 'green' },
    { role: 'موظف', departments: ['مهام محددة'], level: 'قراءة فقط', color: 'orange' },
    { role: 'زائر', departments: ['محدود'], level: 'قراءة محدودة', color: 'gray' }
  ];

  return (
    <div className="space-y-8">
      {/* Settings Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSettingsTab(tab.id)}
                  className={`py-4 px-6 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeSettingsTab === tab.id
                      ? 'border-purple-500 text-purple-600 dark:text-purple-400'
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

        <div className="p-8">
          {activeSettingsTab === 'general' && <GeneralSettings />}
          {activeSettingsTab === 'departments' && <DepartmentsSettings departments={departments} />}
          {activeSettingsTab === 'permissions' && <PermissionsSettings permissions={permissions} />}
          {activeSettingsTab === 'workflow' && <WorkflowSettings />}
          {activeSettingsTab === 'notifications' && <NotificationsSettings />}
          {activeSettingsTab === 'backup' && <BackupSettings />}
        </div>
      </div>
    </div>
  );
}

// الإعدادات العامة
function GeneralSettings() {
  const [settings, setSettings] = useState({
    companyName: 'شركة العطور المتقدمة',
    language: 'ar',
    timezone: 'Asia/Riyadh',
    currency: 'SAR',
    autoSave: true,
    notifications: true,
    darkMode: false,
    dataRetention: '365'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">الإعدادات العامة</h3>
        <p className="text-gray-600 dark:text-gray-400">تخصيص الإعدادات الأساسية للنظام</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <TikTokInput
            label="اسم الشركة"
            value={settings.companyName}
            onChange={(value) => handleSettingChange('companyName', value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">اللغة</label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">العملة</label>
              <select
                value={settings.currency}
                onChange={(e) => handleSettingChange('currency', e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <option value="SAR">ريال سعودي</option>
                <option value="USD">دولار أمريكي</option>
                <option value="EUR">يورو</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="autoSave"
              checked={settings.autoSave}
              onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
              className="w-4 h-4 text-purple-600 rounded"
            />
            <label htmlFor="autoSave" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              حفظ تلقائي للتغييرات
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="notifications"
              checked={settings.notifications}
              onChange={(e) => handleSettingChange('notifications', e.target.checked)}
              className="w-4 h-4 text-purple-600 rounded"
            />
            <label htmlFor="notifications" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              تفعيل التنبيهات
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <TikTokInput
            label="المنطقة الزمنية"
            value={settings.timezone}
            onChange={(value) => handleSettingChange('timezone', value)}
          />

          <TikTokInput
            label="فترة الاحتفاظ بالبيانات (بالأيام)"
            value={settings.dataRetention}
            onChange={(value) => handleSettingChange('dataRetention', value)}
            type="number"
          />

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">إحصائيات النظام</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">مساحة التخزين المستخدمة:</span>
                <span className="font-medium text-gray-900 dark:text-white">2.4 GB / 10 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">عدد المستخدمين النشطين:</span>
                <span className="font-medium text-gray-900 dark:text-white">47 مستخدم</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">آخر نسخة احتياطية:</span>
                <span className="font-medium text-gray-900 dark:text-white">منذ ساعتين</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <TikTokButton variant="outline">إعادة تعيين</TikTokButton>
        <TikTokButton>حفظ التغييرات</TikTokButton>
      </div>
    </div>
  );
}

// إعدادات إدارة الأقسام
function DepartmentsSettings({ departments }: { departments: any[] }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">إدارة الأقسام</h3>
          <p className="text-gray-600 dark:text-gray-400">إدارة وتخصيص الأقسام والفئات الفرعية</p>
        </div>
        <TikTokButton>
          <Plus className="w-4 h-4 mr-2" />
          قسم جديد
        </TikTokButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white">{dept.name}</h4>
              <TikTokBadge className={`${
                dept.status === 'نشط' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {dept.status}
              </TikTokBadge>
            </div>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex justify-between">
                <span>المدير:</span>
                <span className="font-medium text-gray-900 dark:text-white">{dept.manager}</span>
              </div>
              <div className="flex justify-between">
                <span>عدد الموظفين:</span>
                <span className="font-medium text-gray-900 dark:text-white">{dept.employees} موظف</span>
              </div>
            </div>

            <div className="flex gap-2">
              <TikTokButton variant="outline" size="sm" className="flex-1">
                <Edit className="w-4 h-4 mr-1" />
                تعديل
              </TikTokButton>
              <TikTokButton variant="outline" size="sm" className="flex-1">
                <Settings className="w-4 h-4 mr-1" />
                إعدادات
              </TikTokButton>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// إعدادات الصلاحيات
function PermissionsSettings({ permissions }: { permissions: any[] }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">إدارة الصلاحيات</h3>
          <p className="text-gray-600 dark:text-gray-400">تخصيص صلاحيات المستخدمين والأدوار</p>
        </div>
        <TikTokButton onClick={() => setShowPermissionModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          دور جديد
        </TikTokButton>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {permissions.map((permission, index) => (
          <motion.div
            key={permission.role}
            className={`p-6 rounded-xl border-2 ${
              permission.color === 'purple' ? 'border-purple-200 bg-purple-50 dark:bg-purple-900/20' :
              permission.color === 'blue' ? 'border-blue-200 bg-blue-50 dark:bg-blue-900/20' :
              permission.color === 'green' ? 'border-green-200 bg-green-50 dark:bg-green-900/20' :
              permission.color === 'orange' ? 'border-orange-200 bg-orange-50 dark:bg-orange-900/20' :
              'border-gray-200 bg-gray-50 dark:bg-gray-800'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{permission.role}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{permission.level}</p>
              </div>
              <div className="text-right">
                <div className={`w-3 h-3 rounded-full bg-${permission.color}-500 mb-1`}></div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {permission.departments.join(', ')}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Permission Modal */}
      <TikTokModal
        isOpen={showPermissionModal}
        onClose={() => setShowPermissionModal(false)}
        title="إضافة دور جديد"
        size="lg"
      >
        <div className="space-y-6">
          <TikTokInput label="اسم الدور" placeholder="مثال: مدير قسم" />
          <TikTokInput label="وصف الدور" placeholder="وصف مختصر للدور والمسؤوليات" />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">مستوى الصلاحيات</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="level" value="full" className="text-purple-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">صلاحيات كاملة</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="level" value="edit" className="text-purple-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">تعديل محدود</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="level" value="read" className="text-purple-600" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">قراءة فقط</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <TikTokButton variant="outline" onClick={() => setShowPermissionModal(false)}>
              إلغاء
            </TikTokButton>
            <TikTokButton>إضافة الدور</TikTokButton>
          </div>
        </div>
      </TikTokModal>
    </div>
  );
}

// إعدادات سير العمل
function WorkflowSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">إعدادات سير العمل</h3>
        <p className="text-gray-600 dark:text-gray-400">تخصيص مسارات العمل والموافقات</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">مسار إنتاج عطر جديد</h4>
            <div className="space-y-3">
              {['البحث والتطوير', 'اختبار الجودة', 'موافقة الإدارة', 'الإنتاج', 'التسويق'].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </TikTokCard>

          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">مسار مراقبة الجودة</h4>
            <div className="space-y-3">
              {['فحص المواد الخام', 'اختبار التركيبة', 'تقييم الرائحة', 'اختبار الثبات', 'موافقة الجودة'].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </TikTokCard>
        </div>

        <div className="space-y-6">
          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">إعدادات الموافقات</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="autoApprove" className="w-4 h-4 text-purple-600 rounded" defaultChecked />
                <label htmlFor="autoApprove" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  الموافقة التلقائية على المنتجات المطابقة للمواصفات
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="requireManager" className="w-4 h-4 text-purple-600 rounded" />
                <label htmlFor="requireManager" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  طلب موافقة المدير للتغييرات الكبيرة
                </label>
              </div>
            </div>
          </TikTokCard>

          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">تنبيهات سير العمل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="emailAlerts" className="w-4 h-4 text-purple-600 rounded" defaultChecked />
                <label htmlFor="emailAlerts" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  إشعارات البريد الإلكتروني
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="pushAlerts" className="w-4 h-4 text-purple-600 rounded" defaultChecked />
                <label htmlFor="pushAlerts" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  التنبيهات الفورية
                </label>
              </div>
            </div>
          </TikTokCard>
        </div>
      </div>
    </div>
  );
}

// إعدادات التنبيهات
function NotificationsSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">إعدادات التنبيهات</h3>
        <p className="text-gray-600 dark:text-gray-400">تخصيص طرق التنبيه والإشعارات</p>
      </div>

      <div className="space-y-6">
        <TikTokCard className="p-6">
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">أنواع التنبيهات</h4>
          <div className="space-y-4">
            {[
              { name: 'انخفاض المخزون', description: 'عندما ينخفض المخزون عن الحد الأدنى', enabled: true },
              { name: 'انتهاء صلاحية المنتجات', description: 'عند اقتراب تاريخ انتهاء الصلاحية', enabled: true },
              { name: 'طلبات التوريد الجديدة', description: 'عند إنشاء طلب توريد جديد', enabled: false },
              { name: 'نتائج اختبارات الجودة', description: 'عند اكتمال اختبارات الجودة', enabled: true },
              { name: 'تحديثات الأسعار', description: 'عند تغيير أسعار المنتجات', enabled: false }
            ].map((notification, index) => (
              <div key={notification.name} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">{notification.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{notification.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-sm ${notification.enabled ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
                    {notification.enabled ? 'مفعل' : 'معطل'}
                  </span>
                  <input
                    type="checkbox"
                    checked={notification.enabled}
                    onChange={() => {}}
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </TikTokCard>
      </div>
    </div>
  );
}

// إعدادات النسخ الاحتياطي
function BackupSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">إعدادات النسخ الاحتياطي</h3>
        <p className="text-gray-600 dark:text-gray-400">إدارة النسخ الاحتياطي واستعادة البيانات</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">جدولة النسخ الاحتياطي</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="dailyBackup" className="w-4 h-4 text-purple-600 rounded" defaultChecked />
                <label htmlFor="dailyBackup" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  نسخ احتياطي يومي (الساعة 2 صباحاً)
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="weeklyBackup" className="w-4 h-4 text-purple-600 rounded" defaultChecked />
                <label htmlFor="weeklyBackup" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  نسخ احتياطي أسبوعي (كل أحد)
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="monthlyBackup" className="w-4 h-4 text-purple-600 rounded" />
                <label htmlFor="monthlyBackup" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  نسخ احتياطي شهري (أول يوم في الشهر)
                </label>
              </div>
            </div>
          </TikTokCard>

          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">خيارات النسخ الاحتياطي</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">موقع التخزين</label>
                <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <option>الخادم المحلي</option>
                  <option>Google Drive</option>
                  <option>Dropbox</option>
                  <option>AWS S3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">فترة الاحتفاظ</label>
                <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <option>30 يوم</option>
                  <option>90 يوم</option>
                  <option>180 يوم</option>
                  <option>سنة واحدة</option>
                </select>
              </div>
            </div>
          </TikTokCard>
        </div>

        <div className="space-y-6">
          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">النسخ الاحتياطية الأخيرة</h4>
            <div className="space-y-3">
              {[
                { date: '2024-01-15', time: '02:00 ص', size: '2.4 GB', status: 'ناجح' },
                { date: '2024-01-14', time: '02:00 ص', size: '2.3 GB', status: 'ناجح' },
                { date: '2024-01-13', time: '02:00 ص', size: '2.2 GB', status: 'ناجح' },
                { date: '2024-01-12', time: '02:00 ص', size: '2.1 GB', status: 'فشل' }
              ].map((backup, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{backup.date}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{backup.time} - {backup.size}</div>
                  </div>
                  <TikTokBadge className={`${
                    backup.status === 'ناجح' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {backup.status}
                  </TikTokBadge>
                </div>
              ))}
            </div>
          </TikTokCard>

          <TikTokCard className="p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">إجراءات سريعة</h4>
            <div className="space-y-3">
              <TikTokButton className="w-full" size="sm">
                <Download className="w-4 h-4 mr-2" />
                إنشاء نسخة احتياطية الآن
              </TikTokButton>
              <TikTokButton variant="outline" className="w-full" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                استعادة من نسخة احتياطية
              </TikTokButton>
            </div>
          </TikTokCard>
        </div>
      </div>
    </div>
  );
}
