import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calculator } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Professional carpet cleaning that delivers results
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Red Fox Steam Clean provides professional deep cleaning services and comprehensive care for a cleaner,
                healthier home and business.
              </p>
            </div>

            {/* Quote calculator */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-2 text-foreground">
                <Calculator className="w-5 h-5" />
                <span className="font-semibold">Calculate Your Instant Quote</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Enter ZIP Code needing service" className="flex-1" />
                <div className="flex gap-2">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    For Home
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    For Business
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
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
