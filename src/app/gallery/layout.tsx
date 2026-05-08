import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Portfolio & Gallery",
  description: "Browse 1000+ custom tattoo masterpieces by 180 Studio. From hyper-realism to delicate fine-line work in Chennai.",
  openGraph: {
    title: "Portfolio | 180 Tattoo Studio Chennai",
    description: "Explore our collection of realism, portrait, and fine-line tattoos.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
