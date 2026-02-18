"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { Brain, Crown, Vote, Star } from "lucide-react";

interface Review {
  id: number;
  author: string;
  initials: string;
  level: string;
  comment: string;
  date: string;
  stars: number;
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: "Alexander M.",
    initials: "AM",
    level: "Oud Connoisseur",
    comment:
      "Reef 33 is an absolute masterpiece. The oud is deep and complex without being overpowering, and the marine undertones give it a uniqueness I have not found in any other fragrance. Longevity is exceptional.",
    date: "2 Weeks Ago",
    stars: 5,
  },
  {
    id: 2,
    author: "Sophia L.",
    initials: "SL",
    level: "Floral Specialist",
    comment:
      "Lady Reef has become my signature scent. The rose and tuberose heart is opulent without being cloying, and it dries down to this gorgeous warm vanilla-patchouli base. I receive compliments every single time.",
    date: "1 Month Ago",
    stars: 5,
  },
  {
    id: 3,
    author: "James K.",
    initials: "JK",
    level: "Dark Notes Expert",
    comment:
      "Osma Noir is dark and brooding in the best possible way. The incense and dark oud combination is intoxicating. For evening events it is absolutely perfect. A true work of art in molecular composition.",
    date: "3 Weeks Ago",
    stars: 5,
  },
  {
    id: 4,
    author: "Amira R.",
    initials: "AR",
    level: "Heritage Collector",
    comment:
      "Arab Obaya transported me straight to the souks of Dubai. The saffron and cardamom opening is breathtaking, and it settles into this warm, resinous embrace. True heritage in a bottle.",
    date: "2 Months Ago",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
      ))}
    </div>
  );
}

