import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle py-16 border-t border-[#26594030]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-gradient">
              Serene Spaces
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Creating beautiful, harmonious interiors that inspire tranquility and joy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Services</h4>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <span>Interior Design</span>
              <span>Space Planning</span>
              <span>Color Consultation</span>
              <span>Furniture Selection</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@serenespaces.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Design St, Creative City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Serene Spaces. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>for beautiful spaces</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;