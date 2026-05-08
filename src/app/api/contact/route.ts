import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const htmlContent = `
      <div style="background-color: #080806; padding: 40px 20px; font-family: Arial, sans-serif; color: #fafafa;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #ab8600; padding: 40px; background-color: #0d0d0a;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #ab8600; font-size: 28px; text-transform: uppercase; margin: 0; letter-spacing: 4px; font-weight: 800;">180 TATTOO</h2>
            <p style="color: #666; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px;">Studio Inquiry</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid rgba(171, 134, 0, 0.2); margin-bottom: 30px;" />
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding-bottom: 15px;">
                <strong style="color: #ab8600; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; display: block; margin-bottom: 5px;">Client Name</strong>
                <div style="font-size: 16px; color: #fff;">${name}</div>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 15px;">
                <strong style="color: #ab8600; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; display: block; margin-bottom: 5px;">Email Address</strong>
                <a href="mailto:${email}" style="font-size: 16px; color: #fff; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 15px;">
                <strong style="color: #ab8600; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; display: block; margin-bottom: 5px;">Subject</strong>
                <div style="font-size: 16px; color: #fff;">${subject}</div>
              </td>
            </tr>
          </table>
          
          <strong style="color: #ab8600; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; display: block; margin-bottom: 10px;">Message</strong>
          <div style="background-color: rgba(255, 255, 255, 0.03); padding: 20px; border-left: 2px solid #ab8600; line-height: 1.6; font-size: 14px; color: #e0e0e0;">
            ${message}
          </div>
          
          <div style="margin-top: 40px; text-align: center; font-size: 9px; color: #555; text-transform: uppercase; letter-spacing: 2px;">
            Securely routed via 180tattoostudio.in
          </div>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: '180 Website <onboarding@resend.dev>',
      to: process.env.STUDIO_EMAIL || '180tattooaishuthiyagu@gmail.com',
      replyTo: email,
      subject: `[Website] ${subject} from ${name}`,
      html: htmlContent,
    });

    if (data.error) {
      console.error(data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
