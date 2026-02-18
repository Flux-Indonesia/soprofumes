"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "What is your current olfactory mood?",
    options: [
      "Regal & Commanding",
      "Warm & Intimate",
      "Bright & Fresh",
      "Dark & Mysterious",
    ],
  },
  {
    question: "Where do you seek your escape?",
    options: [
      "Arabian Desert Nights",
      "Rainy London Streets",
      "Kyoto Zen Temples",
      "French Riviera Coast",
    ],
  },
  {
    question: "How much space should your scent occupy?",
    options: [
      "Skin-close whisper",
      "Elegant aura",
      "Room-filling presence",
      "Infinite trail",
    ],
  },
  {
    question: "Which neural archetype resonates with your core identity?",
    options: [
      "The Visionary Leader",
      "The Mysterious Artist",
      "The Elegant Sophisticate",
      "The Bold Adventurer",
    ],
  },
  {
    question: "What scent memory triggers your deepest emotional response?",
    options: [
      "Grandmother's rose garden",
      "Ocean breeze at sunset",
      "Leather-bound books",
      "Campfire under stars",
    ],
  },
];

interface ProfileResult {
  persona: string;
  analysis: string;
  productId: number;
}

function getResult(answers: number[]): ProfileResult {
  const scores = [0, 0, 0, 0];
  answers.forEach((a) => {
    scores[a]++;
  });

  const maxIndex = scores.indexOf(Math.max(...scores));

  const profiles: ProfileResult[] = [
    {
      persona: "The Sovereign",
      analysis:
        "Your neural signature radiates authority and refined taste. You are drawn to commanding compositions that announce your presence before you enter a room. Oud, saffron, and precious resins form your olfactory armor.",
      productId: 1,
    },
    {
      persona: "The Alchemist",
      analysis:
        "Your scent identity craves warmth and emotional depth. You seek fragrances that wrap around you like a cashmere blanket, creating an intimate cocoon of amber, vanilla, and soft musks.",
      productId: 11,
    },
    {
      persona: "The Luminary",
      analysis:
        "Your essence is one of radiance and vitality. You gravitate toward compositions that capture sunlight in a bottle - sparkling citrus, airy florals, and clean marine accords define your signature.",
      productId: 15,
    },
    {
      persona: "The Phantom",
      analysis:
        "Your neural map reveals a soul drawn to shadows and complexity. Dark oud, smoky incense, and leather speak to your enigmatic nature. Your fragrance should be as layered and mysterious as you are.",
      productId: 9,
    },
  ];

  return profiles[maxIndex];
}

export default function AnalyzerPage() {
  const [phase, setPhase] = useState<"loading" | "questions" | "results">("loading");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Simulate initial loading then show questions
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("questions");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setPhase("results");
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setPhase("questions");
  };

  const result = phase === "results" ? getResult(answers) : null;
  const recommendedProduct = result
    ? products.find((p) => p.id === result.productId)
    : null;

  return (
    <section className="py-40 px-6 relative overflow-hidden min-h-screen bg-white/[0.02]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400 blur-[150px] rounded-full opacity-5" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-500 text-[11px] uppercase tracking-[0.4em] mb-10 font-bold shadow-2xl shadow-cyan-500/10">
            <Zap size={14} />
            Neural Analyzer
          </div>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-tight text-white">
            Discover Your<br />Olfactory Sync
          </h1>
          <p className="opacity-60 font-light max-w-2xl mx-auto text-xl leading-relaxed text-white">
            Our AI-powered neural scan will map your olfactory preferences and
            match you with your perfect molecular composition.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="relative min-h-[600px] flex items-center justify-center p-12 bg-white/[0.03] border border-white/10 rounded-[4rem] overflow-hidden ai-glow backdrop-blur-2xl shadow-2xl">
          {/* Loading State */}
          {phase === "loading" && (
            <div className="text-center">
              <div className="w-32 h-32 border-[2px] border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-10" />
              <p className="font-serif text-4xl italic opacity-80 mb-4 text-white">
                Analyzing Neural Trace...
              </p>
            </div>
          )}

          {/* Question State */}
          {phase === "questions" && (
            <div className="w-full">
              <p className="text-[11px] opacity-40 uppercase tracking-[0.5em] mb-8 font-bold text-white">
                Sequence Segment {currentStep + 1} / 5
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-16 font-medium leading-[1.3] text-white">
                {questions[currentStep].question}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="group relative p-8 bg-white/5 border border-white/10 rounded-[2rem] text-left hover:border-cyan-400/50 transition-all overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10 text-lg font-light tracking-wide group-hover:pl-4 transition-all duration-500 text-white">
                      {option}
                    </span>
                    <div className="absolute inset-0 bg-cyan-400/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result State */}
          {phase === "results" && result && recommendedProduct && (
            <div className="grid lg:grid-cols-12 gap-16 w-full">
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-[11px] opacity-40 uppercase tracking-[0.5em] mb-6 font-bold text-white">
                  Analysis Complete
                </p>
                <h2 className="text-5xl font-serif text-[#D4AF37] italic leading-tight mb-8">
                  {result.persona}
                </h2>
                <p className="opacity-80 font-light italic text-2xl leading-relaxed border-l-2 border-cyan-400/20 pl-8 text-white">
                  {result.analysis}
                </p>
                <button
                  onClick={resetQuiz}
                  className="mt-10 self-start px-8 py-3 border border-white/10 text-white font-bold uppercase text-[9px] tracking-widest rounded-full hover:border-cyan-400/50 transition-all"
                >
                  Retake Analysis
                </button>
              </div>

              {/* Right */}
              <div className="lg:col-span-5">
                <div className="p-10 bg-white/[0.02] border border-cyan-400/20 rounded-[3rem] text-center shadow-2xl">
                  <p className="text-[9px] uppercase tracking-widest opacity-40 mb-6 text-white">
                    Your Neural Match
                  </p>
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
                    <Image
                      src={recommendedProduct.image}
                      alt={recommendedProduct.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-1">
                    {recommendedProduct.name}
                  </h3>
                  <p className="text-[10px] opacity-40 uppercase tracking-widest mb-4 text-white">
                    {recommendedProduct.category}
                  </p>
                  <p className="text-2xl font-serif text-[#D4AF37] mb-6">
                    ${recommendedProduct.price}
                  </p>
                  <Link
                    href={`/product/${recommendedProduct.id}`}
                    className="inline-block px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase text-[9px] tracking-widest rounded-full shadow-2xl hover:brightness-110 transition-all"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
