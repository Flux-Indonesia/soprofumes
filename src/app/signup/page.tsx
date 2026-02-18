"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Signup submitted:", formData);
  };

  return (
    <main className="pt-32 pb-24 px-4 flex items-center justify-center min-h-screen bg-[#0A0A0A]">
      <div className="w-full max-w-sm p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] shadow-2xl">
        <h1 className="text-xl font-bold mb-6 text-center text-white">
          Initiate Sequence
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Subject Name */}
          <div className="space-y-1">
            <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold text-white block">
              Subject Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-sm text-white"
              required
            />
          </div>

          {/* Digital Identity */}
          <div className="space-y-1">
            <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold text-white block">
              Digital Identity
            </label>
            <input
              type="email"
              placeholder="email@domain.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-sm text-white"
              required
            />
          </div>

          {/* New Passphrase */}
          <div className="space-y-1">
            <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold text-white block">
              New Passphrase
            </label>
            <input
              type="password"
              placeholder="--------"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-sm text-white"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-xl shadow-xl hover:brightness-110 transition-all"
          >
            Create Profile
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-[9px] uppercase tracking-widest opacity-40 text-white mt-6">
          Already registered?{" "}
          <Link href="/login" className="text-[#D4AF37] underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}
