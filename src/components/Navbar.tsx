
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-navy/95 backdrop-blur-sm py-4 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-teal font-heading text-xl font-bold">
          <span className="text-white">ak </span>Square  Sol
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-slate-light hover:text-teal transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-transparent text-teal border border-teal hover:bg-teal/10">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-light hover:text-teal"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-dark p-4 shadow-lg border-t border-slate-dark animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-slate-light hover:text-teal transition duration-300 py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-transparent text-teal border border-teal hover:bg-teal/10 w-full"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
