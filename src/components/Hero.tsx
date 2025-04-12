
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background with layered design */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2f8f6] via-white to-[#e8f5f1] z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots opacity-30 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute top-40 left-20 w-24 h-24 rounded-full bg-primary/10 animate-float"></div>
      <div className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-accent/10 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-6 font-medium tracking-wide">
              Made by musicians, for musicians
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary-dark">
              Play, Learn, &<br />
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Just Jam</span> Along
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Your ultimate music companion. Practice with backing tracks, master your timing, and tune perfectly. 
              All completely free, with no ads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download" 
                className="app-button bg-primary hover:bg-primary-dark flex items-center justify-center group"
              >
                Download Free
                <svg className="ml-2 group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <Link 
                to="features" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className="app-button bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 flex items-center justify-center cursor-pointer"
              >
                Explore Features
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end relative h-[500px]">
            {/* Phone display arrangement */}
            <div className="relative w-full h-full">
              {/* Main app screenshot with phone mockup - centered */}
              <div className="phone-mockup bg-black w-64 md:w-72 absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img 
                  src="/lovable-uploads/5266fb37-dcce-46e6-84c7-b7e2ae86688d.png" 
                  alt="JustJam App Interface" 
                  className="h-full w-full object-cover rounded-[2rem]"
                />
              </div>
              
              {/* Secondary screenshot positioned to the left */}
              <div className="absolute left-[5%] top-[20%] w-48 transform -rotate-12 animate-float z-20" style={{animationDelay: '1s'}}>
                <div className="phone-mockup bg-black w-full">
                  <img 
                    src="/lovable-uploads/3bda4cc1-bd68-46ac-bc26-3e7b4fd8ab45.png" 
                    alt="JustJam Metronome Feature" 
                    className="h-full w-full object-cover rounded-[2rem]"
                  />
                </div>
              </div>
              
              {/* Third screenshot positioned to the right */}
              <div className="absolute right-[5%] bottom-[20%] w-48 transform rotate-12 animate-float z-10" style={{animationDelay: '2s'}}>
                <div className="phone-mockup bg-black w-full">
                  <img 
                    src="/lovable-uploads/628c7bb3-e6fc-43e6-9415-3420545c348d.png" 
                    alt="JustJam Tuner Feature" 
                    className="h-full w-full object-cover rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-accent/20 blur-xl"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link 
            to="features" 
            spy={true} 
            smooth={true} 
            offset={-80} 
            duration={500}
            className="text-primary hover:text-primary-dark transition-colors cursor-pointer"
          >
            <ArrowDown size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
