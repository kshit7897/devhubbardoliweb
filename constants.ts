import type { NavLink, Project, Review } from "./types";

export const NAV_LINKS: NavLink[] = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "projects", title: "Projects" },
  { id: "reviews", title: "Reviews" },
  { id: "contact", title: "Contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "EduTrack - Learning Management System",
    description:
      "An interactive platform for managing online courses, tracking student progress, and providing educators with real-time insights.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    githubUrl: "https://github.com/kshit7897",
    liveUrl: "https://edutrackweb.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1584697964154-1c1b1e4c6b29?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "ShopZone - E-Commerce Platform",
    description:
      "A fully functional e-commerce website featuring product listings, cart, checkout, and order management with a responsive design.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    githubUrl: "https://github.com/kshit7897",
    liveUrl: "https://shopzoneweb.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "MindSpace - Task Management App",
    description:
      "A Kanban-style productivity app for creating, organizing, and tracking daily tasks, built for smooth performance and clean UI.",
    techStack: ["React", "Vite", "Zustand", "Appwrite"],
    githubUrl: "https://github.com/kshit7897",
    liveUrl: "https://mindspaceweb.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1547480053-7d174f67b557?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CineSite - Movie Info Platform",
    description:
      "A movie discovery and rating website that lets users explore trending films, read details, and view trailers in a sleek UI.",
    techStack: ["Next.js", "TMDB API", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/kshit7897",
    liveUrl: "https://cinesiteweb.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
  },
];

export const REVIEWS: Review[] = [
  {
    name: "Amit Patel",
    source: "BCA Student, Bardoli",
    quote:
      "My final year project turned out amazing. Parikshit bhai's guidance was excellent and I learned a lot about professional coding.",
  },
  {
    name: "Nita Sharma",
    source: "Business Owner, Surat",
    quote:
      "I got a fantastic website for my business. The design is modern and very professional. Fully satisfied with their work!",
  },
  {
    name: "Ravi Singh",
    source: "Engineering Student, Bardoli",
    quote:
      "I was stuck with my college project. His mentorship was a game-changer. The final project was perfect and I scored an A+!",
  },
  {
    name: "Isha Desai",
    source: "Diploma Student, Surat",
    quote:
      "The best part was how they understood my idea. Project was delivered on time. Very happy with the support.",
  },
  {
    name: "Ankit Mehta",
    source: "MCA Final Year, Bardoli",
    quote:
      "My full-stack project was very complex, but they handled it expertly. The code quality is top-class. Highly professional.",
  },
];
