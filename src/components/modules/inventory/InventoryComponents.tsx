'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Package, AlertTriangle, TrendingUp, TrendingDown, Plus, Minus, MapPin, Calendar, X } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface InventoryItemProps {
  item: {
    id: string;
    productName: string;
    sku: string;
    currentStock: number;
    minStock: number;
    maxStock?: number;
    location: string;
    expiryDate?: string;
    condition: 'new' | 'used' | 'damaged' | 'expired';
    lastUpdated: string;
  };
  onAdjust?: () => void;
  onTransfer?: () => void;
}

export const InventoryItem = ({ item, onAdjust, onTransfer }: InventoryItemProps) => {
  const { t } = useI18n();

  const getStockStatus = () => {
    if (item.currentStock <= 0) return { status: 'error', label: 'نفذ المخزون' };
    if (item.currentStock <= item.minStock) return { status: 'warning', label: 'مخزون قليل' };
    if (item.maxStock && item.currentStock > item.maxStock) return { status: 'secondary', label: 'مخزون زائد' };
    return { status: 'success', label: 'متوفر' };
  };

  const stockStatus = getStockStatus();

  const conditionConfig = {
    new: { color: 'success', label: t('products.new') },
    used: { color: 'warning', label: t('products.used') },
    damaged: { color: 'error', label: t('products.damaged') },
    expired: { color: 'error', label: t('products.expired') },
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            {item.productName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            SKU: {item.sku}
          </p>
        </div>

        <div className="flex gap-2">
          <TikTokBadge variant={stockStatus.status as any}>
            {stockStatus.label}
          </TikTokBadge>
          <TikTokBadge variant={conditionConfig[item.condition].color as any}>
            {conditionConfig[item.condition].label}
          </TikTokBadge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">المخزون الحالي:</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {item.currentStock}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">الحد الأدنى:</span>
            <span className="text-gray-900 dark:text-white">{item.minStock}</span>
          </div>

          {item.maxStock && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">الحد الأقصى:</span>
              <span className="text-gray-900 dark:text-white">{item.maxStock}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">{item.location}</span>
          </div>

          {item.expiryDate && (
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">
                {new Date(item.expiryDate).toLocaleDateString('ar-SA')}
              </span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">آخر تحديث:</span>
            <span className="text-gray-900 dark:text-white">
              {new Date(item.lastUpdated).toLocaleDateString('ar-SA')}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {onAdjust && (
          <TikTokButton
            onClick={onAdjust}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            تعديل المخزون
          </TikTokButton>
        )}

        {onTransfer && (
          <TikTokButton
            onClick={onTransfer}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            نقل
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface StockAdjustmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: {
    id: string;
    productName: string;
    currentStock: number;
  };
  onSubmit: (data: { quantity: number; reason: string; type: 'add' | 'remove' }) => void;
}

export const StockAdjustmentModal = ({ isOpen, onClose, item, onSubmit }: StockAdjustmentModalProps) => {
  const [formData, setFormData] = useState({
    quantity: '',
    reason: '',
    type: 'add' as 'add' | 'remove'
  });
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      quantity: parseInt(formData.quantity),
      reason: formData.reason,
      type: formData.type
    });
    onClose();
    setFormData({ quantity: '', reason: '', type: 'add' });
  };

  if (!item) return null;

  return (
    <TikTokModal
      isOpen={isOpen}
      onClose={onClose}
      title={`تعديل مخزون: ${item.productName}`}
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            نوع التعديل
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'add' | 'remove' }))}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
          >
            <option value="add">إضافة مخزون</option>
            <option value="remove">إزالة مخزون</option>
          </select>
        </div>

        <TikTokInput
          label="الكمية"
          type="number"
          placeholder="أدخل الكمية"
          value={formData.quantity}
          onChange={(value) => setFormData(prev => ({ ...prev, quantity: value }))}
        />

        <TikTokInput
          label="سبب التعديل"
          type="text"
          placeholder="أدخل سبب التعديل"
          value={formData.reason}
          onChange={(value) => setFormData(prev => ({ ...prev, reason: value }))}
        />

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            المخزون الحالي: {item.currentStock}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            المخزون الجديد: {
              formData.type === 'add'
                ? item.currentStock + parseInt(formData.quantity || '0')
                : Math.max(0, item.currentStock - parseInt(formData.quantity || '0'))
            }
          </div>
        </div>

        <div className="flex gap-3">
          <TikTokButton variant="outline" onClick={onClose} className="flex-1">
            إلغاء
          </TikTokButton>
          <TikTokButton variant="primary" className="flex-1">
            حفظ التعديل
          </TikTokButton>
        </div>
      </form>
    </TikTokModal>
  );
};

interface InventoryAlertsProps {
  alerts: Array<{
    id: string;
    type: 'low_stock' | 'expired' | 'damaged';
    productName: string;
    message: string;
    severity: 'low' | 'medium' | 'high';
  }>;
}

export const InventoryAlerts = ({ alerts }: InventoryAlertsProps) => {
  const { t } = useI18n();

  if (alerts.length === 0) {
    return (
      <motion.div
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-green-600 dark:text-green-400 text-4xl mb-3">✅</div>
        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
          لا توجد تنبيهات مخزون
        </h3>
        <p className="text-sm text-green-600 dark:text-green-400">
          جميع المنتجات في حالة جيدة
        </p>
      </motion.div>
    );
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'low_stock':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'expired':
        return <X className="w-5 h-5 text-red-500" />;
      case 'damaged':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low':
        return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default:
        return 'border-l-gray-500 bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          تنبيهات المخزون ({alerts.length})
        </h3>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            className={`p-4 border-l-4 ${getSeverityColor(alert.severity)}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start gap-3">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {alert.productName}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {alert.message}
                </p>
              </div>
              <TikTokButton size="sm" variant="outline">
                مراجعة
              </TikTokButton>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
