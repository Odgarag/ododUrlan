import Image from 'next/image'

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Одод Урлан цех"
              width={600}
              height={500}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
              Бидний тухай
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              "Одод Урлан" нь 2008 онд байгуулагдсан монголын уламжлалт хувцас,
              гоёл чимэглэлийн цех юм. Бид өвөг дээдсийн уламжлалыг хадгалж,
              орчин үеийн хэрэгцээнд нийцүүлэн өвөрмөц бүтээгдэхүүн бүтээж
              байна.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Манай багт мэргэжлийн оёдолчид, загвар зохион бүтээгчид ажиллаж,
              чанартай материал ашиглан гар урлалын өндөр түвшинд хүрсэн
              бүтээгдэхүүн үйлдвэрлэж байна.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                  15+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Жилийн туршлага
                </p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                  500+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Сэтгэл хангалуун үйлчлүүлэгч
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
