import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center gap-8 bg-background rounded-full px-6 py-3 shadow-lg border border-border">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-foreground">Giri Naik</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
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
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Sun className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
