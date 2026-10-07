"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Sparkles, Compass } from "lucide-react";

export function VisionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-white/[0.04] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <ScrollReveal>
            <p className="text-2xl sm:text-4xl font-googlesans font-extrabold text-white text-glow-white">
              ભવિષ્યની રાહ શા માટે જોવી?
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-2xl font-rasa text-white/80 max-w-2xl mx-auto leading-relaxed">
              જ્યારે આજના ડેટામાંથી આવતીકાલની દિશા સમજવાનો પ્રયાસ કરી શકાય.
            </p>
          </ScrollReveal>
        </div>

        <div className="pt-8 space-y-4">
          <ScrollReveal delay={400}>
            <h2 className="text-6xl sm:text-8xl lg:text-9xl font-googlesans font-black text-white text-glow-strong tracking-tighter">
              EduVision AI
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-white" />
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-white/90 font-bold">
                PREDICT • UNDERSTAND • IMPROVE
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
