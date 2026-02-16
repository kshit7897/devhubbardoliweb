import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RealisticVisual: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.floating-card',
                { y: 0 },
                {
                    y: -15,
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    stagger: 0.2
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full max-w-2xl mx-auto h-[400px] flex items-center justify-center perspective-[1000px]">
            {/* Main Dashboard Window */}
            <div className="floating-card absolute w-[90%] md:w-[500px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-x-[5deg] rotate-y-[-5deg] z-10 top-10">
                {/* Window Header */}
                <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                {/* Window Content */}
                <div className="p-6 grid grid-cols-3 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 space-y-3">
                        <div className="h-2 w-20 bg-slate-200 rounded"></div>
                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                    </div>
                    {/* Main Area */}
                    <div className="col-span-2 space-y-4">
                        <div className="h-24 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-blue-500 font-bold text-lg">Total Revenue</div>
                                <div className="text-blue-600 text-3xl font-bold">₹12.5L</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
                            <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Mobile App (Left) */}
            <div className="floating-card absolute w-[120px] h-[220px] bg-slate-900 rounded-2xl shadow-xl border-4 border-slate-800 -left-4 md:-left-12 bottom-10 transform rotate-[-10deg] z-20 overflow-hidden bg-opacity-95">
                <div className="w-full h-full bg-white relative">
                    <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center">
                        <div className="w-16 h-4 bg-black rounded-b-lg"></div>
                    </div>
                    <div className="p-4 pt-10 space-y-2">
                        <div className="w-full h-8 bg-blue-100 rounded"></div>
                        <div className="w-full h-20 bg-slate-50 rounded"></div>
                        <div className="w-full h-8 bg-emerald-100 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Floating Analytics Card (Right) */}
            <div className="floating-card absolute w-[180px] bg-white rounded-lg shadow-xl border border-slate-100 -right-2 md:-right-8 top-20 transform rotate-[8deg] z-20 p-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-purple-600 font-bold">AI</div>
                    <div>
                        <div className="text-xs text-slate-500">Analysis</div>
                        <div className="text-sm font-bold text-slate-800">Growth</div>
                    </div>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-purple-500"></div>
                </div>
                <div className="mt-2 text-xs text-green-600 font-semibold">+24.5% ↗</div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
    );
};

export default RealisticVisual;
