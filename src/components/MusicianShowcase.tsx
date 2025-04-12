
import { Guitar, Mic2, Users2 } from 'lucide-react';

const FeatureBlock = ({ icon: Icon, title, description, image, reversed = false }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center mb-20`}>
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/10 blur-xl transform -rotate-2"></div>
          <img 
            src={image} 
            alt={title} 
            className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
          />
          
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary rounded-xl transform rotate-12 -z-10"></div>
          {!reversed && <div className="absolute -left-4 -top-4 w-16 h-16 bg-accent rounded-xl transform -rotate-12 -z-10"></div>}
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Icon size={32} className="text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {[1, 2, 3].map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MusicianShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-[#f8fbfa] to-[#edf7f4] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">Music Everywhere</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Unleash Your <span className="text-gradient">Musical Potential</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JustJam is designed to help musicians of all levels improve their skills, connect with others, and enjoy making music anywhere.
          </p>
        </div>

        <FeatureBlock 
          icon={Guitar}
          title="Practice With Purpose"
          description="Whether you're a beginner or seasoned pro, JustJam provides the tools you need to practice effectively and track your progress over time."
          image="/lovable-uploads/fad8499e-0e1c-4b0e-85e9-858c5b24ad78.png"
        />
        
        <FeatureBlock 
          icon={Users2}
          title="Connect With Other Musicians"
          description="Find like-minded musicians in your area, share your favorite backing tracks, and organize jam sessions to create music together."
          image="/lovable-uploads/a442e46d-3ea2-45fe-bb59-2bcb43377660.png"
          reversed={true}
        />
        
        <FeatureBlock 
          icon={Mic2}
          title="Take Your Music Anywhere"
          description="From practice rooms to outdoor jam sessions, JustJam goes wherever inspiration strikes. Practice in nature, at home, or on stage."
          image="/lovable-uploads/d7788255-4be0-4564-abe4-f6c2bb9bfc7a.png"
        />
      </div>
    </section>
  );
};

export default MusicianShowcase;
