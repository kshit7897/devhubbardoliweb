import React from 'react';

const technologies = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Bootstrap  ', icon: 'https://cdn.simpleicons.org/bootstrap/563D7C' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    // { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
    { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/764ABC' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/2D3748' },
    { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'Android', icon: 'https://cdn.simpleicons.org/android/3DDC84' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
];

const TechMarquee: React.FC = () => {
    return (
        <section className="py-8 bg-slate-50 border-b border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 mb-6 text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Trending Technologies We Use
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-12 sm:gap-20 items-center">
                    {/* First set of icons */}
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-500 group-hover:text-slate-800 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {technologies.map((tech, index) => (
                        <div key={`duplicate-${index}`} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-500 group-hover:text-slate-800 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}

                    {/* Triplicate set for wide screens */}
                    {technologies.map((tech, index) => (
                        <div key={`triplicate-${index}`} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-500 group-hover:text-slate-800 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Gradient Masks for fade effect */}
                <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default TechMarquee;
