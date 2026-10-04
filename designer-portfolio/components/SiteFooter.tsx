import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line/70 bg-accent-soft/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-foreground">[ Имя дизайнера ]</p>
          <p className="mt-1 text-sm text-muted">
            Дизайн одежды · бренды · индивидуальные заказы
          </p>
        </div>
        <p className="text-xs text-muted">
          Каркас сайта — контент добавим по шагам.{" "}
          <Link href="/contact" className="underline underline-offset-2 hover:text-foreground">
            Контакты
          </Link>
        </p>
      </div>
    </footer>
  );
}
