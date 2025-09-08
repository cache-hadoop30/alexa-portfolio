import { Badge } from "@/components/ui/badge";
import { Code, Shield, Wrench, FileText } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Django", "React"],
      color: "text-accent"
    },
    {
      title: "Tech Support",
      icon: Wrench,
      skills: ["Hardware Setup", "Troubleshooting", "OS Configuration", "Network Management"],
      color: "text-neon"
    },
    {
      title: "QA Testing",
      icon: Shield,
      skills: ["SDLC", "Test Cases", "Bug Tracking"],
      color: "text-purple-400"
    },
    {
      title: "Documentation",
      icon: FileText,
      skills: ["User Manuals", "Process Docs", "Technical Diagrams"],
      color: "text-blue-400"
    }
  ];

  const currentlyLearning = ["TypeScript", "Next.js", "Docker", "AWS"];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-display text-gradient">
            Skills Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning development, support, testing, and documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="glass-card p-6 rounded-xl hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className={`w-6 h-6 ${category.color}`} />
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover-scale cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <div className="glass-card p-6 rounded-xl text-center">
          <h3 className="font-display font-semibold text-xl mb-4 text-neon">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyLearning.map((skill) => (
              <Badge 
                key={skill} 
                className="bg-neon/10 text-neon border-neon/30 hover-scale glow-neon"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;