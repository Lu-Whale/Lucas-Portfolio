import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email);
  console.log(subject);
  console.log(message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Hi there,</p>
          <p>&nbsp;</p>
          <p>This is Jingyu(Lucas), thank you for reaching out!</p>
          <p>&nbsp;</p>
          <p>Message sent:</p>
          <p>{message}</p>
          <p>&nbsp;</p>
          <p>Best regards,</p>
          <p>&nbsp;</p>
          <p>Lucas</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
