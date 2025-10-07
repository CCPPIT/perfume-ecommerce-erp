'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Home,
  Search,
  PlusCircle,
  Heart,
  User,
  ShoppingBag,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  MessageCircle,
} from 'lucide-react';

interface MobileNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  unreadNotifications?: number;
  unreadMessages?: number;
}

export const MobileNavigation = ({
  currentTab,
  onTabChange,
  unreadNotifications = 0,
  unreadMessages = 0,
}: MobileNavigationProps) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'الرئيسية' },
    { id: 'discover', icon: Search, label: 'اكتشف' },
    { id: 'create', icon: PlusCircle, label: 'إنشاء' },
    { id: 'notifications', icon: Bell, label: 'الإشعارات', badge: unreadNotifications },
    { id: 'profile', icon: User, label: 'الملف الشخصي' },
  ];

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              className={`relative flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              onClick={() => onTabChange(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
                {tab.badge && tab.badge > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {tab.badge > 99 ? '99+' : tab.badge}
                  </motion.span>
                )}
              </div>
              <span className={`text-xs ${isActive ? 'font-medium' : ''}`}>
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({
  isOpen,
  onClose,
  currentSection,
  onSectionChange,
}: SidebarProps) => {
  const mainSections = [
    { id: 'dashboard', icon: Home, label: 'لوحة التحكم', color: 'text-blue-600' },
    { id: 'products', icon: ShoppingBag, label: 'المنتجات', color: 'text-green-600' },
    { id: 'orders', icon: BarChart3, label: 'الطلبات', color: 'text-purple-600' },
    { id: 'customers', icon: User, label: 'العملاء', color: 'text-orange-600' },
  ];

  const businessSections = [
    { id: 'inventory', icon: ShoppingBag, label: 'المخزون' },
    { id: 'suppliers', icon: User, label: 'الموردين' },
    { id: 'accounting', icon: BarChart3, label: 'المحاسبة' },
    { id: 'hr', icon: User, label: 'الموارد البشرية' },
  ];

  const supportSections = [
    { id: 'analytics', icon: BarChart3, label: 'التحليلات' },
    { id: 'settings', icon: Settings, label: 'الإعدادات' },
    { id: 'support', icon: MessageCircle, label: 'الدعم الفني' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                القائمة الجانبية
              </h2>
              <motion.button
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Main Sections */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                الرئيسية
              </h3>
              <div className="space-y-1">
                {mainSections.map((section) => {
                  const Icon = section.icon;
                  const isActive = currentSection === section.id;

                  return (
                    <motion.button
                      key={section.id}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => {
                        onSectionChange(section.id);
                        onClose();
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className={`w-5 h-5 ${section.color}`} />
                      <span className="font-medium">{section.label}</span>
                      {isActive && (
                        <motion.div
                          className="flex-1 h-0.5 bg-purple-600 rounded-full ml-auto"
                          layoutId="sidebarActive"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Business Sections */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                إدارة الأعمال
              </h3>
              <div className="space-y-1">
                {businessSections.map((section) => {
                  const Icon = section.icon;
                  const isActive = currentSection === section.id;

                  return (
                    <motion.button
                      key={section.id}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => {
                        onSectionChange(section.id);
                        onClose();
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className={`w-5 h-5 ${section.color}`} />
                      <span className="font-medium">{section.label}</span>
                      {isActive && (
                        <motion.div
                          className="flex-1 h-0.5 bg-purple-600 rounded-full ml-auto"
                          layoutId="sidebarActive"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Support Sections */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                الدعم والإعدادات
              </h3>
              <div className="space-y-1">
                {supportSections.map((section) => {
                  const Icon = section.icon;
                  const isActive = currentSection === section.id;

                  return (
                    <motion.button
                      key={section.id}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => {
                        onSectionChange(section.id);
                        onClose();
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className={`w-5 h-5 ${section.color}`} />
                      <span className="font-medium">{section.label}</span>
                      {isActive && (
                        <motion.div
                          className="flex-1 h-0.5 bg-purple-600 rounded-full ml-auto"
                          layoutId="sidebarActive"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* User Profile Section */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <motion.div
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
                  أ
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">أحمد محمد</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">مدير المتجر</div>
                </div>
                <div className="text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface HeaderProps {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
  showNotifications?: boolean;
  showSearch?: boolean;
  actions?: React.ReactNode;
}

export const Header = ({
  title,
  subtitle,
  onMenuClick,
  showNotifications = true,
  showSearch = true,
  actions,
}: HeaderProps) => {
  return (
    <motion.header
      className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {onMenuClick && (
            <motion.button
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              onClick={onMenuClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          )}

          <div>
            <motion.h1
              className="text-xl font-bold text-gray-900 dark:text-white"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                className="text-sm text-gray-600 dark:text-gray-400"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {showSearch && (
            <motion.button
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>
          )}

          {showNotifications && (
            <motion.button
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5" />
              <motion.span
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                3
              </motion.span>
            </motion.button>
          )}

          {actions}
        </div>
      </div>
    </motion.header>
  );
};
