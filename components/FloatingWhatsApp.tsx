
import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/918141547300"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
