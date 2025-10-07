'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Calculator, FileText, CreditCard, PiggyBank, Receipt } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface TransactionCardProps {
  transaction: {
    id: string;
    type: 'income' | 'expense';
    amount: number;
    description: string;
    category: string;
    date: string;
    reference?: string;
    account: string;
  };
  onView?: () => void;
  onEdit?: () => void;
}

export const TransactionCard = ({ transaction, onView, onEdit }: TransactionCardProps) => {
  const { t } = useI18n();

  const isIncome = transaction.type === 'income';

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
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isIncome
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {isIncome ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
          </motion.div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {transaction.description}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {transaction.category} • {transaction.account}
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className={`text-lg font-bold ${
            isIncome ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {isIncome ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(transaction.date).toLocaleDateString('ar-SA')}
          </div>
        </div>
      </div>

      {transaction.reference && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            المرجع: {transaction.reference}
          </div>
        </div>
      )}

      <div className="flex gap-2">
        {onView && (
          <TikTokButton onClick={onView} variant="outline" size="sm" className="flex-1">
            عرض التفاصيل
          </TikTokButton>
        )}

        {onEdit && (
          <TikTokButton onClick={onEdit} variant="outline" size="sm">
            تعديل
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface AccountCardProps {
  account: {
    id: string;
    code: string;
    name: string;
    type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
    balance: number;
    category?: string;
  };
  onView?: () => void;
}

export const AccountCard = ({ account, onView }: AccountCardProps) => {
  const { t } = useI18n();

  const typeConfig = {
    asset: { color: 'blue', label: 'أصول', icon: PiggyBank },
    liability: { color: 'red', label: 'خصوم', icon: CreditCard },
    equity: { color: 'purple', label: 'أسهم', icon: TrendingUp },
    revenue: { color: 'green', label: 'إيرادات', icon: TrendingUp },
    expense: { color: 'orange', label: 'مصروفات', icon: TrendingDown },
  };

  const typeInfo = typeConfig[account.type];
  const TypeIcon = typeInfo.icon;

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
            className={`w-10 h-10 rounded-full flex items-center justify-center bg-${typeInfo.color}-100 dark:bg-${typeInfo.color}-900/30 text-${typeInfo.color}-600 dark:text-${typeInfo.color}-400`}
            whileHover={{ scale: 1.1 }}
          >
            <TypeIcon className="w-5 h-5" />
          </motion.div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {account.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {account.code} {account.category && `• ${account.category}`}
            </p>
          </div>
        </div>

        <TikTokBadge variant={typeInfo.color as any}>
          {typeInfo.label}
        </TikTokBadge>
      </div>

      <div className="text-center mb-4">
        <div className={`text-2xl font-bold ${
          account.balance >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}>
          ${Math.abs(account.balance).toLocaleString()}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          الرصيد الحالي
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

interface FinancialSummaryProps {
  summary: {
    totalAssets: number;
    totalLiabilities: number;
    totalEquity: number;
    netIncome: number;
    totalRevenue: number;
    totalExpenses: number;
  };
}

export const FinancialSummary = ({ summary }: FinancialSummaryProps) => {
  const { t } = useI18n();

  const summaryCards = [
    {
      title: 'إجمالي الأصول',
      value: summary.totalAssets,
      icon: PiggyBank,
      color: 'blue',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'إجمالي الخصوم',
      value: summary.totalLiabilities,
      icon: CreditCard,
      color: 'red',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-600 dark:text-red-400'
    },
    {
      title: 'إجمالي الأسهم',
      value: summary.totalEquity,
      icon: TrendingUp,
      color: 'purple',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'صافي الدخل',
      value: summary.netIncome,
      icon: Calculator,
      color: summary.netIncome >= 0 ? 'green' : 'red',
      bgColor: summary.netIncome >= 0 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20',
      textColor: summary.netIncome >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
    },
    {
      title: 'إجمالي الإيرادات',
      value: summary.totalRevenue,
      icon: TrendingUp,
      color: 'green',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'إجمالي المصروفات',
      value: summary.totalExpenses,
      icon: TrendingDown,
      color: 'orange',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {summaryCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            className={`rounded-2xl p-6 ${card.bgColor} shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {card.title}
                </p>
                <p className={`text-2xl font-bold ${card.textColor}`}>
                  ${card.value.toLocaleString()}
                </p>
              </div>
              <div className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${card.textColor}`} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

interface InvoiceCardProps {
  invoice: {
    id: string;
    invoiceNumber: string;
    type: 'sales' | 'purchase';
    customerName?: string;
    supplierName?: string;
    total: number;
    status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
    issueDate: string;
    dueDate: string;
  };
  onView?: () => void;
  onEdit?: () => void;
  onSend?: () => void;
}

export const InvoiceCard = ({ invoice, onView, onEdit, onSend }: InvoiceCardProps) => {
  const { t } = useI18n();

  const statusConfig = {
    draft: { color: 'secondary', label: 'مسودة' },
    sent: { color: 'primary', label: 'مرسلة' },
    paid: { color: 'success', label: 'مدفوعة' },
    overdue: { color: 'error', label: 'متأخرة' },
    cancelled: { color: 'secondary', label: 'ملغية' },
  };

  const statusInfo = statusConfig[invoice.status];
  const isOverdue = new Date(invoice.dueDate) < new Date() && invoice.status !== 'paid' && invoice.status !== 'cancelled';

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
            {invoice.invoiceNumber}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {invoice.type === 'sales' ? 'فاتورة مبيعات' : 'فاتورة مشتريات'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {invoice.type === 'sales' && invoice.customerName ? invoice.customerName : ''}
            {invoice.type === 'purchase' && invoice.supplierName ? invoice.supplierName : ''}
          </p>
        </div>

        <TikTokBadge variant={isOverdue ? 'error' : statusInfo.color as any}>
          {isOverdue ? 'متأخرة' : statusInfo.label}
        </TikTokBadge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">تاريخ الإصدار</div>
          <div className="font-medium text-gray-900 dark:text-white">
            {new Date(invoice.issueDate).toLocaleDateString('ar-SA')}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">تاريخ الاستحقاق</div>
          <div className={`font-medium ${
            isOverdue ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'
          }`}>
            {new Date(invoice.dueDate).toLocaleDateString('ar-SA')}
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
          ${invoice.total.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          إجمالي الفاتورة
        </div>
      </div>

      <div className="flex gap-2">
        {onView && (
          <TikTokButton onClick={onView} variant="outline" size="sm" className="flex-1">
            عرض
          </TikTokButton>
        )}

        {onEdit && invoice.status === 'draft' && (
          <TikTokButton onClick={onEdit} variant="outline" size="sm">
            تعديل
          </TikTokButton>
        )}

        {onSend && invoice.status === 'draft' && (
          <TikTokButton onClick={onSend} variant="primary" size="sm">
            إرسال
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};
