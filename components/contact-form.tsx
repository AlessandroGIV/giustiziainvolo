"use client"

import React, { useState, useEffect } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Send } from "lucide-react"

// EmailJS will be loaded from CDN
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailjsLoaded, setEmailjsLoaded] = useState(false)

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = "service_6z41q5s"
  const EMAILJS_TEMPLATE_ID = "template_cx9n3jk"
  const EMAILJS_PUBLIC_KEY = "QxbxF_zcEkttQ923p"

  // Google Analytics / Ads
  const GA_TRACKING_ID = "AW-17322484652"

  // Load EmailJS
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    script.async = true
    script.onload = () => {
      try {
        ;(window as any).emailjs.init(EMAILJS_PUBLIC_KEY)
        setEmailjsLoaded(true)
      } catch {
        setError("Errore nell'inizializzazione del servizio email.")
      }
    }
    script.onerror = () => {
      setError("Errore nel caricamento del servizio email. Riprova più tardi.")
    }
    document.head.appendChild(script)
    return () => {
      document.head.contains(script) && document.head.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if (!emailjsLoaded) {
      setError("Servizio email non ancora caricato. Riprova tra qualche secondo.")
      setIsSubmitting(false)
      return
    }

    try {
      const formData = new FormData(e.currentTarget)
      const templateParams = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: (formData.get("phone") as string) || "Non fornito",
        flight_number: formData.get("flightNumber") as string,
        flight_date: formData.get("flightDate") as string,
        message: formData.get("description") as string,
      }

      const response = await (window as any).emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        // fire Google Ads conversion
        if (typeof (window as any).gtag === "function") {
          ;(window as any).gtag("event", "conversion", {
            send_to: `${GA_TRACKING_ID}/ShEICO6s0usaEKzHgMRA`,
          })
        }

        setIsSubmitted(true)
        e.currentTarget.reset()
      } else {
        throw new Error(`Email error: status ${response.status}`)
      }
    } catch (err: any) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(`Errore: ${msg}. Contatta info@giustiziainvolo.it.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary-foreground/10 p-8 rounded-lg text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
          <Mail className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-4">Richiesta Inviata!</h3>
        <p className="text-white/80 mb-6">
          Grazie per averci contattato. Un nostro avvocato ti risponderà al più presto.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-secondary hover:bg-secondary/90 text-black">
          Invia un'altra richiesta
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Google Global Site Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');`}
      </Script>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}
        {/* form fields... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome e Cognome *</Label>
            <Input id="name" name="name" required placeholder="Inserisci il tuo nome completo" className="bg-primary-foreground/10 border-white/20 focus:border-secondary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required placeholder="La tua email" className="bg-primary-foreground/10 border-white/20 focus:border-secondary" />
          </div>
        </div>
        {/* ...rest of your inputs and checkboxes... */}
        <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-black font-bold">
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Invio in corso...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-5 w-5" />
              INVIA RICHIESTA!
            </span>
          )}
        </Button>
      </form>
    </>
  )
}

export default ContactForm
