import { ExternalLink, Play, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dirtbikeImage from '@/assets/project-dirtbike.jpg';
import differenceImage from '@/assets/project-difference.jpg';
import drawImage from '@/assets/project-draw.jpg';
import sniperImage from '@/assets/project-sniper.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Offroad Bike / Dirt Bike Game 2022',
      description: 'High-octane 3D motorcycle racing game featuring realistic physics, dynamic weather systems, and challenging off-road terrain. Built with Unity and optimized for mobile platforms.',
      image: dirtbikeImage,
      tags: ['Unity 3D', 'Physics', 'Mobile', 'Racing'],
      playStoreUrl: 'https://play.google.com',
      featured: true,
      stats: { downloads: '100K+', rating: 4.5 }
    },
    {
      title: 'Find the Difference',
      description: 'Engaging puzzle game that challenges players to spot differences between two similar images. Features hundreds of levels with increasing difficulty and beautiful artwork.',
      image: differenceImage,
      tags: ['Unity 2D', 'Puzzle', 'Casual', 'UI/UX'],
      playStoreUrl: 'https://play.google.com',
      featured: false,
      stats: { downloads: '500K+', rating: 4.3 }
    },
    {
      title: 'Draw One Part Tricky Puzzle',
      description: 'Creative brain teaser where players complete drawings by adding the missing piece. Combines artistic creativity with logical thinking across hundreds of unique puzzles.',
      image: drawImage,
      tags: ['Unity 2D', 'Brain Teaser', 'Creative', 'Art'],
      playStoreUrl: 'https://play.google.com',
      featured: true,
      stats: { downloads: '250K+', rating: 4.6 }
    },
    {
      title: 'Real Sniper Gun Shooting Epic Games',
      description: 'Realistic first-person shooter with precision aiming mechanics, multiple weapon systems, and challenging missions. Features advanced AI and stunning 3D environments.',
      image: sniperImage,
      tags: ['Unity 3D', 'FPS', 'Action', 'Shooting'],
      playStoreUrl: 'https://play.google.com',
      featured: false,
      stats: { downloads: '1M+', rating: 4.4 }
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of games I've developed, from concept to deployment on Google Play Store
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`card-elegant overflow-hidden animate-scale-in ${
                  project.featured ? 'ring-2 ring-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="ghost" 
                      size="lg"
                      className="text-white hover:bg-white/20"
                      onClick={() => window.open(project.playStoreUrl, '_blank')}
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Play Now
                    </Button>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="absolute top-4 right-4 bg-black/70 rounded-lg p-2 text-white text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Download className="h-3 w-3 mr-1" />
                        {project.stats.downloads}
                      </span>
                      <span className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-400" />
                        {project.stats.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="skill-badge px-3 py-1 rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="btn-secondary w-full"
                    onClick={() => window.open(project.playStoreUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on Play Store
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-muted-foreground mb-6 text-lg">
              Interested in seeing more of my work or discussing a potential project?
            </p>
            <Button 
              className="btn-primary px-8 py-3 text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;