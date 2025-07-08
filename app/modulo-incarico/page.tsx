import Link from "next/link"
import { FileText, Download } from "lucide-react"

export default function ModuloIncarico() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Modulo di Incarico</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Qui puoi scaricare il modulo di incarico professionale per avviare la tua pratica di risarcimento.
            </p>
          </div>

          <div className="bg-primary-foreground/10 p-8 rounded-lg mb-12">
            <div className="flex items-center justify-center mb-8">
              <FileText className="h-16 w-16 text-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-4 text-center">Modulo di Incarico Professionale</h2>
            <p className="text-white/80 text-center mb-8">
              Questo documento regola il rapporto professionale tra te e GiustiziaInVolo per la gestione della tua
              pratica di risarcimento.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex items-center bg-secondary hover:bg-secondary/90 text-black font-bold py-3 px-6 rounded-md transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Scarica il Modulo
              </a>
            </div>
          </div>

          <div className="bg-primary-foreground/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-secondary mb-6">Istruzioni per la Compilazione</h2>
            <ol className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="text-white/80">Scarica il modulo di incarico professionale in formato PDF.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="text-white/80">
                    Compila tutti i campi richiesti con i tuoi dati personali e le informazioni sul volo.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="text-white/80">
                    Firma il modulo negli spazi indicati (firma digitale o firma autografa scansionata).
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="text-white/80">Allega una copia del tuo documento d'identità.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                  5
                </div>
                <div>
                  <p className="text-white/80">
                    Invia il modulo compilato e firmato, insieme alla documentazione richiesta, all'indirizzo email
                    info@giustiziainvolo.it.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/30">
              <div className="flex items-start space-x-3">
                <div className="text-accent mt-1">⚠️</div>
                <p className="text-white/80 text-sm">
                  Nota: Il modulo di incarico è necessario solo dopo la valutazione preliminare del tuo caso. Se non hai
                  ancora contattato GiustiziaInVolo, ti consigliamo di compilare prima il modulo di contatto.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contatti" className="text-secondary hover:text-secondary/80 font-medium">
                Vai al modulo di contatto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
