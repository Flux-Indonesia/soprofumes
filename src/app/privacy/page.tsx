"use client";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Privacy Protocols</h1>
        <p className="text-base opacity-70 font-light max-w-3xl mx-auto leading-relaxed">
          Your neural data and olfactory preferences are protected by advanced
          encryption protocols. We believe privacy is fundamental to authentic
          scent discovery.
        </p>
      </div>

      <div className="space-y-16">
        {/* Neural Data Collection */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            Neural Data Collection
          </h2>
          <div className="space-y-4 text-sm opacity-70 leading-relaxed">
            <p>
              We collect minimal data necessary for scent analysis and
              personalization. This includes your responses to our neural
              mapping questionnaire, purchase history, and interaction patterns
              with our platform.
            </p>
            <p>
              Your olfactory DNA profile is encrypted using military-grade
              protocols and stored in secure, distributed systems. We never sell
              or share your personal scent data with third parties.
            </p>
          </div>
        </section>

        {/* How We Use Your Data */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            How We Use Your Data
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Personalization Engine</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Your neural profile helps us recommend fragrances that align
                with your unique olfactory preferences and psychological
                markers.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Product Development</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Anonymized data helps us develop new fragrances and improve our
                neural mapping algorithms for better accuracy.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Communication</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                We use your contact information to send order updates, exclusive
                drops notifications, and personalized recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Security</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                We monitor for fraudulent activity and maintain the security of
                your account and payment information.
              </p>
            </div>
          </div>
        </section>

        {/* Your Neural Rights */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            Your Neural Rights
          </h2>
          <div className="space-y-4 text-sm opacity-70 leading-relaxed">
            <p>
              <strong>Access:</strong> Request a complete copy of your neural
              profile and all associated data.
            </p>
            <p>
              <strong>Correction:</strong> Update or correct any inaccurate
              information in your profile.
            </p>
            <p>
              <strong>Deletion:</strong> Request complete removal of your data
              from our systems (right to be forgotten).
            </p>
            <p>
              <strong>Portability:</strong> Export your scent preferences and
              neural data in a machine-readable format.
            </p>
            <p>
              <strong>Objection:</strong> Opt out of data processing for
              marketing or research purposes.
            </p>
          </div>
        </section>

        {/* Privacy Inquiries */}
        <section className="bg-white/[0.03] p-12 rounded-[2rem] border border-white/10 text-center">
          <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
            Privacy Inquiries
          </h2>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            For any privacy-related questions or to exercise your rights,
            contact our Data Protection Officer.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Email:</strong> privacy@soprofumes.com
            </p>
            <p>
              <strong>Response Time:</strong> Within 72 hours
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
