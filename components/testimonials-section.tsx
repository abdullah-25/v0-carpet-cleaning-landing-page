import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      platform: "Google",
      rating: 5,
      text: "I had my carpets, tile, and upholstery cleaned. This isn't my first time having Red Fox Steam Clean service my home. I have never been disappointed!",
    },
    {
      name: "Mike R.",
      platform: "Google",
      rating: 5,
      text: "We had our carpets and area rugs cleaned. The technicians were prompt, efficient and did a great job. We have hardwood floors and they took care in moving furniture so that there was no damage.",
    },
    {
      name: "Jennifer L.",
      platform: "Google",
      rating: 5,
      text: "We hadn't had our carpets done in quite some time. As soon as they left, we noticed how much fresher the house smelled. We are excited to have it done for the spring!",
    },
  ]

  return (
    <section id="testimonials" className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Real Reviews From Real Customers
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We get it—we think we're great, but sometimes it helps hearing from others. Fortunately, people like you are
            sharing their experiences with Red Fox Steam Clean across the region,
            <span className="font-semibold text-foreground">
              {" "}
              earning us an average 4.9 rating from 1,500+ reviews on Google
            </span>
            .
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-4">
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>

              {/* Attribution */}
              <p className="text-sm text-muted-foreground">
                - {testimonial.name} on {testimonial.platform}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
          <button className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div className="text-center">
          <a href="#quote">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
