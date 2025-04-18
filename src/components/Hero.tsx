import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import FeatureCarousel from './FeatureCarousel';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background with seventies-inspired design */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEF7CD] via-[#FDE1D3] to-[#FFDEE2] z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots opacity-20 z-0"></div>
      
      {/* Abstract shapes with retro colors */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#FEC6A1]/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[#F1F0FB]/30 blur-3xl"></div>
      
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
              Your ultimate AI-powered music companion. Practice with AI-generated backing tracks, master your timing, and tune perfectly. 
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
          
          <div className="flex justify-center lg:justify-end relative">
            <FeatureCarousel />
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
