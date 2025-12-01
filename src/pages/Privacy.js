import React from "react";

const Privacy = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Privacy Policy</h1>

      {/* DATA PRIVACY */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Data Privacy & Security</h2>
        <p className="mb-3 leading-relaxed">
          We care about data privacy and security. By using the Site, you agree
          to be bound by our Privacy Policy posted on the Site, which is
          incorporated into these Terms of Use.
        </p>
        <p className="leading-relaxed">
          Please note the Site is hosted in India. If you access the Site from
          any region with laws governing personal data collection, use, or
          disclosure that differ from India’s laws, then by continuing to use
          the Site, you consent to transferring and processing your data in
          India.
        </p>
      </section>

      {/* MODIFICATIONS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Modifications and Interruptions</h2>
        <p className="mb-3 leading-relaxed">
          We reserve the right to change, modify, or remove content on the Site
          at any time without notice. We are not obligated to update any
          information on our Site.
        </p>
        <p className="mb-3 leading-relaxed">
          We may also modify or discontinue the Site or parts of it at any time
          without notice. We are not liable for any modification, price change,
          suspension, or discontinuance.
        </p>
        <p className="leading-relaxed">
          We cannot guarantee the Site will always be available. Maintenance,
          technical issues, or other problems may cause interruptions. You agree
          that we are not liable for any loss or inconvenience caused by your
          inability to use the Site during downtime.
        </p>
      </section>

      {/* OTHER T&C */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Other Terms & Conditions</h2>
        <ul className="list-disc ml-6 space-y-2 leading-relaxed">
          <li>
            Content on the website is provided strictly for knowledge purposes.
            SHREE GAJANANA ENTERPRISES LLP holds no liability for the content.
          </li>
          <li>
            The subscription provided in the application is valid for one
            academic semester only.
          </li>
        </ul>
      </section>

      {/* GOVERNING LAW */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
        <p className="leading-relaxed">
          These Terms shall be governed by the laws of India. SHREE GAJANANA
          ENTERPRISES LLP and you irrevocably consent that the courts of India
          shall have exclusive jurisdiction to resolve any dispute arising from
          these Terms.
        </p>
      </section>

      {/* DISPUTE RESOLUTION */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Dispute Resolution</h2>
        <p className="mb-3 leading-relaxed">
          You agree to submit all disputes related to these Terms or the legal
          relationship established by this Agreement to the jurisdiction of the
          courts in India.
        </p>
        <p className="leading-relaxed">
          SHREE GAJANANA ENTERPRISES LLP retains the right to bring proceedings
          in the courts of your country of residence or in the state of your
          principal place of business.
        </p>
      </section>

      {/* CORRECTIONS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Corrections</h2>
        <p className="leading-relaxed">
          The Site may contain typographical errors, inaccuracies, or omissions.
          We reserve the right to correct such information and update the Site
          at any time without prior notice.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
