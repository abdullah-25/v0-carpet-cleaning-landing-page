import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Professional steam cleaning that delivers results
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Red Fox Steam Clean provides professional steam cleaning services for carpets, rugs, upholstery, 
                and tile & grout. Get a cleaner, healthier home or business today.
              </p>
            </div>

            {/* Quote CTA */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-2 text-foreground">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Get Your Free Quote</span>
              </div>

              <p className="text-sm text-muted-foreground">
                Tell us about your cleaning needs and we'll provide a personalized quote within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#quote" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    For Home
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="#quote" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    For Business
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              src="/modern-living-room-with-clean-carpet-and-furniture.jpg"
              alt="Clean living room with professional carpet cleaning results"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
