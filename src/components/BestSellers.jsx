import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const products = [
  // CBD & Wellness
  { id: 'p-cbd-oil', name: 'Premium CBD Oil 30ml', subtitle: 'Calm & Balance Formula', price: 69.0, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=1600&auto=format&fit=crop', rating: 4.8, reviews: 214, badges: ['Lab Tested', 'EU Quality'], sales: 980 },
  { id: 'p-cbd-sleep', name: 'CBD Sleep Drops', subtitle: 'Deep Rest Blend', price: 59.0, image: 'https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=1600&auto=format&fit=crop', rating: 4.7, reviews: 162, badges: ['EU Quality', 'Secure Payment'], sales: 870 },
  { id: 'p-cbd-balm', name: 'CBD Muscle Recovery Balm', subtitle: 'Pain Relief Therapy', price: 49.0, image: 'https://images.unsplash.com/photo-1669918746256-c8a4bd2a79e0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDQkQlMjBPaWwlMjAzMG1sfGVufDB8MHx8fDE3NjI0ODE2MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.6, reviews: 98, badges: ['Lab Tested'], sales: 650 },
  { id: 'p-hemp-serum', name: 'Hemp Face Serum', subtitle: 'Glow & Hydration', price: 54.0, image: 'https://images.unsplash.com/photo-1669918746256-c8a4bd2a79e0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDQkQlMjBPaWwlMjAzMG1sfGVufDB8MHx8fDE3NjI0ODE2MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.5, reviews: 76, badges: ['EU Quality'], sales: 420 },
  { id: 'p-cbd-gummies', name: 'CBD Gummies', subtitle: 'Relaxation Edition', price: 39.0, image: 'https://images.unsplash.com/photo-1669918746256-c8a4bd2a79e0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDQkQlMjBPaWwlMjAzMG1sfGVufDB8MHx8fDE3NjI0ODE2MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.4, reviews: 134, badges: ['Secure Payment'], sales: 510 },
  // Elite Supplements
  { id: 'p-energy-boost', name: 'Energy Boost Capsules', subtitle: 'Focus Formula Pro', price: 42.0, image: 'https://images.unsplash.com/photo-1617624969413-932d9b07f000?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDQkQlMjBTbGVlcCUyMERyb3BzfGVufDB8MHx8fDE3NjI0ODE2MzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.6, reviews: 201, badges: ['EU Quality'], sales: 720 },
  { id: 'p-detox', name: 'Detox Complex', subtitle: 'Cleanse & Reset', price: 37.0, image: 'https://images.unsplash.com/photo-1650897492361-536039aeeb73?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDQkQlMjBNdXNjbGUlMjBSZWNvdmVyeSUyMEJhbG18ZW58MHwwfHx8MTc2MjQ4MTYzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.5, reviews: 143, badges: ['EU Quality'], sales: 610 },
  { id: 'p-immune', name: 'Immune Defense Pack', subtitle: 'Vitamin C + Zinc Fusion', price: 45.0, image: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=1600&auto=format&fit=crop', rating: 4.7, reviews: 250, badges: ['EU Quality'], sales: 850 },
  { id: 'p-muscle-support', name: 'Muscle Support Blend', subtitle: 'Active Performance', price: 41.0, image: 'https://images.unsplash.com/photo-1629398777962-33db7538a357?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDQkQlMjBHdW1taWVzfGVufDB8MHx8fDE3NjI0ODE2MzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.4, reviews: 97, badges: ['Secure Payment'], sales: 430 },
  { id: 'p-nootropic', name: 'Nootropic Brain Fuel', subtitle: 'Clarity Edition', price: 58.0, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop', rating: 4.7, reviews: 188, badges: ['EU Quality'], sales: 760 },
  // Luxury Accessories
  { id: 'p-watch', name: 'Prestige Chrono Watch', subtitle: 'Gold Edition', price: 299.0, image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1600&auto=format&fit=crop', rating: 4.9, reviews: 321, badges: ['Secure Payment'], sales: 910 },
  { id: 'p-wallet', name: 'Signature Leather Wallet', subtitle: 'Modern Black', price: 129.0, image: 'https://images.unsplash.com/photo-1648712789449-a4ed6d491c75?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbW11bmUlMjBEZWZlbnNlJTIwUGFja3xlbnwwfDB8fHwxNzYyNDgxNjMyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.6, reviews: 144, badges: ['EU Quality'], sales: 540 },
  { id: 'p-grooming', name: "Men's Grooming Set", subtitle: 'Luxury Care Kit', price: 89.0, image: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNdXNjbGUlMjBTdXBwb3J0JTIwQmxlbmR8ZW58MHwwfHx8MTc2MjQ4MTYzM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', rating: 4.5, reviews: 112, badges: ['EU Quality'], sales: 370 },
  { id: 'p-sunglasses', name: 'Limited Edition Sunglasses', subtitle: 'Diamond Cut', price: 249.0, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600&auto=format&fit=crop', rating: 4.6, reviews: 176, badges: ['Secure Payment'], sales: 580 },
  { id: 'p-fitness-band', name: 'Smart Fitness Band', subtitle: 'Next-Gen Edition', price: 159.0, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop', rating: 4.4, reviews: 101, badges: ['EU Quality'], sales: 460 },
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

  const top3 = [...products].sort((a, b) => b.sales - a.sales).slice(0, 5);

  return (
    <section id="bestsellers" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-black sm:text-4xl">Best Sellers</h2>
            <p className="mt-2 text-neutral-600">Top-rated picks trusted by our community.</p>
          </div>
          <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-neutral-700">
            Auto-scroll • Live Ratings
          </div>
        </div>
        <div
          ref={ref}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {top3.map((p) => (
            <div
              key={p.id}
              className="min-w-[280px] max-w-[280px] overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-48 w-full object-cover" loading="lazy" />
                <div className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
                  Best Seller
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold text-black">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.subtitle}</p>
                <div className="mt-3 flex items-center gap-2 text-amber-600">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span className="text-sm font-semibold text-black">{p.rating}</span>
                  <span className="text-xs text-neutral-500">({p.reviews})</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xl font-semibold text-black">€{p.price.toFixed(2)}</div>
                  <button className="rounded-full bg-[#156340] px-4 py-2 text-xs font-semibold text-white shadow hover:bg-emerald-800">
                    Add to Cart
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
                  {p.badges.map((b) => (
                    <span key={b} className="rounded-full border border-emerald-200 px-2 py-1 text-emerald-700">
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
