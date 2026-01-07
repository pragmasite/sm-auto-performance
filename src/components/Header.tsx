import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLangs, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#a-propos", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#horaires", label: t.nav.hours },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <span
            className={`font-serif font-bold text-xl transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            SM Auto
          </span>
          <span
            className={`text-xs tracking-widest font-medium ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Selector */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-current">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-primary" : "text-white"}`} />
            <select
              value={lang}
              onChange={(e) => {
                const newPath = otherLangs.find(l => l.lang === e.target.value)?.path || "/";
                window.location.href = newPath;
              }}
              className={`text-sm font-medium bg-transparent border-0 outline-none cursor-pointer ${
                isScrolled
                  ? "text-foreground"
                  : "text-white"
              }`}
            >
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </div>

          <Button asChild size="sm">
            <a href="tel:+41791548868">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <Globe className="h-4 w-4 text-primary" />
              <select
                value={lang}
                onChange={(e) => {
                  const newPath = otherLangs.find(l => l.lang === e.target.value)?.path || "/";
                  window.location.href = newPath;
                }}
                className="text-sm font-medium bg-transparent border-0 outline-none cursor-pointer text-foreground"
              >
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
            </div>
            <Button asChild className="w-full">
              <a href="tel:+41791548868">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
