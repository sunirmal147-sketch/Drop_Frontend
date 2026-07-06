import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GamificationState {
  scratchCards: number;
  spinsAvailable: number;
  couponsClaimed: string[];
  useScratchCard: () => void;
  useSpin: () => void;
  claimCoupon: (code: string) => void;
  earnScratchCard: () => void;
  earnSpin: () => void;
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set) => ({
      scratchCards: 3, // Start user with 3 free scratch cards
      spinsAvailable: 1, // Start with 1 free spin
      couponsClaimed: [],
      
      useScratchCard: () => set((state) => ({ 
        scratchCards: Math.max(0, state.scratchCards - 1) 
      })),
      
      useSpin: () => set((state) => ({ 
        spinsAvailable: Math.max(0, state.spinsAvailable - 1) 
      })),
      
      claimCoupon: (code) => set((state) => ({ 
        couponsClaimed: [...state.couponsClaimed, code] 
      })),
      
      earnScratchCard: () => set((state) => ({ 
        scratchCards: state.scratchCards + 1 
      })),
      
      earnSpin: () => set((state) => ({ 
        spinsAvailable: state.spinsAvailable + 1 
      })),
    }),
    {
      name: 'gamification-storage',
    }
  )
);
