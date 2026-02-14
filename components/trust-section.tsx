import { Zap, Shield, Mail, CheckCircle } from "lucide-react"

const trustFeatures = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Get your download links immediately after purchase. No waiting, no delays.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your transactions are protected with bank-grade encryption and security.",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Our dedicated support team is available via email to help you anytime.",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "All products are carefully curated to ensure premium quality and value.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Why Choose CreatiFy?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We make buying digital products simple, secure, and instant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
