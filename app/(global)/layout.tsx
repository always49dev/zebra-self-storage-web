import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Zebra Self Storage | Secure & Flexible Storage Solutions",
    template: "%s | Zebra Self Storage"
  },
  description: "Zebra Self Storage offers secure, flexible, and affordable storage for personal, business, student, and vehicle needs across the UK. Book online in 60 seconds.",
  keywords: ["self storage", "zebra storage", "personal storage", "business storage", "secure storage", "UK storage"],
  openGraph: {
    title: "Zebra Self Storage",
    description: "Secure & Flexible Storage Solutions",
    url: "https://zebrastorage.co.uk",
    siteName: "Zebra Self Storage",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
