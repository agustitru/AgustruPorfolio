import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          Acerca de mí
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 sm:mb-12 w-full">
          {/* Image */}
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
              <Image
                src="/AgustiTrullenProfile.png"
                alt="Agustí Trullén"
                width={800}
                height={800}
                quality={100}
                className="relative rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 order-2 lg:order-2">
            <p>
              Soy <span className="font-semibold text-blue-600 dark:text-blue-400">Agustí Trullén</span>, ingeniero en telecomunicaciones con experiencia en los ámbitos de la mecánica, 
              la electrónica y el desarrollo de software. A lo largo de mi trayectoria he cultivado una sólida 
              base técnica y una visión integral de sistemas complejos, lo que me permite abordar desafíos desde 
              una perspectiva multidisciplinaria.
            </p>
            
            <p>
              Mi enfoque se caracteriza por una mentalidad analítica, curiosa y adaptable. Me motiva entender 
              cómo interactúan la tecnología, la economía y la política, y cómo esa intersección puede generar 
              soluciones innovadoras con impacto real.
            </p>
            
            <p>
              Estoy en constante búsqueda de proyectos donde pueda aplicar mis conocimientos técnicos mientras 
              sigo aprendiendo y creciendo profesionalmente. Creo firmemente que el valor de un perfil técnico 
              se potencia cuando se combina con una visión estratégica y transversal.
            </p>
          </div>
        </div>

        
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 italic max-w-3xl mx-auto px-4">
            "Si buscas colaborar con alguien que aporte tanto profundidad técnica como pensamiento crítico y 
            abierto, estaré encantado de conectar."
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">+6 Años</h3>
            <p className="text-gray-600 dark:text-gray-400">Experiencia Profesional</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <div className="text-4xl mb-4">�</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">+45 Aptitudes</h3>
            <p className="text-gray-600 dark:text-gray-400">Habilidades Técnicas</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">5 Empresas</h3>
            <p className="text-gray-600 dark:text-gray-400">Proyectos Destacados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
