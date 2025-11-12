import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRain } from '../../hooks/useRain';
import Sidebar from '../ui/SideBar';

export default function Canvas() {
  const raindrops = useRain();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-sky-950/30 to-slate-900">
      {/* Fondo de gotas animadas */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {raindrops.map((drop) => (
          <React.Fragment key={drop.id}>
            <motion.div
              aria-hidden="true"
              style={{
                height: drop.height,
                width: '2px',
                left: drop.x,
                top: drop.y,
              }}
              className="absolute bg-white/60 rounded-sm"
              initial={{ x: drop.x, y: drop.y, opacity: 0 }}
              animate={{
                x: drop.x + 100,
                y: drop.y + 300,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: drop.duration,
                repeat: Infinity,
                delay: drop.delay,
              }}
            />
            <motion.div
              aria-hidden="true"
              style={{
                left: drop.x + 25,
                top: drop.y + 400,
                width: '8px',
                height: '8px',
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'absolute',
                opacity: 0.4,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.6],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: drop.duration + drop.delay - 0.4,
                delay: drop.delay + drop.duration,
              }}
            />
          </React.Fragment>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="flex justify-center md:items-center md:justify-center p-3 md:p-4">
          <Sidebar />
        </div>

        {/* Contenido scrolleable */}
        <main className="w-full flex items-start justify-center p-4">
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
