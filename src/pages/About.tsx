import ScrollReveal from '@/components/ScrollReveal';
import ParallaxSection from '@/components/ParallaxSection';
import { Award, Users, Lightbulb, Heart } from 'lucide-react';
import aboutHero from '@/assets/about-hero.jpg';
import luxuryLiving from '@/assets/luxury-living.jpg';
import elegantKitchen from '@/assets/elegant-kitchen.jpg';
import homeOffice from '@/assets/home-office.jpg';
import KnowMore from '@/assets/know-more.png';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Passion',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: 'Innovation',
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: 'Collaboration',
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Excellence',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.5}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${aboutHero}')` }}
          />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-cover bg-center">
            <img src={KnowMore} alt="About Hero" className="w-32 h-32 object-cover" />
          </div>
        </ParallaxSection>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Creating beautiful spaces for over a decade
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <ScrollReveal>
            <div className="relative h-[70vh]">
              <img
                src={luxuryLiving}
                alt="Luxury Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-light text-white mb-2">
                  Timeless Design
                </h3>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative h-[70vh]">
              <img
                src={elegantKitchen}
                alt="Elegant Spaces"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-light text-white mb-2">
                  Thoughtful Details
                </h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative h-screen overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${homeOffice})` }}
          />
        </ParallaxSection>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-serif font-light text-white mb-8">
                Design Philosophy
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                We believe spaces should inspire. Every project tells a unique story, 
                blending aesthetics with purpose to create environments that enhance daily life.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16 text-gradient">
              Our Values
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-foreground">
                    {value.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gradient">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A passionate collective of designers, architects, and craftspeople 
              dedicated to transforming your vision into reality.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
