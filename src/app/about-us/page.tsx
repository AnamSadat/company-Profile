import FasilitasSekolah from '@/components/about-us/Fasilitas';
import ProfilKampus from '@/components/about-us/ProfilKampus';
import StrukturOrganisasi from '@/components/about-us/StrukturOrg';
import VisiMisi from '@/components/about-us/VisiMisi';

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
        Tentang Kami
      </h1>
      <ProfilKampus />
      <VisiMisi />
      <StrukturOrganisasi />
      <FasilitasSekolah />
    </div>
  );
}
