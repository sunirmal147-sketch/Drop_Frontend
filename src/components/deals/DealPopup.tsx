"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function DealPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    // Show popup after 3 seconds of page load
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Set deal for 24 hours from now
      setTargetDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen || !targetDate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-[512px] overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl p-8 text-center"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-bold uppercase tracking-wider mb-4">
              Flash Deal
            </span>
            <h2 className="text-3xl font-extrabold mb-2 text-black dark:text-white">
              50% OFF Everything
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Don't miss out on our biggest sale of the month. Use code <strong className="text-black dark:text-white">FLASH50</strong> at checkout.
            </p>
          </div>

          <CountdownTimer targetDate={targetDate} />

          <button 
            onClick={() => setIsOpen(false)}
            className="mt-8 w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Claim Offer Now
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
