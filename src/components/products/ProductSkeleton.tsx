import { motion } from 'framer-motion';

export default function ProductSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4 animate-pulse w-full"
    >
      <div className="aspect-[4/5] rounded-2xl bg-surface-container-high w-full soft-shadow" />
      <div className="flex flex-col gap-3 mt-2">
        <div className="h-4 bg-surface-container-high rounded w-3/4" />
        <div className="h-4 bg-surface-container-high rounded w-1/4" />
      </div>
    </motion.div>
  );
}
