import React from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import BestSellers from './components/BestSellers';
import TrustAndTestimonials from './components/TrustAndTestimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-serif font-bold tracking-wide text-black">
            LA MAISON VERT
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-700 sm:flex">
            <a href="#collections" className="hover:text-black">Collections</a>
            <a href="#bestsellers" className="hover:text-black">Best Sellers</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Blog</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black hover:bg-black hover:text-white">
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
        <BestSellers />
        <TrustAndTestimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
