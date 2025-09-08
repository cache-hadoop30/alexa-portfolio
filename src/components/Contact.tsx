import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-display text-gradient">
            Let's Collaborate 🚀
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to work together? Drop me a message and let's build something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-card p-6">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-background/50 border-accent/30 focus:border-accent"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-background/50 border-accent/30 focus:border-accent"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-background/50 border-accent/30 focus:border-accent resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl">Get in Touch</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind, need technical support, or just 
                want to connect, I'd love to hear from you!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-accent">Connect With Me</h4>
              
              <div className="flex flex-col space-y-3">
                <a 
                  href="#"
                  className="flex items-center gap-3 p-3 glass-card rounded-lg hover-lift transition-all"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center gap-3 p-3 glass-card rounded-lg hover-lift transition-all"
                >
                  <Github className="w-5 h-5 text-foreground" />
                  <span>GitHub Portfolio</span>
                </a>
                
                <a 
                  href="mailto:alexandria.lucas@email.com"
                  className="flex items-center gap-3 p-3 glass-card rounded-lg hover-lift transition-all"
                >
                  <Mail className="w-5 h-5 text-neon" />
                  <span>alexandria.lucas@email.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;