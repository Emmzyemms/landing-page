import { FooterColumn } from "@/components/molecules/footer-column";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 backdrop-blur-sm">
      {/* Gradient divider line instead of plain border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Image
                src="/icon.svg"
                alt="IntMoney"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-base font-bold tracking-tight">
                IntMoney
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your personal AI agent for cross-border payments. Built on
              Stellar, always learning, always working for you.
            </p>
          </div>

          <FooterColumn
            title="Product"
            links={[
              { href: "#features", label: "Features" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "#", label: "Security" },
            ]}
          />

          <FooterColumn
            title="Developers"
            links={[
              { href: "#", label: "Documentation" },
              { href: "#", label: "API" },
              { href: "#", label: "GitHub" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { href: "#", label: "About" },
              { href: "#", label: "Blog" },
              { href: "#", label: "Contact" },
            ]}
          />
        </div>

        <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-transparent absolute left-0 right-0" />
          <p>
            &copy; 2025 IntMoney. Your personal AI agent for cross-border
            payments.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
