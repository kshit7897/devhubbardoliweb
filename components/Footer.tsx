import React from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-dark-slate relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/kshit7897" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110 inline-block">
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/parikshit-chauhan-245056242" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110 inline-block">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/devhubbardoli?utm_source=qr&igsh=MWdkNGN1dGtwb3hqeg==" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110 inline-block">
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-slate text-center">
            © {new Date().getFullYear()} DevHub Bardoli | Built by <span className="font-medium text-syntax-orange">Parikshit Chauhan</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;