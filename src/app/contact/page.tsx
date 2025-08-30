'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaForm, type SchemaFormInput } from '@/validator/contact';
import { postContact } from '@/lib/prisma/apiPrisma';
import Swal from 'sweetalert2';

interface ServerError {
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SchemaFormInput>({
    resolver: zodResolver(SchemaForm),
    defaultValues: {
      name: '',
      email: '',
      pesan: '',
    },
  });

  const onSubmit = async (data: SchemaFormInput) => {
    try {
      const res = await postContact({
        name: data.name,
        email: data.email,
        pesan: data.pesan,
      });
      console.log('🚀 ~ onSubmit ~ res:', res);
      Swal.fire({
        title: 'Berhasil dikirim',
        text: 'Silahkan ditunggu follow up nya',
        icon: 'success',
      });
      reset();
    } catch (err: unknown) {
      const error = err as ServerError;
      console.error('Error: ', err);
      Swal.fire({
        title: 'Gagal mengirim',
        text: error.message || 'Terjadi kesalahan',
        icon: 'error',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12 px-6 pt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center  mb-8">Contact Us</h2>

        {/* Info Kontak */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <p className="text-gray-600 mb-2">
              📍 Alamat: Jl. Pendidikan No. 123, Kuningan
            </p>
            <p className="text-gray-600 mb-2">📞 Telepon: (0232) 123456</p>
            <p className="text-gray-600">✉️ Email: info@sekolahku.ac.id</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Jam Operasional</h3>
            <p className="text-gray-600">Senin - Jumat: 08.00 - 15.00</p>
            <p className="text-gray-600">Sabtu: 08.00 - 12.00</p>
            <p className="text-gray-600">Minggu & Hari Libur: Tutup</p>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="bg-white shadow-lg p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Kirim Pesan
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                {...register('pesan')}
                rows={4}
                placeholder="Tulis pesan Anda di sini"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
              {errors.pesan && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pesan.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition cursor-pointer"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
