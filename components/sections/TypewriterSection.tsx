"use client";

import React from "react";
import { Brain, Lightbulb } from "lucide-react";

export const TypewriterSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-center px-4 py-12 select-none">
      
      {/* Soft Radial Ambient Glow in Dead Center */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] bg-white/[0.04] rounded-full blur-[150px]"></div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          360-DEGREE RADIAL SPATIAL ECOSYSTEM
          Student in exact Center, Questions Floating 360° AROUND it
          ═════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:block sm:h-[860px] items-center justify-center py-4 sm:py-0">
        
        {/* 1. DEAD CENTER: Thinking Student Visual */}
        <div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 flex flex-col items-center justify-center my-8 sm:my-0">
          
          {/* Outer Pulsing Concentric Neural Rings */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/10 animate-spin-slow pointer-events-none opacity-40"></div>
          <div className="absolute w-84 h-84 sm:w-[28rem] sm:h-[28rem] rounded-full border border-white/5 border-dashed pointer-events-none opacity-30"></div>

          {/* Floating Brain Synapse Icon */}
          <div className="absolute -top-7 -right-5 p-2.5 sm:p-3 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl anim-thought-1 pointer-events-none shadow-xl">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
          </div>

          {/* Floating Innovation Bulb Icon */}
          <div className="absolute top-1/3 -left-8 sm:-left-10 p-2.5 sm:p-3 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl anim-thought-3 pointer-events-none shadow-xl">
            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>

          {/* Student Thinking SVG Illustration with Lifelike Breathing & Sway */}
          <div className="anim-student-breathe relative">
            <svg 
              viewBox="0 0 240 240" 
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 text-white opacity-95 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Soft Synapse Halo */}
              <circle cx="120" cy="100" r="46" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Animated Head (Subtle Thinking Sway) */}
              <g className="anim-head-think">
                {/* Abstract Minimalist Head Outline */}
                <path 
                  d="M 120, 155 C 152, 155 160, 115 152, 90 C 145, 55 130, 35 108, 35 C 85, 35 72, 55 78, 80 C 85, 105 85, 155 120, 155 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round"
                  className="text-white" 
                />

                {/* Internal Neural Synapse Network */}
                <circle cx="102" cy="72" r="3.5" fill="#ffffff" className="anim-synapse" />
                <circle cx="138" cy="74" r="3.5" fill="#ffffff" className="anim-synapse" style={{ animationDelay: '1s' }} />
                <circle cx="120" cy="104" r="4" fill="#ffffff" className="anim-synapse" style={{ animationDelay: '2s' }} />
                
                {/* Connecting Synaptic Laser Lines */}
                <line x1="102" y1="72" x2="138" y2="74" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="102" y1="72" x2="120" y2="104" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="138" y1="74" x2="120" y2="104" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeDasharray="2 2" />

                {/* Floating Mathematical & Thought Symbols */}
                <g className="text-white font-mono font-bold select-none">
                  <text x="55" y="55" fontSize="16" fill="currentColor" opacity="0.8" className="anim-thought-1">?</text>
                  <text x="170" y="65" fontSize="18" fill="currentColor" opacity="0.85" className="anim-thought-2">+</text>
                  <text x="175" y="130" fontSize="16" fill="currentColor" opacity="0.75" className="anim-thought-3">×</text>
                  <text x="50" y="135" fontSize="16" fill="currentColor" opacity="0.8" className="anim-thought-4">=</text>
                  <text x="95" y="24" fontSize="18" fill="currentColor" opacity="0.9" className="anim-thought-5">÷</text>
                </g>
              </g>

              {/* Student Body & Shoulders */}
              <path 
                d="M 120, 155 C 70, 155 45, 210 45, 210 L 195, 210 C 195, 210 170, 155 120, 155 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round"
                className="text-white/80" 
              />
            </svg>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            5 QUESTIONS POSITIONED 360° RADIALLY AROUND THE STUDENT
            With Pop-up Entrance, Depth Zoom Pulse & Interactive Zoom Hover
            ═════════════════════════════════════════════════════════════ */}

        {/* Question 1 — TOP-LEFT (Upper Left of Student) */}
        <div className="sm:absolute sm:top-[6%] sm:left-[4%] lg:left-[8%] w-full max-w-sm sm:max-w-xs lg:max-w-sm text-left anim-thought-1 pointer-events-auto my-2 sm:my-0">
          <div className="question-thought-card p-4 sm:p-5 group">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse group-hover:scale-125 group-hover:bg-white transition-all"></span>
              <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">વિચાર ૧</span>
            </div>
            <p className="font-baloo text-base sm:text-lg font-bold text-white leading-snug group-hover:text-glow-white transition-all">
              પરીક્ષા આપ્યા વગર…<br />
              <span className="text-white/80 font-normal">તમારું સંભવિત પરિણામ જાણી શકાય?</span>
            </p>
          </div>
        </div>

        {/* Question 2 — TOP-RIGHT (Upper Right of Student) */}
        <div className="sm:absolute sm:top-[6%] sm:right-[4%] lg:right-[8%] w-full max-w-sm sm:max-w-xs lg:max-w-sm text-left sm:text-right anim-thought-2 pointer-events-auto my-2 sm:my-0">
          <div className="question-thought-card p-4 sm:p-5 group">
            <div className="flex items-center sm:justify-end gap-2 mb-1.5">
              <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">વિચાર ૨</span>
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse group-hover:scale-125 group-hover:bg-white transition-all"></span>
            </div>
            <p className="font-baloo text-base sm:text-lg font-bold text-white leading-snug group-hover:text-glow-white transition-all">
              તમારી મહેનતનું પરિણામ<br />
              <span className="text-white/80 font-normal">આવતીકાલ પહેલાં AI જોઈ શકે?</span>
            </p>
          </div>
        </div>

        {/* Question 3 — MID-LEFT (Direct Left of Student) */}
        <div className="sm:absolute sm:top-[50%] sm:-translate-y-1/2 sm:left-[2%] lg:left-[5%] w-full max-w-sm sm:max-w-xs lg:max-w-sm text-left anim-thought-3 pointer-events-auto my-2 sm:my-0">
          <div className="question-thought-card p-4 sm:p-5 group">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse group-hover:scale-125 group-hover:bg-white transition-all"></span>
              <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">વિચાર ૩</span>
            </div>
            <p className="font-baloo text-base sm:text-lg font-bold text-white leading-snug group-hover:text-glow-white transition-all">
              AI કહી શકે કે<br />
              <span className="text-white/80 font-normal">તમારે વધુ મહેનત ક્યાં કરવાની જરૂર છે?</span>
            </p>
          </div>
        </div>

        {/* Question 4 — MID-RIGHT (Direct Right of Student) */}
        <div className="sm:absolute sm:top-[50%] sm:-translate-y-1/2 sm:right-[2%] lg:right-[5%] w-full max-w-sm sm:max-w-xs lg:max-w-sm text-left sm:text-right anim-thought-4 pointer-events-auto my-2 sm:my-0">
          <div className="question-thought-card p-4 sm:p-5 group">
            <div className="flex items-center sm:justify-end gap-2 mb-1.5">
              <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">વિચાર ૪</span>
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse group-hover:scale-125 group-hover:bg-white transition-all"></span>
            </div>
            <p className="font-baloo text-base sm:text-lg font-bold text-white leading-snug group-hover:text-glow-white transition-all">
              માત્ર માર્ક્સ નહીં…<br />
              <span className="text-white/80 font-normal">તમારી આગળની પ્રગતિ પણ જાણી શકાય?</span>
            </p>
          </div>
        </div>

        {/* Question 5 — BOTTOM-CENTER (Directly Below Student) */}
        <div className="sm:absolute sm:bottom-[4%] sm:left-1/2 sm:-translate-x-1/2 w-full max-w-sm sm:max-w-md text-center anim-thought-5 pointer-events-auto my-2 sm:my-0">
          <div className="question-thought-card p-4 sm:p-5 group border-white/25">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse group-hover:scale-150 transition-all"></span>
              <span className="text-[10px] font-mono text-white/70 tracking-widest uppercase">વિચાર ૫ • કેન્દ્રીય પ્રશ્ન</span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse group-hover:scale-150 transition-all"></span>
            </div>
            <p className="font-baloo text-lg sm:text-xl font-black text-white leading-snug text-glow-white group-hover:text-glow-strong transition-all">
              તમારા પરિણામ પાછળનું કારણ<br />
              <span className="text-white/90">AI શોધી શકે?</span>
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
