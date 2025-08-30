import { Book, Cpu, Star, Briefcase } from 'lucide-react';

export default function ProgramUnggulan() {
  return (
    <div className="container mx-auto py-30 text-white mb-20">
      <div className="flex flex-col md:flex-row gap-12 px-6 md:gap-32">
        <div className="max-w-2xl flex flex-col gap-6">
          <h3 className="text-2xl">Program Unggulan</h3>
          <h1 className="text-5xl font-bold">
            Sekolah Tinggi Ilmu Komputer Poltek Cirebon
          </h1>
          <p>
            Kami memadukan kurikulum akademik dengan pengembangan skill digital
            dan soft skill mahasiswa. Fokus pada inovasi, prestasi, dan kesiapan
            karier.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-2 bg-blue-600 p-5 rounded-xl">
            <Cpu className="w-10 h-10" />
            <h3 className="text-lg font-semibold">Inovasi Digital</h3>
          </div>
          <div className="flex flex-col items-center gap-2 bg-green-600 p-5 rounded-xl">
            <Star className="w-10 h-10" />
            <h3 className="text-lg font-semibold">Beasiswa & Prestasi</h3>
          </div>
          <div className="flex flex-col items-center gap-2 bg-purple-600 p-5 rounded-xl">
            <Book className="w-10 h-10" />
            <h3 className="text-lg font-semibold">Ekstrakurikuler</h3>
          </div>
          <div className="flex flex-col items-center gap-2 bg-yellow-600 p-5 rounded-xl">
            <Briefcase className="w-10 h-10" />
            <h3 className="text-lg font-semibold">Magang & Karier</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
