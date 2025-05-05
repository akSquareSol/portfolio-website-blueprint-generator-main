import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="bg-navy-dark">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="section-heading mx-auto">Let’s Build Something Great Together</h2>
          <p className="text-slate-light mb-8">
          We're always excited to hear from visionary clients, collaborators, or anyone who wants to bring bold ideas to life. Whether you're looking to develop a cutting-edge website, a powerful mobile app, or need expert help on your next big tech challenge — we're ready to jump in.<span className="text-teal"> Got a project in mind or just want to connect? Drop us a message — we usually respond within 24 hours!</span>
          </p>
        </div>
        
        <div className="max-w-md mx-auto animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="bg-navy border-slate-dark text-slate focus:border-teal"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="bg-navy border-slate-dark text-slate focus:border-teal"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                required 
                rows={6}
                className="bg-navy border-slate-dark text-slate focus:border-teal resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-teal text-navy hover:bg-teal-dark"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;