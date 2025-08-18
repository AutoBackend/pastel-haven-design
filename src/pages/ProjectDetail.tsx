import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    '1': {
      title: 'Tranquil Bedroom Retreat',
      category: 'Residential',
      description: 'A serene bedroom design featuring soft lavender tones and natural materials, creating the perfect sanctuary for rest and relaxation.',
      image: project1,
      year: '2024',
      location: 'San Francisco, CA',
      client: 'Private Residence',
      duration: '6 weeks',
      fullDescription: 'This tranquil bedroom retreat was designed to create a peaceful sanctuary for rest and rejuvenation. The space features soft lavender tones paired with natural materials like organic cotton bedding and reclaimed wood furniture. The room\'s design emphasizes simplicity and serenity, with carefully curated lighting that mimics the natural progression of daylight.',
      challenge: 'The main challenge was transforming a cramped, poorly lit bedroom into an airy, peaceful retreat while maximizing storage and maintaining the room\'s intimate feel.',
      solution: 'We opened up the space by removing non-structural elements and installed a large window to bring in natural light. Custom built-in storage was seamlessly integrated into the design, while soft textures and calming colors created the desired tranquil atmosphere.',
      images: [project1, project2, project3]
    },
    '2': {
      title: 'Elegant Dining Experience',
      category: 'Residential', 
      description: 'Sophisticated dining room with dusty rose accents and warm wood tones, designed for intimate gatherings and memorable meals.',
      image: project2,
      year: '2024',
      location: 'New York, NY',
      client: 'Private Residence',
      duration: '8 weeks',
      fullDescription: 'This elegant dining room was designed to create the perfect setting for intimate gatherings and memorable meals. The space features sophisticated dusty rose accents against warm wood tones, creating an inviting atmosphere that encourages conversation and connection.',
      challenge: 'The challenge was to create a formal dining space that still felt warm and welcoming for everyday family meals.',
      solution: 'We balanced elegance with comfort by incorporating plush seating, warm lighting, and personal touches that reflect the family\'s personality while maintaining sophisticated design elements.',
      images: [project2, project1, project3]
    },
    '3': {
      title: 'Inspiring Home Office',
      category: 'Workspace',
      description: 'A productive yet calming workspace with sage green elements and natural light, designed to inspire creativity and focus.',
      image: project3,
      year: '2024',
      location: 'Los Angeles, CA',
      client: 'Creative Professional',
      duration: '4 weeks',
      fullDescription: 'This inspiring home office was designed for a creative professional who needed a space that would foster both productivity and creativity. The design features sage green elements and maximizes natural light to create an energizing yet calming work environment.',
      challenge: 'Creating a workspace that could transition seamlessly from focused work sessions to creative brainstorming while maintaining organization.',
      solution: 'We implemented flexible storage solutions and zones for different activities, while the calming color palette and natural elements help reduce stress and maintain focus throughout the workday.',
      images: [project3, project2, project1]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-light mb-4 text-foreground">Project Not Found</h1>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground">{project.year}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gradient">
                  {project.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Location</span>
                    </div>
                    <p className="font-medium text-foreground">{project.location}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Duration</span>
                    </div>
                    <p className="font-medium text-foreground">{project.duration}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-xl shadow-medium"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-serif font-light mb-6 text-gradient">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.challenge}
                </p>
                
                <h2 className="text-3xl font-serif font-light mb-6 text-gradient">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-3xl font-serif font-light mb-6 text-gradient">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium text-foreground">{project.client}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-serif font-light mb-12 text-center text-gradient">
              Project Gallery
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group cursor-pointer">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-80 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-card hover:shadow-medium"
                  />
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
              Inspired by This Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Every space has the potential 
              to become extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/projects" className="btn-secondary">
                View More Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;