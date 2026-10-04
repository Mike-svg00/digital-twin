import { PageIntro } from "@/components/PageIntro";
import { WireframeBlock } from "@/components/WireframeBlock";

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Раздел 1 · Портфолио"
        title="Работы и проекты"
        description="Здесь будут кейсы: от эскиза до готовой вещи или концепта для бренда. Сейчас — только структура блоков."
      />

      <div className="space-y-8">
        <WireframeBlock
          step="1.1"
          title="Фильтры категорий"
          purpose="Быстро показать тип работ: бренд, personal, эскизы, готовая одежда."
          hints={["Кнопки-чипы", "Позже — реальные теги проектов"]}
        >
          <div className="flex flex-wrap gap-2">
            {["Все", "Бренды", "На заказ", "Эскизы", "Капсулы"].map((f) => (
              <span
                key={f}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {f}
              </span>
            ))}
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="1.2"
          title="Сетка проектов"
          purpose="Карточки работ: обложка, название, краткая роль."
          minHeight="xl"
          hints={["Клик → страница проекта", "6–12 карточек на старте"]}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-[4/5] rounded-xl border border-line bg-white/50" />
                <p className="text-sm font-medium">[ Название проекта {i + 1} ]</p>
                <p className="text-xs text-muted">[ Бренд / личный заказ ]</p>
              </div>
            ))}
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="1.3"
          title="Страница одного проекта (шаблон)"
          purpose="Детальный кейс: задача, процесс, результат, галерея."
          minHeight="lg"
          hints={[
            "Блок «Задача»",
            "Скетчи / процесс",
            "Финальные фото",
            "Ваша роль и срок",
          ]}
        >
          <div className="space-y-3 text-sm text-muted">
            <div className="h-24 rounded-lg border border-line bg-background/80" />
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="h-32 rounded-lg border border-line bg-accent-soft/30" />
              <div className="h-32 rounded-lg border border-line bg-accent-soft/30" />
              <div className="h-32 rounded-lg border border-line bg-accent-soft/30" />
            </div>
          </div>
        </WireframeBlock>
      </div>
    </>
  );
}
