// صفحة الفئة الثانية: المحاسبة والمالية
// تحتوي على 100 قسم فرعي متخصص في الشؤون المالية والمحاسبية

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  PieChart,
  Wallet,
  CreditCard,
  Receipt,
  FileText,
  BarChart3,
  LineChart,
  Activity,
  Target,
  Award,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  Eye,
  Edit,
  Plus,
  Settings,
  Download,
  Upload,
  Filter,
  Search,
  Users,
  Building,
  Coins,
  PiggyBank,
  Banknote,
  Receipt as ReceiptIcon,
  Calculator as CalculatorIcon,
  FileSpreadsheet,
  Scale,
  Timer,
  Clock,
  Calendar,
  Archive,
  Shield,
  Lock,
  Key,
  UserCheck,
  Workflow,
  Database,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Printer,
  Mail,
  Phone,
  MessageSquare,
  Headphones,
  HelpCircle,
  Info,
  AlertCircle,
  CheckSquare,
  XCircle,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  MapPin,
  Globe,
  Zap,
  Star,
  Heart,
  ThumbsUp,
  Award as AwardIcon,
  Trophy,
  Medal,
  Crown,
  Gem,
  Diamond,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  PlusCircle,
  MinusCircle,
  X,
  Check,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Home,
  Building2,
  Factory,
  Warehouse,
  Truck,
  Plane,
  Ship,
  Train,
  Car,
  Bus,
  Bicycle,
  Walk,
  Run,
  Swim,
  Fly,
  Rocket,
  Satellite,
  Antenna,
  Radio,
  Tv,
  Camera,
  Film,
  Music,
  Mic,
  Headphones as HeadphonesIcon,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Volume1,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart as HeartIcon2,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
  Home as HomeIcon,
  Building as BuildingIcon,
  Factory as FactoryIcon,
  Warehouse as WarehouseIcon,
  Truck as TruckIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Car as CarIcon,
  Bus as BusIcon,
  Bicycle as BicycleIcon,
  Walk as WalkIcon,
  Run as RunIcon,
  Swim as SwimIcon,
  Fly as FlyIcon,
  Rocket as RocketIcon,
  Satellite as SatelliteIcon,
  Antenna as AntennaIcon,
  Radio as RadioIcon,
  Tv as TvIcon,
  Camera as CameraIcon,
  Film as FilmIcon,
  Music as MusicIcon,
  Mic as MicIcon,
  Speaker as SpeakerIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  Volume1 as Volume1Icon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Gem as GemIcon,
  Diamond as DiamondIcon,
  Smile as SmileIcon2,
  Frown as FrownIcon2,
  Meh as MehIcon2,
  PlusCircle as PlusCircleIcon,
  MinusCircle as MinusCircleIcon
} from 'lucide-react';

import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SuperAdvancedSidebar } from '@/components/modules/general-management/SuperAdvancedSidebar';

export default function AccountingFinancePage() {
  const [currentCategory, setCurrentCategory] = useState('accounting-finance');
  const [currentDepartment, setCurrentDepartment] = useState('المحاسبة العامة');
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'transactions', label: 'المعاملات', icon: FileText },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'budget', label: 'الميزانية', icon: Calculator },
    { id: 'analysis', label: 'التحليلات', icon: TrendingUp },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <SuperAdvancedSidebar
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
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  المحاسبة والمالية
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  إدارة شاملة للشؤون المالية والمحاسبية • 100 قسم متخصص
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
                معاملة جديدة
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
          {activeTab === 'overview' && <AccountingOverviewTab />}
          {activeTab === 'transactions' && <TransactionsTab />}
          {activeTab === 'reports' && <ReportsTab />}
          {activeTab === 'budget' && <BudgetTab />}
          {activeTab === 'analysis' && <AnalysisTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  );
}

