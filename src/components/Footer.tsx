import React from 'react';
import { NavScreen } from '../types.ts';
import { UDYAM_REGISTRATION } from '../data/mockData.ts';

interface FooterProps {
  onNavigate: (screen: NavScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#eff4ff] py-10 border-t border-[#dde9ff]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[#44474e] text-sm">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-headline-sm text-[#0d1c2f] font-semibold text-lg">Markmates Academic Platform</span>
          <span className="flex items-center gap-1.5 text-xs text-[#002046] font-medium">
            <span className="material-symbols-outlined text-[16px] text-[#8b5000]">verified</span>
            UDYAM Registration: {UDYAM_REGISTRATION}
          </span>
          <span className="text-xs text-[#44474e]">Registered Address, Tamil Nadu, India</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium">
          <button onClick={() => onNavigate('home')} className="hover:text-[#002046] transition-colors cursor-pointer">
            Home
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('difference')} className="hover:text-[#002046] transition-colors cursor-pointer">
            The Difference
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('about')} className="hover:text-[#002046] transition-colors cursor-pointer">
            About Us
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('programs')} className="hover:text-[#002046] transition-colors cursor-pointer">
            Programs
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('team')} className="hover:text-[#002046] transition-colors cursor-pointer">
            Faculty & Team
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#002046] transition-colors cursor-pointer">
            Contact & Counseling
          </button>
        </div>

        <div className="text-center md:text-right text-xs text-[#74777f]">
          © 2024 Markmates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
