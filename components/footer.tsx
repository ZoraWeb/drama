import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="kontakt" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm tracking-widest text-primary-foreground/60 uppercase mb-4">
          Kontakt
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-primary-foreground mb-12 text-balance">
          Ozvěte se nám
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">E-mail</p>
                <a
                  href="mailto:info@playspace.cz"
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                >
                  info@playspace.cz
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">Adresa</p>
                <p className="text-primary-foreground">
                  Praha, Želivského
                  <br />
                  <span className="text-primary-foreground/60 text-sm">(klidný dvůr, přesnou adresu sdělíme po domluvě)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm text-primary-foreground/70 leading-relaxed">
            <p>
              Pro objednání terapie kontaktujte přímo konkrétního terapeuta
              z našeho týmu. Každý z nás pracuje samostatně.
            </p>
            <p>
              Pro pronájem prostor nebo jiné dotazy nás kontaktujte
              na společném e-mailu info@playspace.cz.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xl text-primary-foreground">PlaySpace</span>
          <p className="text-xs text-primary-foreground/40">
            {'PlaySpace \u00A9 2026. Prostor pro dramaterapii a terapeutickou hru.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
