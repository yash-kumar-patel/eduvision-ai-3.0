"use client";

import React, { useRef, useState } from "react";

interface MacMagnifiedTextProps {
  text: string;
  className?: string;
}

export function MacMagnifiedText({ text = "EduVision", className = "" }: MacMagnifiedTextProps) {
  const letters = Array.from(text);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
    setHoveredIdx(null);
  };

  return (
    <h1
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-baseline justify-center cursor-pointer select-none py-2 ${className}`}
    >
      {letters.map((char, index) => {
        let scale = 1;
        let translateY = 0;
        let letterGlow = 0;

        if (mouseX !== null && containerRef.current) {
          const totalWidth = containerRef.current.clientWidth;
          const letterWidth = totalWidth / letters.length;
          const letterCenter = index * letterWidth + letterWidth / 2;
          const distance = Math.abs(mouseX - letterCenter);
          const maxDistance = 160; // Influence radius across neighboring letters

          if (distance < maxDistance) {
            const norm = 1 - distance / maxDistance;
            const factor = Math.cos((1 - norm) * Math.PI * 0.5);
            scale = 1 + factor * 0.12; // Smooth 1.12x magnification
            translateY = -factor * 6;   // Gentle 6px float
            letterGlow = factor;
          }
        }

        return (
          <span
            key={index}
            onMouseEnter={() => setHoveredIdx(index)}
            className="inline-block transition-transform duration-150 ease-out font-black font-googlesans text-white"
            style={{
              transform: `scale(${scale}) translateY(${translateY}px)`,
              transformOrigin: "bottom center",
              textShadow: letterGlow > 0
                ? `0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.45)`
                : "0 0 20px rgba(255, 255, 255, 0.4)",
            }}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
}
