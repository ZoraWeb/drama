import Image from "next/image"

const photos = [
  {
    src: "/images/03-mistnost-polstare-kruh.webp",
    alt: "Žluté polštáře rozložené do kruhu na koberci v hlavní místnosti",
    caption: "Polštáře rozložené do kruhu na koberci hlavní místnosti",
    position: "object-center",
  },
  {
    src: "/images/05-vnitroblok-stromy.webp",
    alt: "Vzrostlé stromy a keře ve vnitrobloku",
    caption: "Vzrostlé stromy ve vnitrobloku",
    position: "object-center",
  },
  {
    src: "/images/06-vnitroblok-cesta.webp",
    alt: "Cesta mezi stromy a keři ve vnitrobloku, v pozadí okolní domy",
    caption: "Cesta zeleným vnitroblokem",
    position: "object-center",
  },
  {
    src: "/images/07-zazemi-kuchynsky-kout.webp",
    alt: "Kuchyňský kout s umyvadlem, dřevěnými policemi a pokojovými rostlinami",
    caption: "Kuchyňský kout",
    position: "object-top",
  },
]

export function Gallery() {
  return (
    <section id="galerie" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Fotogalerie
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-12 text-balance">
          Prohlédněte si prostor
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={`object-cover ${photo.position}`}
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
