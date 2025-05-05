import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const MainSection = () => {
  return (

    <section id="beranda" className="w-full py-6 md:py-24 lg:py-32  bg-orange-50">
      <div className="flex justify-center flex-col md:flex-row px-6  gap-14  items-center">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
            Baca Gratis untuk Semua
          </div>
          <h1 className="text-3xl font-bold max-w-2/3 tracking-tighter sm:text-5xl md:text-6xl">
            Temukan Dunia Baru Melalui Buku
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Lapak Baca Gratis adalah tempat di mana semua orang dapat membaca buku secara gratis. Kami percaya
            bahwa akses terhadap buku dan pengetahuan adalah hak setiap orang.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Kunjungi Sekarang
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Lihat Koleksi Buku
            </Button>
          </div>
        </div>
        <div className=" w-full max-w-[500px] relative aspect-video lg:aspect-square overflow-hidden rounded-xl">
          <img
            src="/placeholder.svg"
            alt="Lapak Baca Gratis"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
