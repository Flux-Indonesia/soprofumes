"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import Link from "next/link";
import Image from "next/image";
import { Clock, Heart, ShoppingBag } from "lucide-react";

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

export default function DropsPage() {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const timeLeft = useCountdown();

  const dropProducts = products.filter((p) => p.isDrop === true);

  return (
    <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen bg-[#0A0A0A]">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        {/* Left */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
            Limited Sequences
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white">
            Neural<br />Drops
          </h1>
        </div>

        {/* Right - Countdown */}
        <div className="flex items-center gap-4 bg-white/[0.03] px-8 py-4 rounded-full border border-cyan-400/20">
          <Clock size={16} className="text-cyan-400 animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 text-white">
            Next Drop:
          </span>
          <span className="bg-cyan-400/10 px-2 py-1 rounded text-cyan-400">
            {String(timeLeft.days).padStart(2, "0")}d
          </span>
          <span className="opacity-40 text-white">:</span>
          <span className="bg-cyan-400/10 px-2 py-1 rounded text-cyan-400">
            {String(timeLeft.hours).padStart(2, "0")}h
          </span>
          <span className="opacity-40 text-white">:</span>
          <span className="bg-cyan-400/10 px-2 py-1 rounded text-cyan-400">
            {String(timeLeft.minutes).padStart(2, "0")}m
          </span>
          <span className="opacity-40 text-white">:</span>
          <span className="bg-cyan-400/10 px-2 py-1 rounded text-cyan-400">
            {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {dropProducts.map((product) => {
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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

      {/* Allocation CTA */}
      <div className="p-16 bg-white/[0.02] border border-white/10 rounded-[3rem] text-center">
        <h2 className="text-xl font-bold mb-6 text-white">
          Secure Your Allocation
        </h2>
        <p className="max-w-lg mx-auto opacity-60 font-light text-base mb-8 text-white">
          Beta-batch experiments are released in quantities of exactly 100
          units. Members gain 24-hour priority access.
        </p>
        <button className="px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-full shadow-2xl hover:brightness-110 transition-all">
          Join The Waitlist
        </button>
      </div>
    </main>
  );
}
