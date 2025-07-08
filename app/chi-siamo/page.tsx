import Link from "next/link"
import { CheckCircle, Award, Briefcase } from "lucide-react"

export default function ChiSiamo() {
  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Chi Siamo</h1>
            <p className="text-xl text-white/80">Un team di avvocati specializzati nei diritti dei passeggeri aerei.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-foreground/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">La Nostra Storia</h2>
              <p className="text-white/80 mb-4">
                GiustiziaInVolo nasce dall'esperienza di un team di avvocati specializzati nel diritto dei trasporti e
                nella tutela dei consumatori.
              </p>
              <p className="text-white/80 mb-4">
                Il fondatore del progetto ha lavorato come legale per una nota compagnia aerea, acquisendo una
                conoscenza approfondita del settore e delle strategie utilizzate dalle compagnie per evitare di pagare i
                risarcimenti dovuti.
              </p>
              <p className="text-white/80 mb-6">
                Questa esperienza ci permette di conoscere il sistema dall'interno e di utilizzare questa conoscenza a
                vantaggio dei passeggeri, per far valere i loro diritti in modo efficace.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-white/80">Avvocati iscritti all'albo professionale</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-white/80">Esperienza diretta nel settore aereo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-white/80">Specializzati nel Regolamento CE 261/2004</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">La Nostra Missione</h3>
              <p className="text-white/80">
                Crediamo che ogni passeggero abbia diritto a un trattamento equo e a un risarcimento adeguato quando i
                suoi diritti vengono violati. La nostra missione è rendere questo processo semplice, trasparente e
                accessibile a tutti, senza costi iniziali e con un approccio umano e professionale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">I Nostri Valori</h2>
            <p className="text-white/80 text-lg">Principi che guidano il nostro lavoro quotidiano</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Trasparenza</h3>
              <p className="text-white/80">
                Comunichiamo in modo chiaro e diretto, senza promesse irrealistiche o costi nascosti. Saprai sempre a
                che punto è la tua pratica.
              </p>
            </div>

            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Professionalità</h3>
              <p className="text-white/80">
                Ogni caso è gestito con la massima competenza e serietà da avvocati qualificati, nel rispetto del codice
                deontologico.
              </p>
            </div>

            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Accessibilità</h3>
              <p className="text-white/80">
                Crediamo che la giustizia debba essere accessibile a tutti, indipendentemente dalle possibilità
                economiche. Per questo non chiediamo anticipi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-foreground/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Hai Subito un Disservizio Aereo?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Contattaci oggi stesso per una valutazione gratuita del tuo caso. Un avvocato reale analizzerà la tua
            situazione.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contatti" className="cta-button">
              Richiedi assistenza
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
