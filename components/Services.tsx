import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CodeIcon, WebIcon, DocumentIcon } from './Icons';
import type { Service } from '../types';

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

// --- Animated Visual Components ---

const WebsiteScroll = () => (
  <div className="w-full h-full bg-slate-100 rounded-t-xl overflow-hidden relative border border-slate-200">
    {/* Browser Header */}
    <div className="h-6 bg-white border-b border-slate-200 flex items-center px-3 gap-1.5">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <div className="ml-2 w-full h-3 bg-slate-100 rounded-full opacity-50" />
    </div>
    {/* Scrolling Content */}
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        animate={{ y: [0, -120, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-full space-y-3 p-3"
      >
        <div className="w-full h-24 bg-white rounded shadow-sm border border-slate-100 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-neon-blue/10" />
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 h-20 bg-white rounded shadow-sm border border-slate-100" />
          <div className="w-1/2 h-20 bg-white rounded shadow-sm border border-slate-100" />
        </div>
        <div className="w-full h-16 bg-white rounded shadow-sm border border-slate-100" />
        <div className="w-full h-32 bg-white rounded shadow-sm border border-slate-100" />
        <div className="flex gap-2">
          <div className="w-1/3 h-16 bg-white rounded shadow-sm border border-slate-100" />
          <div className="w-1/3 h-16 bg-white rounded shadow-sm border border-slate-100" />
          <div className="w-1/3 h-16 bg-white rounded shadow-sm border border-slate-100" />
        </div>
      </motion.div>
    </div>
  </div>
);

const DashboardUI = () => (
  <div className="w-full h-full bg-slate-50 flex p-3 gap-2 overflow-hidden">
    {/* Sidebar */}
    <div className="w-1/4 h-full bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col gap-2 p-2">
      <div className="w-full h-6 bg-slate-100 rounded" />
      <div className="w-full h-2 bg-slate-100 rounded mt-2" />
      <div className="w-full h-2 bg-slate-100 rounded" />
      <div className="w-3/4 h-2 bg-slate-100 rounded" />
    </div>
    {/* Main Content */}
    <div className="flex-1 flex flex-col gap-2">
      <div className="w-full h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-between px-2">
        <div className="w-1/3 h-3 bg-slate-100 rounded" />
        <div className="w-6 h-6 rounded-full bg-neon-blue/20" />
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-200 p-2 flex items-end gap-1 relative overflow-hidden">
        {/* Charts */}
        <motion.div animate={{ height: ["40%", "70%", "40%"] }} transition={{ duration: 3, repeat: Infinity }} className="w-1/5 bg-neon-blue/40 rounded-t" />
        <motion.div animate={{ height: ["60%", "30%", "60%"] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }} className="w-1/5 bg-neon-blue/60 rounded-t" />
        <motion.div animate={{ height: ["30%", "80%", "30%"] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="w-1/5 bg-neon-blue/50 rounded-t" />
        <motion.div animate={{ height: ["80%", "50%", "80%"] }} transition={{ duration: 3.2, repeat: Infinity }} className="w-1/5 bg-neon-blue/70 rounded-t" />
        <motion.div animate={{ height: ["50%", "90%", "50%"] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.1 }} className="w-1/5 bg-neon-blue rounded-t" />
      </div>
    </div>
  </div>
);

const RocketVisual = () => (
  <div className="w-full h-full bg-slate-900 overflow-hidden relative flex items-center justify-center">
    {/* Stars */}
    <div className="absolute inset-0">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </div>
    {/* Rocket Trail */}
    <motion.div
      className="absolute bottom-0 w-2 h-20 bg-gradient-to-t from-transparent via-orange-500 to-yellow-300 blur-sm"
      animate={{ height: [60, 100, 60], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 0.5, repeat: Infinity }}
      style={{ left: '50%', translateX: '-50%', translateY: '40px' }}
    />
    {/* Simple Rocket Shape */}
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10"
    >
      <div className="w-8 h-12 bg-white rounded-full relative z-10 border-2 border-slate-200">
        <div className="w-3 h-3 bg-neon-blue rounded-full absolute top-3 left-1/2 -translate-x-1/2 border border-slate-100" />
      </div>
      <div className="absolute bottom-1 -left-2 w-3 h-6 bg-slate-300 rounded-b-lg -z-0 rotate-12" />
      <div className="absolute bottom-1 -right-2 w-3 h-6 bg-slate-300 rounded-b-lg -z-0 -rotate-12" />
    </motion.div>
  </div>
);

const DocVisual = () => (
  <div className="w-full h-full bg-indigo-50 p-4 flex flex-col gap-3 relative overflow-hidden">
    <div className="absolute -right-4 -top-4 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl" />
    <div className="w-1/2 h-3 bg-indigo-200 rounded" />
    <div className="w-3/4 h-2 bg-white rounded shadow-sm opacity-50" />
    <div className="w-full h-2 bg-white rounded shadow-sm opacity-50" />
    <div className="w-5/6 h-2 bg-white rounded shadow-sm opacity-50" />

    <div className="mt-2 flex gap-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        className="h-2 bg-neon-blue/50 rounded"
      />
    </div>
    <div className="flex gap-2 mt-1">
      <div className="w-1/2 h-20 bg-white border border-indigo-100 rounded-lg p-2">
        <div className="w-8 h-8 rounded-full bg-indigo-50 mb-2" />
        <div className="w-full h-1 bg-slate-100 rounded" />
      </div>
      <div className="w-1/2 h-20 bg-white border border-indigo-100 rounded-lg p-2">
        <div className="w-8 h-8 rounded-full bg-indigo-50 mb-2" />
        <div className="w-full h-1 bg-slate-100 rounded" />
      </div>
    </div>
  </div>
);


const servicesData: (Service & { Visual: React.ComponentType })[] = [
  {
    icon: <WebIcon className="w-8 h-8 text-white relative z-10" />,
    title: 'Websites & Landing Pages',
    price: 'Custom Pricing',
    description: 'Professional websites and landing pages to showcase your business, product, or portfolio.',
    Visual: WebsiteScroll
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-white relative z-10" />,
    title: 'Web Apps & Dashboards',
    price: 'Custom Pricing',
    description: 'Data-driven web applications and admin dashboards to help you manage operations.',
    Visual: DashboardUI
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-white relative z-10" />,
    title: 'Startup MVPs',
    price: 'Fast Turnaround',
    description: 'Minimum Viable Products for startups — validate ideas quickly with a lean build.',
    Visual: RocketVisual
  },
  {
    icon: <DocumentIcon className="w-8 h-8 text-white relative z-10" />,
    title: 'Documentation & Support',
    price: 'Starting at ₹299',
    description: 'Project documentation, deployment support, and maintenance plans.',
    Visual: DocVisual
  },
];

const TiltCard = ({ service, index }: { service: Service & { Visual: React.ComponentType }; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const VisualComponent = service.Visual;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[380px] w-full rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
    >
      {/* 3D Content Container */}
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 flex flex-col rounded-2xl bg-white"
      >
        {/* Animated Visual Header */}
        <div
          className="w-full h-52 bg-slate-50 relative overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="absolute inset-0">
            <VisualComponent />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />

          {/* Icons removed as per user request for cleaner 3D look */}
        </div>

        {/* Text Content */}
        <div className="p-6 pt-10 flex flex-col h-full text-left relative z-10 bg-white">
          <h3
            className="text-xl font-bold text-slate-900 mb-1 group-hover:text-neon-blue transition-colors"
            style={{ transform: "translateZ(30px)" }}
          >
            {service.title}
          </h3>

          <p
            className="text-neon-blue font-semibold mb-3 text-xs uppercase tracking-wider"
            style={{ transform: "translateZ(25px)" }}
          >
            {service.price}
          </p>

          <p
            className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3"
            style={{ transform: "translateZ(20px)" }}
          >
            {service.description}
          </p>

          <a
            href="#contact"
            className="mt-auto self-start text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:text-neon-blue transition-colors"
            style={{ transform: "translateZ(30px)" }}
          >
            Start Project <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section id="services" ref={sectionRef} className="py-12 md:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-4">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-4 rounded"></div>
        <p className="text-center text-slate max-w-2xl mx-auto mb-12">
          Web development, MVPs, dashboards, and documentation for businesses, startups and students.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {servicesData.map((service, index) => (
            <div key={index} className="w-full perspective-1000">
              <TiltCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;