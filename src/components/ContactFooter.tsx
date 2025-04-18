
import { useState } from 'react';
import { Instagram, Youtube, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-gray-50 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4 font-medium tracking-wide">Let's Connect</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Touch</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about JustJam? We'd love to hear from you! Our team is always ready to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="col-span-2 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-3 rounded-lg font-medium text-white transition-all
                    ${isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}
                  `}
                >
                  {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
                </button>
                
                {error && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                {isSuccess && (
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm animate-fade-in">
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                <div className="text-xs text-gray-500 text-center mt-4">
                  Messages will be sent to connect@justjam.app
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <a href="mailto:connect@justjam.app" className="text-primary-dark hover:text-primary transition-colors">
                      connect@justjam.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
              
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M9.05,11.95c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7S11.65,11.95,9.05,11.95z M9.05,3.55 c-2,0-3.7,1.7-3.7,3.7s1.7,3.7,3.7,3.7s3.7-1.7,3.7-3.7S11.05,3.55,9.05,3.55z" />
                    <path d="M6.25,13.85c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S9.55,13.85,6.25,13.85z M6.25,2.85 c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S9.05,2.85,6.25,2.85z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <Send size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <img src="/lovable-uploads/62539fb8-ac19-4fa2-aba8-484bf926cfb5.png" alt="JustJam Logo" className="h-12 mx-auto mb-6" />
            <p className="text-gray-500 mb-4">
              JustJam - Your AI-powered music practice companion
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 mb-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Help Center</a>
              <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            </div>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} JustJam App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
