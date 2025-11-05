import React from 'react';
import Hero from './components/Hero';
import Modules from './components/Modules';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-red-600" />
          <span className="font-semibold tracking-tight text-neutral-900">TaxAgent</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#features" className="hover:text-neutral-900">Funktionen</a>
          <a href="#workbench" className="hover:text-neutral-900">Arbeitsbereich</a>
          <a href="#" className="hover:text-neutral-900">Sicherheit</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-50">Anmelden</button>
          <button className="inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700">Kostenlos testen</button>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
