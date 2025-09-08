import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "qa", label: "QA Case Studies" },
    { id: "support", label: "Tech Support" },
    { id: "docs", label: "Documentation" }
  ];

  const projects = [
    {
      id: 1,
      title: "Web-Based Reservation with Virtual Tour for 4K Garden Resort",
      category: "web",
      description: "Full-stack web application for managing resort bookings, guest services, and staff operations.",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Panolens JS"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Booking System UI/UX",
      category: "web", 
      description: "Responsive front-end interface for online booking platform with modern design principles.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "E-commerce Testing Suite", 
      category: "qa",
      description: "Comprehensive test cases and bug reports for e-commerce platform covering user flows and edge cases.",
      technologies: ["Test Cases", "Bug Tracking", "JIRA", "Selenium"],
      links: {
        report: "#"
      }
    },
    {
      id: 4,
      title: "CompTIA Security+ Certification",
      category: "support",
      description: "Professional certification demonstrating cybersecurity knowledge and technical support expertise.",
      technologies: ["Security Protocols", "Risk Management", "Incident Response"],
      links: {
        cert: "#"
      }
    },
    {
      id: 5,
      title: "Technical Documentation Portfolio",
      category: "docs",
      description: "Collection of user manuals, API docs, and process documentation for various technical projects.",
      technologies: ["Technical Writing", "Diagrams", "User Guides", "API Docs"],
      links: {
        pdf: "#"
      }
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-display text-gradient">
            Projects Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work across development, testing, support, and documentation
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`hover-scale ${
                activeFilter === filter.id 
                  ? "bg-gradient-primary" 
                  : "border-accent/30 hover:bg-accent/10"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card p-6 rounded-xl hover-lift">
              <h3 className="font-display font-semibold text-xl mb-3 text-accent">
                {project.title}
              </h3>
              
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                {project.links.live && (
                  <Button size="sm" variant="outline" className="hover-scale">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button size="sm" variant="outline" className="hover-scale">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                )}
                {(project.links.report || project.links.cert || project.links.pdf) && (
                  <Button size="sm" variant="outline" className="hover-scale">
                    <FileText className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;