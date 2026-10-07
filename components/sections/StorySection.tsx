"use client";

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { 
  Target, 
  Clock, 
  CalendarX, 
  BookOpen, 
  Sparkles, 
  ArrowDown, 
  Award, 
  Brain, 
  Zap,
  CheckCircle2
} from 'lucide-react';

export function StorySection() {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const timelineItems = [
    {
      title: "તેના અગાઉના ગુણ...",
      subtitle: "પ્રથમ અને દ્વિતીય પરીક્ષાનું પ્રદર્શન (G1 & G2 Marks)",
      icon: Target,
      graphicEmoji: "🎯 📊",
      badge: "માર્ક્સ અને પરીક્ષા પરિણામ",
      desc: "વિદ્યાર્થીનો પ્રથમ અને દ્વિતીય સત્રનો ગ્રાફ મોડેલમાં સૌથી મહત્વપૂર્ણ પરિબળ છે."
    },
    {
      title: "તેનો અભ્યાસ સમય...",
      subtitle: "દૈનિક શાળા બાદ વાંચન કલાકો (Daily Study Time / Samay)",
      icon: Clock,
      graphicEmoji: "⏱️ ⏰",
      badge: "દૈનિક સમય અને સમર્પણ",
      desc: "દરરોજ શાળા પછી કેટલા કલાક વાંચન થાય છે તે પરિણામ નક્કી કરે છે."
    },
    {
      title: "તેની ગેરહાજરી...",
      subtitle: "વર્ગખંડમાં ગેરહાજરીના દિવસો (School Absences / Attendance)",
      icon: CalendarX,
      graphicEmoji: "🏫 🚫 📅",
      badge: "હાજરી અને ગેરહાજરી પત્રક",
      desc: "વધુ ગેરહાજરીથી પાઠ્યક્રમની સમજ પર સીધી નકારાત્મક અસર પડે છે."
    },
    {
      title: "તેની અભ્યાસની ટેવ...",
      subtitle: "નિયમિત પુનરાવર્તન અને નાપાસ વિષયો (Study Habits & Failures)",
      icon: BookOpen,
      graphicEmoji: "📚 📖",
      badge: "વાંચન ટેવ અને નિષ્ફળતા",
      desc: "અગાઉ નાપાસ થયેલા વિષયો અને નિયમિત પુનરાવર્તનની ટેવ."
    },
    {
      title: "અને અન્ય શૈક્ષણિક પરિબળો...",
      subtitle: "શાળા અને પરિવારની સહાય, ઇન્ટરનેટ અને સ્વાસ્થ્ય (Academic Support)",
      icon: Sparkles,
      graphicEmoji: "💡 🔬 🌐",
      badge: "શૈક્ષણિક વાતાવરણ અને સહાય",
      desc: "ઘરે ઇન્ટરનેટ, પરિવારનું પ્રોત્સાહન, શાળાનું કોચિંગ અને શારીરિક સ્વાસ્થ્ય."
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-transparent text-white py-24 flex flex-col items-center justify-center overflow-hidden px-4">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-white/[0.03] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl w-full px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Main Header */}
        <div className="py-8 sm:py-12">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold font-googlesans text-white tracking-wide drop-shadow-[0_4px_30px_rgba(255,255,255,0.35)]">
              વિદ્યાર્થીનું પરિણામ માત્ર એક નંબર નથી.
            </h2>
          </ScrollReveal>
        </div>

        {/* Story Timeline Container */}
        <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto my-8 sm:my-12">
          
          {/* Vertical Glowing Timeline Bar */}
          <div className="absolute top-10 bottom-10 left-4 sm:left-8 w-[2px] bg-gradient-to-b from-white/20 via-white/80 to-white/20 shadow-[0_0_12px_#fff]"></div>

          <div className="space-y-6 sm:space-y-10 w-full">
            {timelineItems.map((item, idx) => {
              const IconComponent = item.icon;
              const isHovered = activeHover === idx;

              return (
                <ScrollReveal key={idx} variant="fadeUp" delay={idx * 120}>
                  <div 
                    onMouseEnter={() => setActiveHover(idx)}
                    onMouseLeave={() => setActiveHover(null)}
                    className={`relative flex items-start gap-3 sm:gap-6 pl-10 sm:pl-16 pr-3 sm:pr-4 py-3 sm:py-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'border-white bg-white/10 shadow-[0_10px_35px_rgba(255,255,255,0.2)] sm:translate-x-3 scale-[1.01]'
                        : 'border-white/15 bg-white/[0.03] hover:border-white/40'
                    }`}
                  >
                    {/* Timeline Node Point with Icon */}
                    <div className={`absolute left-[0px] sm:left-[11px] top-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                      isHovered 
                        ? 'border-white bg-white text-black scale-125 shadow-[0_0_20px_#fff]' 
                        : 'border-white/50 bg-black text-white'
                    }`}>
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 text-left space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xl sm:text-2xl font-bold font-googlesans text-white group-hover:text-glow-white">
                          {item.title}
                        </span>
                        <span className="text-xl sm:text-2xl tracking-widest">{item.graphicEmoji}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-white/80">
                        <span>{item.badge}</span>
                      </div>

                      <p className="text-xs sm:text-sm font-rasa text-white/70 leading-relaxed font-semibold">
                        {item.subtitle}
                      </p>

                      {isHovered && (
                        <p className="text-xs font-gujarati text-white/90 pt-2 border-t border-white/15 animate-fade-in">
                          💡 {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Question Transition */}
        <div className="py-10">
          <ScrollReveal variant="fadeUp">
            <p className="text-2xl sm:text-4xl font-bold font-googlesans text-white/95 tracking-wide text-glow-white">
              બધી માહિતી મળીને શું કહી શકે?
            </p>
          </ScrollReveal>
        </div>

        {/* Climax Statement */}
        <div className="py-8">
          <ScrollReveal variant="scaleIn">
            <div className="p-8 sm:p-10 rounded-3xl border border-white/30 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.15)] flex flex-col items-center gap-5">
              <h2 className="text-3xl sm:text-5xl font-bold font-googlesans text-white tracking-wide text-glow-white">
                AI વિદ્યાર્થીની શૈક્ષણિક પ્રગતિનો અંદાજ લગાવી શકે છે.
              </h2>
              
              <p className="text-base sm:text-lg font-rasa text-white/80 leading-relaxed max-w-2xl text-center">
                તમારી માહિતીના આધારે EduVision AI સંભવિત પરિણામનું વિશ્લેષણ કરીને વિદ્યાર્થીને વધુ સારી પ્રગતિ માટે માર્ગદર્શન આપવામાં મદદ કરે છે.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Next Step Transition */}
        <div className="pt-12">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-xl sm:text-2xl font-bold font-googlesans text-white">
                હવે AI સાથે વાત કરવાનો સમય છે.
              </p>
              
              <div className="p-3.5 sm:p-4 px-6 rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-xl max-w-2xl">
                <p className="text-sm sm:text-base font-rasa font-semibold text-white/90 leading-relaxed text-center">
                  તમારી માહિતી આપો <span className="text-white/50">→</span> AI વિશ્લેષણ કરશે <span className="text-white/50">→</span> પરિણામનો અંદાજ મેળવશો <span className="text-white/50">→</span> યોગ્ય માર્ગદર્શન મેળવો.
                </p>
              </div>

              <ArrowDown className="w-6 h-6 text-white animate-bounce mt-4" />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
