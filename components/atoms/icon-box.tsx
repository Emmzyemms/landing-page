import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

export function IconBox({ icon, size = "md", className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl icon-gradient border border-primary/20",
        sizeClasses[size],
        className
      )}
    >
      {icon}
    </div>
  );
}
