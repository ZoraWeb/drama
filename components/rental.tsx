import { Mail } from "lucide-react"
import { EMAIL, RENTAL_MAILTO } from "@/lib/site"

const prices = [
  { label: "Hodina", price: "400 Kč" },
  { label: "Celý den", price: "2 800 Kč" },
  {
    label: "Pravidelný celý den jednou týdně",
    price: "orientačně 4 000–5 000 Kč měsíčně",
    note: "podle dohody",
    highlight: true,
  },
]

export function Rental() {
  return (
    <section id="pronajem" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Pronájem prostoru
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-8 text-balance">
          Hledáte prostor pro svou terapeutickou práci?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              Rádi bychom PlaySpace5 sdíleli především s kolegy a kolegyněmi z dramaterapie,
              tanečně-pohybové terapie a dalších terapeutických přístupů, pro které je důležitá
              práce s tělem, pohybem a prostorem.
            </p>
            <p>
              Nejvíce uvítáme{" "}
              <strong className="text-foreground">
                dlouhodobou spolupráci – pronájem jednoho pravidelného celého dne v týdnu
              </strong>
              . Po domluvě je možný i jednorázový pronájem.
            </p>
          </div>

          <div id="cenik" className="bg-card rounded-lg p-8">
            <h3 className="font-mono text-2xl text-foreground mb-6">Ceník</h3>
            <dl className="divide-y divide-border">
              {prices.map((item) => (
                <div
                  key={item.label}
                  className="py-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
                >
                  <dt className={item.highlight ? "font-medium text-foreground" : "text-foreground/80"}>
                    {item.label}
                  </dt>
                  <dd className="sm:text-right">
                    <span className="font-medium text-foreground">{item.price}</span>
                    {item.note && <span className="block text-sm text-muted-foreground">{item.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 pt-6 border-t border-border space-y-4 text-sm text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-foreground">Prostor je k dispozici ihned.</strong> Pro
                informace o aktuálně volných dnech, prohlídku nebo domluvu podmínek napište na{" "}
                <a href={RENTAL_MAILTO} className="text-primary underline underline-offset-4 hover:text-foreground">
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <a
              href={RENTAL_MAILTO}
              className="mt-8 flex sm:inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground text-sm tracking-wide px-6 py-3.5 rounded-md hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Napsat o pronájem
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
