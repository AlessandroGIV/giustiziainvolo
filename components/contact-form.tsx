"use client"

import React, { useState, useEffect } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Send } from "lucide-react"

// EmailJS Config
const EMAILJS_SERVICE_ID = "service_6z41q5s"
const EMAILJS_TEMPLATE_ID = "template_cx9n3jk"
const EMAILJS_PUBLIC_KEY = "QxbxF_zcEkttQ923p"

// Google Ads ID
const GA_TRACKING_ID = "AW-17322484652"

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailjsLoaded, setEmailjsLoaded] = useState(false)

  // Load EmailJS SDK
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    script.async = true
    script.onload = () => {
      try {
        ;(window as any).emailjs.init(EMAILJS_PUBLIC_KEY)
        console.log("EmailJS initialized")
        setEmailjsLoaded(true)
      } catch (e) {
        console.error("EmailJS init error", e)
        setError("Errore nell'inizializzazione del servizio email.")
      }
    }
    script.onerror = (e) => {
      console.error("EmailJS load error", e)
      setError("Errore nel caricamento del servizio email. Riprova più tardi.")
    }
    document.head.appendChild(script)
    return () => {
      document.head.contains(script) && document.head.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    if (!emailjsLoaded) {
      setError("Servizio email non ancora caricato. Riprova tra qualche secondo.")
      setIsSubmitting(false)
      return
    }

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
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
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      console.log("EmailJS response", response)

      if (response.status === 200) {
        // Trigger Google Ads conversion
        if (typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "conversion", {
            send_to: 'AW-17322484652/nuZvCKiXrbAbEKzHgMRA',
          })
        }
        setIsSubmitted(true)
        form.reset()
      } else {
        throw new Error(`EmailJS status ${response.status}`)
      }
    } catch (err: any) {
      console.error("Submit error", err)
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
          Grazie per averci contattato. Un nostro avvocato ti risponderà al più presto per valutare il tuo caso.
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
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome e Cognome *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Inserisci il tuo nome completo"
              className="bg-primary-foreground/10 border-white/20 focus:border-secondary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="La tua email"
              className="bg-primary-foreground/10 border-white/20 focus:border-secondary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="flightNumber">Numero di Volo *</Label>
            <Input
              id="flightNumber"
              name="flightNumber"
              required
              placeholder="Es. AZ1234"
              className="bg-primary-foreground/10 border-white/20 focus:border-secondary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="flightDate">Data del Volo *</Label>
            <Input
              id="flightDate"
              name="flightDate"
              type="date"
              required
              className="bg-primary-foreground/10 border-white/20 focus:border-secondary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrizione del Problema *</Label>
          <Textarea
            id="description"
            name="description"
            required
            placeholder="Descrivi brevemente cosa è successo (ritardo, cancellazione, ecc.)"
            className="bg-primary-foreground/10 border-white/20 focus:border-secondary min-h-[120px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefono (opzionale per essere ricontattato)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Il tuo numero di telefono"
            className="bg-primary-foreground/10 border-white/20 focus:border-secondary"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="privacy" name="privacy" required />
            <Label htmlFor="privacy" className="text-sm font-normal">
              Acconsento al trattamento dei miei dati personali come descritto nella{' '}
              <a href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a> *
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" name="terms" required />
            <Label htmlFor="terms" className="text-sm font-normal">
              Dichiaro di aver preso visione e accettato i termini e condizioni del servizio -{' '}
              <a href="/termini-condizioni" className="text-secondary hover:underline">Vedi Termini e condizioni</a> *
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-black font-bold"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Invio in corso...
            </span>
          ) : (
            <span className="flex items-center"><Send className="mr-2 h-5 w-5" /> INVIA RICHIESTA!</span>
          )}
        </Button>

        <p className="text-white/60 text-sm text-center">
          In alternativa, puoi scriverci direttamente a{' '}
          <a href="mailto:info@giustiziainvolo.it" className="text-secondary hover:underline">info@giustiziainvolo.it</a>
        </p>
      </form>
    </>
  )
}

export default ContactForm
