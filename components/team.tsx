import Image from "next/image"
import { Mail } from "lucide-react"

const therapists = [
  {
    name: "Mgr. Anna Nováková",
    role: "Dramaterapeutka, zakladatelka",
    bio: "Věnuje se dramaterapii metodou DvT od roku 2015. Pracuje s dospělými klienty individuálně i ve skupinách. Specializuje se na práci s úzkostmi a vztahovými tématy.",
    email: "anna@playspace.cz",
    photo: "/images/therapist-anna.jpg",
  },
  {
    name: "Mgr. Tomáš Horák",
    role: "Dramaterapeut, zakladatel",
    bio: "Absolvent dramaterapie na JAMU. Zaměřuje se na skupinovou práci a využití DvT v práci s adolescenty. Vede pravidelné otevřené skupiny.",
    email: "tomas@playspace.cz",
    photo: "/images/therapist-tomas.jpg",
  },
  {
    name: "Mgr. Klára Veselá",
    role: "Dramaterapeutka, zakladatelka",
    bio: "Spojuje DvT s prací s tělem. Má zkušenosti s klienty procházejícími životními změnami a krizemi. Pracuje česky a anglicky.",
    email: "klara@playspace.cz",
    photo: "/images/therapist-klara.jpg",
  },
  {
    name: "Mgr. Martin Dvořák",
    role: "Dramaterapeut, zakladatel",
    bio: "Dlouholetá praxe v psychoterapii doplněná o výcvik v DvT. Zajímá se o propojení hry, spontaneity a hlubinné psychologie.",
    email: "martin@playspace.cz",
    photo: "/images/therapist-martin.jpg",
  },
  {
    name: "Mgr. Lucie Černá",
    role: "Dramaterapeutka, zakladatelka",
    bio: "Pracuje s dětmi i dospělými. Specializuje se na kreativní přístupy v terapii a rozvoj spontaneity. Vede workshopy pro odbornou veřejnost.",
    email: "lucie@playspace.cz",
    photo: "/images/therapist-lucie.jpg",
  },
]

export function Team() {
  return (
    <section id="o-nas" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Tým
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-6 text-balance">
          Pět terapeutů, jeden prostor
        </h2>
        <p className="text-base leading-relaxed text-foreground/80 max-w-2xl mb-16">
          Jsme pětice dramaterapeutů, kteří společně založili PlaySpace jako místo
          pro setkání, hru a terapeutickou práci metodou DvT.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapists.map((t) => (
            <article
              key={t.name}
              className="bg-background p-6 flex flex-col"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-5">
                <Image
                  src={t.photo || "/placeholder.svg"}
                  alt={`Portrét - ${t.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-mono text-lg text-foreground">{t.name}</h3>
              <p className="text-xs tracking-wide text-accent mt-1 mb-4 uppercase">
                {t.role}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                {t.bio}
              </p>
              <a
                href={`mailto:${t.email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {t.email}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
