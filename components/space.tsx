import Image from "next/image"

const facts = [
  { label: "Hlavní místnost", detail: "6 × 6 metrů, volná plocha pro práci s tělem a pohybem i pro klidnější individuální setkání" },
  { label: "Vybavení", detail: "Dřevěná podlaha, velký koberec, polštáře a deky" },
  { label: "Zázemí", detail: "Kuchyňský kout, prostor pro převlékání, samostatné WC a úložné zázemí" },
]

export function Space() {
  return (
    <section id="prostor" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          O prostoru
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-12 text-balance">
          Místo pro hru, pohyb i rozhovor
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-8">
            <p className="text-base leading-relaxed text-foreground/80">
              PlaySpace5 je sdílený terapeutický prostor vytvořený dramaterapeuty. Hlavní místnost
              o rozměrech <strong className="text-foreground">6 × 6 metrů</strong> nabízí volnou
              plochu pro práci s tělem a pohybem i klidnější individuální setkání. V prostoru je
              dřevěná podlaha, velký koberec, polštáře a deky. K dispozici je také kuchyňský kout,
              prostor pro převlékání, samostatné WC a úložné zázemí.
            </p>

            <dl className="space-y-4 text-sm">
              {facts.map((item) => (
                <div key={item.label} className="border-l-2 border-accent pl-4">
                  <dt className="font-medium text-foreground">{item.label}</dt>
                  <dd className="text-muted-foreground">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/02-mistnost-pohled-k-oknum.webp"
              alt="Pohled k oknům hlavní místnosti, denní světlo dopadá na koberec a dřevěnou podlahu"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:order-1 order-2">
            <Image
              src="/images/04-vyhled-do-zelene.webp"
              alt="Pohled oknem z hlavní místnosti do zeleně vnitrobloku"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="md:order-2 order-1">
            <h3 className="font-mono text-2xl md:text-3xl text-foreground mb-4">
              Okna do zeleného vnitrobloku
            </h3>
            <p className="text-base leading-relaxed text-foreground/80">
              Prostor se nachází v suterénu domu na adrese{" "}
              <strong className="text-foreground">U Vinohradské nemocnice 6, Praha 3</strong>, přímo
              u stanice metra <strong className="text-foreground">Želivského</strong>. Jeho okna vedou
              do velkého zeleného vnitrobloku se vzrostlými stromy. Do vnitrobloku je možné vyjít;
              jsou zde lavičky a dětské hřiště.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
