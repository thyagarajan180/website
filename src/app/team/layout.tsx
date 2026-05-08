import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Expert Tattoo Artists",
  description: "Get to know the award-winning artists at 180 Studio. Specialized in realism, fine-line, and custom portraits. The best tattoo talent in Chennai.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
