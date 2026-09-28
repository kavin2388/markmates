import React, { useState } from 'react';
import { NavScreen } from '../types.ts';
import { LOGO_URL } from '../data/mockData.ts';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onOpenProfile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const navItems: { label: string; screen: NavScreen }[] = [
    { label: 'Home', screen: 'home' },
    { label: 'Difference', screen: 'difference' },
    { label: 'About', screen: 'about' },
    { label: 'Programs', screen: 'programs' },
    { label: 'Team', screen: 'team' },
    { label: 'Contact', screen: 'contact' },
  ];

  const handleNavClick = (screen: NavScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#dde9ff]/40">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          {!imageError ? (
            <img
              alt="Markmates Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-9 h-9 rounded-lg bg-[#002046] text-white flex items-center justify-center font-bold text-sm">
              M
            </div>
          )}
          <span className="font-headline-md text-[#0d1c2f] tracking-tight">Markmates</span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => {
            const isActive = currentScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`transition-all duration-200 cursor-pointer text-sm ${
                  isActive
                    ? 'bg-[#002046] text-white font-semibold px-4 py-1.5 rounded-xl shadow-sm'
                    : 'text-[#44474e] hover:text-[#0d1c2f] font-normal px-2.5 py-1.5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center bg-[#002046] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#1b365d] transition-colors cursor-pointer shadow-sm"
          >
            Contact Us
          </button>

          <button
            onClick={onOpenProfile}
            aria-label="Student Profile"
            className="w-8 h-8 rounded-full bg-[#002046] hover:bg-[#1b365d] text-white flex items-center justify-center transition-colors cursor-pointer focus:ring-2 focus:ring-[#8b5000]/40"
            title="Student Portal & Account"
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#0d1c2f] hover:bg-[#e6eeff] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f9ff] border-b border-[#dde9ff] px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.screen}
                  onClick={() => handleNavClick(item.screen)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-[#002046] text-white font-semibold'
                      : 'text-[#44474e] hover:bg-[#e6eeff] hover:text-[#0d1c2f]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-[#dde9ff] flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#002046] text-white py-2.5 rounded-xl text-sm font-medium text-center hover:bg-[#1b365d]"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfile();
                }}
                className="w-full border border-[#c4c6cf] text-[#0d1c2f] py-2 rounded-xl text-sm font-medium text-center flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" /> Student Portal
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
