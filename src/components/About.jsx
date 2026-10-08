import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function About({ setActiveView }) {
  const disciplines = [
    { title: 'Productos Deportivos', desc: 'Diseño y desarrollo de productos deportivos, desde la exploración formal y funcional hasta su aplicación y producción.' },
    { title: 'Branding', desc: 'Identidades visuales, sistemas de marca y lenguajes gráficos construidos para comunicar con claridad y personalidad.' },
    { title: '3D Visualization & 3D Fashion', desc: 'Modelado tridimensional, volumetría de producto, texturizado hiperrealista y visualización conceptual.' },
    { title: 'Diseño Gráfico', desc: 'Sistemas gráficos, tipografía, composición visual y piezas de comunicación de alto impacto.' },
    { title: 'Diseño Digital', desc: 'Diseño de interfaces, dirección visual y desarrollo de experiencias digitales funcionales y contemporáneas.' },
    { title: 'Diseño de Productos', desc: 'Conceptualización y desarrollo de productos, desde la exploración visual hasta su aplicación y producción final.' }
  ];

  return (
    <div id="about-section" className="w-full h-full min-h-screen md:h-screen overflow-y-auto md:overflow-hidden bg-[#000000] text-white flex flex-col pt-14 md:pt-0">

      {/* Editorial Split Layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 w-full h-full border-b border-[#1a1a1a]">

        {/* Left Editorial Hero Block (5 columns) */}
        <div className="md:col-span-5 p-6 md:p-10 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1a1a1a] bg-[#050505]">
          <div>
            {/* Monogram / Header Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-bebas text-2xl text-[#B40505] tracking-wider">TV</span>
              <span className="w-8 h-[1px] bg-[#B40505]"></span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/50 uppercase">
                PORTFOLIO / {new Date().getFullYear()}
              </span>
            </div>

            {/* Name & Title in Bebas Neue */}
            <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.9] mb-3">
              TOM<br />
              <span className="text-[#B40505]">VARELA</span>
            </h1>

            <div className="text-sm sm:text-base font-mono tracking-[0.25em] text-white/80 uppercase mb-8">
              DISEÑO Y DESARROLLO DE PRODUCTO
            </div>

            {/* Editorial Bio / Statement */}
            <p className="text-sm lg:text-base text-white/70 font-light leading-relaxed max-w-md">
              Diseño y desarrollo de productos especializados en el deporte, sistemas de identidad y productos digitales. Concibo cada proyecto como una composición donde diseño, función y producción trabajan en conjunto. Desarrollo soluciones pensadas para el propósito final de cada proyecto, adaptándolas a sus necesidades de producción, aplicación y contexto.
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveView('contact')}
              className="group flex items-center gap-2 px-5 py-2.5 bg-[#B40505] text-white font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              <span>INICIAR PROYECTO</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveView('home')}
              className="px-4 py-2.5 border border-[#262626] text-white/70 font-mono text-[11px] tracking-wider uppercase hover:border-white hover:text-white transition-colors"
            >
              VER PROYECTOS
            </button>
          </div>
        </div>

        {/* Right Disciplines & Capabilities Block (7 columns) */}
        <div className="md:col-span-7 flex flex-col justify-between bg-[#000000] p-6 md:p-10 lg:p-12 overflow-y-auto">

          {/* Header of Disciplines */}
          <div>
            <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4 mb-6">
              <span className="font-bebas text-2xl lg:text-3xl tracking-wider text-white">
                ÁREAS DE EXPERTISE
              </span>

            </div>

            {/* Grid of 6 Core Disciplines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {disciplines.map((item) => (
                <div
                  key={item.title}
                  className="p-4 lg:p-5 bg-[#080808] border border-[#1a1a1a] hover:border-[#B40505]/60 transition-colors group"
                >
                  <h3 className="font-bebas text-xl lg:text-2xl tracking-wider text-white mb-1.5 group-hover:text-[#B40505] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Editorial Coordinates */}
          <div className="mt-8 pt-6 border-t border-[#1a1a1a] grid grid-cols-2 sm:grid-cols-3 gap-4 text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
            <div>
              <span className="text-white/20 block mb-1">LOCALIZACIÓN</span>
              <span className="text-white/70">BUENOS AIRES / MONTEVIDEO</span>
            </div>
            <div>
              <span className="text-white/20 block mb-1">DISPONIBILIDAD</span>
              <span className="text-[#B40505] font-bold">PROYECTOS GLOBALES</span>
            </div>
            <div>
              <span className="text-white/20 block mb-1">ESTUDIO</span>
              <span className="text-white/70">INDEPENDIENTE</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
