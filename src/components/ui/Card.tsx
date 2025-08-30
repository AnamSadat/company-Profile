import Image from 'next/image';
import React from 'react';

export default function SimpleCard() {
  return (
    <div className="max-w-sm rounded-2xl border bg-white shadow-md overflow-hidden">
      <Image
        className="w-full h-40 object-cover"
        src="/hero.png"
        alt="Card Image"
        width={200}
        height={0}
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">Judul Card</h2>
        <p className="text-gray-600 text-sm">
          Ini adalah deskripsi singkat untuk card sederhana menggunakan Tailwind
          CSS.
        </p>
        <button className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Aksi
        </button>
      </div>
    </div>
  );
}
