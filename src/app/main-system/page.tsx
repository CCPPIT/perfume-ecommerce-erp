// الصفحة الرئيسية الشاملة للنظام
// تعرض جميع الفئات العشر الرئيسية مع أقسامها البالغ عددها 1000 قسم

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Calculator,
  Package,
  ShoppingCart,
  Brain,
  Headphones,
  Truck,
  Megaphone,
  Settings,
  Globe,
  ChevronRight,
  Users,
  TrendingUp,
  Award,
  Star,
  Activity,
  Target,
  CheckCircle,
  AlertTriangle,
  Eye,
  Edit,
  Plus,
  ArrowRight,
  Grid,
  Layers,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Sparkles,
  Palette,
  Database,
  Cpu,
  Network,
  Monitor,
  Phone,
  Camera,
  Music,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Factory,
  Warehouse,
  Plane,
  Car,
  Train,
  Ship,
  Satellite,
  Radio,
  Tv,
  Speaker,
  Volume2,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  Plus as PlusIcon,
  Minus,
  X,
  Check,
  ChevronDown,
  Filter,
  Search,
  Download,
  Upload,
  Settings as SettingsIcon,
  HelpCircle,
  Info,
  AlertCircle,
  Clock,
  Calendar,
  MapPin,
  Globe as GlobeIcon,
  Lock,
  Unlock,
  Key,
  Shield as ShieldIcon,
  Eye as EyeIcon,
  EyeOff,
  User,
  UserCheck,
  UserPlus,
  UserMinus,
  Users as UsersIcon,
  UserX,
  Crown as CrownIcon,
  Award as AwardIcon,
  Trophy,
  Medal,
  Ribbon,
  Badge,
  Star as StarIcon2,
  Heart as HeartIcon2,
  ThumbsUp,
  ThumbsDown,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  Zap as ZapIcon,
  Cloud,
  Sun,
  Moon,
  Stars,
  CloudRain,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  Thermometer,
  Gauge,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  Plug,
  ZapOff,
  Power,
  PowerOff,
  Volume,
  VolumeX,
  Mic,
  MicOff,
  Headphones as HeadphonesIcon,
  Music as MusicIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume1,
  Volume2 as Volume2Icon,
  Maximize,
  Minimize,
  Pentagon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Gem as GemIcon,
  Diamond,
  Sparkles as SparklesIcon,
  Flame as FlameIcon,
  Cloud as CloudIcon,
  Wind as WindIcon,
  Droplets as DropletsIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Battery as BatteryIcon,
  Plug as PlugIcon,
  ZapOff as ZapOffIcon,
  Power as PowerIcon,
  PowerOff as PowerOffIcon,
  Volume as VolumeIcon,
  VolumeX as VolumeXIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Music as MusicIcon2,
  Play as PlayIcon2,
  Pause as PauseIcon2,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  Volume1 as Volume1Icon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokCard, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';

