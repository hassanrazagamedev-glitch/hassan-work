import { Calendar, MapPin, Building } from 'lucide-react';

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
      current: true
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
      current: false
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
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in game development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative timeline-line">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Dot */}
                <div className="absolute left-4 w-8 h-8 -ml-4 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-background animate-pulse' : 'bg-background'}`}></div>
                </div>

                {/* Experience Card */}
                <div className="ml-16 card-elegant p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
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
                    {exp.current && (
                      <div className="mt-4 lg:mt-0">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          Current
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Education</span>
            </h3>
            <div className="card-elegant p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl">🎓</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Bachelor's in Information Technology</h4>
              <p className="text-muted-foreground">
                Comprehensive education covering software development, algorithms, and computer science fundamentals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;