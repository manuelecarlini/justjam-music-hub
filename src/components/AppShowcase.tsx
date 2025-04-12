
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const AppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const appScreenshots = [
    {
      image: "/lovable-uploads/5266fb37-dcce-46e6-84c7-b7e2ae86688d.png",
      title: "Jam Player",
      description: "Browse through hundreds of backing tracks, filter by genre, BPM, or key to find the perfect track to practice with."
    },
    {
      image: "/lovable-uploads/bbf1e594-c865-4fd1-a356-f91332e86d58.png",
      title: "Live Chord Display",
      description: "See the current chord progression, active scale, and triads in real-time as you play along with the backing track."
    },
    {
      image: "/lovable-uploads/628c7bb3-e6fc-43e6-9415-3420545c348d.png",
      title: "Multi-Instrument Tuner",
      description: "Perfectly tune any instrument with our precise tuner that supports guitars, bass, ukulele, and even vocal pitch control."
    },
    {
      image: "/lovable-uploads/3bda4cc1-bd68-46ac-bc26-3e7b4fd8ab45.png",
      title: "Customizable Metronome",
      description: "Set your ideal tempo, choose accents, time signatures and subdivisions to improve your rhythm and timing."
    },
    {
      image: "/lovable-uploads/320da630-e892-45dd-b6a1-fc34ecf65fbf.png",
      title: "Track Customization",
      description: "Set up your backing track with specific styles, BPM and keys to match your practice needs."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === appScreenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? appScreenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/5 z-0"></div>
      <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="text-gradient">JustJam</span> Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An intuitive interface designed for musicians, by musicians. Everything you need, right at your fingertips.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-3 text-gradient">{appScreenshots[activeIndex].title}</h3>
              <p className="text-gray-700 mb-6">{appScreenshots[activeIndex].description}</p>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevSlide} 
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex space-x-2">
                  {appScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide} 
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl transform rotate-3 scale-105 opacity-20 blur-md"></div>
              <img
                src={appScreenshots[activeIndex].image}
                alt={appScreenshots[activeIndex].title}
                className="relative rounded-3xl shadow-2xl border-4 border-white animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
