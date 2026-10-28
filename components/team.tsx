import Image from "next/image"
import { Globe, Mail, Phone } from "lucide-react"

type Contact = { type: "email" | "phone" | "web"; value: string }

// Pořadí je závazné: Hana, Darina, Helena, Jan, Zora.
const members: {
  name: string
  role: string
  bio: string[]
  offer?: string
  contacts: Contact[]
  photo: string
  photoPosition: string
}[] = [
  {
    name: "Hana Růžička",
    role: "dramaterapeutka · učitelka · lektorka",
    bio: [
      "Hana je dramaterapeutka, učitelka, lektorka a divadelnice. Pracuje s dětmi i dospělými, v individuální dramaterapii má zkušenosti především s dětmi a dospívajícími. Věnuje se také práci se skupinami.",
      "Ve své práci propojuje zkušenosti z alternativního školství, divadelní improvizace a dramaterapie. Využívá metaforu, příběh a tělesné prožívání, podle potřeby také arteterapeutické techniky. Absolvovala výcvik v krizové intervenci. Působí v Praze a okolí.",
    ],
    contacts: [
      { type: "email", value: "jenik.ruzickova.hana@seznam.cz" },
      { type: "phone", value: "777 034 293" },
    ],
    photo: "/images/11-tym-hana-ruzicka.webp",
    photoPosition: "object-[center_35%]",
  },
  {
    name: "Mgr. Darina Deáková",
    role: "dramaterapeutka · speciální pedagožka",
    bio: [
      "Darina vystudovala speciální pedagogiku se zaměřením na dramaterapii na Univerzitě Palackého v Olomouci a Kreativní pedagogiku na DAMU v Praze. Absolvovala dlouhodobý výcvik Developmental Transformations (DvT) a další výcviky v oblasti krizové intervence, Otevřeného dialogu, expresivních přístupů při práci se skupinou a biosyntézy pro děti a dospívající.",
      "Od roku 2015 působí ve Fokusu Praha, kde pracuje s lidmi se zkušeností s duševním onemocněním a několik let vede Centrum duševního zdraví Podskalí. V dramaterapeutické praxi pracuje s dětmi, dospívajícími i dospělými.",
    ],
    contacts: [
      { type: "email", value: "darinadeak@gmail.com" },
      { type: "phone", value: "+420 602 738 919" },
    ],
    photo: "/images/09-tym-darina-deakova.webp",
    photoPosition: "object-center",
  },
  {
    name: "Bc. Helena Knížková",
    role: "dramaterapeutka",
    bio: [
      "Helena vystudovala sociální a pastorační práci na Jaboku a Evangelické teologické fakultě Univerzity Karlovy a absolvovala výcvik v dramaterapeutické metodě Developmental Transformations (DvT) s přesahem do arteterapie.",
      "Jako dramaterapeutka působila v Jedličkově ústavu a školách, ve ScioŠkole Praha 11 a v Domě tří přání, ve službě Mezipatro zaměřené na podporu dětí. Věnuje se také individuální dramaterapeutické praxi.",
      "Metoda Vývojové proměny je jí blízká svou svobodou a hravostí. Umožňuje prostřednictvím těla a hry vyjadřovat vědomé i nevědomé prožívání. Helena v ní nachází prostor pro uvolnění, uvědomování i hlubší vnitřní změnu.",
    ],
    offer: "individuální a skupinová dramaterapie pro děti a dospělé",
    contacts: [{ type: "email", value: "helenaxknizkova@gmail.com" }],
    photo: "/images/10-tym-helena-knizkova.webp",
    photoPosition: "object-center",
  },
  {
    name: "Jan Bárta",
    role: "pedagog · dramaterapeut · herec a režisér",
    bio: [
      "Jan se věnuje autorské a interpretační divadelní tvorbě, herectví, tanci a režii. V roce 2009 absolvoval čtyřleté studium na divadelní akademii v Amsterdamu (Mime Department, Hogeschool voor de Kunsten). Absolvoval také pětiletý dramaterapeutický a arteterapeutický výcvik se zaměřením na metodu Developmental Transformations (DvT), dokončený v roce 2019.",
      "V dramaterapeutické praxi pracuje především s dětmi a dospívajícími, včetně klientů se zkušeností s ústavní či náhradní rodinnou péčí a s náročnými vztahovými a traumatickými zkušenostmi. Věnuje se individuální dramaterapii i skupinám s arteterapeutickým přesahem. Ve své práci využívá také pohybovou a dramatickou výchovu a dlouhodobě spolupracuje s organizací SE.S.TA.",
    ],
    contacts: [{ type: "web", value: "https://www.se-s-ta.cz" }],
    photo: "/images/12-tym-jan-barta.webp",
    photoPosition: "object-top",
  },
  {
    name: "Mgr. Zora Červená",
    role: "psycholožka · dramaterapeutka",
    bio: [
      "Zora vystudovala psychologii a speciální pedagogiku na Pedagogické fakultě Univerzity Karlovy a absolvovala dlouhodobý výcvik v dramaterapeutické metodě Developmental Transformations (DvT).",
      "Pracuje především s dětmi a dospívajícími. Vedle individuální práce s dítětem je pro ni důležitá také spolupráce s rodiči, rodinou a školou. Díky dlouholeté zkušenosti školní psycholožky je jí blízké právě to, jak dítě prožívá školní prostředí, vztahy s vrstevníky a učiteli a jak se jeho obtíže mohou ve škole projevovat.",
      "Dramaterapie jí vyhovuje právě při práci s dětmi, protože obchází nutnost o všem mluvit. To, co dítě prožívá, se může objevit přímo ve hře – a ve hře s tím lze také pracovat. Pro Zoru se dramaterapie postupně stala také návratem ke hře, tvořivosti a spontaneitě, které považuje za důležité nejen v terapii, ale i v životě.",
      "Působí ve vlastním terapeutickém prostoru Hloubka v Turnově a je součástí PlaySpace5 v Praze.",
    ],
    contacts: [{ type: "web", value: "https://dramaterapieprodeti.cz" }],
    photo: "/images/08-tym-zora-cervena.webp",
    photoPosition: "object-center",
  },
]

