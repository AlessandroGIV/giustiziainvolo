"use client"

import React, { useState, useEffect } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Send } from "lucide-react"

const SERVICE = { 
  ID: "service_6z41q5s", 
  TEMPLATE: "template_cx9n3jk", 
  KEY: "QxbxF_zcEkttQ923p" 
}

function useLoadScript(src: string, onLoad: () => void) {
  useEffect(() => {
    const s = document.createElement("script")
    s.src = src
    s.async = true
    s.onload = onLoad
    document.head.append(s)
    return () => { document.head.removeChild(s) }
  }, [src, onLoad])
}

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  // Carica EmailJS
  useLoadScript(
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
    () => { (window as any).emailjs.init(SERVICE.KEY); setReady(true) }
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ready) return setError("Servizio non pronto"), void 0
    setSubmitting(true); setError(null)

    try {
      const data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement))
      const params = {
        name: data.name, email: data.email, phone: data.phone || "Non fornito",
        flight_number: data.flightNumber, flight_date: data.flightDate,
        message: data.description
      }
      const res = await (window as any).emailjs.send(
        SERVICE.ID, SERVICE.TEMPLATE, params
      )
      if (res.status !== 200) throw new Error("Status " + res.status)
      setSubmitted(true)
      ;(e.currentTarget as HTMLFormElement).reset()
    } catch (err: any) {
      setError(err.message || "Errore, riprova più tardi.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Script
          id="conv"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `gtag('event','conversion',{send_to:'AW-17322484652/ShEICO6s0usaEKzHgMRA'});`
          }}
        />
        <div className="bg-primary-foreground/10 p-8 rounded-lg text-center">
          <Mail className="h-8 w-8 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-secondary mb-2">Richiesta Inviata!</h3>
          <p className="text-white/80 mb-4">Grazie, ti risponderemo presto.</p>
          <Button onClick={() => setSubmitted(false)}>Nuova richiesta</Button>
        </div>
      </>
    )
  }

  // campi da renderizzare
  const fields = [
    { id: "name", label: "Nome e Cognome *", type: "text", required: true },
    { id: "email", label: "Email *", type: "email", required: true },
    { id: "flightNumber", label: "Numero di Volo *", type: "text", required: true },
    { id: "flightDate", label: "Data del Volo *", type: "date", required: true },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map(({ id, label, type, required }) => (
          <div key={id} className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} name={id}
              type={type} required={required}
              className="bg-primary-foreground/10 border-white/20 focus:border-secondary"
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Descrizione del Problema *</Label>
        <Textarea id="description" name="description" required
          className="bg-primary-foreground/10 border-white/20 focus:border-secondary min-h-[120px]" />
      </div>
      <div className="space-y-4">
        {["privacy","terms"].map((id, i) => (
          <div key={id} className="flex items-start space-x-2">
            <Checkbox id={id} required />
            <Label htmlFor={id} className="text-sm">
              { i===0 
                ? <>Acconsento alla <a href="/privacy-policy" className="text-secondary">Privacy Policy</a>*</>
                : <>Accetto <a href="/termini-condizioni" className="text-secondary">Termini e condizioni</a>*</>
              }
            </Label>
          </div>
        ))}
      </div>
      <Button type="submit" disabled={submitting} className="w-full bg-accent">
        {submitting 
          ? "Invio in corso…" 
          : <><Send className="mr-2 h-5 w-5"/> INVIA RICHIESTA!</>
        }
      </Button>
    </form>
  )
}
