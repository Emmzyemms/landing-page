import { cn } from "@/lib/utils";

interface GlowOrbProps {
  size: number;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  blur?: number;
  className?: string;
}

export function GlowOrb({
  size,
  color,
  position,
  blur = 100,
  className,
}: GlowOrbProps) {
  return (
    <div
      className={cn("absolute rounded-full pointer-events-none", className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
        ...position,
      }}
    />
  );
}
