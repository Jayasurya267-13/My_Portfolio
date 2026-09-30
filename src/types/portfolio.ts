export type TechIdentity = 'VLSI' | 'HARDWARE' | 'SOFTWARE' | 'EMBEDDED' | 'AI' | 'RF';

export interface ProjectMetric {
  label: string;
  value: string;
  status: 'nominal' | 'calibrated' | 'target' | 'active';
}

export interface ProjectDetail {
  id: string;
  title: string;
  fullTitle: string;
  category: string;
  primaryIdentity: TechIdentity[];
  tagline: string;
  status: 'COMPLETED' | 'IN DEVELOPMENT' | 'PLANNED / PROTOTYPE';
  problem: string;
  approach: string;
  technology: string[];
  implementation: string[];
  resultsStatus: string;
  futureWork: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  metrics: ProjectMetric[];
  accentColor: string; // Hex or CSS color
}

export interface SkillItem {
  name: string;
  category: 'VLSI / DIGITAL' | 'HARDWARE / EMBEDDED' | 'SOFTWARE / AI';
  descriptor: string;
  tags: string[];
  visualType: 'rtl' | 'logic' | 'mcu' | 'rf' | 'code' | 'neural' | 'git';
  codeSnippet?: string;
}

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  category: 'INTERNSHIP / EXPOSURE' | 'CREDENTIAL' | 'ALGORITHMS';
  description: string;
  badges: string[];
  statusNote: string;
  metricPlaceholder?: {
    key: string;
    label: string;
    value: string;
    isEditablePlaceholder: boolean;
  };
}

export interface CampusActivity {
  id: string;
  name: string;
  role: string;
  scope: string;
  description: string;
  tags: string[];
}

export interface ProfileConfig {
  name: string;
  tagline: string;
  identityHeadline: string;
  subHeadline: string;
  institution: string;
  degree: string;
  currentStatus: string;
  location: string;
  coordinates: string;
  emailPlaceholder: string;
  resumePdfPath: string;
  photoPath: string;
  socials: {
    github: { username: string; url: string; label: string };
    linkedin: { username: string; url: string; label: string };
    leetcode: { username: string; url: string; label: string };
  };
}
