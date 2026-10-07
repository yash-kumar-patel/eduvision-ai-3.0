"use client";

import React, { useState } from "react";
import { PredictionResponse } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CertificateModal } from "@/components/ui/CertificateModal";
import { FileText, Award, Printer, Sparkles } from "lucide-react";

export default function ReportSection({ prediction }: { prediction: PredictionResponse }) {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section className="py-24 px-4 bg-transparent text-white relative z-10 select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-white/[0.04] rounded-full blur-[130px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        
        <ScrollReveal variant="fadeUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-mono text-white/80 mb-3 shadow-lg">
            <Award className="w-4 h-4 text-white" />
            <span>સત્તાવાર વિજ્ઞાન મેળો પ્રમાણપત્ર (Official AI Report)</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-googlesans text-white text-glow-white tracking-wide leading-tight">
            તમારી સંપૂર્ણ EduVision AI Report તૈયાર છે.
          </h2>
          
          <p className="text-base sm:text-lg font-rasa text-white/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            વિદ્યાર્થીના તમામ શૈક્ષણિક પરિબળો અને AI આગાહી સાથેનું સત્તાવાર ૧-પેજ A4 પ્રમાણપત્ર મેળવો.
          </p>
        </ScrollReveal>

        {/* Certificate Card Preview */}
        <ScrollReveal variant="scaleIn" delay={200}>
          <div className="p-6 sm:p-8 max-w-xl mx-auto text-left relative group border border-white/20 bg-white/[0.04] backdrop-blur-2xl rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(255,255,255,0.08)] hover:border-white/50 hover:bg-white/[0.07] hover:scale-[1.015] transition-all duration-300">
            
            <div className="flex items-center justify-between text-xs text-white/60 mb-6 font-mono border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-white" />
                <span className="font-googlesans font-bold text-white/90">EduVision AI • સત્તાવાર પ્રમાણપત્ર</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-[11px]">{prediction.id || "EV-2026-AI"}</span>
            </div>
            
            <div className="space-y-1 mb-6">
              <span className="text-[11px] uppercase font-mono text-white/50 block">વિદ્યાર્થી:</span>
              <div className="font-googlesans text-2xl sm:text-3xl font-extrabold text-white">
                {prediction.student_name || "નિયમિત વિદ્યાર્થી"} <span className="text-white/70 font-normal text-xl">(ધોરણ {prediction.standard || "8"})</span>
              </div>
            </div>

            <div className="flex justify-between items-end p-5 rounded-2xl border border-white/20 bg-white/[0.06] backdrop-blur-md mb-6">
              <div>
                <span className="text-[10px] uppercase font-mono text-white/60 block mb-0.5">અનુમાનિત ટકાવારી:</span>
                <div className="text-4xl sm:text-5xl font-black font-googlesans text-white text-glow-white">
                  {prediction.percentage.toFixed(1)}%
                </div>
                <div className="text-white/70 text-xs font-mono mt-1">સ્કોર: {prediction.predicted_score.toFixed(1)} / ૨૦ ગુણ</div>
              </div>
              
              <div className="border border-white/50 bg-white/10 px-4 py-1.5 rounded-full text-xs font-googlesans font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {prediction.risk_label_gu}
              </div>
            </div>

            <button 
              onClick={() => setShowCertificateModal(true)}
              className="w-full py-4 rounded-2xl bg-white text-black font-googlesans font-extrabold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-white/90 hover:scale-[1.02] active:scale-98 transition-all"
            >
              <Printer className="w-5 h-5" />
              <span>📄 PDF રિપોર્ટ ડાઉનલોડ / પ્રિન્ટ કરો</span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Official Certificate Print Modal */}
      {showCertificateModal && (
        <CertificateModal
          prediction={prediction}
          onClose={() => setShowCertificateModal(false)}
        />
      )}
    </section>
  );
}
