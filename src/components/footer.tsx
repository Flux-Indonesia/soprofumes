"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="pt-40 pb-16 border-t border-white/10 px-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-24 mb-40">
        {/* Brand */}
        <div className="lg:col-span-5">
          <Link href="/" className="text-4xl font-bold tracking-[0.1em] serif block mb-12 hover:text-[#D4AF37] transition-colors">
            SOPRO<span className="text-[#D4AF37] font-light">FUMES</span>
          </Link>
          <p className="opacity-40 text-xl leading-relaxed font-light mb-12 max-w-md">
            &ldquo;Architecting the future of scent through a symbiosis of luxury heritage and neural mapping technology.&rdquo;
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
              <Mail size={16} />
              <span className="text-xs tracking-widest uppercase">lab@soprofumes.com</span>
            </div>
            <div className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
              <MapPin size={16} />
              <span className="text-xs tracking-widest uppercase">24.7136° N, 46.6753° E</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="https://instagram.com/soprofumes" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:text-[#D4AF37] transition-all">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#D4AF37] transition-all">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#D4AF37] transition-all">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-12 font-bold">Navigation</h4>
          <ul className="space-y-6 text-[11px] font-bold tracking-[0.2em] uppercase">
            {[
              { name: "The Collection", href: "/shop" },
              { name: "Neural Drops", href: "/drops" },
              { name: "Scent Analyzer", href: "/analyzer" },
              { name: "Guide", href: "/education" },
              { name: "Our Manifesto", href: "/about" },
              { name: "Inquiries", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-12 font-bold">Account</h4>
          <ul className="space-y-6 text-[11px] font-bold tracking-[0.2em] uppercase">
            {[
              { name: "Identity", href: "/login" },
              { name: "Acquisitions", href: "/cart" },
              { name: "Wishlist", href: "/wishlist" },
              { name: "The Community", href: "/community" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-3">
          <div className="p-10 bg-white/[0.03] rounded-[3rem] border border-white/10 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <h4 className="text-2xl serif mb-4 font-light">Join The Dossier</h4>
              <p className="text-[10px] opacity-40 mb-10 leading-relaxed uppercase tracking-widest">
                Early access to Neural Drops and limited molecular experiments.
              </p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="IDENTITY@COORD.IO"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] tracking-widest focus:border-[#D4AF37] outline-none transition-all placeholder:opacity-20 font-bold"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#D4AF37] hover:translate-x-2 transition-transform">
                  <ArrowUpRight size={20} strokeWidth={1} />
                </button>
              </form>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37]/5 blur-3xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold">
        <p>© 2024 SoProFumes Neural Lab.</p>
        <div className="flex gap-16">
          <Link href="/privacy" className="hover:opacity-100 transition-colors">Privacy Protocols</Link>
          <Link href="/governance" className="hover:opacity-100 transition-colors">Governance</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 text-center">
        <a
          href="https://www.fluxconsultancy.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] uppercase tracking-[0.4em] opacity-20 hover:opacity-60 hover:text-[#D4AF37] transition-all font-bold"
        >
          Developed by www.fluxconsultancy.co.uk
        </a>
      </div>
    </footer>
  );
}
