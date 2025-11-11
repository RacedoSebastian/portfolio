import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from './components/layout/Canvas';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import LanguageToggle from './components/ui/LanguageToggle';

export default function App() {
  return (
    <>
      <LanguageToggle />
      <BrowserRouter>
        <Routes>
          <Route element={<Canvas />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}