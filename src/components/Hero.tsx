import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as THREE from 'three';

const Hero = () => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Set size to match container
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create particles (stars/dots)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Tech-themed color palette with teals and blues
    const colorPalette = [
      new THREE.Color(0x14b8a6), // teal-500
      new THREE.Color(0x0d9488), // teal-600
      new THREE.Color(0x0369a1), // blue-600
      new THREE.Color(0x0284c7), // blue-500
      new THREE.Color(0x6366f1), // indigo-500
    ];
    
    for (let i = 0; i < particleCount; i++) {
      // Position particles in a sphere
      const radius = Math.random() * 20 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);     // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi);                   // z
      
      // Assign colors from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({ 
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // Add light to make particles more visible
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    
    // Position camera
    camera.position.z = 30;
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Responsive handling
    const handleResize = () => {
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Smooth follow of mouse position
      targetX = mouseX * 0.15;
      targetY = mouseY * 0.15;
      
      particles.rotation.y += 0.001;
      particles.rotation.x += (targetY - particles.rotation.x) * 0.02;
      particles.rotation.y += (targetX - particles.rotation.y) * 0.02;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative">
      {/* 3D Animation Container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 pointer-events-none z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-teal-400 mb-5 font-mono text-lg">Hi, welcome to</p>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;