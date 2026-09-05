'use client';

import React, { useState } from 'react';

export function HomeContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    subject: 'Select a subject',
    message: '',
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-gray-100 mt-12" aria-labelledby="contact-heading">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-700 py-8 text-center">
        <h2 id="contact-heading" className="text-3xl font-bold text-white">Get in Touch</h2>
        <p className="text-sm mt-2 text-white/90">We're here to help you optimize your advertising strategy</p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-6 text-sm">
            Have questions about programmatic advertising, rich media, CTV or DOOH? Talk with our team about your campaign or monetization goals.
          </p>

          <ul className="space-y-5 text-sm text-gray-800">
            <li className="flex items-start gap-3">
              <svg className="text-blue-600 mt-1 flex-shrink-0" fill="currentColor" height="1.2em" viewBox="0 0 384 512" width="1.2em">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
              <div>
                <strong>Our Location</strong>
                <br />UK Office: 2 Frederick St, London WC1X 0ND, United Kingdom.
                <br />Registered Address: 10th Floor, Darussalam Orchid, 14 Purana Paltan, Dhaka-1000.
                <br />Middle Address: STITBD, Lake Circus Road, Level-2, 25/2, Kalabagan, Dhanmondi, Dhaka-1205
              </div>
            </li>

            <li className="flex items-start gap-3">
              <svg className="text-blue-600 mt-1 flex-shrink-0" fill="currentColor" height="1.2em" viewBox="0 0 512 512" width="1.2em">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <div>
                <strong>Phone Number</strong>
                <br />+88 01713–426386
                <br />+44 7361 623134
              </div>
            </li>

            <li className="flex items-start gap-3">
              <svg className="text-blue-600 mt-1 flex-shrink-0" fill="currentColor" height="1.2em" viewBox="0 0 512 512" width="1.2em">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
              <div>
                <strong>Email Address</strong>
                <br />
                <a className="text-blue-700 underline" href="mailto:contact@boostrava.com">contact@boostrava.com</a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <svg className="text-blue-600 mt-1 flex-shrink-0" fill="currentColor" height="1.2em" viewBox="0 0 512 512" width="1.2em">
                <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
              </svg>
              <div>
                <strong>Working Hours</strong>
                <br />Sun – Sat: 10:00 AM – 7:00 PM
              </div>
            </li>
          </ul>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Send Us a Message</h3>
          {submitted ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
              <h4 className="font-bold text-lg mb-2">Thank you!</h4>
              <p className="text-sm">Your message has been received. Our AdTech team will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                aria-label="Full name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Full Name"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              <input
                aria-label="Email address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                aria-label="Company name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Company Name"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
              <select
                aria-label="Contact subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="Select a subject" disabled>Select a subject</option>
                <option value="Advertise">Advertise with Boost RAVA</option>
                <option value="Publisher">Monetize as a Publisher</option>
                <option value="CTV/DOOH">CTV / DOOH Inquiry</option>
                <option value="Support">Support & Technical Inquiry</option>
              </select>
              <textarea
                aria-label="Message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  required
                  className="mt-0.5"
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                />
                <span>
                  I agree to the <a className="text-blue-600 underline" href="/privacy-policy/">Privacy Policy</a> and consent to being contacted.
                </span>
              </label>
              <button
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2.5 rounded-md font-medium text-white text-sm shadow-md"
                type="submit"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
