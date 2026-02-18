"use client";

import { useState } from "react";
import Link from "next/link";
import { User, ShoppingBag, Brain, LogOut, Heart } from "lucide-react";

export default function AccountPage() {
  const [user] = useState({
    name: "Guest User",
    email: "guest@soprofumes.com",
    rank: "Alpha",
    acquisitions: 0,
  });

  const [hasAnalysis] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      <div className="mb-16">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">Profile</h2>
        <h1 className="text-3xl font-bold leading-tight text-white">
          Subject <br /> Dossier
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Profile Card */}
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
              <User size={20} className="text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Identity Card</h2>
              <span className="text-[8px] uppercase tracking-widest px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full font-bold">
                Verified Expert
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center py-3 border-b border-white/10">
              <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold text-white">Identity</span>
              <span className="text-sm text-white">{user.name}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/10">
              <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold text-white">Email</span>
              <span className="text-sm text-white">{user.email}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/10">
              <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold text-white">Member Rank</span>
              <span className="text-sm font-bold text-[#D4AF37]">{user.rank}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/10">
              <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold text-white">Acquisitions</span>
              <span className="text-sm text-white">{user.acquisitions}</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-white/10 text-white/60 py-3 text-[9px] uppercase tracking-widest hover:border-red-500/30 hover:text-red-400 transition-colors rounded-xl">
            <LogOut size={14} /> Terminate Session
          </button>
        </div>

        {/* Neural Footprint */}
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem]">
          <div className="flex items-center gap-3 mb-6">
            <Brain size={20} className="text-cyan-400" />
            <h2 className="text-lg font-bold text-white">Neural Footprint</h2>
          </div>

          {hasAnalysis ? (
            <div className="space-y-4">
              <p className="text-sm opacity-60 text-white">Your personalized scent profile will appear here.</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-cyan-400/5 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4">
                <Brain size={24} className="text-cyan-400/50" />
              </div>
              <p className="text-sm opacity-40 mb-6 text-white">
                No neural footprint found. Initiate sequence to map your olfactory preferences.
              </p>
              <Link
                href="/analyzer"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-cyan-400/10 transition-all inline-block"
              >
                Initiate Analysis
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/cart" className="p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center hover:border-[#D4AF37]/30 transition-all group">
          <ShoppingBag size={20} className="text-[#D4AF37] mx-auto mb-2" />
          <span className="text-sm opacity-60 group-hover:text-[#D4AF37] transition-colors text-white">Your Acquisitions</span>
        </Link>
        <Link href="/wishlist" className="p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center hover:border-[#D4AF37]/30 transition-all group">
          <Heart size={20} className="text-[#D4AF37] mx-auto mb-2" />
          <span className="text-sm opacity-60 group-hover:text-[#D4AF37] transition-colors text-white">Saved Resonances</span>
        </Link>
        <Link href="/shop" className="p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center hover:border-[#D4AF37]/30 transition-all group">
          <ShoppingBag size={20} className="text-[#D4AF37] mx-auto mb-2" />
          <span className="text-sm opacity-60 group-hover:text-[#D4AF37] transition-colors text-white">Browse Archive</span>
        </Link>
      </div>
    </div>
  );
}
