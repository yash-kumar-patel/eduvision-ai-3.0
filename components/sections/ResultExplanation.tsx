"use client";

import { PredictionResponse } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, AlertCircle, TrendingUp, Sparkles } from "lucide-react";

export default function ResultExplanation({ prediction }: { prediction: PredictionResponse }) {
  return (
    <section className="py-20 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header with Google Sans */}
        <ScrollReveal>
          <div className="text-center sm:text-left mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-white/70 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>AI મોડેલ વિશ્લેષણ (Explainable AI)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white tracking-wide text-glow-white mb-3">
              આ પરિણામ પાછળ શું છે?
            </h2>
            <p className="text-base sm:text-lg font-rasa text-white/80">
              તમારી આગાહીમાં ભાગ ભજવતા મુખ્ય શૈક્ષણિક પરિબળો અને તેમનો પ્રભાવ દર:
            </p>
          </div>
        </ScrollReveal>

        {/* Factors Flashcard List */}
        <div className="space-y-4">
          {prediction.factors.map((factor, idx) => {
            const isStrength = factor.status === "strength";

            return (
              <ScrollReveal key={idx} className="block" delay={idx * 100}>
                <div className="p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/[0.05] backdrop-blur-2xl transition-all duration-300 hover:border-white/60 hover:bg-white/[0.09] hover:scale-[1.015] hover:shadow-[0_12px_35px_rgba(255,255,255,0.12)] group cursor-default">
                  
                  {/* Top Info Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border ${isStrength ? 'border-white/40 bg-white/10 text-white' : 'border-white/20 bg-white/5 text-white/70'} group-hover:scale-110 transition-transform`}>
                        {isStrength ? <CheckCircle2 className="w-5 h-5 text-white" /> : <AlertCircle className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <h3 className="font-googlesans text-lg sm:text-xl font-bold text-white group-hover:text-glow-white transition-all">
                          {factor.feature_name_gu}
                        </h3>
                        <span className="text-xs font-mono text-white/50 block">
                          મૂલ્ય (Value): <strong className="text-white font-bold">{factor.value}</strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className={`px-3 py-1 rounded-full text-xs font-googlesans font-bold border ${
                        isStrength 
                          ? 'border-white/40 bg-white/10 text-white' 
                          : 'border-white/20 bg-white/5 text-white/80'
                      }`}>
                        {isStrength ? '✓ મજબૂત પાસું' : '! ધ્યાન આપવાની જરૂર'}
                      </span>
                      <span className="text-sm font-mono font-black text-white px-2.5 py-1 rounded-xl bg-white/10 border border-white/15">
                        {factor.importance_pct}%
                      </span>
                    </div>
                  </div>

                  {/* High Contrast Animated Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-white/50">
                      <span>પ્રભાવ ગુણાંક (Feature Importance)</span>
                      <span className="text-white font-bold">{factor.importance_pct}% પ્રભાવ</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div 
                        className="h-full bg-gradient-to-r from-white/70 via-white to-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_#fff]"
                        style={{ width: `${factor.importance_pct}%` }}
                      />
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
