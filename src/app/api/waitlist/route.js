import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const { email } = await request.json();

    // Input validation
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // Sanitize input
    const sanitizedEmail = email.trim().toLowerCase();

    // Environment variable check
    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Create secure transporter
    const transporter = nodemailer.createTransporter({
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

    const escapedEmail = escapeHtml(sanitizedEmail);

    // Email to admin
    const adminMailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: 'admin@summitautomation.io',
      subject: 'New Waitlist Signup - Summit Automation',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p>A new user has joined the Summit Automation waitlist.</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `"Summit Automation" <${process.env.ZOHO_EMAIL}>`,
      replyTo: process.env.ZOHO_EMAIL,
      to: sanitizedEmail,
      subject: 'Welcome to Summit Automation Waitlist!',
      html: `
        <h2>Thanks for joining our waitlist!</h2>
        <p>Hi there,</p>
        <p>Thank you for your interest in Summit Automation. We're excited to have you on our waitlist!</p>
        <p>We'll keep you updated on our progress and let you know as soon as early access is available.</p>
        <p>Stay tuned for exciting updates!</p>
        <br>
        <p>Best regards,<br>The Summit Automation Team</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Successfully joined waitlist' }, { status: 200 });
  } catch (error) {
    console.error('Waitlist signup error:', error.message);
    return NextResponse.json({ 
      error: 'Failed to process waitlist signup. Please try again.' 
    }, { status: 500 });
  }
}