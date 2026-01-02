import { cn } from "@/lib/utils";

export const DotBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Dots pattern - adapts to dark/light mode - behind everything */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--muted-foreground))_1px,transparent_0)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40 dark:opacity-20" />
      {/* Content on top */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

