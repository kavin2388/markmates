import React from 'react';
import { NavScreen, Program } from '../types.ts';
import { PROGRAMS, TEAM_MEMBERS, UDYAM_REGISTRATION } from '../data/mockData.ts';

interface HomeScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onSelectProgram: (program: Program) => void;
  onOpenEnrollment: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectProgram,
  onOpenEnrollment,
}) => {
  return (
    <div className="flex flex-col w-full bg-[#f8f9ff]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 px-6 max-w-7xl mx-auto w-full">
        {/* Ambient Blur Accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#d6e3ff] rounded-full filter blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#ffb871] rounded-full filter blur-3xl opacity-30 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde9ff] text-[#002046] text-sm font-medium shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-[#002046]">verified</span>
              {UDYAM_REGISTRATION} • Academic Excellence
            </div>

            <h1 className="font-headline-xl text-[#0d1c2f] tracking-tight text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15]">
              Learn with Purpose. <br />
              <span className="text-[#8b5000]">Prepare with Confidence.</span> <br />
              Progress with Markmates.
            </h1>

            <p className="font-body-lg text-[#44474e] max-w-2xl text-base sm:text-lg leading-relaxed">
              An education and learning platform focused on providing affordable education, ideal guidance, and encouraging learning for students preparing for competitive examinations and important academic milestones.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('programs')}
                className="bg-[#8b5000] text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-[#fea94e] hover:text-[#703f00] transition-all shadow-lg shadow-[#8b5000]/20 cursor-pointer"
              >
                Explore Programs
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3 rounded-xl text-sm font-medium text-[#002046] bg-white hover:bg-[#dde9ff] transition-all shadow-sm border border-[#c4c6cf]/30 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column: 3 Pillars Graphic Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Pillar 01 */}
            <div
              onClick={() => onNavigate('difference')}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-xl shadow-[#002046]/5 flex items-center gap-5 transform hover:-translate-y-1 transition-all border border-[#dde9ff]/50 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#1b365d] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px]">school</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#002046] font-bold">PILLAR 01</span>
                <h3 className="font-headline-sm text-[#0d1c2f] font-semibold text-lg">Learn</h3>
                <p className="text-xs sm:text-sm text-[#44474e] mt-0.5">
                  Concept-based foundational mastery from experienced educators.
                </p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div
              onClick={() => onNavigate('difference')}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-xl shadow-[#002046]/5 flex items-center gap-5 transform hover:-translate-y-1 transition-all ml-0 lg:ml-8 border border-[#dde9ff]/50 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#8b5000] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px]">quiz</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8b5000] font-bold">PILLAR 02</span>
                <h3 className="font-headline-sm text-[#0d1c2f] font-semibold text-lg">Prepare</h3>
                <p className="text-xs sm:text-sm text-[#44474e] mt-0.5">
                  Rigorous mock tests, practice questions, and structured study plans.
                </p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div
              onClick={() => onNavigate('difference')}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-xl shadow-[#002046]/5 flex items-center gap-5 transform hover:-translate-y-1 transition-all ml-0 lg:ml-16 border border-[#dde9ff]/50 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#003a55] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px]">trending_up</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#1ba9ed] font-bold">PILLAR 03</span>
                <h3 className="font-headline-sm text-[#0d1c2f] font-semibold text-lg">Progress</h3>
                <p className="text-xs sm:text-sm text-[#44474e] mt-0.5">
                  Continuous mentorship and doubt resolution toward milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats Banner */}
      <section className="bg-[#1b365d] text-white py-10 px-6 w-full shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-1.5 p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
            <span className="font-headline-xl text-[#ffb871] text-4xl sm:text-5xl font-bold">4+</span>
            <span className="text-xs text-[#aec7f7] font-semibold uppercase tracking-wider">UGC NET CLEARED</span>
            <span className="text-xs text-[#ebf1ff] opacity-80">Proven success in competitive exams</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
            <span className="font-headline-xl text-[#ffb871] text-4xl sm:text-5xl font-bold">16+</span>
            <span className="text-xs text-[#aec7f7] font-semibold uppercase tracking-wider">YEARS EXPERIENCE</span>
            <span className="text-xs text-[#ebf1ff] opacity-80">Dedicated academic guidance</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
            <span className="font-headline-xl text-[#ffb871] text-4xl sm:text-5xl font-bold">20+</span>
            <span className="text-xs text-[#aec7f7] font-semibold uppercase tracking-wider">CENTUM RESULTS</span>
            <span className="text-xs text-[#ebf1ff] opacity-80">Accounts & Commerce excellence</span>
          </div>
        </div>
      </section>

      {/* The Core Philosophy Section (The Markmates Difference) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">WHY CHOOSE US</span>
          <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold">
            The Markmates Difference
          </h2>
          <p className="text-base sm:text-lg text-[#44474e]">
            Built on core principles designed to elevate your learning experience and transform academic potential into concrete achievements.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md shadow-[#002046]/5 flex flex-col gap-4 hover:shadow-xl transition-shadow border border-[#dde9ff]/50">
            <div className="w-12 h-12 rounded-xl bg-[#dde9ff] text-[#002046] flex items-center justify-center">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h3 className="font-headline-md text-[#0d1c2f] text-xl font-semibold">1. Concept-Based Preparation</h3>
            <p className="text-sm text-[#44474e] leading-relaxed">
              Build genuine understanding instead of depending only on memorization, ensuring long-term retention and application.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md shadow-[#002046]/5 flex flex-col gap-4 hover:shadow-xl transition-shadow border border-[#dde9ff]/50">
            <div className="w-12 h-12 rounded-xl bg-[#dde9ff] text-[#002046] flex items-center justify-center">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <h3 className="font-headline-md text-[#0d1c2f] text-xl font-semibold">2. Affordable Education</h3>
            <p className="text-sm text-[#44474e] leading-relaxed">
              Provide quality educational guidance designed to remain accessible to more students without financial strain.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md shadow-[#002046]/5 flex flex-col gap-4 hover:shadow-xl transition-shadow border border-[#dde9ff]/50">
            <div className="w-12 h-12 rounded-xl bg-[#dde9ff] text-[#002046] flex items-center justify-center">
              <span className="material-symbols-outlined">badge</span>
            </div>
            <h3 className="font-headline-md text-[#0d1c2f] text-xl font-semibold">3. Experienced Educators</h3>
            <p className="text-sm text-[#44474e] leading-relaxed">
              Learn directly from seasoned educators with extensive teaching and competitive examination background.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md shadow-[#002046]/5 flex flex-col gap-4 hover:shadow-xl transition-shadow border border-[#dde9ff]/50">
            <div className="w-12 h-12 rounded-xl bg-[#dde9ff] text-[#002046] flex items-center justify-center">
              <span className="material-symbols-outlined">task_alt</span>
            </div>
            <h3 className="font-headline-md text-[#0d1c2f] text-xl font-semibold">4. Regular Practice</h3>
            <p className="text-sm text-[#44474e] leading-relaxed">
              Strengthen preparation through targeted questions, realistic mock tests, and consistent review cycles.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md shadow-[#002046]/5 flex flex-col gap-4 hover:shadow-xl transition-shadow border border-[#dde9ff]/50">
            <div className="w-12 h-12 rounded-xl bg-[#dde9ff] text-[#002046] flex items-center justify-center">
              <span className="material-symbols-outlined">route</span>
            </div>
            <h3 className="font-headline-md text-[#0d1c2f] text-xl font-semibold">5. Structured Learning</h3>
            <p className="text-sm text-[#44474e] leading-relaxed">
              Follow a clear and systematic preparation journey instead of studying without a concrete plan.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-xl shadow-md shadow-[#002046]/5 flex flex-col gap-4 hover:shadow-xl transition-shadow border border-[#dde9ff]/50">
            <div className="w-12 h-12 rounded-xl bg-[#dde9ff] text-[#002046] flex items-center justify-center">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h3 className="font-headline-md text-[#0d1c2f] text-xl font-semibold">6. Mentorship & Support</h3>
            <p className="text-sm text-[#44474e] leading-relaxed">
              Receive continuous guidance, revision support, and doubt clarification throughout your academic journey.
            </p>
          </div>
        </div>

        {/* 5-Step Flow Indicator */}
        <div className="mt-16 bg-[#eff4ff] p-6 rounded-xl flex flex-wrap items-center justify-between gap-4 text-center md:text-left border border-[#dde9ff]">
          <div className="flex items-center gap-2.5 mx-auto md:mx-0">
            <span className="w-8 h-8 rounded-full bg-[#002046] text-white flex items-center justify-center text-sm font-bold">1</span>
            <span className="text-sm font-semibold text-[#0d1c2f]">Understand</span>
          </div>
          <span className="text-[#74777f] hidden md:inline text-lg">→</span>

          <div className="flex items-center gap-2.5 mx-auto md:mx-0">
            <span className="w-8 h-8 rounded-full bg-[#002046] text-white flex items-center justify-center text-sm font-bold">2</span>
            <span className="text-sm font-semibold text-[#0d1c2f]">Practice</span>
          </div>
          <span className="text-[#74777f] hidden md:inline text-lg">→</span>

          <div className="flex items-center gap-2.5 mx-auto md:mx-0">
            <span className="w-8 h-8 rounded-full bg-[#002046] text-white flex items-center justify-center text-sm font-bold">3</span>
            <span className="text-sm font-semibold text-[#0d1c2f]">Get Guidance</span>
          </div>
          <span className="text-[#74777f] hidden md:inline text-lg">→</span>

          <div className="flex items-center gap-2.5 mx-auto md:mx-0">
            <span className="w-8 h-8 rounded-full bg-[#002046] text-white flex items-center justify-center text-sm font-bold">4</span>
            <span className="text-sm font-semibold text-[#0d1c2f]">Stay Consistent</span>
          </div>
          <span className="text-[#74777f] hidden md:inline text-lg">→</span>

          <div className="flex items-center gap-2.5 mx-auto md:mx-0">
            <span className="w-8 h-8 rounded-full bg-[#8b5000] text-white flex items-center justify-center text-sm font-bold">5</span>
            <span className="text-sm font-bold text-[#0d1c2f]">Progress</span>
          </div>
        </div>
      </section>

      {/* Programs Highlight Section (Our Offerings) */}
      <section className="py-24 bg-[#eff4ff] px-6 w-full border-y border-[#dde9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">OUR OFFERINGS</span>
              <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold mt-1">
                Featured Academic Programs
              </h2>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="text-[#002046] text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer group"
            >
              View All Programs
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#002046]/5 flex flex-col justify-between border border-[#dde9ff]">
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="px-3.5 py-1 rounded-full bg-[#d6e3ff] text-[#001b3d] text-xs font-semibold">
                    Competitive Exams
                  </span>
                  <span className="material-symbols-outlined text-[#8b5000] text-[28px]">auto_stories</span>
                </div>
                <h3 className="font-headline-md text-[#0d1c2f] text-2xl font-bold">Get NET Go — UGC NET English</h3>
                <p className="text-sm text-[#44474e] leading-relaxed">
                  Comprehensive preparation program covering both Paper 1 (General Teaching & Research Aptitude) and Paper 2 (English Literature) with detailed notes, practice tests, and expert strategy.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#44474e] text-xs font-medium">
                    Paper 1 Mastery
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#44474e] text-xs font-medium">
                    Paper 2 English
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#44474e] text-xs font-medium">
                    Mock Tests
                  </span>
                </div>
              </div>
              <div className="px-8 py-4 bg-[#eff4ff] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-[#dde9ff]">
                <span className="text-xs sm:text-sm text-[#0d1c2f] font-medium">
                  Targeted for aspiring professors & scholars
                </span>
                <button
                  onClick={() => onSelectProgram(PROGRAMS[0])}
                  className="bg-[#002046] text-white px-5 py-2 rounded-xl text-xs font-medium hover:bg-[#1b365d] transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#002046]/5 flex flex-col justify-between border border-[#dde9ff]">
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="px-3.5 py-1 rounded-full bg-[#ffdcbe] text-[#2d1600] text-xs font-semibold">
                    School Milestones
                  </span>
                  <span className="material-symbols-outlined text-[#002046] text-[28px]">military_tech</span>
                </div>
                <h3 className="font-headline-md text-[#0d1c2f] text-2xl font-bold">12th Grade Academic Support</h3>
                <p className="text-sm text-[#44474e] leading-relaxed">
                  Specialized academic guidance and board exam preparation focusing on Accounts & Commerce (with centum tracking) and Biology, backed by rigorous concept clarity.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#44474e] text-xs font-medium">
                    Accounts & Commerce
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#44474e] text-xs font-medium">
                    Biology
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#e6eeff] text-[#44474e] text-xs font-medium">
                    Academic Guidance
                  </span>
                </div>
              </div>
              <div className="px-8 py-4 bg-[#eff4ff] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-[#dde9ff]">
                <span className="text-xs sm:text-sm text-[#0d1c2f] font-medium">
                  Targeted for Higher Secondary Students
                </span>
                <button
                  onClick={() => onSelectProgram(PROGRAMS[1])}
                  className="bg-[#002046] text-white px-5 py-2 rounded-xl text-xs font-medium hover:bg-[#1b365d] transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Teaser (Expert Leadership) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">EXPERT LEADERSHIP</span>
          <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold">Meet Our Dedicated Team</h2>
          <p className="text-base text-[#44474e]">
            Guidance from experienced educators committed to your academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => onNavigate('team')}
              className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center gap-3 border border-[#dde9ff] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-full bg-[#1b365d] text-white flex items-center justify-center font-bold text-2xl mb-2 shadow-inner group-hover:scale-105 transition-transform">
                {member.initials}
              </div>
              <h3 className="font-headline-sm text-[#0d1c2f] text-lg font-bold">{member.name}</h3>
              <span className="text-xs text-[#8b5000] font-bold tracking-wide">{member.role}</span>
              <p className="text-xs text-[#44474e] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('team')}
            className="inline-flex items-center gap-1.5 text-[#002046] text-sm font-semibold hover:underline cursor-pointer group"
          >
            Discover the full story and team background
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </section>

      {/* Start Your Journey CTA Footer Banner */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full mb-12">
        <div className="bg-[#1b365d] text-white rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#8b5000]/20 rounded-full filter blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-3 max-w-xl relative z-10 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#ffb871] font-bold">
              TAKE ACTION TODAY
            </span>
            <h2 className="font-headline-lg text-white text-2xl sm:text-3xl font-bold">
              Start Your Academic Journey with Markmates
            </h2>
            <p className="text-sm sm:text-base text-[#ebf1ff] opacity-90 leading-relaxed">
              Join our community of focused learners and take the decisive step toward competitive exam success and academic milestones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
            <button
              onClick={onOpenEnrollment}
              className="bg-[#8b5000] text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-[#fea94e] hover:text-[#703f00] transition-all text-center shadow-lg cursor-pointer"
            >
              Get Started Now
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded-xl text-sm font-medium transition-all text-center border border-white/20 cursor-pointer"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
