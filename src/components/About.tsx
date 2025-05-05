
import React from 'react';
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        <h2 className="section-heading">About us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <p className="mb-4">
              Hello! We’re Apoorav Kumar and Anunay Kumar — two passionate Computer Science Engineers who enjoy building creative, useful, and efficient digital products.Hello! We’re Apoorav Kumar and Anunay Kumar, two tech enthusiasts who share a passion for problem-solving, clean code, and building things that make life just a little bit easier — or more fun.
              Our interest in technology sparked from a mix of curiosity, late-night code experiments, and the excitement of making something work from scratch. Over the years, we’ve grown through trial, error, and lots of Googling — and we’ve loved every bit of the journey.
            </p>
            <p className="mb-4">
            While we each bring our own strengths to the table — from cloud infrastructure and automation to web design and user experience — what really drives us is the chance to keep learning, creating, and collaborating. We care about thoughtful design, scalable solutions, and building digital experiences that are accessible and inclusive.
            </p>
            <p className="mb-4">
            Outside of work and study, you’ll probably find us geeking out over new tools, trading music playlists, or diving into a good story — whether it’s a novel, a podcast, or a movie.
            </p>
            <p className='mb-4'>
            We’re always up for a challenge and love connecting with like-minded folks who enjoy building cool stuff.
            </p>
            
            <div className="grid grid-cols-2 gap-2">
  {[
    'JavaScript (ES6+)',
    'React',
    'TypeScript',
    'Node.js',
    'NextJS',
    'Tailwind CSS',
    'HTML',
    'CSS',
    'SQL',
    'C++',
    'Python',
    'Kotlin',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'AWS',
    'Git',
    'Linux',
  ].map((tech) => (
    <div key={tech} className="flex items-center">
      <div className="w-1.5 h-1.5 bg-teal rounded-full mr-2"></div>
      <span className="text-sm text-slate-light">{tech}</span>
    </div>
  ))}
</div>

          </div>
          
          <div className="relative group animate-fade-in-up">
            <div className="relative rounded-md overflow-hidden border-2 border-teal z-10 max-w-xs mx-auto">
              <div className="aspect-square bg-slate-dark overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Profile" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-teal rounded-md z-0 group-hover:top-0 group-hover:right-0 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
