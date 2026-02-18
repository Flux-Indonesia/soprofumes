"use client";

import { motion } from "framer-motion";
import { Leaf, Cpu, Shield } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const pillars = [
  {
    icon: Leaf,
    title: "Authentic Sourcing",
    description:
      "Every drop of oud is ethically harvested and verified for purity before entering our lab.",
    color: "#D4AF37",
  },
  {
    icon: Cpu,
    title: "Neural Synthesis",
    description:
      "Our proprietary AI identifies olfactory resonance clusters to trigger specific memory pathways.",
    color: "#00F5FF",
  },
  {
    icon: Shield,
    title: "High Fidelity",
    description:
      "We maintain a 98% accuracy rate in our molecular reproductions compared to natural heritage extracts.",
    color: "#F59E0B",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block text-sm tracking-[0.3em] uppercase font-medium mb-4 text-[#D4AF37]"
            variants={fadeInUp}
          >
            Manifesto
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Our Manifesto
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We do not create perfumes. We architect emotional telemetry through
            molecular precision.
          </motion.p>
        </motion.div>

        {/* The Neural Vision Section */}
        <motion.section
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            variants={fadeInUp}
          >
            The Neural Vision
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={fadeInUp}>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded at the intersection of traditional Arabian oud extraction
                and cutting-edge predictive modeling, SoProFumes represents the
                sensory singularity — a point where ancient craft converges with
                artificial intelligence to produce fragrances that resonate on a
                neurological level.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every bottle is a data-driven masterpiece, crafted by combining
                generative networks with the world&apos;s most precious raw
                materials. The result is not merely a scent — it is an algorithm
                of emotion, distilled into liquid form.
              </p>
            </motion.div>

            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              variants={fadeInUp}
            >
              <Image
                src="/ingredients/oud.png"
                alt="The Neural Vision - SoProFumes Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            </motion.div>
          </div>
        </motion.section>

        {/* Three Pillars */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            variants={fadeInUp}
          >
            Our Three Pillars
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pillar.color}1A` }}
                >
                  <pillar.icon
                    className="w-7 h-7"
                    style={{ color: pillar.color }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>

                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
