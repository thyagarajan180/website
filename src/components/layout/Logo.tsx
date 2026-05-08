import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "nav" | "footer";
}

export default function Logo({ className = "", variant = "nav" }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`group flex items-center transition-all duration-300 hover:opacity-80 ${className}`}
      aria-label="180 Tattoo Studio"
    >
      <div className={`relative ${variant === "nav" ? "h-32 w-32 md:h-44 md:w-44" : "h-48 w-48 md:h-64 md:w-64"} flex items-center`}>
        <Image
          src="/logo-v6.png"
          alt="180 Tattoo Studio Logo"
          fill
          className="object-contain"
          priority
          sizes={variant === "nav" ? "300px" : "300px"}
        />
      </div>
    </Link>
  );
}
