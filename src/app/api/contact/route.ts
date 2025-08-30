import Prisma from '@/lib/prisma/prismaClient';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, pesan } = await req.json();

    if (!name || !email || !pesan) {
      return NextResponse.json(
        { message: 'Nama, email, dan pesan wajib diisi' },
        { status: 400 }
      );
    }

    // simpan ke database
    const contact = await Prisma.contact.create({
      data: { name, email, pesan },
    });

    // konfigurasi nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Stikom" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: 'Pesan Kontak Baru',
      text: `Nama: ${name}\nEmail: ${email}\nPesan: ${pesan}`,
      html: `<p><strong>Nama:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Pesan:</strong> ${pesan}</p>`,
    };

    // kirim email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: 'Data kontak berhasil disimpan dan email terkirim',
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      'Error saat menyimpan data kontak atau mengirim email:',
      error
    );
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
