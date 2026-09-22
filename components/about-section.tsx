import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Your trusted choice for professional cleaning
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Since our founding, Red Fox Steam Clean has been trusted by homeowners and businesses to deliver
                exceptional carpet, upholstery, and deep cleaning services.
              </p>
              <p>
                After years of dedicated service, there's a reason why we have remained the preferred choice for so many
                satisfied customers in our community.
              </p>
              <p className="font-semibold text-foreground">
                Schedule a deep cleaning and discover the Red Fox difference!
              </p>
            </div>

            <a href="#quote">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Right video placeholder */}
          <div className="relative">
            <div className="bg-primary rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-primary-foreground space-y-4">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-0 h-0 border-l-[12px] border-l-primary-foreground border-y-[8px] border-y-transparent ml-1"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Why Choose Red Fox Steam Clean?</h3>
                  <p className="text-sm opacity-90">Learn about our professional cleaning process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
