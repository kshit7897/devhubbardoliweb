import React, { useState } from 'react';
import { EnvelopeIcon, PaperAirplaneIcon, SpinnerIcon, WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from './Icons';

declare global {
    interface Window {
        emailjs: any;
    }
}

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Contact: React.FC<SectionProps> = ({ sectionRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Minor Project',
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
    setStatus('Sending...');
    setIsLoading(true);

    const { name, email, projectType, message } = formData;

    if (!name || !email || !message) {
      setStatus('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    const whatsappMessage = `New Project Inquiry from ${name}\nEmail: ${email}\nProject Type: ${projectType}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/918141547300?text=${encodeURIComponent(whatsappMessage)}`;
    
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID

    window.emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      project_type: projectType,
      message: message,
      to_name: 'Parikshit Chauhan'
    })
      .then(() => {
        setStatus('Message sent successfully! Opening WhatsApp...');
        setFormData({ name: '', email: '', projectType: 'Minor Project', message: '' });
        window.open(whatsappUrl, '_blank');
      }, (err: any) => {
        console.error('FAILED...', err);
        setStatus('Failed to send email. Please try again or contact me directly.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  const FloatingLabelInput: React.FC<{ type: string; name: string; value: string; onChange: (e: any) => void; label: string; required?: boolean }> = ({ type, name, value, onChange, label, required }) => (
    <div className="relative z-0 w-full mb-8 group">
      <input type={type} name={name} id={name} value={value} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-light-slate bg-transparent border-0 border-b-2 border-dark-slate appearance-none focus:outline-none focus:ring-0 focus:border-neon-blue peer" placeholder=" " required={required} />
      <label htmlFor={name} className="peer-focus:font-medium absolute text-sm text-slate duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {label} {required && <span className="text-syntax-pink">*</span>}
      </label>
    </div>
  );

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-4">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-12 rounded"></div>
        
        <div className="max-w-4xl mx-auto bg-dark-navy/30 rounded-lg shadow-lg p-8 md:p-12 border border-dark-slate">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <FloatingLabelInput type="text" name="name" label="Name" value={formData.name} onChange={handleChange} required />
              <FloatingLabelInput type="email" name="email" label="Email" value={formData.email} onChange={handleChange} required />
              
              <div className="relative z-0 w-full mb-8 group">
                <label htmlFor="projectType" className="text-sm text-slate">Project Type</label>
                <select name="projectType" id="projectType" value={formData.projectType} onChange={handleChange} className="w-full mt-1 bg-dark-slate border border-slate/50 text-light-slate rounded-md p-3 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-navy focus:ring-neon-blue">
                  <option>Minor Project</option>
                  <option>Major Project</option>
                  <option>Full Stack Website</option>
                  <option>Documentation / Report</option>
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      Send Message
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
                Have a question or want to work together? Feel free to reach out via email, WhatsApp, or connect with me on social media.
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
                  <a href="https://www.instagram.com/devhub.bardoli/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110"><InstagramIcon className="w-7 h-7" /></a>
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