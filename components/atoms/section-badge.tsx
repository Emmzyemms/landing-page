import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ icon, children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary",
        className
      )}
    >
      {icon}
      {children}
    </div>
  );
}
