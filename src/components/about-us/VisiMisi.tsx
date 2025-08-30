export default function VisiMisi() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-slate-700">
        Visi & Misi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Visi</h3>
          <p className="text-slate-600">
            “Menjadi sekolah unggul yang menghasilkan peserta didik berprestasi,
            berakhlak mulia, dan mampu bersaing di era global.”
          </p>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Misi</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Meningkatkan kualitas pembelajaran berbasis teknologi.</li>
            <li>
              Mengembangkan potensi siswa melalui kegiatan akademik dan
              non-akademik.
            </li>
            <li>
              Membentuk karakter siswa yang beriman, disiplin, dan bertanggung
              jawab.
            </li>
            <li>Meningkatkan kerjasama dengan orang tua dan masyarakat.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
