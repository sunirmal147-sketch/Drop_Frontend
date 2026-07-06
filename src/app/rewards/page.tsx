'use client';

import { motion } from 'framer-motion';
import { SpinningWheel } from '@/components/gamification/SpinningWheel';
import { ScratchCard } from '@/components/gamification/ScratchCard';
import { useGamificationStore } from '@/store/gamificationStore';
import { Sparkles, Ticket } from 'lucide-react';
import { TiltCard } from '@/components/3DCard';

export default function RewardsPage() {
  const { spinsAvailable, couponsClaimed } = useGamificationStore();

  return (
    <div className="bg-surface min-h-screen pt-12 pb-40">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <span className="font-label-md text-primary uppercase tracking-[0.2em] mb-4 block">Exclusive Benefits</span>
          <h1 className="font-headline-xl text-on-surface mb-6 text-5xl">LUXE Rewards</h1>
          <p className="font-body-md text-on-surface-variant text-lg leading-relaxed">
            Engage with our ecosystem to unlock exclusive discounts, early access, and complimentary gifts. Your loyalty, rewarded with precision.
          </p>
        </motion.header>

        {/* Ambient Floating 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-primary-container/20 blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, -40, 0], rotateX: [0, 180, 360], rotateY: [0, 180, 360] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-10 w-16 h-16 border border-primary/20 rounded-xl hidden lg:block"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div 
            animate={{ y: [0, 50, 0], rotateZ: [0, 360] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-outline-variant/30 rounded-full hidden lg:block"
          />
        </div>

        {/* Gamification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 relative z-10" style={{ perspective: "1000px" }}>
          
          {/* Wheel Section */}
          <TiltCard 
            className="w-full bg-surface-container-low rounded-[2.5rem] p-8 lg:p-14 soft-shadow border border-outline-variant/30 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <div className="text-center mb-10 relative z-10">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-headline-lg text-on-surface mb-3">The Daily Spin</h2>
              <p className="font-body-md text-on-surface-variant">
                Test your luck every day to win exclusive percentages off your next order.
              </p>
            </div>
            
            <div className="relative z-10 w-full flex justify-center">
              <SpinningWheel />
            </div>
          </TiltCard>

          {/* Scratch Card Section */}
          <TiltCard 
            delay={0.1}
            className="w-full bg-surface-container-low rounded-[2.5rem] p-8 lg:p-14 soft-shadow border border-outline-variant/30 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none"></div>
             <div className="text-center mb-10 relative z-10">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Ticket className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-headline-lg text-on-surface mb-3">Mystery Card</h2>
              <p className="font-body-md text-on-surface-variant">
                Scratch to reveal hidden offers. Available once per purchase event.
              </p>
            </div>
            
            <div className="relative z-10 w-full">
              <ScratchCard />
            </div>
          </TiltCard>

        </div>

        {/* Earned Rewards Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline-lg text-on-surface whitespace-nowrap">
              Your Unlocked Offers
            </h2>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
          </div>
          
          {couponsClaimed && couponsClaimed.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {couponsClaimed.map((coupon, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                  key={idx} 
                  className="bg-surface border border-outline-variant/50 rounded-2xl p-8 text-center shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500"></div>
                  <h3 className="font-headline-lg text-primary mb-2 font-bold">{coupon}</h3>
                  <p className="font-caption text-on-surface-variant text-[13px] uppercase tracking-wider">Ready to use at checkout</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant/50">
              <p className="font-body-md text-on-surface-variant text-lg max-w-[448px] mx-auto">
                You haven&apos;t unlocked any offers yet. Spin the wheel or scratch a card to begin.
              </p>
            </div>
          )}
        </motion.section>

      </div>
    </div>
  );
}
