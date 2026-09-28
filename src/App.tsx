/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavScreen, Program } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomeScreen } from './components/HomeScreen.tsx';
import { DifferenceScreen } from './components/DifferenceScreen.tsx';
import { AboutScreen } from './components/AboutScreen.tsx';
import { ProgramsScreen } from './components/ProgramsScreen.tsx';
import { TeamScreen } from './components/TeamScreen.tsx';
import { ContactScreen } from './components/ContactScreen.tsx';
import { ProgramModal } from './components/ProgramModal.tsx';
import { EnrollmentModal } from './components/EnrollmentModal.tsx';
import { StudentPortalModal } from './components/StudentPortalModal.tsx';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<NavScreen>('home');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [enrollmentProgramTitle, setEnrollmentProgramTitle] = useState<string | undefined>(undefined);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleOpenEnrollment = (programTitle?: string) => {
    setEnrollmentProgramTitle(programTitle);
    setEnrollmentOpen(true);
  };

  const handleNavigate = (screen: NavScreen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0d1c2f] font-body-md selection:bg-[#dde9ff] selection:text-[#002046]">
      {/* Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenProfile={() => setProfileOpen(true)}
      />

      {/* Main Screen Content with top padding for fixed header */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectProgram={(prog) => setSelectedProgram(prog)}
            onOpenEnrollment={() => handleOpenEnrollment()}
          />
        )}

        {currentScreen === 'difference' && (
          <DifferenceScreen
            onNavigate={handleNavigate}
            onOpenEnrollment={() => handleOpenEnrollment()}
          />
        )}

        {currentScreen === 'about' && (
          <AboutScreen
            onNavigate={handleNavigate}
            onOpenEnrollment={() => handleOpenEnrollment()}
          />
        )}

        {currentScreen === 'programs' && (
          <ProgramsScreen
            onSelectProgram={(prog) => setSelectedProgram(prog)}
            onOpenEnrollment={(title) => handleOpenEnrollment(title)}
          />
        )}

        {currentScreen === 'team' && (
          <TeamScreen
            onNavigate={handleNavigate}
            onOpenEnrollment={(mentor) => handleOpenEnrollment(mentor)}
          />
        )}

        {currentScreen === 'contact' && <ContactScreen />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onEnroll={(title) => {
            setSelectedProgram(null);
            handleOpenEnrollment(title);
          }}
        />
      )}

      {enrollmentOpen && (
        <EnrollmentModal
          initialProgramTitle={enrollmentProgramTitle}
          onClose={() => setEnrollmentOpen(false)}
        />
      )}

      {profileOpen && (
        <StudentPortalModal onClose={() => setProfileOpen(false)} />
      )}
    </div>
  );
}
