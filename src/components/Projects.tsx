export default function Projects() {
  const projects = [
    {
      title: 'Keito eHealth',
      company: 'Keito Group',
      description: 'Aplicación móvil para visualizar y seguir la evolución de medidas de salud como peso, estatura, índice de masa corporal, presión arterial, pulso e índice de grasa. Permite a los usuarios monitorear su salud de manera integral.',
      technologies: ['Android', 'Mobile Development', 'Health Tech', 'UI/UX Design'],
      icon: '❤️',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Redes de Telecomunicación',
      company: 'Keito Group',
      description: 'Diseño, implementación y mantenimiento de infraestructuras de redes de telecomunicaciones. Gestión de proyectos complejos con más de 45 aptitudes técnicas aplicadas.',
      technologies: ['Networking', 'Telecomunicaciones', 'Infraestructura', 'Sistemas'],
      icon: '📡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Desarrollo de Software',
      company: 'TECDAKI SL',
      description: 'Desarrollo de soluciones de software innovadoras utilizando las últimas tecnologías. Enfoque en crear aplicaciones robustas y escalables.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Node.js'],
      icon: '💻',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Ciberseguridad',
      company: 'Agència de Ciberseguretat de Catalunya',
      description: 'Prácticas especializadas en ciberseguridad y protección de infraestructuras críticas. Análisis de vulnerabilidades y mejora de la seguridad de sistemas.',
      technologies: ['Seguridad', 'Análisis', 'Protección', 'Auditoría'],
      icon: '🛡️',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="proyectos" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Algunos de los proyectos más relevantes en los que he trabajado
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800 hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {project.company}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
