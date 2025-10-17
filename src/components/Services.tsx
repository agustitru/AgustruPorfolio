export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Desarrollo de Aplicaciones',
      description: 'Creación de aplicaciones web y móviles robustas y escalables.'
    },
    {
      icon: '📱',
      title: 'Desarrollo iOS',
      description: 'Aplicaciones nativas para el ecosistema Apple con Swift y SwiftUI.'
    },
    {
      icon: '🤖',
      title: 'Desarrollo Android',
      description: 'Aplicaciones Android optimizadas con las últimas tecnologías.'
    },
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y aplicaciones web responsivas.'
    },
    {
      icon: '🎨',
      title: 'Diseño 3D',
      description: 'Modelado y diseño tridimensional para diversos proyectos.'
    },
    {
      icon: '🔧',
      title: 'Diseño de Ingeniería',
      description: 'Soluciones de ingeniería integral para proyectos complejos.'
    },
    {
      icon: '📡',
      title: 'Telecomunicaciones',
      description: 'Consultoría y soluciones en sistemas de telecomunicaciones.'
    },
    {
      icon: '🔌',
      title: 'Soporte Técnico de Redes',
      description: 'Instalación, configuración y mantenimiento de infraestructura de red.'
    },
    {
      icon: '🏠',
      title: 'Redes Domésticas',
      description: 'Configuración y optimización de redes para hogares y pequeñas oficinas.'
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">
          Servicios
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Ofrezco una amplia gama de servicios técnicos desde el desarrollo de software hasta soluciones de telecomunicaciones
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
