import { Calendar, MapPin, Building, Award, Zap, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Game Developer',
      company: '9D Technologies',
      period: 'Sep 2022 – Present',
      location: 'Remote',
      description: [
        'Leading development of innovative idle tycoon game with integrated match-3 mechanics',
        'Architecting scalable game systems using Unity, Zenject dependency injection, and UniRx reactive programming',
        'Implementing performance optimization strategies for mobile platforms',
        'Collaborating with cross-functional teams to deliver high-quality gaming experiences'
      ],
      current: true,
      icon: '🚀',
      color: 'from-blue-500 to-purple-600',
      achievements: ['Architecture Leadership', 'Performance Optimization', 'Team Collaboration']
    },
    {
      title: 'Game Developer',
      company: 'BIG4 Technology',
      period: 'Sep 2021 – Sep 2022',
      location: 'Remote',
      description: [
        'Developed multiple mobile games using Unity engine with focus on user engagement',
        'Implemented monetization strategies and in-app purchase systems',
        'Optimized game performance and reduced loading times by 40%',
        'Mentored junior developers in Unity best practices and coding standards'
      ],
      current: false,
      icon: '⚡',
      color: 'from-green-500 to-teal-600',
      achievements: ['40% Performance Boost', 'Monetization Expert', 'Mentorship']
    },
    {
      title: 'Unity Developer',
      company: 'Games Lobby',
      period: 'Aug 2020 – Sep 2021',
      location: 'Remote',
      description: [
        'Built engaging 2D and 3D mobile games from concept to deployment',
        'Developed custom game mechanics and physics systems',
        'Integrated analytics and crash reporting for better user insights',
        'Collaborated with designers to implement UI/UX improvements'
      ],
      current: false,
      icon: '🎮',
      color: 'from-orange-500 to-red-600',
      achievements: ['Full-Stack Development', 'Analytics Integration', 'UI/UX Focus']
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Career Timeline
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey in game development, building innovative solutions and leading technical initiatives
            </p>
          </div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-16 animate-slide-up ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`} style={{ animationDelay: `${index * 0.3}s` }}>
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 -ml-3 md:-ml-3 z-10">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-background flex items-center justify-center`}>
                    <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-white animate-pulse' : 'bg-white/80'}`}></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="card-elegant p-8 group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start mb-4 lg:mb-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl">{exp.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-muted-foreground">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-2" />
                              <span className="font-semibold text-primary">{exp.company}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {exp.current && (
                        <div className="flex items-center">
                          <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-medium flex items-center">
                            <Zap className="h-4 w-4 mr-2" />
                            Current Role
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="skill-badge px-3 py-1 rounded-full text-xs font-medium flex items-center"
                        >
                          <Award className="h-3 w-3 mr-1" />
                          {achievement}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 0.1}s` }}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-accent transition-colors"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-24 animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Education</span>
              </h3>
              <p className="text-muted-foreground">Foundation of my technical expertise</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="card-elegant p-8 text-center group hover:scale-105 transition-all duration-300 bg-gradient-subtle">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎓</span>
                </div>
                <h4 className="text-2xl font-bold mb-3 text-foreground">Bachelor's in Information Technology</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive education covering software development, algorithms, computer science fundamentals, 
                  and the theoretical foundation that supports my practical game development expertise.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {['Algorithms', 'Data Structures', 'Software Engineering', 'Database Systems'].map((subject, i) => (
                    <span 
                      key={subject}
                      className="skill-badge px-4 py-2 rounded-full text-sm font-medium animate-scale-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
      </div>
    </section>
  );
};

export default Experience;