export default function CommunityPage() {
  const [formProduct, setFormProduct] = useState("");
  const [formRating, setFormRating] = useState("");
  const [formText, setFormText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formProduct || !formRating || !formText.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormProduct("");
      setFormRating("");
      setFormText("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <div className="mb-20">
        <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">
          The Collective
        </p>
        <h1 className="text-3xl font-bold leading-tight text-white">
          Neural<br />Consensus
        </h1>
        <p className="text-lg opacity-60 font-light mt-6 max-w-2xl text-white">
          Join thousands of fragrance enthusiasts sharing their olfactory
          experiences and shaping the future of molecular perfumery.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <p className="text-xl font-bold text-[#D4AF37] mb-1">2,847</p>
          <p className="text-[9px] uppercase tracking-widest opacity-40 text-white">
            Members
          </p>
        </div>
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <p className="text-xl font-bold text-[#D4AF37] mb-1">4.8</p>
          <p className="text-[9px] uppercase tracking-widest opacity-40 text-white">
            Avg Rating
          </p>
        </div>
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <p className="text-xl font-bold text-[#D4AF37] mb-1">156</p>
          <p className="text-[9px] uppercase tracking-widest opacity-40 text-white">
            Reviews
          </p>
        </div>
        <div className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem]">
          <p className="text-xl font-bold text-[#D4AF37] mb-1">92%</p>
          <p className="text-[9px] uppercase tracking-widest opacity-40 text-white">
            Satisfaction
          </p>
        </div>
      </div>

      {/* Featured Reviews */}
      <h2 className="text-xl font-bold mb-8 text-white">
        Featured Neural Feedback
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all group"
          >
            {/* Author row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                {review.initials}
              </div>
              <div>
                <p className="font-bold text-xs tracking-widest uppercase text-white">
                  {review.author}
                </p>
                <p className="text-[8px] opacity-40 uppercase tracking-widest text-white">
                  {review.level}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="mb-4">
              <StarRating count={review.stars} />
            </div>

            {/* Comment */}
            <p className="text-base font-medium opacity-90 leading-relaxed mb-6 text-white">
              &ldquo;{review.comment}&rdquo;
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <p className="text-[9px] opacity-40 uppercase tracking-widest text-white">
                {review.date}
              </p>
              <span className="text-[8px] px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full font-bold uppercase tracking-widest">
                Verified Collector
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Two Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {/* Card 1 - Neural Consensus Algorithm */}
        <div className="p-12 bg-white/[0.03] border border-white/10 rounded-[3rem]">
          <Brain size={32} className="text-[#D4AF37] mb-6" />
          <h3 className="text-xl font-bold mb-4 text-white">
            Neural Consensus Algorithm
          </h3>
          <p className="opacity-60 font-light text-sm leading-relaxed mb-8 text-white">
            Our proprietary algorithm aggregates community feedback to generate
            real-time scent intelligence, ensuring each formulation evolves with
            collective neural input.
          </p>
          <button className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-all">
            Learn More
          </button>
        </div>

        {/* Card 2 - Collector Rewards */}
        <div className="p-12 bg-white/[0.03] border border-white/10 rounded-[3rem]">
          <Crown size={32} className="text-amber-500 mb-6" />
          <h3 className="text-xl font-bold mb-4 text-white">
            Collector Rewards
          </h3>
          <p className="opacity-60 font-light text-sm leading-relaxed mb-8 text-white">
            Earn exclusive access, early drops, and limited editions through
            active participation. The more you engage, the deeper your rewards
            tier becomes.
          </p>
          <button className="px-8 py-3 border border-amber-500 text-amber-500 font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-amber-500/10 transition-all">
            View Tiers
          </button>
        </div>
      </div>

      {/* Governance CTA */}
      <div className="p-16 bg-white/[0.03] border border-cyan-400/20 rounded-[3rem] text-center ai-glow mb-16">
        <Vote size={32} className="text-cyan-400 mx-auto mb-6" />
        <h3 className="text-xl font-bold mb-4 text-white">
          Participate in Governance
        </h3>
        <p className="opacity-60 font-light text-base max-w-xl mx-auto mb-8 text-white">
          Shape the future of SoproFumes. Vote on upcoming formulations,
          packaging designs, and limited drop schedules.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3 bg-cyan-400 text-black font-bold uppercase text-[9px] tracking-widest rounded-full shadow-2xl hover:brightness-110 transition-all">
            Cast Your Vote
          </button>
          <button className="px-8 py-3 border border-cyan-400 text-cyan-400 font-bold uppercase text-[9px] tracking-widest rounded-full hover:bg-cyan-400/10 transition-all">
            View Proposals
          </button>
        </div>
      </div>

      {/* Share Form */}
      <div className="p-12 bg-white/[0.02] border border-white/10 rounded-[3rem]">
        <h3 className="text-xl font-bold mb-6 text-center text-white">
          Share Your Neural Experience
        </h3>

        {submitted ? (
          <div className="text-center py-8">
            <p className="text-[#D4AF37] font-bold text-lg mb-2">
              Thank You!
            </p>
            <p className="opacity-60 text-sm text-white">
              Your neural feedback has been submitted successfully.
            </p>
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Select */}
              <select
                value={formProduct}
                onChange={(e) => setFormProduct(e.target.value)}
                className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer text-white text-sm"
              >
                <option value="" className="bg-[#0A0A0A]">
                  Select a fragrance...
                </option>
                {products.map((p) => (
                  <option key={p.id} value={p.id} className="bg-[#0A0A0A]">
                    {p.name}
                  </option>
                ))}
              </select>

              {/* Rating Select */}
              <select
                value={formRating}
                onChange={(e) => setFormRating(e.target.value)}
                className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer text-white text-sm"
              >
                <option value="" className="bg-[#0A0A0A]">
                  Your rating...
                </option>
                <option value="5" className="bg-[#0A0A0A]">5 Stars</option>
                <option value="4" className="bg-[#0A0A0A]">4 Stars</option>
                <option value="3" className="bg-[#0A0A0A]">3 Stars</option>
                <option value="2" className="bg-[#0A0A0A]">2 Stars</option>
                <option value="1" className="bg-[#0A0A0A]">1 Star</option>
              </select>

              {/* Text Area */}
              <textarea
                value={formText}
                onChange={(e) => setFormText(e.target.value)}
                placeholder="Describe your olfactory experience..."
                rows={5}
                className="w-full bg-transparent border border-white/10 p-3 rounded-xl outline-none focus:border-[#D4AF37] transition-all resize-none text-white text-sm placeholder:text-white/20"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={!formProduct || !formRating || !formText.trim()}
                className="w-full py-3 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-xl hover:brightness-110 transition-all shadow-xl disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Submit Neural Feedback
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
