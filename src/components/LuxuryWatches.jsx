import React from 'react';

const watches = [
  {
    id: 'rolex-submariner-date',
    brand: 'Rolex',
    name: 'Submariner Date',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524592577038-65e1b02f7f18?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Stainless steel with automatic movement and a 40mm case, engineered for performance and prestige. Waterproof to 300m, the archetype of the luxury diver. ',
  },
  {
    id: 'ap-royal-oak',
    brand: 'Audemars Piguet',
    name: 'Royal Oak',
    price: 42000,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Self-winding icon with blue dial and 41mm case, paired to an integrated steel bracelet. A masterpiece of modern craftsmanship and timeless design.',
  },
  {
    id: 'patek-nautilus',
    brand: 'Patek Philippe',
    name: 'Nautilus',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548171916-c0dea1bcbfe4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Rose gold elegance with sapphire crystal and an automatic heart, 40.5mm of refined presence. A statement of taste and heritage.',
  },
  {
    id: 'omega-speedmaster',
    brand: 'Omega',
    name: 'Speedmaster Moonwatch',
    price: 6500,
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548171923-a6f47f4d2a5f?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Chronograph legend with black dial and manual wind — the icon worn on the Moon. Precision, history, and everyday sophistication.',
  },
  {
    id: 'cartier-santos',
    brand: 'Cartier',
    name: 'Santos de Cartier',
    price: 12000,
    images: [
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909212-d5cd5971d132?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549921296-3ede7a60c0bb?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Silver dial with steel/gold duo-tone and elegant square geometry. A Parisian essential that balances refinement with bold character.',
  },
  {
    id: 'tag-carrera',
    brand: 'TAG Heuer',
    name: 'Carrera',
    price: 7000,
    images: [
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511732351157-1865efcb7b7a?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Racing-inspired chronograph with sapphire crystal and a 42mm case. Built for speed, styled for the modern city.',
  },
  {
    id: 'hublot-big-bang',
    brand: 'Hublot',
    name: 'Big Bang Unico',
    price: 23000,
    images: [
      'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548172068-7c8cb83a8a02?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Skeleton dial and rubber strap in a modern fusion of materials. A bold luxury signature for those who lead.',
  },
  {
    id: 'breitling-navitimer',
    brand: 'Breitling',
    name: 'Navitimer B01',
    price: 9500,
    images: [
      'https://images.unsplash.com/photo-1535525153412-5a4ac0140d0b?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Pilot chronograph with in-house automatic movement and a commanding 46mm case. Precision meets presence.',
  },
  {
    id: 'iwc-portugieser',
    brand: 'IWC',
    name: 'Portugieser Chronograph',
    price: 8300,
    images: [
      'https://images.unsplash.com/photo-1511732351157-1865efcb7b7a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'White dial with blue leaf hands and a fine leather strap. A study in proportion, clarity, and quiet power.',
  },
  {
    id: 'tudor-bb58',
    brand: 'Tudor',
    name: 'Black Bay Fifty-Eight',
    price: 3800,
    images: [
      'https://images.unsplash.com/photo-1511732351157-1865efcb7b7a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548171923-a6f47f4d2a5f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
    ],
    desc:
      'Heritage diver with a 39mm steel case and vintage-inflected details. Understated elegance for every day.',
  },
];

const LuxuryWatches = () => {
  return (
    <section id="watches" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-serif font-semibold sm:text-4xl">The Icons Collection</h2>
            <p className="mt-2 text-neutral-300">Timeless Elegance • Modern Craftsmanship</p>
          </div>
          <a href="#bestsellers" className="text-sm font-semibold text-[#156340] hover:underline">
            Explore Best Sellers →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {watches.map((w, idx) => (
            <article
              key={w.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl transition duration-500 hover:-translate-y-1 hover:bg-white/10"
              style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={w.images[0]}
                    alt={`${w.brand} ${w.name}`}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[10px]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#156340]"></span>
                    Timeless Elegance
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold">
                    {w.brand} <span className="text-neutral-300">{w.name}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">{w.desc}</p>

                  <div className="mt-4 flex gap-2">
                    {w.images.slice(1).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${w.name} view ${i + 2}`}
                        className="h-16 w-20 rounded-xl object-cover opacity-80 transition hover:opacity-100"
                        loading="lazy"
                      />
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-lg font-semibold tracking-wide" style={{ color: '#d4af37' }}>
                      ${w.price.toLocaleString()} — $ {(Math.min(45000, Math.max(3000, w.price + 4000))).toLocaleString()}
                    </div>
                    <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#156340] hover:text-white">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryWatches;
