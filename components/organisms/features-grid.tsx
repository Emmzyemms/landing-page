import { Card } from "@/components/atoms/card";
import { SectionHeader } from "@/components/molecules/section-header";
import { GradientText } from "@/components/atoms/gradient-text";
import { IconBox } from "@/components/atoms/icon-box";
import { Sparkles, Globe, Shield, Brain } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="container mx-auto px-4 py-24 relative z-10 section-glow"
    >
      <SectionHeader
        badge={{ icon: <Sparkles className="h-4 w-4" />, text: "Features" }}
        title={
          <>
            Your agent works <GradientText>while you don&apos;t</GradientText>
          </>
        }
        description="An intelligent agent that understands, plans, and executes your financial tasks autonomously"
      />

      <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
        {/* Hero card — AI Understanding, spans 2 cols × 2 rows */}
        <Card className="glass-card gradient-border border-0 p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between rounded-3xl group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <IconBox
              icon={<Brain className="h-7 w-7 text-primary" />}
              size="lg"
              className="mb-6 group-hover:scale-110 group-hover:glow-sm transition-all duration-300"
            />
            <h3 className="mb-3 text-2xl md:text-3xl font-bold">
              Understands &amp; Learns
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Say what you need naturally — your agent parses intent, asks
              smart clarifying questions, and remembers your patterns over
              time. Frequent contacts, preferred currencies, past
              transactions — it all makes your next request faster.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20 shrink-0">
                <Sparkles className="h-4 w-4 text-green-500" />
              </div>
              <span className="text-sm">&quot;Send rent to landlord&quot;</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 shrink-0">
                <Sparkles className="h-4 w-4 text-blue-500" />
              </div>
              <span className="text-sm">&quot;Best rate for USDC&quot;</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 shrink-0">
                <Sparkles className="h-4 w-4 text-purple-500" />
              </div>
              <span className="text-sm">&quot;Spending this week?&quot;</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20 shrink-0">
                <Sparkles className="h-4 w-4 text-orange-500" />
              </div>
              <span className="text-sm">&quot;Split dinner, 3 friends&quot;</span>
            </div>
          </div>
        </Card>

        {/* Right top — Stellar-Powered Speed, cyan accent */}
        <Card className="glass-card gradient-border border-0 p-6 rounded-3xl group hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
          <div>
            <IconBox
              icon={<Globe className="h-5 w-5 text-primary" />}
              size="md"
              className="mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mb-2 text-lg font-bold">
              Stellar-Powered Speed
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Optimal path on Stellar&apos;s network — fastest route, lowest
              fee, best exchange rate. Under 5 seconds, less than $0.01.
            </p>
          </div>
        </Card>

        {/* Right bottom — End-to-End Protection, green accent */}
        <Card className="glass-card gradient-border border-0 p-6 rounded-3xl group hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0" />
          <div>
            <IconBox
              icon={<Shield className="h-5 w-5 text-primary" />}
              size="md"
              className="mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mb-2 text-lg font-bold">
              End-to-End Protection
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Biometric authentication, fully encrypted keys, and an agent
              that verifies every transaction before it moves a single cent.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
