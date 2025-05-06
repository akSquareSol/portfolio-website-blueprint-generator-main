import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import * as THREE from 'three';

const Contact = () => {
  const { toast } = useToast();
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  
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
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x0fe2ff,
      transparent: true,
      opacity: 0.8
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 2;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
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
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock the emailjs function
    const mockEmailSend = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    
    mockEmailSend.then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
    }).catch(() => {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
      });
    });
  };
  
  return (
    <section id="contact" className="relative bg-navy-dark overflow-hidden py-20">
      {/* 3D animation container - absolute positioned behind content */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Content with relative positioning to appear above animation */}
      <div className="relative container mx-auto z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Great Together</h2>
          <p className="text-gray-300 mb-8">
            We're always excited to hear from visionary clients, collaborators, or anyone who wants to bring bold ideas to life. Whether you're looking to develop a cutting-edge website, a powerful mobile app, or need expert help on your next big tech challenge — we're ready to jump in.
            <span className="text-teal-400"> Got a project in mind or just want to connect? Drop us a message — we usually respond within 24 hours!</span>
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="space-y-6">
            <div>
              <Input
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                value={formData.user_name}
                onChange={handleChange}
                className="bg-navy border-gray-700 text-white focus:border-teal-400"
              />
            </div>
            <div>
              <Input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
                value={formData.user_email}
                onChange={handleChange}
                className="bg-navy border-gray-700 text-white focus:border-teal-400"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="bg-navy border-gray-700 text-white focus:border-teal-400 resize-none"
              />
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full bg-teal-400 text-navy-dark hover:bg-teal-500"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;