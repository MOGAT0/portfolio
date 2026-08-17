"use client";

import { Svgicon, IconName } from './SvgIcon';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  description: string;
  year: string;
  iconName : IconName
}

const Experience = () => {
  const experiences : ExperienceItem[] = [
    {
      company: 'Reed Elsevier Philippines',
      role: 'Data Entry & Control Coordinator',
      description: 'Process and verify high volumes of complex records, ensuring maximum system accuracy and data integrity.',
      year: 'Apr 2026 - Present',
      iconName : 'encoder'
    },
    {
      company: 'GS Food Products Trading',
      role: 'Freelance Developer',
      description: 'Engineered an end-to-end mobile POS solution specifically designed to empower small business owners with seamless transaction handling. Optimized stock monitoring by implementing automated inventory tracking, significantly cutting down manual operational hours.',
      year: 'Apr 2025 - Jul 2026',
      iconName : 'mobiledeveloper'
    },
    {
      company: 'Prometheus Enterprise',
      role: 'Software Engineer Intern',
      description: 'Contributed to the development of the e-notaryo project, a web notary platform. My responsibilities included building, integrating, and testing software features to ensure the platform was secure and user-friendly.',
      year: 'Nov 2025 - Mar 2026',
      iconName : 'code'
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="experience" className="bg-transparent min-h-screen py-16 px-4 relative overflow-hidden text-white font-sans">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-2">
        <span className="text-gold-400 font-valorax">Professional</span> <span className="font-valorax">Experience</span>
      </h2>
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-yellow-900/30 z-0">
          <motion.div 
            className="w-full h-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] origin-top"
            style={{ scaleY }}
          />
        </div>

        <div className="space-y-24 pt-10 relative z-10">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const stepNumber = String(index + 1).padStart(2, '0');
            const mappedIcon = exp.iconName;

            return (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                <div className={`w-full md:w-5/12 flex ${isEven ? 'justify-end' : 'justify-start'} mb-8 md:mb-0`}>
                  <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 w-full max-w-md hover:border-yellow-500/50 transition-colors duration-300">
                    
                    <div className="flex justify-center mb-6">
                      <span className="px-4 py-1 text-xs font-semibold text-yellow-400 bg-yellow-900/30 border border-yellow-800/50 rounded-full">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
  
                        <Svgicon name={mappedIcon}/>

                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-center text-white mb-4">{exp.role}</h3>
                    <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                      <p>• {exp.description}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8">

                  <div className="w-4 h-4 bg-[#0a0a0a] border-2 border-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] z-10"></div>
                </div>

                <div className={`hidden md:flex w-5/12 ${isEven ? 'justify-start pl-12' : 'justify-end pr-12'} items-center`}>
                  <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>

                    <span 
                      className="text-6xl font-black mb-2 opacity-80"
                      style={{ 
                        WebkitTextStroke: '1px #facc15', 
                        color: 'transparent',
                        fontFamily: 'monospace'
                      }}
                    >
                      {stepNumber}
                    </span>
                    
                    <span className="text-yellow-400 font-bold uppercase tracking-wider text-sm">
                      {exp.year}
                    </span>
                  </div>
                </div>
                
                <div className="md:hidden text-yellow-400 font-bold uppercase tracking-wider text-sm mt-4 text-center">
                  {exp.year}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;