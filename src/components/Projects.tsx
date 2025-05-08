import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Image Editing App",
      description: "A modern web application for image editing with features like filters, cropping, and adjustments, built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      tags: ["React", "Tailwind CSS"],
      demoLink: "https://image-editing-nest.vercel.app",
      codeLink: "https://github.com/akSquareSol/Image-Editing-Nest",
    },
    {
      id: 2,
      title: "Responsive Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills, built with HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A web app displaying current weather and forecasts using the OpenWeatherMap API, built with React and CSS.",
      image: "https://i.ibb.co/3y3Sgtqx/Weather-App.png",
      tags: ["Kotlin", "Android", "API"],
      demoLink: "#",
      codeLink: "https://github.com/akSquareSol/weather-app.git",
    },
    {
      id: 4,
      title: "Guess the Number Game",
      description: "An interactive number guessing game built with HTML, CSS, and JavaScript.",
      image: "https://raw.githubusercontent.com/akSquareSol/components/main/Guess-the-number.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://github.com/akSquareSol/Guess-the-Number/blob/main/game.html",
      codeLink: "https://github.com/akSquareSol/Guess-the-Number",
    },
    {
      id: 5,
      title: "Mood Detection System",
      description: "A computer vision project that detects user mood from facial expressions.",
      image: "https://github.com/akSquareSol/components/blob/main/Mood%20Detection%20System.png?raw=true",
      tags: ["Python", "OpenCV", "Machine Learning"],
      demoLink: "https://github.com/akSquareSol/MoodDetection/blob/main/mood_detection_system.py",
      codeLink: "https://github.com/akSquareSol/MoodDetection/tree/main",
    },
    {
      id: 6,
      title: "Face Mask Detection",
      description: "A computer vision application to detect face masks in images using machine learning models.",
      image: "https://github.com/akSquareSol/components/blob/main/Face%20Mask%20Detection%20System.png?raw=true",
      tags: ["Python", "OpenCV", "Machine Learning"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 7,
      title: "University Management Android Application",
      description: "An Android app for university administration built with Kotlin and XML to manage student data.",
      image: "https://i.ibb.co/HTJ5WVcT/Chat-GPT-Image-May-6-2025-11-55-50-AM.png",
      tags: ["Kotlin", "Android", "XML"],
      demoLink: "https://github.com/akSquareSol/university-management-app/blob/main/app/src/main/java/com/apoorav/cuhub/LoginActivity.kt",
      codeLink: "https://github.com/akSquareSol/university-management-app.git",
    },
    {
      id: 8,
      title: "Sorting Algorithm Visualizer",
      description: "A visualization tool for sorting algorithms to demonstrate step-by-step operations.",
      image: "https://i.ibb.co/j9nbsPSL/Sorting-Alog.png",
      tags: ["JavaScript", "Canvas", "Algorithms"],
      demoLink: "https://github.com/akSquareSol/sorting-visualizer/blob/main/src/algorithms/bfs.ts",
      codeLink: "https://github.com/akSquareSol/sorting-visualizer.git",
    },
    // {
    //   id: 9,
    //   title: "Weather Android Application",
    //   description: "An Android weather app fetching data via Retrofit, built with Kotlin and XML.",
    //   image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    //   tags: ["Kotlin", "Android", "API"],
    //   demoLink: "#",
    //   codeLink: "#",
    // },
    {
      id: 10,
      title: "Shopping Website",
      description: "A basic e-commerce website built with HTML, CSS, and Bootstrap.",
      image: "https://i.ibb.co/BHJRynnv/Chat-GPT-Image-May-6-2025-12-00-52-PM.png",
      tags: ["HTML", "CSS", "Bootstrap"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className={filter === null ? "bg-teal text-navy" : "text-slate"}
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className={filter === tag ? "bg-teal text-navy" : "text-slate"}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-navy border border-slate-dark hover:border-teal/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in-up">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-slate-light mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-teal text-teal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-teal transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-teal transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
