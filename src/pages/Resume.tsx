import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink, Calendar, MapPin, Mail, Phone, Linkedin, Award, Book, Code, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("anunay");

  // Function to simulate downloading the resume
  const downloadResume = (name: string) => {
    // In a real implementation, this would link to the actual PDF file
    alert(`Downloading ${name}'s resume...`);
  };

  return (
    <section id="resume" className="bg-navy-light scroll-mt-10">
      <div className="container mx-auto">
        <h2 className="section-heading mb-8">Our Resumes</h2>
        <p className="text-slate-light max-w-3xl mx-auto text-center mb-8">
          Get to know our professional backgrounds, skills, and experiences that make us a great team for your next project.
        </p>

        <Tabs 
          defaultValue="anunay" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full animate-fade-in-up"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-navy-dark border border-slate-dark">
              <TabsTrigger 
                value="anunay" 
                className="data-[state=active]:bg-teal data-[state=active]:text-navy"
              >
                Anunay Kumar
              </TabsTrigger>
              <TabsTrigger 
                value="apoorav" 
                className="data-[state=active]:bg-teal data-[state=active]:text-navy"
              >
                Apoorav Kumar
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="anunay" className="animate-fade-in-up">
            <ResumeAnunay downloadResume={() => downloadResume("Anunay")} />
          </TabsContent>

          <TabsContent value="apoorav" className="animate-fade-in-up">
            <ResumeApoorav downloadResume={() => downloadResume("Apoorav")} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ResumeAnunay = ({ downloadResume }: { downloadResume: () => void }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-end mb-6">
        <Button 
          onClick={downloadResume}
          className="bg-teal text-navy hover:bg-teal-dark"
        >
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>

      {/* Header */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Anunay Kumar</h3>
              <p className="text-teal text-lg">Computer Science Engineer</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-slate-light">
                <Mail className="h-4 w-4 mr-2" />
                <span>anunaykumar2431@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-light">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 8528101080</span>
              </div>
              <div className="flex items-center text-slate-light">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Ludhiana, Punjab - 141010</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-teal" />
            Professional Summary
          </h4>
          <p className="text-slate-light">
            Enthusiastic and dedicated Computer Science Engineer with a strong academic
            background and a passion for technology. Possessing a solid foundation in programming
            languages, algorithms, and software development methodologies gained
            through coursework and hands-on projects. Eager to contribute to innovative
            projects and collaborate with dynamic teams to drive technological
            advancements. Aiming to utilize my skills and knowledge to make meaningful
            contributions in the field of computer science.
          </p>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Book className="h-5 w-5 mr-2 text-teal" />
            Education
          </h4>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-white font-medium">Bachelors in Computer Science Engineering</h5>
                  <p className="text-slate-light">Chandigarh University, Gharuan</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center text-slate-light text-sm">
                    <Calendar className="h-3 w-3 mr-1" /> 2021-2025
                  </span>
                  <span className="text-teal">CGPA: 7.17</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-white font-medium">Intermediate (CBSE)</h5>
                  <p className="text-slate-light">Vardhman International Public School, Ludhiana</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center text-slate-light text-sm">
                    <Calendar className="h-3 w-3 mr-1" /> 2019-2020
                  </span>
                  <span className="text-teal">Percentage: 74.5%</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-white font-medium">Matriculation (CBSE)</h5>
                  <p className="text-slate-light">Vardhman International Public School, Ludhiana</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center text-slate-light text-sm">
                    <Calendar className="h-3 w-3 mr-1" /> 2018-2019
                  </span>
                  <span className="text-teal">Percentage: 75.4%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Code className="h-5 w-5 mr-2 text-teal" />
            Projects
          </h4>
          
          <ul className="space-y-4 text-slate-light">
            <li className="flex">
              <span className="text-teal mr-2">•</span>
              <span><span className="text-white font-medium">Digital Khatabook</span> - An accounting and bookkeeping application
              that caters the need for small business owners. Using HTML CSS
              and JavaScript.</span>
            </li>
            <li className="flex">
              <span className="text-teal mr-2">•</span>
              <span><span className="text-white font-medium">Responsive Personal Portfolio Website</span> using HTML CSS and JavaScript.</span>
            </li>
            <li className="flex">
              <span className="text-teal mr-2">•</span>
              <span><span className="text-white font-medium">Weather App</span> using HTML CSS and JavaScript.</span>
            </li>
            <li className="flex">
              <span className="text-teal mr-2">•</span>
              <span><span className="text-white font-medium">Guess the number game</span> using HTML CSS and JavaScript.</span>
            </li>
            <li className="flex">
              <span className="text-teal mr-2">•</span>
              <span><span className="text-white font-medium">Mood detection System</span> using computer vision.</span>
            </li>
            <li className="flex">
              <span className="text-teal mr-2">•</span>
              <span><span className="text-white font-medium">Face Mask Detection</span> using computer vision.</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Skills and Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Technical Skills */}
        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Technical Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'SQL', 'C++'].map((skill) => (
                <Badge key={skill} className="bg-navy-dark text-teal border border-teal">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Interpersonal Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Adaptive', 'Active Listening', 'Management & Coordination', 'Decision Making'].map((skill) => (
                <Badge key={skill} className="bg-navy-dark text-slate-light border border-slate-dark">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certifications */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-teal" />
            Certifications
          </h4>
          
          <ul className="space-y-2 text-slate-light">
            <li className="flex items-center">
              <span className="text-teal mr-2">•</span>
              <span>Introduction to Data Science Specialization (IBM)</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal mr-2">•</span>
              <span>Analytics for Decision Making Specialization (University of Minnesota)</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal mr-2">•</span>
              <span>C++ Tutorial for Complete Beginners by Udemy</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal mr-2">•</span>
              <span>Google Play Store Listing Certification by Google Play Store</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal mr-2">•</span>
              <span>Time and Stress Management by Saylor</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal mr-2">•</span>
              <span>A Science of Well Being by Yale University</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['English', 'Hindi', 'Punjabi'].map((lang) => (
                <Badge key={lang} className="bg-navy-dark text-slate-light border border-slate-dark">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Interests & Hobbies</h4>
            <div className="flex flex-wrap gap-2">
              {['Reading Novels', 'Watching Cricket', 'Listening to Music'].map((hobby) => (
                <Badge key={hobby} className="bg-navy-dark text-slate-light border border-slate-dark">
                  {hobby}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Personal Details</h4>
            <div className="space-y-2 text-slate-light text-sm">
              <p><span className="text-teal mr-1">DOB:</span> 6-03-2004</p>
              <p><span className="text-teal mr-1">Mother's Name:</span> Mrs. Rinku Kumari</p>
              <p><span className="text-teal mr-1">Father's Name:</span> Mr. Abhay Kumar Singh</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ResumeApoorav = ({ downloadResume }: { downloadResume: () => void }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-end mb-6">
        <Button 
          onClick={downloadResume}
          className="bg-teal text-navy hover:bg-teal-dark"
        >
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>

      {/* Header */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Apoorav Kumar</h3>
              <p className="text-teal text-lg">DevOps Engineer</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-slate-light">
                <Mail className="h-4 w-4 mr-2" />
                <span>apooravkumar.29@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-light">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 6239139563</span>
              </div>
              <div className="flex items-center text-slate-light">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Ludhiana, Punjab</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-teal" />
            Profile Summary
          </h4>
          <p className="text-slate-light">
            Enthusiastic DevOps Engineer with a strong foundation in C++ and Data Structures & Algorithms, having
            solved 400+ problems across platforms like LeetCode, GFG, and HackerRank. Skilled in CI/CD pipelines,
            shell scripting, and collaborating with senior software engineers to deliver high-quality solutions.
            Passionate about optimizing processes, exploring complex algorithms, and driving projects with persistence
            and attention to detail.
          </p>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Book className="h-5 w-5 mr-2 text-teal" />
            Education
          </h4>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-white font-medium">Bachelor's of Engineering - Computer Science and Engineering</h5>
                  <p className="text-slate-light">Chandigarh University, Mohali, Punjab</p>
                  <p className="text-xs text-teal">Majors: Computer Network, Operating System, COA, DBMS, TOC</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center text-slate-light text-sm">
                    <Calendar className="h-3 w-3 mr-1" /> 2021-2025
                  </span>
                  <span className="text-teal">CGPA: 7.49</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-white font-medium">Intermediate</h5>
                  <p className="text-slate-light">Vardhman International Public School, Ludhiana, Punjab</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center text-slate-light text-sm">
                    <Calendar className="h-3 w-3 mr-1" /> 2020-2021
                  </span>
                  <span className="text-teal">Percentage: 74.4%</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-white font-medium">Matriculation</h5>
                  <p className="text-slate-light">Vardhman International Public School, Ludhiana, Punjab</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center text-slate-light text-sm">
                    <Calendar className="h-3 w-3 mr-1" /> 2018-2019
                  </span>
                  <span className="text-teal">Percentage: 90.2%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Code className="h-5 w-5 mr-2 text-teal" />
            Projects
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="text-white font-medium">University Management Android Application</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> Kotlin, XML
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-medium">Sorting Visualizer</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> JavaScript, Canvas, Algorithms
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-medium">Breadth First Search Visualizer</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> JavaScript, Canvas, Graph Algorithms
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-medium">Depth-First Search Visualizer</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> JavaScript, Canvas, Graph Algorithms
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-medium">Dijkstra's Algorithm Visualizer</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> JavaScript, Canvas, Graph Algorithms
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-medium">A* Algorithm Visualizer</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> JavaScript, Canvas, Graph Algorithms
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-medium">Weather Android Application</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> Kotlin, XML, API, Retrofit
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-medium">Shopping Website</h5>
              <p className="text-slate-light text-sm">
                <span className="text-teal">Technologies:</span> HTML, CSS, Bootstrap
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      <Card className="mb-8 bg-navy border border-slate-dark">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h5 className="text-white font-medium mb-2">Languages</h5>
              <div className="flex flex-wrap gap-2">
                {['C++ (Proficient)', 'Java', 'Kotlin', 'Python'].map((skill) => (
                  <Badge key={skill} className="bg-navy-dark text-teal border border-teal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-2">DevOps</h5>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'Docker', 'CI/CD Tools', 'Jenkins', 'Kubernetes', 'AWS', 'Ansible'].map((skill) => (
                  <Badge key={skill} className="bg-navy-dark text-teal border border-teal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-2">Developer Tools</h5>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'Android Studio', 'Git', 'Eclipse', 'Vagrant', 'VM Virtual Box', 'Grafana'].map((skill) => (
                  <Badge key={skill} className="bg-navy-dark text-teal border border-teal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications and Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-teal" />
              Certifications
            </h4>
            
            <ul className="space-y-2 text-slate-light">
              <li className="flex items-center">
                <span className="text-teal mr-2">•</span>
                <span>DevOps Beginners to Advance (Udemy)</span>
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">•</span>
                <span>Learn Spring Boot 3 in 100 Steps (Udemy)</span>
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">•</span>
                <span>Kotlin Development Masterclass (Udemy)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-teal" />
              Achievements/Experience
            </h4>
            
            <ul className="space-y-2 text-slate-light">
              <li className="flex items-center">
                <span className="text-teal mr-2">•</span>
                <span>Stood 3rd Position in Tomato Challenge 2023</span>
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">•</span>
                <span>Research Paper Published at ICICSO 2023</span>
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">•</span>
                <span>Apprentice as DevOps Engg at DBS (June 2024 - Dec 2024)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Soft Skills and Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Effective Planning', 'Keen Listener', 'Collaborate', 'Adaptable', 'Explorer', 'Time Keeper'].map((skill) => (
                <Badge key={skill} className="bg-navy-dark text-slate-light border border-slate-dark">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Hobbies & Interests</h4>
            <div className="flex flex-wrap gap-2">
              {['Listening to Songs', 'Watching Movies', 'Web Series', 'Exploring Knowledge'].map((hobby) => (
                <Badge key={hobby} className="bg-navy-dark text-slate-light border border-slate-dark">
                  {hobby}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-navy border border-slate-dark h-full">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Languages Known</h4>
            <div className="flex flex-wrap gap-2">
              {['Hindi', 'English', 'Punjabi'].map((lang) => (
                <Badge key={lang} className="bg-navy-dark text-slate-light border border-slate-dark">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;