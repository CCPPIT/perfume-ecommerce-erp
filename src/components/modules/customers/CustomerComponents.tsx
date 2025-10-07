'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User, Phone, Mail, MapPin, Star, ShoppingBag, Calendar, Award } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface CustomerCardProps {
  customer: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    avatar?: string;
    totalOrders: number;
    totalSpent: number;
    loyaltyPoints: number;
    tier: 'bronze' | 'silver' | 'gold' | 'platinum';
    joinDate: string;
    lastOrderDate?: string;
  };
  onView?: () => void;
  onEdit?: () => void;
}

export const CustomerCard = ({ customer, onView, onEdit }: CustomerCardProps) => {
  const { t } = useI18n();

  const tierConfig = {
    bronze: { color: 'warning', label: t('customers.bronze') },
    silver: { color: 'secondary', label: t('customers.silver') },
    gold: { color: 'warning', label: t('customers.gold') },
    platinum: { color: 'primary', label: t('customers.platinum') },
  };

  const tierInfo = tierConfig[customer.tier];

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {customer.avatar ? (
            <img
              src={customer.avatar}
              alt={customer.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            customer.name.charAt(0).toUpperCase()
          )}
        </motion.div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {customer.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <TikTokBadge variant={tierInfo.color as any} size="sm">
                  <Award className="w-3 h-3 mr-1" />
                  {tierInfo.label}
                </TikTokBadge>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  منذ {new Date(customer.joinDate).toLocaleDateString('ar-SA')}
                </span>
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

          <div className="space-y-2 mb-4">
            {customer.email && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{customer.email}</span>
              </div>
            )}

            {customer.phone && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{customer.phone}</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {customer.totalOrders}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                طلبات
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                ${customer.totalSpent}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                إجمالي المشتريات
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                {customer.loyaltyPoints}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                نقاط الولاء
              </div>
            </div>
          </div>

          {customer.lastOrderDate && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>آخر طلب: {new Date(customer.lastOrderDate).toLocaleDateString('ar-SA')}</span>
              </div>
            </div>
          )}

          {onView && (
            <TikTokButton
              onClick={onView}
              variant="outline"
              size="sm"
              className="w-full mt-4"
            >
              عرض التفاصيل
            </TikTokButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface CustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    avatar?: string;
    totalOrders: number;
    totalSpent: number;
    loyaltyPoints: number;
    tier: string;
    joinDate: string;
    addresses: Array<{
      type: string;
      street: string;
      city: string;
      country: string;
    }>;
    recentOrders: Array<{
      id: string;
      orderNumber: string;
      total: number;
      status: string;
      createdAt: string;
    }>;
  } | null;
}

export const CustomerModal = ({ isOpen, onClose, customer }: CustomerModalProps) => {
  const { t } = useI18n();

  if (!customer) return null;

  return (
    <TikTokModal
      isOpen={isOpen}
      onClose={onClose}
      title={`عميل: ${customer.name}`}
      size="lg"
    >
      <div className="space-y-6">
        {/* Customer Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {customer.avatar ? (
              <img
                src={customer.avatar}
                alt={customer.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              customer.name.charAt(0).toUpperCase()
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {customer.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <TikTokBadge variant="primary">
                {customer.tier}
              </TikTokBadge>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                عميل منذ {new Date(customer.joinDate).toLocaleDateString('ar-SA')}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">معلومات التواصل</h4>
            <div className="space-y-2 text-sm">
              {customer.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{customer.email}</span>
                </div>
              )}
              {customer.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{customer.phone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">الإحصائيات</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {customer.totalOrders}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  إجمالي الطلبات
                </div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ${customer.totalSpent}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  إجمالي المشتريات
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses */}
        {customer.addresses.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">العناوين</h4>
            <div className="space-y-3">
              {customer.addresses.map((address, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {address.type}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {address.street}, {address.city}, {address.country}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Orders */}
        {customer.recentOrders.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">الطلبات الأخيرة</h4>
            <div className="space-y-3">
              {customer.recentOrders.map((order) => (
                <motion.div
                  key={order.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {order.orderNumber}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString('ar-SA')}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      ${order.total}
                    </div>
                    <TikTokBadge variant="primary" size="sm">
                      {order.status}
                    </TikTokBadge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <TikTokButton variant="outline" onClick={onClose} className="flex-1">
            إغلاق
          </TikTokButton>
          <TikTokButton variant="primary" className="flex-1">
            إرسال رسالة
          </TikTokButton>
        </div>
      </div>
    </TikTokModal>
  );
};

interface CustomerStatsProps {
  stats: {
    total: number;
    active: number;
    new: number;
    topCustomers: Array<{
      id: string;
      name: string;
      totalSpent: number;
    }>;
  };
}

export const CustomerStats = ({ stats }: CustomerStatsProps) => {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">إجمالي العملاء</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.total}
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">العملاء النشطين</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.active}
            </p>
          </div>
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">العملاء الجدد</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.new}
            </p>
          </div>
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