// نظرة عامة على المحاسبة والمالية
function AccountingOverviewTab() {
  const financialStats = [
    {
      title: 'إجمالي الإيرادات',
      value: '15,750,000 ريال',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'إجمالي المصروفات',
      value: '8,320,000 ريال',
      change: '-3.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'red'
    },
    {
      title: 'صافي الربح',
      value: '7,430,000 ريال',
      change: '+18.7%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'التدفق النقدي',
      value: '+4,150,000 ريال',
      change: '+8.3%',
      trend: 'up',
      icon: Wallet,
      color: 'purple'
    }
  ];

  const recentTransactions = [
    {
      id: 'TXN-2024-001',
      type: 'إيراد',
      description: 'بيع عطور فاخرة',
      amount: '125,000 ريال',
      date: '2024-01-15',
      status: 'مكتملة'
    },
    {
      id: 'TXN-2024-002',
      type: 'مصروف',
      description: 'شراء مواد خام',
      amount: '67,500 ريال',
      date: '2024-01-14',
      status: 'معلقة'
    },
    {
      id: 'TXN-2024-003',
      type: 'إيراد',
      description: 'عمولة مبيعات',
      amount: '23,800 ريال',
      date: '2024-01-13',
      status: 'مكتملة'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Financial Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800' :
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
                    stat.color === 'red' ? 'text-red-600 dark:text-red-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    'text-purple-600 dark:text-purple-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'red' ? 'text-red-900 dark:text-red-100' :
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
                  stat.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'red' ? 'text-red-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    'text-purple-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Financial Chart Placeholder */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            اتجاهات الأداء المالي
          </h3>

          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-2">رسم بياني تفاعلي للأداء المالي</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">سيتم عرض البيانات الفعلية هنا</p>
            </div>
          </div>
        </TikTokCard>

        {/* Recent Transactions */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            آخر المعاملات المالية
          </h3>

          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  transaction.type === 'إيراد' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                }`}>
                  {transaction.type === 'إيراد' ? (
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-red-600" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {transaction.id}
                    </p>
                    <TikTokBadge className={
                      transaction.status === 'مكتملة' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }>
                      {transaction.status}
                    </TikTokBadge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {transaction.date}
                  </p>
                </div>

                <div className="text-right">
                  <p className={`font-bold ${
                    transaction.type === 'إيراد' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {transaction.amount}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {transaction.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Financial Health Indicators */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          مؤشرات الصحة المالية
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              indicator: 'نسبة السيولة',
              value: '2.1',
              status: 'ممتاز',
              description: 'القدرة على الوفاء بالالتزامات قصيرة الأجل'
            },
            {
              indicator: 'نسبة المديونية',
              value: '0.35',
              status: 'جيد',
              description: 'نسبة الديون إلى إجمالي الأصول'
            },
            {
              indicator: 'العائد على الأصول',
              value: '18.5%',
              status: 'ممتاز',
              description: 'كفاءة استخدام الأصول في توليد الأرباح'
            }
          ].map((indicator, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {indicator.indicator}
              </h4>

              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {indicator.value}
              </div>

              <TikTokBadge className={
                indicator.status === 'ممتاز' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                indicator.status === 'جيد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              }>
                {indicator.status}
              </TikTokBadge>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>
      </TikTokCard>
    </div>
  );
}

// باقي التبويبات (نموذج مختصر)
function TransactionsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <FileText className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المعاملات المالية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع المعاملات المالية والحسابات الدائنة والمدينة
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          معاملة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function ReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التقارير المالية والمحاسبية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة وشاملة للأداء المالي والمحاسبي مع التحليلات المتقدمة
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function BudgetTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Calculator className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الميزانية والتخطيط المالي
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخطيط وإدارة الميزانية السنوية والشهرية مع تتبع التنفيذ والانحرافات
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إنشاء ميزانية جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function AnalysisTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <TrendingUp className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التحليلات المالية المتقدمة
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تحليلات متقدمة للأداء المالي مع تنبؤات وتوصيات ذكية
        </p>
        <TikTokButton size="lg" variant="outline">
          <BarChart3 className="w-5 h-5 mr-2" />
          عرض التحليلات
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
          إعدادات النظام المالي
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات النظام المالي والمحاسبي حسب احتياجات المؤسسة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
