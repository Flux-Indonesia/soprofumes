"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Heart, Brain, Sparkles, Zap, Award } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist } from "@/context/wishlist-context";
import { useCart } from "@/context/cart-context";

const topSellers = [19, 1, 8];
const ingredients = [
  { name: "Oud", origin: "Southeast Asia", intensity: "Infinite", rarity: "Legendary", description: 'Also known as agarwood, this "liquid gold" is the heart of luxury perfumery, offering deep, balsamic, and woody complexities that evolve over hours.', image: "/ingredients/oud.png" },
  { name: "Saffron", origin: "Middle East", intensity: "High", rarity: "Ultra Rare", description: "The world's most expensive spice provides a bittersweet, leathery, and earthy profile with a soft honeyed undertone that adds luxury to any composition.", image: "/ingredients/saffron.png" },
  { name: "Iso E Super", origin: "Laboratory", intensity: "Variable", rarity: "Rare", description: "A synthetic molecule used to add velvety texture, radiance, and a subtle cedarwood-like scent that adapts to individual skin chemistry, creating a unique olfactory signature.", image: "/ingredients/iso_e_super.png" },
  { name: "Ambergris", origin: "Oceanic", intensity: "Long-lasting", rarity: "Legendary", description: "A rare substance that gives perfumes a salt-spray, tobacco, and oceanic animalic warmth, creating an irreplaceable marine-animal complexity.", image: "/ingredients/ambergris.png" },
];
const reviews = [
  { userName: "Amara K.", level: "Verified Collector", rating: 5, comment: "Reef 33 is unlike anything I've experienced. The oud unfolds over hours, revealing new facets of complexity. This is molecular artistry at its finest.", date: "March 2024" },
  { userName: "Sebastian L.", level: "Neural Pioneer", rating: 5, comment: "The neural mapping suggested Osma Noir and it was a perfect match. The saffron-oud combination feels like it was designed specifically for my chemistry.", date: "February 2024" },
  { userName: "Yuki T.", level: "Essence Architect", rating: 4, comment: "Helen Legacy has become my signature. The sage-amber interplay is sophisticated without being overwhelming. Truly a masterpiece of modern perfumery.", date: "January 2024" },
];
const shopCategories = [
  { name: "Oud", slug: "Oud" },
  { name: "Oriental", slug: "Oriental" },
  { name: "Woody", slug: "Woody" },
  { name: "Floral", slug: "Floral" },
];

