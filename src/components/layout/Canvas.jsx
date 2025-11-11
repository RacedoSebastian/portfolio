import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRain } from '../../hooks/useRain';
import SideBar from '../ui/Sidebar';

export default function Canvas() {
  const raindrops = useRain();

  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-sky-950/30 to-slate-900 overflow-hidden">
      {/* Gotas */}
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

      {/* Layout */}
      <div className="flex flex-col md:flex-row h-screen w-screen relative z-10">
        <div className="flex justify-center md:items-center md:justify-center p-3 md:p-4">
          <SideBar />
        </div>
        <main className="w-full h-full flex items-center justify-center p-4">
          <div className="w-full h-full overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}