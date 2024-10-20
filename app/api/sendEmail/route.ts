import nodemailer from 'nodemailer'

export async function POST(request: Request) {

    const { subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'zoho',
        host: 'smtpro.zoho.in',
        port: 465,
        secure: true,
        auth: {
            user: 'careeros@tryporpra.com',
            pass: process.env.NEXT_PUBLIC_PASSWORD
        }
    })

    const mailOption = {
        from: 'careeros@tryporpra.com',
        to: 'amroalmutasim22@gmail.com',
        subject: "Send Email Tutorial",
        html: `
    <h3>Hello Amro</h3>
    <li> title: ${subject}</li>
    <li> message: ${message}</li> 
    `
}

    await transporter.sendMail(mailOption)
}



