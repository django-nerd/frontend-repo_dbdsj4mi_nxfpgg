import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const products = [
  // Luxury Watches for homepage sliders
  { id: 'w-rolex', name: 'Rolex Submariner Date', subtitle: 'Timeless Elegance', price: 15000, image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop', rating: 4.9, reviews: 842, badges: ['EU Quality', 'Secure Payment'], sales: 1200 },
  { id: 'w-ap', name: 'Audemars Piguet Royal Oak', subtitle: 'Modern Craftsmanship', price: 42000, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop', rating: 4.9, reviews: 563, badges: ['EU Quality'], sales: 980 },
  { id: 'w-patek', name: 'Patek Philippe Nautilus', subtitle: 'The Icons Collection', price: 45000, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop', rating: 5.0, reviews: 392, badges: ['EU Quality'], sales: 860 },
  { id: 'w-omega', name: 'Omega Speedmaster Moonwatch', subtitle: 'The Icons Collection', price: 6500, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop', rating: 4.8, reviews: 1240, badges: ['EU Quality'], sales: 1400 },
  { id: 'w-cartier', name: 'Cartier Santos de Cartier', subtitle: 'Timeless Elegance', price: 12000, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop', rating: 4.7, reviews: 476, badges: ['Secure Payment'], sales: 720 },
];

const BestSellers = () => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let animationId;
    let start;
    const speed = 25; // px/sec

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      container.scrollLeft = (elapsed * speed) % (container.scrollWidth - container.clientWidth);
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const topItems = [...products].sort((a, b) => b.sales - a.sales).slice(0, 5);

  return (
    <section id="bestsellers" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-serif font-semibold sm:text-4xl">Timeless Elegance</h2>
            <p className="mt-2 text-neutral-300">Modern Craftsmanship • The Icons Collection</p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-200">
            Auto-scroll • Live Ratings
          </div>
        </div>
        <div
          ref={ref}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {topItems.map((p) => (
            <div
              key={p.id}
              className="min-w-[300px] max-w-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover" loading="lazy" />
                <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                  Best Seller
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-300">{p.subtitle}</p>
                <div className="mt-3 flex items-center gap-2 text-amber-500">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span className="text-sm font-semibold">{p.rating}</span>
                  <span className="text-xs text-neutral-400">({p.reviews})</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xl font-semibold" style={{ color: '#d4af37' }}>${p.price.toLocaleString()}</div>
                  <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#156340] hover:text-white">
                    Buy Now
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
                  {p.badges.map((b) => (
                    <span key={b} className="rounded-full border border-emerald-900/40 px-2 py-1 text-emerald-300">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
