'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const item = [
    { link: '/', label: 'Beranda' },
    { link: '/about-us', label: 'Tentang Kami' },
    { link: '/activities', label: 'Kegiatan' },
    { link: '/news', label: 'Berita' },
    { link: '/contact', label: 'Kontak' },
  ];

  return (
    <nav className="w-full top-0 bg-white sticky shadow-md z-100">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        {/* Logo / Title */}
        <div className="flex items-center gap-4">
          <Image
            src={'/logo-stikom.svg'}
            alt="logo stikom"
            width={45}
            height={0}
          />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-6">
          {item.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`hover:text-blue-500 transition ${
                pathname === item.link ? 'font-bold  border-b' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tombol burger (mobile) */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full ">
          <div className="flex flex-col space-y-4 p-4">
            {item.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`hover:text-blue-500 transition ${
                  pathname === item.link ? 'font-bold text-blue-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
