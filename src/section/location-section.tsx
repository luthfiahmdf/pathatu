import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, MapPin } from "lucide-react"

export const LocationSection = () => {
  return (
    <section id="location" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-32 items-center gap-4">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
            Lokasi Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kunjungi Lapak Baca Gratis</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Kami berlokasi di tempat yang strategis dan mudah dijangkau. Datang dan nikmati suasana membaca yang
            nyaman.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-orange-600 mr-2" />
              <span>Kawasan Dwipapuri Abadi</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-orange-600 mr-2" />
              <span>Minggu: 07.00 - 10.00 WIB</span>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/1Zjb4o6tWLrnD2ut5" target="_blank">
            <Button size="lg" className="bg-orange-600 cursor-pointer hover:bg-orange-700">
              Petunjuk Arah
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="w-full lg:w-1/2 h-[400px]">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Pt%20Iwaki+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            title="Lokasi PT Iwaki"
          />
        </div>
      </div>
    </section>
  )
}
