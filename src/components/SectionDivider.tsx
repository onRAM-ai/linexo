import { cn } from "@/lib/utils";

type DividerVariant = "wave" | "curve" | "slant" | "organic";

interface SectionDividerProps {
  variant?: DividerVariant;
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

const paths: Record<DividerVariant, string> = {
  wave: "M0,40 C150,80 350,0 500,40 C650,80 800,10 1000,50 C1100,70 1150,30 1200,40 L1200,120 L0,120 Z",
  curve: "M0,80 C300,20 600,100 900,40 C1050,10 1150,60 1200,50 L1200,120 L0,120 Z",
  slant: "M0,90 L1200,20 L1200,120 L0,120 Z",
  organic: "M0,60 C100,90 200,30 350,60 C500,90 650,20 800,55 C950,90 1100,35 1200,60 L1200,120 L0,120 Z",
};

const SectionDivider = ({
  variant = "wave",
  from = "fill-background",
  to,
  flip = false,
  className,
}: SectionDividerProps) => (
  <div
    className={cn(
      "pointer-events-none relative z-20 -mb-px overflow-hidden leading-[0]",
      flip && "rotate-180",
      className
    )}
    aria-hidden="true"
  >
    <svg
      className={cn("relative block w-full h-12 md:h-20", from)}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path d={paths[variant]} />
    </svg>
    {to && (
      <svg
        className={cn("absolute bottom-0 left-0 block w-full h-10 md:h-16 opacity-60", to)}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d={paths[variant === "wave" ? "curve" : "wave"]} />
      </svg>
    )}
  </div>
);

export default SectionDivider;
