
import { 
  Sparkles,
  Settings, 
  Music2, 
  Microscope, 
  BarChart4, 
  Users
} from 'lucide-react';
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">
            AI-Powered Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Master Your Music</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven music tools designed to enhance your practice and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`w-full text-left transition-all duration-300 ${
                  activeFeature === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`p-6 rounded-xl bg-white/90 backdrop-blur-sm border ${
                  activeFeature === index ? 'border-primary shadow-lg' : 'border-gray-100/50 hover:border-primary/20'
                }`}>
                  <div className="flex gap-4">
                    <div className={`
                      h-12 w-12 rounded-lg flex items-center justify-center shrink-0
                      ${activeFeature === index ? 'bg-primary/20' : 'bg-primary/10'}
                    `}>
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                      
                      {activeFeature === index && (
                        <div className="mt-4 pl-4 border-l-2 border-primary/40 space-y-2 animate-fade-in">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-primary">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                <AspectRatio ratio={9/16} className="bg-muted">
                  <img
                    src={featureImages[activeFeature]}
                    alt={features[activeFeature].title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} mix-blend-overlay`}></div>
                </AspectRatio>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary rounded-xl transform rotate-12 -z-10"></div>
              <div className="absolute -left-4 -top-4 w-16 h-16 bg-accent rounded-xl transform -rotate-12 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

