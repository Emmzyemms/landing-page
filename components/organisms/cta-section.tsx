import { Button } from "@/components/atoms/button";
import { GradientText } from "@/components/atoms/gradient-text";
import { Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative z-10 py-28">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="px-6 py-20 text-center md:px-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Early Access
          </div>
          <h2 className="mb-6 text-balance text-4xl font-bold md:text-6xl text-glow">
            Ready to meet your <GradientText>financial agent?</GradientText>
          </h2>
          <p className="mx-auto max-w-xl mb-10 text-pretty text-lg text-muted-foreground">
            Join 2,000+ early adopters on the waitlist. Be among the first to
            let an AI agent handle your cross-border payments.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="text-base gap-2 rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-sm"
            >
              <Sparkles className="h-5 w-5" />
              Join the Waitlist
            </Button>
            <a href="#features">
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent gap-2 rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                Explore Features
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
