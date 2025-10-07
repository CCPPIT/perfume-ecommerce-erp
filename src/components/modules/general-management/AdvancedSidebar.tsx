// نظام التنقل الرئيسي المتقدم للفئات العشر الرئيسية
// يدعم 10 فئات رئيسية مع 100 قسم لكل فئة (1000 قسم إجمالي)


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Package,
  ShoppingCart,
  Brain,
  Headphones,
  Truck,
  Calculator,
  Megaphone,
  Settings,
  Globe,
  ChevronDown,
  ChevronRight,
  Search,
  Filter,
  Grid,
  List,
  Home,
  Star,
  Clock,
  TrendingUp,
  Users,
  FileText,
  BarChart3,
  Activity,
  Target,
  Award,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  Eye,
  Edit,
  Plus,
  Settings as SettingsIcon,
  Phone,
  Mail,
  MapPin,
  Award as AwardIcon,
  Activity as ActivityIcon,
  Crown,
  HeartHandshake,
  Coins,
  ShoppingCart as ShoppingCartIcon,
  Megaphone as MegaphoneIcon,
  Handshake,
  Scale,
  Timer,
  Route,
  Phone as PhoneIcon,
  AlertCircle,
  CheckSquare,
  Lightbulb,
  MessageSquare,
  GitBranch,
  UserPlus,
  Cpu,
  Key,
  Wallet,
  Folder,
  CalendarDays,
  Cog,
  Code,
  Monitor,
  Palette,
  Layout,
  Wifi,
  Database,
  BookOpen,
  Heart,
  Shield,
  Zap,
  Handshake as HandshakeIcon,
  List as ListIcon,
  Archive,
  File,
  User,
  HeartHandshake as HeartHandshakeIcon,
  // إضافة الأيقونات المفقودة للعطور (مع تبسيط الأسماء)
  Sparkles,
  Droplets,
  Layers,
  Car,
  Cloud,
  SprayCan,
  Box,
  Tag,
  Hand,
  Factory,
  TestTube,
  Gift,
  Droplet,
  Warehouse,
  DollarSign,
  Recycle,
  Wrench,
  GitCompare,
  ShoppingBag,
  RotateCcw,
  Tags,
  FolderTree,
  Gem,
  Gem as GemIcon,
  Thermometer,
  Calendar,
  Microscope,
  TrendingUp as TrendingUpIcon,
  Globe as GlobeIcon,
  Building2 as Building2Icon,
  Plus as PlusIcon,
  Lightbulb as LightbulbIcon,
  // أيقونات بديلة للأيقونات غير المتوفرة
  Stars,
  Droplet as WaterDrop,
  Layers3,
  PaintBucket,
  Package as BoxIcon,
  Tag as TagIcon,
  FolderOpen,
  Gem as Diamond
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokInput, TikTokCard } from '@/components/ui/TikTokComponents';
import { MAIN_CATEGORIES, getMainCategoryInfo, getMainCategoryIcon } from './MainCategories';

