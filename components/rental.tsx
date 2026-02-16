import { Check } from "lucide-react"

export function Rental() {
  return (
    <section id="pronajem" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Pronájem
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-6 text-balance">
          Prostor pro vaši praxi
        </h2>
        <p className="text-base leading-relaxed text-foreground/80 max-w-2xl mb-16">
          Nabízíme PlaySpace k pronájmu dalším terapeutům, lektorům a facilitátorům.
          Prostor je ideální pro práci s tělem, pohybem, dramaterapii,
          arteterapii, meditace, jógu a další aktivity vyžadující volný prostor.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background p-8">
            <h3 className="font-mono text-2xl text-foreground mb-6">
              Co nabízíme
            </h3>
            <ul className="space-y-4">
              {[
                "Hlavní místnost 5 x 5 m s kobercem",
                "Klidné prostředí v uzavřeném dvoře",
                "Kuchyňka k dispozici",
                "Toaleta",
                "Křesílka a stolek na vyžádání",
                "Blízko metra Želivského",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-8">
            <h3 className="font-mono text-2xl text-foreground mb-6">
              Podmínky pronájmu
            </h3>
            <div className="space-y-4 text-sm text-foreground/80">
              <p>
                Prostor je možné pronajmout na jednotlivé hodiny
                i opakovaně. Preferujeme dlouhodobější spolupráci.
              </p>
              <p>
                Pronájem je vhodný pro individuální i skupinovou práci
                (kapacita cca 8-10 osob).
              </p>
              <p>
                Pro domluvení podmínek a ceny nás prosím kontaktujte
                na e-mailu níže. Rádi vám prostor ukážeme osobně.
              </p>
            </div>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center bg-primary text-primary-foreground text-sm tracking-wider px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Domluvit prohlídku
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
