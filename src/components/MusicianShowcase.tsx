
import { useState } from 'react';
import { Guitar, Mic2, Users2 } from 'lucide-react';

const MusicianShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      id: 0,
      icon: Guitar,
      title: "Practice With Purpose",
      description: "Whether you're a beginner or seasoned pro, JustJam provides the tools you need to practice effectively and track your progress over time.",
      image: "/lovable-uploads/fad8499e-0e1c-4b0e-85e9-858c5b24ad78.png",
      highlights: [
        "Custom practice routines",
        "Progress tracking for each song",
        "Real-time feedback on your playing"
      ]
    },
    {
      id: 1,
      icon: Users2,
      title: "Connect With Other Musicians",
      description: "Find like-minded musicians in your area, share your favorite backing tracks, and organize jam sessions to create music together.",
      image: "/lovable-uploads/a442e46d-3ea2-45fe-bb59-2bcb43377660.png",
      highlights: [
        "Musician matching based on genre and skill",
        "In-app messaging system",
        "Local jam session calendar"
      ]
    },
    {
      id: 2,
      icon: Mic2,
      title: "Take Your Music Anywhere",
      description: "From practice rooms to outdoor jam sessions, JustJam goes wherever inspiration strikes. Practice in nature, at home, or on stage.",
      image: "/lovable-uploads/d7788255-4be0-4564-abe4-f6c2bb9bfc7a.png",
      highlights: [
        "Works offline for outdoor sessions",
        "Professional-grade tools in your pocket",
        "Share sessions with friends instantly"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-[#f8fbfa] to-[#edf7f4] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">Music Everywhere</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Unleash Your <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Musical Potential</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JustJam is designed to help musicians of all levels improve their skills, connect with others, and enjoy making music anywhere.
          </p>
        </div>

        {/* Tabbed Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex overflow-x-auto p-1 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`
                  flex items-center px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap
                  ${activeTab === feature.id ? 
                    'bg-primary text-white shadow-md' : 
                    'hover:bg-gray-100 text-gray-700'}
                `}
              >
                <feature.icon className={`mr-2 h-5 w-5 ${activeTab === feature.id ? 'text-white' : 'text-primary'}`} />
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Content */}
        <div className="mt-12 relative">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`
                transition-all duration-500 absolute inset-0
                ${activeTab === feature.id ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-24 pointer-events-none'}
              `}
              style={{ zIndex: activeTab === feature.id ? 10 : 0 }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <feature.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {feature.highlights.map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:border-primary/20 hover:shadow transition-all"
                        >
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <span className="text-primary font-semibold">{idx + 1}</span>
                          </div>
                          <span className="text-gray-800 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/10 blur-xl transform -rotate-2"></div>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                    />
                    
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary rounded-xl transform rotate-12 -z-10"></div>
                    <div className="absolute -left-4 -top-4 w-16 h-16 bg-accent rounded-xl transform -rotate-12 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicianShowcase;
