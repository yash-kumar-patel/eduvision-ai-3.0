"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Sparkles, ArrowRight, Compass, Target, CheckCircle2, TrendingUp, Info } from "lucide-react";
import { CAREER_DATABASE, searchCareers, detectCareerCategory } from "@/lib/careerEngine";
import { CareerGoal } from "@/types/career";

interface CareerHeroInputProps {
  onSelectCareer: (career: CareerGoal) => void;
}

const ROTATING_EXAMPLES = [
  "Lawyer / Advocate",
  "AI Engineer",
  "Doctor",
  "Commercial Pilot",
  "Data Scientist",
  "IAS Officer",
  "Chartered Accountant",
  "Cyber Security Expert",
  "Robotics Engineer",
  "UI/UX Designer",
  "ISRO Space Scientist"
];

const POPULAR_CHIPS = [
  { id: "lawyer", label: "Lawyer / Advocate (વકીલ)", trending: true },
  { id: "ai_engineer", label: "AI Engineer", trending: true },
  { id: "doctor", label: "Doctor (ડોક્ટર)", trending: true },
  { id: "pilot", label: "Commercial Pilot (પાયલોટ)", trending: true },
  { id: "ias_officer", label: "IAS / IPS Officer", trending: true },
  { id: "data_scientist", label: "Data Scientist", trending: true },
  { id: "chartered_accountant", label: "Chartered Accountant (CA)", trending: true },
  { id: "cyber_security", label: "Cyber Security", trending: true },
  { id: "software_dev", label: "Software Developer", trending: false },
  { id: "ui_ux_designer", label: "UI/UX Designer", trending: false },
  { id: "aerospace_engineer", label: "Space Scientist (ISRO)", trending: false },
];

