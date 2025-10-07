// صفحة قسم فرعي محدد في نظام إدارة المنتجات العطرية

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
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
  AlertCircle,
  Home,
  ArrowRight
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokCard, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { AdvancedSidebar } from '@/components/modules/general-management/AdvancedSidebar';

// بيانات الأقسام الفرعية مع تفاصيلها
const subcategoryData = {
  'male-perfumes': {
    title: 'إدارة العطور الرجالية',
    description: 'نظام متخصص لإدارة جميع جوانب العطور الرجالية من التصميم إلى التسويق',
    icon: Crown,
    color: 'blue',
    category: 'العطور الأساسية',
    stats: {
      totalProducts: 1847,
      activeProducts: 1654,
      efficiency: 94,
      satisfaction: 4.7
    },
    subSections: [
      { name: 'تصميم العطور الرجالية', status: 'نشط', progress: 85 },
      { name: 'تطوير التركيبات الجديدة', status: 'قيد المراجعة', progress: 60 },
      { name: 'مراقبة جودة العطور', status: 'نشط', progress: 92 },
      { name: 'إدارة المخزون والتوزيع', status: 'نشط', progress: 88 },
      { name: 'تحليل أداء المبيعات', status: 'نشط', progress: 95 }
    ],
    recentActivity: [
      { action: 'تم إطلاق عطر جديد', time: 'قبل ساعتين', type: 'success' },
      { action: 'تحديث في تركيبة عطر موجود', time: 'قبل 4 ساعات', type: 'info' },
      { action: 'مراجعة جودة مكتملة', time: 'قبل 6 ساعات', type: 'success' },
      { action: 'تحديث في المخزون', time: 'قبل يوم واحد', type: 'warning' }
    ]
  },
  'female-perfumes': {
    title: 'إدارة العطور النسائية',
    description: 'نظام شامل لإدارة العطور النسائية مع التركيز على الأناقة والجودة العالية',
    icon: Heart,
    color: 'pink',
    category: 'العطور الأساسية',
    stats: {
      totalProducts: 2156,
      activeProducts: 1987,
      efficiency: 96,
      satisfaction: 4.8
    },
    subSections: [
      { name: 'تطوير عطور الأناقة', status: 'نشط', progress: 90 },
      { name: 'مراقبة جودة المنتجات', status: 'نشط', progress: 94 },
      { name: 'إدارة التصاميم الفاخرة', status: 'نشط', progress: 87 },
      { name: 'تحليل تفضيلات العملاء', status: 'قيد التطوير', progress: 65 },
      { name: 'إدارة الحملات التسويقية', status: 'نشط', progress: 78 }
    ],
    recentActivity: [
      { action: 'إطلاق مجموعة صيفية جديدة', time: 'قبل 3 ساعات', type: 'success' },
      { action: 'تحديث في تركيبة عطر شهير', time: 'قبل 8 ساعات', type: 'info' },
      { action: 'حملة تسويقية ناجحة', time: 'قبل يوم واحد', type: 'success' }
    ]
  },
  'essential-oils': {
    title: 'إدارة الزيوت العطرية',
    description: 'نظام متخصص لإدارة الزيوت العطرية الطبيعية والعضوية وعالية الجودة',
    icon: Droplets,
    color: 'green',
    category: 'المكونات والمواد',
    stats: {
      totalProducts: 789,
      activeProducts: 734,
      efficiency: 95,
      satisfaction: 4.6
    },
    subSections: [
      { name: 'زراعة النباتات العطرية', status: 'نشط', progress: 88 },
      { name: 'استخلاص الزيوت الطبيعية', status: 'نشط', progress: 92 },
      { name: 'مراقبة الجودة العضوية', status: 'نشط', progress: 96 },
      { name: 'التعبئة بالطرق الطبيعية', status: 'نشط', progress: 89 },
      { name: 'تتبع الموردين المعتمدين', status: 'قيد المراجعة', progress: 75 }
    ],
    recentActivity: [
      { action: 'توريد زيت لافندر عضوي جديد', time: 'قبل ساعتين', type: 'success' },
      { action: 'اختبار جودة زيت ورد دمشقي', time: 'قبل 5 ساعات', type: 'info' },
      { action: 'تحديث شهادات الجودة العضوية', time: 'قبل يوم واحد', type: 'success' }
    ]
  },
  'perfume-blends': {
    title: 'إدارة خلطات العطور',
    description: 'نظام متطور لإدارة خلطات العطور والتركيبات الجديدة والمبتكرة',
    icon: Layers,
    color: 'purple',
    category: 'المكونات والمواد',
    stats: {
      totalProducts: 567,
      activeProducts: 523,
      efficiency: 93,
      satisfaction: 4.5
    },
    subSections: [
      { name: 'تطوير تركيبات جديدة', status: 'نشط', progress: 82 },
      { name: 'اختبار التوازن العطري', status: 'قيد المراجعة', progress: 68 },
      { name: 'مراقبة ثبات الرائحة', status: 'نشط', progress: 91 },
      { name: 'التعبئة والتغليف النهائي', status: 'نشط', progress: 87 },
      { name: 'توثيق التركيبات الجديدة', status: 'نشط', progress: 94 }
    ],
    recentActivity: [
      { action: 'تطوير خلطة جديدة للعطور الشرقية', time: 'قبل 4 ساعات', type: 'info' },
      { action: 'اختبار توازن عطري مكتمل', time: 'قبل 7 ساعات', type: 'success' },
      { action: 'توثيق تركيبة مبتكرة', time: 'قبل يوم واحد', type: 'success' }
    ]
  }
  // يمكن إضافة باقي الأقسام هنا
};

