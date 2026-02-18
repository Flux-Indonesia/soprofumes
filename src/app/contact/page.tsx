"use client";

import { useState, FormEvent } from "react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: Contact Form */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold block">
            Connect
          </span>
          <h1 className="text-3xl font-bold leading-tight mb-8 text-white">
            Lab Inquiries
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Subject Identity */}
            <div className="space-y-3">
              <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold text-white block">
                Subject Identity
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
                required
              />
            </div>

            {/* Digital Coordinate */}
            <div className="space-y-3">
              <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold text-white block">
                Digital Coordinate
              </label>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
                required
              />
            </div>

            {/* Inquiry Message */}
            <div className="space-y-3">
              <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold text-white block">
                Inquiry Message
              </label>
              <textarea
                placeholder="Elaborate on your inquiry..."
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light resize-none text-sm text-white"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-[0.4em] hover:brightness-110 transition-all shadow-xl rounded-xl"
            >
              Transmit Message
            </button>
          </form>
        </div>

        {/* Right: Info Card */}
        <div className="space-y-8">
          <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] ai-glow">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-[#D4AF37]" size={20} />
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white">
                Physical Coordinates
              </span>
            </div>

            <div className="text-lg opacity-90 leading-relaxed text-white mb-8">
              <p>SoproFumes Laboratory</p>
              <p>Riyadh, Kingdom of Saudi Arabia</p>
              <p className="mt-2">24.7136&deg; N, 46.6753&deg; E</p>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              <a
                href="mailto:lab@soprofumes.com"
                className="flex items-center justify-between p-3 border border-white/10 rounded-lg hover:bg-white/5 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Mail className="text-[#D4AF37]" size={16} />
                  <span className="text-sm text-white">lab@soprofumes.com</span>
                </div>
                <ExternalLink className="text-white/30 group-hover:text-white/60 transition-all" size={14} />
              </a>

              <a
                href="tel:+966000000000"
                className="flex items-center justify-between p-3 border border-white/10 rounded-lg hover:bg-white/5 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Phone className="text-[#D4AF37]" size={16} />
                  <span className="text-sm text-white">+966 00 000 0000</span>
                </div>
                <ExternalLink className="text-white/30 group-hover:text-white/60 transition-all" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
