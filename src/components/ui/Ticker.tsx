"use client";

import { ReactNode } from "react";

interface TickerProps {
  children: ReactNode;
  direction?: "forward" | "reverse";
  speed?: number;
  className?: string;
}

export default function Ticker({ 
  children, 
  direction = "forward", 
  speed = 20,
  className = ""
}: TickerProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <div 
        className={`flex min-w-full shrink-0 ${
          direction === "forward" 
            ? "animate-[ticker_var(--speed)_linear_infinite]" 
            : "animate-[ticker-reverse_var(--speed)_linear_infinite]"
        }`}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">
          {children}
        </div>
        <div className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
