import React, { useState, useEffect, useMemo } from 'react';
import CodeBackground from './CodeBackground';

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Typewriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (index >= words.length) return;

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        // Add a pause before typing the next word
        setTimeout(() => {}, 500); 
      } else {
        // Slower deleting speed
        setTimeout(() => setSubIndex((prev) => prev - 1), 50);
      }
    } else {
      if (subIndex === words[index].length) {
        // Longer pause when word is fully typed
        setTimeout(() => setIsDeleting(true), 2500);
      } else {
        // Normal typing speed
        setTimeout(() => setSubIndex((prev) => prev + 1), 100);
      }
    }
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="text-neon-blue">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};


const Hero: React.FC<SectionProps> = ({ sectionRef }) => {
  const wordsToAnimate = useMemo(() => [
    "Business Websites",
    "Web Apps & Dashboards",
    "Startups & MVPs",
    "Custom Web Development",
    "DevHub Bardoli",
  ], []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden"
    >
      <CodeBackground />
      <div className="absolute inset-0 bg-grid-slate/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]"></div>
      <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-neon-blue/10 rounded-full blur-3xl -top-10 -left-10"></div>
      <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-neon-blue/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-light-slate leading-tight mb-4 min-h-[144px] md:min-h-0 flex items-center justify-center">
          <span className="inline-block">
            Build • Code • Launch with <br className="hidden md:block" />
            <Typewriter words={wordsToAnimate} />
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate max-w-3xl mx-auto mb-8">
          Building websites, web apps and dashboards for businesses, startups and students.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 bg-neon-blue text-dark-navy font-semibold rounded-lg shadow-lg shadow-neon-blue/20 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-105"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;