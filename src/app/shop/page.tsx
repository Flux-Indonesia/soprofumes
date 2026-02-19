"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="pt-32 pb-24 px-6 bg-[#0A0A0A] min-h-screen">
      {/* Header Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-3">
            The Archive
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Molecular<br />Collections
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-black"
                  : "border border-white/10 text-white/60 hover:border-[#D4AF37]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => {
          const wishlisted = isInWishlist(product.id);

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={`/product/${product.id}`}>
                <div className="group cursor-pointer bg-white/[0.03] p-4 rounded-3xl hover:bg-white/5 transition-all duration-700 border border-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Wishlist Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className={`p-3 backdrop-blur-md rounded-full transition-all ${
                          wishlisted
                            ? "bg-[#D4AF37] text-black"
                            : "bg-black/20 hover:bg-[#D4AF37] hover:text-black text-black/60"
                        }`}
                      >
                        <Heart size={16} fill={wishlisted ? "currentColor" : "none"} />
                      </button>
                    </div>

                    {/* Limited Drop Badge */}
                    {product.isDrop && (
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
                        <h3 className="text-xl font-serif font-medium group-hover:text-[#D4AF37] transition-colors leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] mt-1">
                          {product.category}
                        </p>
                      </div>
                      <p className="text-xl font-serif font-light">
                        £{product.price}
                      </p>
                    </div>

                    {/* Mood + Cart Row */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex gap-2">
                        {product.moods.slice(0, 2).map((mood) => (
                          <span key={mood} className="text-[9px] px-3 py-1 border border-white/10 rounded-full opacity-60 font-medium uppercase tracking-tighter">
                            {mood}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
                        className="w-10 h-10 flex items-center justify-center bg-white/[0.02] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all border border-white/10 hover:scale-110"
                      >
                        <Plus size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-white/40 text-lg">
            No fragrances found in this category.
          </p>
        </div>
      )}
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-24 px-6 bg-[#0A0A0A] min-h-screen flex items-center justify-center">
          <div className="text-white/40">Loading collection...</div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
