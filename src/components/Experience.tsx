export default function Experience() {
  const experiences = [
    {
      company: 'TECDAKI SL',
      position: 'Ingeniero de software',
      period: 'ago. 2025 - actualidad · 3 meses',
      location: 'Barcelona, Cataluña, España · Híbrido',
      description: 'Desarrollo de soluciones de software innovadoras.',
      logo: '💻'
    },
    {
      company: 'Keito Group',
      position: 'Ingeniero de Redes de Telecomunicación',
      period: 'ago. 2022 - actualidad · 3 años 3 meses',
      location: 'España · Híbrido',
      description: 'Diseño, implementación y mantenimiento de redes de telecomunicaciones. Educación, Aplicaciones móviles y +45 aptitudes más.',
      logo: '🏢'
    },
    {
      company: 'Agència de Ciberseguretat de Catalunya',
      position: 'Estudiante en prácticas',
      period: 'may. 2021 - jul. 2021 · 3 meses',
      location: 'Barcelona, Cataluña, España · Híbrido',
      description: 'Prácticas en ciberseguridad y protección de infraestructuras críticas.',
      logo: '🛡️'
    },
    {
      company: 'Keito Group',
      position: 'Mobile Developer',
      period: 'ene. 2019 - mar. 2021 · 2 años 3 meses',
      location: 'Vilassar de Mar, Cataluña, España',
      description: 'Desarrollo de Android. Diseño de aplicaciones para móvil y +3 aptitudes más. Proyecto destacado: Keito eHealth - Aplicación para visualizar y seguir la evolución de medidas como peso, estatura, índice de masa corporal, presión arterial, pulso e índice de grasa.',
      logo: '📱'
    },
    {
      company: 'EDAG Group',
      position: 'Test Driver',
      period: 'oct. 2019 - may. 2020 · 8 meses',
      location: 'Martorell, Cataluña, España',
      description: 'Pruebas de vehículos y sistemas automotrices. KTM Testrider.',
      logo: '🚗'
    }
  ];

  const skills = [
    'Desarrollo Android',
    'Desarrollo iOS',
    'Desarrollo de Aplicaciones Móviles',
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js',
    'Python',
    'Redes de Telecomunicaciones',
    'Diseño de Ingeniería',
    'Diseño 3D',
    'Ciberseguridad',
    'Soporte Técnico de Redes',
    'Aplicaciones de Salud (eHealth)',
    'Test de Software',
    'Sistemas Embebidos',
    'Arquitectura de Software'
  ];

  return (
    <section id="experiencia" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          Experiencia
        </h2>
        
        {/* Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.logo}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {exp.period}
                      </p>
                      {exp.location && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          📍 {exp.location}
                        </p>
                      )}
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Habilidades Técnicas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
