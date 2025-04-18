
import { 
  Sparkles,
  Settings, 
  Music2, 
  Microscope, 
  BarChart4, 
  Users, 
  ChevronRight 
} from 'lucide-react';
import { useState } from 'react';

const featureImages = [
  "/lovable-uploads/5266fb37-dcce-46e6-84c7-b7e2ae86688d.png",
  "/lovable-uploads/3bda4cc1-bd68-46ac-bc26-3e7b4fd8ab45.png",
  "/lovable-uploads/628c7bb3-e6fc-43e6-9415-3420545c348d.png",
  "/lovable-uploads/5631dfb9-28ee-4d63-b4c6-5f335251978b.png",
  "/lovable-uploads/d6cb093b-52a1-44b3-8ca8-93a8119d2092.png",
  "/lovable-uploads/bbf1e594-c865-4fd1-a356-f91332e86d58.png",
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Backing Tracks",
      description: "Access hundreds of AI-generated backing tracks that adapt to your style and skill level.",
      color: "from-primary/20 to-primary/40",
      details: [
        "AI generates unique tracks based on your preferences",
        "Intelligent style matching with your playing",
        "Real-time track adaptation to your tempo"
      ]
    },
    {
      icon: Music2,
      title: "Smart Chord Progressions",
      description: "AI analyzes and suggests chord progressions that perfectly complement your playing style.",
      color: "from-accent/20 to-accent/40",
      details: [
        "AI-powered chord suggestions",
        "Dynamic progression adaptation",
        "Personalized learning paths"
      ]
    },
    {
      icon: Settings,
      title: "Customizable Metronome",
      description: "Fine-tune your rhythm with adjustable tempo, time signatures, and accent patterns.",
      color: "from-primary/30 to-accent/30",
      details: [
        "Create complex rhythm patterns",
        "Save presets for different practice routines",
        "Visual beat indicator for silent practice"
      ]
    },
    {
      icon: Microscope,
      title: "Multi-Instrument Tuner",
      description: "Tune any instrument from guitar and bass to brass and woodwind with precision.",
      color: "from-accent/30 to-primary/30",
      details: [
        "Supports standard and custom tunings",
        "Vocal pitch detection for singers",
        "Chromatic tuning with cents display"
      ]
    },
    {
      icon: BarChart4,
      title: "Music Theory Tools",
      description: "Explore scales, chord references, and circle of fifths to enhance your music theory knowledge.",
      color: "from-primary/40 to-primary/20",
      details: [
        "Interactive circle of fifths diagram",
        "Comprehensive scale and mode library",
        "Chord construction tutorials"
      ]
    },
    {
      icon: Users,
      title: "Community Features (Coming Soon)",
      description: "Upload your own backing tracks and connect with musicians around you for jam sessions.",
      color: "from-accent/40 to-accent/20",
      details: [
        "Find musicians with similar interests nearby",
        "Schedule jam sessions through the app",
        "Share your tracks with the community"
      ]
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f8fbfa] to-[#edf7f4] z-0"></div>
      <div className="absolute inset-0 bg-pattern-waves opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">AI-Powered Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Master Your Music</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven music tools designed to enhance your practice and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`
                rounded-xl transition-all duration-300 cursor-pointer overflow-hidden
                ${activeFeature === index ? 'scale-105' : 'hover:scale-102'}
              `}
              onClick={() => setActiveFeature(index)}
            >
              <div className="relative aspect-video mb-4">
                <img
                  src={featureImages[index]}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-60 rounded-xl`}></div>
              </div>
              
              <div className={`p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100/50 ${
                activeFeature === index ? 'shadow-lg border-primary/20' : 'shadow hover:shadow-md'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`
                    h-12 w-12 rounded-lg flex items-center justify-center 
                    ${activeFeature === index ? 'bg-primary/20' : 'bg-primary/10'}
                  `}>
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                    
                    {activeFeature === index && (
                      <div className="mt-4 pl-4 border-l-2 border-primary/40 space-y-2 animate-fade-in">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-primary">
                            <ChevronRight className="h-4 w-4 text-primary" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
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

export default Features;
