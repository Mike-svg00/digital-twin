import { PageIntro } from "@/components/PageIntro";
import { WireframeBlock } from "@/components/WireframeBlock";

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Раздел 3 · Услуги"
        title="Заказы для людей"
        description="Индивидуальный дизайн одежды: от идеи до эскизов и сопровождения пошива (структура — сейчас)."
      />

      <div className="space-y-8">
        <WireframeBlock
          step="3.1"
          title="Карточки услуг"
          purpose="Понятные пакеты: что входит, для кого, ориентир по срокам."
          minHeight="lg"
          hints={["3–4 карточки", "Цена «от …» или «по запросу» — позже"]}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {["Эскиз + концепт", "Разработка модели", "Капсула образов"].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-line bg-white/50 p-5 text-sm"
              >
                <p className="font-medium text-foreground">{t}</p>
                <p className="mt-2 text-muted">[ Описание пакета ]</p>
                <p className="mt-4 text-xs text-accent">[ Цена — позже ]</p>
              </div>
            ))}
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="3.2"
          title="Как проходит заказ"
          purpose="Этапы для клиента: бриф → эскизы → правки → финал."
          hints={["4–5 шагов с иконками или номерами"]}
        >
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Бриф", "Эскизы", "Правки", "Финал"].map((step, i) => (
              <li
                key={step}
                className="rounded-lg border border-line bg-background/80 p-4 text-sm"
              >
                <span className="text-xs font-semibold text-accent">0{i + 1}</span>
                <p className="mt-1 font-medium">{step}</p>
                <p className="mt-1 text-xs text-muted">[ Текст этапа ]</p>
              </li>
            ))}
          </ol>
        </WireframeBlock>

        <WireframeBlock
          step="3.3"
          title="FAQ для клиентов"
          purpose="Сроки, правки, материалы, как начать — снимаем типовые вопросы."
          minHeight="md"
        >
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-line px-4 py-3 text-sm text-muted">
                [ Вопрос {i} ] — [ Ответ позже ]
              </div>
            ))}
          </div>
        </WireframeBlock>
      </div>
    </>
  );
}
