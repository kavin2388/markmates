import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/mockData.ts';

interface EnrollmentModalProps {
  initialProgramTitle?: string;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  initialProgramTitle,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(
    initialProgramTitle || PROGRAMS[0].title
  );
  const [learningMode, setLearningMode] = useState('Online Live Cohort');
  const [submitted, setSubmitted] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState('');

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    const ref = 'ENR-' + Math.floor(10000 + Math.random() * 90000);
    setEnrollmentId(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#dde9ff]">
        <div className="p-6 bg-[#1b365d] text-white flex justify-between items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#ffb871] font-bold">
              Markmates Admissions
            </span>
            <h3 className="font-headline-sm text-xl font-bold text-white mt-0.5">
              Begin Your Academic Journey
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-headline-sm text-xl font-bold text-[#0d1c2f]">
                Enrollment Application Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed max-w-sm">
                Thank you <strong>{name}</strong>. Your provisional application ID is{' '}
                <strong className="font-mono text-[#002046] bg-[#dde9ff] px-2 py-0.5 rounded">
                  {enrollmentId}
                </strong>
                . Our faculty team will contact you at <strong>{phone}</strong> to confirm your batch orientation.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#002046] text-white px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#1b365d] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleEnrollSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0d1c2f] mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter full legal name"
                  className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0d1c2f] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@gmail.com"
                    className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0d1c2f] mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98401 23456"
                    className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0d1c2f] mb-1">
                  Select Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046]"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="General Academic Mentorship">General Academic Mentorship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0d1c2f] mb-1">
                  Format Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Online Live Cohort', 'Tamil Nadu Center (In-person)'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setLearningMode(m)}
                      className={`py-2 px-2 text-xs rounded-lg border font-medium transition-colors cursor-pointer text-center ${
                        learningMode === m
                          ? 'bg-[#002046] text-white border-[#002046]'
                          : 'bg-[#f8f9ff] text-[#44474e] border-[#c4c6cf]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#8b5000] hover:bg-[#fea94e] hover:text-[#703f00] text-white py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                >
                  Submit Enrollment Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
