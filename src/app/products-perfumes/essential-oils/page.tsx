// صفحة إدارة الزيوت العطرية - قسم متخصص في فئة المنتجات والعطور

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
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
  Leaf,
  Flower,
  TreePine,
  Sun,
  Moon,
  Gem
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokCard, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { AdvancedSidebar } from '@/components/modules/general-management/AdvancedSidebar';

export default function EssentialOilsPage() {
  const [currentCategory, setCurrentCategory] = useState('products-perfumes');
  const [currentDepartment, setCurrentDepartment] = useState('إدارة الزيوت العطرية');
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'products', label: 'المنتجات', icon: Package },
    { id: 'development', label: 'التطوير', icon: Zap },
    { id: 'quality', label: 'الجودة', icon: Award },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
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
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  إدارة الزيوت العطرية
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  إدارة شاملة للزيوت العطرية • قسم متخصص في المنتجات الطبيعية والعلاجية
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
                زيت عطري جديد
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
                        ? 'border-green-500 text-green-600 dark:text-green-400'
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
          {activeTab === 'overview' && <EssentialOilsOverviewTab />}
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'development' && <DevelopmentTab />}
          {activeTab === 'quality' && <QualityTab />}
          {activeTab === 'reports' && <ReportsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  );
}

// نظرة عامة على الزيوت العطرية
function EssentialOilsOverviewTab() {
  const perfumeStats = [
    {
      title: 'إجمالي الزيوت العطرية',
      value: '789 زيت',
      change: '+67 هذا الشهر',
      trend: 'up',
      icon: Package,
      color: 'green'
    },
    {
      title: 'الزيوت العلاجية',
      value: '234 زيت',
      change: '+18',
      trend: 'up',
      icon: Leaf,
      color: 'blue'
    },
    {
      title: 'الزيوت التجميلية',
      value: '555 زيت',
      change: '+49',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'مؤشر الجودة',
      value: '97.8%',
      change: '+1.2%',
      trend: 'up',
      icon: Award,
      color: 'yellow'
    }
  ];

  const perfumeCategories = [
    { category: 'الزيوت الحمضية', count: 234, percentage: 30, color: 'yellow' },
    { category: 'الزيوت الزهرية', count: 189, percentage: 24, color: 'pink' },
    { category: 'الزيوت الخشبية', count: 156, percentage: 20, color: 'amber' },
    { category: 'الزيوت العشبية', count: 123, percentage: 15, color: 'green' },
    { category: 'الزيوت الراتنجية', count: 67, percentage: 8, color: 'orange' },
    { category: 'الزيوت التوابل', count: 20, percentage: 3, color: 'red' }
  ];

  return (
    <div className="space-y-8">
      {/* Perfume Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {perfumeStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
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
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    stat.color === 'purple' ? 'text-purple-900 dark:text-purple-100' :
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
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-yellow-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Perfume Categories and Popular Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Perfume Categories */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            فئات الزيوت العطرية الرئيسية
          </h3>

          <div className="space-y-4">
            {perfumeCategories.map((cat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${cat.color}-100 dark:bg-${cat.color}-900/30`}>
                  <Droplets className={`w-6 h-6 text-${cat.color}-600`} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">{cat.category}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cat.count} زيت</span>
                  </div>
                  <TikTokProgress value={cat.percentage} max={100} className="h-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Popular Products */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            أشهر الزيوت العطرية
          </h3>

          <div className="space-y-4">
            {[
              {
                name: 'زيت اللافندر النقي',
                source: 'فرنسا',
                sales: '8,450 مبيعة',
                rating: 4.9,
                price: '180 ريال'
              },
              {
                name: 'زيت النعناع العضوي',
                source: 'المغرب',
                sales: '7,230 مبيعة',
                rating: 4.8,
                price: '120 ريال'
              },
              {
                name: 'زيت الورد الدمشقي',
                source: 'سوريا',
                sales: '6,120 مبيعة',
                rating: 4.7,
                price: '320 ريال'
              },
              {
                name: 'زيت شجرة الشاي',
                source: 'أستراليا',
                sales: '5,890 مبيعة',
                rating: 4.6,
                price: '150 ريال'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-green-600" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {product.source}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.sales}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Development Pipeline and Quality Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Development Pipeline */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            خط تطوير الزيوت العطرية
          </h3>

          <div className="space-y-4">
            {[
              { stage: 'زراعة النباتات العطرية', count: 15, status: 'نشط', color: 'green' },
              { stage: 'استخلاص الزيوت الطبيعية', count: 12, status: 'قيد المراجعة', color: 'yellow' },
              { stage: 'مراقبة الجودة العضوية', count: 8, status: 'معتمد', color: 'blue' },
              { stage: 'التعبئة بالطرق الطبيعية', count: 10, status: 'قيد التنفيذ', color: 'purple' }
            ].map((stage, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 bg-${stage.color}-100 dark:bg-${stage.color}-900/30 rounded-lg flex items-center justify-center`}>
                  <Leaf className={`w-5 h-5 text-${stage.color}-600`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {stage.stage}
                    </p>
                    <TikTokBadge className={
                      stage.status === 'نشط' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      stage.status === 'قيد المراجعة' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      stage.status === 'معتمد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                    }>
                      {stage.status}
                    </TikTokBadge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stage.count} زيت في هذه المرحلة
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Quality Metrics */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مؤشرات الجودة للزيوت العطرية
          </h3>

          <div className="space-y-6">
            {[
              { metric: 'معدل الرضا عن النقاء', value: 97.8, target: 95, status: 'ممتاز' },
              { metric: 'نسبة المنتجات العضوية', value: 94.5, target: 90, status: 'ممتاز' },
              { metric: 'زمن اختبار الجودة', value: 2.8, target: 3.0, status: 'جيد جداً' },
              { metric: 'تكلفة مراقبة الجودة', value: 1.8, target: 2.0, status: 'جيد' }
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
                    metric.status === 'جيد جداً' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }>
                    {metric.status}
                  </TikTokBadge>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>
    </div>
  );
}

// باقي التبويبات (نموذج مختصر)
function ProductsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Package className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة منتجات الزيوت العطرية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع منتجات الزيوت العطرية والمخزون والتتبع
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إضافة زيت عطري جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function DevelopmentTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Leaf className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تطوير الزيوت العطرية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تطوير زيوت عطرية جديدة مع الحفاظ على النقاء والجودة الطبيعية
        </p>
        <TikTokButton size="lg" variant="outline">
          <Leaf className="w-5 h-5 mr-2" />
          مشروع تطوير جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function QualityTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Award className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          مراقبة جودة الزيوت العطرية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          ضمان جودة الزيوت العطرية وتطبيق معايير النقاء والعضوية
        </p>
        <TikTokButton size="lg">
          <Award className="w-5 h-5 mr-2" />
          مراجعة جودة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function ReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير الزيوت العطرية والأداء
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة عن أداء الزيوت العطرية والمبيعات والجودة والتطوير
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function SettingsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Settings className="w-20 h-20 text-gray-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إعدادات إدارة الزيوت العطرية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات نظام إدارة الزيوت العطرية حسب احتياجات المؤسسة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
