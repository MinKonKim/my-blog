// app/providers/PageTransitionProvider.tsx
"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProviderProps {
  children: ReactNode;
  variant?: "fade" | "slide" | "zoom" | "jelly" | "reveal";
}

const variantsMap = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  zoom: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  },
  jelly: {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: [1.1, 0.95, 1],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { scale: 0.8, opacity: 0 },
  },
  reveal: {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -40, opacity: 0 },
  },
};

export const PageTransitionProvider = ({
  children,
  variant = "fade",
}: PageTransitionProviderProps) => {
  const pathname = usePathname();
  const selected = variantsMap[variant];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={selected.initial}
        animate={selected.animate}
        exit={selected.exit}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
