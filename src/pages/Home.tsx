import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Home as HomeIcon, Heart, Star, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-interior.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-white">
              Serene Spaces
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Beautiful interiors
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
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
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            { image: gallery1, title: 'Living Room' },
            { image: gallery2, title: 'Kitchen' },
            { image: gallery3, title: 'Reading Nook' },
            { image: gallery4, title: 'Bathroom' }
          ].map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group cursor-pointer relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-serif font-light">{item.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects" },
              { number: "8", label: "Years" },
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div>
                  <div className="text-4xl font-serif font-light text-gradient mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-serif font-light mb-6 text-gradient">
              Transform Your Space
            </h2>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Project <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;