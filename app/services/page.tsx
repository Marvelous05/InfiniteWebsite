import Link from "next/link";

const services = [
  {
    title: "Medical Equipment Supply",
    description: "Reliable sourcing and supply of high-quality medical equipment from trusted global manufacturers."
  },
  {
    title: "Equipment Installation",
    description: "Professional installation and setup services with certified biomedical engineers."
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs that maximize uptime and extend equipment life."
  },
  {
    title: "Repairs & Technical Support",
    description: "Fast-response technical support and on-site repairs across Zimbabwe."
  },
  {
    title: "Biomedical Consulting",
    description: "Expert guidance on equipment procurement and healthcare facility planning."
  },
  {
    title: "Equipment Training",
    description: "Hands-on training for clinical and engineering staff on safe equipment use."
  }
];

export default function Services() {
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
          <h1 className="text-4xl font-bold md:text-5xl mb-4">End-to-End Biomedical Engineering Services</h1>
          <p className="text-xl text-blue-100">
            From procurement to lifetime support — we keep your equipment performing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-2xl font-bold text-[#0f3a70]">→</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg bg-gradient-to-r from-[#0f3a70] to-[#0c2f5e] p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to improve your healthcare operations?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Let our biomedical engineering experts help you find the right solutions.
            </p>
            <Link
              href="mailto:infinitebiomedsolutions@gmail.com"
              className="inline-block rounded-lg bg-white px-8 py-3 text-[#0f3a70] font-semibold hover:bg-blue-50 transition-colors"
            >
              Get a Service Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0f3a70]">Why Partner With Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="text-4xl text-blue-600 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Certified Biomedical Engineers</h3>
                <p className="text-slate-600">Professional team with expertise in all equipment types</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl text-blue-600 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Nationwide Coverage</h3>
                <p className="text-slate-600">Reliable service and support across all Zimbabwe provinces</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl text-blue-600 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Fast Response Times</h3>
                <p className="text-slate-600">Quick turnaround on repairs and technical issues</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl text-blue-600 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Comprehensive Training</h3>
                <p className="text-slate-600">Hands-on training programs for your entire team</p>
              </div>
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
