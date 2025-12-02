import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Taeheon Roh",
  enName: "노태헌",
  pronunciation: "[Pronunciation: \"Teh-hon\"]",
  role: "Software Engineer",
  birthdate: "1999. 05. 20",
  intro: `Hello! I am a Software Engineer at **Samsung Electronics GTR (Global Technology Research)**. My research interests lie in **Reinforcement Learning** and **Robotics**.
  
  I dream of a world where robots and AI become a natural part of everyday life.
  `,
  contacts: [
    {
      type: 'email',
      value: 'taeheon.r@gmail.com',
      label: 'Email',
      link: 'mailto:taeheon.r@gmail.com'
    },
    {
      type: 'github',
      value: 'Github',
      label: 'Github',
      link: 'https://github.com/tae-roh'
    }
  ],
  education: [
    {
      id: 'e1',
      date: '2018. 03 - 2024. 02',
      title: 'Ajou University',
      gpa: '4.22/4.5 (Major: 4.39/4.5)',
      description: 'Mechanical Engineering',
      description2: 'Software and Computer Engineering',
    }
  ],
  work: [
    {
      id: 'w1',
      date: '2024. 10 - Present',
      title: 'Global Technology Research, Samsung Electronics',
      role: 'Software Engineer',
      description: 'Developing control systems for production equipment and industrial robots',
    }
  ],
  projects: [
    {
      id: 'p1',
      date: '2025. 05 - Present',
      title: 'Stable Exploration in High-Dimensional Action Spaces*',
      description: 'Title: Element-wise Action Importance Estimation for Adaptive Exploration in High-Dimensional Action Spaces (personal project)',
    },
    {
      id: 'p2',
      date: '2022. 06 - 2022. 08',
      title: 'Development of a device for the visually impaired utilizing object detection',
      description: 'Award: Excellence Prize at the ICT Smart Device National Competition 2022',
    }
  ],
  skills: [
    { name: "Python", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "C++", level: 80 },
    { name: "Reinforcement Learning", level: 85 },
    { name: "Robotics", level: 80 }
  ]
};