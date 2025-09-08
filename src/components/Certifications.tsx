import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2025",
      status: "Certified",
      description: "Cybersecurity fundamentals, risk management, and security protocols",
      skills: ["Network Security", "Risk Assessment", "Incident Response", "Compliance"],
      verifyLink: "#"
    },
    {
      id: 2,
      title: "Google IT Support Certificate",
      issuer: "Google Career Certificates",
      date: "2024",
      status: "Completed",
      description: "Comprehensive IT support training covering troubleshooting and customer service",
      skills: ["Hardware Troubleshooting", "OS Administration", "Customer Service", "Network Protocols"],
      verifyLink: "#"
    },
    {
      id: 3,
      title: "Software QA Training",
      issuer: "Professional Development Institute",
      date: "2024",
      status: "Certified",
      description: "Quality assurance methodologies, testing frameworks, and bug tracking",
      skills: ["Test Planning", "Automation Testing", "Bug Reporting", "SDLC"],
      verifyLink: "#"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-display text-gradient">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional credentials that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="glass-card p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-neon glow-neon" />
                <Badge 
                  className={`${
                    cert.status === "Certified" 
                      ? "bg-neon/10 text-neon border-neon/30" 
                      : "bg-accent/10 text-accent border-accent/30"
                  }`}
                >
                  {cert.status}
                </Badge>
              </div>
              
              <div className="space-y-3 mb-4">
                <h3 className="font-display font-semibold text-xl text-accent">
                  {cert.title}
                </h3>
                
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  Verify Certificate
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;