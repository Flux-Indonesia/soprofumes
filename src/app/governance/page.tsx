"use client";

import { Leaf, Users, Shield, BarChart3 } from "lucide-react";

const sustainabilityItems = [
  { title: "Ethical Sourcing", description: "All raw materials are ethically sourced from verified suppliers with full supply chain transparency." },
  { title: "Carbon Neutral", description: "Our operations are carbon neutral through offset programs and renewable energy usage." },
  { title: "Waste Reduction", description: "Zero-waste production processes with fully recyclable and biodegradable packaging." },
  { title: "Community Impact", description: "5% of profits reinvested into communities where our raw materials are sourced." },
];

const governanceItems = [
  { title: "Board of Directors", description: "Independent board with diverse expertise in fragrance, technology, and sustainability." },
  { title: "Advisory Council", description: "Expert advisory council guiding our AI ethics and olfactory research programs." },
  { title: "Stakeholder Engagement", description: "Regular engagement with customers, suppliers, and community stakeholders." },
];

const complianceItems = [
  { title: "GDPR Compliance", description: "Full compliance with European data protection regulations." },
  { title: "IFRA Standards", description: "All fragrances comply with International Fragrance Association safety standards." },
  { title: "AI Governance", description: "Ethical AI framework governing our neural scent analysis technology." },
  { title: "Financial Transparency", description: "Annual audited reports available to stakeholders upon request." },
];

export default function GovernancePage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      <div className="mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">Corporate</h2>
        <h1 className="text-3xl font-bold leading-tight text-white">
          Governance <br /> Framework
        </h1>
        <p className="text-lg opacity-60 font-light mt-6 max-w-2xl text-white">
          Our commitment to ethical practices, sustainability, and transparent governance.
        </p>
      </div>

      {/* Sustainable Practices */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Leaf size={20} className="text-green-500" />
          <h2 className="text-xl font-bold text-white">Sustainable Practices</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sustainabilityItems.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all"
            >
              <h3 className="text-[#D4AF37] font-bold mb-2">{item.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Users size={20} className="text-[#D4AF37]" />
          <h2 className="text-xl font-bold text-white">Corporate Governance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {governanceItems.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all"
            >
              <h3 className="text-[#D4AF37] font-bold mb-2">{item.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Shield size={20} className="text-cyan-400" />
          <h2 className="text-xl font-bold text-white">Regulatory Compliance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all"
            >
              <h3 className="text-[#D4AF37] font-bold mb-2">{item.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="p-16 bg-white/[0.03] border border-cyan-400/20 rounded-[3rem] text-center ai-glow">
          <BarChart3 size={32} className="text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-4 text-white">Governance Inquiries</h2>
          <p className="opacity-60 text-sm mb-6 max-w-lg mx-auto text-white">
            For governance-related questions or to request our annual report, contact us at:
          </p>
          <a href="mailto:governance@soprofumes.com" className="text-[#D4AF37] text-sm hover:underline font-bold">
            governance@soprofumes.com
          </a>
        </div>
      </section>
    </div>
  );
}
