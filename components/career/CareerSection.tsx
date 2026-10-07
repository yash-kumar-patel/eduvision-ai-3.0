"use client";

import React, { useState, useCallback, useRef } from "react";
import { CareerHeroInput } from "./CareerHeroInput";
import { CareerQuestionnaire } from "./CareerQuestionnaire";
import { CareerProcessingAnimation } from "./CareerProcessingAnimation";
import { CareerResultView } from "./CareerResultView";
import { CareerGoal, CareerInput, CareerAnalysisResult } from "@/types/career";
import { generateCareerAnalysis } from "@/lib/careerEngine";

type CareerFlowState = "hero" | "quiz" | "processing" | "results";

export function CareerSection() {
  const [state, setState] = useState<CareerFlowState>("hero");
  const [selectedCareer, setSelectedCareer] = useState<CareerGoal | null>(null);
  const [careerResult, setCareerResult] = useState<CareerAnalysisResult | null>(null);
  const [pendingInput, setPendingInput] = useState<CareerInput | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // 1. When student selects or types a career
  const handleSelectCareer = useCallback((career: CareerGoal) => {
    setSelectedCareer(career);
    setState("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 2. When student submits the adaptive questionnaire
  const handleQuestionnaireSubmit = useCallback((input: CareerInput) => {
    setPendingInput(input);
    setState("processing");
  }, []);

  // 3. When the 3D neural analysis animation finishes
  const handleProcessingComplete = useCallback(() => {
    if (pendingInput) {
      const result = generateCareerAnalysis(pendingInput);
      setCareerResult(result);
      setState("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pendingInput]);

  // 4. Reset flow
  const handleReset = useCallback(() => {
    setSelectedCareer(null);
    setCareerResult(null);
    setPendingInput(null);
    setState("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen relative flex flex-col justify-start">
      
      {/* State: Hero Dream Search */}
      {state === "hero" && (
        <CareerHeroInput onSelectCareer={handleSelectCareer} />
      )}

      {/* State: Adaptive Questionnaire */}
      {state === "quiz" && selectedCareer && (
        <CareerQuestionnaire
          career={selectedCareer}
          onBackToHero={() => setState("hero")}
          onSubmit={handleQuestionnaireSubmit}
        />
      )}

      {/* State: Neural Analysis Animation */}
      {state === "processing" && (
        <CareerProcessingAnimation
          careerName={selectedCareer?.title || "Specialist"}
          onComplete={handleProcessingComplete}
        />
      )}

      {/* State: Full Result & Roadmap */}
      {state === "results" && careerResult && (
        <CareerResultView result={careerResult} onReset={handleReset} />
      )}

    </div>
  );
}
