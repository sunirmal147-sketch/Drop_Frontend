"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Helper to determine route type
  const isHome = pathname === "/";
  const isProducts = pathname.startsWith("/products");
  const isAbout = pathname === "/about";
  const isRewards = pathname === "/rewards";

  const renderTransition = () => {
    if (isHome) {
      // Split Screen Reveal
      return (
        <div key={pathname} className="flex-1 w-full flex flex-col relative overflow-hidden">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 w-1/2 bg-primary z-[100] origin-left"
            style={{ pointerEvents: "none" }}
          />
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 w-1/2 bg-primary z-[100] origin-right"
            style={{ pointerEvents: "none" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full flex flex-col"
          >
            {children}
          </motion.div>
        </div>
      );
    }

    if (isProducts) {
      // Slide from Right
      return (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full flex flex-col"
        >
          {children}
        </motion.div>
      );
    }

    if (isAbout) {
      // Ethereal Fade Scale
      return (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 w-full flex flex-col"
        >
          {children}
        </motion.div>
      );
    }

    if (isRewards) {
      // Curtain Reveal
      return (
        <div key={pathname} className="flex-1 w-full flex flex-col relative">
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-primary z-[100] origin-top"
            style={{ pointerEvents: "none" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full flex flex-col"
          >
            {children}
          </motion.div>
        </div>
      );
    }

    // Default Fallback
    return (
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4 }}
        className="flex-1 w-full flex flex-col"
      >
        {children}
      </motion.div>
    );
  };

  return <AnimatePresence mode="wait">{renderTransition()}</AnimatePresence>;
}
