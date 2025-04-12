
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
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Musicians Are <span className="text-gradient">Saying</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of musicians who are already improving their skills with JustJam.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-xl">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="text-gray-700" />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <ChevronRight className="text-gray-700" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-2">
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
