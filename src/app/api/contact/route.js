import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit, getClientIP } from '@/lib/rateLimit';

// HTML escape function to prevent XSS
const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

export async function POST(request) {
  try {
    // Rate limiting - 3 contact submissions per 15 minutes per IP
    const clientIP = getClientIP(request);
    const rateLimitResult = rateLimit(`contact_${clientIP}`, 3, 15 * 60 * 1000);

    if (!rateLimitResult.success) {
      return NextResponse.json({
        error: rateLimitResult.message
      }, {
        status: 429,
        headers: { 'Retry-After': rateLimitResult.retryAfter.toString() }
      });
    }

    const { email, message } = await request.json();

    // Input validation
    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // Message length validation
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json({ 
        error: `Message must be between 10 and 2000 characters` 
      }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim();

    // Environment variable check
    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Create secure transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    // Escape HTML for security
    const escapedEmail = escapeHtml(sanitizedEmail);
    const escapedMessage = escapeHtml(sanitizedMessage).replace(/\n/g, '<br>');

    // Email to admin
    const adminMailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: 'clientservices@summitautomation.io',
      subject: 'New Contact Form Submission - Summit Automation',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <h3>Message:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #0066cc; margin: 10px 0;">
          ${escapedMessage}
        </div>
        <p>Please respond to this inquiry promptly.</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `"Summit Automation" <${process.env.ZOHO_EMAIL}>`,
      replyTo: process.env.ZOHO_EMAIL,
      to: sanitizedEmail,
      subject: 'Message Received - Summit Automation',
      html: `
        <h2>Thanks for reaching out!</h2>
        <p>Hi there,</p>
        <p>Thank you for contacting Summit Automation. We've received your message and will get back to you within 24 hours.</p>
        
        <h3>Your message:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #0066cc; margin: 10px 0;">
          ${escapedMessage}
        </div>
        
        <p>Whether you're interested in our business automation platform or custom web development services, we're excited to help your business grow.</p>
        <br>
        <p>Best regards,<br>The Summit Automation Team</p>
        <p><strong>Email:</strong> clientservices@summitautomation.io</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error.message);
    
    // Return user-friendly error message without exposing server details
    return NextResponse.json({ 
      error: 'Failed to send message. Please try again or contact us directly.' 
    }, { status: 500 });
  }
}