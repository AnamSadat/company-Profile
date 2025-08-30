import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100/50 py-8">
      <div className="container mx-auto px-4">
        {/* Grid untuk konten footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Kolom 1: Identitas sekolah */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Sekolah Tinggi Ilmu Komputer Poltek Cirebon
            </h3>
            <p className="text-sm">
              Jl. Pendidikan dan Teknologi No. 45, Komplek Kampus Poltek
              Cirebon, Kelurahan Kuningan Kota, Kecamatan Kuningan, Kabupaten
              Kuningan, Jawa Barat, 45512, Indonesia
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Navigasi</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-blue-600">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-blue-600">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-600">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Hubungi Kami</h3>
            <p className="text-sm">Telp: (021) 123456</p>
            <p className="text-sm">Email: info@sekolahabc.sch.id</p>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <Link
                href="https://www.facebook.com/"
                className="hover:text-blue-600"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="hover:text-blue-600"
              >
                Instagram
              </Link>
              <Link
                href="https://www.youtube.com/"
                className="hover:text-blue-600"
              >
                YouTube
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Sekolah Tinggi Ilmu Komputer Poltek
          Cirebon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
