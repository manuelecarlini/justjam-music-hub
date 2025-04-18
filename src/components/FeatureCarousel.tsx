
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Music, GraduationCap, Guitar, Mic2, Timer } from 'lucide-react';

const features = [
  {
    title: "Jam Along",
    description: "Play with AI-generated backing tracks",
    icon: <Music className="w-8 h-8 text-primary" />,
    image: "/lovable-uploads/5631dfb9-28ee-4d63-b4c6-5f335251978b.png"
  },
  {
    title: "Learn Music",
    description: "Practice and improve your skills",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    image: "/lovable-uploads/3dc09cb5-10c0-4510-b5e9-124a70baddad.png"
  },
  {
    title: "Tune Your Instrument",
    description: "Perfect pitch every time",
    icon: <Guitar className="w-8 h-8 text-primary" />,
    image: "/lovable-uploads/bbf1e594-c865-4fd1-a356-f91332e86d58.png"
  },
  {
    title: "Vocal Training",
    description: "Train your voice with AI feedback",
    icon: <Mic2 className="w-8 h-8 text-primary" />,
    image: "/lovable-uploads/d7788255-4be0-4564-abe4-f6c2bb9bfc7a.png"
  },
  {
    title: "Stay in Time",
    description: "Professional metronome features",
    icon: <Timer className="w-8 h-8 text-primary" />,
    image: "/lovable-uploads/320da630-e892-45dd-b6a1-fc34ecf65fbf.png"
  }
];

const FeatureCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-lg mx-auto"
    >
      <CarouselContent>
        {features.map((feature, index) => (
          <CarouselItem key={index} className="md:basis-1/1">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl aspect-[9/16] bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {/* Retro overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-3 bg-white/10 backdrop-blur-sm rounded-full p-3 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default FeatureCarousel;
