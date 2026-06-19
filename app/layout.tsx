import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinite Biomedical Solutions | Medical Equipment Supplier Zimbabwe",
  description:
    "Infinite Biomedical Solutions supplies medical equipment, hospital furniture, and biomedical technology across Zimbabwe with trusted after-sales support.",
  openGraph: {
    title: "Infinite Biomedical Solutions",
    description:
      "Suppliers of medical equipment, hospital furniture, and biomedical solutions in Zimbabwe.",
    images: [
      {
        url: "https://infinitebiomedsol-com.lovable.app/assets/hero-medical-qiMVYMF1.jpg",
        width: 1200,
        height: 630,
        alt: "Infinite Biomedical Solutions Healthcare Equipment"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
