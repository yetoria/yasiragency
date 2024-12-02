import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      <div
        className={cn("flex min-w-full shrink-0 items-center gap-4", {
          "animate-[marquee_var(--duration)_linear_infinite]": !vertical,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        })}
      >
        {children}
      </div>
      <div
        className={cn("flex min-w-full shrink-0 items-center gap-4", {
          "animate-[marquee_var(--duration)_linear_infinite]": !vertical,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        })}
      >
        {children}
      </div>
    </div>
  );
}
