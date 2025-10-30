
import type { ReactNode } from 'react';

export interface NavLink {
  id: string;
  title: string;
}

export interface Service {
  // FIX: Use the imported `ReactNode` type.
  icon: ReactNode;
  title: string;
  price: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}
