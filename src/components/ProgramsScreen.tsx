import React, { useState } from 'react';
import { Program } from '../types.ts';
import { PROGRAMS } from '../data/mockData.ts';
import { Search, Calendar, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

interface ProgramsScreenProps {
  onSelectProgram: (program: Program) => void;
  onOpenEnrollment: (programTitle?: string) => void;
}

export const ProgramsScreen: React.FC<ProgramsScreenProps> = ({
  onSelectProgram,
  onOpenEnrollment,
}) => {
  const [filter, setFilter] = useState<'all' | 'competitive' | 'school' | 'bridge'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = PROGRAMS.filter((prog) => {
    const matchesFilter = filter === 'all' || prog.badgeType === filter;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde9ff] text-[#002046] text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
            Structured Academic Offerings
          </div>

          <h1 className="font-headline-xl text-[#0d1c2f] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Academic Programs & Test Series
          </h1>

          <p className="font-body-lg text-[#44474e] max-w-3xl text-base sm:text-lg leading-relaxed">
            Choose from our specialized programs designed for competitive examinations and board milestones. Each curriculum features curated study materials, structured mock tests, and daily doubt resolution.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-8">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#dde9ff] flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#002046] text-white shadow-xs'
                  : 'bg-[#eff4ff] text-[#44474e] hover:bg-[#dde9ff]'
              }`}
            >
              All Programs ({PROGRAMS.length})
            </button>
            <button
              onClick={() => setFilter('competitive')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'competitive'
                  ? 'bg-[#002046] text-white shadow-xs'
                  : 'bg-[#eff4ff] text-[#44474e] hover:bg-[#dde9ff]'
              }`}
            >
              UGC NET Competitive
            </button>
            <button
              onClick={() => setFilter('school')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'school'
                  ? 'bg-[#002046] text-white shadow-xs'
                  : 'bg-[#eff4ff] text-[#44474e] hover:bg-[#dde9ff]'
              }`}
            >
              Higher Secondary (12th Board)
            </button>
            <button
              onClick={() => setFilter('bridge')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'bridge'
                  ? 'bg-[#002046] text-white shadow-xs'
                  : 'bg-[#eff4ff] text-[#44474e] hover:bg-[#dde9ff]'
              }`}
            >
              Foundation & Bridge
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#74777f] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, paper, or subject..."
              className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-lg pl-10 pr-4 py-2 text-xs text-[#0d1c2f] focus:outline-none focus:border-[#002046] focus:ring-1 focus:ring-[#002046]"
            />
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-6 px-6 max-w-7xl mx-auto w-full mb-16">
        {filteredPrograms.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl border border-[#dde9ff]">
            <p className="text-[#44474e] text-sm">No programs found matching your search criteria.</p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-[#002046] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#002046]/5 flex flex-col justify-between border border-[#dde9ff] hover:shadow-xl transition-shadow"
              >
                <div className="p-8 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-semibold ${
                        program.badgeType === 'competitive'
                          ? 'bg-[#d6e3ff] text-[#001b3d]'
                          : 'bg-[#ffdcbe] text-[#2d1600]'
                      }`}
                    >
                      {program.badge}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[28px] ${
                        program.badgeType === 'competitive' ? 'text-[#8b5000]' : 'text-[#002046]'
                      }`}
                    >
                      {program.icon}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-[#0d1c2f] text-2xl font-bold">{program.title}</h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">{program.description}</p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {program.highlights.map((h, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#44474e] text-xs font-medium">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Quick Meta */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#dde9ff] text-xs text-[#44474e]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8b5000]" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8b5000]" />
                      <span>{program.mode}</span>
                    </div>
                  </div>

                  {/* Key Features Preview */}
                  <div className="bg-[#eff4ff] p-4 rounded-lg mt-2">
                    <span className="text-[11px] font-bold text-[#002046] uppercase tracking-wider block mb-2">
                      Key Inclusions
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#0d1c2f]">
                      {program.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-8 py-4 bg-[#eff4ff] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-[#dde9ff]">
                  <span className="text-xs text-[#0d1c2f] font-medium">{program.audience}</span>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => onSelectProgram(program)}
                      className="bg-white text-[#002046] border border-[#c4c6cf] px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#dde9ff] transition-colors cursor-pointer flex-1 sm:flex-initial text-center"
                    >
                      View Syllabus
                    </button>
                    <button
                      onClick={() => onOpenEnrollment(program.title)}
                      className="bg-[#002046] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[#1b365d] transition-colors cursor-pointer flex-1 sm:flex-initial text-center"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Batch Information Banner */}
      <section className="py-12 bg-[#1b365d] text-white px-6 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ffb871]">
              Upcoming Admission Cycles
            </span>
            <h3 className="font-headline-lg text-white text-2xl font-bold">
              New Batches Begin Every Fortnight
            </h3>
            <p className="text-xs sm:text-sm text-[#ebf1ff] opacity-90">
              Limited cohort size ensures regular 1-on-1 interaction with Dr. Thirumalivasan, Prasanna Doss, and Mrs. Thilagavathy.
            </p>
          </div>
          <button
            onClick={() => onOpenEnrollment()}
            className="bg-[#8b5000] hover:bg-[#fea94e] hover:text-[#703f00] text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            Check Batch Seat Availability
          </button>
        </div>
      </section>
    </div>
  );
};
