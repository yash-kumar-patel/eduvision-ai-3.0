"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { PredictionInput, PredictionResponse } from "@/types";
import { predictStudent } from "@/lib/api";

// 3D Canvas Background
import { ThreeBackground } from "@/components/ui/ThreeBackground";

// Navigation Switcher
import { NavigationSwitch, ActiveEngine } from "@/components/ui/NavigationSwitch";

// Engine 1: Performance AI Section imports (Preserved 100% intact)
import { OpeningScreen } from "@/components/sections/OpeningScreen";
import { TypewriterSection } from "@/components/sections/TypewriterSection";
import { RevealSection } from "@/components/sections/RevealSection";
import { BrandReveal } from "@/components/sections/BrandReveal";
import { StorySection } from "@/components/sections/StorySection";
import { PredictionForm } from "@/components/sections/PredictionForm";
import { ProcessingAnimation } from "@/components/sections/ProcessingAnimation";
import PredictionReveal from "@/components/sections/PredictionReveal";
import ResultExplanation from "@/components/sections/ResultExplanation";
import GuidanceSection from "@/components/sections/GuidanceSection";
import ReportSection from "@/components/sections/ReportSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ModelSection from "@/components/sections/ModelSection";
import TechSection from "@/components/sections/TechSection";
import { ScienceFairSection } from "@/components/sections/ScienceFairSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ThankYouSection } from "@/components/sections/ThankYouSection";

// Engine 2: Career AI Root Section
import { CareerSection } from "@/components/career/CareerSection";

type AppPhase =
  | "intro"        // Sections 1-5: Opening → Story
  | "form"         // Section 6: Prediction form
  | "processing"   // Section 7: AI processing animation
  | "results"      // Sections 8-11: Results → Report
  | "postResults"; // Sections 12-18: How it works → Thank you

