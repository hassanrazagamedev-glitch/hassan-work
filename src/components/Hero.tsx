import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink, Download } from 'lucide-react';
import heroImage from '@/assets/hero-portrait.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <p className="text-primary text-lg font-medium mb-4">👋 Hello, I'm</p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Muhammad Hassan{' '}
                <span className="text-gradient">Raza</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
                🎮 Game Developer · Unity Specialist · Hybrid Genre Innovator
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I build scalable 2D and 3D games that blend creativity with technical precision. 
              Currently at 9D Technologies, I'm crafting an Idle Tycoon game with Match-3 mechanics 
              using Unity, Zenject, and UniRx.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="btn-primary px-8 py-3 text-lg font-semibold"
              >
                View Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary px-8 py-3 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={scrollToAbout}
              className="mt-12 text-muted-foreground hover:text-primary animate-float"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden hero-glow">
                <img 
                  src={heroImage} 
                  alt="Muhammad Hassan Raza - Game Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default Hero;