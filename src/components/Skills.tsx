import { Code, Zap, Gamepad2, Settings, Palette, TrendingUp, Users, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Technologies',
      icon: <Code className="h-6 w-6" />,
      skills: ['Unity (C#)', 'Zenject', 'UniRx']
    },
    {
      title: 'Architecture',
      icon: <Settings className="h-6 w-6" />,
      skills: ['Dependency Injection', 'Performance Optimization', 'Scalability']
    },
    {
      title: 'Game Development',
      icon: <Gamepad2 className="h-6 w-6" />,
      skills: ['Gameplay Programming', 'Game Mechanics', 'Animation & Physics']
    },
    {
      title: 'UI/UX',
      icon: <Palette className="h-6 w-6" />,
      skills: ['GUI Design', 'Responsiveness', 'User Experience']
    },
    {
      title: 'Business',
      icon: <TrendingUp className="h-6 w-6" />,
      skills: ['Monetization Strategies', 'Player Retention', 'Analytics']
    },
    {
      title: 'Collaboration',
      icon: <Users className="h-6 w-6" />,
      skills: ['Team Collaboration', 'Code Reviews', 'Agile Development']
    }
  ];

  const expertise = [
    { name: 'Unity Development', level: 95 },
    { name: 'C# Programming', level: 90 },
    { name: 'Game Architecture', level: 88 },
    { name: 'Mobile Optimization', level: 85 },
    { name: 'Zenject/UniRx', level: 82 },
    { name: 'UI/UX Design', level: 78 }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and methodologies I use to create amazing games
            </p>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="card-elegant p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="skill-badge inline-block px-3 py-1 rounded-md text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Levels */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-12">
              <span className="text-gradient">Expertise Levels</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((skill, index) => (
                <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-lg h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="card-elegant p-8 bg-gradient-subtle">
              <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate on your next game development project. I bring technical expertise, 
                creative problem-solving, and a passion for creating engaging player experiences.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;