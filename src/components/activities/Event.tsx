import Image from 'next/image';

export default function EventTahunan() {
  const events = [
    {
      name: 'Ospek Mahasiswa Baru',
      img: '/luffy.jpg',
    },
    {
      name: 'Pekan Kreativitas Mahasiswa (PKM)',
      img: '/luffy.jpg',
    },
    {
      name: 'Lomba Debat, Hackathon, Seminar Nasional',
      img: '/luffy.jpg',
    },
    {
      name: 'Wisuda & Dies Natalis Kampus',
      img: '/luffy.jpg',
    },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Event Tahunan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.name}
            className="bg-white rounded-lg shadow-md p-4 text-center transition-all duration-300 hover:-translate-y-1 "
          >
            <Image
              src={event.img}
              alt={event.name}
              width={200}
              height={200}
              className="mx-auto rounded-lg object-cover mb-3"
            />
            <p className="font-semibold">{event.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
