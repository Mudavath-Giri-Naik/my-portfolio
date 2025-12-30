import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center gap-8 bg-background rounded-full px-6 py-3 shadow-lg border border-border">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-foreground">dreamflow</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            How it works
          </a>
          <a href="#enterprise" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Enterprise
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Pricing
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Sun className="w-5 h-5 text-muted-foreground" />
          </button>
          <Button variant="outline" className="rounded-full px-5 h-9 text-sm font-medium">
            Login
          </Button>
          <Button className="rounded-full px-5 h-9 text-sm font-medium bg-foreground text-background hover:bg-foreground/90">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
