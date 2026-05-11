

const TermsConditions = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-black italic uppercase mb-12">Terms & <span className="gradient-text">Conditions</span></h1>
        
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">1. Terms of Use</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Brightsite's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mt-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Brightsite's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">3. Disclaimer</h2>
            <p>
              The materials on Brightsite's website are provided "as is". Brightsite makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">4. Limitations</h2>
            <p>
              In no event shall Brightsite or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Brightsite's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic uppercase">5. Revisions and Errata</h2>
            <p>
              The materials appearing on Brightsite's website could include technical, typographical, or photographic errors. Brightsite does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
