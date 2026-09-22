"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    if (!accessKey) {
      setStatus("error")
      setErrorMessage("Form configuration error. Please call us directly.")
      return
    }

    formData.append("access_key", accessKey)
    formData.append("subject", "New Quote Request - Red Fox Steam Clean")
    formData.append("from_name", "Red Fox Steam Clean Website")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
        setErrorMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Please try again or call us directly.")
    }
  }

  if (status === "success") {
    return (
      <section id="quote" className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
              <h2 className="text-2xl font-bold text-foreground">Thank You!</h2>
              <p className="text-muted-foreground">
                Your quote request has been submitted. We'll get back to you within 24 hours.
              </p>
              <p className="text-muted-foreground">
                Need immediate assistance? Call us at{" "}
                <a href="tel:4164605911" className="text-primary font-semibold hover:underline">
                  (416) 460-5911
                </a>
              </p>
              <Button
                onClick={() => setStatus("idle")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="quote" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-primary-foreground space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Fill out the form and we'll provide you with a personalized quote for your steam cleaning needs.
              We typically respond within 24 hours.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:4164605911" className="opacity-90 hover:opacity-100">
                    (416) 460-5911
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:info@redfoxsteamclean.com" className="opacity-90 hover:opacity-100">
                    info@redfoxsteamclean.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-lg p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden field for email recipient */}
              <input type="hidden" name="to" value="info@redfoxsteamclean.com" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(416) 555-1234"
                    required
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  disabled={status === "submitting"}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a service...</option>
                  <option value="Carpet Cleaning">Carpet Cleaning</option>
                  <option value="Rug Cleaning">Rug Cleaning</option>
                  <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                  <option value="Tile & Grout Cleaning">Tile & Grout Cleaning</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-foreground">
                  Address or City *
                </label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="123 Main St, Toronto or just 'Toronto'"
                  required
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="preferred_time" className="text-sm font-medium text-foreground">
                  Preferred Date/Time (optional)
                </label>
                <Input
                  id="preferred_time"
                  name="preferred_time"
                  type="text"
                  placeholder="e.g., Next week, weekday mornings"
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Additional Details (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your space: square footage, number of rooms, type of stains, etc."
                  disabled={status === "submitting"}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Free Quote"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
