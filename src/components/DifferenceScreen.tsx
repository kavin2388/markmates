import React, { useState } from 'react';
import { NavScreen } from '../types.ts';
import { STEP_FLOWS } from '../data/mockData.ts';
import { CheckCircle2, XCircle, ArrowRight, BookOpen, Clock, Users, HelpCircle, Target } from 'lucide-react';

interface DifferenceScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenEnrollment: () => void;
}

export const DifferenceScreen: React.FC<DifferenceScreenProps> = ({
  onNavigate,
  onOpenEnrollment,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const selectedStep = STEP_FLOWS.find((s) => s.step === activeStep) || STEP_FLOWS[0];

  const comparisonRows = [
    {
      feature: 'Core Philosophy',
      markmates: 'Concept-First Mastery: Focus on underlying logic and mental models that withstand tricky NTA / Board questions.',
      conventional: 'Formula Memorization: Rote drills of past questions without deep conceptual grounding.',
    },
    {
      feature: 'Doubt Resolution',
      markmates: 'Daily Dedicated Doubt Cell with senior educators directly clarifying logic and presentation.',
      conventional: 'Accumulated doubts left until end-of-year rush; limited to generic assistant teachers.',
    },
    {
      feature: 'Fee Structure & Access',
      markmates: 'Transparent, accessible community pricing designed to prevent financial strain on families.',
      conventional: 'High commercial tuition fees with extra hidden surcharges for mock tests or study materials.',
    },
    {
      feature: 'Batch Size & Mentorship',
      markmates: 'Monitored cohorts where every student’s test score trajectory and attendance is tracked individually.',
      conventional: 'Massive crowded lecture halls with over 150+ students where individual guidance is impossible.',
    },
    {
      feature: 'Mock Test Feedback',
      markmates: 'Line-by-line step error analysis (presentation marks, time spent per question, error taxonomy).',
      conventional: 'Only automated raw percentage scores without diagnostics on why errors occurred.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff]">
      {/* Screen Header */}
      <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde9ff] text-[#002046] text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">psychology</span>
            Pedagogical Philosophy
          </div>

          <h1 className="font-headline-xl text-[#0d1c2f] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Markmates Difference
          </h1>

          <p className="font-body-lg text-[#44474e] max-w-3xl text-base sm:text-lg leading-relaxed">
            Why do students achieve higher percentiles in UGC NET and Centum scores in 12th Board examinations with Markmates? Our systematic 5-step framework replaces stressful memorization with durable understanding.
          </p>
        </div>
      </section>

      {/* Interactive 5-Step Framework */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg shadow-[#002046]/5 border border-[#dde9ff]">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">THE LEARNING ENGINE</span>
            <h2 className="font-headline-lg text-[#0d1c2f] text-2xl font-bold mt-1">
              5-Step Systematic Learning Roadmap
            </h2>
            <p className="text-sm text-[#44474e] mt-1">
              Click through each stage to explore how we guide you from initial concept discovery to final exam readiness.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {STEP_FLOWS.map((flow) => {
              const isActive = flow.step === activeStep;
              return (
                <button
                  key={flow.step}
                  onClick={() => setActiveStep(flow.step)}
                  className={`flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all cursor-pointer border text-center ${
                    isActive
                      ? 'bg-[#002046] text-white border-[#002046] shadow-md scale-102'
                      : 'bg-[#eff4ff] text-[#0d1c2f] border-[#dde9ff] hover:bg-[#dde9ff]'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 ${
                      isActive ? 'bg-[#ffb871] text-[#002046]' : 'bg-[#1b365d] text-white'
                    }`}
                  >
                    {flow.step}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold truncate w-full">{flow.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-[#eff4ff] rounded-xl p-6 sm:p-8 border border-[#dde9ff] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8b5000] bg-white px-3 py-1 rounded-full border border-[#dde9ff]">
                  Stage {selectedStep.step} of 5
                </span>
                <span className="text-lg font-bold text-[#0d1c2f]">{selectedStep.title}</span>
              </div>
              <h3 className="font-headline-sm text-[#0d1c2f] text-xl font-semibold">
                {selectedStep.summary}
              </h3>
              <p className="text-sm text-[#44474e] leading-relaxed">
                {selectedStep.details}
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#dde9ff] min-w-[260px] shadow-xs">
              <span className="text-xs text-[#74777f] uppercase font-bold tracking-wider">Target Deliverable</span>
              <p className="text-sm font-semibold text-[#002046] mt-1.5 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#8b5000] flex-shrink-0" />
                {selectedStep.keyDeliverable}
              </p>
              <div className="mt-4 pt-3 border-t border-[#dde9ff] flex items-center justify-between">
                <span className="text-xs text-[#44474e]">Paced Evaluation</span>
                <span className="text-xs font-bold text-[#8b5000]">Verified Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Markmates vs Conventional Academies */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">OBJECTIVE COMPARISON</span>
          <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold mt-1">
            How Markmates Compares
          </h2>
          <p className="text-sm sm:text-base text-[#44474e] mt-2">
            Examining our student-centric educational model against commercial coaching institutions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-[#002046]/5 overflow-hidden border border-[#dde9ff]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1b365d] text-white">
                <tr>
                  <th className="py-4 px-6 font-semibold w-1/4">Evaluation Parameter</th>
                  <th className="py-4 px-6 font-semibold w-5/12 bg-[#002046] text-[#ffb871]">
                    Markmates Platform
                  </th>
                  <th className="py-4 px-6 font-semibold w-1/3 opacity-80">
                    Conventional Coaching Centers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde9ff]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8f9ff]'}>
                    <td className="py-5 px-6 font-semibold text-[#0d1c2f]">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 bg-[#eff4ff]/60 text-[#0d1c2f]">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.markmates}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#74777f]">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-5 h-5 text-rose-500/70 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.conventional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3 Pillars Deep Dive Cards */}
      <section className="py-16 bg-[#eff4ff] px-6 w-full border-t border-[#dde9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">STRUCTURAL INTEGRITY</span>
            <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold mt-1">
              The 3 Pillars Architecture
            </h2>
            <p className="text-sm text-[#44474e] mt-2">
              Every course, study schedule, and practice paper at Markmates is constructed upon these three pedagogical foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#dde9ff] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#1b365d] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">school</span>
                </div>
                <span className="text-xs font-bold text-[#002046] tracking-wider uppercase">Pillar 01</span>
                <h3 className="font-headline-md text-[#0d1c2f] text-xl font-bold">Learn</h3>
                <p className="text-sm text-[#44474e] leading-relaxed">
                  Deep concept-based lectures that deconstruct historical timelines, accounting conventions, and biological phenomena. We never ask students to memorize what they do not comprehend.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dde9ff] text-xs font-semibold text-[#002046] flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-[#8b5000]" /> High-Yield Cognitive Mapping
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#dde9ff] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#8b5000] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">quiz</span>
                </div>
                <span className="text-xs font-bold text-[#8b5000] tracking-wider uppercase">Pillar 02</span>
                <h3 className="font-headline-md text-[#0d1c2f] text-xl font-bold">Prepare</h3>
                <p className="text-sm text-[#44474e] leading-relaxed">
                  Rigorous mock testing under genuine exam time limits. For UGC NET, our computer-based test simulator mimics NTA software; for 12th Board, we enforce exact presentation standards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dde9ff] text-xs font-semibold text-[#8b5000] flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#8b5000]" /> NTA & Board Simulation Sets
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#dde9ff] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#003a55] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">trending_up</span>
                </div>
                <span className="text-xs font-bold text-[#1ba9ed] tracking-wider uppercase">Pillar 03</span>
                <h3 className="font-headline-md text-[#0d1c2f] text-xl font-bold">Progress</h3>
                <p className="text-sm text-[#44474e] leading-relaxed">
                  Continuous personal mentorship, performance analytics, and psychological encouragement. We eliminate pre-exam panic through steady, measurable percentile improvements.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dde9ff] text-xs font-semibold text-[#003a55] flex items-center gap-1">
                <Users className="w-4 h-4 text-[#8b5000]" /> 1-on-1 Continuous Mentorship
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="bg-[#1b365d] text-white rounded-2xl p-10 md:p-14 flex flex-col items-center gap-6 shadow-xl">
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white max-w-xl">
            Experience the Markmates Difference in Your Next Exam
          </h2>
          <p className="text-sm sm:text-base text-[#ebf1ff] max-w-xl opacity-90 leading-relaxed">
            Schedule a free academic consultation session with our faculty to assess your current syllabus coverage and prepare with clarity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEnrollment}
              className="bg-[#8b5000] hover:bg-[#fea94e] hover:text-[#703f00] text-white px-7 py-3 rounded-xl text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              Book Free Counseling
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold border border-white/20 transition-all cursor-pointer"
            >
              View All Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
