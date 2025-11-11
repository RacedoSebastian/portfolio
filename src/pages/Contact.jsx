// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  es: {
    title: "¡Hablemos!",
    subtitle: "¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y crear algo increíble juntos.",
    emailLabel: "Enviar email",
    githubLabel: "Ver perfil en GitHub",
    linkedinLabel: "Ver perfil en LinkedIn",
    emailText: "✉️ racedosebas@gmail.com"
  },
  en: {
    title: "Let's talk!",
    subtitle: "Do you have a project in mind? I'd love to hear your ideas and build something amazing together.",
    emailLabel: "Send email",
    githubLabel: "View GitHub profile",
    linkedinLabel: "View LinkedIn profile",
    emailText: "✉️ racedosebas@gmail.com"
  }
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      className="min-h-[80vh] flex items-center justify-center p-4"
      aria-labelledby="contact-heading"
    >
      <div className="text-center max-w-2xl w-full">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-gray-300 mb-8"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          <motion.a
            href="mailto:racedosebas@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/30 transition-shadow"
            aria-label={t.emailLabel}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </motion.a>

          <motion.a
            href="https://github.com/RacedoSebastian"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-gray-500/30 transition-shadow"
            aria-label={t.githubLabel}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/racedo-sebastian/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-shadow"
            aria-label={t.linkedinLabel}
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-sm text-gray-500"
        >
          {t.emailText}
        </motion.p>
      </div>
    </motion.section>
  );
}