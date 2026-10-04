import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type WireframeBlockProps = {
  id?: string;
  step?: string;
  title: string;
  purpose: string;
  hints?: string[];
  className?: string;
  minHeight?: "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
};

const heights = {
  sm: "min-h-[140px]",
  md: "min-h-[220px]",
  lg: "min-h-[320px]",
  xl: "min-h-[420px]",
};

export function WireframeBlock({
  id,
  step,
  title,
  purpose,
  hints,
  className,
  minHeight = "md",
  children,
}: WireframeBlockProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative rounded-2xl border border-dashed border-wire/80 bg-white/40 p-6 sm:p-8",
        heights[minHeight],
        className,
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line/80 pb-4">
        <div>
          {step ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Блок {step}
            </p>
          ) : null}
          <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>
        <span className="rounded-full border border-line bg-background px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted">
          Заготовка
        </span>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{purpose}</p>
      {hints && hints.length > 0 ? (
        <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
          {hints.map((hint) => (
            <li key={hint} className="flex gap-2">
              <span className="text-accent">—</span>
              <span>{hint}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
