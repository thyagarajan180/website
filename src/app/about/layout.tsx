import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Studio & Artists",
  description: "Learn about the 180 Standard. Founded by Thiyagu and Aishwarya, we are dedicated to medical-grade hygiene and world-class tattoo artistry in Chennai.",
  openGraph: {
    title: "Our Story | 180 Tattoo Studio",
    description: "The journey of Chennai's most hygienic and artistic tattoo studio.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
