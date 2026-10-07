"use client";

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Award, UserCheck, Sparkles, School, Cpu } from 'lucide-react';

export const BrandReveal: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-transparent text-center relative overflow-hidden select-none">
      
      {/* Background Soft Depth Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]"></div>
      </div>

      <div className="flex flex-col items-center max-w-4xl w-full relative z-10">
        
        <ScrollReveal variant="fadeUp" delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-white/80 mb-4">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>AI REVELATION</span>
          </div>
          <p className="text-xl sm:text-2xl text-white/70 font-baloo font-bold mb-2">
            આ છે
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scaleIn" delay={200}>
          <h1 className="text-5xl sm:text-8xl lg:text-9xl font-display font-black tracking-tight text-white mb-6 uppercase text-glow-strong">
            EduVision AI
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={400}>
          <p className="text-lg sm:text-2xl lg:text-3xl text-white/95 font-baloo font-bold mb-8 sm:mb-10 max-w-3xl leading-relaxed">
            તમારા ડેટાને સમજીને,<br />
            <span className="text-white/80 font-normal">તમારી શૈક્ષણિક પ્રગતિ માટે</span><br />
            <span className="text-glow-white">AI આધારિત આગાહી અને માર્ગદર્શન.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scaleIn" delay={550} className="w-full">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-mono text-white mb-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <Award className="w-4 h-4 text-white" />
            <span>SCIENCE FAIR PROJECT 2026</span>
          </div>
        </ScrollReveal>

        {/* Team & Mentor Grid */}
        <ScrollReveal variant="fadeUp" delay={700} className="w-full max-w-xl">
          <div className="card-mono p-6 border-white/20 bg-white/[0.04] backdrop-blur-xl space-y-4">
            
            {/* School */}
            <div className="flex items-center justify-center gap-2 text-white/80 text-xs sm:text-sm font-medium border-b border-white/10 pb-3">
              <School className="w-4 h-4 text-white" />
              <span>એમ. એમ. કરોડિયા પ્રાથમિક શાળા, તરસાડી કોસંબા (R.S)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-1">
              {/* Margdarshak */}
              <div className="p-3 rounded-xl border border-white/15 bg-black/50 space-y-1">
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] font-mono uppercase">
                  <UserCheck className="w-3.5 h-3.5 text-white" />
                  <span>પ્રોજેક્ટ માર્ગદર્શક:</span>
                </div>
                <p className="text-base font-baloo font-extrabold text-white">
                  શ્રી મનોજભાઈ પરમાર
                </p>
              </div>

              {/* Student Scientists */}
              <div className="p-3 rounded-xl border border-white/15 bg-black/50 space-y-1">
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] font-mono uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>બાળવૈજ્ઞાનિક (વિદ્યાર્થીઓ):</span>
                </div>
                <p className="text-sm font-baloo font-bold text-white">
                  કૃતાર્થ રોનક બારોટ
                </p>
                <p className="text-sm font-baloo font-bold text-white">
                  અંશ કિરણભાઈ પ્રજાપતિ
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
