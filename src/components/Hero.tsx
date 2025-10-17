import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Agustí Trullén
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mb-4 lg:mb-6">
              Ingeniero en Telecomunicaciones
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-3 lg:mb-4">
              Barcelona, Cataluña, España
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
              Especializado en desarrollo de software, mecánica, electrónica y telecomunicaciones. 
              Con una sólida base técnica y visión integral de sistemas complejos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <a
                href="#contacto"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg"
              >
                Contactar
              </a>
              <a
                href="https://www.linkedin.com/in/agust%C3%AD-trull%C3%A9n-b6839a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#0077B5] hover:bg-[#006399] text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
              <Image
                src="/AgustiTrullenProfile.png"
                alt="Agustí Trullén - Ingeniero en Telecomunicaciones"
                width={800}
                height={800}
                priority
                quality={100}
                className="relative rounded-full shadow-2xl object-cover w-full h-full border-4 border-blue-500 dark:border-blue-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
