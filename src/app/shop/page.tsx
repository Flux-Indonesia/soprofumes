"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";

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
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4"
        >
          Molecular Collections
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl text-white"
        >
          The <span className="text-[#D4AF37]">Collection</span>
        </motion.h1>
      </div>

      {/* Category Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-16"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#D4AF37] text-black"
                : "border border-white/10 text-white/60 hover:border-[#D4AF37]/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

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
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
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
                          toggleWishlist(product.id);
                        }}
                        className={`p-3 backdrop-blur-md rounded-full transition-all ${
                          wishlisted
                            ? "bg-[#D4AF37] text-black"
                            : "bg-white/20 hover:bg-[#D4AF37] hover:text-black text-white"
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
                        <h3 className="text-xl font-serif font-medium group-hover:text-[#D4AF37] transition-colors leading-tight text-white">
                          {product.name}
                        </h3>
                        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] mt-1 text-white">
                          {product.category}
                        </p>
                      </div>
                      <p className="text-xl font-serif font-light text-white">
                        ${product.price}
                      </p>
                    </div>

                    {/* Mood + Cart Row */}
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-[9px] px-3 py-1 border border-white/10 rounded-full opacity-60 font-medium uppercase tracking-tighter text-white">
                        {product.moods[0]}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product.id);
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
