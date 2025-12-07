import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Taeheon Roh",
  enName: "노태헌",
  pronunciation: "[Pronunciation: \"Teh-hon\"]",
  role: "Software Engineer",
  birthdate: "1999. 02. 16",
  intro: `Hello! I am a Software Engineer at **Samsung Electronics GTR (Global Technology Research)**. My research interests lie in **Reinforcement Learning** and **Robot Learning**.
  
  When I was little, I wanted to become one of the cool robots I saw in cartoons. I eventually learned that wasn’t quite possible—but I still believe robots can become our friendly and safe companions.
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
      date: 'Mar. 2018 - Feb. 2024',
      title: 'Ajou University',
      gpa: '4.22/4.5 (Major: 4.39/4.5)',
      description: 'Mechanical Engineering',
      description2: 'Software and Computer Engineering',
    }
  ],
  work: [
    {
      id: 'w1',
      date: 'Oct. 2024 - Present',
      title: 'Global Technology Research, Samsung Electronics',
      role: 'Software Engineer',
      description: 'Developing control systems for production equipment and industrial robots',
    }
  ],
  projects: [
    {
      id: 'p1',
      date: 'May. 2025 - Present',
      title: 'Adaptive Exploration in High-Dimensional Action Spaces',
      description: 'Title: Element-wise Action Importance Estimation for Adaptive Exploration in High-Dimensional Action Spaces (personal project)',
      links: [
        { text: "code", url: "https://github.com/tae-roh/eain" },
      ]
    },
    {
      id: 'p2',
      date: 'Jun. 2022 - Aug. 2022',
      title: 'Development of a device for the visually impaired utilizing object detection',
      description: 'Award: Excellence Prize at the ICT Smart Device National Competition 2022',
    }
  ],
  skills: [
    { name: "Python", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "C++", level: 80 }
  ],
  awards: [
    {
      id: "a1",
      title: "Ajou University Award",
      issuer: "Ajou University",
      date: "Feb. 2024",
      description: "Only one graduate in the College of Engineering with outstanding performance during college years"
    },
    {
      id: "a2",
      title: "Daewoo Scholarship",
      issuer: "College of Engineering, Ajou University",
      date: "Spring 2022, Fall 2022 (2 times)",
      description: "Ranked 1st in the College of Engineering based on semester GPA"
    },
    {
      id: "a3",
      title: "Yulgok Scholarship",
      issuer: "Department of Mechanical Engineering, Ajou University",
      date: "Fall 2023",
      description: "Ranked 1st in the Department based on semester GPA"
    },
    {
      id: "a4",
      title: "Guwon Scholarship",
      issuer: "Guwon Scholarship Foundation",
      date: "Spring 2022, Fall 2022 (2 times)",
      description: "Scholarship for academic excellence"
    },
    {
      id: "a5",
      title: "Dean’s List",
      issuer: "Ajou University",
      date: "Fall 2021 - Fall 2023 (5 times)",
    },
    {
      id: "a6",
      title: "Excellence Prize",
      issuer: "ICT Smart Device National Competition",
      date: "Aug. 2022",
      description: "Competition held by the Ministry of Science and ICT"
    },
    {
      id: "a7",
      title: "Participation Prize",
      issuer: "Precision Engineering Creativity Competition",
      date: "Nov. 2021",
      description: "Competition held by the Korean Society for Precision Engineering (KSPE)"
    }

  ]
};