
import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
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

  const UNDERGRAD_PDF = "https://github.com/rephyrvong-pixel/portfolio/releases/download/portfolioundergraduations/24page10-re.pdf";
  const UNDERGRAD_THUMB = "https://raw.githubusercontent.com/rephyrvong-pixel/portfolio/main/thumbnail/undergraduation%20projects%20thumbnail.png";

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
              href={UNDERGRAD_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Thumbnail */}
                <div className="w-full md:w-1/2 aspect-[3/2] overflow-hidden bg-gray-100 relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={UNDERGRAD_THUMB}
                    alt="Undergraduate Portfolio"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                  
                  {/* Overlay Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur rounded-full p-3 shadow-sm">
                      <ExternalLink size={20} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase group-hover:underline decoration-2 underline-offset-4">
                    Undergraduate<br className="hidden md:block"/>Portfolio
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                    A curated selection of academic works and design explorations from my undergraduate years, showcasing the foundation of my design thinking.
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest pt-2 group-hover:text-gray-600 transition-colors">
                     View Full PDF <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
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
