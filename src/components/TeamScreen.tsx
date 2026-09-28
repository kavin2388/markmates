import React, { useState } from 'react';
import { NavScreen, TeamMember } from '../types.ts';
import { TEAM_MEMBERS } from '../data/mockData.ts';
import { GraduationCap, Award, BookOpen, Clock, MessageSquare, CheckCircle } from 'lucide-react';

interface TeamScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenEnrollment: (mentorName?: string) => void;
}

export const TeamScreen: React.FC<TeamScreenProps> = ({
  onNavigate,
  onOpenEnrollment,
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const testimonials = [
    {
      student: 'Kavitha R., M.A. English',
      exam: 'Cleared UGC NET (Assistant Professor) in 1st Attempt',
      quote:
        'Prasanna Doss sir broke down the literary theory movements into chronological memory trees. Paper 1 felt effortless because we had practiced 40+ mocks with his feedback.',
    },
    {
      student: 'Siddharth M.',
      exam: '12th State Board — 100/100 Centum in Accountancy',
      quote:
        'Mrs. Thilagavathy teacher taught us how examiners grade balance sheet adjustments. Her step-marking drills transformed my confidence completely.',
    },
    {
      student: 'Naveen Kumar',
      exam: '12th Biology — 98/100',
      quote:
        'Abinesh sir was available every evening for doubt clearing. Whenever I made an error in genetics pedigree problems, he helped trace exactly where my logic failed.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde9ff] text-[#002046] text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">school</span>
            Dedicated Educators
          </div>

          <h1 className="font-headline-xl text-[#0d1c2f] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Meet Our Expert Leadership
          </h1>

          <p className="font-body-lg text-[#44474e] max-w-3xl text-base sm:text-lg leading-relaxed">
            Markmates is anchored by career educators and academic advisors who bring decades of classroom mastery, proven board centum track records, and competitive examination laurels.
          </p>
        </div>
      </section>

      {/* Team Profiles Grid */}
      <section className="py-6 px-6 max-w-7xl mx-auto w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-8 shadow-md border border-[#dde9ff] flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#1b365d] text-white flex items-center justify-center font-bold text-2xl shadow-inner flex-shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-[#0d1c2f] text-xl sm:text-2xl font-bold">
                      {member.name}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-[#8b5000] font-bold block mt-0.5">
                      {member.role}
                    </span>
                    <p className="text-xs text-[#002046] font-medium mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#002046]" />
                      {member.qualification}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#44474e] bg-[#eff4ff] px-3.5 py-1.5 rounded-lg w-fit">
                  <Clock className="w-3.5 h-3.5 text-[#8b5000]" />
                  <span>{member.experience}</span>
                </div>

                <p className="text-sm text-[#44474e] leading-relaxed">
                  {member.fullBio}
                </p>

                {/* Focus Areas */}
                <div className="pt-3 border-t border-[#dde9ff]">
                  <span className="text-xs text-[#74777f] uppercase font-bold tracking-wider block mb-2">
                    Key Specialties & Subjects
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#002046] text-xs font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#dde9ff] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs text-[#44474e] italic max-w-xs">
                  {member.specialization}
                </span>
                <button
                  onClick={() => onOpenEnrollment(`Mentorship with ${member.name}`)}
                  className="bg-[#002046] hover:bg-[#1b365d] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  Book 1-on-1 Mentorship
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Testimonials Banner */}
      <section className="py-16 bg-[#eff4ff] px-6 w-full border-t border-[#dde9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">STUDENT VOICES</span>
            <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold mt-1">
              Mentorship That Transforms Trajectories
            </h2>
            <p className="text-sm text-[#44474e] mt-2">
              Hear from students who worked directly with our faculty to achieve career and academic breakthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#dde9ff] shadow-sm flex flex-col justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-[#8b5000]">
                    <span className="material-symbols-outlined text-[20px]">format_quote</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0d1c2f] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#dde9ff]">
                  <h4 className="text-sm font-bold text-[#0d1c2f]">{t.student}</h4>
                  <p className="text-xs text-[#8b5000] font-semibold mt-0.5">{t.exam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Commitment */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <h2 className="font-headline-lg text-[#0d1c2f] text-2xl font-bold">
            Have Questions for Our Faculty?
          </h2>
          <p className="text-sm text-[#44474e] leading-relaxed">
            Our educators conduct weekly open diagnostic sessions to review student strengths and outline a personalized prep roadmap.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#8b5000] hover:bg-[#fea94e] hover:text-[#703f00] text-white px-7 py-3 rounded-xl text-sm font-semibold transition-all shadow-md cursor-pointer mt-2"
          >
            Connect with Academic Advisors
          </button>
        </div>
      </section>
    </div>
  );
};
