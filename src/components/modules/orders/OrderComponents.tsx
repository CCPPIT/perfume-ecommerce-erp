'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Truck, DollarSign, User, Phone, MapPin } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface OrderCardProps {
  order: {
    id: string;
    orderNumber: string;
    customerName: string;
    customerPhone?: string;
    total: number;
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
    items: Array<{
      name: string;
      quantity: number;
      price: number;
    }>;
  };
  onView?: () => void;
  onUpdateStatus?: (status: string) => void;
}

export const OrderCard = ({ order, onView, onUpdateStatus }: OrderCardProps) => {
  const { t } = useI18n();

  const statusConfig = {
    pending: { color: 'warning', icon: Clock, label: t('orders.pending') },
    confirmed: { color: 'primary', icon: CheckCircle, label: t('orders.confirmed') },
    processing: { color: 'secondary', icon: Package, label: t('orders.processing') },
    shipped: { color: 'primary', icon: Truck, label: t('orders.shipped') },
    delivered: { color: 'success', icon: CheckCircle, label: t('orders.delivered') },
    cancelled: { color: 'error', icon: XCircle, label: t('orders.cancelled') },
  };

  const statusInfo = statusConfig[order.status as keyof typeof statusConfig];
  const StatusIcon = statusInfo.icon;

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
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            {order.orderNumber}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(order.createdAt).toLocaleDateString('ar-SA')}
          </p>
        </div>

        <TikTokBadge variant={statusInfo.color as any} size="sm">
          <StatusIcon className="w-3 h-3 mr-1" />
          {statusInfo.label}
        </TikTokBadge>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 text-sm">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 dark:text-white">{order.customerName}</span>
          {order.customerPhone && (
            <>
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">{order.customerPhone}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Package className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 dark:text-gray-400">
            {order.items.length} منتج
          </span>
          <DollarSign className="w-4 h-4 text-gray-400" />
          <span className="font-semibold text-green-600 dark:text-green-400">
            ${order.total}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <TikTokButton
          onClick={onView}
          variant="outline"
          size="sm"
          className="flex-1"
        >
          عرض التفاصيل
        </TikTokButton>

        {onUpdateStatus && order.status !== 'delivered' && order.status !== 'cancelled' && (
          <select
            value={order.status}
            onChange={(e) => onUpdateStatus(e.target.value)}
            className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:border-purple-500 focus:outline-none"
          >
            <option value="pending">{t('orders.pending')}</option>
            <option value="confirmed">{t('orders.confirmed')}</option>
            <option value="processing">{t('orders.processing')}</option>
            <option value="shipped">{t('orders.shipped')}</option>
            <option value="delivered">{t('orders.delivered')}</option>
            <option value="cancelled">{t('orders.cancelled')}</option>
          </select>
        )}
      </div>
    </motion.div>
  );
};

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: {
    id: string;
    orderNumber: string;
    customerName: string;
    customerPhone?: string;
    customerEmail?: string;
    shippingAddress?: string;
    total: number;
    subtotal: number;
    tax: number;
    shipping: number;
    status: string;
    paymentMethod: string;
    createdAt: string;
    items: Array<{
      id: string;
      name: string;
      quantity: number;
      price: number;
      image?: string;
    }>;
  } | null;
}

export const OrderModal = ({ isOpen, onClose, order }: OrderModalProps) => {
  const { t } = useI18n();

  if (!order) return null;

  return (
    <TikTokModal
      isOpen={isOpen}
      onClose={onClose}
      title={`طلب ${order.orderNumber}`}
      size="lg"
    >
      <div className="space-y-6">
        {/* Order Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">معلومات العميل</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span>{order.customerName}</span>
              </div>
              {order.customerEmail && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-400">@</span>
                  <span>{order.customerEmail}</span>
                </div>
              )}
              {order.customerPhone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{order.customerPhone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">معلومات الطلب</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">رقم الطلب:</span>
                <span className="font-medium">{order.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">حالة الطلب:</span>
                <TikTokBadge variant="primary">{order.status}</TikTokBadge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">طريقة الدفع:</span>
                <span>{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">تاريخ الطلب:</span>
                <span>{new Date(order.createdAt).toLocaleDateString('ar-SA')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        {order.shippingAddress && (
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">عنوان الشحن</h4>
            <div className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {order.shippingAddress}
              </span>
            </div>
          </div>
        )}

        {/* Order Items */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">منتجات الطلب</h4>
          <div className="space-y-3">
            {order.items.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                )}

                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    الكمية: {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ${item.price * item.quantity}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ${item.price} لكل وحدة
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">المجموع الفرعي:</span>
              <span>${order.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">الضريبة:</span>
              <span>${order.tax}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">الشحن:</span>
              <span>${order.shipping}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200 dark:border-gray-700">
              <span className="text-gray-900 dark:text-white">الإجمالي:</span>
              <span className="text-green-600 dark:text-green-400">${order.total}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <TikTokButton variant="outline" onClick={onClose} className="flex-1">
            إغلاق
          </TikTokButton>
          <TikTokButton variant="primary" className="flex-1">
            طباعة الفاتورة
          </TikTokButton>
        </div>
      </div>
    </TikTokModal>
  );
};

interface OrderStatsProps {
  stats: {
    total: number;
    pending: number;
    processing: number;
    shipped: number;
    delivered: number;
    cancelled: number;
  };
}

export const OrderStats = ({ stats }: OrderStatsProps) => {
  const { t } = useI18n();

  const statCards = [
    { key: 'total', label: 'إجمالي الطلبات', value: stats.total, color: 'blue' },
    { key: 'pending', label: 'في الانتظار', value: stats.pending, color: 'yellow' },
    { key: 'processing', label: 'قيد المعالجة', value: stats.processing, color: 'purple' },
    { key: 'shipped', label: 'تم الشحن', value: stats.shipped, color: 'blue' },
    { key: 'delivered', label: 'تم التسليم', value: stats.delivered, color: 'green' },
    { key: 'cancelled', label: 'ملغي', value: stats.cancelled, color: 'red' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.key}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <div className="text-center">
            <div className={`text-2xl font-bold ${
              stat.color === 'blue' ? 'text-blue-600' :
              stat.color === 'green' ? 'text-green-600' :
              stat.color === 'yellow' ? 'text-yellow-600' :
              stat.color === 'red' ? 'text-red-600' :
              'text-purple-600'
            }`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
