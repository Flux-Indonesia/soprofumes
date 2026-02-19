"use client";

export default function GovernancePage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Governance</h1>
        <p className="text-base opacity-70 font-light max-w-3xl mx-auto leading-relaxed">
          Our governance framework ensures ethical AI development, sustainable
          sourcing, and transparent operations in the neural fragrance
          ecosystem.
        </p>
      </div>

      <div className="space-y-16">
        {/* AI Ethics Framework */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            AI Ethics Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Algorithmic Transparency</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Our neural mapping algorithms are regularly audited for bias and
                accuracy. We maintain transparency in how scent recommendations
                are generated.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Human Oversight</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                All AI-generated recommendations are validated by master
                perfumers and olfactory experts before reaching customers.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Bias Prevention</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                We actively work to eliminate cultural, gender, and demographic
                biases in our scent profiling systems.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Continuous Learning</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Our AI systems are designed to learn and improve while
                respecting user privacy and maintaining ethical boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            Sustainable Practices
          </h2>
          <div className="space-y-4 text-sm opacity-70 leading-relaxed">
            <p>
              <strong>Ethical Sourcing:</strong> All raw materials are sourced
              through fair trade partnerships with local communities, ensuring
              sustainable harvesting practices.
            </p>
            <p>
              <strong>Carbon Neutral:</strong> Our neural extraction
              laboratories operate on 100% renewable energy, and we offset all
              shipping emissions.
            </p>
            <p>
              <strong>Waste Reduction:</strong> Our molecular synthesis
              processes minimize waste, and all packaging is biodegradable or
              recyclable.
            </p>
            <p>
              <strong>Community Impact:</strong> 5% of profits are reinvested
              in fragrance ingredient farming communities and environmental
              conservation.
            </p>
          </div>
        </section>

        {/* Corporate Governance */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            Corporate Governance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3">Board of Directors</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Independent board with expertise in AI, perfumery, and
                sustainable business practices.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Advisory Council</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Master perfumers, AI researchers, and sustainability experts
                guide our strategic decisions.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Stakeholder Engagement</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Regular consultation with customers, suppliers, and communities
                affected by our operations.
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            Regulatory Compliance
          </h2>
          <div className="space-y-4 text-sm opacity-70 leading-relaxed">
            <p>
              <strong>GDPR Compliance:</strong> Full compliance with European
              data protection regulations for all global customers.
            </p>
            <p>
              <strong>IFRA Standards:</strong> All fragrances meet International
              Fragrance Association safety and quality standards.
            </p>
            <p>
              <strong>AI Governance:</strong> Adherence to emerging AI
              governance frameworks and ethical AI development principles.
            </p>
            <p>
              <strong>Financial Transparency:</strong> Annual sustainability and
              governance reports published for stakeholder review.
            </p>
          </div>
        </section>

        {/* Governance Inquiries */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10 text-center">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            Governance Inquiries
          </h2>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            Questions about our governance practices, sustainability
            initiatives, or corporate policies.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Email:</strong> governance@soprofumes.com
            </p>
            <p>
              <strong>Annual Reports:</strong> Available upon request
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
