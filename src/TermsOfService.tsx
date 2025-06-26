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
          <a href="/terms" className="text-blue-600 font-semibold underline">Terms</a>
        </div>
      </div>
    </div>
  </nav>
);

const TermsOfService = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800 pb-16">
    <Header />
    <div className="max-w-4xl mx-auto pt-32 px-4 sm:px-8">
      <div className="bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Terms of Use</h1>
        <p className="mb-2 font-semibold">Last updated June 26, 2025</p>
        <div className="prose prose-blue max-w-none">
          <h2>Agreement to Our Legal Terms</h2>
          <p>We are Klinikmed Technologies Private Limited, doing business as Medikloud ("Company", "we", "us", or "our"), a company registered in India at:<br/>11-1-18b, Putchala Street, Vizianagaram, Andhra Pradesh 535002.</p>
          <p>We operate:</p>
          <ul>
            <li>The website: <a href="https://joyful-tapioca-aa63bc.netlify.app" className="text-blue-600 underline">https://joyful-tapioca-aa63bc.netlify.app</a> (the “Site”)</li>
            <li>The mobile application: Medikloud-mobile (the “App”)</li>
            <li>Any other related products and services that refer or link to these legal terms (the “Legal Terms”)</li>
          </ul>
          <p>(Collectively, the “Services”)</p>
          <p>You can contact us by:</p>
          <ul>
            <li>Phone: (+91) 7702670993</li>
            <li>Email: <a href="mailto:hello@medikloud.coom" className="text-blue-600 underline">hello@medikloud.coom</a></li>
            <li>Mail: Startup Village, Chandrampalem, Pedda Rushikonda, Madhurawada, Visakhapatnam, Andhra Pradesh 530048, India</li>
          </ul>
          <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Klinikmed Technologies Private Limited, concerning your access to and use of the Services. By accessing the Services, you acknowledge that you have read, understood, and agreed to be bound by all of these Legal Terms.</p>
          <p className="font-bold text-red-600">IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
          <h2>Table of Contents</h2>
          <ol className="list-decimal pl-6">
            <li>Our Services</li>
            <li>Intellectual Property Rights</li>
            <li>User Representations</li>
            <li>User Registration</li>
            <li>Products</li>
            <li>Purchases and Payment</li>
            <li>Subscriptions</li>
            <li>Return/Refunds Policy</li>
            <li>Software</li>
            <li>Prohibited Activities</li>
            <li>User Generated Contributions</li>
            <li>Contribution Licence</li>
            <li>Mobile Application Licence</li>
            <li>Social Media</li>
            <li>Third-Party Websites and Content</li>
            <li>Services Management</li>
            <li>Privacy Policy</li>
            <li>Term and Termination</li>
            <li>Modifications and Interruptions</li>
            <li>Governing Law</li>
            <li>Dispute Resolution</li>
            <li>Corrections</li>
            <li>Disclaimer</li>
            <li>Limitations of Liability</li>
            <li>Indemnification</li>
            <li>User Data</li>
            <li>Electronic Communications, Transactions, and Signatures</li>
            <li>SMS Text Messaging</li>
            <li>Miscellaneous</li>
            <li>Contact Us</li>
          </ol>
          <h2>1. Our Services</h2>
          <p>We provide a platform that allows users to access and use various health-related services, including but not limited to telemedicine consultations, health tracking, and management of health records (the "Services").</p>
          <p>To use our Services, you must register for an account and provide certain information about yourself. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
          <h2>2. Intellectual Property Rights</h2>
          <p>The Services and their original content, features, and functionality are owned by Klinikmed Technologies Private Limited and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          <p>These Terms do not grant you any rights to use the Company’s name or any of the Company’s trademarks, logos, domain names, and other distinctive brand features.</p>
          <h2>3. User Representations</h2>
          <p>By using the Services, you represent and warrant that:</p>
          <ul>
            <li>You are at least 18 years of age or the age of majority in your jurisdiction, and you have the legal capacity to enter into these Terms.</li>
            <li>You will comply with all applicable laws, regulations, and ordinances in connection with your use of the Services.</li>
            <li>You have not been previously suspended or removed from the Services.</li>
            <li>Your use of the Services will be in compliance with these Terms and all applicable laws, rules, and regulations.</li>
          </ul>
          <h2>4. User Registration</h2>
          <p>To access certain features of the Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.</p>
          <p>If you become aware of any unauthorized use of your account or any other breach of security, you agree to notify us immediately. We will not be liable for any loss or damage arising from your failure to comply with this section.</p>
          <h2>5. Products</h2>
          <p>We may offer products for sale through the Services. All descriptions, images, references, features, content, specifications, products, and prices of products described or depicted on the Services are subject to change at any time without notice.</p>
          <p>We reserve the right to discontinue any product at any time. The inclusion of any product on the Services at a particular time does not imply or warrant that the product will be available at any time. We are not liable to you or any third party by reason of our withdrawing any product from the Services.</p>
          <h2>6. Purchases and Payment</h2>
          <p>All purchases made through the Services are subject to our payment processing terms and conditions. You agree to provide accurate and complete payment information and to pay all fees and charges incurred in connection with your purchases.</p>
          <p>We reserve the right to change our prices and billing methods at any time. If we do, we will provide you with notice of such changes. Your continued use of the Services after the posting of changes constitutes your binding acceptance of such changes.</p>
          <h2>7. Subscriptions</h2>
          <p>Some parts of the Services may be available only on a subscription basis. By subscribing to the Services, you agree to pay the applicable subscription fees and to comply with any additional terms and conditions associated with your subscription.</p>
          <p>We reserve the right to modify or discontinue, temporarily or permanently, any subscription-based service with or without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
          <h2>8. Return/Refunds Policy</h2>
          <p>We want you to be satisfied with your purchase. If you are not satisfied, please contact us within 7 days of receiving your order to request a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
          <p>Some products may be non-refundable or have different return conditions as specified at the time of purchase. We reserve the right to refuse returns or exchanges that do not meet our return policy requirements.</p>
          <h2>9. Software</h2>
          <p>Some parts of the Services may require you to download software or applications. We grant you a limited, non-exclusive, non-transferable license to use the software solely in connection with the Services.</p>
          <p>You may not: (a) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt any software; (b) use the software for any purpose that is illegal or prohibited by these Terms; (c) distribute, sell, lease, or sublicense the software to any third party.</p>
          <h2>10. Prohibited Activities</h2>
          <p>You agree not to engage in any of the following prohibited activities:</p>
          <ul>
            <li>Using the Services for any illegal purpose or in violation of any local, state, national, or international law.</li>
            <li>Attempting to gain unauthorized access to the Services, other user accounts, or computer systems or networks connected to the Services.</li>
            <li>Interfering with or disrupting the security, integrity, or performance of the Services.</li>
            <li>Transmitting any viruses, malware, or other harmful computer code through the Services.</li>
            <li>Engaging in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm Medikloud or users of the Services or expose them to liability.</li>
          </ul>
          <h2>11. User Generated Contributions</h2>
          <p>The Services may contain features that allow users to submit, post, or otherwise make available content, including but not limited to text, images, audio, and video ("User Generated Contributions").</p>
          <p>By making any User Generated Contributions, you grant us a worldwide, non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, publish, distribute, and display such User Generated Contributions in any media.</p>
          <p>You represent and warrant that: (a) you own or control all rights in and to the User Generated Contributions and have the right to grant the license granted above; (b) all of your User Generated Contributions do and will comply with these Terms.</p>
          <h2>12. Contribution Licence</h2>
          <p>By submitting any User Generated Contributions, you grant us a license to use, reproduce, modify, publish, and distribute such contributions as part of the Services.</p>
          <p>You also grant each user of the Services a non-exclusive, royalty-free, perpetual license to access your User Generated Contributions through the Services, and to use, reproduce, modify, publish, and distribute such contributions for personal, non-commercial purposes.</p>
          <h2>13. Mobile Application Licence</h2>
          <p>If you access the Services through a mobile application, we grant you a limited, non-exclusive, non-transferable license to download, install, and use the mobile application on a compatible mobile device owned or controlled by you.</p>
          <p>You may not: (a) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the mobile application; (b) use the mobile application for any purpose that is illegal or prohibited by these Terms; (c) distribute, sell, lease, or sublicense the mobile application to any third party.</p>
          <h2>14. Social Media</h2>
          <p>We may use social media platforms to promote our Services and engage with users. Your use of social media in connection with the Services is subject to these Terms and any additional terms and conditions applicable to the social media platform.</p>
          <p>We do not endorse, and are not responsible or liable for, any third-party content, advertising, products, or other materials on or available from such platforms.</p>
          <h2>15. Third-Party Websites and Content</h2>
          <p>The Services may contain links to third-party websites or resources. We are not responsible or liable for the availability or accuracy of such websites or resources, or for the content, products, or services available on or through such websites or resources.</p>
          <p>Links to such websites or resources do not imply any endorsement by Medikloud of such websites or resources or the content, products, or services available on or through such websites or resources.</p>
          <h2>16. Services Management</h2>
          <p>We reserve the right, but not the obligation, to monitor, review, and remove or disable access to any User Generated Contributions or other content that we consider violates these Terms or is otherwise harmful or objectionable.</p>
          <p>We also reserve the right to manage, regulate, modify, or eliminate any aspect of the Services, including but not limited to the availability of any features, database, or content, at our sole discretion.</p>
          <h2>17. Privacy Policy</h2>
          <p>Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information. By using our Services, you consent to our collection and use of your information as described in the Privacy Policy.</p>
          <h2>18. Term and Termination</h2>
          <p>These Terms are effective as of the date you first access or use the Services and will remain in effect until terminated by you or us.</p>
          <p>You may terminate these Terms at any time by discontinuing your use of the Services and deleting your account, if applicable.</p>
          <p>We may terminate or suspend your access to the Services, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms.</p>
          <h2>19. Modifications and Interruptions</h2>
          <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice.</p>
          <p>We also reserve the right to interrupt or suspend all or part of the Services, or to modify, suspend, or terminate your access to the Services, for any reason, at any time, without notice.</p>
          <h2>20. Governing Law</h2>
          <p>These Terms and your use of the Services are governed by and construed in accordance with the laws of the State of [Your State], without regard to its conflict of law principles.</p>
          <p>You agree to submit to the personal jurisdiction of the state and federal courts located in [Your County/City, Your State] for the resolution of any disputes arising out of or relating to these Terms or your use of the Services.</p>
          <h2>21. Dispute Resolution</h2>
          <p>Any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be resolved by binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act, 1996.</p>
          <p>The arbitration shall be conducted in [Your City, Your State] by a single arbitrator appointed by the parties or, failing agreement, by the Indian Council of Arbitration.</p>
          <p>The language of the arbitration shall be English. The award of the arbitrator shall be final and binding on the parties.</p>
          <h2>22. Corrections</h2>
          <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information.</p>
          <p>We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information at any time without prior notice.</p>
          <h2>23. Disclaimer</h2>
          <p>The Services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
          <p>Medikloud, its subsidiaries, affiliates, and its licensors do not warrant that:</p>
          <ul>
            <li>The Services will function uninterrupted, secure, or available at any particular time or location.</li>
            <li>Any errors or defects will be corrected.</li>
            <li>The Services are free of viruses or other harmful components.</li>
            <li>Any content or information you obtain through the Services will be accurate, reliable, or suitable for your particular purpose.</li>
          </ul>
          <h2>24. Limitations of Liability</h2>
          <p>To the fullest extent permitted by applicable law, in no event shall Medikloud, its affiliates, licensors, or service providers, or their respective directors, officers, employees, agents, contractors, successors, or assigns be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your access to or use of, or inability to access or use, the Services, any content on the Services, or any services or items obtained through the Services, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
          <h2>25. Indemnification</h2>
          <p>You agree to defend, indemnify, and hold harmless Medikloud, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, agents, contractors, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, any use of the Services' content, services, and products other than as expressly authorized in these Terms or your use of any information obtained from the Services.</p>
          <h2>26. User Data</h2>
          <p>We will maintain the confidentiality of all personal information and data that you provide in connection with your use of the Services in accordance with our Privacy Policy.</p>
          <p>You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account. If you suspect any unauthorized use of your account, you must notify us immediately.</p>
          <h2>27. Electronic Communications, Transactions, and Signatures</h2>
          <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures, and other communications that we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communications be in writing.</p>
          <p>YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.</p>
          <h2>28. SMS Text Messaging</h2>
          <p>We may send you SMS text messages relating to your use of the Services, including but not limited to account verification, order updates, and promotional messages.</p>
          <p>You can opt-out of receiving SMS text messages at any time by following the instructions provided in the messages or by contacting us.</p>
          <h2>29. Miscellaneous</h2>
          <p>These Terms constitute the entire agreement between you and Medikloud regarding your use of the Services, superseding any prior agreements between you and Medikloud relating to your use of the Services.</p>
          <p>If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent possible, reflecting the original intent of the parties.</p>
          <p>The failure of Medikloud to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.</p>
          <p>For any questions about these Terms, please contact us at <a href="mailto:hello@medikloud.coom" className="text-blue-600 underline">hello@medikloud.coom</a>.</p>
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService;