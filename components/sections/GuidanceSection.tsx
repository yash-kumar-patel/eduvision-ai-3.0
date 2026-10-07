"use client";

import { PredictionResponse } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Lightbulb, Compass, ArrowRight, CheckCircle2 } from "lucide-react";

export default function GuidanceSection({ prediction }: { prediction: PredictionResponse }) {
  const gujaratiNumbers = ["૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯", "૧૦"];

  return (
    <section className="py-20 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-white/[0.03] rounded-full blur-[130px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header with Google Sans */}
        <ScrollReveal>
          <div className="text-center sm:text-left mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-white/70 uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-white animate-spin-slow" />
              <span>વ્યક્તિગત શૈક્ષણિક દિશા (Personalized Guidance)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white tracking-wide text-glow-white mb-3">
              પરંતુ Prediction અંત નથી.
            </h2>
            <p className="text-base sm:text-lg font-rasa text-white/80">
              AI તમને આગળ શું સુધારી શકાય અને કઈ બાબતો પર ધ્યાન આપવું તે સમજાવે છે:
            </p>
          </div>
        </ScrollReveal>

        {/* Recommendations Flashcard List */}
        <div className="space-y-4">
          {prediction.recommendations.map((rec, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="p-6 sm:p-7 rounded-2xl border border-white/20 bg-white/[0.05] backdrop-blur-2xl transition-all duration-300 hover:border-white/60 hover:bg-white/[0.09] hover:scale-[1.015] hover:shadow-[0_12px_35px_rgba(255,255,255,0.12)] group flex gap-4 sm:gap-6 items-start cursor-default">
                
                {/* Number Badge with Hover Elevation */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border border-white/30 bg-white/10 flex items-center justify-center shrink-0 text-white font-googlesans font-black text-base sm:text-lg group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                  {gujaratiNumbers[idx] || idx + 1}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-googlesans text-lg sm:text-xl font-bold text-white group-hover:text-glow-white transition-all">
                      {rec.title}
                    </h3>
                  </div>

                  <p className="font-rasa text-sm sm:text-base text-white/80 leading-relaxed group-hover:text-white/95 transition-colors">
                    {rec.detail}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
