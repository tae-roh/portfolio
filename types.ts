export interface Link {
  text: string;
  url: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  gpa?: string;
  description: string;
  description2?: string;
  role?: string; // For work experience
  location?: string;
  links?: Link[]; // For "paper | code | thread" style links
}

export interface Skill {
  name: string;
  level: number;
}

export interface ContactInfo {
  type: 'phone' | 'email' | 'blog' | 'github' | 'address' | 'twitter' | 'linkedin';
  value: string;
  label: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  url: string;
}

export interface ResumeData {
  name: string;
  enName: string;
  pronunciation: string;
  role: string;
  birthdate: string;
  intro: string;
  contacts: ContactInfo[];
  education: TimelineItem[];
  work: TimelineItem[];
  projects: TimelineItem[];
  skills: Skill[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}