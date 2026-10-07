"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, HelpCircle, Layers, Check } from "lucide-react";
import { CareerGoal, CareerInput } from "@/types/career";

interface CareerQuestionnaireProps {
  career: CareerGoal;
  onBackToHero: () => void;
  onSubmit: (input: CareerInput) => void;
}

const STANDARDS = [
  "ધોરણ 6",
  "ધોરણ 7",
  "ધોરણ 8",
  "ધોરણ 9",
  "ધોરણ 10",
  "ધોરણ 11",
  "ધોરણ 12",
  "કોલેજ / યુનિવર્સિટી"
];

const SUBJECT_OPTIONS = [
  { id: "maths", label: "ગણિત (Mathematics)", desc: "તર્ક, આંકડા અને ગાણિતિક કોયડા" },
  { id: "science", label: "વિજ્ઞાન (Science / Physics / Chemistry)", desc: "ભૌતિક વિજ્ઞાન અને રસાયણશાસ્ત્ર" },
  { id: "biology", label: "જીવવિજ્ઞાન (Biology / Botany / Zoology)", desc: "માનવ શરીરરચના અને જીવંત સૃષ્ટિ" },
  { id: "computer", label: "કોમ્પ્યુટર & કોડિંગ (Computer Science / IT)", desc: "પ્રોગ્રામિંગ, સોફ્ટવેર અને ટેકનોલોજી" },
  { id: "commerce", label: "વાણિજ્ય & એકાઉન્ટ (Commerce & Accounts)", desc: "નાણાં, હિસાબ અને બિઝનેસ" },
  { id: "social", label: "સામાજિક વિજ્ઞાન & ઇતિહાસ (Social Studies)", desc: "ઇતિહાસ, ભૂગોળ અને બંધારણ" },
  { id: "languages", label: "ભાષા & સાહિત્ય (Gujarati / English)", desc: "લેખન, વક્તૃત્વ અને સાહિત્યિક રુચિ" }
];

const STRENGTH_OPTIONS = [
  { id: "logical", label: "તાર્કિક વિચારસરણી (Logical & Analytical)", desc: "કોઈપણ બાબતનું કારણ સમજીને તર્કબદ્ધ વિચાર કરવો" },
  { id: "problem_solving", label: "સમસ્યા નિવારણ (Problem Solving)", desc: "અટપટી મુશ્કેલીઓનો સચોટ ઉપાય શોધવો" },
  { id: "creativity", label: "સર્જનાત્મકતા & ડિઝાઇન (Creativity & Design)", desc: "નવા આઈડિયાઝ, વિઝ્યુલાઇઝેશન અને કલાત્મક દ્રષ્ટિ" },
  { id: "memory_reading", label: "વાંચન અને યાદશક્તિ (Memory & Deep Reading)", desc: "વિસ્તૃત વિષયવસ્તુ વાંચીને લાંબા સમય સુધી યાદ રાખવું" },
  { id: "communication", label: "પ્રત્યાયન અને નેતૃત્વ (Leadership & Communication)", desc: "અન્યો સાથે સંવાદ સાધવો અને ટીમનું નેતૃત્વ કરવું" }
];

const EXPERIENCE_OPTIONS = [
  { id: "beginner", label: "બિલકુલ નવી શરૂઆત (Beginner)", desc: "હજુ સુધી માત્ર રસ છે, પાયાનું શીખવાનું શરૂ કરવાનું છે" },
  { id: "intermediate", label: "મૂળભૂત ખ્યાલો સ્પષ્ટ છે (Basic Concepts Clear)", desc: "પાયાની બાબતો જાણું છું અને સામાન્ય પ્રશ્નો ઉકેલી શકું છું" },
  { id: "projects", label: "નાના પ્રેક્ટિકલ પ્રોજેક્ટ્સ કરેલા છે (Built Projects)", desc: "પ્રાયોગિક કામ કરેલું છે અથવા કોડિંગ/મોડેલ બનાવેલ છે" },
  { id: "advanced", label: "અદ્યતન સ્તરે નિયમિત પ્રેક્ટિસ કરું છું (Advanced Practice)", desc: "નિયમિત પ્રેક્ટિસ, કોર્સ અથવા સ્પર્ધાત્મક તૈયારી ચાલુ છે" }
];

const LEARNING_PREFERENCES = [
  { id: "practical", label: "પ્રેક્ટિકલ પ્રોજેક્ટ્સ & પ્રયોગો દ્વારા", desc: "જાતે કામ કરીને, કોડિંગ કરીને કે પ્રયોગ કરીને ઝડપથી સમજવું" },
  { id: "visual", label: "વિડિયો લેક્ચર્સ & વિઝ્યુઅલ ડેમો દ્વારા", desc: "એનિમેશન, ગ્રાફિક્સ અને વિઝ્યુઅલ ઉદાહરણોથી શીખવું" },
  { id: "reading", label: "પુસ્તકો & થીયરીટીકલ વાંચન દ્વારા", desc: "શાંતિથી પુસ્તકો, નોટ્સ અને સંદર્ભ સાહિત્ય વાંચીને શીખવું" },
  { id: "discussion", label: "સમૂહ ચર્ચા & મેન્ટર માર્ગદર્શન દ્વારા", desc: "શિક્ષકો કે મિત્રો સાથે ચર્ચા કરીને શંકાઓનું નિવારણ કરવું" }
];

