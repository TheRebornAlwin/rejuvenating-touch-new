import React from 'react';

export function CookiePolicy() {
  return (
    <div className="min-h-screen pt-24 premium-white-gradient page-transition-enter page-transition-enter-active">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif text-forest mb-8">Cookie Policy</h1>
          
          <div className="space-y-8 text-white">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">What Are Cookies</h2>
              <p className="text-lg leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience and allow certain features 
                of our website to function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-lg leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable 
                    basic functionality such as page navigation and access to secure areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-lg leading-relaxed">
                    We use analytics cookies to understand how visitors interact with our website. 
                    This helps us improve our services and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-lg leading-relaxed">
                    These cookies remember your preferences and choices to provide you with 
                    a more personalized experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-lg leading-relaxed mb-4">
                We may use third-party services that place cookies on your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics for website traffic analysis</li>
                <li>Booking system providers for appointment scheduling</li>
                <li>Social media platforms for sharing content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Managing Cookies</h2>
              <p className="text-lg leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use your browser settings to block or delete cookies</li>
                <li>Set your browser to notify you when cookies are being sent</li>
                <li>Use browser extensions to manage cookie preferences</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Cookie Consent</h2>
              <p className="text-lg leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described 
                in this policy. You can withdraw your consent at any time by adjusting your 
                browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-lg leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted 
                on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 p-4 soft-creme-gradient rounded-lg">
                <p className="font-semibold">Rejuvenating Touch</p>
                <p>Email: <a href="mailto:rejuvenatingtouchacbpm@gmail.com" className="hover:text-gold transition-colors duration-300">rejuvenatingtouchacbpm@gmail.com</a></p>
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