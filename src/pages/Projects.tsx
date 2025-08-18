import ScrollReveal from '@/components/ScrollReveal';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-gradient">
                Projects
              </h1>
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
      <section className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 200}>
              <Link to={`/projects/${project.id}`} className="group cursor-pointer block relative">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <span className="text-white/80 text-sm mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-serif font-light mb-2">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-white/80" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl font-serif font-light mb-6 text-gradient">
                Create Your Dream Space
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Project
                </button>
                <button className="btn-secondary">
                  View More
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