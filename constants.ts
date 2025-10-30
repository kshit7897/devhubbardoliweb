
import type { NavLink, Project } from './types';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Mamaearth Clone',
    description: 'A responsive e-commerce front-end clone of the popular beauty brand Mamaearth, focusing on product display and user interaction.',
    techStack: ['React', 'Tailwind CSS', 'React Router'],
    githubUrl: 'https://github.com/parikshit-chauhan/mamaearth-clone',
    liveUrl: 'https://mamaearth-clone-pc.netlify.app/',
    imageUrl: 'https://picsum.photos/seed/mamaearth/600/400',
  },
  {
    title: 'Crypto Dashboard',
    description: 'A real-time cryptocurrency dashboard providing up-to-date prices, market caps, and historical data charts for various coins.',
    techStack: ['React', 'Chart.js', 'CoinGecko API'],
    githubUrl: 'https://github.com/parikshit-chauhan',
    liveUrl: '#',
    imageUrl: 'https://picsum.photos/seed/crypto/600/400',
  },
  {
    title: 'Voot OTT App Clone',
    description: 'A clone of the Voot OTT platform, showcasing a dynamic grid of movies and TV shows with a focus on a clean, modern UI.',
    techStack: ['React', 'Redux', 'Styled Components'],
    githubUrl: 'https://github.com/parikshit-chauhan',
    liveUrl: '#',
    imageUrl: 'https://picsum.photos/seed/voot/600/400',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a mobile-first approach and smooth animations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/parikshit-chauhan/portfolio-v2',
    liveUrl: 'https://parikshitchauhan.dev/',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
  },
];
