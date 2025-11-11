import { motion } from 'framer-motion';

export default function About() {
  const experience = [
    {
      title: "Desarrollador Frontend Freelance",
      period: "Jun 2022 – Jul 2023",
      description: "Invitación de cumpleaños digital con contador y confirmación por email"
    },
    {
      title: "Proyecto Final Universitario - Full Stack",
      period: "Dic 2024 – Mar 2025",
      description: "HairApp: Aplicación para gestión de turnos en peluquería"
    },
    {
      title: "Freelance - Sistema de Facturación",
      period: "Mar 2025 – Jun 2025",
      description: "App de escritorio con Electron, React, Node.js y MongoDB"
    },
    {
      title: "Freelance - Sistema para Boliche",
      period: "May 2025 – Jun 2025",
      description: "Adaptación con control de mesas, comandas y cierre de caja"
    },
    {
      title: "Freelance - Sistema para Gimnasio",
      period: "Sep 2025 – Nov 2025",
      description: "App de escritorio para administración de gimnasio"
    }
  ];

  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-[80vh] flex items-start justify-center p-4 md:p-8"
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-4xl">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Sobre mí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          <p className="text-base text-gray-300 leading-relaxed">
            Soy Técnico en Programación y Desarrollador Full Stack con orientación frontend. 
            Tengo experiencia en la creación de aplicaciones web modernas, usables y mantenibles, 
            utilizando tecnologías como React, Tailwind CSS y JavaScript.
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            Me formé en la UTN como Técnico en Programación. Me entusiasma seguir creciendo 
            como desarrollador y especializarme aún más en el desarrollo backend para poder 
            ofrecer soluciones completas e integrales.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm overflow-hidden">
          <div className="p-5 md:p-6">
            <h3 className="text-xl font-semibold mb-5 text-sky-300 flex items-center gap-2">
              🚀 Experiencia
            </h3>
            <div className="space-y-5">
              {experience.map((item, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-l-2 border-sky-500/30 pl-4"
                >
                  <h4 className="font-medium text-sky-200">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.period}</p>
                  <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}