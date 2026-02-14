import { Hero } from "@/components/hero"
import { TrustSection } from "@/components/trust-section"
import { ProductCategories } from "@/components/product-categories"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustSection />
      <ProductCategories />
      <FAQ />
      <Footer />
    </main>
  )
}
