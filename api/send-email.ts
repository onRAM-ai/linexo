import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return res.status(400).json({ error: 'Name is required (max 100 characters).' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return res.status(400).json({ error: 'A valid email is required.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 2000) {
      return res.status(400).json({ error: 'Message is required (max 2000 characters).' });
    }

    // Validate optional fields
    if (company && (typeof company !== 'string' || company.length > 100)) {
      return res.status(400).json({ error: 'Company must be under 100 characters.' });
    }
    if (phone && (typeof phone !== 'string' || phone.length > 30)) {
      return res.status(400).json({ error: 'Phone must be under 30 characters.' });
    }
    if (service && (typeof service !== 'string' || service.length > 100)) {
      return res.status(400).json({ error: 'Service must be under 100 characters.' });
    }

    const sanitize = (str: string) => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const subject = `New Enquiry from ${sanitize(name.trim())}${service ? ` — ${sanitize(service)}` : ''}`;

    const htmlBody = `
      <h2>New Website Enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(name.trim())}</td></tr>
        ${company ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(company.trim())}</td></tr>` : ''}
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(email.trim())}</td></tr>
        ${phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(phone.trim())}</td></tr>` : ''}
        ${service ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(service)}</td></tr>` : ''}
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(message.trim()).replace(/\n/g, '<br>')}</td></tr>
      </table>
    `;

    const { data, error } = await resend.emails.send({
      from: 'LinExo Website <noreply@linexo.com.au>',
      to: 'info@linexo.com.au',
      replyTo: email.trim(),
      subject,
      html: htmlBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
