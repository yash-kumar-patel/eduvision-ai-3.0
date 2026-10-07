"use client";

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const RevealSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-transparent relative select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-white/[0.04] rounded-full blur-[100px]"></div>
      </div>

      <div className="flex flex-col items-center text-center space-y-8 relative z-10 max-w-2xl">
        <ScrollReveal variant="scaleIn" delay={0}>
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-bold font-rasa text-white tracking-normal text-glow-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            આ કલ્પના નથી.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal variant="fadeUp" delay={400}>
          <p className="text-xl sm:text-2xl font-rasa text-white/90 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            આજે Machine Learning અને ડેટા સાયન્સ દ્વારા આ શક્ય છે.
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <ScrollReveal variant="fadeIn" delay={800}>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse-slow"></span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
