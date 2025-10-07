'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Megaphone, TrendingUp, Users, Target, Calendar, DollarSign, Eye, MousePointer, Award } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface CampaignCardProps {
  campaign: {
    id: string;
    name: string;
    type: 'email' | 'sms' | 'social' | 'influencer' | 'ads';
    status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled';
    budget: number;
    spent: number;
    startDate?: string;
    endDate?: string;
    targetAudience?: string;
    metrics?: {
      impressions?: number;
      clicks?: number;
      conversions?: number;
      ctr?: number;
    };
  };
  onView?: () => void;
  onEdit?: () => void;
  onPause?: () => void;
  onResume?: () => void;
}

export const CampaignCard = ({ campaign, onView, onEdit, onPause, onResume }: CampaignCardProps) => {
  const { t } = useI18n();

  const typeConfig = {
    email: { color: 'blue', label: 'البريد الإلكتروني', icon: '📧' },
    sms: { color: 'green', label: 'الرسائل النصية', icon: '📱' },
    social: { color: 'purple', label: 'وسائل التواصل', icon: '📱' },
    influencer: { color: 'pink', label: 'المؤثرين', icon: '⭐' },
    ads: { color: 'orange', label: 'الإعلانات', icon: '📢' },
  };

  const statusConfig = {
    draft: { color: 'secondary', label: 'مسودة' },
    active: { color: 'success', label: 'نشطة' },
    paused: { color: 'warning', label: 'متوقفة' },
    completed: { color: 'primary', label: 'مكتملة' },
    cancelled: { color: 'error', label: 'ملغية' },
  };

  const typeInfo = typeConfig[campaign.type];
  const statusInfo = statusConfig[campaign.status];

  const budgetUtilization = (campaign.spent / campaign.budget) * 100;

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
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-lg">{typeInfo.icon}</span>
          </motion.div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {campaign.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {typeInfo.label}
            </p>
          </div>
        </div>

        <TikTokBadge variant={statusInfo.color as any}>
          {statusInfo.label}
        </TikTokBadge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">الميزانية</div>
          <div className="font-semibold text-gray-900 dark:text-white">
            ${campaign.budget.toLocaleString()}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">المصروف</div>
          <div className="font-semibold text-green-600 dark:text-green-400">
            ${campaign.spent.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">استخدام الميزانية</span>
          <span className="font-medium">{Math.round(budgetUtilization)}%</span>
        </div>
        <TikTokProgress
          value={budgetUtilization}
          color={budgetUtilization > 80 ? 'red' : budgetUtilization > 50 ? 'purple' : 'green'}
          size="sm"
        />
      </div>

      {campaign.metrics && (
        <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          {campaign.metrics.impressions && (
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {campaign.metrics.impressions.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">المشاهدات</div>
            </div>
          )}

          {campaign.metrics.clicks && (
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {campaign.metrics.clicks.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">النقرات</div>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2">
        {onView && (
          <TikTokButton onClick={onView} variant="outline" size="sm" className="flex-1">
            عرض التفاصيل
          </TikTokButton>
        )}

        {onEdit && campaign.status === 'draft' && (
          <TikTokButton onClick={onEdit} variant="outline" size="sm">
            تعديل
          </TikTokButton>
        )}

        {onPause && campaign.status === 'active' && (
          <TikTokButton onClick={onPause} variant="outline" size="sm">
            إيقاف
          </TikTokButton>
        )}

        {onResume && campaign.status === 'paused' && (
          <TikTokButton onClick={onResume} variant="primary" size="sm">
            استئناف
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface CouponCardProps {
  coupon: {
    id: string;
    code: string;
    type: 'percentage' | 'fixed_amount' | 'free_shipping' | 'buy_x_get_y';
    value: number;
    usageLimit?: number;
    usageCount: number;
    expiryDate?: string;
    isActive: boolean;
    applicableProducts?: string[];
    applicableCategories?: string[];
  };
  onEdit?: () => void;
  onToggle?: () => void;
  onDelete?: () => void;
}

export const CouponCard = ({ coupon, onEdit, onToggle, onDelete }: CouponCardProps) => {
  const { t } = useI18n();

  const typeConfig = {
    percentage: { label: 'نسبة مئوية', color: 'green' },
    fixed_amount: { label: 'مبلغ ثابت', color: 'blue' },
    free_shipping: { label: 'شحن مجاني', color: 'purple' },
    buy_x_get_y: { label: 'اشترِ X واحصل على Y', color: 'orange' },
  };

  const typeInfo = typeConfig[coupon.type];

  const usagePercentage = coupon.usageLimit
    ? (coupon.usageCount / coupon.usageLimit) * 100
    : 0;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-mono font-bold text-purple-600 dark:text-purple-400">
              {coupon.code}
            </span>
            <TikTokBadge variant={typeInfo.color as any} size="sm">
              {typeInfo.label}
            </TikTokBadge>
          </div>

          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {coupon.type === 'percentage' && `${coupon.value}%`}
            {coupon.type === 'fixed_amount' && `$${coupon.value}`}
            {coupon.type === 'free_shipping' && 'شحن مجاني'}
            {coupon.type === 'buy_x_get_y' && `${coupon.value} مجاني`}
          </div>
        </div>

        <div className="flex gap-2">
          <TikTokBadge variant={coupon.isActive ? 'success' : 'secondary'}>
            {coupon.isActive ? 'نشط' : 'معطل'}
          </TikTokBadge>

          {onEdit && (
            <motion.button
              onClick={onEdit}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">الاستخدام</div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {coupon.usageCount} / {coupon.usageLimit || 'غير محدود'}
          </div>
        </div>

        {coupon.expiryDate && (
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">تاريخ الانتهاء</div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {new Date(coupon.expiryDate).toLocaleDateString('ar-SA')}
            </div>
          </div>
        )}
      </div>

      {coupon.usageLimit && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">نسبة الاستخدام</span>
            <span className="font-medium">{Math.round(usagePercentage)}%</span>
          </div>
          <TikTokProgress
            value={usagePercentage}
            color={usagePercentage > 80 ? 'red' : usagePercentage > 50 ? 'purple' : 'green'}
            size="sm"
          />
        </div>
      )}

      <div className="flex gap-2">
        {onToggle && (
          <TikTokButton
            onClick={onToggle}
            variant={coupon.isActive ? 'outline' : 'primary'}
            size="sm"
            className="flex-1"
          >
            {coupon.isActive ? 'تعطيل' : 'تفعيل'}
          </TikTokButton>
        )}

        {onDelete && (
          <TikTokButton onClick={onDelete} variant="outline" size="sm">
            حذف
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface LoyaltyProgramCardProps {
  program: {
    id: string;
    name: string;
    pointsRatio: number;
    redemptionRate: number;
    tiers: Array<{
      name: string;
      minPoints: number;
      benefits: string[];
    }>;
    totalMembers: number;
    totalPointsIssued: number;
    totalRedemptions: number;
  };
  onView?: () => void;
  onEdit?: () => void;
}

export const LoyaltyProgramCard = ({ program, onView, onEdit }: LoyaltyProgramCardProps) => {
  const { t } = useI18n();

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
            className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
          >
            <Award className="w-5 h-5" />
          </motion.div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {program.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              برنامج مكافآت العملاء
            </p>
          </div>
        </div>

        {onEdit && (
          <motion.button
            onClick={onEdit}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </motion.button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {program.pointsRatio}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            نقاط لكل ريال
          </div>
        </div>

        <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-xl font-bold text-green-600 dark:text-green-400">
            {program.totalMembers}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            الأعضاء
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">المستويات</div>
        <div className="space-y-2">
          {program.tiers.map((tier, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="font-medium text-gray-900 dark:text-white">
                {tier.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {tier.minPoints}+ نقطة
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
            {program.totalPointsIssued.toLocaleString()}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            النقاط المصدرة
          </div>
        </div>

        <div className="text-center">
          <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
            {program.totalRedemptions.toLocaleString()}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            الاستبدالات
          </div>
        </div>
      </div>

      {onView && (
        <TikTokButton onClick={onView} variant="outline" size="sm" className="w-full">
          عرض التفاصيل
        </TikTokButton>
      )}
    </motion.div>
  );
};
