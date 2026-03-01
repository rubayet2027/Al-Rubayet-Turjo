import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // If you have nodemailer or a third-party email service configured,
    // integrate it here. For now, we construct a mailto-compatible response
    // so the client-side fallback handles it.
    //
    // Example with nodemailer (uncomment after npm install nodemailer):
    //
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: email,
    //   to: 'rubayetofficial2027@gmail.com',
    //   subject: `Portfolio Contact from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    // });
    // return NextResponse.json({ success: true });

    // Without email service configured, return 501 to trigger client-side mailto fallback
    return NextResponse.json(
      { error: 'Email service not configured. Using mailto fallback.' },
      { status: 501 }
    );
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
