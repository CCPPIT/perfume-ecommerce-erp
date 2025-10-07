// نظام التنقل المتطور للأقسام العطرية - يوفر وصول سريع ومنظم لجميع الأقسام الفرعية

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  TrendingUp,
  Package,
  Settings,
  Eye,
  ChevronDown,
  ChevronRight,
  Activity,
  Users,
  Award,
  Target,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Plus,
  Edit,
  Trash2,
  MoreVertical,
  ExternalLink,
  Copy,
  Archive,
  Bookmark,
  Heart,
  Share2
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokInput, TikTokCard } from '@/components/ui/TikTokComponents';
import { perfumeSubcategoriesDatabase, getSubcategoriesByCategory, getSystemStats } from '@/lib/perfume-database';

interface PerfumeNavigationProps {
  onSubcategorySelect?: (subcategoryId: string) => void;
  selectedSubcategory?: string;
}

export function PerfumeNavigation({ onSubcategorySelect, selectedSubcategory }: PerfumeNavigationProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('جميع الفئات');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['العطور الأساسية']));

  const categories = getSubcategoriesByCategory();
  const systemStats = getSystemStats();

  // فلترة الأقسام حسب البحث والفئة
  const filteredSubcategories = Object.values(perfumeSubcategoriesDatabase).filter(subcategory => {
    const matchesSearch = subcategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subcategory.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'جميع الفئات' || subcategory.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <TikTokInput
              placeholder="البحث في الأقسام العطرية..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 w-80"
            />
          </div>

          <TikTokButton
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            تصفية
          </TikTokButton>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-700 text-purple-600 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-700 text-purple-600 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <TikTokButton size="sm">
            <Plus className="w-4 h-4 mr-2" />
            قسم جديد
          </TikTokButton>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الفئة الرئيسية
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="جميع الفئات">جميع الفئات</option>
                  {Object.keys(categories).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  حالة القسم
                </label>
                <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option>جميع الحالات</option>
                  <option>نشط</option>
                  <option>قيد التطوير</option>
                  <option>معطل</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ترتيب حسب
                </label>
                <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option>الاسم</option>
                  <option>عدد المنتجات</option>
                  <option>معدل الكفاءة</option>
                  <option>تاريخ الإنشاء</option>
                </select>
              </div>

              <div className="flex items-end">
                <TikTokButton variant="outline" className="w-full">
                  تطبيق التصفية
                </TikTokButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <TikTokCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">إجمالي الأقسام</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {systemStats.totalSubcategories}
              </p>
            </div>
          </div>
        </TikTokCard>

        <TikTokCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">الأقسام النشطة</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {systemStats.activeSubcategories}
              </p>
            </div>
          </div>
        </TikTokCard>

        <TikTokCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">متوسط الكفاءة</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {systemStats.averageEfficiency.toFixed(1)}%
              </p>
            </div>
          </div>
        </TikTokCard>

        <TikTokCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">متوسط الرضا</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {systemStats.averageSatisfaction.toFixed(1)}/5
              </p>
            </div>
          </div>
        </TikTokCard>
      </div>

      {/* Categories and Subcategories */}
      <div className="space-y-4">
        {Object.keys(categories).map((categoryName) => (
          <TikTokCard key={categoryName} className="p-6">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(categoryName)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                {expandedCategories.has(categoryName) ? (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {categoryName}
                </h3>
                <TikTokBadge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                  {categories[categoryName].length} قسم
                </TikTokBadge>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {categories[categoryName].reduce((sum, s) => sum + s.products, 0)} منتج
                </span>
              </div>
            </button>

            {/* Category Content */}
            <AnimatePresence>
              {expandedCategories.has(categoryName) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categories[categoryName].map((subcategory) => (
                        <SubcategoryCard
                          key={subcategory.id}
                          subcategory={subcategory}
                          isSelected={selectedSubcategory === subcategory.id}
                          onSelect={() => onSubcategorySelect?.(subcategory.id)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {categories[categoryName].map((subcategory) => (
                        <SubcategoryListItem
                          key={subcategory.id}
                          subcategory={subcategory}
                          isSelected={selectedSubcategory === subcategory.id}
                          onSelect={() => onSubcategorySelect?.(subcategory.id)}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </TikTokCard>
        ))}
      </div>

      {/* Quick Actions Footer */}
      <TikTokCard className="p-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { action: 'إنشاء تقرير شامل', icon: FileText, color: 'blue' },
            { action: 'تحليل الأداء العام', icon: TrendingUp, color: 'green' },
            { action: 'إدارة المستخدمين', icon: Users, color: 'purple' },
            { action: 'إعدادات النظام', icon: Settings, color: 'gray' }
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed transition-all hover:border-solid ${
                  action.color === 'blue' ? 'border-blue-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20' :
                  action.color === 'green' ? 'border-green-300 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20' :
                  action.color === 'purple' ? 'border-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20' :
                  'border-gray-300 hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900/20'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className={`w-4 h-4 ${
                  action.color === 'blue' ? 'text-blue-600' :
                  action.color === 'green' ? 'text-green-600' :
                  action.color === 'purple' ? 'text-purple-600' :
                  'text-gray-600'
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

// مكون بطاقة قسم فرعي (عرض شبكي)
function SubcategoryCard({ subcategory, isSelected, onSelect }: {
  subcategory: any;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const statusColors = {
    'نشط': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'قيد التطوير': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'معطل': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };

  return (
    <motion.div
      className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
        isSelected
          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
      }`}
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          isSelected ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-800'
        }`}>
          <Package className={`w-5 h-5 ${
            isSelected ? 'text-purple-600' : 'text-gray-600 dark:text-gray-400'
          }`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 dark:text-white truncate">
              {subcategory.name}
            </h4>
            <TikTokBadge className={statusColors[subcategory.status]}>
              {subcategory.status}
            </TikTokBadge>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
            {subcategory.description}
          </p>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              {subcategory.products} منتج
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span className="font-medium">{subcategory.efficiency}%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// مكون عنصر قسم فرعي (عرض قائمة)
function SubcategoryListItem({ subcategory, isSelected, onSelect }: {
  subcategory: any;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const statusIcons = {
    'نشط': <CheckCircle className="w-4 h-4 text-green-500" />,
    'قيد التطوير': <Clock className="w-4 h-4 text-yellow-500" />,
    'معطل': <XCircle className="w-4 h-4 text-red-500" />
  };

  return (
    <motion.div
      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? 'bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800'
          : 'hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
      onClick={onSelect}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
        isSelected ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-800'
      }`}>
        <Package className={`w-4 h-4 ${
          isSelected ? 'text-purple-600' : 'text-gray-600 dark:text-gray-400'
        }`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium text-gray-900 dark:text-white truncate">
            {subcategory.name}
          </h4>
          {statusIcons[subcategory.status]}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {subcategory.description}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {subcategory.products}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">منتج</p>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {subcategory.efficiency}%
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">كفاءة</p>
        </div>

        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600" />
      </div>
    </motion.div>
  );
}
