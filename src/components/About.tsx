const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate game developer crafting immersive digital experiences
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Bio */}
            <div className="lg:col-span-2 animate-slide-up">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  With over 5 years of dedicated game development experience, I specialize in creating 
                  innovative hybrid gameplay systems that captivate players and drive engagement. My 
                  journey in the gaming industry has been fueled by a passion for blending creative 
                  storytelling with cutting-edge technical implementation.
                </p>

                <p>
                  Currently serving as a Game Developer at 9D Technologies, I lead the development of 
                  complex idle tycoon games integrated with match-3 mechanics. My expertise spans the 
                  entire Unity ecosystem, with particular strength in dependency injection patterns 
                  using Zenject and reactive programming with UniRx.
                </p>

                <p>
                  I believe in the power of scalable architecture and clean code practices to create 
                  games that not only perform exceptionally but also provide maintainable foundations 
                  for future enhancements. My approach combines technical precision with creative 
                  innovation to deliver gaming experiences that resonate with players.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring the latest gaming trends, contributing 
                  to open-source projects, or mentoring aspiring developers in the Unity community. 
                  I'm always excited to collaborate on projects that push the boundaries of what's 
                  possible in game development.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="animate-scale-in">
              <div className="card-elegant p-8">
                <h3 className="text-xl font-semibold mb-6 text-gradient">Quick Highlights</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-xl">5+</span>
                    </div>
                    <div>
                      <p className="font-semibold">Years Experience</p>
                      <p className="text-sm text-muted-foreground">Game Development</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-xl">🎮</span>
                    </div>
                    <div>
                      <p className="font-semibold">Hybrid Systems</p>
                      <p className="text-sm text-muted-foreground">Gameplay Innovation</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-xl">🔧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Unity Ecosystem</p>
                      <p className="text-sm text-muted-foreground">Technical Expertise</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-xl">🎓</span>
                    </div>
                    <div>
                      <p className="font-semibold">IT Graduate</p>
                      <p className="text-sm text-muted-foreground">Bachelor's Degree</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;