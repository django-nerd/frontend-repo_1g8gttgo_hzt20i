import React from 'react';
import { Gauge } from 'lucide-react';

export default function CTA() {
  return (
    <section id="workbench" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
              Starten Sie Ihre Steueroptimierung in Minuten
            </h2>
            <p className="mt-3 text-neutral-600 text-lg">
              Erstellen Sie Ihr intelligentes Steuerprofil, erhalten Sie personalisierte Empfehlungen
              und sehen Sie Ihre Steuerprognose in Echtzeit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-white shadow-sm hover:bg-red-700 transition-colors">
                <Gauge className="h-5 w-5" />
                Steuerprofil anlegen
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-neutral-800 hover:bg-neutral-50 transition-colors">
                Demo ansehen
              </button>
            </div>
            <p className="mt-3 text-sm text-neutral-500">
              Mehrsprachig (DE/EN) • Zwischenspeicherung • Sichere Anmeldung mit 2FA
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gradient-to-br from-red-50 to-white p-4">
                <p className="text-sm text-neutral-600">Abzüge entdeckt</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">CHF 4’320</p>
                <p className="mt-1 text-sm text-emerald-600">+ neue Optimierung in Säule 3a</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-neutral-50 to-white p-4">
                <p className="text-sm text-neutral-600">Prognose Steuerlast</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">CHF 18’950</p>
                <p className="mt-1 text-sm text-neutral-500">Kanton ZH • Verheiratet • 2 Kinder</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-neutral-50 to-white p-4">
                <p className="text-sm text-neutral-600">Belege verifiziert</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">26</p>
                <p className="mt-1 text-sm text-emerald-600">Keine Fehler gefunden</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-red-50 to-white p-4">
                <p className="text-sm text-neutral-600">Einreichungsstatus</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">Bereit</p>
                <p className="mt-1 text-sm text-neutral-500">Export oder eTax-Übermittlung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
