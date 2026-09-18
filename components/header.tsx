import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white border-b border-border">
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <span className="font-medium">Call Red Fox Steam Clean for a FREE QUOTE</span>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Red Fox Steam Clean logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="font-bold text-xl text-foreground">Red Fox Steam Clean</div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Phone className="w-4 h-4 mr-2" />
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  )
}
