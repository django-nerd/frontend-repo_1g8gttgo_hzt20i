import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Datenerfassung',
    detail: 'Laden Sie Dokumente hoch oder verbinden Sie E-Mail/QR – unsere OCR erkennt relevante Daten automatisch.'
  },
  {
    title: 'Analyse & Zuordnung',
    detail: 'KI-Parser klassifiziert Belege, ordnet Felder zu und führt Plausibilitätsprüfungen durch.'
  },
  {
    title: 'Berechnung & Optimierung',
    detail: 'Steuerlast wird kantonsspezifisch berechnet. Vorschläge für Abzüge und Optimierungsstrategien in Echtzeit.'
  },
  {
    title: 'Einreichung & Export',
    detail: 'Elektronische Abgabe an eTax-Portale oder Export für signierte Einreichung – vollständig nachvollziehbar.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">So funktioniert es</h2>
          <p className="mt-3 text-neutral-600 text-lg">Transparenter, geführter Ablauf – von A bis Z.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">{s.detail}</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Rechtlich begründet und nachvollziehbar
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
