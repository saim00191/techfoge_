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
       import HeroBanner from "@/components/About/HeroBanner"
import MissionVision from "@/components/About/MissionVision"
import CoreValues from "@/components/About/CoreValues"
import WhyChooseUs from "@/components/About/WhyChooseUs"
import CallToAction from "@/components/About/CallToAction"
import StatsSection from "@/components/About/StatsSection"
import GlobalFootprint from "@/components/About/GlobalFootprint"
import Script from "next/script"

export const metadata = {
  title: "About Us",
  description:
    "Learn more about TechFoge, a future-driven tech company offering AI, software, mobile, and web development services. Discover our mission, team, and values.",
  openGraph: {
    title: "About Us | TechFoge",
    description:
      "Meet the team behind TechFoge and explore our journey in building cutting-edge digital solutions with AI and modern tech stacks.",
    url: "https://techfoge.com/about",
    siteName: "TechFoge",
    images: [
      {
        url: "https://techfoge.com/og-about.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "About TechFoge Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Explore TechFoge's mission, values, and the creative minds behind your digital success.",
    images: ["https://techfoge.com/twitter-about.jpg"],
  },
  alternates: {
    canonical: "https://techfoge.com/about",
  },
}

export default function AboutTechFoge() {
  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About TechFoge",
            url: "https://techfoge.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "TechFoge",
              url: "https://techfoge.com",
              logo: "https://techfoge.com/logo.png",
              sameAs: [
                "https://www.facebook.com/TechFoge",
                "https://twitter.com/Tech_Foge",
                "https://www.instagram.com/tech_foge",
                "https://wa.me/923253848828",
                "https://www.threads.net/@tech_foge",
                "https://www.linkedin.com/company/tech-foge",
                "https://www.tiktok.com/@tech_foge"
              ],
              description:
                "TechFoge is a modern tech company offering web development, AI solutions, IT support, design, and digital transformation services.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                postalCode: "54000",
                addressCountry: "PK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-325-3848828",
                contactType: "customer support",
                availableLanguage: ["English", "Urdu"],
              },
              founder: {
                "@type": "Person",
                name: "Saim Raza",
              },
              foundingDate: "2022",
              employee: {
                "@type": "OrganizationRole",
                name: "Team of expert developers and designers",
              },
            },
          }),
        }}
      />
      <div className="py-12 bg-[#020A15] relative overflow-hidden font-['Poppins']">
        <HeroBanner />
        <MissionVision />
        <CoreValues />
        <WhyChooseUs />
        <CallToAction />
        <StatsSection />
        <GlobalFootprint />
      </div>
    </>
  )
}

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
