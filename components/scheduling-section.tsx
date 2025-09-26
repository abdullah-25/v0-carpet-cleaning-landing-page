import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowRight } from "lucide-react"

export function SchedulingSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Scheduling Made Easy For Your Convenience
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Call Red Fox Steam Clean and speak with a 24/7 representative or book online using our instant quote tool
              and appointment calendar
            </p>
          </div>

          {/* Scheduling widget */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div className="flex items-center justify-center space-x-2 text-foreground">
              <Calendar className="w-6 h-6" />
              <span className="text-xl font-semibold">Pick a Date and Time That Work Best for You</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter ZIP Code needing service" className="flex-1" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule in Minutes
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
