import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "patrickkouassi7@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

/**
 * Envoie de mail
 *
 * @param {NextRequest} req
 * @returns
 */
export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[Objet] ${subject} - ${email}`,
      text: `Nom & prénom(s): ${name}\nEmail: ${email}\nObjet: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur lors de l'envoi du message : ${error.message}` },
      { status: 500 }
    );
  }
}
