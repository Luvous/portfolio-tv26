import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import Contact from './components/Contact';
import { projects } from './data/projects';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'about' | 'contact'>('home');

  // Handle browser back/forward or hash change if user uses hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about') setActiveView('about');
      else if (hash === 'contact') setActiveView('contact');
      else setActiveView('home');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleViewChange = (view: 'home' | 'about' | 'contact') => {
    setActiveView(view);
    window.location.hash = view === 'home' ? '' : view;
  };

  return (
    <div id="portfolio-app-root" className="w-full min-h-screen md:h-screen bg-[#000000] text-white flex flex-col md:flex-row overflow-x-hidden md:overflow-hidden select-none">
      {/* Lateral Fixed Navbar (Desktop) & Top Header (Mobile) */}
      <Navbar activeView={activeView} setActiveView={handleViewChange} />

      {/* Primary Editorial View Area */}
      <main id="portfolio-viewport" className="flex-1 h-full w-full overflow-y-auto md:overflow-hidden relative bg-[#000000]">
        {activeView === 'home' && (
          <ProjectGrid projects={projects} />
        )}

        {activeView === 'about' && (
          <About setActiveView={handleViewChange} />
        )}

        {activeView === 'contact' && (
          <Contact setActiveView={handleViewChange} />
        )}
      </main>
    </div>
  );
}

