"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { products, Product } from "@/data/products";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number, qty?: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  cartModalProduct: Product | null;
  showCartModal: boolean;
  closeCartModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [cartModalProduct, setCartModalProduct] = useState<Product | null>(null);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sopro-cart");
    if (stored) {
      try {
        const parsed: CartItem[] = JSON.parse(stored);
        const validIds = new Set(products.map((p) => p.id));
        setCart(parsed.filter((item) => validIds.has(item.productId)));
      } catch {}
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("sopro-cart", JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const addToCart = (productId: number, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        const newQty = existing.quantity + qty;
        if (newQty <= 0) return prev.filter((item) => item.productId !== productId);
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: newQty } : item
        );
      }
      if (qty > 0) return [...prev, { productId, quantity: qty }];
      return prev;
    });

    const product = products.find((p) => p.id === productId);
    if (product && qty > 0) {
      setCartModalProduct(product);
      setShowCartModal(true);
    }
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("sopro-cart");
  };

  const getCartCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartCount,
        cartModalProduct,
        showCartModal,
        closeCartModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
