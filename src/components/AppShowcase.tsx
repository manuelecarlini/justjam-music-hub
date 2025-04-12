
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
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Curved background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white z-0"></div>
      
      {/* Wave pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2351BA99' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">Interface</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How <span className="text-gradient">JustJam</span> Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An intuitive interface designed for musicians, by musicians. Everything you need, right at your fingertips.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-3xl font-bold mb-5 text-gradient">{appScreenshots[activeIndex].title}</h3>
              <p className="text-lg text-gray-700 mb-8">{appScreenshots[activeIndex].description}</p>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevSlide} 
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                  aria-label="Previous screenshot"
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
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone mockup with current screenshot */}
              <div className="phone-mockup bg-black w-64 md:w-80 animate-float">
                <img
                  src={appScreenshots[activeIndex].image}
                  alt={appScreenshots[activeIndex].title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 blur-3xl rounded-full transform rotate-12 scale-150"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-5 left-0 w-20 h-20 bg-accent/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
