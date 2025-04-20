"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState, useRef } from "react";

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
  const [isInitialRender, setIsInitialRender] = useState(true);
  const isClientRouting = useRef(false);

  useEffect(() => {
    // 초기 렌더링 표시
    setIsInitialRender(false);

    // 클라이언트 라우팅 상태 설정
    if (!isInitialRender) {
      isClientRouting.current = true;
    }

    return () => {
      // 컴포넌트 언마운트 시 리셋
      isClientRouting.current = false;
    };
  }, [pathname, isInitialRender]);

  // 초기 렌더링이거나 서버 컴포넌트 직접 새로고침인 경우 애니메이션 비활성화
  const shouldAnimate = !isInitialRender && isClientRouting.current;

  // 초기 렌더링시 애니메이션 없이 컨텐츠 표시
  if (isInitialRender) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={shouldAnimate ? selected.initial : false}
        animate={shouldAnimate ? selected.animate : { opacity: 1 }}
        exit={selected.exit}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
