import React from 'react';

export function Terms() {
  return (
    <div className="min-h-screen pt-24 premium-white-gradient page-transition-enter page-transition-enter-active">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif text-forest mb-8">Terms & Conditions</h1>
          
          <div className="space-y-8 text-white">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Appointment Booking & Cancellation</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Appointments must be cancelled at least 24 hours in advance</li>
                <li>Same-day cancellations may incur a cancellation fee</li>
                <li>No-shows will be charged the full treatment fee</li>
                <li>We reserve the right to reschedule appointments due to unforeseen circumstances</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is due at the time of service</li>
                <li>We accept cash, card payments, and bank transfers</li>
                <li>Treatment packages must be paid in full unless payment plan is arranged</li>
                <li>Refunds are only available in exceptional circumstances</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Treatment Consent</h2>
              <p className="text-lg leading-relaxed mb-4">
                By booking a treatment, you consent to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Receiving the chosen aesthetic treatment</li>
                <li>Patch testing when required</li>
                <li>Following pre and post-treatment care instructions</li>
                <li>Potential side effects as discussed during consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Client Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate medical history and current medications</li>
                <li>Arrive on time for appointments</li>
                <li>Follow all aftercare instructions</li>
                <li>Report any adverse reactions immediately</li>
                <li>Maintain realistic expectations about treatment outcomes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-lg leading-relaxed">
                While we take every precaution to ensure safe and effective treatments, 
                individual results may vary. We are not liable for any adverse reactions 
                that occur despite proper consultation and patch testing, or for 
                unsatisfactory results that fall within normal treatment parameters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Privacy & Confidentiality</h2>
              <p className="text-lg leading-relaxed">
                All client information is kept strictly confidential in accordance with 
                our Privacy Policy and GDPR regulations. Photos may only be taken with 
                explicit written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4">Contact Information</h2>
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