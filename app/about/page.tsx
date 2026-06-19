import Link from "next/link";

const values = [
  { title: "Innovation", description: "Continuous improvement and cutting-edge solutions" },
  { title: "Quality", description: "Rigorous standards and international compliance" },
  { title: "Integrity", description: "Honest dealings and transparent partnerships" },
  { title: "Customer Focus", description: "Your success is our priority" },
  { title: "Sustainability", description: "Environmentally responsible operations" },
  { title: "Excellence", description: "Commitment to the highest standards" }
];

export default function About() {
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
          <h1 className="text-4xl font-bold md:text-5xl mb-4">About Infinite Biomedical Solutions</h1>
          <p className="text-xl text-blue-100">
            Improving health through continuous innovation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0f3a70] mb-6">Who We Are</h2>
            <p className="text-lg text-slate-700 mb-4">
              Infinite Biomedical Solutions is a Zimbabwean medical equipment manufacturer and supplier committed to improving healthcare through continuous innovation. Founded in 2024, we specialize in developing, supplying, and supporting medical equipment that enhances healthcare delivery and patient outcomes.
            </p>
            <p className="text-lg text-slate-700">
              Our commitment to engineering excellence, quality assurance, and customer satisfaction has positioned us as a trusted partner for healthcare institutions throughout Zimbabwe.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-8">
              <h3 className="text-2xl font-bold text-[#0f3a70] mb-4">Our Mission</h3>
              <p className="text-slate-700">
                To provide innovative, reliable, and affordable medical equipment solutions that improve healthcare outcomes across Africa.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-8">
              <h3 className="text-2xl font-bold text-[#0f3a70] mb-4">Our Vision</h3>
              <p className="text-slate-700">
                To become Zimbabwe's leading medical equipment manufacturer and supplier, recognized for innovation, quality, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#0f3a70] mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0f3a70] mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#0f3a70] mb-12">Why Healthcare Facilities Trust Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                Quality Assured Equipment
              </h3>
              <p className="text-slate-600">Internationally compliant medical devices with rigorous quality control at every stage.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                Local Manufacturing
              </h3>
              <p className="text-slate-600">Zimbabwean-made hospital furniture engineered specifically for African healthcare needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                After-Sales Support
              </h3>
              <p className="text-slate-600">Responsive technical support, training, and preventive maintenance programs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                Fast Delivery
              </h3>
              <p className="text-slate-600">Reliable logistics nationwide — from Harare to every province across Zimbabwe.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                Competitive Pricing
              </h3>
              <p className="text-slate-600">Direct supply and local production keep costs low without compromising quality.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">✓</span>
                Innovative Solutions
              </h3>
              <p className="text-slate-600">Smart healthcare technologies designed to improve patient outcomes and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0f3a70] to-[#0c2f5e] px-6 py-16 text-white md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join hundreds of healthcare facilities across Zimbabwe that trust Infinite Biomedical Solutions.
          </p>
          <Link
            href="mailto:infinitebiomedsolutions@gmail.com"
            className="inline-block rounded-lg bg-white px-8 py-3 text-[#0f3a70] font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us Today
          </Link>
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
                <li><a href="mailto:infinitebiomedsolutions@gmail.com" className="text-slate-600 hover:text-slate-900">Request a Quote</a></li>
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
