import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const receiveEmail = process.env.RECEIVE_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  async function sendEmail(to, subject, htmlContent) {
    try {
      return await resend.emails.send({
        from: fromEmail,
        to: [to],
        subject: subject,
        react: htmlContent,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }

  const visitorEmailContent = (
    <>
      <p>Hi there,</p>
      <p>Thank you for reaching out! Below is the confirmation of the message you sent:</p>
      <blockquote style={{ borderLeft: "2px solid #f0f0f0", marginLeft: 0, paddingLeft: "15px", fontStyle: "italic" }}>
        <p>{message}</p>
      </blockquote>
      <p>I will get back to you as soon as possible.</p>
      <p>Best regards,</p>
      <p>Lucas</p>
    </>
  );

  const selfEmailContent = (
    <>
      <p>Lucas,</p>
      <p>You received a new message via the website:</p>
      <blockquote style={{ borderLeft: "2px solid #f0f0f0", marginLeft: 0, paddingLeft: "15px", fontStyle: "italic" }}>
        <p>{message}</p>
      </blockquote>
      <p>From: {email}</p>
      <p>Subject: {subject}</p>
      <p>Best regards,</p>
      <p>Your Website</p>
    </>
  );

  const visitorResponse = await sendEmail(email, `Message Confirmed: ${subject}`, visitorEmailContent);
  const selfResponse = await sendEmail(receiveEmail, `New message received: ${subject}`, selfEmailContent);

  return NextResponse.json({ visitorResponse, selfResponse });
}
