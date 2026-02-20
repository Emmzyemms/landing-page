interface FeatureChipProps {
  icon: React.ReactNode;
  text: string;
  iconColor: string;
}

export function FeatureChip({ icon, text, iconColor }: FeatureChipProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
        style={{ backgroundColor: `${iconColor}/20` }}
      >
        <div style={{ color: iconColor }}>{icon}</div>
      </div>
      <span className="text-sm">{text}</span>
    </div>
  );
}
