import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const sectionRefs = useMemo(
    () =>
      NAV_LINKS.reduce<{ [key: string]: React.RefObject<HTMLElement> }>(
        (acc, link) => {
          acc[link.id] = React.createRef<HTMLElement>();
          return acc;
        },
        {}
      ),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(link => link.id);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          const targetId = href.substring(1);
          if (sectionIds.includes(targetId)) {
            e.preventDefault();
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              const headerOffset = 64; // h-16 in Tailwind = 4rem = 64px
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-dark-navy to-dark-space">
      <Header activeSection={activeSection} />
      <main className="flex-grow relative z-10">
        <Hero sectionRef={sectionRefs.home} />
        <About sectionRef={sectionRefs.about} />
        <Services sectionRef={sectionRefs.services} />
        <Projects sectionRef={sectionRefs.projects} />
        <Contact sectionRef={sectionRefs.contact} />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default App;