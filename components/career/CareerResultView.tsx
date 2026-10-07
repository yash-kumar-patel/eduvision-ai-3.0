"use client";

import React, { useState, useRef } from "react";
import { 
  Compass, 
  Target, 
  Sparkles, 
  ArrowDown, 
  CheckCircle2, 
  Circle, 
  Layers, 
  TrendingUp, 
  BookOpen, 
  Clock, 
  Award, 
  Lightbulb, 
  ChevronRight, 
  RotateCcw,
  Printer,
  ChevronDown
} from "lucide-react";
import { CareerAnalysisResult, CareerRoadmapStage } from "@/types/career";

interface CareerResultViewProps {
  result: CareerAnalysisResult;
  onReset: () => void;
}

export function CareerResultView({ result, onReset }: CareerResultViewProps) {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [expandedStage, setExpandedStage] = useState<number>(1);

  const toggleStep = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNum));
    } else {
      setCompletedSteps([...completedSteps, stepNum]);
    }
  };

  const scrollToRoadmap = () => {
    roadmapRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 select-none space-y-16 relative z-20 text-white">
      
      {/* ══════════════════════════════════════════════
          1. HEADER & ASSESSMENT CARD
          ══════════════════════════════════════════════ */}
      <section className="text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-black/60 backdrop-blur-xl text-xs sm:text-sm font-googlesans font-semibold text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <Compass className="w-4 h-4 text-white animate-pulse" />
          <span>CAREER GUIDANCE ANALYSIS • AI INSIGHTS</span>
        </div>

        <div className="space-y-2">
          <span className="text-sm sm:text-base font-rasa text-white/70 tracking-wide uppercase">
            તમારા માટેનો માર્ગ
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-googlesans text-white tracking-wide text-glow-white">
            {result.career.title}
          </h1>
          <p className="text-base sm:text-lg font-rasa text-white/60">
            {result.career.title_gu}
          </p>
        </div>

        {/* Dynamic Assessment Glass Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/20 bg-black/60 backdrop-blur-2xl max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.06)] text-left space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white/50 uppercase">વર્તમાન તબક્કો:</span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-googlesans font-bold text-sm border border-white/15">
                {result.student_stage}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/70">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>AI સંભવિત મૂલ્યાંકન</span>
            </div>
          </div>

          <p className="text-base sm:text-lg font-rasa text-white/90 leading-relaxed">
            {result.assessment_summary_gu}
          </p>

          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-rasa text-white/70 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-white shrink-0 mt-0.5" />
            <span>
              <strong>માર્ગદર્શન નોંધ:</strong> આ આકલન તમારી પસંદગી અને વર્તમાન ધોરણના આધારે યોગ્ય દિશા દર્શાવવા માટે છે. સતત પ્રયાસ અને અભ્યાસથી તમે શ્રેષ્ઠ પરિણામ મેળવી શકો છો.
            </span>
          </div>
        </div>

        {/* Quick Jump Action */}
        <div className="pt-2">
          <button
            onClick={scrollToRoadmap}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/20 text-xs sm:text-sm font-googlesans text-white transition-all duration-200"
          >
            <span>સંપૂર્ણ કારકિર્દી Roadmap જુઓ</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </section>

      {/* ══════════════════════════════════════════════
          2. CAREER READINESS GAUGE & METRICS
          ══════════════════════════════════════════════ */}
      <section className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-2xl shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-googlesans text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              <span>Career Readiness (હાલની સજ્જતા)</span>
            </h3>
            <p className="text-xs sm:text-sm font-rasa text-white/60 mt-1">
              તમારા વર્તમાન સ્તર મુજબ ક્ષેત્રમાં આગળ વધવાની પાયાની સજ્જતા
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-white/50 block">સ્થિતિ:</span>
            <span className="text-xs sm:text-sm font-googlesans font-semibold text-white">
              {result.readiness.overall_readiness_gu}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          {/* Foundation */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex justify-between text-xs font-googlesans">
              <span className="text-white/70">પાયો (Foundation)</span>
              <span className="font-mono text-white font-bold">{result.readiness.foundation_pct}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-700 shadow-[0_0_8px_#fff]"
                style={{ width: `${result.readiness.foundation_pct}%` }}
              />
            </div>
            <p className="text-[11px] font-rasa text-white/50">મૂળભૂત શૈક્ષણિક વિષયો અને તર્કશક્તિ</p>
          </div>

          {/* Skills */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex justify-between text-xs font-googlesans">
              <span className="text-white/70">કૌશલ્ય (Domain Skills)</span>
              <span className="font-mono text-white font-bold">{result.readiness.skills_pct}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-700 shadow-[0_0_8px_#fff]"
                style={{ width: `${result.readiness.skills_pct}%` }}
              />
            </div>
            <p className="text-[11px] font-rasa text-white/50">ક્ષેત્ર સંબંધિત પ્રેક્ટિકલ નોલેજ</p>
          </div>

          {/* Experience */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex justify-between text-xs font-googlesans">
              <span className="text-white/70">પ્રાયોગિક અનુભવ (Experience)</span>
              <span className="font-mono text-white font-bold">{result.readiness.experience_pct}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-700 shadow-[0_0_8px_#fff]"
                style={{ width: `${result.readiness.experience_pct}%` }}
              />
            </div>
            <p className="text-[11px] font-rasa text-white/50">પ્રોજેક્ટ્સ, પ્રયોગો અને વર્કશોપ્સ</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. "WHAT SHOULD I DO NOW?" IMMEDIATE ACTIONS
          ══════════════════════════════════════════════ */}
      <section className="p-6 sm:p-8 rounded-3xl border border-white/20 bg-black/60 backdrop-blur-2xl shadow-xl space-y-6">
        <div className="border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white mb-2">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>ACTIONABLE NEXT STEPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
            હમણાં મારે શું કરવું જોઈએ?
          </h2>
          <p className="text-sm font-rasa text-white/70 mt-1">
            તમારા વર્તમાન સ્તરથી શરૂ કરવા માટેના સૌથી મહત્વના ૪ નક્કર પગલાં:
          </p>
        </div>

        <div className="space-y-3.5">
          {result.immediate_actions.map((item) => {
            const isDone = completedSteps.includes(item.step);
            return (
              <div
                key={item.step}
                onClick={() => toggleStep(item.step)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                  isDone
                    ? "bg-white/[0.08] border-white/40 text-white/60"
                    : "bg-white/[0.03] border-white/15 hover:border-white/40 hover:bg-white/[0.06] text-white"
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  ) : (
                    <Circle className="w-6 h-6 text-white/40 hover:text-white" />
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className={`font-googlesans font-semibold text-base sm:text-lg ${
                      isDone ? "line-through text-white/60" : "text-white"
                    }`}>
                      {item.title}
                    </h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 font-mono border border-white/10">
                      {item.timeframe}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-rasa text-white/70">
                    {item.action}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. VISUAL CAREER ROADMAP (Interactive 3D Stages)
          ══════════════════════════════════════════════ */}
      <section ref={roadmapRef} className="space-y-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.06] text-xs font-googlesans text-white">
            <Layers className="w-4 h-4 text-white" />
            <span>INTERACTIVE STEP-BY-STEP PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white text-glow-white">
            કારકિર્દી રોડમેપ (Career Roadmap)
          </h2>
          <p className="text-base sm:text-lg font-rasa text-white/70">
            તમારા વર્તમાન સ્તરથી {result.career.title} બનવા સુધીના તબક્કાવાર સીમાચિહ્નો:
          </p>
        </div>

        {/* Roadmap Stages Accordion / Vertical Timeline */}
        <div className="relative border-l-2 border-white/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {result.roadmap.map((stage) => {
            const isOpen = expandedStage === stage.stage_num;
            return (
              <div key={stage.stage_num} className="relative group">
                
                {/* Timeline Dot */}
                <div className={`absolute -left-[41px] sm:-left-[57px] top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                  isOpen
                    ? "bg-white text-black border-white shadow-[0_0_20px_#fff]"
                    : "bg-black text-white border-white/40 group-hover:border-white"
                }`}>
                  {stage.stage_num}
                </div>

                {/* Stage Card */}
                <div 
                  onClick={() => setExpandedStage(isOpen ? 0 : stage.stage_num)}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "bg-black/80 border-white shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.1)]"
                      : "bg-black/50 border-white/15 hover:border-white/35 hover:bg-black/70"
                  }`}
                >
                  
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono text-white/50 px-2 py-0.5 rounded bg-white/10">
                          {stage.period_gu}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-googlesans text-white group-hover:text-glow-white">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-rasa text-white/60">
                        {stage.subtitle_gu}
                      </p>
                    </div>

                    <div className="shrink-0 p-2 rounded-full bg-white/5 border border-white/10 text-white/60">
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`} />
                    </div>
                  </div>

                  {/* Expanded Stage Details */}
                  {isOpen && (
                    <div className="mt-6 pt-6 border-t border-white/10 space-y-5 animate-fadeIn">
                      
                      {/* What to learn */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-white" />
                          <span>શું શીખવાનું છે (What to Learn):</span>
                        </h4>
                        <ul className="space-y-1.5 pl-2">
                          {stage.what_to_learn.map((item, idx) => (
                            <li key={idx} className="text-sm font-rasa text-white/90 flex items-start gap-2">
                              <span className="text-white mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Why it matters */}
                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                        <span className="text-xs font-mono text-white/50 uppercase block">શા માટે મહત્વનું છે:</span>
                        <p className="text-xs sm:text-sm font-rasa text-white/80 leading-relaxed">
                          {stage.why_it_matters}
                        </p>
                      </div>

                      {/* Key skills chips */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-white/50 uppercase block">જરૂરી મુખ્ય Skills:</span>
                        <div className="flex flex-wrap gap-2">
                          {stage.key_skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-googlesans font-semibold text-white"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Suggested next step */}
                      <div className="pt-2 flex items-center justify-between text-xs font-googlesans text-white/90 bg-white/[0.06] p-3 rounded-xl border border-white/10">
                        <span><strong>આગલું પગલું:</strong> {stage.suggested_next_step}</span>
                      </div>

                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* ══════════════════════════════════════════════
          5. SKILL GAP ANALYSIS (CURRENT vs NEEDED)
          ══════════════════════════════════════════════ */}
      <section className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-2xl shadow-xl space-y-6">
        <div className="border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
            <span>SKILL GAP ANALYSIS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
            તમારે હજુ શું શીખવાનું છે? (Skill Gap)
          </h3>
          <p className="text-xs sm:text-sm font-rasa text-white/60 mt-1">
            વર્તમાન સ્તર (Current) થી લક્ષ્ય સુધી પહોંચવા માટે જરૂરી સ્તર (Needed) ની સરખામણી:
          </p>
        </div>

        <div className="space-y-5 pt-2">
          {result.skill_gap.map((item, idx) => (
            <div key={idx} className="space-y-2 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-googlesans">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{item.skill_name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/60 font-mono">
                    {item.category_gu}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-white/60">હાલ: {item.current_level}/10</span>
                  <span className="text-white">→</span>
                  <span className="text-white font-bold">જરૂરિયાત: {item.needed_level}/10</span>
                </div>
              </div>

              {/* Progress track comparison */}
              <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
                {/* Needed Level Shadow Marker */}
                <div
                  className="absolute top-0 bottom-0 bg-white/20 border-r-2 border-white rounded-full"
                  style={{ width: `${item.needed_level * 10}%` }}
                />
                {/* Current Level Solid Fill */}
                <div
                  className="absolute top-0 bottom-0 bg-white rounded-full shadow-[0_0_10px_#fff]"
                  style={{ width: `${item.current_level * 10}%` }}
                />
              </div>

              <div className="text-[11px] font-rasa text-white/60 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <span>{item.tip_gu}</span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. PERSONALIZED TIME-BASED LEARNING ROADMAP
          ══════════════════════════════════════════════ */}
      <section className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-2xl shadow-xl space-y-6">
        <div className="border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white mb-2">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span>TIME-BOUND ACTION ROADMAP</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
            તમારો Time-Bound Learning Roadmap
          </h3>
          <p className="text-xs sm:text-sm font-rasa text-white/60 mt-1">
            હમણાંથી શરૂ કરીને લાંબા ગાળાના લક્ષ્ય સુધીનું સમયબદ્ધ આયોજન:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {result.timeline_plan.map((plan, pIdx) => (
            <div
              key={pIdx}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/15 flex flex-col justify-between space-y-3 hover:border-white/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded-full bg-white/10 border border-white/15 inline-block">
                  {plan.period}
                </span>
                <h4 className="font-googlesans font-semibold text-sm text-white">
                  {plan.focus}
                </h4>
                <ul className="space-y-1 text-xs font-rasa text-white/70 pl-2">
                  {plan.actions.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5">
                      <span className="text-white">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] font-googlesans text-white/80">
                <span className="text-white/50 block">Milestone:</span>
                <span className="font-medium text-white">{plan.milestone}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. ALTERNATIVE CAREER PATHS
          ══════════════════════════════════════════════ */}
      {result.alternative_careers.length > 0 && (
        <section className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-2xl shadow-xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold font-googlesans text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-white" />
              <span>તમારા માટે અન્ય સંભવિત માર્ગો (Alternative Careers)</span>
            </h3>
            <p className="text-xs sm:text-sm font-rasa text-white/60 mt-1">
              તમારા રસ અને ક્ષમતા મુજબ આ ક્ષેત્રો પણ ઉત્કૃષ્ટ વિકલ્પ બની શકે છે:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.alternative_careers.map((alt, aIdx) => (
              <div
                key={aIdx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/15 hover:border-white/40 hover:bg-white/[0.06] transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-googlesans font-semibold text-base text-white">
                    {alt.title}
                  </h4>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/10">
                    {alt.match_pct}% Match
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-rasa text-white/70">
                  {alt.desc_gu}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          8. MORE INFORMATION & OFFICIAL RESOURCES
          ══════════════════════════════════════════════ */}
      {result.more_info_resources && result.more_info_resources.length > 0 && (
        <section className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-2xl shadow-xl space-y-6">
          <div className="border-b border-white/10 pb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white mb-2">
                <BookOpen className="w-3.5 h-3.5 text-white" />
                <span>MORE INFORMATION & EXPLORATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-googlesans text-white">
                વધુ માહિતી અને સત્તાવાર સંશોધન સ્ત્રોતો
              </h3>
              <p className="text-xs sm:text-sm font-rasa text-white/60 mt-1">
                આ ક્ષેત્રમાં ઊંડાણપૂર્વક જાણવા અને સત્તાવાર માહિતી મેળવવા માટે પ્રમાણિત સ્રોતો:
              </p>
            </div>
            {result.is_custom && (
              <span className="text-xs px-3 py-1 rounded-full bg-white/15 text-white font-googlesans border border-white/20">
                વિશેષ ક્ષેત્ર માર્ગદર્શન
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.more_info_resources.map((res, rIdx) => (
              <div
                key={rIdx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/15 hover:border-white/35 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/10 text-white/80 border border-white/10">
                    {res.type_gu}
                  </span>
                  <Sparkles className="w-4 h-4 text-white/50" />
                </div>
                <h4 className="font-googlesans font-semibold text-base text-white">
                  {res.title}
                </h4>
                <p className="text-xs sm:text-sm font-rasa text-white/70">
                  {res.desc_gu}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          9. FINAL CALL TO ACTION
          ══════════════════════════════════════════════ */}
      <section className="text-center p-8 sm:p-12 rounded-3xl border border-white/20 bg-black/80 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.08)] space-y-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white text-glow-white leading-tight">
          તમારું ભવિષ્ય આજે નક્કી થતું નથી.
          <br />
          <span className="text-white/90">તે આજે બનાવવાનું શરૂ થાય છે.</span>
        </h2>

        <p className="text-base sm:text-xl font-rasa text-white/70 max-w-2xl mx-auto leading-relaxed">
          EduVision AI તમને દિશા બતાવે છે. આગળ વધવાનું પગલું તમારું છે.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToRoadmap}
            className="px-6 py-3.5 rounded-xl bg-white text-black font-googlesans font-bold text-sm sm:text-base hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            મારો Roadmap જુઓ ↑
          </button>

          <button
            onClick={onReset}
            className="px-6 py-3.5 rounded-xl border border-white/30 bg-black/40 hover:bg-white/10 hover:border-white font-googlesans font-semibold text-sm sm:text-base text-white transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4 text-white" />
            <span>ફરીથી Career Analysis કરો</span>
          </button>
        </div>
      </section>

    </div>
  );
}