export default function HomePage() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollProgress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));
      const frame = Math.floor(scrollProgress * 50) + 1;
      setCurrentFrame(Math.min(51, Math.max(1, frame)));
      setOverlayOpacity(Math.max(0.7, 1 - scrollProgress * 0.3));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topProducts = topSellers.map((id) => products.find((p) => p.id === id)!).filter(Boolean);

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero */}
      <div ref={heroRef} className="relative" style={{ height: "500vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={`/ezgif-14cd968e970b1b3b-jpg/ezgif-frame-${String(currentFrame).padStart(3, "0")}.jpg`}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.25) 0%, rgba(20,20,40,0.27) 50%, rgba(0,0,0,0.3) 100%)", opacity: overlayOpacity }} />
          </div>
          <div className="relative z-20 text-center px-6 max-w-6xl mx-auto w-full h-full flex flex-col items-center justify-end pb-24 pt-32">
            <div className="mb-16">
              <p className="text-[10px] sm:text-[12px] uppercase tracking-[0.8em] text-[#D4AF37] font-bold hero-text-shadow">
                Scent Artistry
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/shop"
                className="px-14 py-5 bg-[#D4AF37] text-black font-bold hover:scale-105 transition-all tracking-[0.3em] uppercase text-[10px] shadow-2xl"
              >
                Acquire Now
              </Link>
              <Link
                href="/analyzer"
                className="px-14 py-5 border border-[#D4AF37] bg-transparent backdrop-blur-3xl hover:bg-[#D4AF37]/10 transition-all tracking-[0.3em] uppercase text-[10px] flex items-center gap-3 text-[#D4AF37] font-bold"
              >
                Discover Your Scent
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </Link>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
              <div className="flex flex-col items-center gap-4">
                <span className="text-[9px] tracking-[0.5em] uppercase opacity-70 font-bold hero-text-shadow text-white">Initiate Sequence</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Identity & Resonance */}
      <section className="py-10 px-4 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl max-w-sm">
            <video
              src="/Traditionalseciton.mp4"
              className="w-full h-full object-cover scale-75 group-hover:scale-90 transition-all duration-[2s]"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400/5 blur-[60px] rounded-full pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-[8px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold">
            Identity & Resonance
          </h2>
          <h3 className="text-xl font-bold leading-tight">
            Beyond <br /> Traditional <br /> Extraction
          </h3>
          <p className="text-sm opacity-70 font-light leading-relaxed max-w-xl">
            SoProFumes is a sensory lab based at the intersection of heritage artistry and predictive intelligence. We don&apos;t just sell perfumes; we map the molecular architecture of your identity.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-3">
            <div>
              <h4 className="text-lg font-bold mb-1">88%</h4>
              <p className="text-[7px] opacity-40 uppercase tracking-widest">Recall resonance match</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">2024</h4>
              <p className="text-[7px] opacity-40 uppercase tracking-widest">Neural launch date</p>
            </div>
          </div>
          <Link
            href="/about"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] font-bold text-[#D4AF37] hover:gap-4 transition-all border-b border-[#D4AF37]/20 pb-2"
          >
            Read The Manifesto <ArrowUpRight size={12} />
          </Link>
        </motion.div>
      </section>

      {/* Top 3 Sellers */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold mb-3">
            A curated <br /> <span className="font-normal">selection</span>
          </h2>
          <p className="opacity-40 uppercase text-[8px] tracking-[0.6em]">
            Our Top 3 Sellers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="group cursor-pointer bg-white/[0.03] p-4 rounded-3xl hover:bg-white/5 transition-all duration-700 border border-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-2">
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <button
                        onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
                        className={`p-3 backdrop-blur-md rounded-full transition-all ${isInWishlist(product.id) ? "bg-[#D4AF37] text-black" : "bg-white/20 hover:bg-[#D4AF37] hover:text-black text-white"}`}
                      >
                        <Heart size={16} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="px-2 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-serif font-medium group-hover:text-[#D4AF37] transition-colors leading-tight text-white">{product.name}</h3>
                      <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] mt-1 text-white">{product.category}</p>
                    </div>
                    <p className="text-xl font-serif font-light text-white">£{product.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-2">
                      {product.moods.slice(0, 2).map((mood) => (
                        <span key={mood} className="text-[9px] px-3 py-1 border border-white/10 rounded-full opacity-60 font-medium uppercase tracking-tighter text-white">{mood}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-10 h-10 flex items-center justify-center bg-white/[0.02] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all border border-white/10 hover:scale-110 text-white"
                    >
                      <ShoppingBag size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase text-[8px] tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-black transition-all inline-block"
          >
            View Full Collection
          </Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
            Molecular Collections
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Shop by <br /> Category
          </h3>
          <p className="opacity-60 font-light text-base max-w-3xl mx-auto mb-6">
            Explore our curated collections, each crafted for distinct olfactory experiences and molecular profiles.
          </p>
          <Link
            href="/shop"
            className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-black transition-all inline-block"
          >
            View All Collections
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shopCategories.map((cat, i) => {
            const catProducts = products.filter((p) => p.category === cat.slug);
            const firstProduct = catProducts[0];
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/shop?category=${cat.slug}`} className="group block">
                  <div className="cursor-pointer bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-700 hover:-translate-y-2">
                    <div className="p-8 pb-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                          <div className="w-3 h-3 rounded-full bg-[#D4AF37]/50" />
                          <div className="w-3 h-3 rounded-full bg-[#D4AF37]/20" />
                        </div>
                        <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold">
                          {catProducts.length} Products
                        </span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 mb-4">
                        <h4 className="text-xl font-bold text-[#D4AF37] mb-1">{cat.name}</h4>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <div className="aspect-[4/3] bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                        {firstProduct && (
                          <img src={firstProduct.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          {firstProduct && (
                            <>
                              <h5 className="text-lg font-bold text-white mb-2">{firstProduct.name}</h5>
                              <p className="text-sm text-white/80 mb-4">{firstProduct.description.slice(0, 60)}...</p>
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-[#D4AF37]">£{firstProduct.price}</span>
                                <div className="flex gap-2">
                                  {catProducts.slice(1, 3).map((cp) => (
                                    <div key={cp.id} className="w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden">
                                      <img src={cp.image} alt={cp.name} className="w-full h-full object-cover" />
                                    </div>
                                  ))}
                                  {catProducts.length > 3 && (
                                    <div className="w-8 h-8 rounded-full border-2 border-white/30 bg-white/20 flex items-center justify-center">
                                      <span className="text-xs text-white font-bold">+{catProducts.length - 3}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {firstProduct?.moods.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[8px] px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full font-bold uppercase tracking-widest">{tag}</span>
                          ))}
                        </div>
                        <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Neural Discovery */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] mb-6 font-bold">
              <Brain size={12} fill="currentColor" /> Neural Discovery
            </div>
            <h3 className="text-2xl font-bold leading-tight mb-5">
              Decode Your <br /> Olfactory DNA
            </h3>
            <p className="text-base opacity-70 font-light leading-relaxed mb-6">
              Our proprietary neural mapping technology analyzes over 200 psychological and physiological markers to identify your unique scent signature. Unlike traditional fragrance quizzes, we decode the molecular architecture of your identity.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles size={12} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Biometric Analysis</h4>
                  <p className="text-sm opacity-60">Skin chemistry, pH levels, and natural pheromone mapping</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap size={12} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Psychological Profiling</h4>
                  <p className="text-sm opacity-60">Memory triggers, emotional responses, and lifestyle patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award size={12} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">Molecular Matching</h4>
                  <p className="text-sm opacity-60">AI-powered compatibility with our 150+ aromatic compounds</p>
                </div>
              </div>
            </div>
            <Link
              href="/analyzer"
              className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-full shadow-2xl hover:brightness-110 transition-all inline-block"
            >
              Begin Neural Mapping
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-cyan-400/5 to-amber-500/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center animate-pulse">
                    <Brain size={20} className="text-black" />
                  </div>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="absolute w-6 h-6 bg-cyan-400/20 border border-cyan-400/40 rounded-full flex items-center justify-center"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-60px) rotate(-${i * 60}deg)`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    </div>
                  ))}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <line
                        key={i}
                        x1="96"
                        y1="96"
                        x2={96 + Math.cos((i * 60 * Math.PI) / 180) * 60}
                        y2={96 + Math.sin((i * 60 * Math.PI) / 180) * 60}
                        stroke="#D4AF37"
                        strokeWidth="1"
                        opacity="0.3"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/[0.02] border border-white/10 rounded-xl p-3">
                <div className="text-[7px] uppercase tracking-widest opacity-40 mb-1">Neural Activity</div>
                <div className="text-lg font-bold text-[#D4AF37]">94.7%</div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/[0.02] border border-white/10 rounded-xl p-3">
                <div className="text-[7px] uppercase tracking-widest opacity-40 mb-1">Compatibility</div>
                <div className="text-lg font-bold text-cyan-400">87.3%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Molecular Architecture */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
            Molecular Architecture
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Rare Ingredients <br /> From Around The World
          </h3>
          <p className="opacity-60 font-light text-base max-w-3xl mx-auto">
            Each fragrance is crafted from the world&apos;s most precious raw materials, sourced directly from their origins and processed through our neural extraction methods.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((ing) => (
            <Link key={ing.name} href="/education" className="group p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-[#D4AF37]/30 transition-all cursor-pointer block">
              <div className="aspect-square bg-white/[0.02] rounded-[1.5rem] mb-4 overflow-hidden relative">
                <img src={ing.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={ing.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[7px] uppercase tracking-widest bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full font-bold">{ing.origin}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`text-[6px] uppercase tracking-widest px-2 py-1 rounded-full font-bold ${ing.rarity === "Legendary" ? "bg-amber-500/20 text-amber-500" : ing.rarity === "Ultra Rare" ? "bg-purple-500/20 text-purple-500" : ing.rarity === "Rare" ? "bg-cyan-500/20 text-cyan-500" : "bg-gray-500/20 text-gray-500"}`}>{ing.rarity}</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-[#D4AF37] mb-2">{ing.name}</h4>
              <p className="text-sm opacity-70 leading-relaxed mb-3">{ing.description.slice(0, 80)}...</p>
              <div className="flex items-center justify-between">
                <span className="text-[7px] uppercase tracking-widest text-[#D4AF37] font-bold">Intensity: {ing.intensity}</span>
                <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/education"
            className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-black transition-all inline-block"
          >
            Explore All Ingredients
          </Link>
        </div>
      </section>

      {/* Exclusive Neural Drops */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
              Limited Access
            </h2>
            <h3 className="text-2xl font-bold leading-tight mb-6">
              Exclusive <br /> Neural Drops
            </h3>
            <p className="text-lg opacity-70 font-light leading-relaxed mb-8">
              Limited-edition fragrances created in micro-batches of exactly 100 units. Each drop explores cutting-edge olfactory territories, available only to verified collectors.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <span className="text-sm font-light">Micro-batch production (100 units max)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-sm font-light">24-hour priority access for members</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-sm font-light">Experimental molecular compositions</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/drops" className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-full hover:brightness-110 transition-all inline-block text-center">
                View Current Drops
              </Link>
              <button className="px-8 py-4 border border-white/10 hover:bg-white/5 uppercase text-[9px] tracking-widest font-bold rounded-full transition-all">
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {products.filter((p) => p.isDrop).concat(products.slice(0, 3)).slice(0, 4).map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="group cursor-pointer block">
                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 mb-4 relative">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                  {p.isDrop && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[7px] uppercase tracking-widest bg-[#D4AF37] text-black px-2 py-1 rounded-full font-bold">Limited Drop</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-sm font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">{p.name}</h4>
                <p className="text-xs opacity-40 uppercase tracking-widest">£{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Collective - Neural Consensus */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
            The Collective
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            Neural <br /> Consensus
          </h3>
          <p className="opacity-60 font-light text-lg max-w-3xl mx-auto">
            Authentic experiences from our verified collector community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all group">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-sm group-hover:bg-[#D4AF37]/20 transition-all">
                    {r.userName[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs tracking-widest uppercase">{r.userName}</h5>
                    <p className="text-[8px] opacity-40 uppercase tracking-widest">{r.level}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={j < r.rating ? "opacity-100" : "opacity-20"}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-base font-medium opacity-90 leading-relaxed mb-5 group-hover:opacity-100 transition-all">
                &ldquo;{r.comment}&rdquo;
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[8px] opacity-40 uppercase tracking-widest">{r.date}</span>
                <span className="text-[7px] px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full font-bold uppercase tracking-widest">Verified</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/community"
            className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-black transition-all inline-block"
          >
            View All Reviews
          </Link>
        </div>
      </section>

      {/* Connect - Lab Inquiries */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
              Connect
            </h2>
            <h3 className="text-2xl font-bold leading-tight mb-4">
              Lab <br /> Inquiries
            </h3>
            <p className="text-base opacity-70 font-light leading-relaxed mb-6">
              Have questions about our neural extraction process? Need a personalized consultation? Our olfactory specialists are here to guide your fragrance journey.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-bold text-[#D4AF37] mb-1">24h</h4>
                <p className="text-[9px] uppercase tracking-widest opacity-40">Response Time</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#D4AF37] mb-1">98%</h4>
                <p className="text-[9px] uppercase tracking-widest opacity-40">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] shadow-2xl">
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold">Subject Identity</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#D4AF37] transition-all font-light text-sm" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold">Digital Coordinate</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#D4AF37] transition-all font-light text-sm" placeholder="Email Address" />
              </div>
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold">Inquiry Type</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#D4AF37] transition-all font-light appearance-none cursor-pointer text-sm">
                    <option value="" className="bg-[#0A0A0A]">Select inquiry type</option>
                    <option value="consultation" className="bg-[#0A0A0A]">Personal Consultation</option>
                    <option value="product" className="bg-[#0A0A0A]">Product Information</option>
                    <option value="collaboration" className="bg-[#0A0A0A]">Collaboration</option>
                    <option value="support" className="bg-[#0A0A0A]">Technical Support</option>
                    <option value="other" className="bg-[#0A0A0A]">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 12 8" fill="none" className="opacity-40">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold">Inquiry Message</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#D4AF37] transition-all font-light resize-none text-sm" placeholder="Elaborate on your inquiry..." />
              </div>
              <button type="submit" className="w-full py-3 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-[0.4em] hover:brightness-110 transition-all shadow-xl rounded-xl">
                Transmit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
