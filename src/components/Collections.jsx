import React from 'react';

const collections = [
  {
    id: 'cbd',
    name: 'CBD & Wellness',
    description: 'Lab-tested CBD formulas for balance, rest, and recovery.',
    image:
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'supplements',
    name: 'Elite Supplements',
    description: 'Performance-driven blends crafted in the EU.',
    image:
      'https://images.unsplash.com/photo-1579722821273-0f6c7d443f11?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'accessories',
    name: 'Luxury Accessories',
    description: 'Refined lifestyle pieces to elevate every day.',
    image:
      'https://images.unsplash.com/photo-1517821099601-1a1a5e47f0e7?q=80&w=1974&auto=format&fit=crop',
  },
];

const Collections = () => {
  return (
    <section id="collections" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-black sm:text-4xl">
              Featured Collections
            </h2>
            <p className="mt-2 text-neutral-600">
              Minimalist design, elevated materials, impeccable standards.
            </p>
          </div>
          <a href="#bestsellers" className="text-sm font-semibold text-[#156340] hover:underline">
            Best Sellers →
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <a
              key={c.id}
              href={`#/collections/${c.id}`}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-60 w-full object-cover object-center transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> New Arrivals
                </div>
                <h3 className="mt-3 text-xl font-serif font-semibold text-black">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{c.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#156340]">Explore →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
