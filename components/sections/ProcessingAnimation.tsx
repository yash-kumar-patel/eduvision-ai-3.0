"use client";

import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Sparkles, Database, Layers, CheckCircle2, Zap } from 'lucide-react';

interface ProcessingAnimationProps {
  onComplete: () => void;
}

const steps = [
  {
    titleGu: "તમારી શૈક્ષણિક માહિતીનું વિશ્લેષણ થઈ રહ્યું છે...",
    subtitleEn: "DATA INGESTION & NORMALIZATION",
    icon: Database,
    featureTag: "Step 1/5 • Data Validation",
  },
  {
    titleGu: "તમારા ગુણ, અભ્યાસની ટેવો અને હાજરીમાંથી મહત્વપૂર્ણ પેટર્ન શોધવામાં આવી રહ્યા છે...",
    subtitleEn: "FEATURE WEIGHTING & PATTERN RECOGNITION",
    icon: Layers,
    featureTag: "G2 Weight 80.5% • Absences 14.2%",
  },
  {
    titleGu: "AI તમારી શૈક્ષણિક પ્રગતિ અને સંભવિત પરિણામને સમજી રહ્યું છે...",
    subtitleEn: "GRADIENT BOOSTING REGRESSOR RUNNING",
    icon: Brain,
    featureTag: "100+ Decision Trees Evaluating",
  },
  {
    titleGu: "તમારા માટે સંભવિત પરિણામની આગાહી અને વ્યક્તિગત માર્ગદર્શન તૈયાર થઈ રહ્યું છે...",
    subtitleEn: "PREDICTIVE INSIGHTS & RECOMMENDATION SYNTHESIS",
    icon: Zap,
    featureTag: "Actionable Guidance Generated",
  },
  {
    titleGu: "તમારી શૈક્ષણિક સફરની આગલી દિશા તૈયાર છે...",
    subtitleEn: "FINAL PERFORMANCE REPORT READY",
    icon: Sparkles,
    featureTag: "EduVision AI Synthesis 100% Complete",
  },
];

export function ProcessingAnimation({ onComplete }: ProcessingAnimationProps) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  // Smooth Progress & Stage Progression
  useEffect(() => {
    const totalDuration = 8800; // ms
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / totalDuration) * 100), 100);
      setProgress(pct);

      if (pct < 20) setStage(0);
      else if (pct < 45) setStage(1);
      else if (pct < 70) setStage(2);
      else if (pct < 90) setStage(3);
      else setStage(4);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setTimeout(onComplete, 400);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const CurrentIcon = steps[stage].icon;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden px-4 select-none">
      
      {/* Background Soft Atmospheric Radiance */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[140px] animate-pulse"></div>
      </div>

      {/* Outer Holographic Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40"></div>

      {/* ══════════════════════════════════════════════════════════════
          FUTURISTIC 3D QUANTUM NEURAL SCANNER CORE
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center mb-8 sm:mb-12">
        
        {/* Outermost Pulsing Concentric Radar Ring */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_8px_#fff]"></div>
          <div className="absolute -bottom-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_8px_#fff]"></div>
        </div>

        {/* Secondary Counter-Rotating Gyroscopic Ring */}
        <div className="absolute inset-4 rounded-full border border-white/15 border-dashed animate-[spin_12s_linear_infinite_reverse]"></div>

        {/* Third Fast Synapse Ring */}
        <div className="absolute inset-10 rounded-full border border-white/20 animate-[spin_8s_linear_infinite]">
          <div className="absolute top-1/2 -left-1 -mt-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#fff] animate-pulse"></div>
        </div>

        {/* Scanning Laser Beam */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="w-full h-1/2 bg-gradient-to-b from-white/15 to-transparent animate-[spin_4s_linear_infinite] origin-bottom"></div>
        </div>

        {/* Center Quantum AI Crystal Core */}
        <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl border border-white/30 bg-white/[0.08] backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center justify-center group">
          <div className="relative">
            <CurrentIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-pulse transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          
          <span className="mt-2 text-xs font-mono font-black text-white tracking-widest">
            {progress}%
          </span>
        </div>

        {/* Orbiting Telemetry Particles */}
        <div className="absolute w-full h-full animate-[spin_6s_linear_infinite]">
          <span className="absolute top-2 left-10 text-[9px] font-mono text-white/50 tracking-tighter">AI_TREE_DEPTH: 100</span>
          <span className="absolute bottom-4 right-8 text-[9px] font-mono text-white/50 tracking-tighter">R²_SCORE: 81.38%</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          AI TELEMETRY HUD & STAGE CONTAINER
          ══════════════════════════════════════════════════════════════ */}
      <div className="w-full max-w-2xl text-center space-y-6 relative z-10">
        
        {/* Dynamic Telemetry Status Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
          <Cpu className="w-3.5 h-3.5 text-white animate-spin-slow" />
          <span className="text-[11px] font-mono text-white/80 font-bold uppercase tracking-widest">
            {steps[stage].featureTag}
          </span>
        </div>

        {/* Dynamic 5-Stage Text Transition with High-Clarity Typography */}
        <div className="min-h-[90px] sm:min-h-[105px] flex flex-col items-center justify-center px-2">
          <h2 
            key={stage} 
            className="text-xl sm:text-2xl lg:text-3xl font-bold font-googlesans text-white text-glow-white leading-snug animate-fade-in max-w-xl"
          >
            {steps[stage].titleGu}
          </h2>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/50 uppercase mt-2 block">
            {steps[stage].subtitleEn}
          </span>
        </div>

        {/* High-Tech Glowing Progress Bar with Laser Head */}
        <div className="w-full max-w-md mx-auto space-y-2">
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-white/70 via-white to-white rounded-full transition-all duration-75 relative shadow-[0_0_15px_#fff]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff] animate-pulse"></div>
            </div>
          </div>

          {/* Bottom Telemetry Detail */}
          <div className="flex justify-between items-center text-[10px] font-mono text-white/50 px-1">
            <span>MODEL: GRADIENT_BOOSTING</span>
            <span>DATASET: 395 STUDENTS</span>
            <span className="text-white font-bold">{progress}% PROCESSED</span>
          </div>
        </div>

      </div>

    </div>
  );
}
