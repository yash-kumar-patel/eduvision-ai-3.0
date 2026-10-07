"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { User, School, Compass, Sparkles } from "lucide-react";

export function TeamSection() {
  const students = [
    { name: "કૃતાર્થ રોનક બારોટ", role: "બાળવૈજ્ઞાનિક (Student Innovator)", grade: "ધોરણ ૮", contribution: "ML ડેટા સાયન્સ & અલ્ગોરિધમ ડેવલપમેન્ટ" },
    { name: "અંશ કિરણભાઈ પ્રજાપતિ", role: "બાળવૈજ્ઞાનિક (Student Innovator)", grade: "ધોરણ ૮", contribution: "સિસ્ટમ આર્કિટેક્ચર & પ્રિડિક્શન મોડેલિંગ" },
  ];

  return (
    <section className="py-24 px-4 bg-transparent text-white relative z-10 select-none">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center sm:text-left mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono text-white/70 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>વિદ્યાર્થી સંશોધકો (Student Creators)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-googlesans text-white tracking-wide text-glow-white mb-3">
              આ વિચાર પાછળના બાળવૈજ્ઞાનિકો
            </h2>
            <p className="text-base sm:text-lg font-rasa text-white/80">
              શાળા કક્ષાએ આર્ટિફિશિયલ ઇન્ટેલિજન્સ સંશોધનને સાકાર કરનાર વિદ્યાર્થીઓ:
            </p>
          </div>
        </ScrollReveal>

        {/* Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {students.map((st, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="p-6 sm:p-7 rounded-3xl border border-white/20 bg-white/[0.04] backdrop-blur-2xl transition-all duration-300 hover:border-white/60 hover:bg-white/[0.08] hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(255,255,255,0.12)] group">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl border border-white/30 bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-googlesans font-extrabold text-white group-hover:text-glow-white transition-all">
                      {st.name}
                    </h3>
                    <span className="text-xs font-mono text-white/60">{st.role}</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs font-rasa text-white/75 leading-relaxed">
                  💡 {st.contribution}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* School & Mentor Frosted Cards */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
            <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-xl space-y-2 hover:border-white/40 transition-colors">
              <div className="flex items-center gap-2 text-white/60">
                <School className="w-4 h-4 text-white" />
                <span className="text-xs font-mono uppercase tracking-widest">શાળા પરિચય</span>
              </div>
              <p className="text-base font-googlesans font-bold text-white leading-relaxed">
                એમ. એમ. કરોડિયા પ્રાથમિક શાળા, તરસાડી કોસંબા (R.S)
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-xl space-y-2 hover:border-white/40 transition-colors">
              <div className="flex items-center gap-2 text-white/60">
                <Compass className="w-4 h-4 text-white" />
                <span className="text-xs font-mono uppercase tracking-widest">પ્રેરણાદાયી માર્ગદર્શક</span>
              </div>
              <p className="text-base font-googlesans font-bold text-white">
                શ્રી મનોજભાઈ પરમાર
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
