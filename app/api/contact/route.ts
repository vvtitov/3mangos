import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const { data, error } = await resend.emails.send({
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

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
} 