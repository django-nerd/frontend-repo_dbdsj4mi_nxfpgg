import React from 'react';
import { ShieldCheck, BadgeCheck, Truck, CreditCard, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Claire D.',
    title: 'Paris, FR',
    quote:
      'Des produits d’une qualité exceptionnelle. Paiement rapide et livraison en 48h — parfait.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Louis M.',
    title: 'Lyon, FR',
    quote: 'Élégant, discret, et très fiable. Mon nouveau site favori pour le bien-être haut de gamme.',
    photo: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1000&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Sophie V.',
    title: 'Bruxelles, BE',
    quote:
      'Le service client est excellent et les produits sont vraiment premium. Je recommande ! ',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop',
    rating: 5,
  },
];

const TrustAndTestimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#156340]" />
              <h3 className="text-xl font-serif font-semibold text-black">Trust & Security</h3>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><BadgeCheck size={16} className="text-[#156340]"/> PCI DSS Secure Checkout</li>
              <li className="flex items-center gap-2"><CreditCard size={16} className="text-[#156340]"/> Pay with TailoredPay, Ikajo, Payrexx</li>
              <li className="flex items-center gap-2"><Truck size={16} className="text-[#156340]"/> Fast SEPA Delivery (48h–72h)</li>
              <li className="flex items-center gap-2"><BadgeCheck size={16} className="text-[#156340]"/> EU Certified Supplier</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-black p-4 text-xs text-white">
              EUR (€) only • Apple Pay • Google Pay • Shop Pay • Crypto option (manual)
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-serif font-semibold text-black sm:text-4xl">Client Stories</h2>
                <p className="mt-2 text-neutral-600">Verified reviews from France & Belgium</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <img src={t.photo} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-black">{t.name}</div>
                      <div className="text-xs text-neutral-500">{t.title}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-neutral-700">“{t.quote}”</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-amber-600">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#156340]/10 px-3 py-1 text-[10px] font-medium text-[#156340]">
                    <Quote size={12} /> Verified Purchase
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndTestimonials;
