import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-40 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-10">Privacy Policy</h1>
        <p className="text-white/70 mb-6">Last updated: May 11, 2024</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Brightsite ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Information Collection</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Use of Information</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our rights and the rights of others.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            We implement reasonable security measures to protect the security of your information. However, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Us</h2>
          <p className="text-white/60 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at privacy@brightsiteagency.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
