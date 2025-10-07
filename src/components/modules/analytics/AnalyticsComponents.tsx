'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign, Target, Calendar } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  format?: 'currency' | 'percentage' | 'number';
}

export const MetricCard = ({ title, value, change, changeType, icon, color, format }: MetricCardProps) => {
  const formatValue = (val: string | number) => {
    if (format === 'currency') return `$${Number(val).toLocaleString()}`;
    if (format === 'percentage') return `${Number(val).toLocaleString()}%`;
    return Number(val).toLocaleString();
  };

  const getChangeColor = () => {
    if (changeType === 'increase') return 'text-green-600 dark:text-green-400';
    if (changeType === 'decrease') return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getChangeIcon = () => {
    if (changeType === 'increase') return <TrendingUp className="w-3 h-3" />;
    if (changeType === 'decrease') return <TrendingDown className="w-3 h-3" />;
    return null;
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
          color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
          color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
          color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
          'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
        }`}>
          {icon}
        </div>

        {change !== undefined && (
          <div className={`flex items-center gap-1 text-sm ${getChangeColor()}`}>
            {getChangeIcon()}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>

      <div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {formatValue(value)}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {title}
        </div>
      </div>
    </motion.div>
  );
};

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  onViewFull?: () => void;
  onExport?: () => void;
}

export const ChartCard = ({ title, children, onViewFull, onExport }: ChartCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        <div className="flex gap-2">
          {onViewFull && (
            <TikTokButton onClick={onViewFull} variant="outline" size="sm">
              عرض كامل
            </TikTokButton>
          )}

          {onExport && (
            <TikTokButton onClick={onExport} variant="outline" size="sm">
              تصدير
            </TikTokButton>
          )}
        </div>
      </div>

      <div className="h-64">
        {children}
      </div>
    </motion.div>
  );
};

interface ReportFiltersProps {
  dateRange: {
    start: string;
    end: string;
  };
  onDateRangeChange: (range: { start: string; end: string }) => void;
  selectedMetrics: string[];
  onMetricsChange: (metrics: string[]) => void;
  availableMetrics: Array<{ id: string; label: string }>;
  onGenerate: () => void;
  loading?: boolean;
}

export const ReportFilters = ({
  dateRange,
  onDateRangeChange,
  selectedMetrics,
  onMetricsChange,
  availableMetrics,
  onGenerate,
  loading = false,
}: ReportFiltersProps) => {
  const { t } = useI18n();

  const handleMetricToggle = (metricId: string) => {
    const newMetrics = selectedMetrics.includes(metricId)
      ? selectedMetrics.filter(m => m !== metricId)
      : [...selectedMetrics, metricId];

    onMetricsChange(newMetrics);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Date Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            نطاق التاريخ
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => onDateRangeChange({ ...dateRange, start: e.target.value })}
              className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:border-purple-500 focus:outline-none"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => onDateRangeChange({ ...dateRange, end: e.target.value })}
              className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Metrics Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            المقاييس
          </label>
          <div className="flex flex-wrap gap-2">
            {availableMetrics.map((metric) => (
              <motion.button
                key={metric.id}
                onClick={() => handleMetricToggle(metric.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedMetrics.includes(metric.id)
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {metric.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex items-end">
          <TikTokButton
            onClick={onGenerate}
            variant="primary"
            loading={loading}
            className="w-full"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            إنشاء التقرير
          </TikTokButton>
        </div>
      </div>
    </motion.div>
  );
};

interface TopPerformersProps {
  title: string;
  items: Array<{
    id: string;
    name: string;
    value: number;
    change?: number;
    image?: string;
  }>;
  type: 'products' | 'customers' | 'categories';
  onViewAll?: () => void;
}

export const TopPerformers = ({ title, items, type, onViewAll }: TopPerformersProps) => {
  const { t } = useI18n();

  const getItemIcon = () => {
    switch (type) {
      case 'products':
        return <ShoppingBag className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'customers':
        return <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'categories':
        return <Target className="w-4 h-4 text-green-600 dark:text-green-400" />;
      default:
        return <BarChart3 className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        {onViewAll && (
          <TikTokButton onClick={onViewAll} variant="outline" size="sm">
            عرض الكل
          </TikTokButton>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full text-sm font-bold text-purple-600 dark:text-purple-400">
              {index + 1}
            </div>

            <div className="flex items-center gap-3 flex-1">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                  {getItemIcon()}
                </div>
              )}

              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.name}
                </div>
                {item.change && (
                  <div className={`text-sm flex items-center gap-1 ${
                    item.change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {item.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {Math.abs(item.change)}%
                  </div>
                )}
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold text-gray-900 dark:text-white">
                {type === 'products' ? `$${item.value}` : item.value.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {type === 'products' ? 'المبيعات' : type === 'customers' ? 'المشتريات' : 'المنتجات'}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

interface AnalyticsSummaryProps {
  summary: {
    totalRevenue: number;
    totalOrders: number;
    totalCustomers: number;
    totalProducts: number;
    revenueChange: number;
    ordersChange: number;
    customersChange: number;
    productsChange: number;
  };
}

export const AnalyticsSummary = ({ summary }: AnalyticsSummaryProps) => {
  const { t } = useI18n();

  const summaryCards = [
    {
      title: 'إجمالي الإيرادات',
      value: summary.totalRevenue,
      change: summary.revenueChange,
      icon: <DollarSign className="w-6 h-6" />,
      color: 'green' as const,
      format: 'currency' as const,
    },
    {
      title: 'إجمالي الطلبات',
      value: summary.totalOrders,
      change: summary.ordersChange,
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'blue' as const,
      format: 'number' as const,
    },
    {
      title: 'إجمالي العملاء',
      value: summary.totalCustomers,
      change: summary.customersChange,
      icon: <Users className="w-6 h-6" />,
      color: 'purple' as const,
      format: 'number' as const,
    },
    {
      title: 'إجمالي المنتجات',
      value: summary.totalProducts,
      change: summary.productsChange,
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'orange' as const,
      format: 'number' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {summaryCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <MetricCard {...card} />
        </motion.div>
      ))}
    </div>
  );
};
