import { cn } from "@/lib/utils";

interface StatusDotProps {
  animated?: boolean;
  color?: "green" | "blue" | "primary";
  size?: "sm" | "md";
}

const colorClasses = {
  green: "bg-green-400",
  blue: "bg-blue-400",
  primary: "bg-primary",
};

const sizeClasses = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
};

export function StatusDot({
  animated = false,
  color = "primary",
  size = "md",
}: StatusDotProps) {
  if (animated) {
    return (
      <span className={cn("relative flex", sizeClasses[size])}>
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            colorClasses[color]
          )}
        ></span>
        <span
          className={cn(
            "relative inline-flex rounded-full",
            sizeClasses[size],
            colorClasses[color]
          )}
        ></span>
      </span>
    );
  }

  return (
    <div className={cn("rounded-full", sizeClasses[size], colorClasses[color])} />
  );
}
