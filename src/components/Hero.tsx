import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink, Download, Play, Code, Gamepad2 } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

const Hero = () => {
  // 🔥 Rotating status messages
  const messages = [
    'Available for new opportunities',
    'Open to collaborations',
    'Let’s build something amazing 🚀',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Code className="h-5 w-5" /> },
    { value: '50+', label: 'Games Published', icon: <Gamepad2 className="h-5 w-5" /> },
    { value: '2M+', label: 'Downloads', icon: <Play className="h-5 w-5" /> },
  ];

  return (
    <section
      id="home"
      className="hero-section flex items-center justify-center relative overflow-hidden min-h-screen"
    >
      <div className="container mx-auto section-padding">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 animate-fade-in">
            
            {/* 🔥 Dynamic Status Badge */}
            <div className="relative inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 overflow-hidden">
              {/* glowing green aura */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>
              </div>
              <div className="relative flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                {messages[index]}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-primary text-lg font-medium mb-4 tracking-wide">👋 Hello, I'm</p>
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
                Muhammad Hassan{' '}
                <span className="text-gradient block lg:inline">Raza</span>
              </h1>
              <div className="relative">
                <p className="text-xl lg:text-3xl text-muted-foreground mb-8 font-light leading-relaxed">
                  <span className="text-primary font-semibold">🎮 Game Developer</span> ·
                  <span className="text-primary font-semibold"> Unity Specialist</span> ·
                  <span className="text-primary font-semibold"> Hybrid Genre Innovator</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              I craft <span className="text-primary font-semibold">scalable 2D and 3D games</span> that blend creativity with technical precision. 
              Currently at <span className="text-primary font-semibold">9D Technologies</span>, I'm building an innovative 
              <span className="text-primary font-semibold"> Idle Tycoon game with Match-3 mechanics</span> using Unity, Zenject, and UniRx.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="btn-primary px-8 py-4 text-lg font-semibold group"
              >
                <span className="flex items-center">
                  View My Projects
                  <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-secondary px-8 py-4 text-lg font-semibold group"
                asChild
              >
                <a
                  href="/Resume_M_Hassan_Raza.pdf"
                  download="Muhammad_Hassan_Raza_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-primary">{stat.icon}</span>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary animate-float group"
            >
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
              <span className="ml-2 text-sm">Scroll to learn more</span>
            </Button>
          </div>

          {/* Visual Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating Border */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-primary opacity-75 animate-spin pointer-events-none"
                  style={{ animationDuration: '20s' }}
                ></div>
                <div className="absolute inset-2 rounded-full bg-background pointer-events-none"></div>

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden hero-glow">
                  <img
                    src={profileImage}
                    alt="Muhammad Hassan Raza - Game Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-2xl blur-xl animate-float rotate-12 pointer-events-none"></div>
                <div
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/15 rounded-2xl blur-2xl animate-float pointer-events-none"
                  style={{ animationDelay: '2s', transform: 'rotate(-15deg)' }}
                ></div>

                {/* Orbiting Icons */}
                <div
                  className="absolute inset-0 animate-spin pointer-events-none"
                  style={{ animationDuration: '30s' }}
                >
                  <div className="absolute -top-4 left-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div
                  className="absolute inset-0 animate-spin pointer-events-none"
                  style={{ animationDuration: '25s', animationDirection: 'reverse' }}
                >
                  <div className="absolute top-1/2 -right-4 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div
                  className="absolute inset-0 animate-spin pointer-events-none"
                  style={{ animationDuration: '35s' }}
                >
                  <div className="absolute -bottom-4 left-1/4 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Technology Pills */}
              <div className="absolute -right-4 top-1/4 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
                <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  Unity 3D
                </div>
              </div>

              <div className="absolute -left-6 top-3/4 animate-float pointer-events-none" style={{ animationDelay: '3s' }}>
                <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  C# Expert
                </div>
              </div>

              <div className="absolute right-1/4 -bottom-6 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
                <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  Zenject
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-[32rem] h-[32rem] bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '5s' }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-5 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
