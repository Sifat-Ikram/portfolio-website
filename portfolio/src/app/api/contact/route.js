import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
    try {
        const { name, email, message, company } = await req.json();

        // honeypot: bots fill this hidden field, pretend success
        if (company) return NextResponse.json({ ok: true });

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string" ||
            name.trim().length < 2 ||
            !/^\S+@\S+\.\S+$/.test(email) ||
            message.trim().length < 10 ||
            name.length > 100 ||
            email.length > 200 ||
            message.length > 5000
        ) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL;
        if (!apiKey || !to) {
            return NextResponse.json(
                { error: "Email service is not configured" },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: [to],
            replyTo: email,
            subject: `New portfolio message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        if (error) {
            return NextResponse.json({ error: "Failed to send" }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}