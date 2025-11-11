// src/pages/Projects.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  es: {
    title: "Proyectos Destacados",
    projects: [
      {
        title: "HairApp - Gestión para Peluquería",
        description: "Aplicación web para gestión de turnos y clientes. Incluye registro, agenda diaria, contacto vía WhatsApp y panel administrativo.",
        tech: ["React", "Tailwind CSS", "Firebase", "Node.js", "Express", "MongoDB"],
        images: ["/airpelu.png", "/perfilpelu.png", "/localizacion.png"],
      },
      {
        title: "Sistema de Facturación (Medicamentos)",
        description: "App de escritorio para control de stock, facturación y reportes. Desarrollada con metodología Scrum.",
        tech: ["Electron", "React", "Node.js", "SQLite"],
        images: ["/sysf.png", "/venta.png", "/factura.png"],
      },
      {
        title: "Invitación Digital - Cumpleaños",
        description: "Sitio web informativo y personalizable para compartir invitaciones. Diseño responsive y enfoque visual atractivo.",
        tech: ["HTML", "CSS", "JavaScript"],
        images: ["/img3.jpg", "/img1.jpg", "/img2.jpg"],
      },
      {
        title: "Administración de Gimnasio - Pilates Power GYM",
        description: "App de escritorio para la gestión de turnos, administración de clases y clientes, facturación y registro de historial.",
        tech: ["React", "Tailwind", "Node.js", "MongoDB", "Electron"],
        images: ["/pilate1.png", "/pilate2.png", "/pilate3.png"],
      },
    ],
    viewMore: "▼ Ver más",
    viewLess: "▲ Ver menos"
  },
  en: {
    title: "Featured Projects",
    projects: [
      {
        title: "HairApp - Salon Management",
        description: "Web app for appointment and client management. Includes registration, daily agenda, WhatsApp contact, and admin panel.",
        tech: ["React", "Tailwind CSS", "Firebase", "Node.js", "Express", "MongoDB"],
        images: ["/airpelu.png", "/perfilpelu.png", "/localizacion.png"],
      },
      {
        title: "Billing System (Pharmacy)",
        description: "Desktop app for inventory, invoicing, and reporting. Built with Scrum methodology.",
        tech: ["Electron", "React", "Node.js", "SQLite"],
        images: ["/sysf.png", "/venta.png", "/factura.png"],
      },
      {
        title: "Digital Birthday Invitation",
        description: "Customizable, responsive website to share event invites with countdown and RSVP.",
        tech: ["HTML", "CSS", "JavaScript"],
        images: ["/img3.jpg", "/img1.jpg", "/img2.jpg"],
      },
      {
        title: "Gym Management - Pilates Power GYM",
        description: "Desktop app for class scheduling, client management, billing, and history tracking.",
        tech: ["React", "Tailwind", "Node.js", "MongoDB", "Electron"],
        images: ["/pilate1.png", "/pilate2.png", "/pilate3.png"],
      },
    ],
    viewMore: "▼ View more",
    viewLess: "▲ View less"
  }
};

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentProjects = t.projects;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (images) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? selectedImages.length - 1 : prev - 1);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => prev === selectedImages.length - 1 ? 0 : prev + 1);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      className="min-h-[80vh] py-10 px-4"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-3xl md:text-4xl lg:text-5xl p-2 font-bold mb-8 text-center bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent"
      >
        {t.title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentProjects.map((project, idx) => {
          const [isExpanded, setIsExpanded] = useState(false);

          return (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              onClick={() => openModal(project.images)}
              aria-label={`View gallery of ${project.title}`}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x200/1e293b/64748b?text=Preview+not+available";
                  }}
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
                
                <p 
                  className={`text-gray-400 text-sm mb-3 transition-all duration-300 ${
                    isExpanded ? '' : 'line-clamp-2'
                  }`}
                >
                  {project.description}
                </p>

                {project.description.length > 100 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                    className="text-sky-400 hover:text-sky-300 text-xs font-medium mb-3 flex items-center gap-1"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? t.viewLess : t.viewMore}
                  </button>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900/95 backdrop-blur-sm rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white text-xl md:text-2xl font-bold z-10 bg-black/30 rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Close gallery"
                >
                  &times;
                </button>

                <div className="flex items-center justify-between p-2 md:p-4">
                  <button
                    onClick={prevImage}
                    disabled={selectedImages.length <= 1}
                    className="text-xl md:text-2xl text-gray-300 hover:text-white p-2 disabled:opacity-30"
                    aria-label="Previous image"
                    aria-disabled={selectedImages.length <= 1}
                  >
                    ←
                  </button>

                  <div className="flex-1 px-2 md:px-4">
                    <div className="flex justify-center">
                      <img
                        src={selectedImages[currentImageIndex] || "https://via.placeholder.com/800x500/1e293b/64748b?text=Image"}
                        alt={`View ${currentImageIndex + 1} of ${selectedImages.length}`}
                        className="w-full max-h-[70vh] object-contain"
                        loading="eager"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/800x500/334155/94a3b8?text=Load+error";
                        }}
                      />
                    </div>
                    <p className="text-center text-gray-500 mt-2 text-sm">
                      {currentImageIndex + 1} of {selectedImages.length}
                    </p>
                  </div>

                  <button
                    onClick={nextImage}
                    disabled={selectedImages.length <= 1}
                    className="text-xl md:text-2xl text-gray-300 hover:text-white p-2 disabled:opacity-30"
                    aria-label="Next image"
                    aria-disabled={selectedImages.length <= 1}
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}