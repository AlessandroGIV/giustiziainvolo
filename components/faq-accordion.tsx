"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Quando ho diritto al risarcimento?",
    answer:
      "Hai diritto al risarcimento in caso di: volo cancellato (se informato meno di 14 giorni prima), ritardo all'arrivo superiore a 3 ore, negato imbarco per overbooking. Il Regolamento CE 261/2004 prevede risarcimenti da 250€ a 600€ in base alla distanza del volo. Esistono alcune eccezioni, come le 'circostanze eccezionali' (es. condizioni meteo estreme, scioperi non della compagnia, ecc.).",
  },
  {
    question: "Cosa succede con i voli in connessione?",
    answer:
      "Anche un ritardo apparentemente breve può dare diritto al risarcimento se ti fa perdere una coincidenza. Quello che conta è l'orario di arrivo finale a destinazione: se arrivi con più di 3 ore di ritardo rispetto all'orario previsto del volo in connessione, hai diritto al risarcimento. Ad esempio, se il primo volo ha 30 minuti di ritardo ma questo ti fa perdere la coincidenza e arrivi a destinazione finale con 4 ore di ritardo, hai diritto al risarcimento per l'intero viaggio. È importante che tutti i voli siano prenotati con un unico biglietto o che facciano parte dello stesso itinerario.",
  },
  {
    question: "Devo pagare qualcosa?",
    answer:
      "No, non devi pagare nulla in anticipo. Il nostro servizio è basato sul principio 'no win, no fee': se non otteniamo il risarcimento, non paghi nulla. In caso di successo, tratteniamo solo una percentuale dell'importo recuperato (20% per rimborsi da 250€ e 400€, 25% per quelli da 600€, più le eventuali spese legali liquidate dal giudice in caso di procedimento giudiziario).",
  },
  {
    question: "Cosa succede se la compagnia si oppone?",
    answer:
      "Se la compagnia aerea rifiuta la richiesta di risarcimento o non risponde alla nostra diffida, valutiamo insieme la possibilità di procedere in giudizio. A differenza di altri servizi, essendo avvocati possiamo rappresentarti direttamente in tribunale senza dover cedere la pratica ad altri professionisti, garantendo continuità e competenza nella gestione del tuo caso.",
  },
  {
    question: "Quanto dura il processo?",
    answer:
      "I tempi variano in base alla compagnia aerea e alla complessità del caso. Con una diffida, possiamo ottenere il risarcimento in 4-8 settimane. Se è necessario procedere in giudizio, i tempi si allungano a 6-12 mesi, a seconda del tribunale competente. Ti terremo costantemente aggiornato sullo stato della tua pratica.",
  },
  {
    question: "Posso farmi seguire anche se il volo è di mesi fa?",
    answer:
      "Sì, puoi richiedere il risarcimento fino a 2 anni (in alcuni paesi fino a 5 anni) dalla data del volo. Anche se sono passati diversi mesi, hai ancora diritto a richiedere il risarcimento. Ti consigliamo di conservare tutta la documentazione relativa al volo (biglietto, email di notifica della cancellazione, ricevute di spese extra, ecc.).",
  },
]

const FAQAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
          <AccordionTrigger className="text-left text-lg font-medium text-secondary hover:text-secondary/80 py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-white/80 pb-4">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FAQAccordion
