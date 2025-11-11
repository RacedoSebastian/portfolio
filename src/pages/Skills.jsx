// src/pages/Skills.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  es: {
    title: "Skills & Tecnologías",
    sections: {
      frontend: "🎨 Desarrollo Frontend",
      backend: "⚙️ Desarrollo Backend",
      tools: "🛠️ Herramientas & Plataformas"
    }
  },
  en: {
    title: "Skills & Technologies",
    sections: {
      frontend: "🎨 Frontend Development",
      backend: "⚙️ Backend Development",
      tools: "🛠️ Tools & Platforms"
    }
  }
};

const skillsData = {
  frontend: [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-600 to-indigo-700" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: "🎭", color: "from-blue-500 to-purple-600" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-600" },
    { name: "Express", icon: "🚀", color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-teal-700" },
    { name: "REST APIs", icon: "🔗", color: "from-indigo-500 to-purple-600" },
  ],
  tools: [
    { name: "Git", icon: "📝", color: "from-orange-500 to-red-600" },
    { name: "GitHub", icon: "🐙", color: "from-gray-800 to-black" },
    { name: "VS Code", icon: "💻", color: "from-blue-600 to-cyan-600" },
    { name: "Vercel", icon: "▲", color: "from-black to-gray-800" },
    { name: "Postman", icon: "📮", color: "from-orange-400 to-amber-600" },
  ],
};

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-[80vh] py-10 px-4"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="skills-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent p-2"
        >
          {t.title}
        </h2>

        <div className="space-y-10">
          {/* Frontend */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            aria-labelledby="frontend-skills"
          >
            <h3
              id="frontend-skills"
              className="text-xl md:text-2xl font-semibold mb-5 text-sky-300 flex items-center gap-2"
            >
              <span className="text-2xl md:text-3xl">{t.sections.frontend.split(' ')[0]}</span>
              {t.sections.frontend.split(' ').slice(1).join(' ')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {skillsData.frontend.map((skill, i) => (
                <motion.article
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className={`bg-gradient-to-br ${skill.color} p-1 rounded-xl`}
                  aria-label={`${skill.name} - ${t.sections.frontend}`}
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 md:p-4 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl md:text-3xl mb-1.5">{skill.icon}</div>
                    <h4 className="font-medium text-white text-xs md:text-sm text-center">
                      {skill.name}
                    </h4>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Backend */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            aria-labelledby="backend-skills"
          >
            <h3
              id="backend-skills"
              className="text-xl md:text-2xl font-semibold mb-5 text-emerald-400 flex items-center gap-2"
            >
              <span className="text-2xl md:text-3xl">{t.sections.backend.split(' ')[0]}</span>
              {t.sections.backend.split(' ').slice(1).join(' ')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {skillsData.backend.map((skill, i) => (
                <motion.article
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className={`bg-gradient-to-br ${skill.color} p-1 rounded-xl`}
                  aria-label={`${skill.name} - ${t.sections.backend}`}
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 md:p-4 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl md:text-3xl mb-1.5">{skill.icon}</div>
                    <h4 className="font-medium text-white text-xs md:text-sm text-center">
                      {skill.name}
                    </h4>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Tools */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            aria-labelledby="tools-skills"
          >
            <h3
              id="tools-skills"
              className="text-xl md:text-2xl font-semibold mb-5 text-purple-400 flex items-center gap-2"
            >
              <span className="text-2xl md:text-3xl">{t.sections.tools.split(' ')[0]}</span>
              {t.sections.tools.split(' ').slice(1).join(' ')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {skillsData.tools.map((skill, i) => (
                <motion.article
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className={`bg-gradient-to-br ${skill.color} p-1 rounded-xl`}
                  aria-label={`${skill.name} - ${t.sections.tools}`}
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 md:p-4 h-full flex flex-col items-center justify-center">
                    <div className="text-2xl md:text-3xl mb-1.5">{skill.icon}</div>
                    <h4 className="font-medium text-white text-[10px] md:text-xs text-center whitespace-nowrap px-1">
                      {skill.name}
                    </h4>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.section>
  );
}