import { Mail, MapPin } from "lucide-react"
import { EMAIL, RENTAL_MAILTO } from "@/lib/site"

export function Contact() {
  return (
    <section id="kontakt" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Kontakt
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-12 text-balance">
          Kontakt a umístění
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Adresa</p>
              <address className="not-italic text-foreground leading-relaxed">
                PlaySpace5
                <br />
                U Vinohradské nemocnice 6, Praha 3
                <br />
                metro Želivského
              </address>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 mt-0.5 text-accent shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Dotazy k pronájmu a prohlídkám</p>
              <a
                href={RENTAL_MAILTO}
                className="text-primary text-lg underline underline-offset-4 hover:text-foreground transition-colors break-all"
              >
                {EMAIL}
              </a>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                O dostupnosti konkrétních dnů se domlouváme individuálně.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
