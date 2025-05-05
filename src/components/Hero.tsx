import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-teal mb-5 font-mono text-lg">Hi, welcome to</p>

          {/* Company Name with hover effect */}
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2 transition-all duration-300 hover:scale-105 hover:text-teal-400 cursor-pointer inline-block">
            akSquared Solution
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-400 block mt-2">We build things for the web.</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            We're a team of software developers specializing in creating exceptional digital experiences.
            Currently, we're focused on building accessible, human-centered products that make a real impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-6"
              size="lg"
              onClick={scrollToProjects}
            >
              Check out our work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-300 hover:border-teal-600 hover:text-teal-600 px-6 py-6"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
