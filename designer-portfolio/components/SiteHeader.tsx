"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Главная" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/resume", label: "Резюме" },
  { href: "/services", label: "Услуги" },
  { href: "/collaboration", label: "Сотрудничество" },
  { href: "/payment", label: "Оплата" },
  { href: "/contact", label: "Контакты" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="group">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
            Portfolio wireframe
          </p>
          <p className="font-display text-xl font-medium text-foreground group-hover:text-accent">
            [ Имя дизайнера ]
          </p>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                pathname === link.href
                  ? "font-medium text-accent"
                  : "text-muted hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
