import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16 lg:py-28">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#156340]/10 px-4 py-1 text-xs font-medium tracking-wide text-[#156340]">
            Premium • EU Compliant • PCI DSS
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Luxury Meets Wellness — Premium European Quality You Can Trust
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Curated CBD, elite supplements, and refined accessories crafted for modern
            professionals in France & Belgium. Secure. Elegant. Powerful.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#collections"
              className="rounded-full bg-[#156340] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Collections
            </a>
            <a
              href="#bestsellers"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Shop Best Sellers
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-600">
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
        <div className="relative mt-14 h-[420px] flex-1 overflow-hidden rounded-3xl bg-gradient-to-br from-white to-emerald-50 p-2 shadow-xl lg:mt-0">
          <div className="relative h-full w-full rounded-2xl bg-white/70 p-6 backdrop-blur">
            <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-black px-4 py-1 text-xs font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              PCI DSS Secure Checkout
            </div>
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-black">Signature Curation</h3>
                <p className="mt-2 max-w-md text-sm text-neutral-600">
                  Our best-in-class formulations and accessories, rigorously tested and
                  manufactured under EU standards.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  'https://images.unsplash.com/photo-1604881980929-6c972aff4d20?q=80&w=1560&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1556228453-efd1e5b4900c?q=80&w=1560&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1631&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1590152568520-8a0aac9b7b8a?q=80&w=1690&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1512203492609-8f7f4f98c87f?q=80&w=1560&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1560&auto=format&fit=crop',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Luxury product"
                    className="h-28 w-full rounded-xl object-cover object-center shadow-sm"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
    </section>
  );
};

export default Hero;
