import React, { useState, useRef, useEffect, useCallback } from 'react';
import { REVIEWS } from '../constants';
import type { Review } from '../types';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Reviews: React.FC<SectionProps> = ({ sectionRef }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  // FIX: In a browser environment, `setInterval` returns a `number`.
  // The type `NodeJS.Timeout` is for Node.js environments and is not available here.
  const intervalRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  const startAutoScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      if (sliderRef.current) {
        // If scrolled to the end, snap back to the start
        if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 3000); // Change slide every 3 seconds
  }, []);

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isHovered, startAutoScroll]);
  
  return (
    <section id="reviews" ref={sectionRef} className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-4">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-12 rounded"></div>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => { setIsHovered(true); stopAutoScroll(); }}
          onMouseLeave={() => { setIsHovered(false); startAutoScroll(); }}
        >
          <div ref={sliderRef} className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
            {REVIEWS.map((review: Review, index: number) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 snap-center"
              >
                <div className="flex flex-col h-full bg-dark-navy/50 border border-dark-slate rounded-lg p-8 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-neon-blue/20 hover:border-neon-blue/50">
                    <QuoteIcon className="w-10 h-10 text-neon-blue/50 mb-4" />
                    <div className="flex-grow mb-4">
                        <p className="text-slate italic leading-relaxed">"{review.quote}"</p>
                    </div>
                    <div className="mt-auto">
                        <p className="font-bold text-light-slate text-lg">{review.name}</p>
                        <p className="text-sm text-neon-blue">{review.source}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Manual Controls */}
          <button 
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-dark-slate/50 hover:bg-neon-blue text-white rounded-full p-2 transition-all duration-300 z-10 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-dark-slate/50 hover:bg-neon-blue text-white rounded-full p-2 transition-all duration-300 z-10 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  );
};

export default Reviews;