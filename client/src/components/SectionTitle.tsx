import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ title, subtitle, className, align = "center" }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-2",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className,
      )}
    >
      <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 opacity-70" />
      </h2>
      {subtitle && <p className="font-serif text-lg text-muted-foreground max-w-2xl mt-2">{subtitle}</p>}
    </div>
  );
}
