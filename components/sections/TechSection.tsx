"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Terminal, Code2, Cpu, Globe, Palette, Cloud, Layers, Sparkles } from "lucide-react";

export default function TechSection() {
  const techs = [
    { name: "Python", desc: "મુખ્ય પ્રોગ્રામિંગ ભાષા અને ML મોડેલિંગ", category: "Core Language", icon: Terminal },
    { name: "Pandas", desc: "ડેટા વિશ્લેષણ, ક્લિનિંગ અને ફિલ્ટરિંગ", category: "Data Analysis", icon: Layers },
    { name: "NumPy", desc: "ગાણિતિક ગણતરીઓ અને મેટ્રિક્સ ઓપરેશન્સ", category: "Math & Numerical", icon: Cpu },
    { name: "Scikit-learn", desc: "Gradient Boosting ML અલ્ગોરિધમ લાઇબ્રેરી", category: "Machine Learning", icon: Sparkles },
    { name: "Next.js 14", desc: "હાઇ-પર્ફોર્મન્સ વેબ એપ્લિકેશન ફ્રેમવર્ક", category: "Full-Stack Web", icon: Globe },
    { name: "Tailwind CSS", desc: "મોડર્ન મોનોક્રોમ સ્પેસ UI ડિઝાઇન સિસ્ટમ", category: "UI Architecture", icon: Palette },
    { name: "Vercel", desc: "ગ્લોબલ એજ ક્લાઉડ ડિપ્લોયમેન્ટ પ્લેટફોર્મ", category: "Cloud Hosting", icon: Cloud },
  ];

  return (
    <section className="py-24 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header with Google Sans */}
        <ScrollReveal>
          <div className="text-center sm:text-left mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-white/70 uppercase tracking-widest mb-3">
              <Code2 className="w-3.5 h-3.5 text-white" />
              <span>ટેકનોલોજી આર્કિટેક્ચર (Tech Stack)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white tracking-wide text-glow-white mb-3">
              આ પ્રોજેક્ટની પાછળની ટેકનોલોજી
            </h2>
            <p className="text-base sm:text-lg font-rasa text-white/80">
              અદ્યતન આર્ટિફિશિયલ ઇન્ટેલિજન્સ અને મોડર્ન વેબ સ્ટેકનું સંયોજન:
            </p>
          </div>
        </ScrollReveal>

        {/* Tech Cards List */}
        <div className="space-y-4">
          {techs.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 70}>
                <div className="p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-2xl transition-all duration-300 hover:border-white/60 hover:bg-white/[0.08] hover:scale-[1.015] hover:shadow-[0_12px_35px_rgba(255,255,255,0.12)] group flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-default">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-googlesans font-extrabold text-white group-hover:text-glow-white transition-all">
                          {tech.name}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-white/60">
                          {tech.category}
                        </span>
                      </div>
                      <p className="font-rasa text-sm sm:text-base text-white/80 mt-0.5 group-hover:text-white transition-colors">
                        {tech.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center text-white/40 group-hover:text-white transition-colors text-xs font-mono">
                    <span>વિગત →</span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
