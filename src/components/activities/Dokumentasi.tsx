import Image from 'next/image';

export default function Dokumentasi() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Dokumentasi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <Image
          src="/dokumentasi.png"
          alt="Kegiatan 1"
          width={400}
          height={250}
          className="rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 aspect-square object-cover"
        />
        <Image
          src="/dokumentasi2.png"
          alt="Kegiatan 2"
          width={400}
          height={250}
          className="rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 aspect-square object-cover"
        />
        <Image
          src="/dokumentasi3.png"
          alt="Kegiatan 3"
          width={400}
          height={250}
          className="rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 aspect-square object-cover"
        />
      </div>
    </section>
  );
}
