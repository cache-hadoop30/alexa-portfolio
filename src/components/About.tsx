const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-display text-gradient">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              I thrive at the intersection of{" "}
              <span className="text-accent font-semibold">web development</span>,{" "}
              <span className="text-accent font-semibold">technical support</span>, and{" "}
              <span className="text-accent font-semibold">quality assurance</span> — 
              ensuring not just that systems work, but that they work reliably and are well-documented.
            </p>
            
            <p className="text-foreground/80">
              My journey in IT has taught me that the best solutions come from understanding 
              both the technical challenges and the human needs behind them. Whether I'm debugging 
              code, writing comprehensive test cases, or helping users navigate complex systems, 
              I bring the same methodical approach and attention to detail.
            </p>
            
            <div className="glass-card p-6 rounded-xl inline-block">
              <p className="text-neon font-medium">
                ☕ Fun fact: I write my best code with a perfect cup of coffee and a well-organized workspace!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;