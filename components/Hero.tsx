
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-2/3"
        >
          <h1 className="text-[64px] leading-[0.9] md:text-[120px] font-black tracking-tighter uppercase">
            Selected<br />Projects
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/3 mb-4"
        >
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-sm">
            Explorations at the intersection of human experience, technology, and environmental responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
