
import { Music, Settings, Music2, Microscope, BarChart4, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div className={`feature-card backdrop-blur-sm ${className}`}>
      <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Music,
      title: "Extensive Backing Tracks",
      description: "Access hundreds of backing tracks filterable by BPM, key, and style to match your practice needs.",
    },
    {
      icon: Music2,
      title: "Live Chord Progressions",
      description: "See real-time chord progressions, scales, and triads as the music plays to improve your understanding.",
    },
    {
      icon: Settings,
      title: "Customizable Metronome",
      description: "Fine-tune your rhythm with adjustable tempo, time signatures, and accent patterns.",
    },
    {
      icon: Microscope,
      title: "Multi-Instrument Tuner",
      description: "Tune any instrument from guitar and bass to brass and woodwind with precision.",
    },
    {
      icon: BarChart4,
      title: "Music Theory Tools",
      description: "Explore scales, chord references, and circle of fifths to enhance your music theory knowledge.",
    },
    {
      icon: Users,
      title: "Community Features (Coming Soon)",
      description: "Upload your own backing tracks and connect with musicians around you for jam sessions.",
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f8fbfa] to-[#edf7f4] z-0"></div>
      <div className="absolute inset-0 bg-pattern-waves opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to <span className="text-gradient">Master Your Music</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JustJam combines powerful tools designed to help you practice, learn, and grow as a musician - all in one free app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
          
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`animate-zoom-in delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