export default function SubcategoryPage({ params }: { params: { category: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const subcategory = subcategoryData[params.category as keyof typeof subcategoryData];

  if (!subcategory) {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              القسم غير موجود
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              لم يتم العثور على القسم المطلوب أو لم يتم تفعيله بعد.
            </p>
            <TikTokButton>
              <ArrowLeft className="w-4 h-4 mr-2" />
              العودة للصفحة الرئيسية
            </TikTokButton>
          </div>
        </div>
      </div>
    );
  }

  const Icon = subcategory.icon;
  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'products', label: 'المنتجات', icon: Package },
    { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <AdvancedSidebar
        currentCategory="perfume-management"
        currentDepartment={subcategory.title}
        onCategoryChange={() => {}}
        onDepartmentChange={() => {}}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${getColorGradient(subcategory.color)} p-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <TikTokButton
                variant="outline"
                size="sm"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                العودة
              </TikTokButton>

              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white">
                  {subcategory.title}
                </h1>
                <p className="text-white/80">
                  {subcategory.description}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <TikTokButton variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Download className="w-4 h-4 mr-2" />
                تصدير البيانات
              </TikTokButton>
              <TikTokButton size="sm" className="bg-white text-purple-600 hover:bg-white/90">
                <Plus className="w-4 h-4 mr-2" />
                إضافة عنصر جديد
              </TikTokButton>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-6">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
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
                    <TabIcon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && <SubcategoryOverviewTab subcategory={subcategory} />}
          {activeTab === 'products' && <ProductsTab subcategory={subcategory} />}
          {activeTab === 'analytics' && <AnalyticsTab subcategory={subcategory} />}
          {activeTab === 'settings' && <SettingsTab subcategory={subcategory} />}
        </div>
      </div>
    </div>
  );
}

