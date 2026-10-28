import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Space } from "@/components/space"
import { Rental } from "@/components/rental"
import { Gallery } from "@/components/gallery"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Space />
        <Rental />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
