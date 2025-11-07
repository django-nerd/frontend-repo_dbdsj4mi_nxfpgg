import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-serif font-bold text-black">LA MAISON VERT</div>
            <p className="mt-3 text-sm text-neutral-600">
              Luxury Meets Science. Premium European Wellness You Can Trust.
            </p>
            <div className="mt-4 flex gap-2 text-[10px]">
              <span className="rounded-full border border-emerald-200 px-2 py-1 text-emerald-700">SSL Secure</span>
              <span className="rounded-full border border-emerald-200 px-2 py-1 text-emerald-700">Verified Merchant</span>
              <span className="rounded-full border border-emerald-200 px-2 py-1 text-emerald-700">EU Payments</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-black">Information</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-black">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Refund Policy</a></li>
              <li><a href="#" className="hover:text-black">Mentions Légales</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-black">Join our Private Club</div>
            <p className="mt-3 text-sm text-neutral-600">Get 10% off your first order and priority access.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-full border border-black/10 px-4 py-2 text-sm outline-none focus:border-[#156340]"
              />
              <button className="rounded-full bg-[#156340] px-4 py-2 text-sm font-semibold text-white">
                Join
              </button>
            </form>
            <p className="mt-2 text-[11px] text-neutral-500">
              By subscribing you agree to our Privacy Policy. GDPR compliant.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-neutral-600">
          <div>© {new Date().getFullYear()} La Maison Vert. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span>EUR (€)</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>TailoredPay</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>Ikajo</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>Payrexx</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
