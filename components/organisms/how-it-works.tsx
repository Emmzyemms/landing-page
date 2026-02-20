import { SectionHeader } from "@/components/molecules/section-header";
import { StepCard } from "@/components/molecules/step-card";
import { GradientText } from "@/components/atoms/gradient-text";
import { Zap, MessageSquareText, Brain, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="container mx-auto px-4 py-28 relative z-10 section-glow"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge={{ icon: <Zap className="h-4 w-4" />, text: "How It Works" }}
          title={
            <>
              From words to <GradientText>money moved</GradientText>
            </>
          }
          description="Three steps. Your agent handles the complexity in between."
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-10 md:gap-0 items-start relative">
          {/* Step 1 — You request */}
          <StepCard
            icon={<MessageSquareText className="h-7 w-7 text-primary" />}
            title="You request"
            description="Say what you need in plain language, text or voice. No menus, no forms."
          />

          {/* Line 1→2 */}
          <div className="hidden md:flex items-center pt-7 px-4">
            <div className="w-24 h-[2px] bg-primary/30 rounded-full" />
          </div>

          {/* Step 2 — Agent understands */}
          <StepCard
            icon={<Brain className="h-7 w-7 text-primary" />}
            title="Agent understands intent"
            description="Your agent parses your request, figures out exactly what you mean, and prepares the transaction."
          />

          {/* Line 2→3 */}
          <div className="hidden md:flex items-center pt-7 px-4">
            <div className="w-24 h-[2px] bg-gradient-to-r from-primary/30 to-green-400/30 rounded-full" />
          </div>

          {/* Step 3 — You approve */}
          <StepCard
            icon={<CheckCircle2 className="h-7 w-7 text-green-400" />}
            title="You approve, it executes"
            description="Review the details, tap to confirm. Your agent executes and funds arrive in seconds."
            iconBorderColor="border-green-500/40"
          />
        </div>
      </div>
    </section>
  );
}
