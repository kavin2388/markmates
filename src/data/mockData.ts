import { Program, TeamMember, StepFlow } from '../types.ts';

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAkMQ4gZWT2mELAopC2qTXwnqV_Llxp3UsgEn3_WWEfH1LnELbL4M4NhV6eOShnSSOtPd1AKJefBbrM4FvRiikY9TamOf2TAUtg308cxdsJ2_T9V3FgFAnXyeN9bljnXS5mzepWwkZDzFjCvi6lAt-dXtW1nfQToWxTxiNRPfvW_xok2DsLYOJO2ipJf8yGtBpfnwZJhlJU-26fVVZpRiMjN0DZTY1FIKdHCkg15SSgQrMKHewxPaZi';

export const UDYAM_REGISTRATION = 'UDYAM-TN-12-0201453';

export const PROGRAMS: Program[] = [
  {
    id: 'ugc-net-english',
    title: 'Get NET Go — UGC NET English',
    badge: 'Competitive Exams',
    badgeType: 'competitive',
    icon: 'auto_stories',
    description:
      'Comprehensive preparation program covering both Paper 1 (General Teaching & Research Aptitude) and Paper 2 (English Literature) with detailed notes, practice tests, and expert strategy.',
    highlights: ['Paper 1 Mastery', 'Paper 2 English', 'Mock Tests'],
    audience: 'Targeted for aspiring professors & scholars',
    eligibility: 'Postgraduates (M.A. English) or Final Year Master students aiming for Assistant Professor / JRF',
    duration: '6 Months Intensive (Live Cohort + Recorded Access)',
    mode: 'Hybrid / Interactive Online with Weekend Sessions',
    fee: 'Affordable Tiered Fee with installment options',
    syllabus: [
      {
        title: 'Paper 1: General Teaching & Research Aptitude',
        modules: [
          'Teaching Aptitude: Learner characteristics, methods of teaching in higher institutions',
          'Research Aptitude: Research methods, thesis & article writing, ethics',
          'Comprehension & Communication: Critical passage reading, barrier-free communication',
          'Mathematical & Logical Reasoning: Number series, syllogisms, Indian Logic (Pramanas)',
          'Data Interpretation: Graphical representation and analytical interpretation',
          'Information & Communication Technology (ICT) & Higher Education System in India'
        ]
      },
      {
        title: 'Paper 2: English Literature',
        modules: [
          'Chaucer to the Elizabethan & Jacobean Age',
          'Restoration to the Romantic Period',
          'Victorian & Pre-Raphaelite Literature',
          'Modern, Post-Modern, and Post-Colonial Literature',
          'Literary Theory & Contemporary Critical Approaches',
          'English Language Teaching (ELT) & Cultural Studies'
        ]
      }
    ],
    features: [
      '50+ Sectional Mock Tests modeled on latest NTA CBT pattern',
      '10 Full-Length Proctored Simulated Exams with instant percentile analysis',
      'Daily 1-on-1 mentor doubt resolution with UGC NET-cleared faculty',
      'Concise revision flashcards and author-timeline mnemonics',
      'Previous 10 Years Solved Papers with detailed step-by-step explanations'
    ]
  },
  {
    id: '12th-academic-support',
    title: '12th Grade Academic Support',
    badge: 'School Milestones',
    badgeType: 'school',
    icon: 'military_tech',
    description:
      'Specialized academic guidance and board exam preparation focusing on Accounts & Commerce (with centum tracking) and Biology, backed by rigorous concept clarity.',
    highlights: ['Accounts & Commerce', 'Biology', 'Academic Guidance'],
    audience: 'Targeted for Higher Secondary Students',
    eligibility: '12th Grade State Board (Tamil Nadu) and CBSE Commerce & Science Stream students',
    duration: 'Full Academic Year (10 Months) with Board Exam Sprint',
    mode: 'In-person Centers & Interactive Hybrid Live Classes',
    fee: 'Community-subsidized affordable fee structure',
    syllabus: [
      {
        title: 'Accountancy & Commerce (Centum Tracking)',
        modules: [
          'Partnership Accounts: Admission, Retirement, Dissolution with exact balance sheet tallying',
          'Company Accounts: Issue of shares, debentures, forfeiture & re-issue methods',
          'Financial Statement Analysis & Ratio Interpretation',
          'Commerce: Principles of Management, Financial Markets, Consumer Protection Act',
          'Regular presentation audits to eliminate presentation mark-loss in board evaluation'
        ]
      },
      {
        title: 'Biology (Concept Clarity & Diagrammatic Precision)',
        modules: [
          'Reproduction in Organisms, Sexual Reproduction in Flowering Plants',
          'Genetics & Evolution: Mendelian principles, Molecular Basis of Inheritance',
          'Biotechnology Principles, Applications, and Bioethics',
          'Ecology, Environment, and Biodiversity conservation strategies'
        ]
      }
    ],
    features: [
      'Exclusive Centum Target Practice sets developed over 16+ years of board experience',
      'Weekly unit tests with handwritten answer key evaluations and personalized feedback',
      'Special Sunday doubt clearing clinics for tricky numericals in Partnership accounts',
      'Bi-monthly parent-educator progress review meetings',
      'Exam psychology and speed-writing workshops to finish papers with 20 minutes to spare'
    ]
  },
  {
    id: 'ugc-net-paper-1-booster',
    title: 'UGC NET Paper 1 Intensive Booster',
    badge: 'Competitive Exams',
    badgeType: 'competitive',
    icon: 'psychology',
    description:
      'A dedicated 60-day accelerated course for Paper 1 to maximize score across all 10 modules including Mathematical Reasoning and Indian Logic.',
    highlights: ['10 Modules Covered', 'Speed Math Hacks', 'Daily Practice Sets'],
    audience: 'Targeted for candidates of all subjects needing Paper 1 score enhancement',
    eligibility: 'Any candidate appearing for UGC NET / JRF / SET',
    duration: '60 Days Accelerated Sprint',
    mode: 'Daily Evening Live Cohort & Recorded Vault',
    fee: 'Economical single-subject enrollment',
    syllabus: [
      {
        title: 'High-Scoring Module Fast-Track',
        modules: [
          'Teaching & Research Aptitude deep dive',
          'Logical reasoning shortcuts & categorical propositions',
          'Data interpretation time-saving tabular algorithms',
          'Higher education governance, NEP 2020 impact, and environmental protocols'
        ]
      }
    ],
    features: [
      '30 Targeted speed drills',
      'Direct shortcut notes for mathematical reasoning',
      'Weekly doubt resolution webinars'
    ]
  },
  {
    id: '11th-foundation-bridge',
    title: 'Class 11 to 12 Commerce Foundation Bridge',
    badge: 'School Milestones',
    badgeType: 'bridge',
    icon: 'route',
    description:
      'Bridge the conceptual gap between Class 11 fundamentals and Class 12 board syllabus to establish an unshakeable ground for 100/100 board scores.',
    highlights: ['Journal & Ledger Mastery', 'Trial Balance Clarity', 'Board Foundation'],
    audience: 'Targeted for rising Class 12 Commerce students',
    eligibility: 'Students entering Class 12 (State Board & CBSE)',
    duration: '8 Weeks Summer / Vacation Cohort',
    mode: 'Hybrid & Center-based',
    fee: 'Introductory foundation scholarship available',
    syllabus: [
      {
        title: 'Core Fundamental Strengthening',
        modules: [
          'Golden rules of accounting and real-world journalizing',
          'Rectification of errors without memorizing rules',
          'Depreciation accounting methods and bank reconciliation statements',
          'Readiness bridge for Class 12 partnership accounting'
        ]
      }
    ],
    features: [
      'Step-by-step diagnostic test before starting Class 12 syllabus',
      'Worksheets reviewed personally by senior commerce faculty',
      'Certificate of Foundation Completion'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'prasanna-doss',
    initials: 'PD',
    name: 'Prasanna Doss',
    role: 'Founder & Educator',
    bio: 'Leading academic strategy and competitive exam coaching.',
    fullBio:
      'Prasanna Doss is the founder of Markmates and a passionate educator who has spearheaded competitive exam coaching for UGC NET aspirants. With multiple UGC NET clearances to his credit, Prasanna specializes in demystifying Paper 1 and English Literature through structured analytical frameworks, authorial timelines, and question-prediction matrices. He envisions making competitive exam coaching affordable and accessible to every deserving student in Tamil Nadu and beyond.',
    qualification: 'M.A. English Literature, UGC NET Qualified',
    experience: '10+ Years in Competitive Examination Pedagogy',
    subjects: ['UGC NET Paper 1 Aptitude', 'English Literature (Paper 2)', 'Literary Theory'],
    specialization: 'High-yield competitive exam heuristics, time management, and critical analysis.'
  },
  {
    id: 'dr-thirumalivasan',
    initials: 'PT',
    name: 'Dr. P. Thirumalivasan',
    role: 'Academic Advisor',
    bio: 'Providing expert mentorship and curriculum direction.',
    fullBio:
      'Dr. P. Thirumalivasan brings decades of scholarly experience to Markmates as the chief academic advisor. Having served in higher education institutions and university bodies, he advises on pedagogical integrity, curriculum structuring, and examination evaluation protocols. His mentorship guides students into becoming true scholars rather than superficial test-takers.',
    qualification: 'Ph.D., M.Phil., M.A., Academic Researcher',
    experience: '25+ Years in Higher Education & Academic Governance',
    subjects: ['Higher Education Strategy', 'Curriculum Design', 'Academic Ethics'],
    specialization: 'Research methodology, syllabus architecture, and institutional academic strategy.'
  },
  {
    id: 'thilagavathy-senthil-pandian',
    initials: 'PTS',
    name: 'Mrs. P. Thilagavathy Senthil Pandian',
    role: 'Senior Educator',
    bio: 'Specializing in commerce and foundational accounts.',
    fullBio:
      'Mrs. P. Thilagavathy Senthil Pandian is a renowned educator with over 16 years of dedicated service in higher secondary education. She is celebrated for coaching over 20 students to achieve perfect 100/100 (Centum) scores in Board examinations in Accountancy and Commerce. Her proprietary balance-sheet error identification method and stress-free classroom environment make complex ledger concepts intuitive.',
    qualification: 'M.Com., M.Phil., B.Ed.',
    experience: '16+ Years in Board Examination Coaching',
    subjects: ['Accountancy (Class 11 & 12)', 'Commerce & Business Management'],
    specialization: 'Centum tracking, balance sheet reconciliation, and step-by-step presentation optimization.'
  },
  {
    id: 'abinesh',
    initials: 'SA',
    name: 'Mr. S. Abinesh',
    role: 'Faculty & Support',
    bio: 'Ensuring interactive student support and doubt resolution.',
    fullBio:
      'Mr. S. Abinesh serves as faculty and head of student academic support at Markmates. Known for his patience and interactive approach, Abinesh conducts live doubt-clearing sessions, monitors weekly practice submissions, and manages student diagnostic check-ins. He ensures no student is left behind in biology concepts and test revision.',
    qualification: 'M.Sc. Life Sciences, B.Ed.',
    experience: '7+ Years in Academic Mentorship & Secondary Science',
    subjects: ['12th Grade Biology', 'General Science Aptitude', 'Doubt Resolution Helpdesk'],
    specialization: 'Visual diagrammatic learning, genetics problem-solving, and continuous student follow-up.'
  }
];

export const STEP_FLOWS: StepFlow[] = [
  {
    step: 1,
    title: 'Understand',
    summary: 'Master the underlying logic before memorizing formulas or facts.',
    details:
      'Instead of forcing rote memorization, our educators break each chapter into core mental models. Whether it is Partnership Accounting or UGC NET Indian Logic, we ensure the "why" precedes the "how".',
    keyDeliverable: 'Concept Mind Maps & Core Theoretical Foundations'
  },
  {
    step: 2,
    title: 'Practice',
    summary: 'Reinforce concepts through targeted, progressive question sets.',
    details:
      'Students immediately apply their learning with tiered problem sets — starting from foundational concept checks to standard board/exam level questions, followed by high-difficulty trap questions.',
    keyDeliverable: 'Chapter-wise Graded Practice Worksheets & CBT drills'
  },
  {
    step: 3,
    title: 'Get Guidance',
    summary: 'Receive immediate, personal clarification from subject faculty.',
    details:
      'Doubt accumulation is the biggest hurdle to academic progress. Markmates maintains an active daily doubt resolution cell where educators review incorrect attempts and explain the underlying error.',
    keyDeliverable: 'Dedicated 1-on-1 Faculty Office Hours & Error Diagnostics'
  },
  {
    step: 4,
    title: 'Stay Consistent',
    summary: 'Follow structured weekly schedules with built-in review cycles.',
    details:
      'Consistency is engineered into the Markmates calendar through scheduled weekend mock tests, spaced repetition revision reminders, and regular peer study check-ins.',
    keyDeliverable: 'Weekly Performance Benchmarking & Study Calendars'
  },
  {
    step: 5,
    title: 'Progress',
    summary: 'Transform academic potential into tangible, verifiable milestones.',
    details:
      'Periodic cumulative assessments simulate actual exam conditions, allowing students to track their percentile trajectory, improve time management, and walk into the examination hall with absolute confidence.',
    keyDeliverable: 'Full-Length Proctored Simulations & Centum Readiness Report'
  }
];

export const FAQS = [
  {
    question: 'What is Markmates and what exams do you specialize in?',
    answer:
      'Markmates is an academic platform officially registered under UDYAM-TN-12-0201453 in Tamil Nadu, India. We specialize in competitive examinations like UGC NET (Paper 1 & Paper 2 English) and Higher Secondary school milestones (Class 12 Accounts, Commerce, and Biology) with a focus on affordable, concept-first education.'
  },
  {
    question: 'How does Markmates keep education affordable without compromising quality?',
    answer:
      'We operate with lean institutional overhead and prioritize direct educator-to-student impact rather than exorbitant commercial marketing. Our educators are seasoned teachers who believe quality guidance should never be limited by financial background.'
  },
  {
    question: 'Are classes conducted online or in person?',
    answer:
      'We offer both interactive live online classes with full recorded replay access for students across Tamil Nadu and India, as well as physical weekend batches and doubt clearing clinics at our registered Tamil Nadu center.'
  },
  {
    question: 'What is the "Centum Tracking" program for 12th Grade Commerce?',
    answer:
      'Centum Tracking is our proven methodology led by Mrs. P. Thilagavathy Senthil Pandian (16+ years experience with 20+ centum results). It involves rigorous step-marking audits, proprietary format drills for balance sheets, and eliminating common careless arithmetic and presentation mistakes.'
  },
  {
    question: 'How do I enroll in a batch or book an academic counseling session?',
    answer:
      'You can click the "Contact Us" or "Get Started Now" buttons on our platform, fill in your details, or reach out to our admission support team directly. We schedule an initial diagnostic counseling session free of charge.'
  }
];
