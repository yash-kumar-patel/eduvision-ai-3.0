"use client";

import { PredictionResponse } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useEffect, useState } from "react";
import { Award, Sparkles, UserCheck } from "lucide-react";

export default function PredictionReveal({ prediction }: { prediction: PredictionResponse }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercent(prediction.percentage);
    }, 400);
    return () => clearTimeout(timer);
  }, [prediction.percentage]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-transparent text-white relative z-10 select-none overflow-hidden">
      
      {/* 3D Soft Radial Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-white/[0.05] rounded-full blur-[150px]"></div>
      </div>

      {/* Outer Pulsing Concentric Neural Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[32rem] sm:h-[32rem] rounded-full border border-white/10 animate-spin-slow pointer-events-none opacity-40 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[38rem] sm:h-[38rem] rounded-full border border-white/5 border-dashed pointer-events-none opacity-30 z-0"></div>

      <ScrollReveal className="w-full max-w-2xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Student Name Header Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl text-xs font-mono mb-8 text-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <UserCheck className="w-4 h-4 text-white" />
          <span className="font-googlesans">વિદ્યાર્થી મૂલ્યાંકન: <strong className="text-white font-bold">{prediction.student_name || 'વિદ્યાર્થી'}</strong> (ધોરણ {prediction.standard})</span>
        </div>

        {/* SVG Gauge */}
        <div className="relative w-72 h-36 overflow-hidden mb-6 flex justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 50">
            <path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
            />
            <path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeDasharray={126}
              strokeDashoffset={126 - (126 * percent) / 100}
              className="transition-all duration-[1500ms] ease-out shadow-[0_0_20px_#fff]"
            />
          </svg>
        </div>
        
        {/* Percentage Number */}
        <h2 className="text-6xl sm:text-9xl font-black font-googlesans tracking-tight text-white text-glow-strong mb-2">
          {prediction.percentage.toFixed(1)}%
        </h2>
        
        <p className="text-base sm:text-lg text-white/90 font-googlesans font-semibold mb-6">
          અનુમાનિત અંતિમ શૈક્ષણિક ટકાવારી
        </p>
        
        {/* Predicted Score Card */}
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/25 bg-white/[0.07] backdrop-blur-2xl mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.08)]">
          <Award className="w-5 h-5 text-white" />
          <span className="text-lg sm:text-xl font-bold font-mono text-white">સ્કોર: {prediction.predicted_score.toFixed(1)} / ૨૦ ગુણ</span>
        </div>
        
        {/* Risk Badge */}
        <div className="border border-white/40 bg-white/10 px-6 py-2.5 rounded-full mb-5 uppercase tracking-widest text-xs sm:text-sm font-googlesans font-bold text-white shadow-[0_0_25px_rgba(255,255,255,0.25)] backdrop-blur-xl">
          {prediction.risk_label_gu} • {prediction.risk_status_gu}
        </div>
        
        <p className="text-sm sm:text-base text-white/80 max-w-lg font-rasa leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {prediction.risk_tone_gu}
        </p>
      </ScrollReveal>
    </section>
  );
}
