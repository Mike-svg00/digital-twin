import { PageIntro } from "@/components/PageIntro";
import { WireframeBlock } from "@/components/WireframeBlock";

export default function CollaborationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Раздел 4 · Сотрудничество"
        title="Бренды и коллаборации"
        description="Отдельный поток для студий, брендов одежды и совместных проектов."
      />

      <div className="space-y-8">
        <WireframeBlock
          step="4.1"
          title="Что предлагаете брендам"
          purpose="Капсулы, линейки, принты, консультации — список форматов работы."
          minHeight="md"
        >
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-muted">
            {[
              "Разработка мини-коллекции",
              "Принты и графика на изделия",
              "Стилизация lookbook",
              "Консультация по линейке",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-line px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </WireframeBlock>

        <WireframeBlock
          step="4.2"
          title="Кейсы для брендов"
          purpose="Подборка работ с акцентом на B2B — или те же проекты с другим описанием."
          minHeight="lg"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-video rounded-xl border border-line bg-white/40" />
            ))}
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="4.3"
          title="Бриф для бренда"
          purpose="Форма или чек-лист: компания, тип проекта, бюджет, срок, референсы."
          hints={["Позже — поля формы", "Ссылка на контакты / email"]}
          minHeight="md"
        >
          <div className="space-y-3 text-sm">
            {["Название бренда", "Тип проекта", "Сроки", "Ссылки на референсы"].map(
              (field) => (
                <div
                  key={field}
                  className="rounded-lg border border-dashed border-wire/60 px-4 py-3 text-muted"
                >
                  [ Поле: {field} ]
                </div>
              ),
            )}
          </div>
        </WireframeBlock>
      </div>
    </>
  );
}
