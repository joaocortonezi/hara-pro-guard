"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

type MotionRevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "article" | "li" | "ul";
};

const variantsByDirection: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

/**
 * Wrapper that triggers a snappy reveal animation when scrolled into view.
 * Respects prefers-reduced-motion (collapses to opacity-only fade).
 */
export function MotionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  className,
  once = true,
  as = "div",
}: MotionRevealProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? variantsByDirection.fade
    : variantsByDirection[direction];

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: [0.2, 0.9, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Container that staggers children's reveals.
 * Pair with MotionStaggerItem on each child.
 */
export function MotionStagger({
  children,
  delay = 0.1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.2, 0.9, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
