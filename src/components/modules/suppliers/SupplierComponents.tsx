'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Star, TrendingUp, TrendingDown, Plus, Edit, Trash2 } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface SupplierCardProps {
  supplier: {
    id: string;
    name: string;
    contact?: string;
    email?: string;
    phone?: string;
    address?: string;
    rating: number;
    totalOrders: number;
    totalSpent: number;
    status: 'active' | 'inactive';
    joinDate: string;
  };
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const SupplierCard = ({ supplier, onView, onEdit, onDelete }: SupplierCardProps) => {
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
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Building2 className="w-6 h-6" />
          </motion.div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {supplier.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <TikTokBadge variant={supplier.status === 'active' ? 'success' : 'secondary'}>
                {supplier.status === 'active' ? 'نشط' : 'غير نشط'}
              </TikTokBadge>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                منذ {new Date(supplier.joinDate).toLocaleDateString('ar-SA')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {onEdit && (
            <motion.button
              onClick={onEdit}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Edit className="w-4 h-4" />
            </motion.button>
          )}

          {onDelete && (
            <motion.button
              onClick={onDelete}
              className="p-2 text-gray-400 hover:text-red-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Trash2 className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {supplier.contact && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">الشخص المسؤول:</span>
            <span>{supplier.contact}</span>
          </div>
        )}

        {supplier.email && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Mail className="w-4 h-4" />
            <span>{supplier.email}</span>
          </div>
        )}

        {supplier.phone && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Phone className="w-4 h-4" />
            <span>{supplier.phone}</span>
          </div>
        )}

        {supplier.address && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{supplier.address}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {supplier.rating}
            </span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            التقييم
          </div>
        </div>

        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
            {supplier.totalOrders}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            الطلبات
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <div className="text-xl font-bold text-green-600 dark:text-green-400">
          ${supplier.totalSpent.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          إجمالي المشتريات
        </div>
      </div>

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
    </motion.div>
  );
};

interface SupplierModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplier: {
    id: string;
    name: string;
    contact?: string;
    email?: string;
    phone?: string;
    address?: string;
    taxId?: string;
    paymentTerms?: string;
    rating: number;
    totalOrders: number;
    totalSpent: number;
    status: string;
    joinDate: string;
    recentOrders: Array<{
      id: string;
      orderNumber: string;
      total: number;
      status: string;
      createdAt: string;
    }>;
  } | null;
}

export const SupplierModal = ({ isOpen, onClose, supplier }: SupplierModalProps) => {
  const { t } = useI18n();

  if (!supplier) return null;

  return (
    <TikTokModal
      isOpen={isOpen}
      onClose={onClose}
      title={`مورد: ${supplier.name}`}
      size="lg"
    >
      <div className="space-y-6">
        {/* Supplier Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            <Building2 className="w-8 h-8" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {supplier.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <TikTokBadge variant={supplier.status === 'active' ? 'success' : 'secondary'}>
                {supplier.status === 'active' ? 'نشط' : 'غير نشط'}
              </TikTokBadge>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                مورد منذ {new Date(supplier.joinDate).toLocaleDateString('ar-SA')}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">معلومات التواصل</h4>
            <div className="space-y-2 text-sm">
              {supplier.contact && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-600 dark:text-gray-400">الشخص المسؤول:</span>
                  <span>{supplier.contact}</span>
                </div>
              )}
              {supplier.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{supplier.email}</span>
                </div>
              )}
              {supplier.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{supplier.phone}</span>
                </div>
              )}
              {supplier.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span>{supplier.address}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">معلومات الأعمال</h4>
            <div className="space-y-2 text-sm">
              {supplier.taxId && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">الرقم الضريبي:</span>
                  <span>{supplier.taxId}</span>
                </div>
              )}
              {supplier.paymentTerms && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">شروط الدفع:</span>
                  <span>{supplier.paymentTerms}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">التقييم:</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{supplier.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {supplier.totalOrders}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي الطلبات
            </div>
          </div>

          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${supplier.totalSpent.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي المشتريات
            </div>
          </div>

          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {supplier.rating}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              متوسط التقييم
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        {supplier.recentOrders.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">الطلبات الأخيرة</h4>
            <div className="space-y-3">
              {supplier.recentOrders.map((order) => (
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
            طلب جديد
          </TikTokButton>
        </div>
      </div>
    </TikTokModal>
  );
};

interface SupplierStatsProps {
  stats: {
    total: number;
    active: number;
    new: number;
    topSuppliers: Array<{
      id: string;
      name: string;
      totalSpent: number;
      rating: number;
    }>;
  };
}

export const SupplierStats = ({ stats }: SupplierStatsProps) => {
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
            <p className="text-sm text-gray-600 dark:text-gray-400">إجمالي الموردين</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.total}
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
            <p className="text-sm text-gray-600 dark:text-gray-400">الموردين النشطين</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.active}
            </p>
          </div>
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
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
            <p className="text-sm text-gray-600 dark:text-gray-400">الموردين الجدد</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.new}
            </p>
          </div>
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
            <Plus className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
