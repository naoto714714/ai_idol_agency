import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Story", path: "/story" },
    { label: "Members", path: "/members" },
    { label: "SNS", path: "/sns" },
    { label: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">PRISM BEAT</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group py-2",
                  location.startsWith(item.path) ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-full bg-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                    location.startsWith(item.path) && "scale-x-100",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-base font-medium py-2 px-4 rounded-md transition-colors",
                  location.startsWith(item.path) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PRISM BEAT
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs font-serif leading-relaxed">
              AIがプロデュースする、物語を持ったアイドル事務所。
              <br />
              彼女たちの成長と日常を、リアルタイムでお届けします。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm">Contents</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/story" className="hover:text-primary transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-primary transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/sns" className="hover:text-primary transition-colors">
                  SNS Log
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-primary transition-colors">
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Project
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>© 2025 AI Idol Agency Project. All Rights Reserved.</p>
          <p className="mt-2 opacity-60">Powered by AI Technology</p>
        </div>
      </footer>
    </div>
  );
}
