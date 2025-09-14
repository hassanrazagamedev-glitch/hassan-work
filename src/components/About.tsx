const About = () => {
  const highlights = [
    {
      icon: '🏆',
      value: '5+',
      label: 'Years Experience',
      description: 'Game Development',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🎮',
      value: '∞',
      label: 'Hybrid Systems',
      description: 'Gameplay Innovation',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: '🔧',
      value: '100%',
      label: 'Unity Ecosystem',
      description: 'Technical Expertise',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '🎓',
      value: 'IT',
      label: 'Graduate',
      description: 'Bachelor\'s Degree',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="mr-2">✨</span>
              Get to know me better
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate game developer crafting immersive digital experiences that push the boundaries of interactive entertainment
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-20">
            {/* Bio Content */}
            <div className="lg:col-span-3 animate-slide-up">
              <div className="card-elegant p-8 lg:p-10 backdrop-blur-sm bg-card/50">
                <h3 className="text-2xl font-bold mb-8 text-gradient">My Journey</h3>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    With over <span className="text-primary font-semibold">5 years of dedicated game development experience</span>, I specialize in creating 
                    innovative hybrid gameplay systems that captivate players and drive engagement. My 
                    journey in the gaming industry has been fueled by a passion for blending creative 
                    storytelling with cutting-edge technical implementation.
                  </p>

                  <p>
                    Currently serving as a <span className="text-primary font-semibold">Game Developer at 9D Technologies</span>, I lead the development of 
                    complex idle tycoon games integrated with match-3 mechanics. My expertise spans the 
                    entire Unity ecosystem, with particular strength in <span className="text-primary font-semibold">dependency injection patterns 
                    using Zenject and reactive programming with UniRx</span>.
                  </p>

                  <p>
                    I believe in the power of <span className="text-primary font-semibold">scalable architecture and clean code practices</span> to create 
                    games that not only perform exceptionally but also provide maintainable foundations 
                    for future enhancements. My approach combines technical precision with creative 
                    innovation to deliver gaming experiences that resonate with players.
                  </p>

                  <p>
                    When I'm not coding, you'll find me exploring the latest gaming trends, contributing 
                    to open-source projects, or <span className="text-primary font-semibold">mentoring aspiring developers</span> in the Unity community. 
                    I'm always excited to collaborate on projects that push the boundaries of what's 
                    possible in game development.
                  </p>
                </div>

                {/* Skills Preview */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Core Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Unity 3D', 'C# Programming', 'Zenject DI', 'UniRx', 'Mobile Optimization', 'Game Architecture'].map((skill, i) => (
                      <span 
                        key={skill}
                        className="skill-badge px-4 py-2 rounded-full text-sm font-medium animate-scale-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="lg:col-span-2 space-y-6 animate-scale-in">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.label}
                  className="card-elegant p-6 group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{highlight.icon}</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">{highlight.value}</div>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {highlight.label}
                  </h4>
                </div>
              ))}

              {/* Call to Action Card */}
              <div className="card-elegant p-6 bg-gradient-subtle border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Ready to Collaborate?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let's build something amazing together
                  </p>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full btn-primary py-2 rounded-lg font-medium hover:scale-105 transition-transform"
                  >
                    Let's Connect
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack Showcase */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-12">
              <span className="text-gradient">Technology Stack</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Unity', icon: '🎮' },
                { name: 'C#', icon: '💻' },
                { name: 'Zenject', icon: '🔧' },
                { name: 'UniRx', icon: '⚡' },
                { name: 'Mobile', icon: '📱' },
                { name: 'Git', icon: '🌿' }
              ].map((tech, i) => (
                <div 
                  key={tech.name}
                  className="card-elegant p-6 text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default About;