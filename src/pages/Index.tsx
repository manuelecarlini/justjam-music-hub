
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import MusicianShowcase from '@/components/MusicianShowcase';
import DownloadApp from '@/components/DownloadApp';
import ContactFooter from '@/components/ContactFooter';

// For react-scroll smooth scrolling with React Router
import { animateScroll as scroll } from 'react-scroll';

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0, // Instant scroll
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <MusicianShowcase />
      <Testimonials />
      <DownloadApp />
      <ContactFooter />
    </main>
  );
};

export default Index;
