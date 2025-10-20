import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elevate25.vercel.app'),
  title: "ELEVATE25 - Shaping the Future | HR Conclave",
  description: "Join us on 20th November 2025 for ELEVATE25, the ultimate HR Conclave. Shaping the Future: Leading through the Human–AI Nexus. Stay tuned for insights on AI, talent management, and the future of work.",
  icons: {
    icon: "/hr.png",
    shortcut: "/hr.png",
    apple: "/hr.png",
  },
  openGraph: {
    title: "ELEVATE25 - Shaping the Future | HR Conclave",
    description: "Join us on 20th November 2025 for ELEVATE25, the ultimate HR Conclave. Shaping the Future: Leading through the Human–AI Nexus.",
    images: [
      {
        url: "/hr.png",
        width: 1200,
        height: 630,
        alt: "ELEVATE25 HR Conclave Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATE25 - Shaping the Future | HR Conclave",
    description: "Join us on 20th November 2025 for ELEVATE25, the ultimate HR Conclave. Shaping the Future: Leading through the Human–AI Nexus.",
    images: ["/hr.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}
        style={{ overflowX: 'hidden' }}
      >
        {/* Content wrapper */}
        <div className="relative z-20">
          {children}
        </div>
      </body>
    </html>
  );
}
