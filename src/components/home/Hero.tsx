'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
  const route = useRouter();
  return (
    <div className="w-full bg-cover bg-left bg-[url(/bg-hero.png)] flex items-center">
      <div className="container mx-auto px-6 md:px-0 py-34 flex flex-col gap-6 text-white">
        {/* Subtitle / Moto */}
        <h4 className="text-xl md:text-2xl uppercase font-semibold tracking-wide">
          Moto
        </h4>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-snug">
          Mengintegrasikan Teknologi dan Kreativitas untuk Masa Depan Lebih Baik
        </h1>

        {/* Button */}
        <div className="mt-6">
          <button
            onClick={() => route.push('/contact')}
            className="bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-3 px-6 rounded-lg"
          >
            Kontak
          </button>
        </div>
      </div>
    </div>
  );
}
