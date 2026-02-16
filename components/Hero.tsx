import React, { useState, useEffect, useMemo } from 'react';

import RealisticVisual from './RealisticVisual';

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
        setTimeout(() => { }, 500);
      } else {
        setTimeout(() => setSubIndex((prev) => prev - 1), 50);
      }
    } else {
      if (subIndex === words[index].length) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else {
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
      className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden py-20"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-slate-50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="absolute w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -top-40 -right-40 -z-10"></div>
      <div className="absolute w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl bottom-0 -left-20 -z-10"></div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-neon-blue text-sm font-semibold mb-6">
            Available for New Projects
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-light-slate leading-tight mb-10">
            Build. Code. Launch with{' '}
            <span className="relative inline-flex flex-col h-[1.2em] sm:h-auto align-top">
              {/* Invisible Placeholder to reserve maximum width/height */}
              <span className="invisible opacity-0 select-none text-center lg:text-left">Custom Web Development</span>

              {/* Actual Animated Text Overlay with alignment fix */}
              <span className="absolute top-0 left-0 w-full h-full flex justify-center lg:justify-start">
                <Typewriter words={wordsToAnimate} />
              </span>
            </span>
          </h1>
          <p className="text-lg text-slate max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            We build professional websites, custom web apps, and data dashboards for businesses in Bardoli and beyond.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-8 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-lg shadow-neon-blue/30 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-neon-blue hover:text-neon-blue transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Realistic Visual */}
        <div className="relative mt-12 lg:mt-0">
          <RealisticVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;