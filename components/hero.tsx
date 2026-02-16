import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-20">
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/hero-space.jpg"
          alt="Terapeutický prostor PlaySpace - hlavní místnost s tmavě zeleným kobercem a velkými okny"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl text-background tracking-tight text-balance">
            PlaySpace
          </h1>
          <p className="mt-4 max-w-lg text-lg md:text-xl text-background/90 leading-relaxed font-light">
            Prostor pro dramaterapii a terapeutickou hru v srdci Prahy
          </p>
          <a
            href="#o-nas"
            className="mt-8 inline-flex items-center border border-background/60 text-background text-sm tracking-wider px-8 py-3 hover:bg-background/10 transition-colors"
          >
            Poznejte nás
          </a>
        </div>
      </div>
    </section>
  )
}
