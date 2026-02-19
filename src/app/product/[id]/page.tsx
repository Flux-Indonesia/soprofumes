"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShoppingCart,
  Plus,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <main className="pt-32 pb-24 px-6 bg-[#0A0A0A] min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-5xl text-white mb-4">404</h1>
          <p className="text-white/40 text-lg mb-8">
            This fragrance could not be found.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors"
          >
            Back to Collection
          </Link>
        </div>
      </main>
    );
  }

  const wishlisted = isInWishlist(product.id);
  const sillagePercent = product.sillage;
  const longevityPercent = product.longevity;

  const radarData = [
    { subject: "Sweet", A: product.scentProfile.radar.sweet, fullMark: 100 },
    { subject: "Woody", A: product.scentProfile.radar.woody, fullMark: 100 },
    { subject: "Floral", A: product.scentProfile.radar.floral, fullMark: 100 },
    { subject: "Spicy", A: product.scentProfile.radar.spicy, fullMark: 100 },
    { subject: "Fresh", A: product.scentProfile.radar.fresh, fullMark: 100 },
  ];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pt-32 pb-24 px-4 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-6xl mx-auto animate-fade-in">
        {/* Back to Collection */}
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors mb-8"
        >
          <div className="p-2 border border-white/10 rounded-full group-hover:border-[#D4AF37] transition-colors">
            <ArrowRight size={16} className="rotate-180" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Back to Collection
          </span>
        </button>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* Left - Image */}
          <div className="lg:col-span-7 h-[60vh] sticky top-32 overflow-hidden rounded-[3rem] border border-white/10 bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-[3s] hover:scale-105"
            />
          </div>

          {/* Right - Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Category / Name / Price */}
            <div className="mb-8">
              <p className="text-[#D4AF37] tracking-[0.6em] uppercase text-[9px] mb-4 font-bold">
                {product.category}
              </p>
              <h1 className="text-2xl font-bold mb-4 leading-none">
                {product.name}
              </h1>
              <p className="text-lg font-medium text-[#D4AF37]">
                £{product.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-base opacity-80 leading-relaxed font-light mb-8 border-l-2 border-[#D4AF37]/20 pl-6">
              &ldquo;{product.description}&rdquo;
            </p>

            {/* Longevity & Sillage + Scent Pyramid + Radar */}
            <div className="space-y-8 mb-12">
              {/* Longevity & Sillage */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold mb-3 block">
                    Longevity
                  </label>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D4AF37] transition-all duration-1000"
                      style={{ width: `${longevityPercent}%` }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold mb-3 block">
                    Sillage
                  </label>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D4AF37] transition-all duration-1000"
                      style={{ width: `${sillagePercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Neural Scent Pyramid */}
              <div>
                <label className="text-[8px] uppercase tracking-widest opacity-40 font-bold mb-4 block text-center">
                  Neural Scent Pyramid
                </label>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white/[0.03] rounded-xl border border-white/10">
                    <span className="text-[8px] uppercase tracking-widest block mb-1 opacity-50">
                      Top
                    </span>
                    <span className="text-sm font-medium">
                      {product.scentProfile.top[0]}
                    </span>
                  </div>
                  <div className="p-3 bg-white/[0.03] rounded-xl border border-white/10">
                    <span className="text-[8px] uppercase tracking-widest block mb-1 opacity-50">
                      Heart
                    </span>
                    <span className="text-sm font-medium">
                      {product.scentProfile.heart[0]}
                    </span>
                  </div>
                  <div className="p-3 bg-white/[0.03] rounded-xl border border-white/10">
                    <span className="text-[8px] uppercase tracking-widest block mb-1 opacity-50">
                      Base
                    </span>
                    <span className="text-sm font-medium">
                      {product.scentProfile.base[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Radar Chart */}
              <div className="h-48 bg-white/[0.03] rounded-[2.5rem] border border-white/10 p-6 shadow-inner overflow-hidden flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={radarData}
                  >
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{
                        fill: "rgba(255,255,255,1)",
                        fontSize: 9,
                        opacity: 0.5,
                      }}
                    />
                    <Radar
                      name={product.name}
                      dataKey="A"
                      stroke="#D4AF37"
                      fill="#D4AF37"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => addToCart(product.id)}
                className="flex-1 py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-[0.4em] shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 rounded-xl"
              >
                <ShoppingCart size={14} strokeWidth={2} /> Add to Acquisitions
              </button>
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="flex-1 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold uppercase text-[9px] tracking-[0.4em] hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-2 rounded-xl"
              >
                Buy Now
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-4 border rounded-[1.5rem] transition-all ${
                  wishlisted
                    ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                    : "border-white/10 hover:bg-white/10"
                }`}
              >
                <Heart
                  size={20}
                  fill={wishlisted ? "currentColor" : "none"}
                />
              </button>
            </div>
          </div>
        </div>

        {/* The Molecular Story */}
        <section className="py-24 border-t border-white/10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-8 leading-tight">
              The Molecular <br /> Story
            </h2>
            <p className="text-base opacity-70 font-light leading-relaxed mb-8">
              Each batch is distilled through our proprietary Neural Extraction
              Lab, where traditional techniques meet generative chemical
              modeling. This fragrance is not just a scent—it&apos;s a
              high-fidelity emotional simulation designed to trigger precise
              nostalgic synapses.
            </p>
            <div className="flex flex-wrap gap-3">
              {product.moods.map((mood) => (
                <span
                  key={mood}
                  className="px-4 py-1 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-[9px] uppercase tracking-widest font-bold text-cyan-500"
                >
                  {mood} Resonance
                </span>
              ))}
            </div>
          </div>
          <div className="aspect-video bg-white/[0.03] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-24 border-t border-white/10">
            <div className="text-center mb-16">
              <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-3">
                You May Also Like
              </p>
              <h2 className="font-serif text-3xl text-white">
                Related <span className="text-[#D4AF37]">Molecules</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((related) => {
                const relatedWishlisted = isInWishlist(related.id);

                return (
                  <Link key={related.id} href={`/product/${related.id}`}>
                    <div className="group cursor-pointer bg-white/[0.03] p-4 rounded-3xl hover:bg-white/5 transition-all duration-700 border border-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-white">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Wishlist */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleWishlist(related.id);
                            }}
                            className={`p-3 backdrop-blur-md rounded-full transition-all ${
                              relatedWishlisted
                                ? "bg-[#D4AF37] text-black"
                                : "bg-black/20 hover:bg-[#D4AF37] hover:text-black text-black/60"
                            }`}
                          >
                            <Heart
                              size={16}
                              fill={
                                relatedWishlisted ? "currentColor" : "none"
                              }
                            />
                          </button>
                        </div>

                        {/* Drop Badge */}
                        {related.isDrop && (
                          <div className="absolute top-4 left-4 bg-[#D4AF37] text-black text-[9px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full shadow-lg">
                            Limited Drop
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="px-2 mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-serif font-medium group-hover:text-[#D4AF37] transition-colors leading-tight">
                              {related.name}
                            </h3>
                            <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] mt-1">
                              {related.category}
                            </p>
                          </div>
                          <p className="text-xl font-serif font-light">
                            £{related.price}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <div className="flex gap-2">
                            {related.moods.slice(0, 2).map((mood) => (
                              <span
                                key={mood}
                                className="text-[9px] px-3 py-1 border border-white/10 rounded-full opacity-60 font-medium uppercase tracking-tighter"
                              >
                                {mood}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addToCart(related.id);
                            }}
                            className="w-10 h-10 flex items-center justify-center bg-white/[0.02] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all border border-white/10 hover:scale-110"
                          >
                            <Plus size={18} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
