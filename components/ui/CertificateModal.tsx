"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PredictionResponse } from "@/types";
import { School, Printer, X, Award, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

interface CertificateModalProps {
  prediction: PredictionResponse;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  prediction,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  if (!mounted) return null;

  const modalContent = (
    <div
      id="official-certificate-modal-root"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div className="certificate-print-sheet w-full max-w-3xl rounded-3xl border border-white/20 p-4 sm:p-6 space-y-3 shadow-2xl relative my-auto bg-black text-white">
        
        {/* Modal Controls (Strictly Hidden in Print) */}
        <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white font-mono">
            <Award className="w-4 h-4 text-white" />
            <span className="font-googlesans">વિજ્ઞાન મેળો ૨૦૨૬ • સત્તાવાર AI પ્રમાણપત્ર</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/60 hidden sm:inline-block font-googlesans">
              💡 પ્રિન્ટ વિન્ડોમાં &apos;Save as PDF&apos; પસંદ કરો (1 Page A4).
            </span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs font-googlesans shadow-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
              title="પ્રિન્ટ અથવા PDF તરીકે સાચવો"
            >
              <Printer className="w-4 h-4 text-black" />
              <span>🖨️ PDF ડાઉનલોડ / પ્રિન્ટ કરો</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Area (Strictly Fits Single A4 Portrait Page) */}
        <div className="space-y-3 print-container bg-white text-black p-5 sm:p-6 rounded-2xl border-2 border-slate-900 font-googlesans">
          
          {/* Certificate Header */}
          <div className="text-center space-y-1 border-b-2 border-slate-900 pb-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-slate-900 bg-slate-100 text-slate-900 shadow-sm mx-auto mb-1">
              <School className="w-6 h-6 text-slate-900" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black font-googlesans tracking-tight text-slate-950">
              એમ. એમ. કરોડિયા પ્રાથમિક શાળા, તરસાડી કોસંબા (R.S)
            </h1>
            <p className="text-xs sm:text-sm font-bold font-googlesans text-slate-800">
              વિજ્ઞાન મેળો ૨૦૨૬ • EduVision AI શૈક્ષણિક સંશોધન પ્રોજેક્ટ
            </p>
            <div className="inline-block mt-1 px-4 py-1 rounded-full border-2 border-slate-900 bg-slate-100 text-slate-950 text-xs font-black uppercase tracking-wider font-googlesans">
              શૈક્ષણિક પ્રદર્શન આકલન પ્રમાણપત્ર (OFFICIAL AI REPORT)
            </div>
          </div>

          {/* Student Info Matrix Bar (4 columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl border border-slate-900 bg-slate-50 text-xs font-googlesans">
            <div className="space-y-0.5">
              <span className="text-slate-600 block text-[10px] font-bold uppercase tracking-wider">વિદ્યાર્થીનું નામ:</span>
              <strong className="text-sm font-black text-slate-950 block">{prediction.student_name || "નિયમિત વિદ્યાર્થી"}</strong>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-600 block text-[10px] font-bold uppercase tracking-wider">ધોરણ / વર્ગ:</span>
              <strong className="text-sm font-black text-slate-950 block">ધોરણ {prediction.standard || "8"}</strong>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-600 block text-[10px] font-bold uppercase tracking-wider">પ્રમાણપત્ર ક્રમાંક:</span>
              <strong className="text-xs font-mono font-bold text-slate-950 block">{prediction.id || "EV-999060"}</strong>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-600 block text-[10px] font-bold uppercase tracking-wider">મૂલ્યાંકન તારીખ:</span>
              <strong className="text-xs font-mono font-bold text-slate-950 block">{new Date().toLocaleDateString("gu-IN")}</strong>
            </div>
          </div>

          {/* Scores & Evaluation Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
            
            {/* Big Score Card */}
            <div className="p-3.5 rounded-xl border-2 border-slate-900 bg-slate-50 text-center flex flex-col justify-between space-y-1.5 font-googlesans">
              <span className="text-[10px] font-black font-mono text-slate-700 uppercase tracking-wider">
                અનુમાનિત અંતિમ ગુણ (PREDICTED G3 SCORE)
              </span>
              <div className="text-3xl sm:text-4xl font-black font-googlesans text-slate-950 leading-none">
                {prediction.predicted_score.toFixed(1)} <span className="text-lg font-bold text-slate-700">/ ૨૦</span>
              </div>
              <div className="text-xs font-black font-googlesans text-slate-900">
                શૈક્ષણિક ટકાવારી: <span className="text-sm font-black text-slate-950">{prediction.percentage.toFixed(1)}%</span>
              </div>
              <div className="inline-block mx-auto px-4 py-1 rounded-full text-xs font-black border border-slate-900 bg-slate-200 text-slate-950 font-googlesans">
                {prediction.risk_label_gu} • {prediction.risk_status_gu}
              </div>
            </div>

            {/* Concise Evaluation Statement */}
            <div className="p-3.5 rounded-xl border border-slate-900 bg-slate-50 text-xs font-googlesans flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <span className="text-[10px] font-bold font-mono uppercase text-slate-700 block">AI મોડેલ આકલન નોંધ:</span>
                <p className="font-bold text-slate-900 leading-relaxed text-xs">
                  {prediction.risk_tone_gu}
                </p>
              </div>
              <div className="text-[10px] text-slate-800 font-mono pt-1.5 border-t border-slate-300">
                Machine Learning Algorithm: Gradient Boosting Regressor (R²: 0.8138)
              </div>
            </div>
          </div>

          {/* Input Factors Breakdown Matrix (6 Cards) */}
          <div className="space-y-1.5 font-googlesans">
            <span className="text-[10px] font-black font-mono text-slate-800 uppercase tracking-wider block">
              પરીક્ષા અને વર્તણૂક પરિબળો સારાંશ (INPUT FEATURES):
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg border border-slate-900 bg-slate-50">
                <span className="text-[9px] text-slate-600 block font-bold">G1 ગુણ</span>
                <strong className="text-slate-950 font-googlesans font-black text-xs">{prediction.inputs.G1 ?? 12}/૨૦</strong>
              </div>
              <div className="p-2 rounded-lg border border-slate-900 bg-slate-50">
                <span className="text-[9px] text-slate-600 block font-bold">G2 ગુણ</span>
                <strong className="text-slate-950 font-googlesans font-black text-xs">{prediction.inputs.G2 ?? 13}/૨૦</strong>
              </div>
              <div className="p-2 rounded-lg border border-slate-900 bg-slate-50">
                <span className="text-[9px] text-slate-600 block font-bold">ગેરહાજરી</span>
                <strong className="text-slate-950 font-googlesans font-black text-xs">{prediction.inputs.absences ?? 4} દિવસ</strong>
              </div>
              <div className="p-2 rounded-lg border border-slate-900 bg-slate-50">
                <span className="text-[9px] text-slate-600 block font-bold">અભ્યાસ સમય</span>
                <strong className="text-slate-950 font-googlesans font-black text-xs">
                  {prediction.inputs.studytime === 1 ? "< ૨ કલાક" : prediction.inputs.studytime === 2 ? "૨-૫ કલાક" : "૫+ કલાક"}
                </strong>
              </div>
              <div className="p-2 rounded-lg border border-slate-900 bg-slate-50">
                <span className="text-[9px] text-slate-600 block font-bold">નાપાસ વિષય</span>
                <strong className="text-slate-950 font-googlesans font-black text-xs">{prediction.inputs.failures ?? 0}</strong>
              </div>
              <div className="p-2 rounded-lg border border-slate-900 bg-slate-50">
                <span className="text-[9px] text-slate-600 block font-bold">શાળા સહાય</span>
                <strong className="text-slate-950 font-googlesans font-black text-xs">{prediction.inputs.schoolsup === "yes" ? "હા" : "ના"}</strong>
              </div>
            </div>
          </div>

          {/* AI Personalized Recommendations */}
          <div className="space-y-1.5 font-googlesans">
            <span className="text-[10px] font-black font-mono text-slate-800 uppercase tracking-wider block">
              વ્યક્તિગત AI શૈક્ષણિક ભલામણો (PERSONALIZED GUIDANCE):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {prediction.recommendations.slice(0, 2).map((rec, i) => (
                <div key={i} className="p-2.5 rounded-lg border border-slate-900 bg-slate-50">
                  <div className="font-black font-googlesans text-slate-950 text-xs">
                    {i + 1}. {rec.title}
                  </div>
                  <div className="text-slate-800 font-googlesans text-[11px] mt-0.5 leading-snug">
                    {rec.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Credential Footer */}
          <div className="mt-3 pt-3 border-t-2 border-slate-900 flex flex-wrap items-center justify-between gap-2 text-[11px] font-googlesans">
            
            {/* Mentor Credit */}
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold text-slate-600 block">પ્રોજેક્ટ માર્ગદર્શક શિક્ષક:</span>
              <strong className="text-slate-950 font-googlesans font-black text-xs block">શ્રી મનોજભાઈ પરમાર</strong>
              <span className="text-[9px] text-slate-700 block">એમ. એમ. કરોડિયા પ્રાથમિક શાળા, તરસાડી કોસંબા</span>
            </div>

            {/* Student Scientists Credit */}
            <div className="space-y-0.5 text-right sm:text-right">
              <span className="text-[9px] uppercase font-mono font-bold text-slate-600 block">બાળવૈજ્ઞાનિક (STUDENT SCIENTISTS):</span>
              <strong className="text-slate-950 font-googlesans font-black text-xs block">કૃતાર્થ રોનક બારોટ • અંશ કિરણભાઈ પ્રજાપતિ</strong>
              <span className="text-[9px] text-slate-700 block">EduVision AI 3.0 • વિજ્ઞાન મેળો ૨૦૨૬</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
