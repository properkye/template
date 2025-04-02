import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, address, message } = await req.json();

  if (!name || !email || !message || !phone || !address) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

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
      to: process.env.EMAIL_USER, // ili direktno firmi kasnije
      replyTo: email, // korisnikov email
      subject: "Novi upit sa sajta",
      html: `
        <h3>📩 Novi kontakt upit</h3>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Adresa:</strong> ${address}</p>
        <p><strong>Poruka:</strong><br/>${message}</p>
      `,
    });

    console.log("✅ Mail uspešno poslat.");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ GREŠKA PRI SLANJU MAILA:", error);
    return NextResponse.json({ error: "Greška pri slanju maila" }, { status: 500 });
  }
}
