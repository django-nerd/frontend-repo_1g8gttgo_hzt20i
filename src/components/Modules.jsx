import React from 'react';
import { FileText, Shield, LineChart, UploadCloud } from 'lucide-react';

const features = [
  {
    icon: UploadCloud,
    title: 'Dokumenten-Intelligenz (OCR)',
    desc: 'Lohnausweise, Kontoauszüge und Belege automatisch erkennen und den richtigen Formularfeldern zuordnen.'
  },
  {
    icon: FileText,
    title: 'Vollautomatisierte Steuererklärung',
    desc: 'Kantonsspezifische Formulare, Berechnungen und Plausibilitätsprüfungen – Ende-zu-Ende.'
  },
  {
    icon: LineChart,
    title: 'Optimierung & Prognose',
    desc: 'Proaktive Abzüge, steuerliche Szenarien und Vorschau Ihrer Steuerlast in Echtzeit.'
  },
  {
    icon: Shield,
    title: 'Datenschutz auf Schweizer Niveau',
    desc: 'End-to-End-Verschlüsselung, konform mit DSG und DSGVO – Infrastruktur in der Schweiz.'
  }
];

export default function Modules() {
  return (
    <section id="features" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
            Eine Plattform – alle Steuerprozesse
          </h2>
          <p className="mt-3 text-neutral-600 text-lg">
            Von der Datenerfassung bis zur elektronischen Einreichung – alles in einem nahtlosen Ablauf.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-neutral-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
