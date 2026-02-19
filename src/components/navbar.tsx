"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Heart, User, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { products } from "@/data/products";

const menuLinks = [
  { name: "The Lab (Home)", href: "/" },
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
  const pathname = usePathname();
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

  const searchPages = [
    { name: "The Collection", page: "/shop" },
    { name: "Neural Drops", page: "/drops" },
    { name: "Scent Analyzer", page: "/analyzer" },
    { name: "The Community", page: "/community" },
    { name: "Guide", page: "/education" },
    { name: "Our Manifesto", page: "/about" },
    { name: "Inquiries", page: "/contact" },
  ];

  const searchResults = searchQuery.length > 1
    ? {
        products: products.filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5),
        pages: searchPages.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }
    : { products: [], pages: [] };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-4 sm:px-8 md:px-12 transition-all duration-700 ${
          scrolled
            ? "border-b border-white/10 py-3 sm:py-4"
            : "py-4 sm:py-5"
        }`}
        style={scrolled ? { backgroundColor: 'rgba(10, 10, 10, 0.35)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' } : { backgroundColor: 'transparent' }}
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
      </nav>

      {/* Search Modal */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl" onClick={() => setSearchOpen(false)} />
        <div className="relative min-h-screen flex flex-col justify-start items-center p-8 pt-32">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-8 right-8 sm:top-10 sm:right-10 p-4 hover:rotate-90 transition-all duration-500"
          >
            <X size={28} strokeWidth={1} />
          </button>

          <div className="w-full max-w-2xl">
            <div className="relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-40" size={24} strokeWidth={1} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fragrances, pages, or moods..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] py-6 pl-16 pr-8 text-lg outline-none focus:border-[#D4AF37] transition-all placeholder:opacity-40"
                autoFocus={searchOpen}
              />
            </div>

            {searchQuery && (
              <div className="space-y-8 max-h-[60vh] overflow-y-auto">
                {searchResults.products.length > 0 && (
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.4em] opacity-40 font-bold mb-6">Fragrances</h3>
                    <div className="grid gap-4">
                      {searchResults.products.map((p) => (
                        <Link
                          key={p.id}
                          href={`/product/${p.id}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem] hover:border-[#D4AF37] transition-all text-left group"
                        >
                          <img src={p.image} className="w-16 h-16 object-cover rounded-lg" alt={p.name} />
                          <div className="flex-1">
                            <h4 className="font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">{p.name}</h4>
                            <p className="text-sm opacity-60 line-clamp-1">{p.description}</p>
                            <div className="flex gap-2 mt-2">
                              <span className="text-xs px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full">{p.category}</span>
                              {p.moods.slice(0, 2).map((m) => (
                                <span key={m} className="text-xs px-2 py-1 bg-white/10 opacity-60 rounded-full">{m}</span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">£{p.price}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {searchResults.pages.length > 0 && (
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.4em] opacity-40 font-bold mb-6">Pages</h3>
                    <div className="grid gap-3">
                      {searchResults.pages.map((pg) => (
                        <Link
                          key={pg.page}
                          href={pg.page}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/10 rounded-[1rem] hover:border-[#D4AF37] transition-all text-left group"
                        >
                          <span className="font-bold group-hover:text-[#D4AF37] transition-colors">{pg.name}</span>
                          <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {searchQuery && searchResults.products.length === 0 && searchResults.pages.length === 0 && (
                  <div className="text-center py-16 opacity-40">
                    <Search size={48} className="mx-auto mb-4" />
                    <p className="text-lg font-medium">No results found</p>
                    <p className="text-sm mt-2">Try searching for fragrance names, categories, or moods</p>
                  </div>
                )}
              </div>
            )}

            {!searchQuery && (
              <div className="space-y-6 opacity-60">
                <h3 className="text-sm uppercase tracking-[0.4em] font-bold">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {["Oud", "Oriental", "Woody", "Floral", "Neural Drops", "Scent Analyzer"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSearchQuery(t)}
                      className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-sm hover:border-[#D4AF37] transition-all"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-300 z-20"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            {/* Gold double vertical lines on right */}
            <div className="absolute right-6 top-[15%] bottom-[15%] flex gap-[3px]">
              <div className="w-[1.5px] h-full bg-[#D4AF37] opacity-70" />
              <div className="w-[1.5px] h-full bg-[#D4AF37] opacity-70" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              {menuLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
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
                        className={`block font-serif text-4xl md:text-6xl transition-colors duration-300 ${
                          isActive ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                        }`}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
