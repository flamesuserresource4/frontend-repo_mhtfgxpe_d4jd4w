import React from 'react';
import { Rocket, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-fuchsia-600 via-pink-600 to-rose-500 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <Rocket className="h-4 w-4" />
              Launch your social media on autopilot
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              AI Automation for Creators & Brands
            </h1>
            <p className="mt-4 max-w-xl text-white/90 text-base md:text-lg">
              Design powerful workflows that create, schedule, and publish content across platforms — automatically. Spend less time managing, more time creating.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-fuchsia-700 shadow-sm transition hover:shadow-md"
              >
                Get Started Free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white/95 backdrop-blur transition hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                See it in action
              </a>
            </div>
            <p className="mt-4 text-sm text-white/80">No credit card required • Cancel anytime</p>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] w-full rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10">
            <Spline
              scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-fuchsia-700/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
          <span>Trusted by creators and teams automating on</span>
          <div className="flex items-center gap-4">
            <span className="rounded-md bg-white/10 px-3 py-1">Instagram</span>
            <span className="rounded-md bg-white/10 px-3 py-1">TikTok</span>
            <span className="rounded-md bg-white/10 px-3 py-1">YouTube</span>
            <span className="rounded-md bg-white/10 px-3 py-1">X</span>
            <span className="rounded-md bg-white/10 px-3 py-1">LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
