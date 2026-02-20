import { GlowOrb } from "@/components/atoms/glow-orb";
import { Navbar } from "@/components/organisms/navbar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dot grid pattern overlay for depth */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />

      {/* Decorative background orbs — larger, more varied */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlowOrb
          size={500}
          color="oklch(0.55 0.25 290 / 0.15)"
          position={{ top: "-160px", right: "-160px" }}
          blur={100}
          className="float"
        />
        <GlowOrb
          size={400}
          color="oklch(0.45 0.2 240 / 0.12)"
          position={{ top: "25%", left: "-240px" }}
          blur={100}
          className="float-delayed"
        />
        <GlowOrb
          size={350}
          color="oklch(0.5 0.18 330 / 0.1)"
          position={{ bottom: "33%", right: "20%" }}
          blur={100}
          className="float"
        />
        <GlowOrb
          size={300}
          color="oklch(0.55 0.25 290 / 0.08)"
          position={{ top: "66%", left: "33%" }}
          blur={80}
          className="float-delayed"
        />
      </div>

      {/* Modern Navbar */}
      <Navbar />

      {/* Main content */}
      {children}
    </div>
  );
}
