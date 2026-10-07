"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  pauseBetween?: number;
  pauseTime?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function Typewriter({
  texts,
  speed = 50,
  delay,
  pauseBetween = 1500,
  pauseTime,
  className = "",
  onComplete,
  showCursor = true,
}: TypewriterProps) {
  const effectiveSpeed = delay ?? speed;
  const effectivePause = pauseTime ?? pauseBetween;
  const [completedTexts, setCompletedTexts] = useState<string[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentTyped, setCurrentTyped] = useState("");

  useEffect(() => {
    if (currentTextIndex >= texts.length) {
      if (onComplete) onComplete();
      return;
    }

    const currentFullText = texts[currentTextIndex];

    if (currentTyped.length < currentFullText.length) {
      const timeout = setTimeout(() => {
        setCurrentTyped(currentFullText.slice(0, currentTyped.length + 1));
      }, effectiveSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCompletedTexts((prev) => [...prev, currentFullText]);
        setCurrentTyped("");
        setCurrentTextIndex((prev) => prev + 1);
      }, effectivePause);
      return () => clearTimeout(timeout);
    }
  }, [currentTyped, currentTextIndex, texts, effectiveSpeed, effectivePause, onComplete]);

  return (
    <div className={className}>
      {completedTexts.map((text, idx) => (
        <p key={idx} className="mb-2 last:mb-0">
          {text}
        </p>
      ))}
      
      {currentTextIndex < texts.length && (
        <p className="mb-2 last:mb-0">
          {currentTyped}
          {showCursor && <span className="typewriter-cursor">|</span>}
        </p>
      )}
      
      {currentTextIndex >= texts.length && showCursor && (
        <p className="mb-2 last:mb-0">
          <span className="typewriter-cursor">|</span>
        </p>
      )}
    </div>
  );
}
