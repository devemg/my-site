import { ExperienceItem } from "@models/experience-item";

const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    role: "React Developer",
    company: "Elaniin",
    location: "Guatemala City - Remote",
    interval: "July 2025 - Present",
    description:
      "Delivered high-performance interfaces for a high-demand, high-complexity web application, translating Figma specifications into scalable React components using JavaScript, TypeScript, HTML, and CSS.",
    highlights: [
      "Built reusable UI patterns and design-system ready components.",
      "Integrated APIs and supported performance optimization efforts.",
      "Worked in Agile ceremonies with designers, product managers, and engineers.",
    ],
    isCurrent: true,
  },
  {
    id: 2,
    role: "Senior Frontend Developer",
    company: "Wotdev",
    location: "Guatemala City - Hybrid",
    interval: "July 2021 - March 2025",
    description:
      "Developed seamless streaming experiences for web and SmartTV platforms, improving scalability and user experience across OTT products.",
    highlights: [
      "Translated Figma-based UI specifications into responsive React and Angular components.",
      "Built and maintained SDKs for integrations across multiple client platforms.",
      "Contributed to performance tuning, platform maintenance, and security best practices.",
    ],
    secondaryRoles: ["Senior Browser-Based Smart TV Device Developer", "Frontend Tech Lead Developer"],
  },
  {
    id: 3,
    role: "Angular Developer",
    company: "YaVoy",
    location: "Guatemala City - Remote",
    interval: "February 2021 - June 2021",
    description:
      "Created dynamic, business-focused UI layouts with a strong emphasis on usability, responsiveness, and maintainable code.",
    highlights: [
      "Simplified navigation flows to improve user engagement and platform efficiency.",
      "Delivered reusable UI code aligned with Agile and continuous delivery practices.",
    ],
  },
  {
    id: 4,
    role: "Web Developer",
    company: "Ideas4Software",
    location: "Guatemala City - Remote",
    interval: "July 2020 - February 2021",
    description:
      "Led the design and development of a POS system for small and medium businesses while contributing to cross-platform and hybrid mobile work.",
    highlights: [
      "Built core POS functionality for small and medium business workflows.",
      "Contributed to hybrid mobile application features and platform integration.",
      "Streamlined delivery using templates and established Agile workflows.",
    ],
  },
];

export const getDevemgExperience = (): ExperienceItem[] => experienceItems;

export const devemgExperience: ExperienceItem[] = getDevemgExperience();

