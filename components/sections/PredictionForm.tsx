"use client";

import React, { useState, useEffect } from 'react';
import { PredictionInput } from '@/types';
import { 
  User, 
  GraduationCap, 
  Target, 
  Award, 
  Clock, 
  AlertTriangle, 
  Calendar, 
  School, 
  Heart, 
  Wifi, 
  Sparkles, 
  Activity, 
  Users, 
  Mail, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface PredictionFormProps {
  onSubmit: (data: PredictionInput) => void;
}

const gujaratiNumerals = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯', '૧૦', '૧૧', '૧૨', '૧૩', '૧૪'];
const toGu = (num: number) => num.toString().split('').map(d => gujaratiNumerals[parseInt(d)] || d).join('');

export function PredictionForm({ onSubmit }: PredictionFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [formData, setFormData] = useState<Partial<PredictionInput>>({
    G1: 12,
    G2: 13,
    studytime: 2,
    failures: 0,
    absences: 4,
    schoolsup: 'yes',
    famsup: 'yes',
    internet: 'yes',
    higher: 'yes',
    health: 4,
    goout: 3,
    freetime: 3,
    standard: '8',
    student_name: '',
  });
  const totalSteps = 13; // 0 to 12 (13 questions)
  const isConfirmStep = currentStep === totalSteps;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setDirection('next');
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setDirection('prev');
      setCurrentStep(prev => prev - 1);
    }
  };

  // Keyboard navigation support (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isConfirmStep) return;
      if (e.key === 'ArrowRight' && currentStep < totalSteps) {
        // Only if current question requirement is satisfied
        if (canProceed()) handleNext();
      } else if (e.key === 'ArrowLeft' && currentStep > 0) {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, formData, isConfirmStep]);

  const handleUpdate = (field: keyof PredictionInput, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData as PredictionInput);
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 0:
        return !!formData.student_name && formData.student_name.trim().length > 0;
      case 1:
        return !!formData.standard;
      case 4:
        return formData.studytime !== undefined;
      case 5:
        return formData.failures !== undefined;
      case 7:
        return !!formData.schoolsup;
      case 8:
        return !!formData.famsup;
      case 9:
        return !!formData.internet;
      case 10:
        return !!formData.higher;
      case 11:
        return !!formData.health;
      case 12:
        return !!formData.goout && !!formData.freetime;
      default:
        return true;
    }
  };

  const renderStepCardContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white shadow-inner">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૧ • પ્રોફાઇલ</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">વિદ્યાર્થી ઓળખ</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૧. સૌ પ્રથમ, તમારું નામ શું છે?
            </h3>

            <div className="relative">
              <input 
                type="text" 
                className="w-full bg-white/[0.06] border border-white/20 focus:border-white text-white text-xl py-4 px-5 rounded-2xl outline-none font-gujarati backdrop-blur-md shadow-inner transition-all placeholder:text-white/30"
                value={formData.student_name || ''}
                onChange={(e) => handleUpdate('student_name', e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && canProceed()) handleNext(); }}
                placeholder="દા.ત. કૃતાર્થ પટેલ"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૨ • શૈક્ષણિક સ્તર</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">ધોરણ / વર્ગ પસંદગી</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૨. તમે કયા ધોરણમાં અભ્યાસ કરો છો?
            </h3>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 font-gujarati">
              {[5, 6, 7, 8, 9, 10].map(std => (
                <button
                  key={std}
                  type="button"
                  onClick={() => {
                    handleUpdate('standard', std.toString());
                  }}
                  className={`p-3 sm:p-5 rounded-2xl border text-center font-bold text-sm sm:text-lg transition-all ${
                    formData.standard === std.toString()
                      ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-105'
                      : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                  }`}
                >
                  ધોરણ {toGu(std)}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૩ • પ્રારંભિક મૂલ્યાંકન</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">પ્રથમ સત્ર પરીક્ષા (G1)</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૩. પ્રથમ પરીક્ષાના ગુણ (G1)? (૦ થી ૨૦)
            </h3>

            <div className="p-5 sm:p-6 rounded-2xl border border-white/15 bg-white/5 space-y-4">
              <div className="flex justify-between items-center font-bold text-lg">
                <span className="text-white/70">પ્રથમ પરીક્ષા સ્કોર:</span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-white">{toGu(formData.G1 ?? 12)} / ૨૦</span>
              </div>
              <input 
                type="range" min="0" max="20"
                className="w-full cursor-pointer accent-white"
                value={formData.G1 ?? 12}
                onChange={(e) => handleUpdate('G1', parseInt(e.target.value))}
              />
              <div className="flex justify-between text-[11px] font-mono text-white/40">
                <span>૦ ગુણ</span>
                <span>૧૦ ગુણ</span>
                <span>૨૦ ગુણ</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૪ • મુખ્ય પરિબળ (૮૦.૫%)</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">દ્વિતીય સત્ર પરીક્ષા (G2)</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૪. દ્વિતીય પરીક્ષાના ગુણ (G2)? (૦ થી ૨૦)
            </h3>
            <p className="text-xs text-white/60 font-mono">💡 મોડેલ અનુસાર આ ૮૦.૫% સૌથી મહત્વપૂર્ણ પરિબળ છે.</p>

            <div className="p-5 sm:p-6 rounded-2xl border border-white/15 bg-white/5 space-y-4">
              <div className="flex justify-between items-center font-bold text-lg">
                <span className="text-white/70">દ્વિતીય પરીક્ષા સ્કોર:</span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-white">{toGu(formData.G2 ?? 13)} / ૨૦</span>
              </div>
              <input 
                type="range" min="0" max="20"
                className="w-full cursor-pointer accent-white"
                value={formData.G2 ?? 13}
                onChange={(e) => handleUpdate('G2', parseInt(e.target.value))}
              />
              <div className="flex justify-between text-[11px] font-mono text-white/40">
                <span>૦ ગુણ</span>
                <span>૧૦ ગુણ</span>
                <span>૨૦ ગુણ</span>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૫ • મહેનતનું મૂલ્યાંકન</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">દૈનિક અભ્યાસ સમય</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૫. શાળા બાદ દૈનિક અભ્યાસનો સમય?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-gujarati">
              {[
                { label: '૨ કલાકથી ઓછો (< 2h)', val: 1 },
                { label: '૨ થી ૫ કલાક (2-5h)', val: 2 },
                { label: '૫ થી ૧૦ કલાક (5-10h)', val: 3 },
                { label: '૧૦ કલાકથી વધુ (> 10h)', val: 4 }
              ].map(opt => (
                <button 
                  key={opt.val}
                  type="button"
                  onClick={() => handleUpdate('studytime', opt.val)}
                  className={`p-4 rounded-2xl border text-left font-bold transition-all ${
                    formData.studytime === opt.val
                      ? 'border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-102'
                      : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                  }`}
                >
                  ⏱️ {opt.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૬ • શૈક્ષણિક પડકારો</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">નાપાસ થયેલા વિષયો</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૬. અગાઉ નાપાસ થયેલા વિષયોની સંખ્યા?
            </h3>

            <div className="grid grid-cols-5 gap-1.5 sm:gap-2 font-gujarati">
              {[0, 1, 2, 3, 4].map(val => (
                <button 
                  key={val}
                  type="button"
                  onClick={() => handleUpdate('failures', val)}
                  className={`p-3 sm:p-4 rounded-2xl border font-mono font-extrabold text-base sm:text-xl text-center transition-all ${
                    formData.failures === val
                      ? 'border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105'
                      : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                  }`}
                >
                  {toGu(val)}
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૭ • હાજરી વિશ્લેષણ (૧૪.૨%)</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">ગેરહાજરી પત્રક</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૭. સત્રમાં ગેરહાજરીના દિવસો?
            </h3>
            <p className="text-xs text-white/60 font-mono">📅 ગેરહાજરી મોડેલમાં ૧૪.૨% શૈક્ષણિક પ્રભાવ ધરાવે છે.</p>

            <div className="p-5 sm:p-6 rounded-2xl border border-white/15 bg-white/5 space-y-4">
              <div className="flex justify-between items-center font-bold text-lg">
                <span className="text-white/70">ગેરહાજરી દિવસો:</span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-white">{toGu(formData.absences ?? 4)} દિવસ</span>
              </div>
              <input 
                type="range" min="0" max="75"
                className="w-full cursor-pointer accent-white"
                value={formData.absences ?? 4}
                onChange={(e) => handleUpdate('absences', parseInt(e.target.value))}
              />
              <div className="flex justify-between text-[11px] font-mono text-white/40">
                <span>૦ દિવસ</span>
                <span>૩૫ દિવસ</span>
                <span>૭૫ દિવસ</span>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૮ • શાળાકીય સહાય</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">શાળા શૈક્ષણિક સહાય</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૮. શાળામાંથી વિશેષ શૈક્ષણિક મદદ મળે છે?
            </h3>

            <div className="grid grid-cols-2 gap-4 font-gujarati">
              <button 
                type="button"
                onClick={() => handleUpdate('schoolsup', 'yes')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.schoolsup === 'yes' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                🏫 હા
              </button>
              <button 
                type="button"
                onClick={() => handleUpdate('schoolsup', 'no')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.schoolsup === 'no' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                ❌ ના
              </button>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૯ • પારિવારિક સહકાર</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">પરિવાર પ્રોત્સાહન</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૯. પરિવાર તરફથી અભ્યાસમાં સહાય મળે છે?
            </h3>

            <div className="grid grid-cols-2 gap-4 font-gujarati">
              <button 
                type="button"
                onClick={() => handleUpdate('famsup', 'yes')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.famsup === 'yes' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                ❤️ હા
              </button>
              <button 
                type="button"
                onClick={() => handleUpdate('famsup', 'no')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.famsup === 'no' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                ❌ ના
              </button>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૧૦ • ડિજિટલ સાધન</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">ઇન્ટરનેટ કનેક્ટિવિટી</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૧૦. ઘરે ઇન્ટરનેટ સુવિધા ઉપલબ્ધ છે?
            </h3>

            <div className="grid grid-cols-2 gap-4 font-gujarati">
              <button 
                type="button"
                onClick={() => handleUpdate('internet', 'yes')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.internet === 'yes' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                🌐 હા
              </button>
              <button 
                type="button"
                onClick={() => handleUpdate('internet', 'no')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.internet === 'no' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                ❌ ના
              </button>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૧૧ • ભવિષ્ય લક્ષ્ય</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">ઉચ્ચ શિક્ષણ સંકલ્પ</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૧૧. તમે ઉચ્ચ અભ્યાસ (કોલેજ/ડિગ્રી) કરવા ઇચ્છો છો?
            </h3>

            <div className="grid grid-cols-2 gap-4 font-gujarati">
              <button 
                type="button"
                onClick={() => handleUpdate('higher', 'yes')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.higher === 'yes' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                🎓 હા
              </button>
              <button 
                type="button"
                onClick={() => handleUpdate('higher', 'no')} 
                className={`p-5 rounded-2xl border font-extrabold text-xl text-center transition-all ${
                  formData.higher === 'no' 
                    ? 'border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-102' 
                    : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                ❌ ના
              </button>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૧૨ • આરોગ્ય સ્થિતિ</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">શારીરિક સ્વાસ્થ્ય સ્તર</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-baloo text-white leading-snug">
              ૧૨. તમારું શારીરિક સ્વાસ્થ્ય કેવું છે? (૧ થી ૫)
            </h3>
            <p className="text-xs text-white/60 font-mono">🩺 ૧ = નબળું / બીમાર, ૫ = ઉત્તમ સ્વાસ્થ્ય</p>

            <div className="grid grid-cols-5 gap-1.5 sm:gap-2 font-gujarati">
              {[1, 2, 3, 4, 5].map(val => (
                <button 
                  key={val}
                  type="button"
                  onClick={() => handleUpdate('health', val)} 
                  className={`p-3 sm:p-4 rounded-2xl border font-mono font-extrabold text-base sm:text-xl text-center transition-all ${
                    formData.health === val
                      ? 'border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105'
                      : 'border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10'
                  }`}
                >
                  {toGu(val)}
                </button>
              ))}
            </div>
          </div>
        );

      case 12:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl border border-white/20 bg-white/10 text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase block">પગલું ૧૩ • અંતિમ પ્રશ્ન</span>
                  <h4 className="text-xs font-baloo font-bold text-white/90">મનોરંજન & નવરાશ સમય</h4>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
                {toGu(currentStep + 1)} / {toGu(totalSteps)}
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-extrabold font-baloo text-white">
                👥 ૧૩. મિત્રો સાથે બહાર જવાનો સમય? (૧-૫)
              </h3>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 font-gujarati">
                {[1, 2, 3, 4, 5].map(val => (
                  <button 
                    key={val}
                    type="button"
                    onClick={() => handleUpdate('goout', val)} 
                    className={`p-2.5 sm:p-3 rounded-xl border text-center font-extrabold text-sm sm:text-base transition-all ${
                      formData.goout === val ? 'border-white bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border-white/20 bg-white/5 text-white hover:border-white/50'
                    }`}
                  >
                    {toGu(val)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-3 border-t border-white/10">
              <h3 className="text-lg sm:text-xl font-extrabold font-baloo text-white">
                ✨ શાળા બાદ ફ્રી નવરાશનો સમય? (૧-૫)
              </h3>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 font-gujarati">
                {[1, 2, 3, 4, 5].map(val => (
                  <button 
                    key={val}
                    type="button"
                    onClick={() => handleUpdate('freetime', val)} 
                    className={`p-2.5 sm:p-3 rounded-xl border text-center font-extrabold text-sm sm:text-base transition-all ${
                      formData.freetime === val ? 'border-white bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border-white/20 bg-white/5 text-white hover:border-white/50'
                    }`}
                  >
                    {toGu(val)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isConfirmStep) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6 text-center animate-fade-in relative z-10 select-none">
        <div className="w-full max-w-xl p-8 sm:p-10 rounded-3xl border border-white/25 bg-white/[0.05] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,255,255,0.08)] flex flex-col items-center">
          <div className="p-4 sm:p-5 rounded-3xl border border-white/20 bg-white/10 text-white mb-6 animate-pulse">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-baloo text-white mb-3">
            તમારી માહિતી તૈયાર છે!
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 font-gujarati max-w-md mb-8 leading-relaxed">
            વિદ્યાર્થી: <strong className="text-white font-bold">{formData.student_name || 'વિદ્યાર્થી'}</strong> (ધોરણ {toGu(parseInt(formData.standard || '8'))})<br />
            શું તમે તમારી AI Performance Prediction જોવા માટે તૈયાર છો?
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <button 
              onClick={handlePrev}
              type="button"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-white/20 bg-white/5 text-white/80 hover:text-white hover:border-white/50 font-baloo font-bold transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> પાછળ જઈ સુધારો
            </button>
            <button 
              onClick={handleSubmit}
              type="button"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-baloo font-extrabold text-lg shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-white/90 hover:scale-105 transition-all"
            >
              🔮 મારું AI પરિણામ જુઓ
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center relative overflow-hidden px-4 py-12 select-none">
      
      {/* Dynamic Flashcard Container */}
      <div className="w-full max-w-xl relative z-10">
        
        {/* Outer Flashcard Glow Sheen */}
        <div className="relative rounded-3xl border border-white/20 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(255,255,255,0.06)] transition-all duration-300">
          
          {/* Card Integrated Progress Bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 shadow-[0_0_10px_#fff]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Flashcard Body Content */}
          <div key={currentStep} className="animate-fade-up">
            {renderStepCardContent()}
          </div>

          {/* Flashcard Action Footer Navigation (Previous & Next) */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/10 gap-3">
            
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-4 sm:px-5 py-3 rounded-2xl border text-sm font-baloo font-bold flex items-center gap-1.5 transition-all ${
                currentStep === 0 
                  ? 'opacity-0 pointer-events-none' 
                  : 'border-white/20 bg-white/5 text-white/80 hover:text-white hover:border-white/60 hover:bg-white/10 active:scale-95'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>પાછળ (Prev)</span>
            </button>

            {/* Quick Step Indicators */}
            <div className="hidden sm:flex items-center gap-1.5">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentStep 
                      ? 'w-6 bg-white shadow-[0_0_8px_#fff]' 
                      : idx < currentStep 
                        ? 'w-1.5 bg-white/50' 
                        : 'w-1.5 bg-white/15'
                  }`}
                />
              ))}
            </div>

            {/* Next / Continue Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-5 sm:px-7 py-3 rounded-2xl bg-white text-black font-baloo font-extrabold text-sm sm:text-base flex items-center gap-2 transition-all hover:bg-white/90 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.4)] disabled:opacity-40 disabled:hover:scale-100 disabled:shadow-none"
            >
              <span>{currentStep === totalSteps - 1 ? 'પરિણામ જુઓ' : 'આગળ વધીએ'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

        {/* Keyboard Navigation Tip */}
        <div className="flex items-center justify-center gap-4 mt-4 text-[11px] font-mono text-white/40 text-center">
          <span>← / → કીબોર્ડ એરો વડે પણ બદલી શકો છો</span>
        </div>

      </div>

    </div>
  );
}
