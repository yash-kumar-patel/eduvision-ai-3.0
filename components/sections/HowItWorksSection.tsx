"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Sparkles, Database, Sliders, Cpu, LineChart, MessageSquare, FileText } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    { label: "વિદ્યાર્થીની માહિતી", desc: "શૈક્ષણિક અને વ્યક્તિગત ડેટા દાખલ કરવામાં આવે છે.", icon: Database },
    { label: "Data Preprocessing", desc: "ડેટાને સાફ અને વ્યવસ્થિત કરવામાં આવે છે.", icon: Sliders },
    { label: "Feature Processing", desc: "અગત્યના પરિબળોને અલગ તારવવામાં આવે છે.", icon: Cpu },
    { label: "Machine Learning", desc: "મોડેલ ડેટાનું વિશ્લેષણ કરે છે અને પેટર્ન સમજે છે.", icon: Sparkles },
    { label: "Prediction", desc: "ભવિષ્યના શૈક્ષણિક પ્રદર્શનનું અનુમાન લગાવે છે.", icon: LineChart },
    { label: "AI Guidance", desc: "સુધારા માટે વ્યક્તિગત સૂચનો અને માર્ગદર્શન આપે છે.", icon: MessageSquare },
    { label: "Report", desc: "સંપૂર્ણ રિપોર્ટ અને પ્રમાણપત્ર તૈયાર થાય છે.", icon: FileText },
  ];

  return (
    <section className="py-24 px-4 bg-transparent text-white overflow-hidden relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center sm:text-left mb-14">
            <span className="text-xs font-mono text-white/60 tracking-widest uppercase block mb-2">
              આર્કિટેક્ચર પ્રક્રિયા (AI Pipeline)
            </span>
            <h2 className="text-xl sm:text-2xl font-rasa text-white/80 mb-2">
              તમને જાણવાની ઉત્સુકતા છે કે આ બધું કામ કેવી રીતે કરે છે?
            </h2>
            <p className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white text-glow-white">
              ચાલો, અંદર નજર કરીએ.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative pl-6 sm:pl-10">
          <div className="absolute left-[15px] sm:left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
          
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 80} className="relative">
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Node Dot */}
                    <div className="w-8 h-8 rounded-xl bg-black border border-white/40 flex items-center justify-center shrink-0 z-10 shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                      <IconComp className="w-4 h-4 text-white" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 p-5 rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/[0.08] hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] group">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-white/50 uppercase">સ્ટેપ {idx + 1}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-googlesans text-white group-hover:text-glow-white transition-all">
                        {step.label}
                      </h3>
                      <p className="text-sm font-rasa text-white/80 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
