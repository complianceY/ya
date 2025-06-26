import React from 'react';

const Header = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <img src="/New_Logo_MK.png" alt="MediKloud Logo" className="h-9 transition-all duration-500 group-hover:scale-110" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
          <a href="/privacy-policy" className="text-gray-700 hover:text-blue-600 font-medium transition">Privacy Policy</a>
          <a href="/terms" className="text-gray-700 hover:text-blue-600 font-medium transition">Terms</a>
          <a href="/return-policy" className="text-blue-600 font-semibold underline">Return Policy</a>
        </div>
      </div>
    </div>
  </nav>
);

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-700">{title}</h2>
    {children}
  </section>
);

const ReturnPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800 pb-16">
    <Header />
    <div className="max-w-4xl mx-auto pt-32 px-4 sm:px-8">
      <div className="bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Return Policy</h1>
        <p className="mb-2 font-semibold">Last updated: June 26, 2025</p>
        <div className="prose prose-blue max-w-none">
          <p>Thank you for your purchase. We hope you are happy with your order. However, if you are not completely satisfied for any reason, you may return the item to us for a refund, store credit, or exchange. Please review the guidelines below for more details on our return process.</p>
          <Section title="Returns">
            <ul>
              <li>All returns must be postmarked within two (2) days of the purchase date.</li>
              <li>Returned items must be in new and unused condition, with all original tags, labels, and packaging intact.</li>
            </ul>
          </Section>
          <Section title="Return Process">
            <p>To initiate a return, please email our customer service team at <a href="mailto:hello@medikloud.com" className="text-blue-600 underline">hello@medikloud.com</a> to obtain a Return Merchandise Authorization (RMA) number.</p>
            <p>After receiving your RMA number:</p>
            <ol className="list-decimal pl-6">
              <li>Place the item securely in its original packaging.</li>
              <li>Include proof of purchase and the RMA number.</li>
              <li>Ship the return to the following address:</li>
            </ol>
            <address className="not-italic my-4">
              Medikloud<br/>
              Attn: Returns<br/>
              RMA #<br/>
              Startup Village, Chandrampalem,<br/>
              Pedda Rushikonda, Madhurawada,<br/>
              Visakhapatnam, Andhra Pradesh – 530048<br/>
              India
            </address>
            <ul>
              <li>Please note: You are responsible for all return shipping charges.</li>
              <li>We strongly recommend using a trackable shipping method.</li>
            </ul>
          </Section>
          <Section title="Refunds">
            <p>After we receive and inspect your returned item, we will process your refund or exchange. Please allow up to two (2) business days from receipt of the return for processing.</p>
            <ul>
              <li>Refunds may take 1–2 billing cycles to appear on your credit card statement, depending on your payment provider.</li>
              <li>You will receive an email confirmation once your return has been processed.</li>
            </ul>
          </Section>
          <Section title="Exceptions">
            <p>The following items cannot be returned or exchanged:</p>
            <ul>
              <li>Any item explicitly marked as non-returnable on the product information page.</li>
            </ul>
            <p>If you receive a defective or damaged item, please contact us immediately at the email or phone number below to arrange a refund or replacement.</p>
          </Section>
          <Section title="Questions">
            <p>If you have any questions or need further assistance regarding our return policy, please contact us:</p>
            <ul>
              <li>📞 +91 77026 70993</li>
              <li>📧 <a href="mailto:hello@medikloud.com" className="text-blue-600 underline">hello@medikloud.com</a></li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  </div>
);

export default ReturnPolicy;