const COMMITMENT_OPTIONS = [
  { id: "full", label: "સંપૂર્ણ સમર્પિત (૧૦૦% Full Commitment)", desc: "મારે કોઈપણ સંજોગોમાં મારું આ સપનું સિદ્ધ કરવું છે" },
  { id: "high", label: "ખૂબ ઉત્સુક (High Dedication)", desc: "યોગ્ય માર્ગદર્શન મળશે તો હું પૂરી મહેનત કરવા તૈયાર છું" },
  { id: "exploring", label: "અન્વેષણ (Exploring Career Options)", desc: "હાલમાં માહિતી અને શક્યતાઓ તપાસી રહ્યો છું" }
];

export function CareerQuestionnaire({ career, onBackToHero, onSubmit }: CareerQuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(0);

  // Form State
  const [standard, setStandard] = useState<string>("ધોરણ 10");
  const [favSubjects, setFavSubjects] = useState<string[]>(["ગણિત (Mathematics)", "વિજ્ઞાન (Science / Physics / Chemistry)"]);
  const [strengthArea, setStrengthArea] = useState<string>("તાર્કિક વિચારસરણી (Logical & Analytical)");
  const [currentExp, setCurrentExp] = useState<string>("મૂળભૂત ખ્યાલો સ્પષ્ટ છે (Basic Concepts Clear)");
  const [learningPref, setLearningPref] = useState<string>("પ્રેક્ટિકલ પ્રોજેક્ટ્સ & પ્રયોગો દ્વારા");
  const [commitment, setCommitment] = useState<string>("સંપૂર્ણ સમર્પિત (૧૦૦% Full Commitment)");

  const totalSteps = 6;

  const toggleSubject = (label: string) => {
    if (favSubjects.includes(label)) {
      if (favSubjects.length > 1) {
        setFavSubjects(favSubjects.filter((s) => s !== label));
      }
    } else {
      setFavSubjects([...favSubjects, label]);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Submit complete input
      onSubmit({
        career_id: career.id,
        career_name: career.title,
        standard,
        fav_subjects: favSubjects,
        strength_area: strengthArea,
        current_experience: currentExp,
        learning_preference: learningPref,
        commitment_level: commitment
      });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      onBackToHero();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 select-none relative z-20">
      
      {/* Top Breadcrumb & Progress Tracker */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handlePrev}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all text-xs font-googlesans"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{currentStep === 0 ? "લક્ષ્ય બદલો" : "પાછળ"}</span>
        </button>

        {/* Selected Career Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-xs font-googlesans text-white shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>લક્ષ્ય: <strong>{career.title}</strong></span>
        </div>

        {/* Step Indicator */}
        <div className="text-xs font-mono text-white/80 font-bold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
          0{currentStep + 1} / 0{totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-white transition-all duration-500 shadow-[0_0_10px_#fff]"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Question Card Frame */}
      <div className="p-6 sm:p-10 rounded-3xl border border-white/20 bg-black/70 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(255,255,255,0.06)] relative overflow-hidden">
        
        {/* STEP 1: Current Standard */}
        {currentStep === 0 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">પ્રશ્ન ૦૧ • શૈક્ષણિક તબક્કો</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
                તમે હાલમાં કયા ધોરણમાં અભ્યાસ કરો છો?
              </h2>
              <p className="text-sm font-rasa text-white/70">
                આ માહિતીથી અમે તમારા વર્તમાન સ્તર મુજબનો સ્ટેપ-બાય-સ્ટેપ રોડમેપ તૈયાર કરી શકીશું.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {STANDARDS.map((std) => {
                const isSelected = standard === std;
                return (
                  <button
                    key={std}
                    type="button"
                    onClick={() => setStandard(std)}
                    className={`p-4 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-center gap-1.5 ${
                      isSelected
                        ? "bg-white text-black font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-[1.02]"
                        : "bg-white/[0.04] text-white/80 border-white/15 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <span className="font-googlesans text-base sm:text-lg">{std}</span>
                    {isSelected && <Check className="w-4 h-4 text-black" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Favourite Subjects */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">પ્રશ્ન ૦૨ • મનપસંદ વિષયો</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
                તમારા સૌથી પ્રિય / મનપસંદ વિષયો કયા છે?
              </h2>
              <p className="text-sm font-rasa text-white/70">
                એક અથવા વધુ વિષયો પસંદ કરો જેમાં તમને સૌથી વધુ રસ પડે છે.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SUBJECT_OPTIONS.map((sub) => {
                const isSelected = favSubjects.includes(sub.label);
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => toggleSubject(sub.label)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 ${
                      isSelected
                        ? "bg-white/15 text-white border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        : "bg-white/[0.03] text-white/80 border-white/15 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? "bg-white border-white text-black" : "border-white/30"
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                    </div>
                    <div>
                      <div className="font-googlesans font-semibold text-sm sm:text-base text-white">{sub.label}</div>
                      <div className="text-xs font-rasa text-white/60 mt-0.5">{sub.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Core Strength Area */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">પ્રશ્ન ૦૩ • શૈક્ષણિક ક્ષમતા</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
                તમારી સૌથી મોટી શૈક્ષણિક શક્તિ (Strength) કઈ છે?
              </h2>
              <p className="text-sm font-rasa text-white/70">
                તમારી મુખ્ય ક્ષમતા જે તમને મુશ્કેલ વિષયો ઉકેલવામાં મદદરૂપ બને છે.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {STRENGTH_OPTIONS.map((str) => {
                const isSelected = strengthArea === str.label;
                return (
                  <button
                    key={str.id}
                    type="button"
                    onClick={() => setStrengthArea(str.label)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.3)] font-bold scale-[1.01]"
                        : "bg-white/[0.03] text-white/80 border-white/15 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <div className={`font-googlesans text-base ${isSelected ? "text-black font-bold" : "text-white font-semibold"}`}>
                        {str.label}
                      </div>
                      <div className={`text-xs font-rasa mt-0.5 ${isSelected ? "text-black/80" : "text-white/60"}`}>
                        {str.desc}
                      </div>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-black shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Current Experience Level */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">પ્રશ્ન ૦૪ • વર્તમાન તૈયારી</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
                {career.title} ક્ષેત્રમાં તમારો હાલનો અનુભવ કેટલો છે?
              </h2>
              <p className="text-sm font-rasa text-white/70">
                સાચો વિકલ્પ પસંદ કરો જેથી અમે યોગ્ય સ્તરથી માર્ગદર્શન શરૂ કરી શકીએ.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {EXPERIENCE_OPTIONS.map((exp) => {
                const isSelected = currentExp === exp.label;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setCurrentExp(exp.label)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.3)] font-bold scale-[1.01]"
                        : "bg-white/[0.03] text-white/80 border-white/15 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <div className={`font-googlesans text-base ${isSelected ? "text-black font-bold" : "text-white font-semibold"}`}>
                        {exp.label}
                      </div>
                      <div className={`text-xs font-rasa mt-0.5 ${isSelected ? "text-black/80" : "text-white/60"}`}>
                        {exp.desc}
                      </div>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-black shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Learning Preference */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">પ્રશ્ન ૦૫ • શીખવાની શૈલી</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
                તમને કઈ રીતે શીખવું સૌથી વધુ અનુકૂળ રહે છે?
              </h2>
              <p className="text-sm font-rasa text-white/70">
                તમારી મનપસંદ લર્નિંગ સ્ટાઇલ જે તમને લાંબા સમય સુધી પ્રોત્સાહિત રાખે છે.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {LEARNING_PREFERENCES.map((pref) => {
                const isSelected = learningPref === pref.label;
                return (
                  <button
                    key={pref.id}
                    type="button"
                    onClick={() => setLearningPref(pref.label)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.3)] font-bold scale-[1.01]"
                        : "bg-white/[0.03] text-white/80 border-white/15 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <div className={`font-googlesans text-base ${isSelected ? "text-black font-bold" : "text-white font-semibold"}`}>
                        {pref.label}
                      </div>
                      <div className={`text-xs font-rasa mt-0.5 ${isSelected ? "text-black/80" : "text-white/60"}`}>
                        {pref.desc}
                      </div>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-black shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: Commitment Level */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">પ્રશ્ન ૦૬ • લક્ષ્ય પ્રત્યે સમર્પણ</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-googlesans text-white">
                {career.title} બનવા માટે તમારી પ્રતિબદ્ધતા (Commitment) કેટલી છે?
              </h2>
              <p className="text-sm font-rasa text-white/70">
                તમારા સપના પ્રત્યેની તમારી ગંભીરતા અને મહેનત કરવાની તૈયારી.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {COMMITMENT_OPTIONS.map((com) => {
                const isSelected = commitment === com.label;
                return (
                  <button
                    key={com.id}
                    type="button"
                    onClick={() => setCommitment(com.label)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.3)] font-bold scale-[1.01]"
                        : "bg-white/[0.03] text-white/80 border-white/15 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <div className={`font-googlesans text-base ${isSelected ? "text-black font-bold" : "text-white font-semibold"}`}>
                        {com.label}
                      </div>
                      <div className={`text-xs font-rasa mt-0.5 ${isSelected ? "text-black/80" : "text-white/60"}`}>
                        {com.desc}
                      </div>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-black shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Card Footer Actions */}
        <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className="px-5 py-2.5 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-googlesans text-sm transition-all"
          >
            ← પાછળ
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 rounded-xl bg-white text-black font-googlesans font-bold text-sm sm:text-base flex items-center gap-2 transition-all duration-200 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            <span>{currentStep === totalSteps - 1 ? "AI Roadmap તૈયાર કરો" : "આગળ →"}</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>

      </div>

    </div>
  );
}
