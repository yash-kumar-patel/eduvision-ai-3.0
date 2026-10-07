"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Sparkles, Trophy } from "lucide-react";

export function ScienceFairSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-white/[0.06] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-10 relative z-10">
        
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/30 bg-black/50 backdrop-blur-xl text-xs sm:text-sm font-googlesans font-semibold text-white tracking-wider shadow-[0_0_25px_rgba(255,255,255,0.12)]">
            <Trophy className="w-4 h-4 text-white animate-pulse" />
            <span>SCIENCE FAIR PROJECT 2026</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <p className="text-xl sm:text-2xl text-white/90 font-rasa drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            આ માત્ર એક વેબસાઇટ નથી.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-googlesans text-white tracking-wide drop-shadow-[0_4px_30px_rgba(255,255,255,0.35)]">
            આ એક Science Fair Project છે.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={450}>
          <div className="p-8 sm:p-10 rounded-3xl border border-white/25 bg-black/60 backdrop-blur-2xl max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/40">
            <p className="text-xl sm:text-2xl text-white font-googlesans font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              AI સાથે શિક્ષણને નવી દિશા આપવાનો પ્રયાસ છે.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

