import React, { useState } from 'react';
import { X, User, CheckCircle2, AlertCircle, BookOpen, Clock, Calendar, HelpCircle, Send } from 'lucide-react';

interface StudentPortalModalProps {
  onClose: () => void;
}

export const StudentPortalModal: React.FC<StudentPortalModalProps> = ({ onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [doubtText, setDoubtText] = useState('');
  const [doubtSubmitted, setDoubtSubmitted] = useState(false);

  const practiceQuestion = {
    question:
      'In UGC NET Paper 1 Research Aptitude: Which of the following measurement scales possesses an absolute zero point?',
    options: ['Nominal Scale', 'Ordinal Scale', 'Interval Scale', 'Ratio Scale'],
    correctIndex: 3,
    explanation:
      'The Ratio scale is the highest level of measurement. It has all properties of interval scales plus a true, absolute zero point (e.g., height, weight, time), allowing meaningful ratios (e.g. 20kg is twice 10kg).',
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setIsAnswerChecked(true);
    }
  };

  const handleDoubtSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubtText) return;
    setDoubtSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#dde9ff]">
        {/* Header */}
        <div className="p-6 bg-[#002046] text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1b365d] border border-white/20 flex items-center justify-center font-bold text-sm text-[#ffb871]">
              AS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-white">
                  Ananya Srinivasan
                </h3>
                <span className="text-[10px] font-mono bg-white/20 text-[#aec7f7] px-2 py-0.5 rounded">
                  MM-NET-2026-084
                </span>
              </div>
              <p className="text-xs text-[#ebf1ff] opacity-80">
                Enrolled: Get NET Go — UGC NET English (2026 Cohort)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Progress Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dde9ff] text-center">
              <span className="text-xs text-[#74777f] font-medium">Syllabus Coverage</span>
              <p className="text-xl font-bold text-[#002046] mt-1">74%</p>
              <div className="w-full bg-[#dde9ff] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#8b5000] h-full rounded-full" style={{ width: '74%' }} />
              </div>
            </div>

            <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dde9ff] text-center">
              <span className="text-xs text-[#74777f] font-medium">Live Attendance</span>
              <p className="text-xl font-bold text-[#002046] mt-1">92%</p>
              <div className="w-full bg-[#dde9ff] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full" style={{ width: '92%' }} />
              </div>
            </div>

            <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dde9ff] text-center">
              <span className="text-xs text-[#74777f] font-medium">Latest Mock Percentile</span>
              <p className="text-xl font-bold text-[#8b5000] mt-1">94.8%ile</p>
              <span className="text-[10px] text-emerald-700 font-semibold block mt-1">
                +4.2% since Mock 04
              </span>
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="bg-white p-4 rounded-xl border border-[#dde9ff] shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-[#0d1c2f] uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8b5000]" /> Next Scheduled Exam
              </h4>
              <span className="text-xs font-semibold text-[#8b5000] bg-[#ffdcbe] px-2.5 py-0.5 rounded-full">
                This Sunday
              </span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-[#44474e]">
              <span className="font-semibold text-[#002046]">
                Paper 1 Mock CBT Test 07: Mathematical Reasoning & DI
              </span>
              <span className="text-xs text-[#74777f]">10:00 AM – 11:00 AM IST</span>
            </div>
          </div>

          {/* Interactive Diagnostic Practice Question */}
          <div className="bg-[#f8f9ff] p-5 rounded-xl border border-[#dde9ff]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#002046] flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#8b5000]" /> Daily Concept Check
              </span>
              <span className="text-[11px] text-[#74777f]">Paper 1: Research Aptitude</span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#0d1c2f] mb-3 leading-relaxed">
              {practiceQuestion.question}
            </p>

            <div className="space-y-2 mb-3">
              {practiceQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === practiceQuestion.correctIndex;
                let optionStyle = 'bg-white border-[#dde9ff] text-[#0d1c2f] hover:bg-[#eff4ff]';

                if (isAnswerChecked) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-500 text-rose-900';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-[#dde9ff] border-[#002046] text-[#002046] font-medium';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswerChecked}
                    onClick={() => setSelectedAnswer(idx)}
                    className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <span>
                      <strong className="mr-2">{String.fromCharCode(65 + idx)}.</strong> {opt}
                    </span>
                    {isAnswerChecked && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {!isAnswerChecked ? (
              <button
                type="button"
                disabled={selectedAnswer === null}
                onClick={handleCheckAnswer}
                className="bg-[#002046] disabled:opacity-40 text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#1b365d] transition-colors cursor-pointer"
              >
                Verify Answer
              </button>
            ) : (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
                <strong>Explanation:</strong> {practiceQuestion.explanation}
              </div>
            )}
          </div>

          {/* Quick Doubt Helpdesk */}
          <div className="bg-white p-5 rounded-xl border border-[#dde9ff]">
            <h4 className="text-xs font-bold text-[#0d1c2f] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-[#8b5000]" /> Ask Your Mentor a Doubt
            </h4>

            {doubtSubmitted ? (
              <div className="p-3 bg-[#eff4ff] border border-[#dde9ff] rounded-lg text-xs text-[#002046]">
                ✓ Your query has been assigned to <strong>Prasanna Doss</strong>. Expected response within 3 hours on student WhatsApp.
              </div>
            ) : (
              <form onSubmit={handleDoubtSubmit} className="flex flex-col gap-2">
                <textarea
                  rows={2}
                  value={doubtText}
                  onChange={(e) => setDoubtText(e.target.value)}
                  placeholder="Paste question or explain where you are stuck..."
                  className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-lg p-2.5 text-xs text-[#0d1c2f] focus:outline-none focus:border-[#002046]"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#8b5000] text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#fea94e] hover:text-[#703f00] transition-colors cursor-pointer"
                  >
                    Submit Query
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#eff4ff] border-t border-[#dde9ff] flex justify-between items-center text-xs text-[#44474e]">
          <span>Markmates Student Support: support@markmates.edu.in</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-[#c4c6cf] text-[#0d1c2f] rounded-lg font-medium hover:bg-[#f8f9ff] cursor-pointer"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
