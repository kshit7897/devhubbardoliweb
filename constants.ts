
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
    title: '🎓 EduTrack - Student Management',
    description: 'A comprehensive platform for educational institutions to manage student data, track attendance, and monitor academic progress efficiently.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kshit7897',
    liveUrl: 'https://edutrack-three-sigma.vercel.app/',
    imageUrl: '/assets/images/edutrack.png',
  },
  {
    title: '🛒 ShopZone - E-commerce Platform',
    description: 'A modern, feature-rich e-commerce website with product catalogs, a shopping cart, and a seamless checkout experience.',
    techStack: ['Next.js', 'Redux Toolkit', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kshit7897',
    liveUrl: 'https://shop-zone-sable.vercel.app/',
    imageUrl: '/assets/images/shopzone.png',
  },
  {
    title: '🎬 CineSeat - Movie Ticket Booking',
    description: 'A movie ticket booking application that allows users to browse movies, view showtimes, and book seats in their favorite theaters.',
    techStack: ['React', 'Firebase', 'TMDB API', 'Styled Components'],
    githubUrl: 'https://github.com/kshit7897',
    liveUrl: 'https://cinesite-chi.vercel.app/',
    imageUrl: '/assets/images/cineseat.png',
  },
  {
    title: '🧘 MindSpace - Meditation & Wellness',
    description: 'A wellness application designed to help users relax and meditate with guided sessions, calming sounds, and progress tracking.',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/kshit7897',
    liveUrl: 'https://mindspace-pearl.vercel.app/',
    imageUrl: '/assets/images/mindspace.png',
  },
];
