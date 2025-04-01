import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, address, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // ✅ Pošalji odgovor odmah — email se šalje u pozadini
  sendMailInBackground({ name, email, phone, address, message });

  return NextResponse.json({ success: true });
}

// 🧠 Asinhrono slanje maila (ne blokira response)
async function sendMailInBackground(data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontakt forma" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: "Novi upit sa sajta",
      html: `
        <h3>📩 Novi kontakt upit</h3>
        <p><strong>Ime:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Adresa:</strong> ${data.address}</p>
        <p><strong>Poruka:</strong><br/>${data.message}</p>
      `,
    });

    console.log("✅ Mail uspešno poslat.");
  } catch (error) {
    console.error("❌ GREŠKA PRI SLANJU MAILA:", error);
  }
}
