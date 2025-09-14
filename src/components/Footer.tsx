import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Muhammad Hassan Raza. Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
            <span>and lots of ☕</span>
          </div>

          {/* Additional Info */}
          <div className="text-muted-foreground text-sm">
            <span>Game Developer • Unity Specialist • Hybrid Genre Innovator</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;