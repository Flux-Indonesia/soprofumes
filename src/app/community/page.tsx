"use client";

import { products } from "@/data/products";
import { Brain, Shield, Vote } from "lucide-react";

const reviews = [
  {
    userName: "Alexander M.",
    level: "Oud Connoisseur",
    rating: 5,
    comment:
      "Reef 33 is an absolute masterpiece. The oud is deep and complex without being overpowering, and the marine undertones give it a uniqueness I have not found in any other fragrance.",
    date: "2 Weeks Ago",
  },
  {
    userName: "Sophia L.",
    level: "Floral Specialist",
    rating: 5,
    comment:
      "Lady Reef has become my signature scent. The rose and tuberose heart is opulent without being cloying, and it dries down to this gorgeous warm vanilla-patchouli base.",
    date: "1 Month Ago",
  },
  {
    userName: "James K.",
    level: "Dark Notes Expert",
    rating: 5,
    comment:
      "Osma Noir is dark and brooding in the best possible way. The incense and dark oud combination is intoxicating. For evening events it is absolutely perfect.",
    date: "3 Weeks Ago",
  },
  {
    userName: "Amira R.",
    level: "Heritage Collector",
    rating: 5,
    comment:
      "Arab Obaya transported me straight to the souks of Dubai. The saffron and cardamom opening is breathtaking, and it settles into this warm, resinous embrace.",
    date: "2 Months Ago",
  },
  {
    userName: "Marcus T.",
    level: "Woody Enthusiast",
    rating: 4,
    comment:
      "Black Diamond lives up to its name. The incense smoke effect is incredibly realistic, and the oud base gives it serious weight. A statement fragrance.",
    date: "1 Month Ago",
  },
  {
    userName: "Elena V.",
    level: "Fresh Notes Lover",
    rating: 5,
    comment:
      "Capri captures the Mediterranean in a bottle. The lemon and marine notes are so natural and uplifting. Perfect for summer days and warm evenings alike.",
    date: "3 Weeks Ago",
  },
];

