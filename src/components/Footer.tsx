
import React from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-navy-dark border-t border-slate-dark">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-light text-sm mb-4 md:mb-0">
            Designed & Built with <span className="text-teal">♥</span>
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-light hover:text-teal transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-light hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-light hover:text-teal transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
