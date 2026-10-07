"use client";

import React from "react";
import { Sparkles, Compass, Activity, Brain } from "lucide-react";

export type ActiveEngine = "performance" | "career";

interface NavigationSwitchProps {
  activeEngine: ActiveEngine;
  onSelectEngine: (engine: ActiveEngine) => void;
}

export function NavigationSwitch({ activeEngine, onSelectEngine }: NavigationSwitchProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-3 select-none">
      <div className="relative inline-flex items-center p-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.08)]">
        
        {/* Performance AI Tab */}
        <button
          onClick={() => onSelectEngine("performance")}
          className={`relative px-3.5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-googlesans font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 z-10 ${
            activeEngine === "performance"
              ? "text-black bg-white shadow-[0_0_25px_rgba(255,255,255,0.6)] font-bold scale-[1.02]"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          <Activity className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeEngine === "performance" ? "text-black" : "text-white/60"}`} />
          <span>Performance AI</span>
          <span className={`text-[10px] hidden md:inline-block px-2 py-0.5 rounded-full ${
            activeEngine === "performance" ? "bg-black/10 text-black font-mono" : "bg-white/10 text-white/50"
          }`}>
            શૈક્ષણિક પ્રગતિ
          </span>
        </button>

        {/* Career AI Tab */}
        <button
          onClick={() => onSelectEngine("career")}
          className={`relative px-3.5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-googlesans font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 z-10 ${
            activeEngine === "career"
              ? "text-black bg-white shadow-[0_0_25px_rgba(255,255,255,0.6)] font-bold scale-[1.02]"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          <Compass className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeEngine === "career" ? "text-black" : "text-white/60"}`} />
          <span>Career AI</span>
          <span className={`text-[10px] hidden md:inline-block px-2 py-0.5 rounded-full ${
            activeEngine === "career" ? "bg-black/10 text-black font-mono" : "bg-white/10 text-white/50"
          }`}>
            ભવિષ્યની દિશા
          </span>
        </button>

      </div>

      {/* Subtitle indicator */}
      <div className="mt-2 text-center max-w-full px-2">
        <p className="text-[11px] sm:text-xs font-rasa text-white/80 tracking-wide sm:tracking-wider px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md inline-block shadow-sm max-w-full truncate sm:whitespace-normal">
          {activeEngine === "performance" 
            ? "PERFORMANCE AI : તમારી વર્તમાન શૈક્ષણિક સ્થિતિ અને પરિણામનું વિશ્લેષણ"
            : "CAREER AI : તમારે શું બનવું છે અને ત્યાં પહોંચવાનો સંપૂર્ણ રોડમેપ"
          }
        </p>
      </div>
    </div>
  );
}
