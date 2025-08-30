import Image from 'next/image';

export default function StrukturOrganisasi() {
  const gambar = [
    {
      src: '/luffy.jpg',
      name: 'Budi Santoso, M.Pd',
      role: 'Kepala Sekolah',
    },
    {
      src: '/luffy.jpg',
      name: 'Siti Aminah, S.Pd',
      role: 'Wakil Kepala Sekolah',
    },
    {
      src: '/luffy.jpg',
      name: 'Ahmad Fauzi, S.Pd',
      role: 'Guru Senior',
    },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-slate-700">
        Struktur Organisasi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {gambar.map((person) => (
          <div
            key={person.name}
            className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 "
          >
            <Image
              src={person.src}
              alt={person.name}
              width={128}
              height={128}
              className="mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="font-bold text-lg">{person.name}</h3>
            <p className="text-slate-600">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
