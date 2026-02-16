import React from 'react';
import { motion, animate } from 'framer-motion';

const stats = [
    { label: 'Projects Completed', value: 25, suffix: '+' },
    { label: 'Happy Clients', value: 20, suffix: '+' },
    { label: 'Years Experience', value: 3, suffix: '+' },
    { label: 'Hours of Coding', value: 5000, suffix: '+' },
];

const Counter = ({ value }: { value: number }) => {
    const nodeRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(0, value, {
            duration: 2,
            onUpdate(value) {
                node.textContent = Math.round(value).toString();
            },
        });

        return () => controls.stop();
    }, [value]);

    return <span ref={nodeRef} />;
};


const Stats: React.FC = () => {
    return (
        <section className="py-12 bg-slate-50 border-y border-slate-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-neon-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                                <Counter value={stat.value} />{stat.suffix}
                            </div>
                            <div className="text-slate font-medium text-sm md:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
