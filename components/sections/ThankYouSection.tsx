"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Heart, Sparkles } from "lucide-react";

export function ThankYouSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-[140px]"></div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 w-full mt-20 relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl border border-white/25 bg-white/10 text-white mb-4 shadow-[0_0_25px_rgba(255,255,255,0.2)] animate-pulse">
            <Heart className="w-8 h-8 fill-white" />
          </div>
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black font-googlesans text-white text-glow-strong tracking-tight">
            આભાર.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-xl sm:text-2xl font-googlesans font-bold text-white/90">
            EduVision AI સાથે જોડાવા બદલ આભાર.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="text-base sm:text-lg font-rasa text-white/70 max-w-md mx-auto">
            આ પ્રોજેક્ટ એમ. એમ. કરોડિયા પ્રાથમિક શાળાના વિદ્યાર્થીઓ દ્વારા તૈયાર કરવામાં આવ્યો છે.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-auto pt-16 flex flex-col items-center justify-center space-y-4 pb-8 relative z-10">
        <ScrollReveal delay={600}>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center animate-spin-slow">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff]"></div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={700}>
          <p className="text-xs text-white/50 font-mono tracking-widest uppercase">
            © ૨૦૨૬ EduVision AI • SCIENCE FAIR PROJECT
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
