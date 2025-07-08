import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contatti() {
  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Contattaci</h1>
            <p className="text-xl text-white/80">Compila il modulo per una valutazione gratuita del tuo caso.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-foreground/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Su mobile, il modulo appare per primo */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-secondary mb-6">Richiedi Assistenza</h2>
              <p className="text-white/80 mb-8">
                Compila il modulo con i dettagli del tuo volo e un nostro avvocato valuterà gratuitamente il tuo caso.
                Ti risponderemo entro 24-48 ore lavorative.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <a href="mailto:info@giustiziainvolo.it" className="text-secondary hover:underline">
                      info@giustiziainvolo.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Telefono</h3>
                    <p className="text-white/80">Compila il modulo per essere ricontattato telefonicamente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Sede Legale</h3>
                    <p className="text-white/80">Studio Legale Petrecca, Venafro (IS), Italia</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Documenti Utili</h3>
                <p className="text-white/80 mb-4">
                  Per velocizzare la valutazione del tuo caso, è utile avere a disposizione:
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary">•</span>
                    <span>Biglietto aereo o conferma di prenotazione</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary">•</span>
                    <span>Email di notifica della cancellazione (se disponibile)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary">•</span>
                    <span>Carte d'imbarco</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary">•</span>
                    <span>Ricevute di eventuali spese extra sostenute</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary">•</span>
                    <span>Eventuali comunicazioni con la compagnia aerea</span>
                  </li>
                </ul>
                <p className="text-white/80 mt-4">
                  Non preoccuparti se non hai tutti questi documenti: possiamo aiutarti a recuperarli.
                </p>
              </div>
            </div>

            {/* Su mobile, le informazioni appaiono per seconde */}
            <div className="order-1 lg:order-2 bg-primary-foreground/10 p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
