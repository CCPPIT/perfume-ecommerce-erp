'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2, Star, ShoppingCart } from 'lucide-react';
import { TikTokButton, TikTokInput, TikTokBadge } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
    category?: string;
    stock: number;
    rating?: number;
    isFeatured?: boolean;
  };
  onEdit?: () => void;
  onDelete?: () => void;
  onAddToCart?: () => void;
}

export const ProductCard = ({ product, onEdit, onDelete, onAddToCart }: ProductCardProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <div className="text-white text-4xl">🧴</div>
          </div>
        )}

        {product.isFeatured && (
          <motion.div
            className="absolute top-3 left-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <TikTokBadge variant="primary" size="sm">
              مميز
            </TikTokBadge>
          </motion.div>
        )}

        <div className="absolute top-3 right-3 flex gap-2">
          {onEdit && (
            <motion.button
              onClick={onEdit}
              className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Edit className="w-4 h-4" />
            </motion.button>
          )}

          {onDelete && (
            <motion.button
              onClick={onDelete}
              className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-700 dark:text-gray-300 hover:text-red-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Trash2 className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
            {product.name}
          </h3>
          <span className="font-bold text-purple-600 dark:text-purple-400">
            ${product.price}
          </span>
        </div>

        {product.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TikTokBadge variant={product.stock > 10 ? 'success' : product.stock > 0 ? 'warning' : 'error'}>
              {product.stock > 0 ? `${product.stock} متوفر` : 'نفذ المخزون'}
            </TikTokBadge>

            {product.category && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {product.category}
              </span>
            )}
          </div>

          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {product.rating}
              </span>
            </div>
          )}
        </div>

        {onAddToCart && product.stock > 0 && (
          <TikTokButton
            onClick={onAddToCart}
            variant="outline"
            size="sm"
            fullWidth
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            إضافة للسلة
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface ProductGridProps {
  products: Array<{
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
    category?: string;
    stock: number;
    rating?: number;
    isFeatured?: boolean;
  }>;
  loading?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

export const ProductGrid = ({ products, loading = false, onEdit, onDelete, onAddToCart }: ProductGridProps) => {
  const { t } = useI18n();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-6xl mb-4">🧴</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          لا توجد منتجات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ابدأ بإضافة منتجات جديدة لمتجرك
        </p>
        <TikTokButton variant="primary">
          <Plus className="w-5 h-5 mr-2" />
          إضافة منتج جديد
        </TikTokButton>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={() => onEdit?.(product.id)}
          onDelete={() => onDelete?.(product.id)}
          onAddToCart={() => onAddToCart?.(product.id)}
        />
      ))}
    </motion.div>
  );
};

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Array<{ id: string; name: string }>;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const ProductFilters = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  sortBy,
  onSortChange,
}: ProductFiltersProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <TikTokInput
            placeholder={t('products.searchProducts')}
            value={searchQuery}
            onChange={onSearchChange}
            icon={<Search className="w-5 h-5 text-gray-400" />}
          />
        </div>

        {/* Category Filter */}
        <div className="w-full lg:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
          >
            <option value="">{t('products.filterByCategory')}</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="w-full lg:w-48">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
          >
            <option value="name">{t('products.sortByName')}</option>
            <option value="price">{t('products.sortByPrice')}</option>
            <option value="stock">{t('products.sortByStock')}</option>
            <option value="rating">{t('products.sortByRating')}</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
};
