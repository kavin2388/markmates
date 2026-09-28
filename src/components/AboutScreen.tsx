import React from 'react';
import { NavScreen } from '../types.ts';
import { UDYAM_REGISTRATION, TEAM_MEMBERS } from '../data/mockData.ts';
import { Award, Compass, ShieldCheck, HeartHandshake, BookOpen, GraduationCap, MapPin, Building2 } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenEnrollment: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onNavigate,
  onOpenEnrollment,
}) => {
  return (
    <div className="flex flex-col w-full bg-[#f8f9ff]">
      {/* Hero Header */}
      <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde9ff] text-[#002046] text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            Registered Academic Platform
          </div>

          <h1 className="font-headline-xl text-[#0d1c2f] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            About Markmates
          </h1>

          <p className="font-body-lg text-[#44474e] max-w-3xl text-base sm:text-lg leading-relaxed">
            Founded with a steadfast mission: to make world-class competitive examination coaching and higher secondary academic guidance genuinely affordable, personalized, and rooted in conceptual clarity.
          </p>
        </div>
      </section>

      {/* Official Government Verification & Registration Card */}
      <section className="py-8 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-[#1b365d] text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#ffb871] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-[#ffb871]" />
                Official Accreditation & Registration
              </div>
              <h2 className="font-headline-lg text-white text-2xl sm:text-3xl font-bold">
                Government of India UDYAM Registered Enterprise
              </h2>
              <p className="text-sm text-[#ebf1ff] opacity-90 leading-relaxed max-w-2xl">
                Markmates Academic Platform is officially registered under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, operating under registration number <strong className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">{UDYAM_REGISTRATION}</strong> in the State of Tamil Nadu.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#ebf1ff]">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#ffb871]" /> State of Registration: Tamil Nadu, India
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Building2 className="w-4 h-4 text-[#ffb871]" /> Educational Services & Competitive Exam Training
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 text-center">
              <span className="material-symbols-outlined text-[48px] text-[#ffb871] mb-2">verified_user</span>
              <span className="text-xs uppercase tracking-widest text-[#aec7f7] font-bold">Registration Verified</span>
              <span className="font-mono text-sm sm:text-base font-bold text-white mt-1">{UDYAM_REGISTRATION}</span>
              <span className="text-xs text-[#ebf1ff] opacity-75 mt-1">Official Educational Entity</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Founding Story */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">OUR ORIGIN</span>
            <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold">
              Built by Educators, Driven by Student Triumph
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#44474e] leading-relaxed">
              <p>
                Markmates was established when founder <strong>Prasanna Doss</strong> and veteran academician <strong>Dr. P. Thirumalivasan</strong> observed a troubling pattern in competitive exam preparation: students were charged exorbitant fees for generic lecture recordings, with little to no actual interaction with experienced educators.
              </p>
              <p>
                For exams like the <strong>UGC NET in English</strong>, students were often handed disconnected lists of dates and author names without learning how to analyze literary movements or tackle tricky Paper 1 aptitude patterns. In Higher Secondary school, students aspiring for <strong>100/100 Centum scores in Accounts and Commerce</strong> struggled due to minor presentation errors that typical coaching academies failed to correct.
              </p>
              <p>
                By bringing together passionate teachers like <strong>Mrs. P. Thilagavathy Senthil Pandian</strong> (16+ years experience in commerce with 20+ centums) and <strong>Mr. S. Abinesh</strong>, Markmates created a haven for focused learners who value clear thinking, consistent evaluation, and accessible mentorship.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-[#dde9ff] flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#dde9ff] text-[#002046] flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#002046]" />
              </div>
              <h3 className="font-headline-sm text-[#0d1c2f] font-bold text-lg">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                To democratize access to elite competitive exam coaching and school board excellence, ensuring no student is held back by financial constraints or lack of guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-[#dde9ff] flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#dde9ff] text-[#8b5000] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#8b5000]" />
              </div>
              <h3 className="font-headline-sm text-[#0d1c2f] font-bold text-lg">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                To be South India’s most trusted, results-proven academic community where learning is inspiring, rigorous, and deeply fulfilling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-[#dde9ff] flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#dde9ff] text-[#002046] flex items-center justify-center">
                <Award className="w-6 h-6 text-[#002046]" />
              </div>
              <h3 className="font-headline-sm text-[#0d1c2f] font-bold text-lg">Rigorous Standards</h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                Every practice question, mock test, and lecture series is peer-reviewed by certified educators to align directly with official exam patterns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-[#dde9ff] flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#dde9ff] text-[#8b5000] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-[#8b5000]" />
              </div>
              <h3 className="font-headline-sm text-[#0d1c2f] font-bold text-lg">Continuous Care</h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                We believe moral and emotional encouragement is just as critical as academic drills during demanding exam preparations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-[#eff4ff] px-6 w-full border-t border-[#dde9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">GUIDING PRINCIPLES</span>
            <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold mt-1">
              Institutional Values
            </h2>
            <p className="text-sm text-[#44474e] mt-2">
              The ethical compass directing every educational initiative we deliver at Markmates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#dde9ff] shadow-sm flex flex-col gap-2">
              <span className="font-mono text-xl font-bold text-[#8b5000]">01</span>
              <h4 className="font-headline-sm text-[#0d1c2f] font-bold text-base">Affordability for All</h4>
              <p className="text-xs text-[#44474e] leading-relaxed">
                Keeping fee tiers minimal and offering scholarships so financial barriers never prevent academic success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dde9ff] shadow-sm flex flex-col gap-2">
              <span className="font-mono text-xl font-bold text-[#8b5000]">02</span>
              <h4 className="font-headline-sm text-[#0d1c2f] font-bold text-base">No Rote Shortcuts</h4>
              <p className="text-xs text-[#44474e] leading-relaxed">
                Teaching concepts thoroughly so students understand principles from first principles rather than memorizing tricks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dde9ff] shadow-sm flex flex-col gap-2">
              <span className="font-mono text-xl font-bold text-[#8b5000]">03</span>
              <h4 className="font-headline-sm text-[#0d1c2f] font-bold text-base">Transparent Metrics</h4>
              <p className="text-xs text-[#44474e] leading-relaxed">
                Providing honest, granular diagnostic reports so students and parents know exact progress areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dde9ff] shadow-sm flex flex-col gap-2">
              <span className="font-mono text-xl font-bold text-[#8b5000]">04</span>
              <h4 className="font-headline-sm text-[#0d1c2f] font-bold text-base">Lifelong Scholarship</h4>
              <p className="text-xs text-[#44474e] leading-relaxed">
                Nurturing a love for reading, research, and critical thinking that extends far beyond the examination hall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full text-center">
        <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold">
          Guided by Seasoned Practitioners
        </h2>
        <p className="text-sm text-[#44474e] max-w-xl mx-auto mt-2 mb-10 leading-relaxed">
          Our team comprises educators with over 16+ years of specialized experience in board examinations and competitive academia.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.id}
              onClick={() => onNavigate('team')}
              className="bg-white p-5 rounded-xl border border-[#dde9ff] shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer min-w-[240px]"
            >
              <div className="w-12 h-12 rounded-full bg-[#1b365d] text-white flex items-center justify-center font-bold text-sm">
                {m.initials}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#0d1c2f]">{m.name}</h4>
                <p className="text-xs text-[#8b5000] font-semibold">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => onNavigate('team')}
            className="bg-[#002046] text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-[#1b365d] transition-colors cursor-pointer"
          >
            Meet the Full Faculty Team
          </button>
        </div>
      </section>
    </div>
  );
};
