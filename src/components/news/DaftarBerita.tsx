import { Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ContentBerita() {
  const newsList = [
    {
      id: 1,
      title:
        'Pelatihan dan Workshop Pengembangan Media Pembelajaran berbasis Augmented Reality',
      date: '5–7 Juli 2021',
      description:
        'STIKOM Poltek Cirebon menyelenggarakan pelatihan dan workshop untuk pengembangan media pembelajaran berbasis Augmented Reality.',
      image: '/luffy.jpg',
      link: 'https://www.stikompoltekcirebon.ac.id/v1/index.php',
    },
    {
      id: 2,
      title: 'KBM Setelah Libur Lebaran',
      date: '24 Mei 2021',
      description:
        'Kegiatan belajar mengajar di STIKOM Poltek Cirebon dimulai kembali setelah libur Lebaran.',
      image: '/luffy.jpg',
      link: 'https://www.stikompoltekcirebon.ac.id/v1/index.php',
    },
    {
      id: 3,
      title: 'Beasiswa KIP-K 2023/2024',
      date: '26 Juli 2023',
      description:
        'Pendaftaran Beasiswa KIP-K untuk tahun ajaran 2023/2024 telah dibuka di STIKOM Poltek Cirebon.',
      image: '/luffy.jpg',
      link: 'https://www.stikompoltekcirebon.ac.id/v1/index.php',
    },
    {
      id: 4,
      title: 'UAS Praktikum Semester Genap 2020/2021',
      date: '26 Juli 2023',
      description:
        'Ujian Akhir Semester Praktikum untuk semester genap 2020/2021 akan diselenggarakan pada tanggal 26 Juli 2023.',
      image: '/luffy.jpg',
      link: 'https://www.stikompoltekcirebon.ac.id/v1/index.php',
    },
    {
      id: 5,
      title: 'Ujian Akhir Semester Genap 2020/2021',
      date: '26 Juli 2023',
      description:
        'Ujian Akhir Semester untuk semester genap 2020/2021 akan diselenggarakan mulai tanggal 26 Juli 2023.',
      image: '/luffy.jpg',
      link: 'https://www.stikompoltekcirebon.ac.id/v1/index.php',
    },
    {
      id: 6,
      title: 'Workshop Pengembangan Bahan Ajar Berbasis Augmented Reality (AR)',
      date: '26 Juli 2023',
      description:
        'STIKOM Poltek Cirebon bekerja sama dengan SEAMOLEC menyelenggarakan Workshop Pengembangan Media Pembelajaran berbasis Augmented Reality (AR).',
      image: '/luffy.jpg',
      link: 'https://www.stikompoltekcirebon.ac.id/v1/index.php',
    },
  ];

  const [search, setSearch] = useState('');

  const filteredNews = newsList.filter((news) =>
    news.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Cari berita..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Berita tidak ditemukan.
          </p>
        )}
      </div>
    </>
  );
}