// تعريف أيقونات الأقسام الفرعية
const DEPARTMENT_ICONS: Record<string, any> = {
  // الإدارة العامة
  'الإدارة التنفيذية': Crown,
  'الموارد البشرية': HeartHandshake,
  'الشؤون القانونية': Scale,
  'المراقبة الداخلية': Eye,
  'الجودة': Award,
  'الأمن السيبراني': Shield,
  'الأنظمة والسياسات': Settings,
  'التخطيط الاستراتيجي': Target,
  'إدارة المخاطر': AlertTriangle,
  'الامتثال والحوكمة': CheckCircle,

  // المحاسبة والمالية
  'المحاسبة العامة': Calculator,
  'الحسابات الدائنة': FileText,
  'الحسابات المدينة': FileText,
  'الميزانية': BarChart3,
  'الضرائب': Calculator,
  'التدفقات النقدية': TrendingUp,
  'تقارير الأرباح والخسائر': BarChart3,
  'التحليل المالي': Activity,
  'التخطيط المالي': Target,
  'إدارة التكاليف': Calculator,

  // إدارة المنتجات والعطور
  'إدارة العطور الرجالية': Package,
  'إدارة العطور النسائية': Package,
  'خلطات العطور': Package,
  'العطور الشرقية': Package,
  'الزيوت الأساسية': Package,
  'إدارة المخزون': Package,
  'الموسم والعروض': CalendarDays,
  'تطوير المنتجات': Lightbulb,
  'البحث والتطوير': Brain,
  'اختبار المنتجات': CheckSquare,

  // نظام المتجر الإلكتروني
  'واجهة المتجر': Monitor,
  'سلة التسوق': ShoppingCart,
  'صفحة الدفع': Calculator,
  'نظام الكوبونات': Award,
  'إدارة الطلبات': FileText,
  'متابعة الشحن': Truck,
  'مراجعات العملاء': Star,
  'الذكاء الاصطناعي للتوصية بالعطور': Brain,
  'البحث والتصفح': Search,
  'تخصيص التجربة': Settings,

  // الذكاء الاصطناعي والتحليلات
  'تحليل سلوك العملاء': Brain,
  'توصية العطور المناسبة': Brain,
  'التنبؤ بالمبيعات': TrendingUp,
  'تحليل السوق': BarChart3,
  'مراقبة أداء الموظفين': Activity,
  'ذكاء تسعير المنتجات': Brain,
  'مساعد إداري ذكي': Brain,
  'روبوت دردشة ذكي للمبيعات': MessageSquare,
  'تحليل المشاعر': Heart,
  'معالجة اللغة الطبيعية': MessageSquare,

  // خدمة العملاء والدعم
  'إدارة التذاكر': FileText,
  'الرد الآلي': Brain,
  'تتبع رضا العملاء': Star,
  'دردشة مباشرة': MessageSquare,
  'تحليل المشكلات المتكررة': AlertTriangle,
  'إدارة قاعدة المعرفة': BookOpen,
  'تدريب موظفي الدعم': Users,
  'تقييم أداء الدعم': Activity,
  'إدارة وقت الاستجابة': Clock,
  'إدارة وقت الحل': Clock,

  // سلسلة التوريد واللوجستيك
  'إدارة الموردين': Users,
  'الشراء الآلي': Brain,
  'تتبع الشحنات': Truck,
  'الذكاء الاصطناعي للتنبؤ بالمخزون': Brain,
  'إدارة المخازن': Package,
  'التوزيع والتسليم': Truck,
  'إدارة النقل': Truck,
  'التخليص الجمركي': FileText,
  'التجارة الدولية': Globe,
  'الامتثال الجمركي': CheckSquare,

  // التسويق والمبيعات
  'إدارة الحملات الإعلانية': Megaphone,
  'البريد التسويقي': Mail,
  'إدارة المؤثرين': Users,
  'برامج الولاء': Award,
  'خصومات تلقائية بالذكاء الاصطناعي': Brain,
  'التسويق بالمحتوى': FileText,
  'التسويق بالبحث': Search,
  'التسويق بالتأثير': Users,
  'التسويق بالشراكات': Handshake,
  'التسويق بالفعاليات': CalendarDays,

  // التطوير التقني والبنية التحتية
  'إدارة الخوادم': Monitor,
  'إدارة الأمان': Shield,
  'مراقبة الأداء': Activity,
  'النسخ الاحتياطي': Archive,
  'الذكاء الاصطناعي للمراقبة الذاتية': Brain,
  'تطوير التطبيقات': Code,
  'تطوير المواقع الإلكترونية': Monitor,
  'تطوير تطبيقات الهاتف المحمول': Phone,
  'تطوير واجهات برمجة التطبيقات': Code,
  'تطوير قواعد البيانات': Database,

  // التوسع الدولي والمتاجر الفرعية
  'إدارة اللغات': MessageSquare,
  'دعم العملات المتعددة': Calculator,
  'الفروع الإلكترونية': Globe,
  'تحليل الأداء الدولي': BarChart3,
  'إدارة الامتثال الدولي': CheckSquare,
  'إدارة اللوائح المحلية': FileText,
  'إدارة الضرائب الدولية': Calculator,
  'إدارة الجمارك الدولية': Truck,
  'إدارة الشحن الدولي': Truck,
  'إدارة العطور الغربية': Stars,
  'إدارة عطور النيش الفاخرة': Award,
  'إدارة الزيوت العطرية': WaterDrop,
  'إدارة خلطات العطور': Layers3,
  'إدارة عطور السيارات': Car,
  'إدارة بخور ومعطرات الجو': Cloud,
  'إدارة عطور الجسم': User,
  'إدارة المكونات العطرية': TestTube,
  'إدارة الكحول العطري': Droplet,
  'إدارة الروائح الأساسية': Zap,
  'إدارة الروائح الوسطى': Heart,
  'إدارة الروائح القاعدية': Package,
  'إدارة العبوات': Package,
  'إدارة أغطية الزجاجات': Package,
  'إدارة الرشاشات': PaintBucket,
  'إدارة التغليف': BoxIcon,
  'إدارة العلامات والباركود': TagIcon,
  'إدارة تصاميم الزجاجات': Palette,
  'إدارة التصنيع اليدوي': Hand,
  'إدارة الإنتاج الآلي': Factory,
  'إدارة اختبارات الجودة': TestTube,
  'إدارة العينات المجانية': Gift,
  'إدارة الألوان والشفافية': Droplet,
  'إدارة درجات التبخر': Thermometer,
  'إدارة ثبات الرائحة': Clock,
  'إدارة مدة التخزين': Calendar,
  'إدارة التعبئة والتغليف الذكي': Cpu,
  'إدارة المواد الخام': Package,
  'إدارة الموردين للمواد الخام': Users,
  'إدارة المستودعات العطرية': Warehouse,
  'إدارة درجات الحرارة في التخزين': Thermometer,
  'إدارة تواريخ الانتهاء': Calendar,
  'إدارة التوريد الداخلي': Route,
  'إدارة تتبع المنتجات': MapPin,
  'إدارة الكميات المنتجة': BarChart3,
  'إدارة تكاليف التصنيع': Calculator,
  'إدارة تطوير العطور الجديدة': Lightbulb,
  'إدارة الوصفات': FileText,
  'إدارة التجارب العطرية': TestTube,
  'إدارة الاختبار الحسي': Eye,
  'إدارة التحليل الكيميائي': Microscope,
  'إدارة توثيق التركيبات': FileText,
  'إدارة خط الإنتاج': Factory,
  'إدارة مراقبة الجودة التلقائية': Activity,
  'إدارة الأنواع حسب الفئة السعرية': DollarSign,
  'إدارة العطور الموسمية': CalendarDays,
  'إدارة الإصدارات المحدودة': Star,
  'إدارة المشاريع العطرية': Target,
  'إدارة التخطيط للإنتاج': Calendar,
  'إدارة الجداول الزمنية للإنتاج': Timer,
  'إدارة النفايات والتدوير': Recycle,
  'إدارة سلسلة التوريد العطرية': Truck,
  'إدارة طلبات التصنيع': FileText,
  'إدارة تكاليف المواد': Calculator,
  'إدارة المراجعة الفنية': CheckCircle,
  'إدارة التقارير العطرية': BarChart3,
  'إدارة الصيانة الدورية للمعدات': Wrench,
  'إدارة خطوط الإنتاج الفرعية': GitBranch,
  'إدارة التنبؤ بالإنتاج': TrendingUp,
  'إدارة كفاءة التصنيع': Activity,
  'إدارة المكونات الكيميائية': TestTube,
  'إدارة تسجيل المنتجات': FileText,
  'إدارة شهادات الجودة': Award,
  'إدارة العينات التحليلية': TestTube,
  'إدارة المقارنة بين التركيبات': GitCompare,
  'إدارة التخصيص حسب العميل': User,
  'إدارة التعبئة التلقائية': Package,
  'إدارة المنتجات التالفة': AlertTriangle,
  'إدارة المنتجات المسترجعة': RotateCcw,
  'إدارة دورة حياة المنتج': RotateCcw,
  'إدارة التسعير حسب المكونات': Calculator,
  'إدارة الحملات على العطور': Megaphone,
  'إدارة المخزون التفصيلي': Package,
  'إدارة التجارب في المتجر': ShoppingBag,
  'إدارة المراجعات على العطور': Star,
  'إدارة تقييمات العملاء': Star,
  'إدارة الطلبات الخاصة': Crown,
  'إدارة المشاريع العطرية الذكية': Brain,
  'إدارة الذكاء الاصطناعي في النكهات': Cpu,
  'إدارة اختبار الروائح التلقائي': TestTube,
  'إدارة سلاسل التوريد الدولية': Globe,
  'إدارة الموردين الأوروبيين': Building2,
  'إدارة الموردين الآسيويين': Building2,
  'إدارة الموردين المحليين': Building2,
  'إدارة مؤشرات الأداء العطري': BarChart3,
  'إدارة تحليل المكونات': Microscope,
  'إدارة خلطات العطور الخاصة': Stars,
  'إدارة الإنتاج الموسمي': Calendar,
  'إدارة تحليل تكلفة المنتج': Calculator,
  'إدارة تصميم الملصقات': Palette,
  'إدارة العبوات المميزة': Diamond,
  'إدارة المنتجات المكررة': Filter,
  'إدارة العلامات التجارية الفرعية': TagIcon,
  'إدارة التصنيفات العطرية': FolderOpen,
  'إدارة المجموعات (Collections)': Package,
  'إدارة تطوير خطوط عطور جديدة': Plus,
  'إدارة قسم الإبداع العطري': Lightbulb
};
const getDepartmentIcon = (departmentName: string) => {
  return DEPARTMENT_ICONS[departmentName] || Package;
};

