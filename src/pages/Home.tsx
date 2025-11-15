import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Home as HomeIcon, Heart, Sparkles, Layers, Paintbrush } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ParallaxSection from '@/components/ParallaxSection';
import Testimonials from '@/components/Testimonials';
import BeforeAfter from '@/components/BeforeAfter';
import heroImage from '@/assets/hero-interior.jpg';
import beforeLiving from '@/assets/before-living.jpg';
import afterLiving from '@/assets/after-living.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import luxuryLiving from '@/assets/luxury-living.jpg';
import elegantKitchen from '@/assets/elegant-kitchen.jpg';
import sereneBedroom from '@/assets/serene-bedroom.jpg';
import homeOffice from '@/assets/home-office.jpg';
import detailMaterials from '@/assets/detail-materials.jpg';
import elegantDining from '@/assets/elegant-dining.jpg';

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
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="https://cdn.pixabay.com/video/2021/08/04/84236-579440835_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light mb-4 sm:mb-6 text-white">
              Serene Spaces
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-light">
              Beautiful interiors
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/projects" className="w-full sm:w-auto">
                <button className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  View Work <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="btn-secondary w-full sm:w-auto">
                  Contact
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="card-soft text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Spaces Section */}
      <section className="py-0">
        <ScrollReveal>
          <div className="relative h-screen">
            <img
              src={luxuryLiving}
              alt="Luxury Living Space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <h2 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">
                Timeless Elegance
              </h2>
              <p className="text-xl text-white/90 max-w-2xl">
                Where luxury meets comfort
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2">
          <ScrollReveal delay={200}>
            <div className="relative h-[70vh]">
              <img
                src={elegantKitchen}
                alt="Elegant Kitchen Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-light text-white">Kitchen Design</h3>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative h-[70vh]">
              <img
                src={sereneBedroom}
                alt="Serene Bedroom Retreat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-light text-white">Bedroom Sanctuaries</h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <BeforeAfter 
            beforeImage={beforeLiving}
            afterImage={afterLiving}
            title="Transformations That Inspire"
          />
        </div>
      </section>

      {/* Design Philosophy Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <ParallaxSection speed={0.5}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${detailMaterials})` }}
          />
        </ParallaxSection>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-serif font-light text-white mb-8">
                Crafted with Intention
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Every detail matters. From the texture of fabrics to the play of light, 
                we create spaces that tell your story.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-0">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
          {[
            { image: gallery1, title: 'Living' },
            { image: homeOffice, title: 'Work' },
            { image: gallery2, title: 'Kitchen' },
            { image: gallery3, title: 'Relax' },
            { image: elegantDining, title: 'Dining' },
            { image: gallery4, title: 'Refresh' }
          ].map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="group cursor-pointer relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16 text-gradient">
              Our Approach
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: <Sparkles className="w-10 h-10 text-primary" />,
                title: 'Vision',
                description: 'Understanding your dreams and translating them into timeless designs.',
              },
              {
                icon: <Layers className="w-10 h-10 text-secondary" />,
                title: 'Craft',
                description: 'Meticulous attention to every layer, texture, and detail of your space.',
              },
              {
                icon: <Paintbrush className="w-10 h-10 text-accent" />,
                title: 'Artistry',
                description: 'Blending aesthetics with functionality for spaces that inspire.',
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="text-center group">
                  <div className="flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-medium mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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