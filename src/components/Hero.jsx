import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient for readability without blocking 3D interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white/70 px-3 py-1 text-sm text-red-600 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            KI-gestützte Schweizer Steuerplattform
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            Präzise. Transparent. Vollautomatisiert.
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
            Erstellen, optimieren und reichen Sie Ihre Steuererklärung für jeden Kanton ein –
            mit einem autonomen TaxAgent, der Schweizer Steuerrecht versteht.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#workbench"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-white shadow-sm hover:bg-red-700 transition-colors"
            >
              Jetzt starten
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Funktionen entdecken
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-neutral-600">
            <Shield className="h-4 w-4 text-neutral-500" />
            End-to-End-verschlüsselt • Schweizer Rechenzentren
          </div>
        </div>
      </div>
    </section>
  );
}
