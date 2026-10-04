import { PageIntro } from "@/components/PageIntro";
import { WireframeBlock } from "@/components/WireframeBlock";

export default function PaymentPage() {
  return (
    <>
      <PageIntro
        eyebrow="Раздел 5 · Оплата"
        title="Оплата и условия"
        description="Заготовка под способы оплаты, предоплату и договорённости — наполним, когда дойдём до этого шага."
      />

      <div className="space-y-8">
        <WireframeBlock
          step="5.1"
          title="Способы оплаты"
          purpose="Карта, перевод, СБП — что реально используете."
          hints={["Не указывать реквизиты до согласования", "Иконки платёжных методов"]}
        >
          <div className="flex flex-wrap gap-3">
            {["Перевод", "СБП", "Карта", "Другое"].map((m) => (
              <span
                key={m}
                className="rounded-lg border border-line px-4 py-2 text-sm text-muted"
              >
                {m}
              </span>
            ))}
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="5.2"
          title="Предоплата и этапы оплаты"
          purpose="Например: 50% старт, 50% перед финалом — текст согласуете с юристом/практикой."
          minHeight="md"
        >
          <div className="space-y-2 text-sm text-muted">
            <p>[ Блок: размер предоплаты ]</p>
            <p>[ Блок: когда второй платёж ]</p>
            <p>[ Блок: возвраты / отмена — позже ]</p>
          </div>
        </WireframeBlock>

        <WireframeBlock
          step="5.3"
          title="Ссылка на оплату / счёт"
          purpose="Место под кнопку «Оплатить» или «Получить реквизиты после брифа»."
          hints={["Часто оплату не выносят публично — только после заявки"]}
        >
          <div className="inline-flex rounded-full border border-line px-6 py-3 text-sm text-muted">
            [ Кнопка / сценарий оплаты — позже ]
          </div>
        </WireframeBlock>
      </div>
    </>
  );
}
