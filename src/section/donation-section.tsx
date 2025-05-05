import { Button } from "@/components/ui/button"

export const DonationSection = () => {

  return (
    <section className="bg-orange-50 w-full flex justify-center items-center py-12 md:py-24 lg:py-32 " id="donation">
      <div className="flex justify-center items-center flex-col gap-3 text-center px-4 md:px-6">
        <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
          Donasi Buku
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Punya Buku Bekas? Yuk Donasi</h1>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Buku lama kamu bisa jadi Jendela Dunia buat orang lain
        </p>

        <Button className="cursor-pointer">Klik Disini Untuk Donasi Buku</Button>
      </div>
    </section>
  )
}

