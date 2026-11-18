/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'DHANASEKARAN S A', // shown in navbar, footer, hero, about
  pageTitle: 'ASSISTANT-TNSC HRD', // browser tab title
  role: 'Assistant-HRD', // footer subtitle
  email: 'dhanasekarandhanasekaran77@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '919487339874',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'B.Tech AI&DS Graduate',
  headline: 'DHANASEKARAN', // big text, use CAPS
  roles: ['Data Analyst', 'AI Enginee'] as [string, string],
  tagline: 'A B.Tech Graduate in Govt Job',
  primaryButton: 'EXPLORE About Me',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'DHANASEKARAN S A',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'Welcome to My Portfolio',
  redWords: ['STATEMENT', 'HERE'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Assistant · HRD · TNSC BANK',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'DHANASEKARAN S A',
  portraitCaption: 'Crew Guy', // small red text under the name on the photo
  paragraphs: [
    'Completed B.Tech on 2025',
    'Joined TNSC Bank on 2026',
  ],
  technologies: ['Python', 'SQL', 'Power BI', 'Advanced MS Office'],
  focus: ['Problem Solving', 'Team Work', 'Technical Support','Team Guidance'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Dhanasekaran005' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/Dhanasekaran' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Python', category: 'Python 3.0', level: 'Advanced' },
  { name: 'Power BI', category: 'App', level: 'Basic' },
  { name: 'Excel', category: 'MS Office', level: 'Proficient' },
  { name: 'Designing', category: 'Canva · Figma', level: 'Proficient' },
  { name: '3D Modeling', category: 'Blender . Maya', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = ['Power BI', 'SQL', 'Python', 'MS Office', 'Canva', 'Figma'];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: '3D Modeling',
    kind: 'Blender',
    title: 'Gaming Objects 3D',
    subtitle: 'AR Games',
    category: '3D Models',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description: 'Two sentences about what this project does, who it is for and what you did.',
    tags: [''],
    // liveUrl: 'https://example.com',
    // repoUrl: 'https://github.com/your-username/project-one',
  },
  {
    id: 'Smart Attendance System Using LBPH Algorithm',
    kind: 'VS Code',
    title: 'Smart AI Attendance System',
    subtitle: 'LBPH Algorithm Using Face Analysis',
    category: 'Python Program With Power BI Dashboard',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description: 'Two sentences about what this project does, who it is for and what you did.',
    tags: ['Tag One', 'Tag Two', 'Tag Three'],
  },
  {
    id: 'project-three',
    kind: 'software',
    title: 'Project Three',
    subtitle: 'One-line subtitle',
    category: 'Category One',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description: 'Two sentences about what this project does, who it is for and what you did.',
    tags: ['Tag One', 'Tag Two', 'Tag Three'],
  },
  {
    id: 'project-four',
    kind: 'software',
    title: 'Project Four',
    subtitle: 'One-line subtitle',
    category: 'Category Two',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description: 'Two sentences about what this project does, who it is for and what you did.',
    tags: ['Tag One', 'Tag Two', 'Tag Three'],
  },
  {
    id: 'project-five',
    kind: 'software',
    title: 'Project Five',
    subtitle: 'One-line subtitle',
    category: 'Category One',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description: 'Two sentences about what this project does, who it is for and what you did.',
    tags: ['Tag One', 'Tag Two', 'Tag Three'],
  },
  {
    id: 'project-six',
    kind: 'software',
    title: 'Project Six',
    subtitle: 'One-line subtitle',
    category: 'Category Two',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description: 'Two sentences about what this project does, who it is for and what you did.',
    tags: ['Tag One', 'Tag Two', 'Tag Three'],
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Service One', priceLabel: 'Starts from', price: '₹0,000', featured: true },
  { id: 'service-2', title: 'Service Two', priceLabel: 'Starts from', price: '₹0,000', featured: false },
  { id: 'service-3', title: 'Service Three', priceLabel: 'From – to', price: '₹0,000 – ₹0,000', featured: false },
  { id: 'service-4', title: 'Service Four', priceLabel: 'From – to', price: '₹0,000 – ₹0,000', featured: false },
  { id: 'service-5', title: 'Service Five', priceLabel: 'From – to', price: '₹0,000 – ₹0,000', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 10, suffix: '+', label: 'Stat One' },
  { id: 'stat-2', value: 5, suffix: '+', label: 'Stat Two' },
  { id: 'stat-3', value: 3, suffix: '+', label: 'Stat Three' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
