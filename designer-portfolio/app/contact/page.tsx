import { PageIntro } from "@/components/PageIntro";
import { WireframeBlock } from "@/components/WireframeBlock";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Раздел 6 · Контакты"
        title="Связаться"
        description="Форма заявки, мессенджеры и соцсети — подключим, когда будете готовы."
      />

      <div className="space-y-8">
        <WireframeBlock
          step="6.1"
          title="Форма заявки"
          purpose="Имя, email/Telegram, тип запроса (бренд / личный заказ), сообщение."
          minHeight="lg"
          hints={["Валидация и отправка — отдельный этап", "Можно Telegram-бот или email"]}
        >
          <div className="grid max-w-xl gap-3">
            {["Имя", "Email или Telegram", "Тип: бренд / заказ", "Сообщение"].map(
              (label) => (
                <div
                  key={label}
                  className="rounded-lg border border-dashed border-wire/70 px-4 py-3 text-sm text-muted"
                >
                  [ {label} ]
                </div>
              ),
            )}
            <div className="mt-2 inline-flex w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white opacity-80">
              [ Отправить ]
            </div>
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="6.2"
          title="Прямые контакты"
          purpose="Telegram, Instagram, email — как удобнее клиентам."
        >
          <ul className="space-y-2 text-sm text-muted">
            <li>[ Telegram: @… ]</li>
            <li>[ Instagram: @… ]</li>
            <li>[ Email: … ]</li>
          </ul>
        </WireframeBlock>

        <WireframeBlock
          step="6.3"
          title="Статус загрузки"
          purpose="«Сейчас принимаю заказы» / «Очередь N недель» — опционально."
        >
          <p className="text-sm text-muted">[ Строка статуса — позже ]</p>
        </WireframeBlock>
      </div>
    </>
  );
}
