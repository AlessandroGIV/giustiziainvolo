import Link from "next/link"
import { Plane, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary-foreground/5 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-6 w-6 text-secondary" />
              <span className="text-xl font-bold text-secondary">GiustiziaInVolo</span>
            </div>
            <p className="text-white/80 mb-4">
              Servizio legale italiano che assiste i passeggeri aerei vittime di ritardi o cancellazioni.
            </p>
            <p className="text-secondary font-bold text-lg">Non lasciare il tuo rimborso a terra.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Collegamenti Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/come-funziona" className="text-white/80 hover:text-secondary transition-colors">
                  Come Funziona
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-white/80 hover:text-secondary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/compenso" className="text-white/80 hover:text-secondary transition-colors">
                  Modello di Compenso
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-white/80 hover:text-secondary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contattaci</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a
                  href="mailto:info@giustiziainvolo.it"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  info@giustiziainvolo.it
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-white/80">Compila il modulo per essere ricontattato</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} GiustiziaInVolo - Attività legale regolarmente esercitata
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-white/60 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/termini-condizioni" className="text-white/60 hover:text-secondary text-sm transition-colors">
                Termini e Condizioni
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
