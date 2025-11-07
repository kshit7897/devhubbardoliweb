import React from 'react';

const ThankYou: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-dark-navy to-dark-space">
      <main className="max-w-3xl p-8 rounded-lg bg-dark-navy/60 border border-dark-slate text-center">
        <h1 className="text-3xl font-bold text-light-slate mb-4">Thanks — I got your message</h1>
        <p className="text-slate mb-6">I appreciate you reaching out. I’ll read your message and reply within 24–48 hours. If this is urgent, contact me on WhatsApp: <a href="https://wa.me/918141547300" className="text-neon-blue">+91 81415 47300</a></p>
        <a href="/" className="inline-block px-6 py-3 bg-neon-blue text-dark-navy rounded-lg font-semibold">Return to site</a>
      </main>
    </div>
  );
};

export default ThankYou;
