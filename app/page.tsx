import HeroSection from "@/components/hero-section"
import Link from "next/link"
import { ArrowRight, CheckCircle, Plane } from "lucide-react"

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-primary-foreground/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Perché Scegliere GiustiziaInVolo</h2>
            <p className="text-white/80 text-lg">
              Un servizio legale professionale gestito da avvocati veri, non da algoritmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold text-secondary">Assistenza Legale Reale</h3>
              </div>
              <p className="text-white/80">
                Il tuo caso è seguito da un avvocato vero, non da un algoritmo o da un call center.
              </p>
            </div>

            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold text-secondary">Nessun Costo Anticipato</h3>
              </div>
              <p className="text-white/80">
                Paghi solo in caso di successo, con una percentuale trasparente e contenuta.
              </p>
            </div>

            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold text-secondary">Esperienza nel Settore</h3>
              </div>
              <p className="text-white/80">
                Conosciamo il settore dall'interno, avendo lavorato anche per compagnie aeree.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/come-funziona"
              className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium"
            >
              Scopri come funziona
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Hai Diritto al Risarcimento?</h2>
            <p className="text-white/80 text-lg">Il Regolamento CE 261/2004 tutela i passeggeri in caso di:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Volo Cancellato</h3>
              <p className="text-white/80">Se il tuo volo è stato cancellato con meno di 14 giorni di preavviso.</p>
            </div>

            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Volo in Ritardo</h3>
              <p className="text-white/80">Se il tuo volo è arrivato a destinazione con più di 3 ore di ritardo.</p>
            </div>

            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Negato Imbarco</h3>
              <p className="text-white/80">
                Se ti è stato negato l'imbarco per overbooking o altre ragioni non dipendenti da te.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contatti" className="cta-button">
              Verifica il tuo diritto gratuitamente
            </Link>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </section>
    </>
  )
}
