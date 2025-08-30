import Image from 'next/image';

export default function OrganisasiMahasiswa() {
  const organisasi = [
    {
      name: 'Badan Eksekutif Mahasiswa (BEM)',
      img: '/luffy.jpg',
    },
    {
      name: 'Himpunan Mahasiswa Jurusan (HMJ)',
      img: '/luffy.jpg',
    },
    {
      name: 'Unit Kegiatan Mahasiswa (UKM) olahraga, seni, debat',
      img: '/luffy.jpg',
    },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Organisasi Mahasiswa</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {organisasi.map((org) => (
          <div
            key={org.name}
            className="bg-white rounded-lg shadow-md p-4 text-center transition-all duration-300 hover:-translate-y-1 "
          >
            <Image
              src={org.img}
              alt={org.name}
              width={200}
              height={200}
              className="mx-auto rounded-full object-cover mb-3"
            />
            <p className="font-semibold">{org.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
