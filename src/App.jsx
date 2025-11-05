import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkflowDemo from './components/WorkflowDemo';
import PricingCTA from './components/PricingCTA';

function App() {
  return (
    <div className="min-h-screen font-inter bg-white">
      <Hero />
      <Features />
      <WorkflowDemo />
      <PricingCTA />
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} FluxFlow AI — Social media automation, simplified.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