export default function Home() {
  // Main Dual-Engine State
  const [activeEngine, setActiveEngine] = useState<ActiveEngine>("performance");

  // Performance AI State
  const [phase, setPhase] = useState<AppPhase>("intro");
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [showProcessing, setShowProcessing] = useState(false);

  // Refs for smooth scrolling to sections
  const formRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);

  // Scroll progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);

  // Always start at top (Opening Screen) on page load/refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle engine switch
  const handleSelectEngine = (engine: ActiveEngine) => {
    setActiveEngine(engine);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle form submission (Performance AI)
  const handleFormSubmit = useCallback(async (data: PredictionInput) => {
    setPhase("processing");
    setShowProcessing(true);

    try {
      const result = await predictStudent(data);
      setPrediction(result);
    } catch (err) {
      console.error("Prediction failed:", err);
    }
  }, []);

  // Handle processing animation complete (Performance AI)
  const handleProcessingComplete = useCallback(() => {
    setShowProcessing(false);
    setPhase("results");

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  // Handle "continue exploring" after results
  const handleContinueExploring = useCallback(() => {
    setPhase("postResults");
    setTimeout(() => {
      postRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      
      {/* Three.js Interactive 3D Atmosphere Background */}
      <ThreeBackground />

      {/* Vertical scroll progress indicator */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1">
        <div className="w-[2px] h-32 bg-white/10 rounded-full relative overflow-hidden">
          <div
            className="w-full bg-white/60 rounded-full transition-all duration-300 absolute top-0 shadow-[0_0_10px_#fff]"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Floating Header Navigation with Dual Engine Switcher */}
      <header className="sticky top-0 left-0 right-0 z-40 flex flex-col items-center justify-center pt-3 pb-2 px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-center w-full max-w-4xl">
          <NavigationSwitch
            activeEngine={activeEngine}
            onSelectEngine={handleSelectEngine}
          />
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          ENGINE 1: PERFORMANCE AI (PRESERVED 100% INTACT)
          ══════════════════════════════════════════════════════════ */}
      {activeEngine === "performance" && (
        <main className="relative z-10 animate-fadeIn">
          
          {/* PHASE: INTRO */}
          <section>
            <OpeningScreen />
          </section>

          <section>
            <TypewriterSection />
          </section>

          <section>
            <RevealSection />
          </section>

          <section>
            <BrandReveal />
          </section>

          <section>
            <StorySection />
          </section>

          {/* PHASE: FORM */}
          <section ref={formRef}>
            <div className="section-viewport">
              <PredictionForm onSubmit={handleFormSubmit} />
            </div>
          </section>

          {/* PHASE: PROCESSING */}
          {showProcessing && (
            <section className="fixed inset-0 z-50 bg-black">
              <ProcessingAnimation onComplete={handleProcessingComplete} />
            </section>
          )}

          {/* PHASE: RESULTS */}
          {prediction && (phase === "results" || phase === "postResults") && (
            <>
              <section ref={resultsRef}>
                <PredictionReveal prediction={prediction} />
              </section>

              <section>
                <ResultExplanation prediction={prediction} />
              </section>

              <section>
                <GuidanceSection prediction={prediction} />
              </section>

              <section>
                <ReportSection prediction={prediction} />
              </section>

              {/* Transition to post-results */}
              <section className="section-viewport">
                <div className="text-center space-y-8 max-w-xl mx-auto">
                  <p className="text-lg sm:text-xl text-white/60 font-baloo">
                    તમારું AI મૂલ્યાંકન પૂર્ણ થયું.
                  </p>
                  <p className="text-xl sm:text-2xl font-bold font-baloo">
                    તમને જાણવાની ઉત્સુકતા છે કે આ બધું કામ કેવી રીતે કરે છે?
                  </p>
                  <button
                    onClick={handleContinueExploring}
                    className="btn-mono mx-auto font-baloo"
                  >
                    ચાલો, અંદર નજર કરીએ →
                  </button>
                </div>
              </section>
            </>
          )}

          {/* PHASE: POST-RESULTS */}
          {phase === "postResults" && (
            <div ref={postRef}>
              <section>
                <HowItWorksSection />
              </section>

              <section>
                <ModelSection />
              </section>

              <section>
                <TechSection />
              </section>

              <section>
                <ScienceFairSection />
              </section>

              <section>
                <TeamSection />
              </section>

              <section>
                <VisionSection />
              </section>

              <section>
                <ThankYouSection />
              </section>

              {/* Seamless Jump to Career AI Banner */}
              <section className="py-16 px-4 flex justify-center text-center">
                <div className="p-8 sm:p-10 rounded-3xl border border-white/20 bg-white/[0.04] backdrop-blur-2xl max-w-2xl w-full shadow-2xl space-y-4">
                  <span className="text-xs font-mono text-white/60 uppercase tracking-widest block">NEXT MAJOR ENGINE</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-googlesans text-white text-glow-white">
                    હવે તમારા ભવિષ્યની દિશા શોધો
                  </h3>
                  <p className="text-sm sm:text-base font-rasa text-white/80">
                    માત્ર પરિણામ નહીં, ભવિષ્યમાં શું બનવું છે અને ત્યાં પહોંચવાનો સંપૂર્ણ રોડમેપ મેળવો.
                  </p>
                  <button
                    onClick={() => handleSelectEngine("career")}
                    className="px-6 py-3 rounded-xl bg-white text-black font-googlesans font-bold text-sm sm:text-base hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.5)] inline-flex items-center gap-2 mt-2"
                  >
                    <span>Career AI શરૂ કરો →</span>
                  </button>
                </div>
              </section>
            </div>
          )}

        </main>
      )}

      {/* ══════════════════════════════════════════════════════════
          ENGINE 2: CAREER AI (THE SECOND MAJOR ENGINE)
          ══════════════════════════════════════════════════════════ */}
      {activeEngine === "career" && (
        <main className="relative z-10 animate-fadeIn pt-4 pb-20">
          <CareerSection />
        </main>
      )}

    </div>
  );
}
