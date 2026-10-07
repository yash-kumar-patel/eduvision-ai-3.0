"use client";

import React, { useState, useRef } from "react";
import { Sparkles, Rocket, ArrowDown } from "lucide-react";
import { MacDock } from "@/components/ui/MacDock";
import { MacMagnifiedText } from "@/components/ui/MacMagnifiedText";

export const OpeningScreen: React.FC = () => {
  // 3D Parallax Tilt State
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, translateZ: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth 3D mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePos({ x, y });
    setTilt({
      rotateX: -y * 18, // Tilt on X
      rotateY: x * 18,  // Tilt on Y
      translateZ: 35,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, translateZ: 0 });
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen w-full relative bg-transparent flex flex-col items-center justify-center px-4 pt-20 pb-12 sm:pt-28 sm:pb-16 select-none"
    >
      {/* Dynamic Floating Universe Cluster */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center max-w-5xl w-full text-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.rotateX * 0.5}deg) rotateY(${tilt.rotateY * 0.5}deg)`,
        }}
      >
        
        {/* Top Floating Pill: Neural Evaluation */}
        <div 
          className="mb-4 sm:mb-6 transition-transform duration-300 pointer-events-auto"
          style={{ transform: `translateX(${mousePos.x * -15}px)` }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-2xl text-[10px] sm:text-xs font-mono text-white shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 hover:border-white transition-all cursor-pointer">
            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-bounce shrink-0" />
            <span className="font-extrabold tracking-wider sm:tracking-widest uppercase">AI NEURAL ARCHITECTURE • SCIENCE FAIR 2026</span>
          </div>
        </div>

        {/* Free Floating Massive Title with macOS Magnification Effect */}
        <div className="space-y-3 transition-transform duration-300 pointer-events-auto my-2 w-full overflow-hidden">
          <MacMagnifiedText 
            text="EduVision" 
            className="text-5xl sm:text-9xl lg:text-[10.5rem] leading-none text-white"
          />
          
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-8 sm:w-20 bg-gradient-to-r from-transparent to-white/60"></span>
            <p className="text-[10px] sm:text-base font-mono tracking-[0.25em] sm:tracking-[0.45em] text-white/80 uppercase font-extrabold">
              MACHINE LEARNING AI 3.0
            </p>
            <span className="h-px w-8 sm:w-20 bg-gradient-to-l from-transparent to-white/60"></span>
          </div>
        </div>

        {/* macOS Style Interactive Magnification Dock */}
        <div 
          className="mt-8 sm:mt-12 pointer-events-auto transition-transform duration-300 z-20"
          style={{ transform: `translateY(${mousePos.y * -10}px)` }}
        >
          <MacDock />
        </div>

      </div>

      {/* Interactive Discovery Action Button */}
      <div className="absolute bottom-6 sm:bottom-8 flex flex-col items-center gap-2 text-white/70 pointer-events-auto cursor-pointer hover:text-white transition-colors group">
        <span className="text-xs sm:text-sm font-baloo tracking-wider font-bold group-hover:text-glow-white">
          ↓ સ્ક્રોલ કરીને AI યાત્રા શરૂ કરો (Scroll to Discover)
        </span>
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-bounce" />
      </div>

    </section>
  );
};
