import FAQAccordion from "@/components/faq-accordion"
import Link from "next/link"

export default function FAQ() {
  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Domande Frequenti</h1>
            <p className="text-xl text-white/80">
              Risposte alle domande più comuni sul risarcimento per disservizi aerei.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-foreground/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />

            <div className="mt-12 text-center">
              <p className="text-white/80 mb-6">Non hai trovato la risposta che cercavi? Contattaci direttamente.</p>
              <Link href="/contatti" className="cta-button">
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Hai Subito un Disservizio Aereo?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Non lasciare che le compagnie aeree ignorino i tuoi diritti. Contattaci oggi stesso per una valutazione
            gratuita del tuo caso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contatti" className="cta-button">
              Richiedi assistenza gratuita
            </Link>
            <Link href="/come-funziona" className="secondary-button">
              Scopri come funziona
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
