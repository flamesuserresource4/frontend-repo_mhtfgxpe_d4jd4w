import React from 'react';
import { Check } from 'lucide-react';

const PricingCTA = () => {
  return (
    <section className="relative bg-white py-20" id="pricing">
      <div className="absolute inset-x-0 -top-24 -z-0 h-24 bg-gradient-to-b from-rose-500/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Start free. Scale as you grow.</h2>
          <p className="mt-3 text-gray-600">Everything you need to automate your social media presence.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="absolute right-4 top-4 rounded-full bg-fuchsia-600/10 px-3 py-1 text-xs font-semibold text-fuchsia-700">Popular</div>
            <h3 className="text-lg font-semibold text-gray-900">Creator</h3>
            <p className="mt-1 text-sm text-gray-600">Solo creators & freelancers</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-600"/>3 workflows</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-600"/>5 scheduled posts/day</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-600"/>AI caption assistant</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-rose-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:opacity-95">Get Started</a>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Team</h3>
            <p className="mt-1 text-sm text-gray-600">Agencies & growing brands</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-bold text-gray-900">$49</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-600"/>Unlimited workflows</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-600"/>Advanced scheduling & approvals</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-600"/>Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-fuchsia-600 px-5 py-3 font-semibold text-fuchsia-700 shadow-sm transition hover:bg-fuchsia-50">Start 14-day Trial</a>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">No hidden fees. Cancel anytime. Upgrade when you’re ready.</p>
      </div>
    </section>
  );
};

export default PricingCTA;
