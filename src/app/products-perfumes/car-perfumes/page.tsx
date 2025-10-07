// صفحة إدارة عطور السيارات - قسم متخصص في فئة المنتجات والعطور

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
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
  RefreshCw,
  Gauge,
  Fuel
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokCard, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { AdvancedSidebar } from '@/components/modules/general-management/AdvancedSidebar';

export default function CarPerfumesPage() {
  const [currentCategory, setCurrentCategory] = useState('products-perfumes');
  const [currentDepartment, setCurrentDepartment] = useState('إدارة عطور السيارات');
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
              <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  إدارة عطور السيارات
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  إدارة شاملة لعطور السيارات • قسم متخصص في المنتجات المخصصة للسيارات
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
                عطر سيارة جديد
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
                        ? 'border-slate-500 text-slate-600 dark:text-slate-400'
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
          {activeTab === 'overview' && <CarPerfumesOverviewTab />}
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

// نظرة عامة على عطور السيارات
function CarPerfumesOverviewTab() {
  const perfumeStats = [
    {
      title: 'إجمالي عطور السيارات',
      value: '234 منتج',
      change: '+18 هذا الشهر',
      trend: 'up',
      icon: Package,
      color: 'slate'
    },
    {
      title: 'معطرات السيارات',
      value: '156 منتج',
      change: '+12',
      trend: 'up',
      icon: Wind,
      color: 'blue'
    },
    {
      title: 'معطرات الجو للسيارات',
      value: '78 منتج',
      change: '+6',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      title: 'مؤشر الجودة',
      value: '94.8%',
      change: '+0.8%',
      trend: 'up',
      icon: Award,
      color: 'yellow'
    }
  ];

  const carPerfumeCategories = [
    { category: 'معطرات تعليق', count: 89, percentage: 38, color: 'blue' },
    { category: 'معطرات رذاذ', count: 67, percentage: 29, color: 'green' },
    { category: 'معطرات جل', count: 45, percentage: 19, color: 'purple' },
    { category: 'معطرات كريستال', count: 23, percentage: 10, color: 'pink' },
    { category: 'معطرات طبيعية', count: 10, percentage: 4, color: 'yellow' }
  ];

  return (
    <div className="space-y-8">
      {/* Car Perfume Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {perfumeStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'slate' ? 'bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 border-slate-200 dark:border-slate-800' :
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
                    stat.color === 'slate' ? 'text-slate-600 dark:text-slate-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'slate' ? 'text-slate-900 dark:text-slate-100' :
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
                  stat.color === 'slate' ? 'bg-slate-100 dark:bg-slate-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'slate' ? 'text-slate-600' :
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

      {/* Car Perfume Categories and Popular Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Car Perfume Categories */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            فئات عطور السيارات الرئيسية
          </h3>

          <div className="space-y-4">
            {carPerfumeCategories.map((cat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${cat.color}-100 dark:bg-${cat.color}-900/30`}>
                  <Car className={`w-6 h-6 text-${cat.color}-600`} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">{cat.category}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cat.count} منتج</span>
                  </div>
                  <TikTokProgress value={cat.percentage} max={100} className="h-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Popular Car Perfumes */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            أشهر عطور السيارات
          </h3>

          <div className="space-y-4">
            {[
              {
                name: 'معطر تعليق أسود',
                brand: 'كار فريش',
                sales: '12,450 مبيعة',
                rating: 4.8,
                price: '45 ريال'
              },
              {
                name: 'معطر رذاذ برائحة اللافندر',
                brand: 'أوتو سنت',
                sales: '9,230 مبيعة',
                rating: 4.7,
                price: '65 ريال'
              },
              {
                name: 'معطر جل للسيارة',
                brand: 'فريش كار',
                sales: '8,120 مبيعة',
                rating: 4.6,
                price: '35 ريال'
              },
              {
                name: 'معطر كريستال فاخر',
                brand: 'لوكس أوتو',
                sales: '6,890 مبيعة',
                rating: 4.5,
                price: '120 ريال'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/30 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-slate-600" />
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
                    {product.brand}
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
            خط تطوير عطور السيارات
          </h3>

          <div className="space-y-4">
            {[
              { stage: 'تطوير روائح جديدة للسيارات', count: 8, status: 'نشط', color: 'slate' },
              { stage: 'اختبار ثبات الرائحة في السيارة', count: 6, status: 'قيد المراجعة', color: 'yellow' },
              { stage: 'مراقبة السلامة والجودة', count: 4, status: 'معتمد', color: 'green' },
              { stage: 'التعبئة والتغليف المناسب للسيارة', count: 5, status: 'قيد التنفيذ', color: 'blue' }
            ].map((stage, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 bg-${stage.color}-100 dark:bg-${stage.color}-900/30 rounded-lg flex items-center justify-center`}>
                  <RefreshCw className={`w-5 h-5 text-${stage.color}-600`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {stage.stage}
                    </p>
                    <TikTokBadge className={
                      stage.status === 'نشط' ? 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400' :
                      stage.status === 'قيد المراجعة' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      stage.status === 'معتمد' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }>
                      {stage.status}
                    </TikTokBadge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stage.count} منتج في هذه المرحلة
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Quality Metrics */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مؤشرات الجودة لعطور السيارات
          </h3>

          <div className="space-y-6">
            {[
              { metric: 'معدل الرضا عن الرائحة', value: 94.8, target: 90, status: 'ممتاز' },
              { metric: 'نسبة المنتجات الآمنة', value: 96.2, target: 95, status: 'ممتاز' },
              { metric: 'زمن ثبات الرائحة في السيارة', value: 2.5, target: 2.0, status: 'ممتاز' },
              { metric: 'تكلفة مراقبة الجودة', value: 0.8, target: 1.0, status: 'جيد جداً' }
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
    </div>
  );
}

// باقي التبويبات (نموذج مختصر)
function ProductsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Package className="w-20 h-20 text-slate-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة منتجات عطور السيارات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع منتجات عطور السيارات والمخزون والتتبع
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إضافة منتج جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function DevelopmentTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <RefreshCw className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تطوير عطور السيارات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تطوير عطور سيارات جديدة مع ضمان السلامة والجودة العالية
        </p>
        <TikTokButton size="lg" variant="outline">
          <RefreshCw className="w-5 h-5 mr-2" />
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
          مراقبة جودة عطور السيارات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          ضمان جودة عطور السيارات وتطبيق معايير السلامة والأمان
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
          تقارير عطور السيارات والأداء
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة عن أداء عطور السيارات والمبيعات والجودة والتطوير
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
          إعدادات إدارة عطور السيارات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات نظام إدارة عطور السيارات حسب احتياجات المؤسسة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
