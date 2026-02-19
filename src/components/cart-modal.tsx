"use client";

import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import { X, Check } from "lucide-react";

export function CartModal() {
  const { showCartModal, cartModalProduct, closeCartModal } = useCart();
  const router = useRouter();

  if (!showCartModal || !cartModalProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCartModal}
      />
      <div className="relative bg-black border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={closeCartModal}
          className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Checkmark */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Check size={32} className="text-black stroke-[3]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-serif text-center mb-8">Added to Cart</h2>

        {/* Product info */}
        <div className="bg-[#111] rounded-xl p-4 flex gap-4 mb-8">
          <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={cartModalProduct.image}
              alt={cartModalProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-sm mb-1">{cartModalProduct.name}</h3>
            <p className="text-lg font-light">£{cartModalProduct.price}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={closeCartModal}
            className="flex-1 py-3 px-4 bg-[#222] text-white font-bold rounded-xl hover:bg-[#333] transition-colors text-sm"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              closeCartModal();
              router.push("/cart");
            }}
            className="flex-1 py-3 px-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors text-sm"
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
}
