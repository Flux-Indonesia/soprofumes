"use client";

import { Leaf, Cpu, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen animate-fade-in">
      {/* Header */}
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold leading-none mb-8">Manifesto</h1>
        <p className="text-lg opacity-80 font-light leading-relaxed">
          &ldquo;We do not create perfumes. We architect emotional telemetry
          through molecular precision.&rdquo;
        </p>
      </div>

      {/* The Neural Vision */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">The Neural Vision</h2>
          <p className="text-base opacity-70 leading-relaxed font-light">
            Founded at the intersection of traditional Arabian oud extraction
            and cutting-edge predictive modeling, SoProFumes represents the
            sensory singularity. Our mission is to bridge the gap between
            ancient olfactory heritage and the future of artificial
            intelligence.
          </p>
          <p className="text-base opacity-70 leading-relaxed font-light">
            Every bottle is a data-driven masterpiece, crafted by combining
            generative networks with the world&apos;s most precious raw
            materials. We believe the future of luxury is personal, precise,
            and profoundly emotional.
          </p>
        </div>
        <div className="aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl group">
          <img
            src="https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="The Neural Vision"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
          />
        </div>
      </div>

      {/* Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem]">
          <Leaf size={24} className="text-[#D4AF37] mb-6" />
          <h4 className="text-base font-bold mb-3">Authentic Sourcing</h4>
          <p className="opacity-60 text-sm font-light">
            Every drop of oud is ethically harvested and verified for purity
            before entering our lab.
          </p>
        </div>
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem]">
          <Cpu size={24} className="text-cyan-400 mb-6" />
          <h4 className="text-base font-bold mb-3">Neural Synthesis</h4>
          <p className="opacity-60 text-sm font-light">
            Our proprietary AI identifies olfactory resonance clusters to
            trigger specific memory pathways.
          </p>
        </div>
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem]">
          <Shield size={24} className="text-amber-500 mb-6" />
          <h4 className="text-base font-bold mb-3">High Fidelity</h4>
          <p className="opacity-60 text-sm font-light">
            We maintain a 98% accuracy rate in our molecular reproductions
            compared to natural heritage extracts.
          </p>
        </div>
      </div>
    </div>
  );
}
