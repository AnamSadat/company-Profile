import Dokumentasi from '@/components/activities/Dokumentasi';
import EventTahunan from '@/components/activities/Event';
import JadwalKegiatan from '@/components/activities/JadwalKegiatan';
import OrganisasiMahasiswa from '@/components/activities/OrganisasiMahasiswa';
import React from 'react';

export default function Activities() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Kegiatan Mahasiswa
      </h1>

      {/* Organisasi Mahasiswa */}
      <OrganisasiMahasiswa />

      {/* Event Tahunan */}
      <EventTahunan />

      {/* Dokumentasi */}
      <Dokumentasi />

      {/* Jadwal Kegiatan */}
      <JadwalKegiatan />
    </div>
  );
}
