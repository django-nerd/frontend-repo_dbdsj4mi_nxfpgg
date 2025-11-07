import React from 'react';

const collections = [
  {
    id: 'watches',
    name: 'Luxury Watches',
    description: 'Timeless icons in steel, gold, and sapphire. Minimalist, modern, and refined.',
    image:
      'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1974&auto=format&fit=crop',
    href: '#watches',
  },
  {
    id: 'cbd',
    name: 'CBD & Wellness',
    description: 'Lab-tested CBD formulas for balance, rest, and recovery.',
    image:
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1974&auto=format&fit=crop',
    href: '#/collections/cbd',
  },
  {
    id: 'supplements',
    name: 'Elite Supplements',
    description: 'Performance-driven blends crafted in the EU.',
    image:
      'https://images.unsplash.com/photo-1579722821273-0f6c7d443f11?q=80&w=1974&auto=format&fit=crop',
    href: '#/collections/supplements',
  },
];

const Collections = () => {
  return (
    <section id="collections" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-serif font-semibold sm:text-4xl">Featured Collections</h2>
            <p className="mt-2 text-neutral-300">Timeless Elegance • Modern Craftsmanship • The Icons Collection</p>
          </div>
          <a href="#bestsellers" className="text-sm font-semibold text-[#156340] hover:underline">
            Best Sellers →
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-60 w-full object-cover object-center transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#156340]/20 px-3 py-1 text-xs font-medium text-[#156340]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#156340]" /> The Icons Collection
                </div>
                <h3 className="mt-3 text-xl font-serif font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-neutral-300">{c.description}</p>
                <div className="mt-4 text-sm font-semibold text-white">Explore →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
