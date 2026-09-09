import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({
  project,
  className = '',
  editorialPosition = 'top-right',
  titlePosition = 'bottom-left'
}) {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      id={`project-card-${project.id}`}
      onClick={handleClick}
      className={`group relative overflow-hidden bg-[#0a0a0a] cursor-pointer select-none transition-all duration-300 border border-[#1a1a1a] ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label={`Ver proyecto ${project.title} en Behance`}
    >

      {/* IMAGE */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-110 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 group-hover:from-black/75 transition-colors duration-300" />
      </div>

      {/* TAGLINE FROM PROJECT DATA */}
      {project.tagline && (
        <div
          className={`absolute z-10 text-[9px] font-mono tracking-[0.25em] text-white/70 uppercase leading-relaxed ${
            editorialPosition === 'top-right'
              ? 'top-4 right-4 text-right'
              : 'bottom-4 left-4'
          }`}
        >
          {Array.isArray(project.tagline)
            ? project.tagline.map((line, index) => (
                <div key={index}>{line}</div>
              ))
            : (
              <div>{project.tagline}</div>
            )
          }

          <div className="text-[#B40505] font-bold mt-1">
            —
          </div>
        </div>
      )}

      {/* PROJECT INFORMATION */}
      <div
        className={`absolute z-10 p-5 md:p-6 flex flex-col ${
          titlePosition === 'top-left'
            ? 'top-0 left-0'
            : 'bottom-0 left-0 right-0'
        }`}
      >

        <span className="font-bebas text-sm md:text-base text-white/50 tracking-wider mb-0.5">
          {project.number}
        </span>

        <h2 className="font-bebas text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white tracking-wider leading-none mb-1">
          {project.title}
        </h2>

        <div className="flex items-center justify-between mt-0.5">

          <p className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] text-white/70 uppercase">
            {project.category}
          </p>

          <div className="w-6 h-6 flex items-center justify-center text-white/70 group-hover:text-[#B40505] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
            <ArrowUpRight
              size={18}
              strokeWidth={2}
            />
          </div>

        </div>
      </div>

      {/* HOVER BORDER */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#B40505]/40 transition-colors duration-300 pointer-events-none" />

    </div>
  );
}