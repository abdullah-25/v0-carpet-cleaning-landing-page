import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How long will it take to clean my carpets?",
      answer:
        "Most residential carpet cleaning jobs take 2-4 hours depending on the size of the area and level of soiling. We'll provide an accurate time estimate when we provide your quote.",
    },
    {
      question: "Do you move furniture when you clean carpet?",
      answer:
        "Yes, we move most furniture as part of our standard service. We take great care to protect your floors and furniture during the moving process.",
    },
    {
      question: "How much does carpet cleaning cost?",
      answer:
        "Our pricing varies based on the size of the area, type of cleaning needed, and current promotions. Use our instant quote tool above or call for a free estimate.",
    },
    {
      question: "Why should I have my carpets professionally cleaned?",
      answer:
        "Professional cleaning removes deep-seated dirt, allergens, and bacteria that regular vacuuming can't reach. It extends carpet life and improves indoor air quality.",
    },
    {
      question: "What types of payment do you accept?",
      answer:
        "We accept cash, check, and all major credit cards including Visa, MasterCard, American Express, and Discover.",
    },
  ]

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                New to Red Fox Steam Clean?
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Thank you for considering cleaning with us! As the leader in clean, we're here to help answer any
              questions you may have about our tried and true deep cleaning process so you're confident from start to
              finish.
            </p>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All FAQs
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              src="/friendly-carpet-cleaning-technician-talking-with-s.jpg"
              alt="Red Fox Steam Clean technician with satisfied customer"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
