
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {/* Thumbnail Container */}
        <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 mb-6">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
          
          {/* Subtle "View" Overlay */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur rounded-full p-3 shadow-sm">
              <ExternalLink size={20} className="text-black" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-black tracking-tight uppercase group-hover:underline decoration-2 underline-offset-4">
              {project.title}
            </h3>
            <ArrowRight size={20} className="mt-1 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
          </div>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
