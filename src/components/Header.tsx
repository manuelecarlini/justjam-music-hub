
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/62539fb8-ac19-4fa2-aba8-484bf926cfb5.png" alt="JustJam Logo" className="h-12" />
          </a>
        </div>

        {/* Download Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="download"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="app-button bg-primary hover:bg-primary-dark cursor-pointer px-5 py-2 text-sm"
          >
            Download App
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary hover:text-primary-dark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl absolute top-full left-0 right-0 animate-slide-down">
          <nav className="flex flex-col py-4 px-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="py-3 text-primary-dark hover:text-primary font-medium border-b border-gray-100 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="py-3 text-primary-dark hover:text-primary font-medium border-b border-gray-100 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="py-3 text-primary-dark hover:text-primary font-medium border-b border-gray-100 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="py-3 text-primary-dark hover:text-primary font-medium border-b border-gray-100 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="download"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="py-3 mt-2 text-center app-button bg-primary hover:bg-primary-dark cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
