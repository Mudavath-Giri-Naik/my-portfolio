import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "light";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 md:px-6">
      {/* Name - Left Corner */}
      <span className="font-semibold text-foreground text-sm md:text-base">Giri Naik</span>

      {/* Navigation Links - Center (Desktop) */}
      <nav className="hidden md:flex items-center gap-6 bg-background rounded-full px-6 py-3 shadow-lg border border-border">
        <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Projects
        </a>
        <a href="#open-source" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Open Source
        </a>
        <a href="#blogs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Blogs
        </a>
        <a href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Certifications
        </a>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button 
          className="p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {currentTheme === "dark" ? (
            <Sun className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-4 right-4 mt-2 flex flex-col items-center gap-4 bg-background rounded-2xl px-6 py-4 shadow-lg border border-border md:hidden animate-fade-in">
          <a 
            href="#projects" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#open-source" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Open Source
          </a>
          <a 
            href="#blogs" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </a>
          <a 
            href="#certifications" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Certifications
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
