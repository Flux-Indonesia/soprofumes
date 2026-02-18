"use client";

import { useCart } from "@/context/cart-context";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCart();

  const cartItems = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean) as (typeof products[number] & { quantity: number })[];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <main className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      <h1 className="text-3xl font-bold mb-16 text-white">Your Acquisitions</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 opacity-40">
          <ShoppingBag className="mx-auto mb-4 text-white" size={48} />
          <p className="text-lg font-medium text-white">Your lab bag is empty.</p>
          <Link
            href="/shop"
            className="mt-6 text-[#D4AF37] uppercase text-[9px] tracking-[0.4em] underline block"
          >
            Browse The Archive
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-[2rem] relative"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={128}
                  className="w-24 h-32 object-cover rounded-lg"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <p className="text-[9px] opacity-40 uppercase tracking-widest text-white">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="text-base font-medium text-white">
                      &pound;{(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 border border-white/10 rounded-full px-3 py-1">
                      <button
                        onClick={() => addToCart(item.id, -1)}
                        className="opacity-40 hover:opacity-100 transition-opacity text-sm text-white"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm text-white">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item.id, 1)}
                        className="opacity-40 hover:opacity-100 transition-opacity text-sm text-white"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-6 right-6 text-red-500/40 hover:text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] sticky top-32">
              <h2 className="text-lg font-bold mb-6 text-white">Order Telemetry</h2>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between opacity-60 text-white">
                  <span>Subtotal</span>
                  <span>&pound;{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between opacity-60 text-white">
                  <span>Secure Transmission</span>
                  <span>&pound;0</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-base text-white">
                  <span>Total</span>
                  <span>&pound;{total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-[0.3em] rounded-xl shadow-2xl hover:brightness-110 transition-all block text-center"
              >
                Complete Acquisition
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
