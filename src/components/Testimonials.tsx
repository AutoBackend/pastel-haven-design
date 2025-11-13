import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "Transformed our dated living room into a stunning modern sanctuary. Every detail was perfect.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    content: "The commercial space design exceeded all expectations. Our customers constantly compliment the ambiance.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Apartment Dweller",
    content: "Made our small apartment feel spacious and luxurious. Incredible attention to detail and functionality.",
    rating: 5,
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16 text-gradient">
            Client Stories
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="card-soft bg-card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
