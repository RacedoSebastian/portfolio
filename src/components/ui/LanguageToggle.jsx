import { useLanguage } from '../../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-medium text-gray-300 hover:bg-white/20 transition-colors backdrop-blur-sm"
      aria-label={`Cambiar a ${language === 'es' ? 'English' : 'Español'}`}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}