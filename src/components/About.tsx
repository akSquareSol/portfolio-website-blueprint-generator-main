import React, { useState, useEffect } from 'react';

const skills = [
  'JavaScript (ES6+)', 'React', 'TypeScript', 'Node.js', 'NextJS',
  'Tailwind CSS', 'HTML', 'CSS', 'SQL', 'C++',
  'Python', 'Kotlin', 'Docker', 'Kubernetes', 'Jenkins',
  'AWS', 'Git', 'Linux',
];

const About: React.FC = () => {
  const [bubbles, setBubbles] = useState<any[]>([]);
  
  useEffect(() => {
    const generateBubbles = () => {
      const result: any[] = [];
      const distribution = [
        { radius: 15, count: 5 },
        { radius: 32, count: 6 },
        { radius: 45, count: 7 }
      ];
      let skillIndex = 0;

      distribution.forEach(ring => {
        for (let i = 0; i < ring.count; i++) {
          if (skillIndex >= skills.length) break;
          const angle = (i / ring.count) * Math.PI * 2;
          const jitter = (Math.random() - 0.5) * 0.1;
          const x = 50 + Math.cos(angle + jitter) * ring.radius;
          const y = 50 + Math.sin(angle + jitter) * ring.radius;

          result.push({
            tech: skills[skillIndex],
            left: `${x}%`,
            top: `${y}%`,
            scale: 0.95 + Math.random() * 0.15,
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 2,
            size: skills[skillIndex].length > 8 ? 'text-xs' : 'text-sm'
          });

          skillIndex++;
        }
      });

      return result;
    };

    setBubbles(generateBubbles());
  }, []);

  return (
    <section id="about">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-8">About us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <p className="mb-4">
              Hello! We’re Apoorav Kumar and Anunay Kumar — two passionate Computer Science Engineers who enjoy building creative, useful, and efficient digital products. Hello! We’re Apoorav Kumar and Anunay Kumar, two tech enthusiasts who share a passion for problem-solving, clean code, and building things that make life just a little bit easier — or more fun. Our interest in technology sparked from a mix of curiosity, late-night code experiments, and the excitement of making something work from scratch. Over the years, we’ve grown through trial, error, and lots of Googling — and we’ve loved every bit of the journey.
            </p>
            <p className="mb-4">
              While we each bring our own strengths to the table — from cloud infrastructure and automation to web design and user experience — what really drives us is the chance to keep learning, creating, and collaborating. We care about thoughtful design, scalable solutions, and building digital experiences that are accessible and inclusive.
            </p>
            <p className="mb-4">
              Outside of work and study, you’ll probably find us geeking out over new tools, trading music playlists, or diving into a good story — whether it’s a novel, a podcast, or a movie.
            </p>
            <p className="mb-4">
              We’re always up for a challenge and love connecting with like-minded folks who enjoy building cool stuff.
            </p>
          </div>

          <div className="relative h-96 w-full overflow-visible">
            {bubbles.map(({ tech, top, left, scale, duration, delay, size }) => (
              <div
                key={tech}
                className={`absolute bubble bg-gradient-to-tr from-teal-400 to-cyan-500 text-black ${size} font-bold px-3 py-1.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer`}
                style={{
                  top,
                  left,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  animation: `float-${tech.replace(/[^a-zA-Z0-9]/g, '')} ${duration}s infinite ease-in-out ${delay}s, color-change 6s infinite ease-in-out ${delay}s`,
                  zIndex: Math.floor(Math.random() * 10),
                  textShadow: '0 0 4px rgba(0,0,0,0.75), 0 0 2px rgba(0,0,0,0.75)',
                }}
              >
                {tech}
              </div>
            ))}

            <style>{`
              /* Bubble float animations */
              ${bubbles.map(({ tech }) => `
                @keyframes float-${tech.replace(/[^a-zA-Z0-9]/g, '')} {
                  0%, 100% { transform: translate(-50%, -50%) scale(1) translateY(0px); }
                  50% { transform: translate(-50%, -50%) scale(1) translateY(-${5 + Math.random() * 8}px); }
                }
              `).join('\n')}

              /* Single-bubble background color change */
              @keyframes color-change {
                0% { background-color: #fef3c7; }
                25% { background-color: #d1fae5; }
                50% { background-color: #bfdbfe; }
                75% { background-color: #fbcfe8; }
                100% { background-color: #fef3c7; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
