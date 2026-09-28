import React, { useState } from 'react';
import { UDYAM_REGISTRATION, FAQS } from '../data/mockData.ts';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'ugc-net-english',
    mode: 'online',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }
    const generatedId = 'MM-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde9ff] text-[#002046] text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            Admissions & Student Helpdesk
          </div>

          <h1 className="font-headline-xl text-[#0d1c2f] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Contact & Academic Counseling
          </h1>

          <p className="font-body-lg text-[#44474e] max-w-3xl text-base sm:text-lg leading-relaxed">
            Reach out to our academic advisors to discuss program syllabi, batch timings, scholarship eligibility, or book a personalized 1-on-1 counseling session.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="py-6 px-6 max-w-7xl mx-auto w-full mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#dde9ff] flex flex-col gap-6">
              <h3 className="font-headline-sm text-[#0d1c2f] text-xl font-bold">
                Registered Office & Support
              </h3>

              <div className="space-y-5 text-sm text-[#44474e]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#dde9ff] text-[#002046] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#0d1c2f] block font-semibold">Registered Campus Address</strong>
                    <span>Markmates Academic Center, Tamil Nadu, India</span>
                    <span className="text-xs text-[#8b5000] font-mono block mt-0.5">
                      UDYAM: {UDYAM_REGISTRATION}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#dde9ff] text-[#002046] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#0d1c2f] block font-semibold">Phone & WhatsApp Helpdesk</strong>
                    <span>+91 94420 89123 / +91 98401 23456</span>
                    <span className="text-xs text-[#74777f] block">Instant response during counseling hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#dde9ff] text-[#002046] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#0d1c2f] block font-semibold">Email Correspondence</strong>
                    <span>admissions@markmates.edu.in</span>
                    <span className="text-xs text-[#74777f] block">info@markmates.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#dde9ff] text-[#002046] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#0d1c2f] block font-semibold">Academic Consultation Hours</strong>
                    <span>Monday to Saturday: 9:00 AM – 7:00 PM IST</span>
                    <span className="text-xs text-[#74777f] block">Sunday: Special Mock Test Clinics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Banner */}
            <div className="bg-[#1b365d] text-white rounded-xl p-6 shadow-md border border-white/10 flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-[#ffb871] flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Verified Educational Institution</h4>
                <p className="text-xs text-[#ebf1ff] opacity-80 mt-0.5">
                  Government of India UDYAM verified for educational training and curriculum guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Counseling Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg shadow-[#002046]/5 border border-[#dde9ff]">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-headline-md text-[#0d1c2f] text-2xl font-bold">
                    Counseling Request Received!
                  </h3>
                  <p className="text-sm text-[#44474e] max-w-md leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your consultation reference is{' '}
                    <strong className="font-mono text-[#002046] bg-[#dde9ff] px-2 py-0.5 rounded">
                      {ticketId}
                    </strong>
                    . An educator from Markmates will reach out to your contact number within 2 business hours.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#002046] text-white px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#1b365d] transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/919442089123?text=Hello%20Markmates,%20my%20inquiry%20ticket%20is%20${ticketId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8b5000] text-white px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#fea94e] hover:text-[#703f00] transition-colors flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" /> Connect on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-headline-sm text-[#0d1c2f] text-xl font-bold">
                      Book a Free Academic Consultation
                    </h3>
                    <p className="text-xs text-[#74777f] mt-1">
                      Fill out the form below to receive syllabus brochures, fee details, and batch timelines.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                        Student / Aspirant Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. S. Ananya"
                        className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-4 py-2.5 text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046] focus:ring-1 focus:ring-[#002046]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ananya@example.com"
                        className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-4 py-2.5 text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046] focus:ring-1 focus:ring-[#002046]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-4 py-2.5 text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046] focus:ring-1 focus:ring-[#002046]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                        Program of Interest *
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-4 py-2.5 text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046] focus:ring-1 focus:ring-[#002046]"
                      >
                        <option value="ugc-net-english">Get NET Go — UGC NET English</option>
                        <option value="12th-accounts-commerce">12th Grade Accounts & Commerce (Centum Track)</option>
                        <option value="12th-biology">12th Grade Biology Academic Guidance</option>
                        <option value="net-paper1">UGC NET Paper 1 Intensive Booster</option>
                        <option value="foundation-bridge">Class 11 to 12 Commerce Bridge</option>
                        <option value="general-counseling">General Academic Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                      Preferred Mode of Learning
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'online', label: 'Online Live Cohort' },
                        { id: 'hybrid', label: 'Hybrid Weekend' },
                        { id: 'center', label: 'Tamil Nadu Center' },
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, mode: m.id })}
                          className={`py-2 px-2 text-xs rounded-lg border font-medium transition-colors cursor-pointer text-center ${
                            formData.mode === m.id
                              ? 'bg-[#002046] text-white border-[#002046]'
                              : 'bg-[#f8f9ff] text-[#44474e] border-[#c4c6cf] hover:bg-[#e6eeff]'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                      Your Questions / Specific Academic Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your current preparation status or any specific doubts..."
                      className="w-full bg-[#f8f9ff] border border-[#c4c6cf] rounded-xl px-4 py-2.5 text-sm text-[#0d1c2f] focus:outline-none focus:border-[#002046] focus:ring-1 focus:ring-[#002046]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8b5000] hover:bg-[#fea94e] hover:text-[#703f00] text-white py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md cursor-pointer mt-2"
                  >
                    Request Free Counseling Call
                  </button>

                  <p className="text-[11px] text-[#74777f] text-center">
                    We strictly respect your privacy. No spam or unsolicited promotions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-16 bg-[#eff4ff] px-6 w-full border-t border-[#dde9ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8b5000] font-bold">HELP & CLARITY</span>
            <h2 className="font-headline-lg text-[#0d1c2f] text-2xl sm:text-3xl font-bold mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#44474e] mt-2">
              Common questions from parents, college scholars, and prospective students.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#dde9ff] overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-[#f8f9ff] transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#0d1c2f]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#8b5000] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#74777f] flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#44474e] leading-relaxed border-t border-[#dde9ff]/60 bg-[#f8f9ff]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
