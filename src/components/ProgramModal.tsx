import React, { useState } from 'react';
import { Program } from '../types.ts';
import { X, CheckCircle, Clock, Calendar, BookOpen, Layers, ShieldCheck } from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onEnroll: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onEnroll,
}) => {
  if (!program) return null;

  const [activeTab, setActiveTab] = useState<'syllabus' | 'features' | 'schedule'>('syllabus');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#dde9ff]">
        {/* Modal Top Bar */}
        <div className="p-6 bg-[#1b365d] text-white flex justify-between items-start">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-[#ffdcbe] w-fit">
              {program.badge}
            </span>
            <h2 className="font-headline-md text-xl sm:text-2xl font-bold text-white">
              {program.title}
            </h2>
            <p className="text-xs text-[#ebf1ff] opacity-90 max-w-xl">
              {program.audience}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#dde9ff] bg-[#eff4ff] px-6 pt-3">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`pb-3 px-4 text-xs font-semibold transition-all cursor-pointer border-b-2 ${
              activeTab === 'syllabus'
                ? 'border-[#002046] text-[#002046]'
                : 'border-transparent text-[#44474e] hover:text-[#0d1c2f]'
            }`}
          >
            Detailed Syllabus
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 px-4 text-xs font-semibold transition-all cursor-pointer border-b-2 ${
              activeTab === 'features'
                ? 'border-[#002046] text-[#002046]'
                : 'border-transparent text-[#44474e] hover:text-[#0d1c2f]'
            }`}
          >
            Course Deliverables
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`pb-3 px-4 text-xs font-semibold transition-all cursor-pointer border-b-2 ${
              activeTab === 'schedule'
                ? 'border-[#002046] text-[#002046]'
                : 'border-transparent text-[#44474e] hover:text-[#0d1c2f]'
            }`}
          >
            Eligibility & Timings
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              {program.syllabus.map((section, idx) => (
                <div key={idx} className="bg-[#f8f9ff] p-5 rounded-xl border border-[#dde9ff]">
                  <h4 className="font-headline-sm text-sm sm:text-base font-bold text-[#0d1c2f] mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#8b5000]" />
                    {section.title}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#44474e]">
                    {section.modules.map((mod, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8b5000] mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <h4 className="font-headline-sm text-base font-bold text-[#0d1c2f]">
                What is Included in Your Enrollment
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {program.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#f8f9ff] border border-[#dde9ff] flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#0d1c2f] font-medium leading-relaxed">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-5 text-sm text-[#44474e]">
              <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#dde9ff]">
                <strong className="text-xs font-bold text-[#002046] uppercase tracking-wider block mb-1">
                  Target Audience & Eligibility
                </strong>
                <p className="text-xs sm:text-sm text-[#0d1c2f]">{program.eligibility}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#dde9ff] bg-white">
                  <div className="flex items-center gap-2 text-[#002046] font-semibold text-xs mb-1">
                    <Clock className="w-4 h-4 text-[#8b5000]" /> Course Duration
                  </div>
                  <p className="text-xs sm:text-sm text-[#0d1c2f] font-medium">{program.duration}</p>
                </div>

                <div className="p-4 rounded-xl border border-[#dde9ff] bg-white">
                  <div className="flex items-center gap-2 text-[#002046] font-semibold text-xs mb-1">
                    <Calendar className="w-4 h-4 text-[#8b5000]" /> Delivery Format
                  </div>
                  <p className="text-xs sm:text-sm text-[#0d1c2f] font-medium">{program.mode}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#dde9ff] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#74777f]">Fee Policy</span>
                  <p className="text-sm font-bold text-[#002046]">{program.fee}</p>
                </div>
                <span className="text-xs font-semibold text-[#8b5000] bg-[#ffdcbe] px-3 py-1 rounded-full">
                  Subsidized Education
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-6 bg-[#eff4ff] border-t border-[#dde9ff] flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-[#44474e]">
            Seats limited to 35 students per batch for individual attention.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#c4c6cf] text-[#0d1c2f] text-xs font-semibold hover:bg-white transition-colors cursor-pointer flex-1 sm:flex-initial text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(program.title);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#8b5000] hover:bg-[#fea94e] hover:text-[#703f00] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer flex-1 sm:flex-initial text-center"
            >
              Enroll in Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
