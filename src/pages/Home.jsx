// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  es: {
    title: "Hola, soy Racedo Sebastián",
    role: "Desarrollador Frontend",
    viewProjects: "Ver mis proyectos",
    downloadCV: "Descargar CV",
  },
  en: {
    title: "Hi, I'm Racedo Sebastián",
    role: "Frontend Developer",
    viewProjects: "View my projects",
    downloadCV: "Download CV",
  }
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      key="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      className="min-h-[80vh] flex items-center justify-center p-4"
      aria-labelledby="home-heading"
    >
      <div className="text-center max-w-2xl w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center text-4xl md:text-5xl shadow-lg"
          aria-hidden="true"
        >
          👋
        </motion.div>

        <motion.h1
          id="home-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent p-2"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg text-gray-300 mb-6"
        >
          {t.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Link
            to="/projects"
            className="px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-sky-500/30 transition-shadow focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {t.viewProjects}
          </Link>
          <a
            href="https://www.canva.com/design/DAGvSuWaoeA/IplctHUXZcmhNzLORCN3ow/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 md:px-6 md:py-3 border border-sky-400 text-sky-400 rounded-lg font-medium hover:bg-sky-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {t.downloadCV}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}