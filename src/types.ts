export type NavScreen = 'home' | 'difference' | 'about' | 'programs' | 'team' | 'contact';

export interface Program {
  id: string;
  title: string;
  badge: string;
  badgeType: 'competitive' | 'school' | 'bridge';
  icon: string;
  description: string;
  highlights: string[];
  audience: string;
  eligibility: string;
  duration: string;
  mode: string;
  syllabus: {
    title: string;
    modules: string[];
  }[];
  features: string[];
  fee: string;
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  qualification: string;
  experience: string;
  subjects: string[];
  specialization: string;
}

export interface StepFlow {
  step: number;
  title: string;
  summary: string;
  details: string;
  keyDeliverable: string;
}
