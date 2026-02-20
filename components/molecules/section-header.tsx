import { SectionBadge } from "@/components/atoms/section-badge";

interface SectionHeaderProps {
  badge: {
    icon: React.ReactNode;
    text: string;
  };
  title: React.ReactNode;
  description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <SectionBadge icon={badge.icon} className="mb-4">
        {badge.text}
      </SectionBadge>
      <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl text-glow">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
