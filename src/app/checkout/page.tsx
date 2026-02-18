"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { products } from "@/data/products";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [processing, setProcessing] = useState(false);

  const [form, setForm] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    cardholderName: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      clearCart();
      router.push("/?orderSuccess=true");
    }, 2000);
  };

  return (
    <main className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      <h1 className="text-3xl font-bold mb-16 text-white">Secure Checkout</h1>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-8">
          {/* Contact */}
          <div className="space-y-3">
            <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold text-white block">
              Digital Coordinate
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
            />
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold text-white block">
              Payment Protocol
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={form.cvc}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
              />
            </div>
            <input
              type="text"
              name="cardholderName"
              placeholder="Cardholder Name"
              value={form.cardholderName}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
            />
          </div>

          {/* Billing Address */}
          <div className="space-y-3">
            <label className="text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold text-white block">
              Billing Coordinates
            </label>
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={form.street}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={form.postalCode}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
              />
            </div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-light text-sm text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={processing}
            className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-[0.3em] rounded-xl shadow-2xl hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {processing ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Processing...
              </>
            ) : (
              "Place Order"
            )}
          </button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] sticky top-32">
            <h2 className="text-lg font-bold mb-6 text-white">Order Telemetry</h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={64}
                    className="w-12 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-[9px] opacity-40 uppercase tracking-widest text-white">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-white">
                    &pound;{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}
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
          </div>
        </div>
      </div>
    </main>
  );
}
