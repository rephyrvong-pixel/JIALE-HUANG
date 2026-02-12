
import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <main className="pt-20">
        <Hero />
        
        <FilterBar 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-20">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Undergraduate Portfolio Section */}
        <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-20">
          <div className="border-t border-gray-100 pt-20">
            <a 
              href="https://github.com/rephyrvong-pixel/portfolio/blob/main/24page10-re.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 rounded-lg p-8 md:p-12 group hover:bg-black transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight group-hover:text-white transition-colors duration-500">
                    UNDERGRADUATE PORTFOLIO
                  </h2>
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500 max-w-lg text-lg">
                    A curated selection of academic works and design explorations from my undergraduate years.
                  </p>
                </div>
                <div 
                  className="flex items-center gap-4 text-xl font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-500"
                >
                  View Full PDF <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
