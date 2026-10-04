import { PageIntro } from "@/components/PageIntro";
import { WireframeBlock } from "@/components/WireframeBlock";

export default function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Раздел 2 · Резюме"
        title="Обо мне и опыт"
        description="Биография, образование, навыки и ссылка на PDF — для брендов и работодателей."
      />

      <div className="space-y-8">
        <WireframeBlock
          step="2.1"
          title="Фото + короткое био"
          purpose="Лицо и 2–3 абзаца: кто вы, чем горите, с кем хотите работать."
          minHeight="lg"
        >
          <div className="grid gap-6 sm:grid-cols-[140px_1fr]">
            <div className="aspect-square rounded-2xl border border-line bg-accent-soft/40" />
            <div className="space-y-2 text-sm text-muted">
              <p>[ Абзац 1 — история и фокус ]</p>
              <p>[ Абзац 2 — сильные стороны ]</p>
            </div>
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="2.2"
          title="Навыки и инструменты"
          purpose="Список компетенций: эскиз, лекала, CLO, Adobe, работа с тканью и т.д."
          hints={["Можно группами: дизайн / production / soft skills"]}
        >
          <div className="flex flex-wrap gap-2">
            {["Эскиз", "Мудборды", "CLO 3D", "Illustrator", "Лекала", "Стилизация"].map(
              (s) => (
                <span
                  key={s}
                  className="rounded-md border border-line px-3 py-1.5 text-xs text-muted"
                >
                  {s}
                </span>
              ),
            )}
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="2.3"
          title="Образование и опыт"
          purpose="Хронология: учёба, стажировки, фриланс, конкурсы."
          minHeight="md"
        >
          <ul className="space-y-4 text-sm">
            {[1, 2, 3].map((i) => (
              <li key={i} className="border-l-2 border-accent/30 pl-4 text-muted">
                <p className="font-medium text-foreground">[ Год — место / роль {i} ]</p>
                <p className="mt-1">[ Описание — позже ]</p>
              </li>
            ))}
          </ul>
        </WireframeBlock>

        <WireframeBlock
          step="2.4"
          title="Скачать резюме (PDF)"
          purpose="Кнопка для HR и брендов — файл обновляем отдельным шагом."
          hints={["Кнопка «Скачать PDF»", "Опционально — EN версия"]}
        >
          <div className="inline-flex rounded-full border border-accent/50 bg-accent-soft/40 px-6 py-3 text-sm font-medium text-accent">
            [ Кнопка: Скачать резюме PDF ]
          </div>
        </WireframeBlock>
      </div>
    </>
  );
}
