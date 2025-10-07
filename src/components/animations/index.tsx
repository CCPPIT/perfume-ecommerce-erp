'use client';

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

// ===== TikTok-style Animations =====

export const TikTokSlideUp = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
};

export const TikTokBounceIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.3, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export const TikTokStaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export const TikTokFloatingAction = ({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      className={`fixed bottom-20 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg flex items-center justify-center z-40 ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 25px rgba(168, 85, 247, 0.4)",
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
        scale: 1,
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 25,
        },
      }}
    >
      {children}
    </motion.button>
  );
};

// ===== Interactive Animations =====

export const PulseAnimation = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const ShakeAnimation = ({
  children,
  trigger = false,
  className = '',
}: {
  children: React.ReactNode;
  trigger?: boolean;
  className?: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (trigger) {
      controls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 },
      });
    }
  }, [trigger, controls]);

  return (
    <motion.div
      className={className}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export const GlowEffect = ({
  children,
  isActive = false,
  className = '',
}: {
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        boxShadow: isActive
          ? [
              "0 0 0 rgba(168, 85, 247, 0)",
              "0 0 20px rgba(168, 85, 247, 0.3)",
              "0 0 0 rgba(168, 85, 247, 0)",
            ]
          : "0 0 0 rgba(168, 85, 247, 0)",
      }}
      transition={{
        duration: 1.5,
        repeat: isActive ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// ===== Loading Animations =====

export const TikTokLoadingSpinner = ({
  size = 'medium',
  className = '',
}: {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg className="w-full h-full" viewBox="0 0 50 50">
        <circle
          className="stroke-current text-purple-500"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeDasharray="31.416"
          strokeDashoffset="31.416"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0 31.416;15.708 15.708;0 31.416"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0;-15.708;-31.416"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </motion.div>
  );
};

export const TikTokSkeletonLoader = ({
  lines = 3,
  className = '',
}: {
  lines?: number;
  className?: string;
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded`}
          style={{
            width: `${Math.random() * 40 + 60}%`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ===== Gesture-based Animations =====

export const SwipeableCard = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  className = '',
}: {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}) => {
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className={`cursor-grab active:cursor-grabbing ${className}`}
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      dragElastic={0.7}
      onDragEnd={(event, info) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
          onSwipeRight?.();
        } else if (info.offset.x < -threshold) {
          onSwipeLeft?.();
        }
        setDragOffset({ x: 0, y: 0 });
      }}
      animate={{
        rotate: dragOffset.x * 0.1,
        scale: Math.max(0.95, 1 - Math.abs(dragOffset.x) / 500),
      }}
      style={{
        x: dragOffset.x,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export const PullToRefresh = ({
  children,
  onRefresh,
  className = '',
}: {
  children: React.ReactNode;
  onRefresh: () => void;
  className?: string;
}) => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleDrag = (event: any, info: any) => {
    if (info.offset.y > 0 && info.offset.y < 100) {
      setPullDistance(info.offset.y);
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    if (pullDistance > 60) {
      setIsRefreshing(true);
      onRefresh();
      setTimeout(() => {
        setIsRefreshing(false);
        setPullDistance(0);
      }, 1000);
    } else {
      setPullDistance(0);
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.3}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      animate={{
        y: isRefreshing ? 50 : 0,
      }}
    >
      {/* Pull Indicator */}
      <AnimatePresence>
        {pullDistance > 20 && (
          <motion.div
            className="absolute top-0 left-0 right-0 flex justify-center -mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <motion.div
              className="w-8 h-8 border-2 border-purple-500 rounded-full flex items-center justify-center"
              animate={{ rotate: pullDistance * 5 }}
            >
              <motion.svg
                className="w-4 h-4 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </motion.svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Spinner */}
      <AnimatePresence>
        {isRefreshing && (
          <motion.div
            className="absolute top-0 left-0 right-0 flex justify-center -mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TikTokLoadingSpinner size="small" />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </motion.div>
  );
};

// ===== TikTok-style Page Transitions =====

export const PageTransition = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};

export const TikTokPageTransition = ({
  children,
  direction = 'forward',
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'forward' | 'backward';
  className?: string;
}) => {
  const slideDirection = direction === 'forward' ? 50 : -50;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: slideDirection,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: -slideDirection,
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};
