'use client'

import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#eab308] rounded-full flex items-center justify-center shadow-md">
              <img
                src="https://res.cloudinary.com/docvcxodh/image/upload/v1753931682/d1a5d825-4848-40c7-9e49-e448bec0e176_fb5c1t.jpg"
                alt="Logo"
                className="object-cover rounded-full w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
                Одод Урлан
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Монгол дээл хувцасны урлан
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8 text-sm font-medium text-gray-700">
            <Link
              href="#products"
              className="hover:text-[#eab308] transition-colors"
            >
              Бүтээгдэхүүн
            </Link>
            <Link
              href="#custom"
              className="hover:text-[#eab308] transition-colors"
            >
              Захиалга
            </Link>
            <Link
              href="#about"
              className="hover:text-[#eab308] transition-colors"
            >
              Бидний тухай
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#eab308] transition-colors"
            >
              Холбоо барих
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
