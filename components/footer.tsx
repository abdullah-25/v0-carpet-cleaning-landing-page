import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Red Fox Steam Clean logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="font-bold text-lg">Red Fox Steam Clean</span>
            </div>
            <p className="text-sm text-background/80">
              Professional carpet and upholstery cleaning services for homes and businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Upholstery Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Air Duct Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
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
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-RED-FOX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@redfoxsteamclean.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Serving Your Local Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 Red Fox Steam Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
