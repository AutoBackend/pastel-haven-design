import ScrollReveal from '@/components/ScrollReveal';
import { Award, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: 'Passion',
      description: 'We pour our heart into every project, creating spaces with love and dedication.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-secondary" />,
      title: 'Innovation',
      description: 'Combining timeless design principles with fresh, contemporary ideas.',
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: 'Collaboration',
      description: 'Working closely with clients to understand their vision and bring it to life.',
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Excellence',
      description: 'Maintaining the highest standards in every aspect of our design process.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-gradient">
                About Serene Spaces
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are passionate interior designers dedicated to creating spaces that are both 
                beautiful and deeply personal, reflecting the unique essence of every client.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-serif font-light mb-6 text-gradient">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to transform ordinary spaces into extraordinary sanctuaries, 
                    Serene Spaces has been creating beautiful interiors for over a decade.
                  </p>
                  <p>
                    Our journey began with a simple belief: that our surroundings profoundly impact 
                    our well-being, creativity, and happiness. This philosophy drives every design 
                    decision we make.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of interior design, blending 
                    timeless elegance with contemporary innovation to create spaces that are 
                    both stunning and supremely livable.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3" />
                <div className="relative bg-card rounded-2xl p-8 card-soft">
                  <blockquote className="text-lg italic text-center">
                    "Design is not just what it looks like and feels like. 
                    Design is how it works, how it makes you feel, 
                    and how it enhances your daily life."
                  </blockquote>
                  <p className="text-center mt-4 font-medium text-primary">
                    — Our Design Philosophy
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-light mb-6 text-gradient">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to exceptional design.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-serif font-medium mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-light mb-6 text-gradient">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collaborative journey from initial consultation to final reveal.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Discovery & Consultation',
                  description: 'We begin by understanding your lifestyle, preferences, and vision for your space.',
                },
                {
                  step: '02',
                  title: 'Concept Development',
                  description: 'Creating initial design concepts and mood boards that capture your unique style.',
                },
                {
                  step: '03',
                  title: 'Design Refinement',
                  description: 'Collaborative refinement of the design, ensuring every detail aligns with your vision.',
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description: 'Bringing the design to life with careful coordination and attention to detail.',
                },
              ].map((process, index) => (
                <ScrollReveal key={index} delay={index * 200}>
                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-medium mb-2 text-foreground">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;