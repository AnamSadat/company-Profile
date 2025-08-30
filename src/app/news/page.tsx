'use client';

import ContentBerita from '@/components/news/DaftarBerita';
export default function News() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      {/* Judul */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Berita Terbaru
        </h2>
        <p className="text-gray-600">
          Ikuti update terbaru seputar kegiatan dan prestasi sekolah kami.
        </p>
      </div>

      <ContentBerita />
    </section>
  );
}
