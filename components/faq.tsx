import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does delivery work?",
    answer: "After your purchase is complete, you will immediately receive an email with your download links. The email contains secure links to access all your purchased digital products. No waiting time - it's instant!",
  },
  {
    question: "What is your refund policy?",
    answer: "Due to the nature of digital products, we offer a 7-day money-back guarantee if you're not satisfied with your purchase. If the product doesn't match its description or has technical issues, contact us for a full refund. Please note that refunds are not available if you've already downloaded the complete product.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team via email at support@creatify.store. We typically respond within 24 hours on business days. For urgent issues, please include 'URGENT' in your subject line.",
  },
  {
    question: "Can I use these products commercially?",
    answer: "Yes! All our products come with commercial licenses. You can use the t-shirt designs for your POD business, the courses for personal development, and the graphics in client projects. Each product includes detailed license terms.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and popular digital wallets. All payments are processed through secure, encrypted payment gateways to ensure your financial information stays safe.",
  },
  {
    question: "Do I get lifetime access to my purchases?",
    answer: "Yes, absolutely! Once you purchase any product, you get lifetime access to download it. We also provide free updates whenever we add new content to the product bundles.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find answers to common questions about our products, delivery, and policies.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary font-medium py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
