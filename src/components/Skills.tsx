import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  FileCode,
  FileJson,
  Database,
  Server,
  Laptop,
  Cloud,
  Terminal,
  GitBranch
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: 'frontend' | 'backend' | 'other';
}

const allSkills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 90, icon: Code, category: 'frontend' },
  { name: 'CSS', level: 85, icon: FileCode, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 80, icon: FileJson, category: 'frontend' },
  { name: 'React', level: 80, icon: Code, category: 'frontend' },
  { name: 'TypeScript', level: 75, icon: FileCode, category: 'frontend' },
  { name: 'Tailwind CSS', level: 70, icon: FileCode, category: 'frontend' },
  { name: 'NextJS', level: 65, icon: Laptop, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 75, icon: Server, category: 'backend' },
  { name: 'SQL', level: 70, icon: Database, category: 'backend' },
  { name: 'C++', level: 80, icon: Terminal, category: 'backend' },
  { name: 'Python', level: 70, icon: Terminal, category: 'backend' },
  { name: 'Kotlin', level: 60, icon: Code, category: 'backend' },

  // DevOps & Tools
  { name: 'Docker', level: 65, icon: Server, category: 'other' },
  { name: 'Kubernetes', level: 60, icon: Cloud, category: 'other' },
  { name: 'Jenkins', level: 60, icon: Server, category: 'other' },
  { name: 'AWS', level: 55, icon: Cloud, category: 'other' },
  { name: 'Git', level: 80, icon: GitBranch, category: 'other' },
  { name: 'Linux', level: 75, icon: Terminal, category: 'other' },
];

const categories = [
  { id: 'frontend', name: 'Frontend & Programming' },
  { id: 'backend', name: 'Backend & Language Skills' },
  { id: 'other', name: 'DevOps & Tools' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-navy-light scroll-mt-20">
      <div className="container mx-auto py-16">
        <h2 className="section-heading mb-12">Skills</h2>

        <div className="space-y-12">
          {categories.map(category => {
            const skills = allSkills.filter(s => s.category === category.id);
            if (!skills.length) return null;
            return (
              <div key={category.id} className="animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-6 text-white">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map(skill => (
                    <AnimatedSkillCard key={skill.name} skill={skill} />
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

export default Skills;

// --------------------------------------------------
// Animated card that counts from 0 → level on view.
// --------------------------------------------------
const AnimatedSkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(0);

  // Observe when we enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }  // fire when 10% visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate from 0 → skill.level once visible
  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;
    const duration = 1000; // 1 second
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * skill.level));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [visible, skill.level]);

  return (
    <div ref={ref}>
      <Card className="bg-navy border border-slate-dark hover:border-teal/50 transition-colors duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-md bg-slate-dark mr-4">
              <skill.icon className="h-6 w-6 text-teal" />
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
  );
};
