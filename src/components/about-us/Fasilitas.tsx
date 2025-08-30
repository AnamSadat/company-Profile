import Image from 'next/image';

export default function FasilitasSekolah() {
  const gambar = [
    { src: '/perpustakaan.jpg', title: 'Perpustakaan' },
    { src: '/komputer.jpg', title: 'Laboratorium Komputer' },
    { src: '/olahraga.jpg', title: 'Lapangan Olahraga' },
  ];
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-slate-700">
        Fasilitas Sekolah
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gambar.map((facility) => (
          <div
            key={facility.title}
            className="bg-white shadow rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 "
          >
            <Image
              src={facility.src}
              alt={facility.title}
              width={320}
              height={160}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold">{facility.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
