"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Heart, User, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { products } from "@/data/products";

const menuLinks = [
  { name: "The Lab", href: "/" },
  { name: "The Collection", href: "/shop" },
  { name: "Neural Drops", href: "/drops" },
  { name: "Scent Analyzer", href: "/analyzer" },
  { name: "The Community", href: "/community" },
  { name: "Guide", href: "/education" },
  { name: "Our Manifesto", href: "/about" },
  { name: "Inquiries", href: "/contact" },
];

export function Navbar() {
  const { getCartCount } = useCart();
  const { wishlist } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchResults = searchQuery.length > 1
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <>
      {/* Navbar */}
      <motion.header
        className="fixed top-0 left-0 w-full z-[60]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className={`flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
            scrolled
              ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5"
              : "bg-transparent"
          }`}
        >
          {/* Left - Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors p-2"
            >
              <Menu size={20} />
              <span className="hidden lg:inline text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 group-hover:opacity-100 transition-opacity">Menu</span>
            </button>
          </div>

          {/* Center - Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-baseline gap-0.5">
            <span className="font-serif text-2xl md:text-3xl text-white font-bold tracking-[0.2em]">
              SOPRO
            </span>
            <span className="font-serif text-2xl md:text-3xl text-[#D4AF37] font-light tracking-[0.2em]">
              FUMES
            </span>
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white/70 hover:text-[#D4AF37] transition-colors p-1"
            >
              <Search size={18} />
            </button>
            <Link href="/wishlist" className="relative text-white/70 hover:text-[#D4AF37] transition-colors p-1">
              <Heart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full" />
              )}
            </Link>
            <Link href="/login" className="text-white/70 hover:text-[#D4AF37] transition-colors p-1">
              <User size={18} />
            </Link>
            <Link href="/cart" className="relative text-white/70 hover:text-[#D4AF37] transition-colors p-1">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full text-[9px] text-black flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] flex items-start justify-center pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="w-full max-w-2xl mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search fragrances, pages, or moods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 pl-12 pr-12 py-4 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none text-lg"
                />
                <button onClick={() => setSearchOpen(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              {searchResults.length > 0 && (
                <div className="mt-2 bg-[#111]/95 border border-white/10 divide-y divide-white/5">
                  {searchResults.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.id}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors"
                    >
                      <img src={p.image} alt={p.name} className="w-12 h-14 object-cover rounded" />
                      <div>
                        <p className="text-white text-sm">{p.name}</p>
                        <p className="text-white/40 text-xs">{p.category} · £{p.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {searchQuery.length === 0 && (
                <div className="mt-4 text-center text-white/30 text-sm">
                  <p className="mb-3">Popular Searches</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Oud", "Reef", "Vanilla", "Woody"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSearchQuery(t)}
                        className="px-3 py-1 border border-white/10 rounded-full text-xs text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0A0A0A] z-[65] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-[#D4AF37] hover:rotate-90 transition-transform duration-500 z-20"
            >
              <div className="border border-[#D4AF37]/30 rounded-full p-3">
                <X size={24} strokeWidth={1} />
              </div>
            </button>

            <div className="relative z-10 flex flex-col items-center gap-3">
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-6">
                Navigation
              </span>
              {menuLinks.map((link, i) => (
                <motion.div className="overflow-hidden" key={link.name}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    <motion.span
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.08,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="block font-serif text-3xl md:text-5xl text-white hover:text-[#D4AF37] transition-colors duration-300 italic"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
