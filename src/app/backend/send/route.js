import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const receiveEmail = process.env.RECEIVE_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [receiveEmail, email],
      subject: `Re: ${subject}`,
      react: (
        <>
          <p>Hi there,</p>
          <p></p>
          <p>Thank you for reaching out. Below is the confirmation of the message you sent:</p>
          <blockquote style={{ borderLeft: "2px solid #f0f0f0", marginLeft: 0, paddingLeft: "15px", fontStyle: "italic" }}>
            <p>{message}</p>
          </blockquote>
          <p>I will get back to you as soon as possible.</p>
          <p></p>
          <p>Best regards,</p>
          <p>Lucas</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
