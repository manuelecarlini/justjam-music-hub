
import { 
  Music, 
  Settings, 
  Music2, 
  Microscope, 
  BarChart4, 
  Users, 
  ChevronRight 
} from 'lucide-react';
import { useState } from 'react';

const featureImages = [
  "/lovable-uploads/5266fb37-dcce-46e6-84c7-b7e2ae86688d.png", // Backing tracks
  "/lovable-uploads/3bda4cc1-bd68-46ac-bc26-3e7b4fd8ab45.png", // Metronome
  "/lovable-uploads/628c7bb3-e6fc-43e6-9415-3420545c348d.png", // Tuner
  "/lovable-uploads/5631dfb9-28ee-4d63-b4c6-5f335251978b.png", // Theory tools
  "/lovable-uploads/d6cb093b-52a1-44b3-8ca8-93a8119d2092.png", // Chord progresions
  "/lovable-uploads/bbf1e594-c865-4fd1-a356-f91332e86d58.png", // Community
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Music,
      title: "Extensive Backing Tracks",
      description: "Access hundreds of backing tracks filterable by BPM, key, and style to match your practice needs.",
      color: "from-primary/20 to-primary/40",
      details: [
        "Filter by genre, mood, and instrument",
        "Adjust tempo without changing pitch",
        "Bookmark your favorites for quick access"
      ]
    },
    {
      icon: Music2,
      title: "Live Chord Progressions",
      description: "See real-time chord progressions, scales, and triads as the music plays to improve your understanding.",
      color: "from-accent/20 to-accent/40",
      details: [
        "Visual chord diagrams for guitar and piano",
        "Scale suggestions that match the progression",
        "Slow down difficult sections to master them"
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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Master Your Music</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JustJam combines powerful tools designed to help you practice, learn, and grow as a musician - all in one free app.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Feature Showcase - Interactive Phone Display */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="phone-mockup bg-black w-full max-w-xs mx-auto">
              <img 
                src={featureImages[activeFeature]} 
                alt={features[activeFeature].title} 
                className="h-full w-full object-cover rounded-[2rem]"
              />
              
              {/* Feature indicator dots */}
              <div className="flex justify-center gap-2 mt-6">
                {features.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeFeature === index ? 'bg-primary scale-125' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveFeature(index)}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Interactive Feature List */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`
                    p-6 rounded-xl transition-all duration-300 cursor-pointer
                    ${activeFeature === index ? 
                      `bg-gradient-to-br ${feature.color} shadow-lg scale-105` : 
                      'bg-white/50 hover:bg-white/80 shadow'
                    }
                  `}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      h-12 w-12 rounded-lg flex items-center justify-center 
                      ${activeFeature === index ? 'bg-white/30' : 'bg-primary/10'}
                    `}>
                      <feature.icon className={`
                        h-6 w-6 
                        ${activeFeature === index ? 'text-white' : 'text-primary'}
                      `} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${activeFeature === index ? 'text-white' : 'text-gray-800'}`}>
                        {feature.title}
                      </h3>
                      <p className={`${activeFeature === index ? 'text-white/90' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                      
                      {/* Expandable details only for active feature */}
                      {activeFeature === index && (
                        <div className="mt-4 pl-4 border-l-2 border-white/30 space-y-2 animate-fade-in">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-white/90">
                              <ChevronRight className="h-4 w-4 text-white" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
