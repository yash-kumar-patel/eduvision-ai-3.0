"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Cpu, Target, Award, Users } from "lucide-react";

export default function ModelSection() {
  const metrics = [
    { label: "ચોકસાઈ (Accuracy)", code: "R² SCORE", value: "૮૧.૩૮%", detail: "અત્યંત વિશ્વસનીય પરિણામ", icon: Target },
    { label: "ભૂલની સંભાવના", code: "MAE", value: "±૧.૧૮", detail: "ન્યૂનતમ સરેરાશ તફાવત", icon: Award },
    { label: "વિદ્યાર્થીઓનો ડેટા", code: "DATASET", value: "૩૯૫", detail: "વાસ્તવિક વિદ્યાર્થી સર્વેક્ષણ", icon: Users },
  ];

  const features = [
    { name: "G2 (દ્વિતીય સત્ર ગુણ)", pct: "80.53%", width: "80.53%", desc: "સૌથી નિર્ણાયક પરિબળ" },
    { name: "Absences (ગેરહાજરી દિવસો)", pct: "14.17%", width: "14.17%", desc: "નિયમિતતાનો સીધો પ્રભાવ" },
    { name: "G1 (પ્રથમ સત્ર ગુણ)", pct: "1.64%", width: "12%", desc: "શરૂઆતનો પાયો" },
    { name: "અન્ય પરિબળો (Studytime, Health, etc.)", pct: "3.66%", width: "15%", desc: "દૈનિક ટેવો અને જીવનશૈલી" },
  ];

  return (
    <section className="py-24 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center sm:text-left mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-white/70 uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5 text-white" />
              <span>મશીન લર્નિંગ એલ્ગોરિધમ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white tracking-wide text-glow-white mb-3">
              અમારા AI મોડેલ વિશે
            </h2>
            <p className="font-mono text-white/80 uppercase tracking-widest text-sm sm:text-base font-bold mb-4">
              GRADIENT BOOSTING REGRESSOR
            </p>
            <p className="font-rasa text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl">
              આ અલ્ગોરિધમ ૧૦૦ થી વધુ Decision Trees (નિર્ણય વૃક્ષો) નું સંયોજન બનાવે છે. દરેક નવું વૃક્ષ અગાઉના વૃક્ષની ભૂલોમાંથી શીખીને વધુ સચોટ અનુમાન લગાવે છે.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/[0.08] hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)] group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">{m.code}</span>
                    <IconComp className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-googlesans font-black text-white mb-1 group-hover:text-glow-white transition-all">
                    {m.value}
                  </div>
                  <div className="text-sm font-googlesans font-bold text-white/90">{m.label}</div>
                  <div className="text-xs font-rasa text-white/60 mt-1">{m.detail}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Feature Importance Card */}
        <ScrollReveal delay={300}>
          <div className="p-6 sm:p-8 rounded-3xl border border-white/20 bg-white/[0.04] backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-googlesans text-lg sm:text-xl font-bold text-white">
                પરિબળોનું મહત્વ (Feature Importance)
              </h3>
              <span className="text-xs font-mono text-white/50">૧૦૦% વજન વિતરણ</span>
            </div>
            
            <div className="space-y-5">
              {features.map((feat, idx) => (
                <div key={idx} className="space-y-1.5 group">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-googlesans font-bold text-white group-hover:text-glow-white transition-all">
                      {feat.name}
                    </span>
                    <span className="font-mono font-black text-white">{feat.pct}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div 
                      className="h-full bg-gradient-to-r from-white/70 via-white to-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_#fff]"
                      style={{ width: feat.width }}
                    />
                  </div>
                  <span className="text-[11px] font-rasa text-white/60 block">{feat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
