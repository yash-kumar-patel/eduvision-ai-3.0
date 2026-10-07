"use client";

import React, { useState, useEffect } from "react";
import { Compass, Sparkles, Brain, Cpu, Orbit, Target } from "lucide-react";

interface CareerProcessingAnimationProps {
  careerName: string;
  onComplete: () => void;
}

const ANALYSIS_STEPS = [
  "તમારા લક્ષ્યને સમજી રહ્યા છીએ...",
  "તમારી શૈક્ષણિક સ્થિતિનું વિશ્લેષણ કરી રહ્યા છીએ...",
  "તમારી રસ અને ક્ષમતાઓનું મૂલ્યાંકન કરી રહ્યા છીએ...",
  "તમારા માટે યોગ્ય માર્ગ તૈયાર કરી રહ્યા છીએ...",
  "તમારો વિઝન રોડમેપ તૈયાર છે..."
];

export function CareerProcessingAnimation({ careerName, onComplete }: CareerProcessingAnimationProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Smooth percentage counter 0 -> 100%
  useEffect(() => {
    const duration = 4600; // 4.6 seconds total
    const intervalTime = 40;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Cycle through 5 Gujarati statements
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < ANALYSIS_STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 900);

    return () => clearInterval(stepInterval);
  }, []);

  // Complete trigger
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center px-4 py-8 select-none">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-white/[0.08] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-xl w-full flex flex-col items-center justify-center text-center space-y-8 relative z-10">
        
        {/* Central 3D Quantum Neural Pathway Visualizer */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
          
          {/* Outer Rotating Dotted Ring */}
          <div className="absolute inset-0 rounded-full border border-white/20 border-dashed animate-spin-slow"></div>
          
          {/* Middle Counter-Rotating Ring */}
          <div className="absolute inset-3 rounded-full border border-white/30 animate-[spin_8s_linear_infinite_reverse]"></div>
          
          {/* Inner Pulsing Ring */}
          <div className="absolute inset-8 rounded-full border border-white/40 animate-pulse"></div>

          {/* Floating Orbiting Neural Particles */}
          <div className="absolute w-full h-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
          </div>
          <div className="absolute w-full h-full animate-[spin_10s_linear_infinite_reverse]">
            <div className="absolute bottom-2 left-1/4 w-2.5 h-2.5 bg-white/80 rounded-full shadow-[0_0_12px_#fff]"></div>
          </div>

          {/* Center Glowing Core */}
          <div className="relative w-24 h-24 rounded-full bg-white/10 border border-white/40 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_35px_rgba(255,255,255,0.4)]">
            <Compass className="w-8 h-8 text-white animate-pulse" />
            <span className="font-mono font-bold text-xs text-white mt-1">
              {Math.round(progress)}%
            </span>
          </div>

        </div>

        {/* Dynamic Gujarati Main Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/[0.06] text-xs font-googlesans text-white/80">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>લક્ષ્ય: {careerName}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-googlesans text-white tracking-wide text-glow-white">
            EduVision AI તમારા માટે માર્ગ શોધી રહ્યું છે...
          </h2>
        </div>

        {/* Dynamic Statement Box */}
        <div className="min-h-[50px] flex items-center justify-center px-6 py-3 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md max-w-md w-full shadow-lg">
          <p className="text-base sm:text-lg font-rasa text-white/90 animate-fadeIn key={currentStepIndex}">
            {ANALYSIS_STEPS[currentStepIndex]}
          </p>
        </div>

        {/* Linear High-Precision Progress Bar */}
        <div className="w-full max-w-md space-y-2">
          <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#fff]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-white/50">
            <span>Neural Synthesis</span>
            <span>{Math.round(progress)} / 100</span>
          </div>
        </div>

      </div>
    </div>
  );
}
