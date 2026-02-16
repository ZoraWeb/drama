import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Team } from "@/components/team"
import { AboutDvT } from "@/components/about-dvt"
import { Space } from "@/components/space"
import { Rental } from "@/components/rental"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Team />
      <AboutDvT />
      <Space />
      <Rental />
      <Footer />
    </main>
  )
}
