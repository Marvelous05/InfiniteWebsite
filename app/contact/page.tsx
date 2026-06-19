"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    facility: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzgqeqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", facility: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-6 bg-[#0f3a70] px-6 py-4 backdrop-blur-xl shadow-md md:px-12 lg:px-24">
        <Link href="/" className="text-xl font-bold text-white">
          Infinite Biomedical
        </Link>
        <nav className="hidden flex-wrap gap-6 md:flex">
          <Link href="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-blue-200">
            Products
          </Link>
          <Link href="/services" className="text-white hover:text-blue-200">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0f3a70] via-[#0c2f5e] to-[#081f45] px-6 py-16 text-white md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">Contact Infinite Biomedical Solutions</h1>
          <p className="text-xl text-blue-100">
            Get in touch with our team for customized healthcare equipment solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f3a70] mb-8">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                  <p className="font-semibold">Thank you! Your message has been sent successfully.</p>
                  <p>We'll get back to you soon.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#0f3a70] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#0f3a70] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#0f3a70] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Facility Name</label>
                  <input
                    type="text"
                    name="facility"
                    value={formData.facility}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#0f3a70] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Hospital, clinic, or organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#0f3a70] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Tell us about your equipment needs or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#0f3a70] px-6 py-3 text-white font-semibold hover:bg-[#0c2f5e] transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f3a70] mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
                  <a href="tel:+263786819657" className="text-[#0f3a70] hover:underline text-lg font-semibold">
                    +263 78 681 9657
                  </a>
                  <p className="text-slate-600 mt-2">Available Monday to Friday, 8am to 5pm (EAT)</p>
                </div>

                {/* Email */}
                <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                  <a href="mailto:infinitebiomedsolutions@gmail.com" className="text-[#0f3a70] hover:underline text-lg font-semibold break-all">
                    infinitebiomedsolutions@gmail.com
                  </a>
                  <p className="text-slate-600 mt-2">We typically respond within 24 hours</p>
                </div>

                {/* WhatsApp */}
                <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp</h3>
                  <a href="https://wa.me/263786819657" target="_blank" rel="noopener noreferrer" className="text-[#0f3a70] hover:underline text-lg font-semibold inline-flex items-center gap-2">
                    Chat with us
                    <span>→</span>
                  </a>
                  <p className="text-slate-600 mt-2">Quick response for urgent inquiries</p>
                </div>

                {/* Address */}
                <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Address</h3>
                  <p className="text-slate-600">
                    Harare, Zimbabwe
                  </p>
                  <p className="text-slate-600 mt-2">Nationwide service coverage</p>
                </div>

                {/* Quick Links */}
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-bold text-[#0f3a70] mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a href="/products" className="block text-slate-700 hover:text-[#0f3a70]">
                      → View Our Products
                    </a>
                    <a href="/services" className="block text-slate-700 hover:text-[#0f3a70]">
                      → Our Services
                    </a>
                    <a href="/about" className="block text-slate-700 hover:text-[#0f3a70]">
                      → About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0f3a70] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="rounded-lg bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">How quickly will you respond to my inquiry?</h3>
              <p className="text-slate-600">We typically respond to all inquiries within 24 hours during business days. For urgent matters, contact us via WhatsApp.</p>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Can you provide custom equipment quotes?</h3>
              <p className="text-slate-600">Yes! We provide customized quotes based on your facility's specific needs. Send us your requirements and we'll prepare a detailed proposal.</p>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Do you deliver nationwide?</h3>
              <p className="text-slate-600">Yes, we have reliable logistics and can deliver to healthcare facilities across all provinces in Zimbabwe.</p>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">What after-sales support do you offer?</h3>
              <p className="text-slate-600">We provide installation, training, preventive maintenance programs, technical support, and repairs to keep your equipment performing optimally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-slate-600 hover:text-slate-900">About Us</Link></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900">Manufacturing</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900">Innovation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-slate-600 hover:text-slate-900">Products</Link></li>
                <li><Link href="/services" className="text-slate-600 hover:text-slate-900">Services</Link></li>
                <li><Link href="/contact" className="text-slate-600 hover:text-slate-900">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="tel:+263786819657" className="text-slate-600 hover:text-slate-900">+263 78 681 9657</a></li>
                <li><a href="mailto:infinitebiomedsolutions@gmail.com" className="text-slate-600 hover:text-slate-900">infinitebiomedsolutions@gmail.com</a></li>
                <li className="text-slate-600">Harare, Zimbabwe</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-600">
            <p>© 2026 Infinite Biomedical Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
