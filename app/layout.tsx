import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script" // Aggiunto per usare lo script GA

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GiustiziaInVolo | Rimborsi per voli in ritardo o cancellati",
  description:
    "Servizio legale italiano che assiste i passeggeri aerei vittime di ritardi o cancellazioni, con l'obiettivo di ottenere fino a 600 € di risarcimento secondo il Regolamento CE 261/2004.",
  keywords:
    "rimborso voli, volo cancellato, volo in ritardo, risarcimento aereo, diritti passeggeri, regolamento CE 261/2004",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${montserrat.variable} dark`} style={{ colorScheme: 'dark' }}>
      <head>
        {/* Vector favicon (SVG) */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="/Image-1.svg"
        />

        {/* PNG & ICO fallback */}
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon2.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-180x180.png"
        />
        <link
          rel="icon"
          href="/favicon-highres.ico"
        />

        {/* Structured Data per Knowledge Panel (usa SVG) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://giustiziainvolo.it",
            "logo": "https://giustiziainvolo.it/Image-1.svg"
          }
        `}
        </script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N9B7Q6PYCE"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N9B7Q6PYCE');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-primary text-white flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
