"use client";

const ingredients = [
  {
    name: "Oud",
    origin: "Southeast Asia",
    intensity: "Infinite",
    rarity: "Legendary",
    price: "£2,000-15,000 per kg",
    description:
      'Also known as agarwood, this "liquid gold" is the heart of luxury perfumery, offering deep, balsamic, and animalic notes with unparalleled depth and complexity.',
    history:
      "Oud has been treasured for over 3,000 years, mentioned in ancient Sanskrit texts and prized by royal courts. Trade routes were established solely for this precious resin.",
  },
  {
    name: "Saffron",
    origin: "Middle East",
    intensity: "High",
    rarity: "Ultra Rare",
    price: "£3,000-5,000 per kg",
    description:
      "The world's most expensive spice provides a bittersweet, leathery, and earthy profile with a soft honey-like warmth that elevates any composition.",
    history:
      "Cultivated for over 3,500 years, saffron was worth more than gold in ancient times. Each flower produces only three delicate stigmas, hand-harvested at dawn.",
  },
  {
    name: "Iso E Super",
    origin: "Laboratory",
    intensity: "Variable",
    rarity: "Rare",
    price: "£200-400 per kg",
    description:
      "A synthetic molecule used to add velvety texture, radiance, and a subtle cedarwood-like scent that adapts uniquely to each wearer's skin chemistry.",
    history:
      'Discovered in 1973 by IFF, Iso E Super revolutionized modern perfumery. This "wonder molecule" creates an intimate scent bubble around the wearer.',
  },
  {
    name: "Ambergris",
    origin: "Oceanic",
    intensity: "Long-lasting",
    rarity: "Legendary",
    price: "£20,000-50,000 per kg",
    description:
      "A rare substance that gives perfumes a salt-spray, tobacco, and oceanic animalic warmth, creating an irreplaceable marine-animal complexity.",
    history:
      'Once more valuable than gold, ambergris is formed in the digestive system of sperm whales. This "floating gold" has been used in perfumery for centuries.',
  },
];

function getRarityClass(rarity: string) {
  switch (rarity) {
    case "Legendary":
      return "bg-amber-500/20 text-amber-500";
    case "Ultra Rare":
      return "bg-purple-500/20 text-purple-500";
    case "Rare":
      return "bg-cyan-500/20 text-cyan-500";
    default:
      return "bg-gray-500/20 text-gray-500";
  }
}

export default function EducationPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
          Laboratory Knowledge
        </h2>
        <h1 className="text-3xl font-bold leading-tight">
          Molecular <br /> Archive
        </h1>
        <p className="text-lg opacity-60 font-light mt-6 max-w-2xl mx-auto">
          Explore the world&apos;s most precious aromatic compounds, from
          ancient oud forests to cutting-edge synthetic molecules. Each
          ingredient tells a story of rarity, craftsmanship, and olfactory
          artistry.
        </p>
      </div>

      {/* Rarity Legend */}
      <div className="grid md:grid-cols-4 gap-4 mb-16">
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <h3 className="text-base font-bold text-amber-500 mb-1">
            Legendary
          </h3>
          <p className="text-xs opacity-60">Ultra-rare, priceless ingredients</p>
        </div>
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <h3 className="text-base font-bold text-purple-500 mb-1">
            Ultra Rare
          </h3>
          <p className="text-xs opacity-60">Exceptional quality materials</p>
        </div>
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <h3 className="text-base font-bold text-cyan-500 mb-1">Rare</h3>
          <p className="text-xs opacity-60">Premium sourced compounds</p>
        </div>
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-center">
          <h3 className="text-base font-bold text-gray-500 mb-1">Common</h3>
          <p className="text-xs opacity-60">High-quality base materials</p>
        </div>
      </div>

      {/* Ingredient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            className="p-12 bg-white/[0.03] border border-white/10 rounded-[3rem] group transition-all hover:border-[#D4AF37]/50 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                  {ing.name}
                </h3>
                <span
                  className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded-full font-bold ${getRarityClass(ing.rarity)}`}
                >
                  {ing.rarity}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-widest opacity-40 bg-[#0A0A0A] px-3 py-1 rounded-full border border-white/10">
                {ing.origin}
              </span>
            </div>

            <p className="text-lg opacity-70 leading-relaxed font-light mb-4">
              {ing.description}
            </p>

            <p className="text-sm opacity-50 leading-relaxed font-light mb-8">
              {ing.history.slice(0, 150)}...
            </p>

            <div className="flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-widest text-[#D4AF37] font-bold">
                Intensity: {ing.intensity}
              </span>
              <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold">
                {ing.price}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* The Science of Scent */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-xl font-bold mb-6">The Science of Scent</h2>
          <p className="text-base opacity-70 leading-relaxed mb-6">
            Our neural extraction laboratory combines traditional perfumery
            techniques with cutting-edge molecular analysis. Each ingredient
            undergoes rigorous testing to ensure purity, potency, and olfactory
            excellence.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              <span className="text-sm">Molecular composition analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <span className="text-sm">Purity verification (99.9%+)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-sm">Olfactory profile mapping</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span className="text-sm">Longevity and sillage testing</span>
            </div>
          </div>
        </div>

        <div className="aspect-video bg-white/[0.03] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl group">
          <img
            src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            alt="Laboratory"
          />
        </div>
      </div>
    </div>
  );
}
