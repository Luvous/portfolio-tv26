import React from 'react';
import { User, Mail, Grid } from 'lucide-react';

export default function Navbar({ activeView, setActiveView }) {
  return (
    <>
      {/* Desktop Sidebar (Fixed on the left) */}
      <aside 
        id="desktop-sidebar"
        className="hidden md:flex flex-col justify-between items-center w-16 lg:w-20 h-screen bg-[#000000] border-r border-[#1a1a1a] z-30 select-none py-6 flex-shrink-0"
      >
        {/* Top: TV Monogram and Return to Home */}
        <div className="flex flex-col items-center">
          <button
            id="nav-brand-tv"
            onClick={() => setActiveView('home')}
            aria-label="Ir a Inicio"
            className="group relative flex items-center justify-center p-1 focus:outline-none"
          >
            <span className="font-bebas text-3xl lg:text-4xl text-[#B40505] tracking-tight leading-none group-hover:scale-110 transition-transform duration-200">
              TV
            </span>
          </button>

          {/* Minimal vertical separator */}
          <div className="w-[1px] h-6 bg-[#262626] mt-4"></div>
        </div>

        {/* Middle Navigation Icons: Home, About, Contact */}
        <nav id="desktop-nav-links" className="flex flex-col items-center gap-6" aria-label="Navegación principal">
          <button
            id="nav-btn-home"
            onClick={() => setActiveView('home')}
            aria-label="Proyectos"
            title="Proyectos"
            className={`relative p-2.5 rounded-none transition-colors duration-200 ${
              activeView === 'home'
                ? 'text-[#B40505]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            <Grid size={20} strokeWidth={1.5} />
            {activeView === 'home' && (
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-3 bg-[#B40505]" />
            )}
          </button>

          <button
            id="nav-btn-about"
            onClick={() => setActiveView('about')}
            aria-label="Sobre mí"
            title="Sobre mí"
            className={`relative p-2.5 rounded-none transition-colors duration-200 ${
              activeView === 'about'
                ? 'text-[#B40505]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            <User size={20} strokeWidth={1.5} />
            {activeView === 'about' && (
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-3 bg-[#B40505]" />
            )}
          </button>

          <button
            id="nav-btn-contact"
            onClick={() => setActiveView('contact')}
            aria-label="Contacto"
            title="Contacto"
            className={`relative p-2.5 rounded-none transition-colors duration-200 ${
              activeView === 'contact'
                ? 'text-[#B40505]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            <Mail size={20} strokeWidth={1.5} />
            {activeView === 'contact' && (
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-3 bg-[#B40505]" />
            )}
          </button>
        </nav>

        {/* Bottom Editorial Vertical Typography (Matching reference image) */}
        <div className="flex flex-col items-center">
          <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2 text-[9px] font-mono tracking-[0.28em] text-white/30 uppercase select-none">
            <span className="text-white/60 font-semibold">TOM VARELA</span>
            <span className="text-[#B40505]">/</span>
            <span>DISEÑO Y DESARROLLO DE PRODUCTO</span>
          </div>
          <div className="w-[1px] h-6 bg-[#262626] mt-4"></div>
        </div>
      </aside>

      {/* Mobile Top Navigation Bar */}
      <header
        id="mobile-header"
        className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#000000]/95 backdrop-blur-md border-b border-[#1a1a1a] flex items-center justify-between px-4 z-40 select-none"
      >
        <button
          id="mobile-nav-tv"
          onClick={() => setActiveView('home')}
          className="flex items-center gap-2 focus:outline-none"
        >
          <span className="font-bebas text-2xl text-[#B40505] tracking-tight leading-none">
            TV
          </span>
          <span className="text-[10px] tracking-[0.2em] font-mono text-white/50 uppercase">
            TOM VARELA
          </span>
        </button>

        <nav className="flex items-center gap-2" aria-label="Navegación móvil">
          <button
            id="mobile-btn-home"
            onClick={() => setActiveView('home')}
            aria-label="Proyectos"
            className={`p-2 rounded-none transition-colors ${
              activeView === 'home' ? 'text-[#B40505]' : 'text-white/50 hover:text-white'
            }`}
          >
            <Grid size={18} strokeWidth={1.5} />
          </button>

          <button
            id="mobile-btn-about"
            onClick={() => setActiveView('about')}
            aria-label="About"
            className={`p-2 rounded-none transition-colors ${
              activeView === 'about' ? 'text-[#B40505]' : 'text-white/50 hover:text-white'
            }`}
          >
            <User size={18} strokeWidth={1.5} />
          </button>

          <button
            id="mobile-btn-contact"
            onClick={() => setActiveView('contact')}
            aria-label="Contacto"
            className={`p-2 rounded-none transition-colors ${
              activeView === 'contact' ? 'text-[#B40505]' : 'text-white/50 hover:text-white'
            }`}
          >
            <Mail size={18} strokeWidth={1.5} />
          </button>
        </nav>
      </header>
    </>
  );
}
