import Link from "next/link";
import { WireframeBlock } from "@/components/WireframeBlock";

const pages = [
  {
    href: "/portfolio",
    title: "Портфолио",
    note: "Работы, кейсы, фильтры",
  },
  {
    href: "/resume",
    title: "Резюме",
    note: "О себе, навыки, PDF",
  },
  {
    href: "/services",
    title: "Услуги",
    note: "Заказ для людей, пакеты",
  },
  {
    href: "/collaboration",
    title: "Сотрудничество",
    note: "Бренды, коллаборации",
  },
  {
    href: "/payment",
    title: "Оплата",
    note: "Способы оплаты, условия",
  },
  {
    href: "/contact",
    title: "Контакты",
    note: "Форма, мессенджеры",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <WireframeBlock
        step="01"
        title="Главный экран (Hero)"
        purpose="Первое впечатление: кто дизайнер, чем занимается, куда вести посетителя."
        minHeight="xl"
        hints={[
          "Крупное имя или псевдоним",
          "Короткая специализация: одежда, бренды, custom",
          "Две кнопки: «Смотреть работы» и «Обсудить проект»",
          "Фоновое фото или коллаж (позже)",
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-background/80 px-5 py-8 text-center text-sm text-muted">
            [ Фото / визуал Hero ]
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="font-display text-3xl text-foreground">[ Имя ]</p>
            <p className="text-muted">[ Одна строка о стиле и фокусе ]</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-line px-4 py-2 text-xs">
                CTA → Портфолио
              </span>
              <span className="rounded-full border border-accent/40 bg-accent-soft/50 px-4 py-2 text-xs text-accent">
                CTA → Контакты
              </span>
            </div>
          </div>
        </div>
      </WireframeBlock>

      <WireframeBlock
        step="02"
        title="Кратко о направлениях"
        purpose="Сразу показать два пути: работа с брендами и заказы от частных клиентов."
        hints={[
          "Две карточки с коротким текстом",
          "Ссылки на «Сотрудничество» и «Услуги»",
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {["Для брендов", "Для частных клиентов"].map((label) => (
            <div
              key={label}
              className="rounded-xl border border-line bg-background/60 p-5 text-sm text-muted"
            >
              <p className="font-medium text-foreground">{label}</p>
              <p className="mt-2">[ 2–3 предложения — позже ]</p>
            </div>
          ))}
        </div>
      </WireframeBlock>

      <WireframeBlock
        step="03"
        title="Превью портфолио на главной"
        purpose="3–6 лучших работ со ссылкой на полный раздел."
        minHeight="lg"
        hints={["Сетка 2×3 или горизонтальная лента", "Подпись: тип проекта"]}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-lg border border-line bg-accent-soft/40"
            />
          ))}
        </div>
      </WireframeBlock>

      <WireframeBlock
        step="04"
        title="Карта разделов сайта"
        purpose="Навигация по всем страницам каркаса — дорабатываем по одному пункту."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {pages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="flex flex-col rounded-xl border border-line bg-background/70 px-4 py-3 transition hover:border-accent/40 hover:bg-white"
              >
                <span className="font-medium text-foreground">{page.title}</span>
                <span className="text-sm text-muted">{page.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </WireframeBlock>
    </div>
  );
}
