import { Button } from "@/components/ui/button"
import { Sparkles, Mail, Globe, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border p-8 sm:p-12 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
          <div className="relative text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Start Creating?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of creators and entrepreneurs who trust CreatiFy for their digital product needs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group">
              Browse All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold text-foreground">CreatiFy</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your one-stop destination for premium digital products. Quality resources, instant delivery, endless possibilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  All Products
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:support@creatify.store" className="text-sm hover:text-primary transition-colors">
                  support@creatify.store
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                <a href="https://creatify.store" className="text-sm hover:text-primary transition-colors">
                  www.creatify.store
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} CreatiFy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with passion for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
