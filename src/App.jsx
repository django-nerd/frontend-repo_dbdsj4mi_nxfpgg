import React from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import LuxuryWatches from './components/LuxuryWatches';
import BestSellers from './components/BestSellers';
import TrustAndTestimonials from './components/TrustAndTestimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-serif font-bold tracking-wide text-white">
            LA MAISON VERT
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
            <a href="#collections" className="hover:text-white">Collections</a>
            <a href="#watches" className="hover:text-white">Watches</a>
            <a href="#bestsellers" className="hover:text-white">Best Sellers</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black">
              Sign In
            </button>
            <button className="rounded-full bg-[#156340] px-4 py-2 text-sm font-semibold text-white">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Collections />
        <LuxuryWatches />
        <BestSellers />
        <TrustAndTestimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
