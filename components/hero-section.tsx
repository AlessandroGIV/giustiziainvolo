import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4">
              Volo in ritardo o cancellato?
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-secondary mb-6">Non lasciare il tuo rimborso a terra.</p>
            <p className="text-xl md:text-2xl text-white mb-8">
              Potresti avere diritto fino a <span className="font-bold text-secondary">600 €</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contatti" className="cta-button">
                Scopri gratis se ti spetta
              </Link>
              <Link href="/come-funziona" className="secondary-button">
                Come funziona
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">{/* QR Code rimosso */}</div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default HeroSection
