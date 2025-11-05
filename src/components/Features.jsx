import React from 'react';
import { Zap, Share2, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI Content Generation',
    desc: 'Turn briefs into ready-to-post captions, carousels, and hooks tailored to each platform.'
  },
  {
    icon: Share2,
    title: 'Omnichannel Publishing',
    desc: 'Publish to Instagram, TikTok, YouTube, X, and LinkedIn with one unified workflow.'
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    desc: 'Auto-schedule for peak times based on your audience activity and historical performance.'
  },
  {
    icon: Shield,
    title: 'Approval & Compliance',
    desc: 'Built-in review steps, brand voice controls, and safe-guard rails for teams.'
  },
];

const Features = () => {
  return (
    <section className="bg-white py-20" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Build once. Automate everywhere.</h2>
          <p className="mt-3 text-gray-600">A playful, powerful toolkit designed for creators, agencies, and growth teams.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-rose-500 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