interface AdvancedSidebarProps {
  currentCategory?: string;
  currentDepartment?: string;
  onCategoryChange?: (categoryId: string) => void;
  onDepartmentChange?: (departmentName: string) => void;
}

export const AdvancedSidebar: React.FC<AdvancedSidebarProps> = ({
  currentCategory,
  currentDepartment,
  onCategoryChange,
  onDepartmentChange
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'categories' | 'departments' | 'search'>('categories');

  // توسيع الفئة الحالية عند التحميل
  useEffect(() => {
    if (currentCategory) {
      setExpandedCategories(prev => new Set([...prev, currentCategory]));
    }
  }, [currentCategory]);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange?.(categoryId);
    setExpandedCategories(prev => new Set([...prev, categoryId]));
  };

  const handleDepartmentClick = (departmentName: string) => {
    onDepartmentChange?.(departmentName);
  };

  const filteredCategories = Object.entries(MAIN_CATEGORIES).filter(([id, category]) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">نظام الإدارة الشامل</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">10 فئات • 1000 قسم</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <TikTokInput
            placeholder="البحث في الفئات والأقسام..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target?.value || '')}
            className="pl-10"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button
            onClick={() => setViewMode('categories')}
            className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
              viewMode === 'categories'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Grid className="w-4 h-4 mx-auto mb-1" />
            الفئات
          </button>
          <button
            onClick={() => setViewMode('departments')}
            className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
              viewMode === 'departments'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <List className="w-4 h-4 mx-auto mb-1" />
            الأقسام
          </button>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {viewMode === 'categories' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4"
            >
              {filteredCategories.map(([categoryId, category]) => {
                const Icon = category.icon;
                const isExpanded = expandedCategories.has(categoryId);
                const isActive = currentCategory === categoryId;

                return (
                  <div key={categoryId} className="mb-2">
                    <button
                      onClick={() => {
                        handleCategoryClick(categoryId);
                        toggleCategory(categoryId);
                      }}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          isActive ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1 text-right">
                        <div className={`font-medium ${
                          isActive ? 'text-purple-900 dark:text-purple-100' : 'text-gray-900 dark:text-white'
                        }`}>
                          {category.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {category.subcategories} قسم
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pr-6 pl-3 py-2 space-y-1">
                            {category.departments.slice(0, 5).map((dept, index) => {
                              const DeptIcon = getDepartmentIcon(dept);
                              const isDeptActive = currentDepartment === dept;

                              return (
                                <button
                                  key={index}
                                  onClick={() => handleDepartmentClick(dept)}
                                  className={`w-full flex items-center gap-2 p-2 rounded-lg text-sm transition-colors ${
                                    isDeptActive
                                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100'
                                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                                  }`}
                                >
                                  <DeptIcon className="w-4 h-4" />
                                  <span className="truncate">{dept}</span>
                                </button>
                              );
                            })}
                            {category.departments.length > 5 && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                                +{category.departments.length - 5} قسم آخر
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          )}

          {viewMode === 'departments' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-4"
            >
              {Object.entries(MAIN_CATEGORIES).map(([categoryId, category]) => {
                const Icon = category.icon;
                return (
                  <div key={categoryId} className="mb-6">
                    <div className="flex items-center gap-2 mb-3 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {category.name}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {category.departments.slice(0, 10).map((dept, index) => {
                        const DeptIcon = getDepartmentIcon(dept);
                        const isActive = currentDepartment === dept;

                        return (
                          <button
                            key={index}
                            onClick={() => handleDepartmentClick(dept)}
                            className={`w-full flex items-center gap-2 p-2 rounded-lg text-sm transition-colors ${
                              isActive
                                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            <DeptIcon className="w-4 h-4" />
                            <span className="truncate">{dept}</span>
                          </button>
                        );
                      })}
                      {category.departments.length > 10 && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                          +{category.departments.length - 10} قسم آخر
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">فئات رئيسية</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">قسم فرعي</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSidebar;
