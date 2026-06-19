import Link from "next/link";

const productCategories = [
  {
    title: "Hospital Furniture",
    items: [
      "Medical Beds",
      "Stretchers",
      "Examination Couches",
      "Medical Chairs",
      "Bedside Cabinets",
      "Overbed Tables",
      "Bedside Screens",
      "Mattresses"
    ]
  },
  {
    title: "Patient Care Equipment",
    items: [
      "IV Poles",
      "Patient Monitors",
      "Infusion Pumps",
      "Oxygen Concentrators",
      "Suction Machines",
      "Pulse Oximeters",
      "Blood Pressure Monitors"
    ]
  },
  {
    title: "Surgical Equipment",
    items: [
      "Operating Tables",
      "Operating Lamps",
      "Medical Pendants",
      "Anesthesia Machines",
      "Ventilators",
      "Diathermy Machines"
    ]
  },
  {
    title: "Diagnostic Equipment",
    items: [
      "ECG Machines",
      "Ultrasound Machines",
      "Defibrillators",
      "X-Ray Machines",
      "Mammography Systems",
      "C-Arm Machines"
    ]
  },
  {
    title: "Laboratory Equipment",
    items: [
      "Hematology Analyzers",
      "Blood Freezers",
      "Water Treatment Plants",
      "Autoclaves"
    ]
  },
  {
    title: "Specialized Equipment",
    items: [
      "Infant Incubators",
      "Obstetric Beds",
      "Dental Chairs",
      "Rehabilitation Equipment"
    ]
  }
];

export default function Products() {
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
          <h1 className="text-4xl font-bold md:text-5xl mb-4">Complete Range of Medical Equipment</h1>
          <p className="text-xl text-blue-100">
            From hospital furniture to advanced diagnostic systems — quality solutions for every department.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category.title} className="rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold mb-6 text-[#0f3a70]">{category.title}</h2>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="text-slate-700 flex items-start">
                      <span className="mr-3 text-blue-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center border border-blue-200">
            <h3 className="text-2xl font-bold text-[#0f3a70] mb-4">Can't find what you're looking for?</h3>
            <p className="text-slate-700 mb-6">
              We source and customize equipment to your facility's needs.
            </p>
            <Link
              href="mailto:infinitebiomedsolutions@gmail.com"
              className="inline-block rounded-lg bg-[#0f3a70] px-8 py-3 text-white font-semibold hover:bg-[#0c2f5e] transition-colors"
            >
              Talk to Sales
            </Link>
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
