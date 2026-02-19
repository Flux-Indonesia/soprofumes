"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { products } from "@/data/products";
import { useToast } from "@/components/toast";

interface WishlistContextType {
  wishlist: number[];
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  toggleWishlist: (productId: number) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const stored = localStorage.getItem("sopro-wishlist");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch {}
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("sopro-wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, loaded]);

  const addToWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const isInWishlist = (productId: number) => wishlist.includes(productId);

  const toggleWishlist = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    const name = product?.name || "Item";

    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
      showToast(`${name} removed from wishlist`, "info");
    } else {
      addToWishlist(productId);
      showToast(`${name} added to wishlist`, "success");
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
}
