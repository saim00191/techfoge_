import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });



// app/layout.tsx or app/metadata.ts

<meta name="google-site-verification" content="zrLe5IoW0G6SBGWdVLRnIMt1NnYFGQIvTHwsF5UB-g0" />

export const metadata: Metadata = {
  
  title: {
    default: "Tech Foge - AI-Powered Software & Web Solutions",
    template: "%s | TechFoge",
  },
  description:
    "TechFoge provides cutting-edge software development, AI solutions, mobile and web apps, IT support, and creative digital services to businesses worldwide.",
  keywords: [
    "Tech Foge",
    "AI Solutions",
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "IT Support",
    "Graphic Design",
    "Video Editing",
    "WordPress Development",
    "Digital Agency Pakistan",
  ],
  authors: [{ name: "TechFoge", url: "https://techfoge.com" }],
  creator: "TechFoge",
  publisher: "TechFoge",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1 as any,
      "max-image-preview": "large",
      "max-video-preview": -1 as any,
    },
  },
  openGraph: {
    title: "TechFoge - AI-Powered Software & Web Solutions",
    description:
     "Follow TechFoge on Facebook, Instagram, LinkedIn, Threads, and TikTok for real-time updates, tech insights, and AI-powered innovation. We're shaping the digital future.",
    url: "https://techfoge.com",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://techfoge.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechFoge - Digital Transformation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Foge - Innovative Tech Solutions",
    description:
      "Discover innovative tech services from TechFoge: AI apps, web & mobile development, IT support, and more.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["https://techfoge.com/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://techfoge.com",
    languages: {
      "en-US": "https://techfoge.com",
    },
  },
    metadataBase: new URL("https://techfoge.com"),
  other: {
    "facebook:page": "https://facebook.com/TechFoge",
    "instagram:profile": "https://instagram.com/tech_foge",
    "linkedin:profile": "https://linkedin.com/company/tech-foge",
    "tiktok:profile": "https://www.tiktok.com/@tech_foge",
    "threads:profile": "https://www.threads.net/@tech_foge",
    "whatsapp": "https://wa.me/923253848828", 
  },
};


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechFoge",
              url: "https://techfoge.com",
              logo: "https://techfoge.com/logo.png", 
              sameAs: [
                "https://twitter.com/Tech_Foge",
                "https://facebook.com/TechFoge",
                "https://instagram.com/tech_foge",
                "https://wa.me/923253848828",
                "https://www.threads.net/@tech_foge",
                "https://linkedin.com/company/techfoge",
                "https://tiktok.com/@tech_foge",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-325-3848828",
                contactType: "Customer Support",
              },
            }),
          }}
        />
      </head>
      <body className={` ${poppins.className}`}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
