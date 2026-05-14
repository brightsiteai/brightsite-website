const TermsAndConditionsPage = () => {
  return (
    <div className="pt-40 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-10">Terms & Conditions</h1>
        <p className="text-white/70 mb-6">Last updated: May 11, 2024</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Intellectual Property</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            All content and materials available on our website and through our services are the property of Brightsite or its licensors and are protected by applicable intellectual property laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. User Conduct</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            You agree not to engage in any activity that interferes with or disrupts our services or the servers and networks used to provide our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitation of Liability</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            In no event shall Brightsite be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Governing Law</h2>
          <p className="text-white/60 leading-relaxed">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
