import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if environment variables are loaded
    console.log('ZOHO_EMAIL:', process.env.ZOHO_EMAIL ? 'Set' : 'Not set');
    console.log('ZOHO_PASSWORD:', process.env.ZOHO_PASSWORD ? 'Set' : 'Not set');

    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      console.error('Missing environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Create transporter for Zoho Mail - CORRECTED METHOD NAME
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: 'admin@summitautomation.io',
      subject: 'New Waitlist Signup - Summit Automation',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p>A new user has joined the Summit Automation waitlist.</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `"Summit Automation" <${process.env.ZOHO_EMAIL}>`,
      replyTo: process.env.ZOHO_EMAIL,
      to: email,
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

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Successfully joined waitlist' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}