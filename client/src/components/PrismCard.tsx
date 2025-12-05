import React from "react";
import { cn } from "@/lib/utils";

interface PrismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glass?: boolean;
}

export function PrismCard({ children, className, hoverEffect = true, glass = false, ...props }: PrismCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300",
        hoverEffect && "hover:shadow-md hover:-translate-y-1 hover:border-primary/30",
        glass && "bg-white/80 backdrop-blur-md border-white/50 shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Prism Effect Border Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
