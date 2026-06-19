import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Local manufacturing", value: "Zimbabwean-made" },
  { label: "Fast delivery", value: "Nationwide" },
  { label: "Quality assured", value: "International standards" }
];

const products = [
  "IV Drip Stands",
  "Cardiac Tables",
  "Hospital Beds",
  "Stretchers",
  "Medical Trolleys",
  "Patient Monitors",
  "Infusion Pumps",
  "Oxygen Concentrators"
];

const industries = ["Hospitals", "Clinics", "Laboratories", "Private Practices", "NGOs", "Government Health Institutions"];

const testimonials = [
  {
    quote:
      "Reliable supplier with quality equipment delivered on time. Their after-sales support is excellent.",
    author: "Procurement Officer",
    location: "Private Hospital, Harare"
  },
  {
    quote:
      "Locally manufactured hospital beds at competitive prices — a real game changer for our clinic.",
    author: "Clinic Director",
    location: "Bulawayo"
  },
  {
    quote:
      "Professional team, world-class equipment, and they truly understand African healthcare needs.",
    author: "Medical Director",
    location: "NGO Health Programme"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f3a70] via-[#0c2f5e] to-[#081f45] px-6 pb-20 pt-14 text-white md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <header className="sticky top-0 z-50 mb-10 flex flex-wrap items-center justify-between gap-6 bg-[#0f3a70]/90 px-6 py-4 backdrop-blur-xl shadow-slate-950/10 shadow-lg md:px-0">
            <div>
              <div className="mb-3 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-100 shadow-lg shadow-slate-950/10">
                Zimbabwe • Est. 2024
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 p-2">
                  <Image
                    src="https://infinitebiomedsol-com.lovable.app/__l5e/assets-v1/9a568e7f-b39e-4fa8-a517-6611ab0b165b/logo.jpeg"
                    alt="Infinite Biomedical Solutions logo"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Infinite Biomedical Solutions</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Medical Equipment Supplier</p>
                </div>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-4 rounded-full bg-white px-4 py-3 text-sm text-slate-900 shadow-lg shadow-slate-950/10">
              <Link href="/products" className="transition hover:text-[#0f3a70] font-medium">Products</Link>
              <Link href="/services" className="transition hover:text-[#0f3a70] font-medium">Services</Link>
              <Link href="/about" className="transition hover:text-[#0f3a70] font-medium">About</Link>
              <Link href="/contact" className="transition hover:text-[#0f3a70] font-medium">Contact</Link>
              <Link href="/contact" className="rounded-full bg-[#0f3a70] px-5 py-2 text-white transition hover:bg-[#0c2f5e]">Request a Quote</Link>
            </nav>
          </header>

          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brandBlue-200">Trusted biomedical partner</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Leading Medical Equipment Supplier & Biomedical Solutions Provider in Zimbabwe
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Supplying and manufacturing innovative medical equipment that improves healthcare delivery, patient outcomes, and operational efficiency for hospitals,
                clinics, laboratories, and healthcare facilities across Zimbabwe.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="#contact" className="inline-flex w-full items-center justify-center rounded-full bg-brandRed-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brandRed-700/30 transition hover:bg-brandRed-500 sm:w-auto">
                  Request a Quote
                </Link>
                <Link href="#products" className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white sm:w-auto">
                  View Products
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#081f45] p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brandBlue-500/40 to-transparent" />
              <Image
                src="https://infinitebiomedsol-com.lovable.app/assets/hero-medical-qiMVYMF1.jpg"
                alt="Modern hospital room with medical equipment"
                width={780}
                height={620}
                className="relative mx-auto block max-h-[420px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="mt-4 text-2xl font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-brandBlue-50 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-brandBlue-600">Featured Products</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Healthcare equipment we supply
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Internationally compliant medical devices, locally manufactured hospital furniture, and durable patient care solutions designed for Zimbabwean healthcare.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product} className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-slate-900/10">
                <div className="mb-5 h-14 w-14 rounded-2xl bg-brandRed-50 text-brandRed-600 flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{product}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-brandBlue-600">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by healthcare leaders across Zimbabwe
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We combine local manufacturing, responsive after-sales support, and competitive pricing to make medical equipment procurement easier for hospitals, clinics, laboratories, NGOs, and government health facilities.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">After-Sales Support</h3>
                <p className="mt-2 text-sm text-slate-600">Responsive technical support, training, and preventive maintenance.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Competitive Pricing</h3>
                <p className="mt-2 text-sm text-slate-600">Direct supply and local manufacturing reduce costs without compromising quality.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Innovative Solutions</h3>
                <p className="mt-2 text-sm text-slate-600">Smart healthcare technologies built for African healthcare needs.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Fast Delivery</h3>
                <p className="mt-2 text-sm text-slate-600">Reliable logistics across Zimbabwe, from Harare to every province.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-brandBlue-50 p-10 shadow-xl shadow-slate-900/5">
            <h3 className="text-xl font-semibold text-slate-900">What our clients say</h3>
            <div className="mt-8 space-y-6">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-base leading-7 text-slate-700">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-sm text-slate-500">
                    <span className="font-semibold text-slate-900">{testimonial.author}</span>, {testimonial.location}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0f3a70] px-6 py-16 text-white md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brandBlue-200">Need reliable medical equipment?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Contact Infinite Biomedical Solutions today for customized healthcare equipment solutions.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">
                We deliver high-quality medical equipment, local manufacturing support, and responsive service to help healthcare providers succeed.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="tel:+263786819657" className="inline-flex items-center justify-center rounded-full bg-brandRed-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandRed-500">
                  Call +263 78 681 9657
                </Link>
                <Link href="mailto:infinitebiomedsolutions@gmail.com" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
                  Email Us
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-brandBlue-200">Contact</p>
                  <p className="mt-3 text-lg font-semibold">Harare, Zimbabwe</p>
                  <p className="mt-2 text-sm text-slate-200">infinitebiomedsolutions@gmail.com</p>
                  <p className="mt-1 text-sm text-slate-200">+263 78 681 9657</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-brandBlue-200">Solutions</p>
                  <p className="mt-3 text-sm text-slate-200">Products, Services, Custom Manufacturing, After-Sales Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#051424] px-6 py-10 text-slate-400 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">© 2026 Infinite Biomedical Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <Link href="#products" className="transition hover:text-white">Products</Link>
            <Link href="#services" className="transition hover:text-white">Services</Link>
            <Link href="#contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
