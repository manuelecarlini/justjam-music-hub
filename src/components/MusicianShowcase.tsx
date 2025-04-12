
const MusicianShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Music <span className="text-gradient">Anywhere</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From practice rooms to beach jam sessions, JustJam goes wherever the music takes you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
            <div className="relative h-80">
              <img 
                src="/lovable-uploads/fad8499e-0e1c-4b0e-85e9-858c5b24ad78.png" 
                alt="Musician practicing at home" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium text-lg">Master your skills in the comfort of your home</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
            <div className="relative h-80">
              <img 
                src="/lovable-uploads/a442e46d-3ea2-45fe-bb59-2bcb43377660.png" 
                alt="Friends jamming together" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium text-lg">Connect with fellow musicians and jam together</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
            <div className="relative h-80">
              <img 
                src="/lovable-uploads/d7788255-4be0-4564-abe4-f6c2bb9bfc7a.png" 
                alt="Outdoor music session" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium text-lg">Take your practice outside and be inspired by nature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicianShowcase;
