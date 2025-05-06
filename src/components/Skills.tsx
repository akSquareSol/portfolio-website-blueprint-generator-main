import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import * as THREE from 'three';

// Background Animation Component
const BackgroundAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000; // More particles for fuller effect
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10; // Wider distribution
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x0fe2ff,
      transparent: true,
      opacity: 0.6
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 3;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose resources to prevent memory leaks
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }} // Allow clicking through
    />
  );
};

interface Skill {
  name: string;
  level: number;
  logo: string;
  category: 'frontend' | 'backend' | 'other';
}

const allSkills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: 'frontend' },
  { name: 'CSS', level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: 'frontend' },
  { name: 'JavaScript', level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: 'frontend' },
  { name: 'React', level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: 'frontend' },
  { name: 'TypeScript', level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: 'frontend' },
  { name: 'Tailwind CSS', level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-plain-wordmark.svg", category: 'frontend' },
  { name: 'NextJS', level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: 'backend' },
  { name: 'SQL', level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: 'backend' },
  { name: 'C++', level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: 'backend' },
  { name: 'Python', level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: 'backend' },
  { name: 'Kotlin', level: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", category: 'backend' },

  // DevOps & Tools
  { name: 'Docker', level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: 'other' },
  { name: 'Kubernetes', level: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: 'other' },
  { name: 'Jenkins', level: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", category: 'other' },
  { name: 'AWS', level: 55, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: 'other' },
  { name: 'Git', level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: 'other' },
  { name: 'Linux', level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: 'other' },
];

const categories = [
  { id: 'frontend', name: 'Frontend & Programming' },
  { id: 'backend', name: 'Backend & Language Skills' },
  { id: 'other', name: 'DevOps & Tools' },
];

// Main App or Layout component (wrap your entire application with this)
const AppLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-16">
      <div className="container relative mx-auto py-16 z-10">
        <h2 className="section-heading mb-12 text-4xl font-bold text-center">Skills</h2>

        <div className="space-y-12">
          {categories.map(category => {
            const skills = allSkills.filter(s => s.category === category.id);
            if (!skills.length) return null;
            return (
              <div key={category.id} className="animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-6 text-white">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map(skill => (
                    <AnimatedSkillCard3D key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Your main page component
const YourPage = () => {
  return (
    <AppLayout>
      <Skills />
      {/* Other content of your page */}
    </AppLayout>
  );
};

export default YourPage;

// --------------------------------------------------
// 3D Animated card with perspective transformations
// --------------------------------------------------
const AnimatedSkillCard3D = ({ skill }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Observe when we enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate from 0 → skill.level
  useEffect(() => {
    if (!visible) return;
    let start = null;
    const duration = 1000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * skill.level));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [visible, skill.level]);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Convert to rotation angles (with dampening)
    const rotateX = -y / 15;
    const rotateY = x / 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  // Calculate transform styles based on hover state and rotation
  const transform = isHovered
    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
    : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transform-gpu"
    >
      <div
        className="transition-all duration-300 ease-out"
        style={{ transform }}
      >
        <Card className="bg-navy border border-slate-dark hover:border-teal/50 transition-colors duration-300 relative overflow-hidden">
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/10 to-transparent opacity-25" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent transform" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent transform" />
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal/40 to-transparent transform" />
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal/40 to-transparent transform" />
            </div>
          )}
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-md bg-slate-dark mr-4 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <h4 className="font-medium text-white">{skill.name}</h4>
            </div>
            <div className="space-y-2">
              <Progress value={display} className="h-2 bg-slate-dark" indicatorColor="bg-teal" />
              <div className="flex justify-end">
                <span className="text-sm text-slate-light">{display}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};