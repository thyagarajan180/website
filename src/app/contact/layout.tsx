import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Locations (Eldams Rd & G.N. Chetty Rd)",
  description: "Book your tattoo appointment at our Teynampet locations. View maps, contact details, and FAQs for 180 Tattoo Studio Chennai.",
  openGraph: {
    title: "Contact Us | 180 Tattoo Studio",
    description: "Ready for your next piece? Find us at Eldams Rd or G.N. Chetty Rd.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
