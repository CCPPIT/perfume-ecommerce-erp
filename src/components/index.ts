// ===== UI Components =====
export { TikTokCard } from './ui/TikTokCard';
export { Sidebar, Header } from './ui/MobileNavigation';
export {
  TikTokInput,
  TikTokButton,
  TikTokModal,
  TikTokBadge,
  TikTokProgress,
  TikTokCollapsible,
  TikTokToast
} from './ui/TikTokComponents';

// ===== Animation Components =====
export {
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
  PageTransition,
  TikTokPageTransition,
} from './animations';

// ===== Module Components =====
export { LoginForm, RegisterForm, ProfileCard } from './modules/auth/AuthComponents';
export {
  ProductCard,
  ProductGrid,
  ProductFilters
} from './modules/products/ProductComponents';
export {
  OrderCard,
  OrderModal,
  OrderStats
} from './modules/orders/OrderComponents';
export {
  CustomerCard,
  CustomerModal,
  CustomerStats
} from './modules/customers/CustomerComponents';
export {
  InventoryItem,
  StockAdjustmentModal,
  InventoryAlerts
} from './modules/inventory/InventoryComponents';
export {
  SupplierCard,
  SupplierModal,
  SupplierStats
} from './modules/suppliers/SupplierComponents';
export {
  TransactionCard,
  AccountCard,
  FinancialSummary,
  InvoiceCard
} from './modules/accounting/AccountingComponents';
export {
  EmployeeCard,
  AttendanceCard,
  DepartmentCard,
  PerformanceCard
} from './modules/hr/HrComponents';
export {
  CampaignCard,
  CouponCard,
  LoyaltyProgramCard
} from './modules/marketing/MarketingComponents';
export {
  GeneralDepartmentCard,
  DepartmentModal,
  GeneralManagementDashboard,
  DepartmentDetailView
} from './modules/general-management/GeneralManagementComponents';
export {
  DocumentCard,
  DocumentManagementDashboard,
  DigitalArchiveCard,
  DigitalArchivesDashboard,
  DocumentWorkflowModal
} from './modules/general-management/DocumentManagementComponents';
export {
  KPICard,
  PerformanceManagementDashboard,
  EvaluationDetailModal
} from './modules/general-management/PerformanceManagementComponents';
export {
  SidebarLayout,
  AdvancedSidebar,
  MobileBottomNav,
  MobileSidebar,
  EnhancedHeader
} from './modules/general-management/AdvancedSidebar';
export {
  DepartmentPage,
  departmentPages
} from './modules/general-management/DepartmentPages';

// ===== Hooks =====
export { useI18n } from '../hooks/useI18n';
