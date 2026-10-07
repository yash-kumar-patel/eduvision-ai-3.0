"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Rocket, 
  Brain, 
  BarChart3, 
  Zap, 
  Target, 
  Clock, 
  Award, 
  FileText 
} from "lucide-react";

interface DockItem {
  id: string;
  labelGu: string;
  labelEn: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const dockItems: DockItem[] = [
  { id: "model", labelGu: "AI મોડેલ", labelEn: "Gradient Boosting ML", icon: Rocket },
  { id: "mind", labelGu: "Neural Mind", labelEn: "શૈક્ષણિક બુદ્ધિમત્તા", icon: Brain },
  { id: "analytics", labelGu: "સચોટતા વિશ્લેષણ", labelEn: "81.38% R² Score", icon: BarChart3 },
  { id: "prediction", labelGu: "લાઈવ આગાહી", labelEn: "Real-Time Prediction", icon: Zap },
  { id: "marks", labelGu: "પરીક્ષા ગુણ", labelEn: "G1 & G2 Evaluation", icon: Target },
  { id: "study", labelGu: "અભ્યાસ સમય", labelEn: "Daily Study Habits", icon: Clock },
  { id: "fair", labelGu: "વિજ્ઞાન મેળો ૨૦૨૬", labelEn: "Science Fair 2026", icon: Award },
  { id: "report", labelGu: "PDF પ્રમાણપત્ર", labelEn: "Official A4 Report", icon: FileText },
];

export function MacDock() {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  // Mouse move handler over the dock
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dockRef.current) return;
    const rect = dockRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
    setHoveredIdx(null);
  };

  return (
    <div className="relative flex flex-col items-center select-none">
      
      {/* Tooltip Label (Floating above the hovered icon) */}
      <div 
        className={`absolute -top-12 transition-all duration-200 pointer-events-none z-30 ${
          hoveredIdx !== null ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-2"
        }`}
      >
        {hoveredIdx !== null && (
          <div className="flex flex-col items-center">
            <div className="px-3.5 py-1 rounded-xl bg-black/90 border border-white/30 text-white shadow-2xl backdrop-blur-xl flex items-center gap-2">
              <span className="text-xs font-baloo font-bold">{dockItems[hoveredIdx].labelGu}</span>
              <span className="text-[10px] font-mono text-white/60">({dockItems[hoveredIdx].labelEn})</span>
            </div>
            {/* Tooltip Arrow */}
            <div className="w-2 h-2 bg-black/90 border-r border-b border-white/30 transform rotate-45 -mt-1"></div>
          </div>
        )}
      </div>

      {/* macOS Glassmorphism Dock Tray */}
      <div
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-end gap-1.5 sm:gap-4 px-2.5 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-3xl border border-white/25 bg-white/[0.08] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 relative group max-w-[96vw] sm:max-w-none"
      >
        {dockItems.map((item, index) => {
          const IconComponent = item.icon;

          // Calculate distance from mouse to center of this item
          let scale = 1;
          let translateY = 0;

          if (mouseX !== null && dockRef.current) {
            const itemWidth = 56; // estimated item spacing
            const itemCenter = index * (itemWidth + 12) + itemWidth / 2 + 16;
            const distance = Math.abs(mouseX - itemCenter);
            const maxDistance = 140; // magnification influence radius

            if (distance < maxDistance) {
              // Cosine magnification curve
              const norm = 1 - distance / maxDistance;
              const factor = Math.cos((1 - norm) * Math.PI * 0.5);
              scale = 1 + factor * 0.75; // Scale up to 1.75x
              translateY = -factor * 16;  // Float upwards up to 16px
            }
          }

          const isDirectlyHovered = hoveredIdx === index;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIdx(index)}
              className="flex flex-col items-center cursor-pointer transition-transform duration-100 ease-out relative group/icon"
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "bottom center",
              }}
            >
              {/* macOS Squircle Icon Container */}
              <div 
                className={`w-8 h-8 sm:w-13 sm:h-13 rounded-xl sm:rounded-[1.25rem] border flex items-center justify-center transition-all duration-200 shadow-xl ${
                  isDirectlyHovered 
                    ? "border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.8)]" 
                    : "border-white/20 bg-black/60 text-white hover:border-white/60 hover:bg-black/80"
                }`}
              >
                <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-200" />
              </div>

              {/* Active Dot Indicator (like macOS running apps) */}
              <div 
                className={`w-1 h-1 rounded-full mt-1 sm:mt-1.5 transition-all duration-300 ${
                  isDirectlyHovered 
                    ? "bg-white scale-150 shadow-[0_0_6px_#fff]" 
                    : "bg-white/40"
                }`}
              />
            </div>
          );
        })}
      </div>

    </div>
  );
}
