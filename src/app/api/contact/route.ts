import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { resend } from "@/lib/email";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos invalidos", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const lead = await db.contactLead.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
      },
    });

    if (resend && process.env.CONTACT_NOTIFICATION_EMAIL) {
      await resend.emails.send({
        from: "Landing <onboarding@resend.dev>",
        to: process.env.CONTACT_NOTIFICATION_EMAIL,
        subject: "Nuevo contacto desde la landing",
        html: `
          <h2>Nuevo lead</h2>
          <p><strong>Nombre:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Mensaje:</strong> ${lead.message}</p>
        `,
      });
    }

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Error processing /api/contact:", error);
    return NextResponse.json(
      { error: "No se pudo procesar el formulario" },
      { status: 500 },
    );
  }
}
