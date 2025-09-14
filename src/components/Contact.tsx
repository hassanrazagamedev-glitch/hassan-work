import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Download,
  ExternalLink,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react';

const FiverrIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-5 w-5 fill-white">
    <circle cx="50" cy="50" r="50" fill="currentColor" />
    <text x="50%" y="55%" textAnchor="middle" fontSize="40" fontWeight="bold" fill="black">f</text>
  </svg>
);

const UpworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-5 w-5 fill-white">
    <circle cx="50" cy="50" r="50" fill="currentColor" />
    <text x="50%" y="55%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="black">U</text>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thanks for reaching out. I'll get back to you within 24 hours!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'hassan.raza@gamedev.com',
      link: 'mailto:hassan.raza@gamedev.com',
      description: 'Send me an email',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+92-303-3698469',
      link: 'tel:+923033698469',
      description: 'Call me directly',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Remote / Global',
      link: null,
      description: 'Available worldwide',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      username: '@muhammad-hassan-raza',
      url: 'https://linkedin.com/in/muhammad-hassan-raza',
      color: 'from-blue-600 to-blue-700',
      description: 'Professional network'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      username: '@hassan-game-dev',
      url: 'https://github.com/muhammad-hassan-raza',
      color: 'from-gray-700 to-gray-800',
      description: 'Open source projects'
    }
  ];

  const hireLinks = [
    {
      icon: <FiverrIcon />,
      label: 'Fiverr',
      username: '@hassan_raza_dev',
      url: 'https://www.fiverr.com/s/zWRYXWg',
      color: 'from-green-500 to-emerald-600',
      description: 'Freelance game dev services'
    },
    {
      icon: <UpworkIcon />,
      label: 'Upwork',
      username: 'Hassan',
      url: 'https://www.upwork.com/freelancers/~01be4046d599a8ef82?mp_source=share',
      color: 'from-teal-500 to-cyan-600',
      description: 'Hire me for long-term projects'
    }
  ];

  const features = [
    { icon: <Clock className="h-5 w-5" />, text: '24h Response Time' },
    { icon: <MessageSquare className="h-5 w-5" />, text: 'Free Consultation' },
    { icon: <CheckCircle className="h-5 w-5" />, text: 'Project Discussion' },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your next game development project? I'm always excited to explore 
              new opportunities and collaborate with passionate teams to create amazing gaming experiences.
            </p>
          </div>

          {/* Features Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <div 
                key={feature.text}
                className="card-elegant p-6 text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <span className="text-primary group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </span>
                </div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-elegant p-8 lg:p-10 animate-slide-up bg-card/80 backdrop-blur-sm">
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">Send Me a Message</h3>
                  <p className="text-muted-foreground">
                    Share your project ideas, ask questions, or just say hello. I'd love to hear from you!
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full h-12 bg-muted/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full h-12 bg-muted/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, budget, or just say hello! I'm excited to learn about your vision and discuss how we can bring it to life."
                      rows={6}
                      required
                      className="w-full resize-none bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card-elegant p-8 animate-scale-in bg-gradient-subtle">
                <h3 className="text-xl font-bold mb-6 text-gradient">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="group">
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="flex items-start p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white">{info.icon}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {info.label}
                            </p>
                            <p className="text-sm text-muted-foreground mb-1">
                              {info.description}
                            </p>
                            <p className="text-sm font-medium text-primary">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start p-4 rounded-xl border border-border">
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                            <span className="text-white">{info.icon}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{info.label}</p>
                            <p className="text-sm text-muted-foreground mb-1">{info.description}</p>
                            <p className="text-sm font-medium text-primary">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-elegant p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold mb-6 text-gradient">Connect Online</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white">{social.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">{social.description}</p>
                        <p className="text-sm font-medium text-primary">{social.username}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="card-elegant p-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gradient">Download Resume</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Get my complete resume with detailed experience, projects, and technical skills information.
                  </p>
                  <Button variant="outline" className="btn-secondary w-full group hover:scale-105 transition-all duration-300" asChild>
                    <a 
                      href="/Resume_M_Hassan_Raza.pdf" 
                      download="Muhammad_Hassan_Raza_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hire Me Section */}
              <div className="card-elegant p-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-bold mb-6 text-gradient">Hire Me</h3>
                
                <div className="space-y-4">
                  {hireLinks.map((site) => (
                    <a
                      key={site.label}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${site.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white">{site.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {site.label}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">{site.description}</p>
                        <p className="text-sm font-medium text-primary">{site.username}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
      </div>
    </section>
  );
};

export default Contact;