const contactIcons = { email: Mail, phone: Phone, web: Globe }

function contactHref({ type, value }: Contact) {
  if (type === "email") return `mailto:${value}`
  if (type === "phone") return `tel:${value.startsWith("+") ? value.replace(/\s/g, "") : `+420${value.replace(/\s/g, "")}`}`
  return value
}

function contactLabel({ type, value }: Contact) {
  return type === "web" ? value.replace(/^https?:\/\//, "") : value
}

export function Team() {
  return (
    <section id="tym" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          Náš tým
        </p>
        <h2 className="font-mono text-4xl md:text-5xl text-foreground mb-6 text-balance">
          Lidé, kteří PlaySpace5 tvoří
        </h2>
        <p className="text-base leading-relaxed text-foreground/80 max-w-3xl mb-16">
          PlaySpace5 tvoří lidé, které spojuje dramaterapie, zkušenost s prací s dětmi i dospělými
          a zájem o možnosti hry, vztahu a pohybu v terapeutické práci.
        </p>

        <div className="space-y-8">
          {members.map((m) => (
            <article
              key={m.name}
              className="bg-card rounded-lg p-6 md:p-8 grid sm:grid-cols-[10rem_1fr] md:grid-cols-[13rem_1fr] gap-6 md:gap-8"
            >
              <div className="relative aspect-square w-40 sm:w-full overflow-hidden rounded-lg">
                <Image
                  src={m.photo}
                  alt={`Portrét – ${m.name}`}
                  fill
                  sizes="(min-width: 768px) 208px, 160px"
                  className={`object-cover ${m.photoPosition}`}
                />
              </div>

              <div>
                <h3 className="font-mono text-2xl text-foreground">{m.name}</h3>
                <p className="text-sm tracking-wide text-accent mt-1 mb-4">{m.role}</p>
                <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
                  {m.bio.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                  {m.offer && (
                    <p>
                      <strong className="text-foreground">Nabídka:</strong> {m.offer}
                    </p>
                  )}
                </div>

                {m.contacts.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {m.contacts.map((c) => {
                      const Icon = contactIcons[c.type]
                      return (
                        <li key={c.value}>
                          <a
                            href={contactHref(c)}
                            {...(c.type === "web" && { target: "_blank", rel: "noopener noreferrer" })}
                            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors break-all"
                          >
                            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                            {contactLabel(c)}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
