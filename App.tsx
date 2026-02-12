
import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
      </main>

      <Footer />
    </div>
  );
};

export default App;