export default function CommunityPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
          The Collective
        </h2>
        <h1 className="text-3xl font-bold leading-tight">
          Neural <br /> Consensus
        </h1>
        <p className="text-lg opacity-60 font-light mt-6 max-w-2xl">
          Our community of verified collectors shares authentic experiences,
          creating a neural network of olfactory intelligence that guides future
          creations.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-1">2,847</h3>
          <p className="text-[9px] uppercase tracking-widest opacity-40">
            Verified Collectors
          </p>
        </div>
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-1">4.8</h3>
          <p className="text-[9px] uppercase tracking-widest opacity-40">
            Average Rating
          </p>
        </div>
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-1">156</h3>
          <p className="text-[9px] uppercase tracking-widest opacity-40">
            Expert Reviews
          </p>
        </div>
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-1">92%</h3>
          <p className="text-[9px] uppercase tracking-widest opacity-40">
            Satisfaction Rate
          </p>
        </div>
      </div>

      {/* Featured Neural Feedback */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-8">Featured Neural Feedback</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all group"
            >
              {/* Author + Stars */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-sm group-hover:bg-[#D4AF37]/20 transition-all">
                    {review.userName[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs tracking-widest uppercase">
                      {review.userName}
                    </h5>
                    <p className="text-[8px] opacity-40 uppercase tracking-widest mt-1">
                      {review.level}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating ? "opacity-100" : "opacity-20"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <p className="text-base font-medium opacity-90 leading-relaxed mb-6 group-hover:opacity-100 transition-all">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="text-[9px] opacity-40 uppercase tracking-widest">
                  {review.date}
                </span>
                <span className="text-[8px] px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full font-bold uppercase tracking-widest group-hover:bg-cyan-400/20 transition-all">
                  Verified Collector
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <div className="p-12 bg-white/[0.03] border border-white/10 rounded-[3rem]">
          <Brain size={36} className="text-[#D4AF37] mb-6" />
          <h4 className="text-lg font-bold mb-4">
            Neural Consensus Algorithm
          </h4>
          <p className="opacity-60 font-light text-base leading-relaxed mb-6">
            Our AI analyzes thousands of reviews to identify molecular patterns
            and predict which fragrances will resonate with your unique
            olfactory profile.
          </p>
          <button className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full text-[9px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all">
            View Algorithm
          </button>
        </div>
        <div className="p-12 bg-white/[0.03] border border-white/10 rounded-[3rem]">
          <Shield size={36} className="text-amber-500 mb-6" />
          <h4 className="text-lg font-bold mb-4">Collector Rewards</h4>
          <p className="opacity-60 font-light text-base leading-relaxed mb-6">
            High-quality reviews earn Neural Points, unlocking exclusive access
            to limited drops, early releases, and personalized consultations.
          </p>
          <button className="px-6 py-3 border border-amber-500 text-amber-500 rounded-full text-[9px] uppercase tracking-widest font-bold hover:bg-amber-500 hover:text-black transition-all">
            Join Program
          </button>
        </div>
      </div>

      {/* Governance CTA */}
      <div className="p-16 bg-white/[0.03] border border-cyan-400/20 rounded-[3rem] text-center ai-glow mb-16">
        <Vote size={36} className="mx-auto text-cyan-400 mb-6" />
        <h3 className="text-xl font-bold mb-6">Participate in Governance</h3>
        <p className="max-w-xl mx-auto opacity-60 font-light text-base mb-8">
          Help us decide the next olfactory direction. High-resonance
          contributors receive priority allocations on seasonal neural drops and
          influence future product development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-cyan-400 text-black font-bold uppercase text-[9px] tracking-widest rounded-full shadow-2xl hover:brightness-110 transition-all">
            Access Governance Portal
          </button>
          <button className="px-8 py-3 border border-cyan-400 text-cyan-400 font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-cyan-400/10 transition-all">
            View Proposals
          </button>
        </div>
      </div>

      {/* Share Form */}
      <div className="p-12 bg-white/[0.02] border border-white/10 rounded-[3rem]">
        <h3 className="text-xl font-bold mb-6 text-center">
          Share Your Neural Experience
        </h3>
        <p className="text-center opacity-60 mb-8 max-w-xl mx-auto text-sm">
          Your authentic feedback helps build our collective olfactory
          intelligence and guides fellow collectors in their fragrance journey.
        </p>
        <div className="max-w-xl mx-auto">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-[9px] uppercase tracking-widest opacity-40 font-bold mb-3 block">
                  Fragrance
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer text-sm">
                    <option value="" className="bg-[#0A0A0A]">
                      Select a fragrance
                    </option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id} className="bg-[#0A0A0A]">
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 12 8"
                      fill="none"
                      className="opacity-40"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest opacity-40 font-bold mb-3 block">
                  Rating
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer text-sm">
                    <option value="" className="bg-[#0A0A0A]">
                      Rate your experience
                    </option>
                    <option value="5" className="bg-[#0A0A0A]">
                      ★★★★★ Exceptional
                    </option>
                    <option value="4" className="bg-[#0A0A0A]">
                      ★★★★☆ Excellent
                    </option>
                    <option value="3" className="bg-[#0A0A0A]">
                      ★★★☆☆ Good
                    </option>
                    <option value="2" className="bg-[#0A0A0A]">
                      ★★☆☆☆ Fair
                    </option>
                    <option value="1" className="bg-[#0A0A0A]">
                      ★☆☆☆☆ Poor
                    </option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 12 8"
                      fill="none"
                      className="opacity-40"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="text-[9px] uppercase tracking-widest opacity-40 font-bold mb-3 block">
                Your Experience
              </label>
              <textarea
                rows={3}
                className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all resize-none text-sm"
                placeholder="Describe your olfactory journey with this fragrance..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-xl hover:brightness-110 transition-all shadow-xl"
            >
              Submit Neural Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
