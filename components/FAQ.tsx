import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = [
  {
    question: "What services does DevHub Bardoli provide?",
    answer: "DevHub Bardoli is a professional IT company offering custom web development, ERP software development, CRM systems, inventory management solutions, and complete business automation services. We build scalable digital solutions designed to improve efficiency, productivity, and long-term business growth."
  },
  {
    question: "Do you develop customized ERP and business software?",
    answer: "Yes. We specialize in custom ERP development and tailored business software solutions based on your workflow, industry requirements, and operational goals. Every system is designed to be secure, scalable, and optimized for performance."
  },
  {
    question: "How long does it take to develop a website or ERP system?",
    answer: (
      <>
        <p className="mb-2">Project timelines depend on complexity and feature scope.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Professional business websites:</strong> 2–4 weeks</li>
          <li><strong>Custom web applications:</strong> 4–8 weeks</li>
          <li><strong>ERP software systems:</strong> 6–12 weeks</li>
        </ul>
        <p className="mt-2">We provide a structured development roadmap after a detailed requirement analysis.</p>
      </>
    )
  },
  {
    question: "Do you provide ongoing support and maintenance services?",
    answer: "Yes. We offer post-launch support, software maintenance, system upgrades, security updates, and performance optimization services to ensure your digital infrastructure runs smoothly and remains future-ready."
  },
  {
    question: "Why choose DevHub Bardoli as your IT partner?",
    answer: "DevHub Bardoli focuses on building scalable, secure, and performance-driven digital systems. We combine technical expertise with structured business understanding to deliver enterprise-grade software solutions that support sustainable growth."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-neon-blue">Questions</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-medium text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neon-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 border-t border-slate-100 bg-slate-50 text-slate-700">
                    <div className="pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
