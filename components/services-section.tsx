import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "Carpet",
      image: "/professional-carpet-cleaning-technician-with-equip.jpg",
      description: "Deep steam cleaning for all carpet types",
    },
    {
      title: "Air Duct",
      image: "/air-duct-cleaning-service-technician.jpg",
      description: "Comprehensive air duct cleaning and maintenance",
    },
    {
      title: "Upholstery",
      image: "/upholstery-cleaning-professional-cleaning-sofa.jpg",
      description: "Expert furniture and upholstery restoration",
    },
    {
      title: "Tile & Grout",
      image: "/tile-and-grout-cleaning-professional-service.jpg",
      description: "Restore your tile and grout to like-new condition",
    },
  ]

  return (
    <section id="services" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            More Than Just Carpet Cleaning
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Red Fox Steam Clean gets carpets cleaner—AND everything else! From your floors to your furniture, air ducts,
            and more, we provide whole-home and business cleaning. No matter where dirt, dust, and contaminants may
            settle, we can clean it.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} cleaning service`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground border-b-2 border-primary pb-1 inline-block">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
          <button className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Browse All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
