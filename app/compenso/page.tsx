import Link from "next/link"
import { Euro, Percent, FileText, AlertCircle } from "lucide-react"

export default function Compenso() {
  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Modello di Compenso</h1>
            <p className="text-xl text-white/80">Un sistema trasparente e senza costi anticipati.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-foreground/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Nessun Anticipo Richiesto</h2>
                <p className="text-white/80 mb-4">
                  Il nostro modello di compenso è basato sul principio "no win, no fee": se non otteniamo il
                  risarcimento per te, non paghi nulla.
                </p>
                <p className="text-white/80 mb-6">
                  Solo in caso di successo tratteniamo una percentuale dell'importo recuperato, sempre trasparente e
                  concordata in anticipo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Euro className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-white/80">Nessun costo iniziale o nascosto</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Percent className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-white/80">Percentuale contenuta e trasparente</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-white/80">Accordo scritto chiaro e dettagliato</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-secondary mb-6">La Nostra Quota</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="text-white/80">
                        <span className="font-bold text-white">In caso di successo con diffida:</span> tratteniamo solo
                        il 20-25% dell'importo recuperato (20% per rimborsi da 250€ e 400€, 25% per quelli da 600€).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="text-white/80">
                        <span className="font-bold text-white">In caso di giudizio:</span> tratteniamo quanto liquidato
                        dal giudice come spese legali + la medesima quota minima.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="text-white/80">
                        <span className="font-bold text-white">Limite massimo:</span> mai oltre una percentuale massima
                        del 25% dell'importo recuperato.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-white/80 text-sm">
                      In caso di insuccesso, non dovrai pagare nulla. Ci assumiamo interamente il rischio della pratica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Esempi Concreti</h2>
              <p className="text-white/80 text-center mb-8">
                Ecco alcuni esempi di quanto potresti ricevere in diversi scenari:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-secondary/20">
                      <th className="p-4 text-left text-secondary border border-white/10">Scenario</th>
                      <th className="p-4 text-left text-secondary border border-white/10">Risarcimento</th>
                      <th className="p-4 text-left text-secondary border border-white/10">Quota trattenuta</th>
                      <th className="p-4 text-left text-secondary border border-white/10">Tu ricevi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border border-white/10">Volo cancellato, rimborso ottenuto con diffida</td>
                      <td className="p-4 border border-white/10">250 €</td>
                      <td className="p-4 border border-white/10">50 € (20%)</td>
                      <td className="p-4 border border-white/10 font-bold text-secondary">200 €</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="p-4 border border-white/10">
                        Volo in ritardo di 4 ore, rimborso ottenuto con diffida
                      </td>
                      <td className="p-4 border border-white/10">400 €</td>
                      <td className="p-4 border border-white/10">80 € (20%)</td>
                      <td className="p-4 border border-white/10 font-bold text-secondary">320 €</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-white/10">Volo cancellato, rimborso ottenuto in giudizio</td>
                      <td className="p-4 border border-white/10">600 €</td>
                      <td className="p-4 border border-white/10">150 € (25%)</td>
                      <td className="p-4 border border-white/10 font-bold text-secondary">450 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">Perché Questo Modello?</h3>
              <p className="text-white/80 mb-4">
                Abbiamo scelto questo modello di compenso per rendere il servizio accessibile a tutti, indipendentemente
                dalle possibilità economiche.
              </p>
              <p className="text-white/80 mb-4">
                Crediamo che i passeggeri non debbano sostenere ulteriori costi dopo aver già subito un disservizio da
                parte della compagnia aerea.
              </p>
              <p className="text-white/80">
                Inoltre, questo modello allinea i nostri interessi con i tuoi: siamo motivati a ottenere il massimo
                risarcimento possibile nel minor tempo possibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Trasparenza e Chiarezza</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Prima di iniziare, riceverai un accordo scritto che specifica chiaramente tutti i termini del nostro
            rapporto, inclusa la quota che tratterremo in caso di successo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contatti" className="cta-button">
              Richiedi assistenza gratuita
            </Link>
            <Link href="/faq" className="secondary-button">
              Leggi le FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
