'use client';

import { useState } from 'react';
import { TikTokCard } from '../../components/ui/TikTokCard';
import { MobileNavigation, Sidebar, Header } from '../../components/ui/MobileNavigation';
import {
  TikTokSlideUp,
  TikTokBounceIn,
  TikTokStaggerContainer,
  TikTokFloatingAction,
  PulseAnimation,
  GlowEffect,
  TikTokLoadingSpinner,
  TikTokSkeletonLoader,
  SwipeableCard,
  PullToRefresh,
  TikTokPageTransition,
} from '../../components/animations';
import { useI18n } from '../../hooks/useI18n';

export default function TikTokDemoPage() {
  const [currentTab, setCurrentTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { t } = useI18n();

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const demoProducts = [
    {
      id: '1',
      title: 'عطر شانيل نمبر 5 الأصلي',
      description: 'عطر كلاسيكي فاخر برائحة الورد والياسمين',
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=600&fit=crop',
      user: {
        name: 'متجر العطور الفاخرة',
        avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop&crop=face',
        verified: true,
      },
      likes: 1250,
      comments: 89,
      shares: 23,
    },
    {
      id: '2',
      title: 'مجموعة عطور صيفية جديدة',
      description: 'مجموعة متنوعة من العطور المنعشة لفصل الصيف',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=600&fit=crop',
      user: {
        name: 'عطور الشرق الأوسط',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        verified: true,
      },
      likes: 892,
      comments: 156,
      shares: 45,
    },
    {
      id: '3',
      title: 'عطر خاص للمناسبات الرسمية',
      description: 'رائحة قوية وجذابة تناسب المناسبات الخاصة والرسمية',
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59db0?w=400&h=600&fit=crop',
      user: {
        name: 'دار العطور العربية',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        verified: false,
      },
      likes: 567,
      comments: 34,
      shares: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header
        title={t('products.title')}
        subtitle={t('products.subtitle')}
        onMenuClick={() => setSidebarOpen(true)}
        showNotifications={true}
        showSearch={true}
        actions={
        <PulseAnimation>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
            {t('products.addProduct')}
          </button>
        </PulseAnimation>
        }
      />

      {/* Main Content */}
      <TikTokPageTransition>
        <PullToRefresh onRefresh={handleRefresh}>
          <div className="pb-20">
            {isRefreshing ? (
              <div className="flex items-center justify-center py-8">
                <TikTokLoadingSpinner size="large" />
                <span className="mr-3 text-gray-600 dark:text-gray-400">
                  {t('common.loading')}
                </span>
              </div>
            ) : (
              <TikTokStaggerContainer className="p-4 space-y-6">
                {demoProducts.map((product, index) => (
                  <TikTokSlideUp key={product.id} delay={index * 0.1}>
                    <SwipeableCard
                      onSwipeLeft={() => console.log('Swiped left')}
                      onSwipeRight={() => console.log('Swiped right')}
                    >
                      <GlowEffect isActive={currentTab === 'home'}>
                        <TikTokCard {...product} />
                      </GlowEffect>
                    </SwipeableCard>
                  </TikTokSlideUp>
                ))}
              </TikTokStaggerContainer>
            )}

            {/* Loading State Demo */}
            {isRefreshing && (
              <div className="p-4">
                <TikTokSkeletonLoader lines={3} />
              </div>
            )}
          </div>
        </PullToRefresh>
      </TikTokPageTransition>

      {/* Floating Action Button */}
      <TikTokFloatingAction onClick={() => console.log('Add new product')}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </TikTokFloatingAction>

      {/* Mobile Navigation */}
      <MobileNavigation
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        unreadNotifications={3}
        unreadMessages={5}
      />

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* Demo Controls */}
      <div className="fixed top-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-10">
        <h3 className="font-medium text-gray-900 dark:text-white mb-2">
          عرض تجريبي للحركات
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">
              TikTok-style Cards
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">
              Interactive Animations
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">
              Mobile Navigation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
