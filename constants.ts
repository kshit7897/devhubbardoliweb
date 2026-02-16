import type { NavLink, Project, Review } from "./types";

export const NAV_LINKS: NavLink[] = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "projects", title: "Projects" },
  { id: "about", title: "About" },
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
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
  },
];

export const REVIEWS: Review[] = [
  {
    name: "Raj Hardware & Tools",
    source: "Business Owner, Bardoli",
    quote:
      "We needed a simple inventory system for our hardware shop. Parikshit bhai understood our requirement perfectly and built a system that is very easy to use. Now we track stock on our mobile.",
  },
  {
    name: "Priya Patel",
    source: "MCA Student, Surat",
    quote:
      "I was struggling with my Final Year Project on React & Node.js. The guidance here is the best. Not just the code, but I learned how to deploy and present it. Got an O grade!",
  },
  {
    name: "GreenLeaf Nursery",
    source: "Local Business, Kamrej",
    quote:
      "Our nursery website looks lively and professional. Customers can now see our plants online and contact us directly on WhatsApp. Business has increased in the last 3 months.",
  },
  {
    name: "Rahul Mistry",
    source: "Engineering Student, Bardoli",
    quote:
      "For my college project, I wanted something unique. We built an AI-based attendance system. The logic and explanation given were so clear that my external viva went very smooth.",
  },
  {
    name: "Dr. Anjali Desai",
    source: "Clinic Owner, Bardoli",
    quote:
      "Professional and timely service. They set up my clinic's appointment booking page and it works flawlessly. Highly recommended for any doctor wanting a digital presence.",
  },
];
