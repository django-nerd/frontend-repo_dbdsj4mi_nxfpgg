import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:flex lg:items-center lg:gap-16 lg:py-32">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#156340]/20 px-4 py-1 text-xs font-medium tracking-wide text-[#156340]">
            Premium • EU Compliant • PCI DSS
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Luxury Meets Wellness — Premium European Quality You Can Trust
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Curated CBD, elite supplements, and timepieces crafted for modern professionals in France & Belgium. Secure. Elegant. Powerful.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#collections"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Collections
            </a>
            <a
              href="#bestsellers"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Shop Best Sellers
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-300">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#156340]"></span>
              EU Certified Supplier
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#156340]"></span>
              Fast SEPA Delivery (48h–72h)
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#156340]"></span>
              Pay securely with TailoredPay / Ikajo
            </div>
          </div>
        </div>
        <div className="relative mt-14 flex-1 overflow-hidden rounded-3xl bg-white/5 p-2 backdrop-blur-sm ring-1 ring-white/10 lg:mt-0">
          <div className="relative h-full w-full rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              PCI DSS Secure Checkout
            </div>
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-semibold">Signature Timepieces</h3>
                <p className="mt-2 max-w-md text-sm text-neutral-300">
                  Iconic European watches, minimalist design and modern craftsmanship.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1524592577038-65e1b02f7f18?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Luxury watch"
                    className="h-28 w-full rounded-xl object-cover object-center shadow-sm"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black" />
    </section>
  );
};

export default Hero;