// نظرة عامة على القسم الفرعي
function SubcategoryOverviewTab({ subcategory }: { subcategory: any }) {
  return (
    <div className="space-y-8">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'إجمالي المنتجات', value: subcategory.stats.totalProducts, icon: Package, color: 'blue' },
          { title: 'المنتجات النشطة', value: subcategory.stats.activeProducts, icon: Activity, color: 'green' },
          { title: 'معدل الكفاءة', value: `${subcategory.stats.efficiency}%`, icon: TrendingUp, color: 'purple' },
          { title: 'رضا العملاء', value: `${subcategory.stats.satisfaction}/5`, icon: Star, color: 'yellow' }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800' :
                'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800'
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
                    stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'purple' ? 'text-purple-900 dark:text-purple-100' :
                    'text-yellow-900 dark:text-yellow-100'
                  } mt-2`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-yellow-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Sub-sections and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sub-sections */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            الأقسام الفرعية النشطة
          </h3>

          <div className="space-y-4">
            {subcategory.subSections.map((section: any, index: number) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 bg-${subcategory.color}-100 dark:bg-${subcategory.color}-900/30 rounded-lg flex items-center justify-center`}>
                  <Zap className={`w-5 h-5 text-${subcategory.color}-600`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {section.name}
                    </p>
                    <TikTokBadge className={
                      section.status === 'نشط' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }>
                      {section.status}
                    </TikTokBadge>
                  </div>
                  <TikTokProgress value={section.progress} max={100} className="h-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Recent Activity */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            النشاطات الأخيرة
          </h3>

          <div className="space-y-4">
            {subcategory.recentActivity.map((activity: any, index: number) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'success' ? 'bg-green-100 dark:bg-green-900/30' :
                  activity.type === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                  'bg-blue-100 dark:bg-blue-900/30'
                }`}>
                  {activity.type === 'success' ? <CheckCircle className="w-4 h-4 text-green-600" /> :
                   activity.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-600" /> :
                   <Info className="w-4 h-4 text-blue-600" />}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {activity.time}
                  </p>
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
            { action: 'إضافة منتج جديد', icon: Plus, color: subcategory.color },
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
                  action.color === subcategory.color ? `border-${subcategory.color}-300 hover:border-${subcategory.color}-500 hover:bg-${subcategory.color}-50 dark:hover:bg-${subcategory.color}-900/20` :
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
                  action.color === subcategory.color ? `text-${subcategory.color}-600` :
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

// باقي التبويبات (نموذج مختصر)
function ProductsTab({ subcategory }: { subcategory: any }) {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Package className={`w-20 h-20 text-${subcategory.color}-500 mx-auto mb-6`} />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة منتجات {subcategory.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع منتجات {subcategory.title} والمخزون والتتبع
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إضافة منتج جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function AnalyticsTab({ subcategory }: { subcategory: any }) {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className={`w-20 h-20 text-${subcategory.color}-500 mx-auto mb-6`} />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تحليلات {subcategory.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تحليلات مفصلة وشاملة لأداء {subcategory.title} والكفاءة والجودة
        </p>
        <TikTokButton size="lg" variant="outline">
          <BarChart3 className="w-5 h-5 mr-2" />
          توليد التقرير التحليلي
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function SettingsTab({ subcategory }: { subcategory: any }) {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Settings className={`w-20 h-20 text-${subcategory.color}-500 mx-auto mb-6`} />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إعدادات {subcategory.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات نظام إدارة {subcategory.title} حسب احتياجات المؤسسة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// دالة مساعدة للحصول على تدرج الألوان
function getColorGradient(color: string) {
  const gradients = {
    blue: 'from-blue-600 to-indigo-600',
    pink: 'from-pink-600 to-purple-600',
    green: 'from-green-600 to-emerald-600',
    purple: 'from-purple-600 to-indigo-600',
    yellow: 'from-yellow-600 to-orange-600',
    orange: 'from-orange-600 to-red-600',
    teal: 'from-teal-600 to-cyan-600',
    indigo: 'from-indigo-600 to-purple-600'
  };
  return gradients[color as keyof typeof gradients] || 'from-gray-600 to-gray-800';
}
