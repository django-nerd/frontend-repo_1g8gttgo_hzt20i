import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} TaxAgent Schweiz – Präzision trifft Einfachheit.
        </p>
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-neutral-900">Datenschutz</a>
          <a href="#" className="hover:text-neutral-900">Nutzungsbedingungen</a>
          <a href="#" className="hover:text-neutral-900">Kontakt</a>
        </nav>
      </div>
    </footer>
  );
}
