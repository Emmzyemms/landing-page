import { cn } from "@/lib/utils";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBorderColor?: string;
}

export function StepCard({
  icon,
  title,
  description,
  iconBorderColor = "border-primary/40",
}: StepCardProps) {
  return (
    <div className="text-center group relative">
      <div
        className={cn(
          "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-background border-2 group-hover:scale-110 transition-all duration-300 relative z-10",
          iconBorderColor,
          `group-hover:${iconBorderColor.replace("/40", "/70")}`
        )}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed text-balance">
        {description}
      </p>
    </div>
  );
}
