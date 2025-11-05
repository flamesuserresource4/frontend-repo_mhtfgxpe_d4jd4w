import React from 'react';
import { CheckCircle, Calendar, Users } from 'lucide-react';

const Step = ({ title, desc, icon: Icon, color }) => (
  <div className={`rounded-xl border bg-white p-4 shadow-sm ${color}`}>
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
        <Icon className="h-5 w-5 text-gray-700" />
      </div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-xs text-gray-600">{desc}</div>
      </div>
    </div>
  </div>
);

const Arrow = () => (
  <div className="flex items-center justify-center">
    <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12h46" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round"/>
      <path d="M46 4l8 8-8 8" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const WorkflowDemo = () => {
  return (
    <section className="bg-gray-50 py-20" id="demo">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Drag. Drop. Done.</h2>
          <p className="mt-3 text-gray-600">Visual workflows make complex social tasks feel playful. Here’s a typical flow:</p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <Step title="Ideation (AI)" desc="Generate hooks & captions" icon={CheckCircle} />
            <Arrow />
            <Step title="Design" desc="Create carousel & video edits" icon={Users} />
            <Arrow />
            <Step title="Schedule" desc="Post to all channels" icon={Calendar} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-rose-500/10 p-4 text-sm text-gray-700">
              • Auto-variations per platform
            </div>
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-rose-500/10 p-4 text-sm text-gray-700">
              • Hashtag sets & mentions
            </div>
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-rose-500/10 p-4 text-sm text-gray-700">
              • Best-time posting windows
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
