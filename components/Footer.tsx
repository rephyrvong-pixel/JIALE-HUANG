
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-gray-100 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-black tracking-tighter">GET IN TOUCH.</h2>
          <p className="text-gray-500 max-w-sm">
            Interested in collaboration or just want to say hi? Feel free to reach out through any of these platforms.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-500 transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-gray-500 transition-colors"><Github size={24} /></a>
          <a href="#" className="hover:text-gray-500 transition-colors"><Mail size={24} /></a>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
        <div>© 2024 HJL DESIGN PORTFOLIO</div>
        <div>STAY MINIMAL. THINK BOLD.</div>
      </div>
    </footer>
  );
};

export default Footer;
