import Image from "next/image"

export function Space() {
  return (
    <section id="prostor" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Prostor
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-12 text-balance">
          Klidné místo pro terapeutickou práci
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/courtyard.jpg"
              alt="Klidný dvůr v Praze, kde se nachází prostor PlaySpace"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground/80">
              PlaySpace se nachází v klidném dvoře v Praze u metra Želivského.
              Prostor je navržený tak, aby podpořil soustředění, bezpečí
              a svobodu pohybu.
            </p>

            <ul className="space-y-4 text-sm">
              {[
                {
                  label: "Hlavní místnost",
                  detail: "5 x 5 metrů, tmavě zelený koberec na dřevěné podlaze, velká okna do dvora",
                },
                {
                  label: "Vybavení",
                  detail: "Prázdný prostor pro práci s tělem a pohybem. K dispozici křesílka a stolek.",
                },
                {
                  label: "Zázemí",
                  detail: "Kuchyňka a toaleta",
                },
                {
                  label: "Lokace",
                  detail: "Praha, Želivského. Klidný dvůr stranou od ruchu ulice.",
                },
              ].map((item) => (
                <li key={item.label} className="border-l-2 border-primary pl-4">
                  <span className="font-medium text-foreground block">{item.label}</span>
                  <span className="text-muted-foreground">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
