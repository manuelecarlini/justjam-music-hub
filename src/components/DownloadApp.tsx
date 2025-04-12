
import { Apple, Smartphone } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary-dark z-0"></div>
      
      {/* Animated wave */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-white">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full mb-6 font-medium tracking-wide">Download Now</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Musical Journey Today</h2>
            <p className="text-lg mb-8 text-white/90 max-w-xl">
              Download JustJam and join thousands of musicians who are already improving their skills, having fun, and connecting with other music lovers. Our app is completely free with no ads or in-app purchases.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mb-10">
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white transition-all py-4 px-6 rounded-xl font-semibold backdrop-blur-sm border border-white/20 group"
              >
                <Apple size={24} className="group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80">Download on the</span>
                  <span>App Store</span>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white transition-all py-4 px-6 rounded-xl font-semibold backdrop-blur-sm border border-white/20 group"
              >
                <Smartphone size={24} className="group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80">GET IT ON</span>
                  <span>Google Play</span>
                </div>
              </a>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Coming in Future Updates:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <h4 className="font-semibold text-lg mb-2">Upload Your Tracks</h4>
                  <p className="text-white/80">Share your backing tracks with the JustJam community.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <h4 className="font-semibold text-lg mb-2">Find Musicians Nearby</h4>
                  <p className="text-white/80">Connect with musicians in your area for live jam sessions.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <h4 className="font-semibold text-lg mb-2">Music Theory Lessons</h4>
                  <p className="text-white/80">Interactive lessons to improve your understanding of music theory.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <h4 className="font-semibold text-lg mb-2">Virtual MIDI Keyboard</h4>
                  <p className="text-white/80">Play and record melodies directly from your device.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone mockup with app screenshot */}
              <div className="phone-mockup bg-black w-64 md:w-72 animate-float">
                <img 
                  src="/lovable-uploads/3960e82a-ef69-4e53-89d8-f9c37f315cd5.png" 
                  alt="JustJam App" 
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse-subtle"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -top-10 -left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
