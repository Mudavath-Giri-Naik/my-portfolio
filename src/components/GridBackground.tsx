import { cn } from "@/lib/utils";

export const GridBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      {/* Grid pattern - adapts to dark/light mode - behind everything */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 dark:opacity-20" />
      {/* Content on top */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

