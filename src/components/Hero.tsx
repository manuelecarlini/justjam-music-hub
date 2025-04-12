
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/5 z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Play, Learn &<br />
              <span className="text-gradient">Just Jam</span> Along
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              The ultimate music companion app for musicians of all levels. Practice with backing tracks, master your timing with the metronome, and tune your instruments perfectly. All completely free, made by music lovers for music lovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download" 
                className="app-button bg-primary hover:bg-primary-dark flex items-center justify-center"
              >
                Download Free
              </a>
              <Link 
                to="features" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className="app-button bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center cursor-pointer"
              >
                Explore Features
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center animate-float">
            <div className="relative">
              {/* Main app screenshot */}
              <img 
                src="/lovable-uploads/5266fb37-dcce-46e6-84c7-b7e2ae86688d.png" 
                alt="JustJam App Interface" 
                className="h-auto max-w-full w-64 md:w-72 rounded-3xl shadow-2xl z-20 relative border-4 border-white"
              />
              
              {/* Secondary screenshot positioned to the left and behind */}
              <img 
                src="/lovable-uploads/3bda4cc1-bd68-46ac-bc26-3e7b4fd8ab45.png" 
                alt="JustJam Metronome Feature" 
                className="absolute -left-20 top-20 h-auto w-48 md:w-56 rounded-3xl shadow-xl z-10 rotate-[-8deg] border-4 border-white"
              />
              
              {/* Third screenshot positioned to the right and behind */}
              <img 
                src="/lovable-uploads/628c7bb3-e6fc-43e6-9415-3420545c348d.png" 
                alt="JustJam Tuner Feature" 
                className="absolute -right-16 bottom-20 h-auto w-48 md:w-56 rounded-3xl shadow-xl z-10 rotate-[8deg] border-4 border-white"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
