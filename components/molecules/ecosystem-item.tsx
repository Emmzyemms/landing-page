import { IconBox } from "@/components/atoms/icon-box";

interface EcosystemItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function EcosystemItem({ icon, title, description }: EcosystemItemProps) {
  return (
    <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 group border-l-2 border-transparent hover:border-primary/40">
      <IconBox
        icon={icon}
        size="lg"
        className="shrink-0 group-hover:scale-110 transition-transform duration-300"
      />
      <div>
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
