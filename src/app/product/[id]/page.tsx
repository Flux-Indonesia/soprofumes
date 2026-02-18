"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Sparkles,
  Wind,
  Flower2,
  Flame,
  Droplets,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl text-white mb-4">404</h1>
          <p className="text-white/40 text-lg mb-8">
            This fragrance could not be found.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Collection
          </Link>
        </motion.div>
      </main>
    );
  }

  const wishlisted = isInWishlist(product.id);

  const radarData = [
    { subject: "Sweet", value: product.scentProfile.radar.sweet },
    { subject: "Woody", value: product.scentProfile.radar.woody },
    { subject: "Floral", value: product.scentProfile.radar.floral },
    { subject: "Spicy", value: product.scentProfile.radar.spicy },
    { subject: "Fresh", value: product.scentProfile.radar.fresh },
  ];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const noteIcons: Record<string, React.ReactNode> = {
    Top: <Wind size={14} className="text-[#D4AF37]" />,
    Heart: <Flower2 size={14} className="text-[#D4AF37]" />,
    Base: <Flame size={14} className="text-[#D4AF37]" />,
  };

  return (
    <main className="pt-32 pb-24 px-6 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Collection
          </Link>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/[0.06]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Category Tag */}
            <div>
              <span className="px-4 py-1.5 rounded-full text-xs bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 uppercase tracking-[0.2em] w-fit">
                {product.category}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-[#D4AF37] text-2xl">
              ${product.price}
            </p>

            {/* Description */}
            <blockquote className="border-l-2 border-[#D4AF37]/30 pl-6 italic text-white/60 leading-relaxed">
              {product.description}
            </blockquote>

            {/* Scent Profile Notes */}
            <div>
              <h3 className="font-serif text-lg text-white mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-[#D4AF37]" />
                Scent Profile
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {(["Top", "Heart", "Base"] as const).map((noteType) => {
                  const notes =
                    noteType === "Top"
                      ? product.scentProfile.top
                      : noteType === "Heart"
                        ? product.scentProfile.heart
                        : product.scentProfile.base;

                  return (
                    <div
                      key={noteType}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <div className="mt-0.5">{noteIcons[noteType]}</div>
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-1">
                          {noteType} Notes
                        </p>
                        <p className="text-white/70 text-sm">
                          {notes.join(" · ")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Radar Chart */}
            <div>
              <h3 className="font-serif text-lg text-white mb-4 flex items-center gap-2">
                <Droplets size={16} className="text-[#D4AF37]" />
                Fragrance DNA
              </h3>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <ResponsiveContainer width="100%" height={280}>
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="75%"
                    data={radarData}
                  >
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{
                        fill: "rgba(255,255,255,0.5)",
                        fontSize: 12,
                      }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 10]}
                      tick={false}
                      axisLine={false}
                    />
                    <Radar
                      name="Scent"
                      dataKey="value"
                      stroke="#D4AF37"
                      fill="#D4AF37"
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  onClick={() => addToCart(product.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 text-sm"
                >
                  <ShoppingBag size={16} />
                  Add to Acquisitions
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    wishlisted
                      ? "bg-[#D4AF37]/20 border-[#D4AF37]/40 text-[#D4AF37]"
                      : "border-white/10 text-white/40 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={wishlisted ? "#D4AF37" : "none"}
                  />
                </button>
              </div>
              <button
                onClick={() => addToCart(product.id)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black text-sm font-medium hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
              >
                Buy Now
              </button>
            </div>

            {/* Mood Tags */}
            <div className="flex flex-wrap gap-2">
              {product.moods.map((mood) => (
                <span
                  key={mood}
                  className="px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] bg-white/[0.03] text-white/50 border border-white/[0.08]"
                >
                  {mood}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-3">
                You May Also Like
              </p>
              <h2 className="font-serif text-3xl text-white">
                Related <span className="text-[#D4AF37]">Molecules</span>
              </h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((related, index) => {
                const relatedWishlisted = isInWishlist(related.id);

                return (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Link href={`/product/${related.id}`}>
                      <div className="group cursor-pointer bg-white/[0.03] p-4 rounded-3xl hover:bg-white/5 transition-all duration-700 border border-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-2">
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                          <Image
                            src={related.image}
                            alt={related.name}
                            fill
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          {/* Wishlist Button */}
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
                                  : "bg-white/20 hover:bg-[#D4AF37] hover:text-black text-white"
                              }`}
                            >
                              <Heart size={16} fill={relatedWishlisted ? "currentColor" : "none"} />
                            </button>
                          </div>

                          {/* Limited Drop Badge */}
                          {related.isDrop && (
                            <div className="absolute top-4 left-4 bg-[#D4AF37] text-black text-[9px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full shadow-lg">
                              Limited Drop
                            </div>
                          )}
                        </div>

                        {/* Content Area */}
                        <div className="px-2 mb-4">
                          {/* Name + Price Row */}
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-serif font-medium group-hover:text-[#D4AF37] transition-colors leading-tight text-white">
                                {related.name}
                              </h3>
                              <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] mt-1 text-white">
                                {related.category}
                              </p>
                            </div>
                            <p className="text-xl font-serif font-light text-white">
                              ${related.price}
                            </p>
                          </div>

                          {/* Mood + Cart Row */}
                          <div className="flex items-center justify-between mt-6">
                            <span className="text-[9px] px-3 py-1 border border-white/10 rounded-full opacity-60 font-medium uppercase tracking-tighter text-white">
                              {related.moods[0]}
                            </span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addToCart(related.id);
                              }}
                              className="w-10 h-10 flex items-center justify-center bg-white/[0.02] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all border border-white/10 hover:scale-110 text-white"
                            >
                              <ShoppingBag size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