export default function MainSystemPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // تعريف الفئات العشر الرئيسية مع معلوماتها
  const mainCategories = [
    {
      id: 'general-management',
      name: 'الإدارة العامة',
      icon: Building2,
      color: 'purple',
      description: 'إدارة عامة شاملة لجميع الأقسام والعمليات',
      subcategories: 100,
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      departments: [
        'الإدارة التنفيذية', 'الموارد البشرية', 'الشؤون القانونية', 'المراقبة الداخلية',
        'الجودة', 'الأمن السيبراني', 'الأنظمة والسياسات', 'التخطيط الاستراتيجي',
        'إدارة المخاطر', 'الامتثال والحوكمة'
      ]
    },
    {
      id: 'accounting-finance',
      name: 'المحاسبة والمالية',
      icon: Calculator,
      color: 'green',
      description: 'إدارة شاملة للشؤون المالية والمحاسبية',
      subcategories: 100,
      gradient: 'from-green-600 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      departments: [
        'المحاسبة العامة', 'الحسابات الدائنة', 'الحسابات المدينة', 'الميزانية',
        'الضرائب', 'التدفقات النقدية', 'تقارير الأرباح والخسائر', 'التحليل المالي',
        'التخطيط المالي', 'إدارة التكاليف'
      ]
    },
    {
      id: 'products-perfumes',
      name: 'إدارة المنتجات والعطور',
      icon: Package,
      color: 'pink',
      description: 'إدارة شاملة للمنتجات والعطور والمخزون',
      subcategories: 100,
      gradient: 'from-pink-600 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
      departments: [
        'إدارة العطور الرجالية', 'إدارة العطور النسائية', 'خلطات العطور', 'العطور الشرقية',
        'الزيوت الأساسية', 'إدارة المخزون', 'الموسم والعروض', 'تطوير المنتجات',
        'البحث والتطوير', 'اختبار المنتجات'
      ]
    },
    {
      id: 'ecommerce-system',
      name: 'نظام المتجر الإلكتروني',
      icon: ShoppingCart,
      color: 'orange',
      description: 'نظام متكامل للتجارة الإلكترونية والمبيعات عبر الإنترنت',
      subcategories: 100,
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      departments: [
        'واجهة المتجر', 'سلة التسوق', 'صفحة الدفع', 'نظام الكوبونات',
        'إدارة الطلبات', 'متابعة الشحن', 'مراجعات العملاء', 'الذكاء الاصطناعي للتوصية بالعطور',
        'البحث والتصفح', 'تخصيص التجربة'
      ]
    },
    {
      id: 'ai-analytics',
      name: 'الذكاء الاصطناعي والتحليلات',
      icon: Brain,
      color: 'indigo',
      description: 'نظام ذكاء اصطناعي متقدم للتحليلات والتنبؤات',
      subcategories: 100,
      gradient: 'from-indigo-600 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      departments: [
        'تحليل سلوك العملاء', 'توصية العطور المناسبة', 'التنبؤ بالمبيعات', 'تحليل السوق',
        'مراقبة أداء الموظفين', 'ذكاء تسعير المنتجات', 'مساعد إداري ذكي', 'روبوت دردشة ذكي للمبيعات',
        'تحليل المشاعر', 'معالجة اللغة الطبيعية'
      ]
    },
    {
      id: 'customer-support',
      name: 'خدمة العملاء والدعم',
      icon: Headphones,
      color: 'blue',
      description: 'نظام شامل لخدمة العملاء والدعم الفني',
      subcategories: 100,
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      departments: [
        'إدارة التذاكر', 'الرد الآلي', 'تتبع رضا العملاء', 'دردشة مباشرة',
        'تحليل المشكلات المتكررة', 'إدارة قاعدة المعرفة', 'تدريب موظفي الدعم', 'تقييم أداء الدعم',
        'إدارة وقت الاستجابة', 'إدارة وقت الحل'
      ]
    },
    {
      id: 'supply-chain-logistics',
      name: 'سلسلة التوريد واللوجستيك',
      icon: Truck,
      color: 'emerald',
      description: 'إدارة شاملة لسلسلة التوريد والعمليات اللوجستية',
      subcategories: 100,
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      departments: [
        'إدارة الموردين', 'الشراء الآلي', 'تتبع الشحنات', 'الذكاء الاصطناعي للتنبؤ بالمخزون',
        'إدارة المخازن', 'التوزيع والتسليم', 'إدارة النقل', 'التخليص الجمركي',
        'التجارة الدولية', 'الامتثال الجمركي'
      ]
    },
    {
      id: 'marketing-sales',
      name: 'التسويق والمبيعات',
      icon: Megaphone,
      color: 'red',
      description: 'نظام متكامل للتسويق والمبيعات والترويج',
      subcategories: 100,
      gradient: 'from-red-600 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      departments: [
        'إدارة الحملات الإعلانية', 'البريد التسويقي', 'إدارة المؤثرين', 'برامج الولاء',
        'خصومات تلقائية بالذكاء الاصطناعي', 'التسويق بالمحتوى', 'التسويق بالبحث', 'التسويق بالتأثير',
        'التسويق بالشراكات', 'التسويق بالفعاليات'
      ]
    },
    {
      id: 'tech-infrastructure',
      name: 'التطوير التقني والبنية التحتية',
      icon: Settings,
      color: 'slate',
      description: 'تطوير التقنيات والبنية التحتية التقنية',
      subcategories: 100,
      gradient: 'from-slate-600 to-gray-600',
      bgGradient: 'from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20',
      borderColor: 'border-slate-200 dark:border-slate-800',
      departments: [
        'إدارة الخوادم', 'إدارة الأمان', 'مراقبة الأداء', 'النسخ الاحتياطي',
        'الذكاء الاصطناعي للمراقبة الذاتية', 'تطوير التطبيقات', 'تطوير المواقع الإلكترونية', 'تطوير تطبيقات الهاتف المحمول',
        'تطوير واجهات برمجة التطبيقات', 'تطوير قواعد البيانات'
      ]
    },
    {
      id: 'international-expansion',
      name: 'التوسع الدولي والمتاجر الفرعية',
      icon: Globe,
      color: 'cyan',
      description: 'إدارة التوسع الدولي والمتاجر الفرعية حول العالم',
      subcategories: 100,
      gradient: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      departments: [
        'إدارة اللغات', 'دعم العملات المتعددة', 'الفروع الإلكترونية', 'تحليل الأداء الدولي',
        'إدارة الامتثال الدولي', 'إدارة اللوائح المحلية', 'إدارة الضرائب الدولية', 'إدارة الجمارك الدولية',
        'إدارة الشحن الدولي', 'إدارة التوزيع الدولي'
      ]
    }
  ];

  const filteredCategories = mainCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.departments.some(dept => dept.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-9 h-9 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  نظام إدارة العطور والتجارة الإلكترونية الشامل
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  10 فئات رئيسية • 1000 قسم متخصص • إدارة متكاملة لجميع العمليات
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <TikTokInput
                placeholder="البحث في الفئات والأقسام..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target?.value || '')}
                className="pl-12 text-center"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.bgGradient} ${category.borderColor} border-2 cursor-pointer group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCategoryClick(category.id)}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-12"></div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category.subcategories}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        قسم فرعي
                      </div>
                    </div>
                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        نشط
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        متاح الآن
                      </div>
                    </div>
                  </div>

                  {/* Departments Preview */}
                  <div className="space-y-2 mb-6">
                    {category.departments.slice(0, 3).map((dept, deptIndex) => (
                      <div key={deptIndex} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        <span className="truncate">{dept}</span>
                      </div>
                    ))}
                    {category.departments.length > 3 && (
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        +{category.departments.length - 3} قسم آخر
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <TikTokButton
                    size="sm"
                    className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white border-0`}
                  >
                    <span>استكشف الفئة</span>
                    <ChevronRight className="w-4 h-4 mr-2" />
                  </TikTokButton>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* System Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              title: 'إجمالي الفئات',
              value: '10 فئات',
              icon: Layers,
              color: 'purple'
            },
            {
              title: 'إجمالي الأقسام',
              value: '1000 قسم',
              icon: Grid,
              color: 'blue'
            },
            {
              title: 'الحالة الحالية',
              value: 'نشط',
              icon: Activity,
              color: 'green'
            },
            {
              title: 'آخر تحديث',
              value: 'اليوم',
              icon: Clock,
              color: 'orange'
            }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <TikTokCard key={index} className="text-center p-6">
                <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </div>
              </TikTokCard>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <TikTokCard className="p-12 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ابدأ رحلتك مع نظام الإدارة الشامل
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              اختر الفئة التي تريد استكشافها أو ابحث عن القسم المحدد الذي تحتاجه.
              النظام يوفر إدارة متكاملة لجميع جوانب العمل.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <TikTokButton size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                <Building2 className="w-5 h-5 mr-2" />
                استكشف جميع الفئات
              </TikTokButton>
              <TikTokButton size="lg" variant="outline">
                <Settings className="w-5 h-5 mr-2" />
                إعدادات النظام
              </TikTokButton>
            </div>
          </TikTokCard>
        </motion.div>
      </div>
    </div>
  );
}
