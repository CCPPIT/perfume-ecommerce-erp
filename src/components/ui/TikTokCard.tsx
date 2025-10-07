'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TikTokCardProps {
  id: string;
  title: string;
  description?: string;
  image?: string;
  video?: string;
  user?: {
    name: string;
    avatar?: string;
    verified?: boolean;
  };
  likes?: number;
  comments?: number;
  shares?: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  className?: string;
}

export const TikTokCard = ({
  id,
  title,
  description,
  image,
  video,
  user,
  likes = 0,
  comments = 0,
  shares = 0,
  onLike,
  onComment,
  onShare,
  className = '',
}: TikTokCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  const handleComment = () => {
    setShowComments(!showComments);
    onComment?.();
  };

  return (
    <motion.div
      className={`relative w-full max-w-sm mx-auto bg-black rounded-lg overflow-hidden ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Content Area */}
      <div className="relative aspect-[9/16] bg-gray-900">
        {video ? (
          <video
            src={video}
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
          />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
            <div className="text-white text-6xl">🎵</div>
          </div>
        )}

        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <motion.h3
            className="text-white text-lg font-semibold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>

          {description && (
            <motion.p
              className="text-gray-300 text-sm mb-3 line-clamp-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {description}
            </motion.p>
          )}

          {user && (
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-sm font-medium">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  user.name.charAt(0).toUpperCase()
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm font-medium">{user.name}</span>
                  {user.verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute right-3 bottom-20 flex flex-col gap-4">
        <motion.button
          className={`flex flex-col items-center gap-1 p-2 rounded-full transition-colors ${
            isLiked ? 'text-red-500' : 'text-white'
          }`}
          onClick={handleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.div>
          <span className="text-xs">{(likes + (isLiked ? 1 : 0)).toLocaleString()}</span>
        </motion.button>

        <motion.button
          className="flex flex-col items-center gap-1 p-2 rounded-full text-white"
          onClick={handleComment}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: showComments ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.div>
          <span className="text-xs">{comments.toLocaleString()}</span>
        </motion.button>

        <motion.button
          className="flex flex-col items-center gap-1 p-2 rounded-full text-white"
          onClick={onShare}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          <span className="text-xs">{shares.toLocaleString()}</span>
        </motion.button>
      </div>

      {/* Music Info */}
      <div className="absolute bottom-3 left-3">
        <motion.div
          className="flex items-center gap-2 p-2 bg-black/50 rounded-lg"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 3a1 1 0 00-1.196-.98L9 3.73 1.196 2.02A1 1 0 000 3v7a1 1 0 001 1h.5v7.5A1.5 1.5 0 003 20h14a1.5 1.5 0 001.5-1.5V11H19a1 1 0 001-1V3zm-2 0V9h-2V3h2zm-4 0v6H8V3h4zm-6 0v4H4V3h2z"/>
            </svg>
          </div>
          <div className="text-white text-xs">
            <div className="font-medium">Original Sound</div>
            <div className="text-gray-300">Artist Name</div>
          </div>
        </motion.div>
      </div>

      {/* Comments Section */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            className="absolute inset-0 bg-black/90 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full p-4 bg-gradient-to-t from-black to-transparent"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
            >
              <div className="text-white text-sm space-y-2">
                <div className="flex items-start gap-2">
                  <span className="font-medium">user123:</span>
                  <span>هذا منتج رائع جداً! 🔥</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">perfume_lover:</span>
                  <span>أين يمكنني شراؤه؟</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="أضف تعليقاً..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 text-sm px-3 py-2 rounded-full"
                />
                <button className="text-white font-medium text-sm px-4 py-2 bg-purple-600 rounded-full">
                  نشر
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
