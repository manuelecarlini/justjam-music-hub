
import { Apple, Smartphone } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section id="download" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download JustJam Today</h2>
            <p className="text-lg mb-8 opacity-90">
              Start jamming, learning, and growing as a musician with our completely free app. No ads, no in-app purchases - just pure music joy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white text-primary-dark hover:bg-gray-100 transition-colors py-3 px-6 rounded-lg font-semibold"
              >
                <Apple size={24} />
                <span>App Store</span>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white text-primary-dark hover:bg-gray-100 transition-colors py-3 px-6 rounded-lg font-semibold"
              >
                <Smartphone size={24} />
                <span>Google Play</span>
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Coming in Future Updates:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent rounded-full"></span>
                  <span>Upload your backing tracks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent rounded-full"></span>
                  <span>Find musicians near you</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent rounded-full"></span>
                  <span>Music theory lessons</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent rounded-full"></span>
                  <span>Virtual MIDI keyboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent rounded-full"></span>
                  <span>Circle of fifths explorer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent rounded-full"></span>
                  <span>Scale and chord library</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/3960e82a-ef69-4e53-89d8-f9c37f315cd5.png" 
                alt="JustJam App" 
                className="h-auto max-w-full w-64 md:w-72 rounded-3xl shadow-2xl z-20 relative border-4 border-white animate-float"
              />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent opacity-20 rounded-full filter blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
