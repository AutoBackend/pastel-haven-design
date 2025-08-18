import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email',
      value: 'hello@serenespaces.com',
      link: 'mailto:hello@serenespaces.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: 'Studio',
      value: 'New York, NY',
      link: null,
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
                Let's Create Together
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your space? We'd love to hear about your vision 
                and explore how we can bring it to life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-serif font-light mb-8 text-gradient">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  Whether you're planning a complete home renovation or simply looking to 
                  refresh a single room, we're here to help bring your vision to life.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <ScrollReveal key={index} delay={index * 150}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-background rounded-lg flex items-center justify-center shadow-soft">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={600}>
                <div className="mt-12 p-6 bg-cream rounded-xl">
                  <h3 className="font-serif font-medium text-lg mb-3 text-foreground">
                    Schedule a Consultation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Book a complimentary 30-minute consultation to discuss your project 
                    and explore how we can work together.
                  </p>
                  <button className="btn-secondary text-sm">
                    Book Consultation
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div>
              <ScrollReveal delay={300}>
                <div className="card-soft">
                  <h2 className="text-2xl font-serif font-light mb-6 text-foreground">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                        Project Type
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Space</option>
                        <option value="consultation">Design Consultation</option>
                        <option value="renovation">Full Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background resize-none"
                        placeholder="Tell us about your project vision..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary inline-flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;