import type { Metadata } from "next";
import { Barlow_Condensed, Lora, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/animations/Preloader";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import SocialStrip from "@/components/layout/SocialStrip";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SchemaOrg from "@/components/seo/SchemaOrg";
import "./globals.css";

// Fallback to importing via standard CSS because next/font/google didn't recognize Big_Shoulders_Display
const bigShouldersVariable = "font-display"; 

const barlowCondensed = Barlow_Condensed({
  variable: "--font-headline",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: 'swap',
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-meta",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://180tattoostudio.in"),
  title: {
    default: "180 Tattoo Studio — Best Tattoo Studio in Chennai (Eldams Rd & G.N. Chetty Rd)",
    template: "%s | 180 Tattoo Studio Chennai"
  },
  description: "Experience world-class artistry and medical-grade hygiene at 180 Tattoo Studio. Specializing in realism, fine-line, and custom portraits. Locations in Eldams Rd & G.N. Chetty Rd, Teynampet, Chennai. Est. 2019.",
  keywords: ["Tattoo Studio Chennai", "Best Tattoo Artist Chennai", "Teynampet Tattoo", "Anna Flyover Tattoo", "Realism Tattoo India", "Portrait Tattoo Artist", "Hygienic Tattoo Studio Chennai", "180 Tattoo"],
  authors: [{ name: "180 Tattoo Studio" }],
  openGraph: {
    title: "180 Tattoo Studio — The Standard of Artistry in Chennai",
    description: "Premium custom tattoos in Teynampet. Over 1000+ satisfied clients since 2019.",
    url: "https://180tattoostudio.in",
    siteName: "180 Tattoo Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "180 Tattoo Studio — Chennai's Premium Tattoo Destination",
    description: "Medical-grade hygiene and world-class realism artistry in Chennai.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShouldersVariable} ${barlowCondensed.variable} ${lora.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400..900&display=swap" rel="stylesheet" />
        <SchemaOrg />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScrolling>
          <Preloader />
          <CustomCursor />
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <WhatsAppButton />
          <SocialStrip />
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
