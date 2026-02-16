import React, { useState } from 'react';
import { EnvelopeIcon, PaperAirplaneIcon, SpinnerIcon, WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from './Icons';

// Moved FloatingLabelInput outside to prevent re-rendering on every keystroke, which fixes the focus loss issue.
const FloatingLabelInput: React.FC<{ type: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; label: string; required?: boolean }> = ({ type, name, value, onChange, label, required }) => (
  <div className="relative z-0 w-full mb-8 group">
    <input type={type} name={name} id={name} value={value} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-light-slate bg-transparent border-0 border-b-2 border-dark-slate appearance-none focus:outline-none focus:ring-0 focus:border-neon-blue peer" placeholder=" " required={required} />
    <label htmlFor={name} className="peer-focus:font-medium absolute text-sm text-slate duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {label} {required && <span className="text-syntax-pink">*</span>}
    </label>
  </div>
);

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Contact: React.FC<SectionProps> = ({ sectionRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Websites & Landing Pages',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    // Use Web3Forms AJAX API to send the email from the client.
    // Provided access key (client-side key): 4def2cf9-2d68-488c-8897-c405f5dad09d
    const endpoint = 'https://api.web3forms.com/submit';

    const payload = {
      access_key: '4def2cf9-2d68-488c-8897-c405f5dad09d',
      subject: 'New message from DevHub website',
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      message: formData.message,
      // turn off captcha if not in use
      captcha: false,
    } as Record<string, unknown>;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        // Web3Forms returns {success: true} on success
        if (json && (json.success === true || json.success === 'true')) {
          setFormData({ name: '', email: '', projectType: 'Websites & Landing Pages', message: '' });
          setIsLoading(false);
          window.history.pushState({}, '', '/thank-you');
          window.dispatchEvent(new PopStateEvent('popstate'));
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch((err) => {
        console.error('Web3Forms submit error', err);
        // Show an error to the user; do not fallback to native FormSubmit anymore.
        setStatus('Failed to submit the form. Please try again later or email devhubbardoli@gmail.com');
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-12 md:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-4">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-6 rounded"></div>
        <p className="text-center text-slate max-w-2xl mx-auto mb-8">Tell me about your website, web app, or MVP — I’ll reply with a quote and next steps for businesses, startups, and students.</p>

        <div className="max-w-4xl mx-auto bg-dark-navy/30 rounded-lg shadow-lg p-8 md:p-12 border border-dark-slate">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left Column: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <FloatingLabelInput type="text" name="name" label="Name" value={formData.name} onChange={handleChange} required />
              <FloatingLabelInput type="email" name="email" label="Email" value={formData.email} onChange={handleChange} required />

              <div className="relative z-0 w-full mb-8 group">
                <label htmlFor="projectType" className="text-sm text-slate">Service</label>
                <select name="projectType" id="projectType" value={formData.projectType} onChange={handleChange} className="w-full mt-1 bg-dark-slate border border-slate/50 text-light-slate rounded-md p-3 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-navy focus:ring-neon-blue">
                  <option>Websites & Landing Pages</option>
                  <option>Web Apps & Dashboards</option>
                  <option>Startup MVP</option>
                  <option>Documentation & Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-light-slate bg-transparent border-0 border-b-2 border-dark-slate appearance-none focus:outline-none focus:ring-0 focus:border-neon-blue peer" placeholder=" "></textarea>
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-slate duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Message <span className="text-syntax-pink">*</span>
                </label>
              </div>

              <div className="text-left pt-2">
                <button type="submit" disabled={isLoading} className="inline-flex items-center gap-2 px-8 py-3 bg-neon-blue text-dark-navy font-semibold rounded-lg shadow-lg shadow-neon-blue/20 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isLoading ? (
                    <>
                      <SpinnerIcon className="w-5 h-5" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      Request Quote
                    </>
                  )}
                </button>
              </div>
              {status && <p className={`text-left mt-4 text-sm ${status.includes('Failed') ? 'text-syntax-pink' : 'text-neon-blue'}`}>{status}</p>}
            </form>

            {/* Right Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-light-slate mb-4">Contact Information</h3>
              <p className="text-slate mb-6">
                Need a website, web app or support for your project? Reach out for a quote, timeline, or a quick consultation — available for businesses, startups and students.
              </p>
              <ul className="space-y-4 text-slate">
                <li className="flex items-center gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-neon-blue" />
                  <a href="mailto:devhubbardoli@gmail.com" className="hover:text-neon-blue transition-colors">devhubbardoli@gmail.com</a>
                </li>
                <li className="flex items-center gap-4">
                  <WhatsAppIcon className="w-6 h-6 text-neon-blue" />
                  <a href="https://wa.me/918141547300" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">+91 81415 47300</a>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-light-slate mb-4">Find me on</h4>
                <div className="flex space-x-6">
                  <a href="https://github.com/kshit7897" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110"><GitHubIcon className="w-7 h-7" /></a>
                  <a href="https://www.linkedin.com/in/parikshit-chauhan-245056242" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110"><LinkedInIcon className="w-7 h-7" /></a>
                  <a href="https://www.instagram.com/devhubbardoli?utm_source=qr&igsh=MWdkNGN1dGtwb3hqeg==" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110"><InstagramIcon className="w-7 h-7" /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;