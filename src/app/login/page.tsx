"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <main className="pt-32 pb-24 px-4 flex items-center justify-center min-h-screen bg-[#0A0A0A]">
      <div className="w-full max-w-sm p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] shadow-2xl">
        <h1 className="text-xl font-bold mb-6 text-center text-white">
          Neural Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Identity Token */}
          <div className="space-y-1">
            <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold text-white block">
              Identity Token
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30 text-white" size={14} />
              <input
                type="email"
                placeholder="email@domain.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border border-white/10 p-3 pl-10 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-sm text-white"
                required
              />
            </div>
          </div>

          {/* Secure Passphrase */}
          <div className="space-y-1">
            <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold text-white block">
              Secure Passphrase
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30 text-white" size={14} />
              <input
                type="password"
                placeholder="--------"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-transparent border border-white/10 p-3 pl-10 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-sm text-white"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-xl shadow-xl hover:brightness-110 transition-all"
          >
            Access Dossier
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-[9px] uppercase tracking-widest opacity-40 text-white mt-6">
          No profile yet?{" "}
          <Link href="/signup" className="text-[#D4AF37] underline">
            Initiate Sequence
          </Link>
        </p>
      </div>
    </main>
  );
}
