"use client";
import { motion } from "framer-motion";

export default function DealsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-accent">Exclusive Deals</h1>
        <p className="text-gray-400 text-lg">Amazing offers are on their way!</p>
      </motion.div>
    </div>
  );
}
