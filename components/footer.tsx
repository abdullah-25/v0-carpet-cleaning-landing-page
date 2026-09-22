import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Red Fox Steam Clean"
                width={113}
                height={100}
                className="h-[40px] w-auto"
              />
            </a>
            <p className="text-sm text-background/80">
              Professional steam cleaning services for carpets, rugs, upholstery, and tile & grout.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Rug Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Upholstery Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Tile & Grout
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-primary transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-background/80">
              <a href="tel:4164605911" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(416) 460-5911</span>
              </a>
              <a href="mailto:info@redfoxsteamclean.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@redfoxsteamclean.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Serving the Greater Toronto Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Red Fox Steam Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
