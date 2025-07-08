import Link from "next/link"
import ProcessStep from "@/components/process-step"
import { FileText, UserCheck, CreditCard } from "lucide-react"

export default function ComeFunziona() {
  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Come Funziona</h1>
            <p className="text-xl text-white/80">
              Un processo semplice e trasparente per ottenere il tuo risarcimento senza stress.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-foreground/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProcessStep
              number={1}
              title="Contattaci"
              description="Compila il modulo con i dati del tuo volo o scrivici direttamente via email. Valuteremo gratuitamente il tuo caso."
              icon={<FileText className="h-5 w-5 text-black" />}
            />

            <ProcessStep
              number={2}
              title="Ti seguiamo personalmente"
              description="Un avvocato reale, non un algoritmo, si occuperà del tuo caso. Nessun anticipo richiesto."
              icon={<UserCheck className="h-5 w-5 text-black" />}
            />

            <ProcessStep
              number={3}
              title="Ricevi il tuo rimborso"
              description="In caso di successo, ricevi il risarcimento. Tratteniamo solo una piccola quota concordata."
              icon={<CreditCard className="h-5 w-5 text-black" />}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Un Servizio Legale Reale</h2>
              <p className="text-white/80 mb-4">
                A differenza dei grandi servizi automatizzati, GiustiziaInVolo offre un'assistenza legale reale e
                personalizzata.
              </p>
              <p className="text-white/80 mb-4">
                Non ci sono moduli automatici né assistenza robotica. Ogni caso è seguito personalmente da un avvocato
                qualificato che conosce a fondo la normativa sui diritti dei passeggeri aerei.
              </p>
              <p className="text-white/80 mb-6">
                Questo approccio ci permette di valutare ogni sfumatura del tuo caso e di massimizzare le possibilità di
                ottenere il risarcimento che ti spetta.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-white/80">Assistenza legale personalizzata</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-white/80">Comunicazione diretta con il tuo avvocato</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-white/80">Possibilità di rappresentanza in giudizio</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-white/80">Nessun costo anticipato</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">Il Nostro Processo</h3>
              <ol className="space-y-6">
                <li className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Valutazione Gratuita</h4>
                    <p className="text-white/80">
                      Analizziamo i dettagli del tuo volo e verifichiamo se hai diritto a un risarcimento secondo il
                      Regolamento CE 261/2004.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Raccolta Documentazione</h4>
                    <p className="text-white/80">
                      Ti aiutiamo a raccogliere tutta la documentazione necessaria per supportare la tua richiesta di
                      risarcimento.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Invio Diffida</h4>
                    <p className="text-white/80">
                      Inviamo una diffida formale alla compagnia aerea, richiedendo il risarcimento previsto dalla
                      normativa.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Negoziazione</h4>
                    <p className="text-white/80">
                      Gestiamo tutte le comunicazioni con la compagnia aerea, negoziando per ottenere il miglior
                      risultato possibile.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Eventuale Azione Legale</h4>
                    <p className="text-white/80">
                      Se necessario, possiamo rappresentarti in giudizio per far valere i tuoi diritti.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Pagamento del Risarcimento</h4>
                    <p className="text-white/80">
                      Una volta ottenuto il risarcimento, ricevi il tuo denaro rapidamente, con la detrazione della
                      nostra quota concordata.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-foreground/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Pronto a Richiedere il Tuo Risarcimento?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Non lasciare che le compagnie aeree ignorino i tuoi diritti. Contattaci oggi stesso per una valutazione
            gratuita del tuo caso.
          </p>
          <Link href="/contatti" className="cta-button">
            Richiedi assistenza gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
