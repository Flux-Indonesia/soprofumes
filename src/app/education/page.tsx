"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ingredients = [
  {
    name: "Oud",
    origin: "Middle East",
    rarity: "Legendary",
    rarityColor: "amber",
    intensity: 95,
    priceRange: "\u00A32,000 - \u00A315,000/kg",
    image: "/ingredients/oud.png",
    history:
      "Oud has been treasured for over 3,000 years across Middle Eastern and Asian cultures. Ancient texts reference its use in royal ceremonies and spiritual rituals. Trade routes were established solely for this precious resin.",
    description:
      "Known as liquid gold, oud is extracted from the resinous heartwood of Aquilaria trees infected by a specific mould. Less than 2% of wild Aquilaria trees produce oud.",
  },
  {
    name: "Saffron",
    origin: "Iran",
    rarity: "Ultra Rare",
    rarityColor: "purple",
    intensity: 78,
    priceRange: "\u00A33,000 - \u00A35,000/kg",
    image: "/ingredients/saffron.png",
    history:
      "Cultivated for over 3,500 years, saffron was used by Cleopatra as a beauty treatment and by Persian royalty to scent their baths. It remains the world's most expensive spice by weight.",
    description:
      "Each saffron crocus flower yields only three delicate stigmas, hand-harvested at dawn. It takes approximately 150,000 flowers to produce a single kilogram.",
  },
  {
    name: "Iso E Super",
    origin: "Laboratory",
    rarity: "Rare",
    rarityColor: "cyan",
    intensity: 62,
    priceRange: "\u00A3200 - \u00A3400/kg",
    image: "/ingredients/iso_e_super.png",
    history:
      "Discovered in 1973 by International Flavors & Fragrances, Iso E Super revolutionized modern perfumery. It became the backbone of countless designer and niche fragrances worldwide.",
    description:
      "A synthetic aromachemical that creates a velvet-smooth, woody-amber aura. It enhances other ingredients while providing a unique pheromone-like effect.",
  },
  {
    name: "Ambergris",
    origin: "Oceanic",
    rarity: "Legendary",
    rarityColor: "amber",
    intensity: 88,
    priceRange: "\u00A320,000 - \u00A350,000/kg",
    image: "/ingredients/ambergris.png",
    history:
      'Known as "floating gold," ambergris has been prized since ancient civilizations. Medieval Europeans believed it came from the tears of sea birds. Its true origin was only confirmed in the 19th century.',
    description:
      "A natural substance produced in the digestive system of sperm whales. Aged ambergris develops a sweet, earthy, marine scent that acts as a supreme fixative.",
  },
];

function getRarityColor(color: string) {
  switch (color) {
    case "amber":
      return { bg: "bg-amber-500/20", text: "text-amber-500" };
    case "purple":
      return { bg: "bg-purple-500/20", text: "text-purple-500" };
    case "cyan":
      return { bg: "bg-cyan-500/20", text: "text-cyan-500" };
    default:
      return { bg: "bg-gray-500/20", text: "text-gray-500" };
  }
}

const scienceBullets = [
  { label: "Top notes evaporate within 15-30 minutes", color: "bg-[#D4AF37]" },
  { label: "Heart notes emerge after 30 minutes to 2 hours", color: "bg-cyan-500" },
  { label: "Base notes can last 6-24 hours on skin", color: "bg-amber-500" },
  { label: "Molecular weight determines volatility and longevity", color: "bg-purple-500" },
];

export default function EducationPage() {
  return (
    <main className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
          Laboratory Knowledge
        </p>
        <h1 className="text-3xl font-bold leading-tight text-white">
          Molecular <br /> Archive
        </h1>
        <p className="text-lg opacity-60 font-light mt-6 max-w-2xl mx-auto text-white">
          Explore the aromatic compounds that form the foundation of fine
          perfumery. From ancient resins traded along the Silk Road to
          cutting-edge synthetic molecules born in modern laboratories, each
          ingredient carries a story measured in centuries.
        </p>
      </motion.div>

      {/* Rarity Legend */}
      <div className="grid md:grid-cols-4 gap-4 mb-16">
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <p className="text-base font-bold text-amber-500 mb-1">Legendary</p>
          <p className="text-xs opacity-60 text-white">Exceptionally rare, museum-grade</p>
        </div>
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <p className="text-base font-bold text-purple-500 mb-1">Ultra Rare</p>
          <p className="text-xs opacity-60 text-white">Limited availability worldwide</p>
        </div>
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <p className="text-base font-bold text-cyan-500 mb-1">Rare</p>
          <p className="text-xs opacity-60 text-white">Scarce but obtainable</p>
        </div>
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <p className="text-base font-bold text-gray-500 mb-1">Common</p>
          <p className="text-xs opacity-60 text-white">Widely available compound</p>
        </div>
      </div>

      {/* Ingredient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {ingredients.map((ingredient, index) => {
          const rarityStyle = getRarityColor(ingredient.rarityColor);
          return (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-12 bg-white/[0.03] border border-white/10 rounded-[3rem] group transition-all hover:border-[#D4AF37]/50 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                  {ingredient.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded-full font-bold ${rarityStyle.bg} ${rarityStyle.text}`}
                  >
                    {ingredient.rarity}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest opacity-40 bg-[#0A0A0A] px-3 py-1 rounded-full border border-white/10 text-white">
                    {ingredient.origin}
                  </span>
                </div>
              </div>

              <p className="text-lg opacity-70 leading-relaxed font-light mb-4 text-white">
                {ingredient.description}
              </p>

              <p className="text-sm opacity-50 leading-relaxed font-light mb-8 text-white">
                {ingredient.history.slice(0, 150)}...
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-[#D4AF37] font-bold">
                    Intensity: {ingredient.intensity}/100
                  </p>
                </div>
                <p className="text-[8px] uppercase tracking-widest opacity-40 font-bold text-white">
                  {ingredient.priceRange}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Science Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-xl font-bold mb-6 text-white">
            The Science of Scent
          </h2>
          <div className="space-y-4">
            {scienceBullets.map((bullet) => (
              <div key={bullet.label} className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${bullet.color}`} />
                <p className="text-sm opacity-60 text-white">{bullet.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-video bg-white/[0.03] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl group">
          <Image
            src="/ingredients/saffron.png"
            alt="The Science of Scent"
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>
    </main>
  );
}
