
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const ContactFooter = () => {
  return (
    <>
      <section id="contact" className="pt-20 pb-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For support and general inquiries</p>
              <a href="mailto:support@justjam.app" className="text-primary hover:text-primary-dark font-medium">
                support@justjam.app
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Monday to Friday, 9am - 5pm</p>
              <a href="tel:+1234567890" className="text-primary hover:text-primary-dark font-medium">
                +1 (234) 567-890
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Find us at our headquarters</p>
              <address className="not-italic text-primary hover:text-primary-dark font-medium">
                123 Music Street, Melody City
              </address>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary-dark text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="/" className="text-2xl font-bold">Just<span className="text-accent">Jam</span></a>
              <p className="mt-2 text-sm text-gray-300">Made by music lovers, for music lovers.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a href="#features" className="text-gray-300 hover:text-white text-sm">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white text-sm">How It Works</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white text-sm">Testimonials</a>
              <a href="#download" className="text-gray-300 hover:text-white text-sm">Download</a>
              <a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} JustJam. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
