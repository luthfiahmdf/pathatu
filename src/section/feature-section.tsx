import { Book, Clock, Users } from "lucide-react"

export const FeatureSection = () => {
  return (



    <section id="tentang" className="w-full flex justify-center items-center py-12 md:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
              Mengapa Lapak Baca Gratis?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Kami Hadir untuk Semua Pecinta Buku
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lapak Baca Gratis didirikan dengan tujuan memberikan akses buku dan literasi untuk semua kalangan
              masyarakat.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Book className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold">Koleksi Lengkap</h3>
            <p className="text-gray-500">Ribuan buku dari berbagai genre tersedia untuk dibaca secara gratis.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold">Untuk Semua Usia</h3>
            <p className="text-gray-500">Dari anak-anak hingga dewasa, kami memiliki buku untuk semua kalangan.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold">Buka Setiap Hari</h3>
            <p className="text-gray-500">Kami buka setiap hari minggu untuk memastikan Anda selalu bisa membaca.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
