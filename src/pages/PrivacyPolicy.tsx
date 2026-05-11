

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-black italic uppercase mb-12">Privacy <span className="gradient-text">Policy</span></h1>
        
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">1. Introduction</h2>
            <p>
              At Brightsite, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li>Usage Data includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
