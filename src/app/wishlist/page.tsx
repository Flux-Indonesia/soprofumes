"use client";

import { useWishlist } from "@/context/wishlist-context";
import { useCart } from "@/context/cart-context";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistProducts = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  return (
    <main className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      <h1 className="text-3xl font-bold mb-16 text-white">Saved Resonances</h1>

      {wishlistProducts.length === 0 ? (
        <div className="text-center py-16 opacity-40">
          <Heart className="mx-auto mb-4 text-white" size={48} />
          <p className="text-lg font-medium text-white">No saved scents found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistProducts.map((product) => {
            const wishlisted = isInWishlist(product.id);

            return (
              <Link key={product.id} href={`/product/${product.id}`}>
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
            );
          })}
        </div>
      )}
    </main>
  );
}
