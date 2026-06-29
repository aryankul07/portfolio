import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Kulshreshtha | Future Business Leader & Entrepreneur",
  description:
    "Aryan Kulshreshtha — Incoming BBA student at TAPMI Bengaluru, entrepreneur, community builder, and future business leader. Building meaningful ventures and communities.",
  keywords: [
    "Aryan Kulshreshtha",
    "TAPMI Bengaluru",
    "BBA student",
    "entrepreneur",
    "community builder",
    "business leader",
    "finance",
  ],
  authors: [{ name: "Aryan Kulshreshtha" }],
  creator: "Aryan Kulshreshtha",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aryankulshreshtha.com",
    title: "Aryan Kulshreshtha | Future Business Leader & Entrepreneur",
    description:
      "Incoming BBA student at TAPMI Bengaluru. Entrepreneur, community builder, finance enthusiast.",
    siteName: "Aryan Kulshreshtha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Kulshreshtha | Future Business Leader",
    description:
      "Incoming BBA student at TAPMI Bengaluru. Entrepreneur, community builder, finance enthusiast.",
    creator: "@aryankulsh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-950 text-slate-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
