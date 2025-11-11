import { Link, useLocation } from 'react-router-dom';

const sections = [
  { title: "", emoji: "👋", label: "home" },
  { title: "about", emoji: "🚀", label: "about" },
  { title: "projects", emoji: "💻", label: "projects" },
  { title: "skills", emoji: "⚡", label: "skills" },
  { title: "contact", emoji: "📬", label: "contact" },
];

export default function SideBar() {
  const location = useLocation();
  const currentPath = location.pathname === "/" ? "" : location.pathname.slice(1);

  return (
    <nav
      className="bg-sky-500/10 p-2 flex flex-row md:flex-col gap-3 md:gap-5 rounded-full md:pt-4 md:pb-4 items-center justify-center w-full md:w-auto backdrop-blur-sm border border-white/10"
      aria-label="Navegación principal"
    >
      {sections.map((item) => {
        const isActive = item.title === currentPath;
        return (
          <Link
            key={item.title}
            to={`/${item.title}`}
            className={`text-xl md:text-2xl transition-all duration-300 ${
              isActive
                ? "scale-125 text-white drop-shadow-md"
                : "text-sky-300 hover:text-white hover:scale-110"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Ir a sección ${item.label}`}
          >
            {item.emoji}
          </Link>
        );
      })}
    </nav>
  );
}