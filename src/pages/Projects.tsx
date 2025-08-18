import ScrollReveal from '@/components/ScrollReveal';
import { ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Tranquil Bedroom Retreat',
      category: 'Residential',
      description: 'A serene bedroom design featuring soft lavender tones and natural materials, creating the perfect sanctuary for rest and relaxation.',
      image: project1,
      year: '2024',
    },
    {
      id: 2,
      title: 'Elegant Dining Experience',
      category: 'Residential',
      description: 'Sophisticated dining room with dusty rose accents and warm wood tones, designed for intimate gatherings and memorable meals.',
      image: project2,
      year: '2024',
    },
    {
      id: 3,
      title: 'Inspiring Home Office',
      category: 'Workspace',
      description: 'A productive yet calming workspace with sage green elements and natural light, designed to inspire creativity and focus.',
      image: project3,
      year: '2024',
    },
  ];

  const categories = ['All', 'Residential', 'Workspace', 'Commercial'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-gradient">
                Our Projects
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A curated collection of our most cherished interior design projects, 
                each telling a unique story of transformation and beauty.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 200}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{project.year}</span>
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-light mb-6 text-gradient">
                Ready to Create Your Dream Space?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every project is a new opportunity to create something beautiful and meaningful. 
                Let's discuss how we can transform your space into something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Your Project
                </button>
                <button className="btn-secondary">
                  View More Work
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Projects;