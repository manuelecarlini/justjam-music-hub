
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

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Features', to: 'features' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Download', to: 'download' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-primary text-2xl font-bold">Just<span className="text-accent">Jam</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-800 hover:text-primary font-medium cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Download Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="download"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="app-button bg-primary hover:bg-primary-dark cursor-pointer"
          >
            Download App
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800 hover:text-primary"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 animate-slide-down">
          <nav className="flex flex-col py-4 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="py-3 text-gray-800 hover:text-primary font-medium border-b border-gray-100 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
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
