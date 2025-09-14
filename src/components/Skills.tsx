import { Code, Zap, Gamepad2, Settings, Palette, TrendingUp, Users, Target, Star, Trophy } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Technologies',
      icon: <Code className="h-6 w-6" />,
      skills: ['Unity (C#)', 'Zenject', 'UniRx'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Foundation technologies'
    },
    {
      title: 'Architecture',
      icon: <Settings className="h-6 w-6" />,
      skills: ['Dependency Injection', 'Performance Optimization', 'Scalability'],
      color: 'from-purple-500 to-pink-500',
      description: 'System design expertise'
    },
    {
      title: 'Game Development',
      icon: <Gamepad2 className="h-6 w-6" />,
      skills: ['Gameplay Programming', 'Game Mechanics', 'Animation & Physics'],
      color: 'from-green-500 to-emerald-500',
      description: 'Game creation skills'
    },
    {
      title: 'UI/UX',
      icon: <Palette className="h-6 w-6" />,
      skills: ['GUI Design', 'Responsiveness', 'User Experience'],
      color: 'from-orange-500 to-red-500',
      description: 'Interface design'
    },
    {
      title: 'Business',
      icon: <TrendingUp className="h-6 w-6" />,
      skills: ['Monetization Strategies', 'Player Retention', 'Analytics'],
      color: 'from-indigo-500 to-purple-500',
      description: 'Commercial success'
    },
    {
      title: 'Collaboration',
      icon: <Users className="h-6 w-6" />,
      skills: ['Team Collaboration', 'Code Reviews', 'Agile Development'],
      color: 'from-teal-500 to-green-500',
      description: 'Team dynamics'
    }
  ];

  const expertise = [
    { name: 'Unity Development', level: 95, icon: '🎮' },
    { name: 'C# Programming', level: 90, icon: '💻' },
    { name: 'Game Architecture', level: 88, icon: '🏗️' },
    { name: 'Mobile Optimization', level: 85, icon: '📱' },
    { name: 'Zenject/UniRx', level: 82, icon: '⚡' },
    { name: 'UI/UX Design', level: 78, icon: '🎨' }
  ];

  const achievements = [
    { title: 'Games Published', value: '10+', icon: '🚀' },
    { title: 'Total Downloads', value: '2M+', icon: '📱' },
    { title: 'Team Projects', value: '25+', icon: '👥' },
    { title: 'Years Active', value: '5+', icon: '⏰' }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Technical Expertise
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A comprehensive toolkit of technologies and methodologies I use to create exceptional gaming experiences
            </p>
          </div>

          {/* Achievements Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="card-elegant p-6 text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
                  {achievement.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>

          {/* Skill Categories Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Technical Stack</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className="card-elegant p-8 group hover:scale-105 transition-all duration-300 animate-scale-in bg-gradient-subtle backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white">{category.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i}
                        className="skill-badge flex items-center px-4 py-3 rounded-xl text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Levels */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Expertise Levels</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {expertise.map((skill, index) => (
                <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card-elegant p-6 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted/50 rounded-full h-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary transition-all duration-1000 ease-out rounded-full relative"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <div className="card-elegant p-12 bg-gradient-subtle max-w-4xl mx-auto relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-8 flex items-center justify-center animate-float">
                  <Target className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">
                  Ready to Build Something Amazing?
                </h3>
                
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  Let's collaborate on your next game development project. I bring technical expertise, 
                  creative problem-solving, and a passion for creating engaging player experiences that drive success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg group hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Let's Work Together
                      <Trophy className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300"
                  >
                    View My Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 right-1/6 w-64 h-64 bg-primary/2 rounded-full blur-2xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>
    </section>
  );
};

export default Skills;