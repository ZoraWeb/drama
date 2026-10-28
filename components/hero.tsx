import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <h1 className="text-balance">
            <span className="block font-mono text-xl tracking-tight text-accent mb-3">PlaySpace5</span>
            <span className="block font-mono text-4xl md:text-5xl text-foreground leading-tight">
              Prostor pro dramaterapii, pohyb a setkávání v Praze
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Sdílený terapeutický prostor přímo u metra Želivského. Nabízíme ho k individuální
            i skupinové terapeutické práci a rádi přivítáme další kolegy a kolegyně, kteří hledají
            místo pro svou praxi.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#cenik"
              className="inline-flex justify-center items-center bg-primary text-primary-foreground text-sm tracking-wide px-7 py-3.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Pronájem prostoru
            </a>
            <a
              href="#galerie"
              className="inline-flex justify-center items-center border border-primary/40 text-primary text-sm tracking-wide px-7 py-3.5 rounded-md hover:bg-primary/5 transition-colors"
            >
              Prohlédnout prostor
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/01-hero-hlavni-mistnost.webp"
            alt="Hlavní místnost PlaySpace5 s velkým šedozeleným kobercem na dřevěné podlaze a okny do zeleného vnitrobloku"
            fill
            sizes="(min-width: 1024px) 680px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
