import { Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6">
      {/* Name - Left Corner */}
      <span className="font-semibold text-foreground">Giri Naik</span>

      {/* Navigation Links - Center */}
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

      {/* Theme Toggle - Right Corner */}
      <button className="p-2 rounded-full hover:bg-muted transition-colors">
        <Sun className="w-5 h-5 text-muted-foreground" />
      </button>
    </header>
  );
};

export default Header;