export function CareerHeroInput({ onSelectCareer }: CareerHeroInputProps) {
  const [query, setQuery] = useState("");
  const [exampleIndex, setExampleIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<CareerGoal[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Rotate placeholder examples naturally
  useEffect(() => {
    const interval = setInterval(() => {
      setExampleIndex((prev) => (prev + 1) % ROTATING_EXAMPLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Update autocomplete suggestions
  useEffect(() => {
    if (query.trim().length > 0) {
      setSuggestions(searchCareers(query));
    } else {
      setSuggestions(CAREER_DATABASE.filter(c => c.trending).slice(0, 6));
    }
  }, [query]);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (career: CareerGoal) => {
    setQuery(career.title);
    setIsFocused(false);
    onSelectCareer(career);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Exact or best match
    const matches = searchCareers(query);
    if (matches.length > 0 && matches[0].tags.some(t => query.toLowerCase().includes(t))) {
      handleSelect(matches[0]);
    } else {
      // Intelligently classify custom input
      const detected = detectCareerCategory(query);
      handleSelect({
        id: "custom_" + Date.now(),
        title: query.trim().charAt(0).toUpperCase() + query.trim().slice(1),
        title_gu: `${query.trim()} (${detected.title_gu})`,
        category: detected.category,
        category_gu: detected.title_gu,
        short_desc_gu: `વિદ્યાર્થી દ્વારા નિર્ધારિત ${query.trim()} કારકિર્દી લક્ષ્ય`,
        tags: [query.trim().toLowerCase()]
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 select-none relative z-20">
      
      {/* Top Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-xl text-xs font-googlesans font-semibold text-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6 animate-pulse-slow">
        <Compass className="w-4 h-4 text-white" />
        <span className="tracking-widest uppercase">CAREER INTELLIGENCE ENGINE • EDUVISION AI 3.0</span>
      </div>

      {/* Main Gujarati Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-googlesans text-white tracking-wide text-glow-white mb-6">
        તમારે ભવિષ્યમાં શું બનવું છે?
      </h1>

      {/* Supporting Guidance Text */}
      <p className="text-lg sm:text-2xl text-white/80 font-rasa max-w-2xl leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
        તમારા લક્ષ્યથી શરૂઆત કરો. EduVision AI તમને ત્યાં સુધી પહોંચવાનો માર્ગ સમજવામાં મદદ કરશે.
      </p>

      {/* Central AI Prompt Interface Box */}
      <div className="w-full max-w-2xl relative" ref={dropdownRef}>
        <form
          onSubmit={handleSubmit}
          className={`relative flex items-center w-full p-1.5 sm:p-2.5 pl-3 sm:pl-5 rounded-2xl bg-black/80 border backdrop-blur-2xl transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] ${
            isFocused
              ? "border-white shadow-[0_0_35px_rgba(255,255,255,0.25)] ring-1 ring-white/40"
              : "border-white/25 hover:border-white/40"
          }`}
        >
          {/* Search Icon */}
          <div className="text-white/60 shrink-0 pl-1">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={`હું શું બનવા માંગુ છું? (દા.ત. ${ROTATING_EXAMPLES[exampleIndex]})`}
            className="w-full py-2 sm:py-3.5 bg-transparent text-white placeholder-white/40 font-googlesans text-sm sm:text-lg focus:outline-none border-none ring-0 shadow-none px-2 sm:px-3"
          />

          {/* Submit Action Button */}
          <div className="shrink-0">
            <button
              type="submit"
              disabled={!query.trim()}
              className="h-10 sm:h-12 px-3.5 sm:px-7 rounded-xl bg-white text-black font-googlesans font-bold text-xs sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-neutral-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <span className="whitespace-nowrap font-bold">આગળ વધો</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0" />
            </button>
          </div>
        </form>

        {/* Autocomplete & Smart Fallback Dropdown */}
        {isFocused && (
          <div className="absolute top-full left-0 right-0 mt-3 p-3 rounded-2xl bg-black/95 border border-white/30 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.12)] z-50 text-left divide-y divide-white/10 max-h-80 overflow-y-auto">
            
            {/* Matches Found */}
            {suggestions.length > 0 ? (
              <div className="space-y-1 pb-2">
                <div className="px-3 py-1 text-[11px] font-mono text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-white/70" />
                  <span>{query.trim() ? "મળતા પરિણામો" : "લોકપ્રિય & ટ્રેન્ડિંગ કારકિર્દી"}</span>
                </div>
                {suggestions.map((career) => (
                  <div
                    key={career.id}
                    onMouseDown={() => handleSelect(career)}
                    className="p-3 rounded-xl hover:bg-white/15 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-googlesans font-semibold text-white text-base group-hover:text-glow-white flex items-center gap-2">
                        <span>{career.title}</span>
                        {career.trending && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-black font-mono font-bold">
                            Trending
                          </span>
                        )}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70 font-mono">
                          {career.category_gu}
                        </span>
                      </div>
                      <div className="text-xs font-rasa text-white/60 mt-0.5">
                        {career.short_desc_gu}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            ) : null}

            {/* Smart Fallback for unlisted/rare input */}
            {query.trim().length > 0 && (
              <div className="pt-2">
                <div
                  onMouseDown={handleSubmit}
                  className="p-3.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <div>
                      <div className="font-googlesans font-bold text-white text-base group-hover:text-glow-white">
                        વિશેષ લક્ષ્ય તરીકે આગળ વધો: &quot;{query}&quot; →
                      </div>
                      <div className="text-xs font-rasa text-white/70 mt-0.5">
                        EduVision AI આ કસ્ટમ ક્ષેત્ર માટે AI રોડમેપ, જરૂરી કૌશલ્યો અને વધુ માહિતી સ્ત્રોતો તૈયાર કરશે.
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white shrink-0 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            )}

          </div>
        )}
      </div>

      {/* Popular & Trending Career Quick Chips */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl">
        <span className="text-xs font-googlesans text-white/60 mr-1 flex items-center gap-1 font-semibold">
          <TrendingUp className="w-3.5 h-3.5 text-white" />
          <span>ટ્રેન્ડિંગ & લોકપ્રિય:</span>
        </span>
        {POPULAR_CHIPS.map((chip) => (
          <button
            key={chip.id}
            onClick={() => {
              const c = CAREER_DATABASE.find((item) => item.id === chip.id);
              if (c) handleSelect(c);
            }}
            className={`px-3.5 py-1.5 rounded-full border text-xs font-googlesans transition-all duration-200 shadow-sm flex items-center gap-1.5 ${
              chip.trending 
                ? "bg-white/[0.08] border-white/30 text-white hover:border-white hover:bg-white/20 font-medium"
                : "bg-white/[0.03] border-white/15 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10"
            }`}
          >
            <span>{chip.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
