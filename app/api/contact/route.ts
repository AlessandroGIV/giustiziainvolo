import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, flightNumber, flightDate, description, phone } = data

    // Configura il trasportatore email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) || false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Costruisci il contenuto dell'email
    const mailOptions = {
      from: process.env.EMAIL_FROM || "noreply@giustiziainvolo.it",
      to: process.env.EMAIL_TO || "info@giustiziainvolo.it",
      subject: `Nuova richiesta da ${name} - Volo ${flightNumber}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Numero di volo: ${flightNumber}
        Data del volo: ${flightDate}
        Telefono: ${phone || "Non fornito"}
        
        Descrizione del problema:
        ${description}
      `,
      html: `
        <h2>Nuova richiesta di assistenza</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Numero di volo:</strong> ${flightNumber}</p>
        <p><strong>Data del volo:</strong> ${flightDate}</p>
        <p><strong>Telefono:</strong> ${phone || "Non fornito"}</p>
        
        <h3>Descrizione del problema:</h3>
        <p>${description}</p>
      `,
    }

    // Invia l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Richiesta inviata con successo!" })
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error)
    return NextResponse.json(
      { success: false, message: "Si è verificato un errore nell'invio della richiesta." },
      { status: 500 },
    )
  }
}
