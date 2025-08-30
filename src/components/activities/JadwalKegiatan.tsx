export default function JadwalKegiatan() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Jadwal Kegiatan</h2>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Tanggal</th>
            <th className="border border-gray-300 px-4 py-2">Kegiatan</th>
            <th className="border border-gray-300 px-4 py-2">Tempat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">12 Sept 2025</td>
            <td className="border border-gray-300 px-4 py-2">
              Seminar Teknologi
            </td>
            <td className="border border-gray-300 px-4 py-2">Aula Kampus</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">20 Okt 2025</td>
            <td className="border border-gray-300 px-4 py-2">
              Lomba Futsal Antar Fakultas
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Lapangan Indoor
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5 Nov 2025</td>
            <td className="border border-gray-300 px-4 py-2">
              Pentas Seni & Musik
            </td>
            <td className="border border-gray-300 px-4 py-2">Auditorium</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
