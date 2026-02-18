"use client";

const sections = [
  {
    title: "Data Collection",
    content: "We collect information you provide directly, including name, email address, shipping address, and payment information when you make a purchase. We also collect browsing data, device information, and interaction patterns to improve your experience.",
  },
  {
    title: "Use of Information",
    content: "Your data is used to process orders, personalize your experience, improve our AI scent matching algorithms, and communicate relevant updates. We never sell your personal information to third parties.",
  },
  {
    title: "AI & Neural Processing",
    content: "Our Scent Analyzer uses your quiz responses to generate personalized fragrance recommendations. This data is processed locally and through secure AI models. Your scent profile data is stored securely and can be deleted upon request.",
  },
  {
    title: "Cookies & Tracking",
    content: "We use essential cookies for site functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Data Security",
    content: "All data is encrypted in transit and at rest using industry-standard protocols. Payment information is processed through PCI-compliant partners and never stored on our servers.",
  },
  {
    title: "Your Rights",
    content: "Under GDPR and applicable regulations, you have the right to access, rectify, delete, or port your data. You may also object to processing or withdraw consent at any time by contacting privacy@soprofumes.com.",
  },
  {
    title: "Data Retention",
    content: "We retain personal data for as long as necessary to fulfill the purposes outlined in this policy. Order data is retained for 7 years for legal compliance. You may request deletion of non-essential data at any time.",
  },
  {
    title: "Contact",
    content: "For privacy-related inquiries, please contact our Data Protection Officer at privacy@soprofumes.com. We aim to respond to all requests within 30 days.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen bg-[#0A0A0A]">
      <div className="mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-4 font-bold">Legal</h2>
        <h1 className="text-3xl font-bold leading-tight text-white">
          Privacy <br /> Protocols
        </h1>
        <p className="text-sm opacity-40 mt-4 text-white">Last updated: January 2024</p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all"
          >
            <h2 className="text-lg font-bold text-[#D4AF37] mb-4">{section.title}</h2>
            <p className="opacity-60 leading-relaxed text-sm text-white">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
