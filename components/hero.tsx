import { Button } from "@/components/ui/button"
import { ArrowRight, Headphones, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Premium Digital Products</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6">
            Unlock Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Creative Potential
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Access over 1 Lakh+ premium digital products including t-shirt designs, courses, 
            study notes, and graphics packages. Instant delivery straight to your inbox.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-border text-foreground hover:bg-secondary px-8 py-6 text-lg font-semibold bg-transparent"
            >
              <Headphones className="mr-2 w-5 h-5" />
              Contact Support
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">1L+</p>
              <p className="text-sm text-muted-foreground mt-1">T-shirt Designs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">1000+</p>
              <p className="text-sm text-muted-foreground mt-1">Premium Courses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">Secure</p>
              <p className="text-sm text-muted-foreground mt-1">Downloads</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground mt-1">Email Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
