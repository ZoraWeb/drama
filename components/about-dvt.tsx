export function AboutDvT() {
  return (
    <section id="dvt" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Metoda
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-12 text-balance">
          Co je DvT?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground/80">
              <strong className="text-foreground">Developmental Transformations</strong> (DvT) je
              specifická metoda dramaterapie vyvinutá Davidem Read Johnsonem. Staví na
              přirozenosti spontánní hry, kontaktu a celostního tělesného prožívání.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              V DvT se terapeut a klient setkávají v otevřeném, nestrukturovaném prostoru.
              Společně vstupují do hry, která se neustále proměňuje. Nejde o divadlo ani
              o předem daný scénář, ale o živý, přítomný kontakt.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground/80">
              Klíčovými prvky DvT jsou <em>vtělení</em> (embodiment), <em>setkání</em> (encounter)
              a <em>transformace</em> (transformation). Pracuje se s tím, co se děje
              tady a teď, v prostoru mezi lidmi.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              Metoda je vhodná pro dospělé i děti a nachází uplatnění v individuální
              i skupinové terapii. Pomáhá rozvíjet schopnost snášet nejistotu, spontánně
              reagovat a být autenticky přítomný v kontaktu s druhým.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: "Kontakt",
              desc: "Živé setkání dvou lidí v přítomném okamžiku. Bez masek, bez scénáře.",
            },
            {
              title: "Spontánní hra",
              desc: "Volná, nestrukturovaná hra, která se proměňuje moment od momentu.",
            },
            {
              title: "Celé tělo",
              desc: "Zapojení pohybu, hlasu, gest a prostoru. Prožívání celou bytostí.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-border pt-6">
              <h3 className="font-mono text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
