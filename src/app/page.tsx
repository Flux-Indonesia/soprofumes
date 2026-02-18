"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Heart } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist } from "@/context/wishlist-context";
import { useCart } from "@/context/cart-context";

const topSellers = [19, 1, 8];
const shopCategories = [
  { name: "Oud", slug: "Oud" },
  { name: "Oriental", slug: "Oriental" },
  { name: "Woody", slug: "Woody" },
  { name: "Floral", slug: "Floral" },
];

export default function HomePage() {
  const [currentFrame, setCurrentFrame] = useState(1);
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="relative z-20 h-full flex flex-col items-center justify-end text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mb-6"
            >
              <span className="text-[#D4AF37] text-[10px] sm:text-[12px] uppercase tracking-[0.8em] mb-16 block font-bold hero-text-shadow">
                Scent Artistry
              </span>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/shop"
                  className="bg-[#D4AF37] text-black px-14 py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D4AF37]/90 transition-all"
                >
                  Acquire Now
                </Link>
                <Link
                  href="/analyzer"
                  className="border border-[#D4AF37] bg-transparent backdrop-blur-3xl text-white px-14 py-5 text-xs uppercase tracking-[0.2em] hover:border-[#00F5FF] hover:text-[#00F5FF] transition-all flex items-center justify-center gap-2"
                >
                  Discover Your Scent
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </Link>
              </div>
            </motion.div>
            <div className="flex flex-col items-center gap-3 mb-8">
              <span className="text-white/30 text-[9px] uppercase tracking-[0.5em]">Initiate Sequence</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
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
          <h3 className="text-xl font-bold leading-tight text-white">
            Beyond <br /> Traditional <br /> Extraction
          </h3>
          <p className="text-sm opacity-70 font-light leading-relaxed max-w-xl text-white">
            SoProFumes is a sensory lab based at the intersection of heritage artistry and predictive intelligence. We don&apos;t just sell perfumes; we map the molecular architecture of your identity.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-3">
            <div>
              <h4 className="text-lg font-bold mb-1 text-white">88%</h4>
              <p className="text-[7px] opacity-40 uppercase tracking-widest text-white">Recall resonance match</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-white">2024</h4>
              <p className="text-[7px] opacity-40 uppercase tracking-widest text-white">Neural launch date</p>
            </div>
          </div>
          <Link
            href="/about"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] font-bold text-[#D4AF37] hover:gap-4 transition-all border-b border-[#D4AF37]/20 pb-2 w-fit"
          >
            Read The Manifesto <ArrowUpRight size={12} />
          </Link>
        </motion.div>
      </section>

      {/* Top 3 Sellers */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold mb-3 text-white">
            A curated <br /> <span className="font-normal">selection</span>
          </h2>
          <p className="opacity-40 uppercase text-[8px] tracking-[0.6em] text-white">
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
          <h3 className="text-2xl font-bold mb-4 text-white">
            Shop by <br /> Category
          </h3>
          <p className="opacity-60 font-light text-base max-w-3xl mx-auto mb-6 text-white">
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
                        <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold text-white">
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
    </div>
  );
}
