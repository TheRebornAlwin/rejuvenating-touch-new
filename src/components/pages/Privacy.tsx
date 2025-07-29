import React from 'react';

export function Privacy() {
  return (
    <div className="min-h-screen pt-24 premium-white-gradient page-transition-enter page-transition-enter-active">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif text-forest mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-white">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Information We Collect</h2>
              <p className="text-lg leading-relaxed mb-4">
                At Rejuvenating Touch, we collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Book an appointment through our website or by phone</li>
                <li>Fill out consultation forms</li>
                <li>Sign up for our newsletter or communications</li>
                <li>Contact us for information about our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our aesthetic services</li>
                <li>Schedule and manage your appointments</li>
                <li>Communicate with you about your treatments</li>
                <li>Send you relevant information about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Information Sharing</h2>
              <p className="text-lg leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Data Security</h2>
              <p className="text-lg leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Your Rights</h2>
              <p className="text-lg leading-relaxed mb-4">
                Under GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 soft-creme-gradient rounded-lg">
                <p className="font-semibold">Rejuvenating Touch</p>
                <p>Email: rejuvenatingtouchacbpm@gmail.com</p>
                <p>Phone: 07809 259269</p>
                <p>Address: Cardiff City Centre, Cardiff, Wales</p>
              </div>
            </section>

            <p className="text-sm text-forest/70 mt-8 pt-8 border-t border-gold/20">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}