import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks: React.FC<{className?: string}> = ({className}) => (
    <ul className={className}>
      {NAV_LINKS.map((link: NavLink) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={() => setIsMenuOpen(false)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 ${
              activeSection === link.id
                ? 'text-neon-blue'
                : 'text-light-slate hover:text-neon-blue'
            }`}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-navy/80 backdrop-blur-sm shadow-md shadow-neon-blue/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 text-white font-bold text-xl">
              <span className="text-light-slate">{`</>`}</span>
              <span className="text-neon-blue">DevHub</span>
              <span className="text-light-slate">Bardoli</span>
            </a>
          </div>
          <div className="hidden md:block">
            <NavLinks className="ml-10 flex items-baseline space-x-4" />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate hover:text-white hover:bg-dark-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-navy focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
            <NavLinks className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center" />
        </div>
      )}
    </header>
  );
};

export default Header;