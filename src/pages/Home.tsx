import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Home as HomeIcon, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-interior.jpg';

const Home = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: 'Custom Design',
      description: 'Tailored spaces that reflect your unique style and personality.',
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-secondary" />,
      title: 'Complete Interiors',
      description: 'From concept to completion, we handle every detail of your space.',
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: 'Thoughtful Spaces',
      description: 'Creating environments that inspire and nurture your daily life.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-gradient">
              Serene Spaces
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
              Creating beautiful, harmonious interiors that inspire tranquility and joy
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Start Your Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gradient">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in creating spaces that are not just beautiful, but deeply personal 
                and functionally perfect for your lifestyle.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="card-soft text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gradient">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create an interior that tells your story and 
              brings your vision to life.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;