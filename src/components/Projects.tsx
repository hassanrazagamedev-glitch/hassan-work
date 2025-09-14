import { ExternalLink, Play, Star, Download, Eye, Code, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dirtbikeImage from '@/assets/project-dirtbike.jpg';
import differenceImage from '@/assets/project-difference.jpg';
import drawImage from '@/assets/project-draw.jpg';
import sniperImage from '@/assets/project-sniper.jpg';
import rollImage from '@/assets/project-rolling.jpg';

const Projects = () => {
  const projects = [
  {
    title: 'Idle Restaurant Tycoon: Match3',
    description: '🍔 Idle Restaurant Tycoon: Match3 – Build your food empire, one match at a time! A hybrid of idle simulation and match-3 puzzle gameplay where you manage restaurants while solving tasty puzzles.',
    image: dirtbikeImage, // Replace with proper restaurant image asset
    tags: ['Unity 3D', 'Idle', 'Mobile', 'Match3'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.idle.restaurant.food.tycoon.game&hl=en_US',
    featured: true,
    stats: { downloads: '50K+', rating: 4.5, users: '50K+' },
    color: 'from-orange-500 to-red-500',
    category: 'Idle'
  },
 {
  title: 'Draw One Part: Tricky Puzzle',
  description: 'A creative brain teaser where players complete drawings by adding missing parts. Blends artistic creativity with logical thinking across hundreds of puzzles with progressive difficulty.',
  image: drawImage,
  tags: ['Unity 2D', 'Brain Teaser', 'Creative', 'Art'],
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.draw.puzzle.one.part.missing',
  featured: true,
  stats: { downloads: '250K+', rating: 4.6, users: '120K+' },
  color: 'from-green-500 to-teal-500',
  category: 'Creative'
},

  {
    title: 'Draw One Part: Tricky Puzzle',
    description: 'A creative brain teaser where players complete drawings by adding missing parts. Blends artistic creativity with logical thinking across hundreds of puzzles with progressive difficulty.',
    image: drawImage,
    tags: ['Unity 2D', 'Brain Teaser', 'Creative', 'Art'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.draw.puzzle.one.part.missing,
    featured: true,
    stats: { downloads: '250K+', rating: 4.6, users: '120K+' },
    color: 'from-green-500 to-teal-500',
    category: 'Creative'
  },
  {
    title: 'Real Sniper Gun Shooting',
    description: 'Realistic first-person shooter with precision aiming mechanics, multiple weapons, and challenging missions. Includes advanced AI, immersive environments, and competitive multiplayer modes.',
    image: sniperImage,
    tags: ['Unity 3D', 'FPS', 'Action', 'Shooter'],
    playStoreUrl: 'https://apkpure.com/sniper-games-3d-shooting-game/com.real.sniper.gun.shooting.epic.games',
    featured: false,
    stats: { downloads: '1M+', rating: 4.4, users: '500K+' },
    color: 'from-purple-500 to-pink-500',
    category: 'Action'
  },
  {
    title: 'Balls Game - Rolling 3D',
    description: 'Dynamic 3D rolling ball game with physics-based controls, obstacle courses, and endless challenges. Test your reflexes with progressively harder levels and smooth arcade gameplay.',
    image: rollImage,
    tags: ['Unity 3D', 'Casual', 'Arcade', 'Physics'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.balls.game.going.rolling.merge',
    featured: false,
    stats: { downloads: '500K+', rating: 4.2, users: '250K+' },
    color: 'from-yellow-500 to-orange-500',
    category: 'Arcade'
  }
];


  const projectStats = [
    { label: 'Total Downloads', value: '2M+', icon: <Download className="h-5 w-5" /> },
    { label: 'Active Players', value: '870K+', icon: <Users className="h-5 w-5" /> },
    { label: 'Games Published', value: '10+', icon: <Code className="h-5 w-5" /> },
    { label: 'Awards Won', value: '5+', icon: <Award className="h-5 w-5" /> },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Play className="h-4 w-4 mr-2" />
              Portfolio Showcase
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A showcase of games I've developed from concept to deployment, featuring millions of downloads across Google Play Store
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {projectStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card-elegant p-6 text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-primary group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </span>
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group animate-scale-in ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`card-elegant overflow-hidden relative ${
                  project.featured ? 'ring-2 ring-primary/30' : ''
                }`}>
                  {/* Project Image Container */}
                  <div className={`relative overflow-hidden ${project.featured ? 'h-80' : 'h-64'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button 
                          variant="ghost" 
                          size="lg"
                          className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
                          onClick={() => window.open(project.playStoreUrl, '_blank')}
                        >
                          <Play className="h-5 w-5 mr-2" />
                          Play Now
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="lg"
                          className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
                          onClick={() => window.open(project.playStoreUrl, '_blank')}
                        >
                          <Eye className="h-5 w-5 mr-2" />
                          Details
                        </Button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-lg`}>
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Download className="h-3 w-3 mr-1" />
                            {project.stats.downloads}
                          </span>
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1 text-yellow-400" />
                            {project.stats.rating}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {project.stats.users}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0 mt-2`}></div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="skill-badge px-4 py-2 rounded-full text-sm font-medium group-hover:scale-105 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        className="btn-secondary flex-1 group-hover:scale-105 transition-transform duration-300"
                        onClick={() => window.open(project.playStoreUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Play Store
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <div className="card-elegant p-12 bg-gradient-subtle max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-8 flex items-center justify-center animate-float">
                  <Code className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">
                  Let's Build Your Next Hit Game
                </h3>
                
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                  Ready to turn your game idea into reality? Whether it's a casual puzzle, action-packed shooter, 
                  or innovative hybrid gameplay, I have the expertise to bring your vision to life with scalable architecture and engaging mechanics.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="btn-primary px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Your Project
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="btn-secondary px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More About Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Projects;
