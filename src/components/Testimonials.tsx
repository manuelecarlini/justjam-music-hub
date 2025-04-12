
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Guitar Teacher",
      image: "/lovable-uploads/30dbfc0b-12a0-4152-bec9-e6f02847baa2.png",
      quote: "JustJam has revolutionized how I teach my students. Being able to see the chord progressions in real-time makes theory so much more accessible. My students are progressing faster than ever!"
    },
    {
      name: "Sarah Johnson",
      role: "Bass Player",
      image: "/lovable-uploads/3dc09cb5-10c0-4510-b5e9-124a70baddad.png",
      quote: "The variety of backing tracks has completely transformed my practice routine. I'm having so much fun jamming along that I don't even notice how much I'm improving. The best part? It's completely free!"
    },
    {
      name: "Michael Chen",
      role: "Hobbyist Pianist",
      image: "/lovable-uploads/d6cb093b-52a1-44b3-8ca8-93a8119d2092.png",
      quote: "I've tried several music apps, but JustJam stands out with its intuitive design and powerful features. The metronome is incredibly flexible, and I love being able to customize everything to fit my practice needs."
    },
    {
      name: "Lucia Fernandez",
      role: "Music Student",
      image: "/lovable-uploads/5631dfb9-28ee-4d63-b4c6-5f335251978b.png",
      quote: "As someone learning music theory, the visualization of chords and scales is game-changing. I can actually see music theory in action while I play, which has accelerated my learning tremendously."
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f2f8f6] to-[#edf7f4] z-0"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2351BA99' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Musicians Are <span className="text-gradient">Saying</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of musicians who are already improving their skills with JustJam.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="glass-card p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8 md:items-start">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    <Star size={18} className="fill-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 italic mb-8 relative">
                    <span className="absolute -top-8 -left-8 text-8xl text-primary/10">"</span>
                    {testimonials[activeIndex].quote}
                    <span className="absolute -bottom-20 -right-8 text-8xl text-primary/10">"</span>
                  </blockquote>
                  <div className="relative z-10">
                    <p className="font-semibold text-2xl">{testimonials[activeIndex].name}</p>
                    <p className="text-primary">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center group"
              >
                <ChevronLeft className="text-primary group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center group"
              >
                <ChevronRight className="text-primary group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-16 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
