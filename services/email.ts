'use server';

export async function sendEmail(formData: { name: string, text: string, email: string }) {
    const name = formData.name;
    const email = formData.email;
    const text = formData.text;
    console.log(process.env.RESEND_KEY);
    console.log('test serv');

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_KEY}`,
        },
        body: JSON.stringify({
            from: 'Portfolio <onboarding@resend.dev>',
            to: "gaut.montagne@gmail.com",
            subject: `Contact portfolio : ${name} | ${email}`,
            text: text,
        }),
    });

    return response.status;
}