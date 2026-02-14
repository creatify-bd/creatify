"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, GraduationCap, BookOpen, Palette, Package, ArrowRight, Star } from "lucide-react"

const products = [
  {
    id: 1,
    slug: "tshirt-designs",
    title: "1 Lakh+ T-shirt Designs",
    description:
      "Massive collection of high-quality, print-ready t-shirt designs for your POD business. Includes trending niches, seasonal themes, and evergreen designs.",
    icon: Shirt,
    badge: "Best Seller",
    badgeVariant: "default" as const,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 2,
    slug: "courses",
    title: "1000+ Premium Courses",
    description:
      "Learn from industry experts with our curated collection of courses covering business, marketing, design, development, and personal growth.",
    icon: GraduationCap,
    badge: "Popular",
    badgeVariant: "secondary" as const,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    slug: "study-notes",
    title: "Class 6 to Admission Notes",
    description:
      "Comprehensive study materials covering all subjects from Class 6 to competitive exam preparation. Perfect for students aiming for top results.",
    icon: BookOpen,
    badge: "Students' Choice",
    badgeVariant: "secondary" as const,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    slug: "graphics-package",
    title: "Graphics Design Package",
    description:
      "Complete toolkit for designers including templates, mockups, fonts, textures, and design elements. Everything you need to create stunning visuals.",
    icon: Palette,
    badge: "Creative Pack",
    badgeVariant: "secondary" as const,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    slug: "digital-360",
    title: "Digital Products 360",
    description:
      "The ultimate all-in-one bundle containing every product category. Get maximum value with instant access to our entire digital library.",
    icon: Package,
    badge: "All-in-One",
    badgeVariant: "default" as const,
    gradient: "from-violet-500 to-purple-500",
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Star className="w-3 h-3 mr-1" />
            Premium Collection
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Our Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of premium digital products designed to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant={product.badgeVariant} className="text-xs">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6">
                <CardDescription className="text-muted-foreground leading-relaxed">{product.description}</CardDescription>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-border text-foreground hover:bg-secondary group/btn bg-transparent"
                  asChild
                >
                  <Link href={`/checkout/${product.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button className={`w-full sm:w-auto bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold`} asChild>
                  <Link href={`/checkout/${product.slug}`}>Buy Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
