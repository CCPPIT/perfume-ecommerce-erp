'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  Users,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Filter,
  Search,
  Plus,
  Eye,
  Edit,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Trophy,
  Activity,
  Zap,
  Settings
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';
import {
  KPI,
  PerformanceEvaluation,
  PerformanceReport,
  KPI_CATEGORIES,
  SAMPLE_KPIS,
  SAMPLE_EVALUATIONS,
  calculateKPIAchievement,
  getKPIStatusColor,
  getKPITrendIcon,
  calculateOverallScore,
  getEvaluationStatusColor,
  generatePerformanceReport
} from './performance';

interface KPICardProps {
  kpi: KPI;
  onView?: () => void;
  onEdit?: () => void;
  compact?: boolean;
}

export const KPICard = ({ kpi, onView, onEdit, compact = false }: KPICardProps) => {
  const { t } = useI18n();

  const categoryConfig = KPI_CATEGORIES[kpi.category];
  const achievement = calculateKPIAchievement(kpi);
  const statusColor = getKPIStatusColor(kpi);
  const trendIcon = getKPITrendIcon(kpi.trend);

  const formatValue = (value: number, unit: KPI['unit']) => {
    switch (unit) {
      case 'currency':
        return `$${value.toLocaleString()}`;
      case 'percentage':
        return `${value}%`;
      case 'ratio':
        return `${value}:1`;
      default:
        return value.toLocaleString();
    }
  };

  if (compact) {
    return (
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{categoryConfig.icon}</span>
            <span className="font-medium text-gray-900 dark:text-white text-sm">
              {kpi.name}
            </span>
          </div>
          <TikTokBadge variant={statusColor as any} size="sm">
            {achievement >= 100 ? 'مكتمل' : `${Math.round(achievement)}%`}
          </TikTokBadge>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            الهدف: {formatValue(kpi.target, kpi.unit)}
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {formatValue(kpi.current, kpi.unit)}
          </div>
        </div>

        <TikTokProgress
          value={Math.min(achievement, 100)}
          color={achievement >= 90 ? 'green' : achievement >= 75 ? 'blue' : achievement >= 60 ? 'yellow' : 'red'}
          size="sm"
          className="mt-2"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              categoryConfig.color === 'green' ? 'bg-green-500' :
              categoryConfig.color === 'blue' ? 'bg-blue-500' :
              categoryConfig.color === 'purple' ? 'bg-purple-500' :
              categoryConfig.color === 'orange' ? 'bg-orange-500' :
              categoryConfig.color === 'yellow' ? 'bg-yellow-500' :
              'bg-indigo-500'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-lg">{categoryConfig.icon}</span>
          </motion.div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {kpi.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {categoryConfig.name}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <TikTokBadge variant={statusColor as any} size="sm">
                {achievement >= 100 ? 'مكتمل' : `${Math.round(achievement)}%`}
              </TikTokBadge>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                {trendIcon} {kpi.trend === 'up' ? 'تحسن' : kpi.trend === 'down' ? 'انخفاض' : 'مستقر'}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatValue(kpi.current, kpi.unit)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            من {formatValue(kpi.target, kpi.unit)}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {kpi.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">المسؤول</div>
          <div className="font-medium text-gray-900 dark:text-white">
            {kpi.responsible}
          </div>
        </div>

        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">الوزن</div>
          <div className="font-medium text-gray-900 dark:text-white">
            {kpi.weight}%
          </div>
        </div>
      </div>

      <TikTokProgress
        value={Math.min(achievement, 100)}
        color={achievement >= 90 ? 'green' : achievement >= 75 ? 'blue' : achievement >= 60 ? 'yellow' : 'red'}
        showLabel
        className="mb-4"
      />

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span>القسم: {kpi.department}</span>
        <span>التحديث القادم: {new Date(kpi.nextUpdate).toLocaleDateString('ar-SA')}</span>
      </div>

      <div className="flex gap-2">
        {onView && (
          <TikTokButton
            onClick={onView}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            التفاصيل
          </TikTokButton>
        )}

        {onEdit && (
          <TikTokButton
            onClick={onEdit}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Edit className="w-4 h-4" />
            تعديل
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface PerformanceManagementDashboardProps {
  onKPISelect?: (kpi: KPI) => void;
  onEvaluationSelect?: (evaluation: PerformanceEvaluation) => void;
}

export const PerformanceManagementDashboard = ({
  onKPISelect,
  onEvaluationSelect
}: PerformanceManagementDashboardProps) => {
  const { t } = useI18n();
  const [kpis, setKpis] = useState<KPI[]>(SAMPLE_KPIS);
  const [evaluations, setEvaluations] = useState<PerformanceEvaluation[]>(SAMPLE_EVALUATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [viewMode, setViewMode] = useState<'kpis' | 'evaluations' | 'reports'>('kpis');

  const filteredKPIs = kpis.filter(kpi => {
    const matchesSearch = kpi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         kpi.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || kpi.category === selectedCategory;
    const matchesDepartment = selectedDepartment === 'all' || kpi.department === selectedDepartment;

    return matchesSearch && matchesCategory && matchesDepartment;
  });

  const departments = Array.from(new Set(kpis.map(k => k.department)));

  const getKPIStats = () => {
    const total = kpis.length;
    const onTrack = kpis.filter(k => ['on_track', 'achieved', 'exceeded'].includes(k.status)).length;
    const atRisk = kpis.filter(k => k.status === 'at_risk').length;
    const offTrack = kpis.filter(k => k.status === 'off_track').length;
    const avgAchievement = kpis.reduce((sum, k) => sum + calculateKPIAchievement(k), 0) / total;

    return { total, onTrack, atRisk, offTrack, avgAchievement };
  };

  const getEvaluationStats = () => {
    const total = evaluations.length;
    const approved = evaluations.filter(e => e.status === 'approved').length;
    const pending = evaluations.filter(e => ['draft', 'in_progress', 'submitted'].includes(e.status)).length;
    const avgScore = evaluations.reduce((sum, e) => sum + e.overallScore, 0) / total;

    return { total, approved, pending, avgScore };
  };

  const kpiStats = getKPIStats();
  const evaluationStats = getEvaluationStats();

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              إدارة الأداء والتقييم
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              نظام شامل لقياس وتحسين الأداء المؤسسي والفردي
            </p>
          </div>

          <div className="flex gap-2">
            <TikTokButton
              onClick={() => setViewMode('kpis')}
              variant={viewMode === 'kpis' ? 'primary' : 'outline'}
              size="sm"
            >
              مؤشرات الأداء
            </TikTokButton>
            <TikTokButton
              onClick={() => setViewMode('evaluations')}
              variant={viewMode === 'evaluations' ? 'primary' : 'outline'}
              size="sm"
            >
              التقييمات
            </TikTokButton>
            <TikTokButton
              onClick={() => setViewMode('reports')}
              variant={viewMode === 'reports' ? 'primary' : 'outline'}
              size="sm"
            >
              التقارير
            </TikTokButton>
          </div>
        </div>

        {/* Stats Cards */}
        {viewMode === 'kpis' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {kpiStats.total}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                إجمالي المؤشرات
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {kpiStats.onTrack}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                في المسار الصحيح
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {kpiStats.atRisk}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                تحت المراقبة
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {Math.round(kpiStats.avgAchievement)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                متوسط الإنجاز
              </div>
            </motion.div>
          </div>
        )}

        {viewMode === 'evaluations' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {evaluationStats.total}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                إجمالي التقييمات
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {evaluationStats.approved}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                التقييمات المعتمدة
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {evaluationStats.pending}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                قيد المراجعة
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {evaluationStats.avgScore.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                متوسط التقييم
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <TikTokInput
              placeholder="البحث..."
              value={searchQuery}
              onChange={setSearchQuery}
              icon={<Search className="w-5 h-5 text-gray-400" />}
            />
          </div>

          <div className="w-full lg:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">جميع الفئات</option>
              {Object.entries(KPI_CATEGORIES).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.icon} {config.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-48">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">جميع الأقسام</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* KPIs View */}
      {viewMode === 'kpis' && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {filteredKPIs.map((kpi) => (
            <KPICard
              key={kpi.id}
              kpi={kpi}
              onView={() => onKPISelect?.(kpi)}
              onEdit={() => {
                console.log('Edit KPI:', kpi.id);
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Evaluations View */}
      {viewMode === 'evaluations' && (
        <div className="space-y-6">
          {evaluations.map((evaluation) => (
            <motion.div
              key={evaluation.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Users className="w-6 h-6" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      تقييم {evaluation.employeeName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {evaluation.position} • {evaluation.department}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      فترة: {evaluation.evaluationPeriod}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {evaluation.overallScore.toFixed(1)}
                  </div>
                  <TikTokBadge variant={getEvaluationStatusColor(evaluation.status) as any}>
                    {evaluation.status === 'approved' ? 'معتمد' :
                     evaluation.status === 'submitted' ? 'مقدم' :
                     evaluation.status === 'in_progress' ? 'قيد العمل' : 'مسودة'}
                  </TikTokBadge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {evaluation.categories.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    فئات التقييم
                  </div>
                </div>

                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {evaluation.goals.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    الأهداف
                  </div>
                </div>

                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {evaluation.strengths.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    نقاط القوة
                  </div>
                </div>
              </div>

              <TikTokButton
                onClick={() => onEvaluationSelect?.(evaluation)}
                variant="outline"
                size="sm"
                className="w-full"
              >
                عرض تفاصيل التقييم
              </TikTokButton>
            </motion.div>
          ))}
        </div>
      )}

      {/* Reports View */}
      {viewMode === 'reports' && (
        <div className="space-y-6">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <BarChart3 className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              تقارير الأداء
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              توليد تقارير شاملة عن أداء المؤسسة والأقسام
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <TikTokButton
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => {
                  const report = generatePerformanceReport('الربع الأول 2024');
                  console.log('Generated report:', report);
                }}
              >
                <Calendar className="w-5 h-5" />
                تقرير ربع سنوي
              </TikTokButton>

              <TikTokButton
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => {
                  const report = generatePerformanceReport('2024', 'الموارد البشرية');
                  console.log('Generated department report:', report);
                }}
              >
                <Building2 className="w-5 h-5" />
                تقرير قسم
              </TikTokButton>

              <TikTokButton
                variant="primary"
                className="flex items-center gap-2"
                onClick={() => {
                  console.log('Generate custom report');
                }}
              >
                <Plus className="w-5 h-5" />
                تقرير مخصص
              </TikTokButton>
            </div>
          </motion.div>
        </div>
      )}

      {filteredKPIs.length === 0 && viewMode === 'kpis' && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            لا توجد مؤشرات أداء
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            لم يتم العثور على مؤشرات أداء تطابق معايير البحث
          </p>
          <TikTokButton variant="outline">
            مسح المرشحات
          </TikTokButton>
        </motion.div>
      )}

      {evaluations.length === 0 && viewMode === 'evaluations' && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            لا توجد تقييمات
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            لم يتم العثور على تقييمات أداء
          </p>
          <TikTokButton variant="outline">
            إضافة تقييم جديد
          </TikTokButton>
        </motion.div>
      )}
    </motion.div>
  );
};

interface EvaluationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  evaluation: PerformanceEvaluation;
}

export const EvaluationDetailModal = ({
  isOpen,
  onClose,
  evaluation
}: EvaluationDetailModalProps) => {
  const { t } = useI18n();

  const completedGoals = evaluation.goals.filter(g => g.achieved).length;
  const totalGoals = evaluation.goals.length;
  const goalCompletionRate = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

  return (
    <TikTokModal
      isOpen={isOpen}
      onClose={onClose}
      title={`تقييم الأداء: ${evaluation.employeeName}`}
      size="xl"
    >
      <div className="space-y-6">
        {/* Header Info */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {evaluation.overallScore.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                التقييم العام
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {Math.round(goalCompletionRate)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                إنجاز الأهداف
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {evaluation.categories.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                فئات التقييم
              </div>
            </div>

            <div className="text-center">
              <TikTokBadge variant={getEvaluationStatusColor(evaluation.status) as any}>
                {evaluation.status === 'approved' ? 'معتمد' : 'قيد المراجعة'}
              </TikTokBadge>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            فئات التقييم
          </h3>
          <div className="space-y-4">
            {evaluation.categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {category.category}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.score.toFixed(1)}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      / 5.0
                    </span>
                  </div>
                </div>

                <TikTokProgress
                  value={(category.score / 5) * 100}
                  color={category.score >= 4 ? 'green' : category.score >= 3 ? 'blue' : 'yellow'}
                  className="mb-3"
                />

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {category.comments}
                </p>

                {category.goals && category.goals.length > 0 && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>الأهداف:</strong> {category.goals.join(', ')}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            الأهداف والإنجازات
          </h3>
          <div className="space-y-3">
            {evaluation.goals.map((goal, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  goal.achieved ? 'bg-green-500' : 'bg-gray-400'
                }`}>
                  {goal.achieved ? <CheckCircle className="w-4 h-4 text-white" /> : <Clock className="w-4 h-4 text-white" />}
                </div>

                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {goal.goal}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    الهدف: {goal.target}
                  </div>
                  {goal.comments && (
                    <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      {goal.comments}
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {Math.round(goal.progress)}%
                  </div>
                  <TikTokBadge variant={goal.achieved ? 'success' : 'warning'} size="sm">
                    {goal.achieved ? 'مكتمل' : 'قيد العمل'}
                  </TikTokBadge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strengths and Areas for Improvement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
              نقاط القوة
            </h3>
            <div className="space-y-2">
              {evaluation.strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Trophy className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-800 dark:text-green-300">
                    {strength}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4">
              مجالات التحسين
            </h3>
            <div className="space-y-2">
              {evaluation.areasForImprovement.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-orange-800 dark:text-orange-300">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Plan */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            خطة التطوير
          </h3>
          <div className="space-y-2">
            {evaluation.developmentPlan.map((plan, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-800 dark:text-blue-300">
                  {plan}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <TikTokButton variant="outline" onClick={onClose} className="flex-1">
            إغلاق
          </TikTokButton>
          <TikTokButton variant="primary" className="flex-1">
            طباعة التقرير
          </TikTokButton>
        </div>
      </div>
    </TikTokModal>
  );
};
