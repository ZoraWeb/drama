import { EMAIL, RENTAL_MAILTO, navLinks } from "@/lib/site"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
        <div>
          <span className="font-mono text-2xl">PlaySpace5</span>
          <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
            U Vinohradské nemocnice 6, Praha 3
            <br />
            metro Želivského
          </p>
        </div>

        <div className="text-sm">
          <p className="text-primary-foreground/70 mb-2">E-mail</p>
          <a href={RENTAL_MAILTO} className="underline underline-offset-4 hover:text-primary-foreground/80 break-all">
            {EMAIL}
          </a>
        </div>

        <nav aria-label="Patička">
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-primary-foreground/80 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl mt-12 pt-8 border-t border-primary-foreground/15">
        <p className="text-xs text-primary-foreground/70">
          {"PlaySpace5 © 2026. Sdílený terapeutický prostor v Praze 3."}
        </p>
      </div>
    </footer>
  )
}
