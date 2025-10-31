import type { NavLink, Project, Review } from './types';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'projects', title: 'Projects' },
  { id: 'reviews', title: 'Reviews' },
  { id: 'contact', title: 'Contact' },
];

export const PROJECTS: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce website with product listings, cart, and checkout functionalities, built with React and Tailwind CSS.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
      githubUrl: 'https://github.com/kshit7897',
      liveUrl: '#',
      imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase skills and projects, featuring a modern design and smooth animations.',
      techStack: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/kshit7897',
      liveUrl: '#',
      imageUrl: 'https://images.unsplash.com/photo-1559028006-44d08a240369?q=80&w=1200&auto=format&fit=crop',
    },
    {
        title: 'Task Management App',
        description: 'A Kanban-style task management application that allows users to create, organize, and track their tasks through different stages.',
        techStack: ['React', 'Vite', ' Zustand', 'Appwrite'],
        githubUrl: 'https://github.com/kshit7897',
        liveUrl: '#',
        imageUrl: 'https://images.unsplash.com/photo-1547480053-7d174f67b557?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Blogging Platform',
        description: 'A simple and clean blogging platform where users can read, write, and publish articles. Includes markdown support.',
        techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Contentlayer'],
        githubUrl: 'https://github.com/kshit7897',
        liveUrl: '#',
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
      },
  ];

  export const REVIEWS: Review[] = [
    {
        name: 'Amit Patel',
        source: 'BCA Student, Bardoli',
        quote: "My final year project turned out amazing. Parikshit bhai's guidance was excellent and I learned a lot about professional coding.",
    },
    {
        name: 'Nita Sharma',
        source: 'Business Owner, Surat',
        quote: "I got a fantastic website for my business. The design is modern and very professional. Fully satisfied with their work!",
    },
    {
        name: 'Ravi Singh',
        source: 'Engineering Student, Bardoli',
        quote: "I was stuck with my college project. His mentorship was a game-changer. The final project was perfect and I scored an A+!",
    },
    {
        name: 'Isha Desai',
        source: 'Diploma Student, Surat',
        quote: "The best part was how they understood my idea. Project was delivered on time. Very happy with the support.",
    },
    {
        name: 'Ankit Mehta',
        source: 'MCA Final Year, Bardoli',
        quote: "My full-stack project was very complex, but they handled it expertly. The code quality is top-class. Highly professional.",
    },
  ];