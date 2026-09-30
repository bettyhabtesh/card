export const profile = {
  initials: "BH",
  name: "Bethelhem Habtamu",
  firstName: "Bethelhem",
  lastName: "Habtamu",
  role: "Frontend Developer",
  tagline: "Building beautiful, fast and user-focused web experiences.",
  personalTouch: "Code with intention. Design with personality.",
  location: "Ethiopia",
  availability: "Open to working globally",
  email: "bettyhabtesh@gmail.com",
  github: "https://github.com/bettyhabtesh",
  linkedin: "https://www.linkedin.com/in/bethelhem-habtamu",
  portfolio: "https://bettyhabtesh.vercel.app",
  siteUrl: "https://bettyhabtesh-card.vercel.app",
  ctaHeadline: "Let's build something great.",
} as const;

export type ContactLink = {
  id: string;
  label: string;
  href: string;
  external: boolean;
  icon: "mail" | "github" | "linkedin" | "link";
};

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
    icon: "mail",
  },
  {
    id: "github",
    label: "GitHub",
    href: profile.github,
    external: true,
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.linkedin,
    external: true,
    icon: "linkedin",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: profile.portfolio,
    external: true,
    icon: "link",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "UI/UX",
  "Responsive Design",
  "Performance",
] as const;

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: "ethiopian-national-lottery",
    name: "Ethiopian National Lottery",
    description:
      "Large-scale lottery platform built with React and Next.js.",
    technologies: ["React", "Next.js", "TypeScript"],
    href: profile.portfolio,
  },
  {
    id: "tamcon-lottery-cloud",
    name: "TAMCON Lottery Cloud",
    description:
      "Multi-tenant lottery and gaming SaaS frontend platform.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    href: profile.portfolio,
  },
  {
    id: "cool-cute-react-time-picker",
    name: "cool-cute-react-time-picker",
    description: "Open-source React time picker published to npm.",
    technologies: ["React", "TypeScript", "npm"],
    href: "https://www.npmjs.com/package/cool-cute-react-time-picker",
  },
];
