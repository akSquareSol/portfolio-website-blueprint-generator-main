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
      title: "Digital Khatabook",
      description: "An accounting and bookkeeping web app for small business owners built with HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
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
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["React", "API", "CSS"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Guess the Number Game",
      description: "An interactive number guessing game built with HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Mood Detection System",
      description: "A computer vision project that detects user mood from facial expressions.",
      image: "https://images.unsplash.com/photo-1587614382346-4ec8d4f1e52d",
      tags: ["Python", "OpenCV", "Machine Learning"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Face Mask Detection",
      description: "A computer vision application to detect face masks in images using machine learning models.",
      image: "https://images.unsplash.com/photo-1585155774149-6a35ddb458b9",
      tags: ["Python", "OpenCV", "Machine Learning"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 7,
      title: "University Management Android Application",
      description: "An Android app for university administration built with Kotlin and XML to manage student data.",
      image: "https://images.unsplash.com/photo-1581092580497-2dbb4cbb41f4",
      tags: ["Kotlin", "Android", "XML"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 8,
      title: "Sorting Algorithm Visualizer",
      description: "A visualization tool for sorting algorithms to demonstrate step-by-step operations.",
      image: "https://images.unsplash.com/photo-1581093448794-15b8b93aeb5f",
      tags: ["JavaScript", "Canvas", "Algorithms"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 9,
      title: "Breadth First Search Visualizer",
      description: "A graphical visualizer to illustrate the BFS algorithm on graphs.",
      image: "https://images.unsplash.com/photo-1581093466430-1b3c3e8ba1b6",
      tags: ["JavaScript", "Canvas", "Algorithms"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 10,
      title: "Depth First Search Visualizer",
      description: "A graphical visualizer to illustrate the DFS algorithm on graphs.",
      image: "https://images.unsplash.com/photo-1581093466179-17ccf60a1dc2",
      tags: ["JavaScript", "Canvas", "Algorithms"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 11,
      title: "Dijkstra's Algorithm Visualizer",
      description: "An interactive tool to visualize Dijkstra's shortest path algorithm.",
      image: "https://images.unsplash.com/photo-1581093465843-fb5e3c691e46",
      tags: ["JavaScript", "Canvas", "Algorithms"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 12,
      title: "A* Algorithm Visualizer",
      description: "A visualization of the A* pathfinding algorithm demonstrating heuristic search.",
      image: "https://images.unsplash.com/photo-1581093466071-0dcae8e33c1f",
      tags: ["JavaScript", "Canvas", "Algorithms"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 13,
      title: "Weather Android Application",
      description: "An Android weather app fetching data via Retrofit, built with Kotlin and XML.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["Kotlin", "Android", "API"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 14,
      title: "Shopping Website",
      description: "A basic e-commerce website built with HTML, CSS, and Bootstrap.",
      image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a60",
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
