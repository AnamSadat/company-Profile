import Image from 'next/image';

export default function VisiMisi() {
  const misi = [
    {
      no: '1',
      paragraf:
        'Menyelenggarakan pendidikan berbasis ICT yang relevan dengan kebutuhan pasar kerja, melalui kurikulum vokasional yang adaptif, berbasis proyek, dan terintegrasi dunia industri.',
    },
    {
      no: '2',
      paragraf:
        'Mengembangkan penelitian terapan dan inovasi teknologi, baik di lingkup dosen maupun mahasiswa, yang memberi manfaat nyata bagi masyarakat dan lingkungan lokal.',
    },
    {
      no: '3',
      paragraf:
        'Meningkatkan pengabdian kepada masyarakat, khususnya dalam pemanfaatan teknologi informasi untuk pemberdayaan ekonomi, UMKM, dan solusi lokal.',
    },
    {
      no: '4',
      paragraf:
        'Membangun ekosistem pembelajaran mendukung inovasi, termasuk laboratorium modern (multimedia, robotik, jaringan, akuntansi), sertifikasi profesional (Cisco, Oracle, TOEFL, dll.), serta fasilitas ICT seperti e-learning, digital library, dan hotspot nonstop.',
    },
  ];

  return (
    <div className="container mx-auto py-20 px-6">
      <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start">
        {/* Gambar */}
        <figure className="flex-shrink-0 md:w-1/2">
          <Image
            src="/visimisi.jpg"
            alt="Visi dan Misi"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </figure>

        {/* Konten */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-blue-600">Visi dan Misi</h1>

          {/* Visi */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi perguruan tinggi vokasi unggulan berbasis ICT di wilayah
              Cirebon dan sekitarnya, yang menghasilkan lulusan inovatif,
              adaptif, dan berdaya saing tinggi di era digital.
            </p>
          </div>

          {/* Misi */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Misi</h3>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              {misi.map((item) => (
                <li key={item.no} className="leading-relaxed">
                  {item.paragraf}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
