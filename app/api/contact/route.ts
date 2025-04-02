import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Validación básica
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Todos los campos son requeridos" },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'vladislavtitov.r@gmail.com',
            subject: `Nuevo mensaje de ${name}`,
            text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: "Mensaje enviado con éxito" }, { status: 200 });
    } catch (error) {
        console.error("Error en la API de contacto:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
} 