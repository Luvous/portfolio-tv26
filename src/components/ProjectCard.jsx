import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({
  project,
  className = '',
  editorialPosition = 'top-right',
  titlePosition = 'bottom-left',
  compact = false
}) {
  const hasLink = Boolean(project.link);
  const hasImage = Boolean(project.images?.length || project.image);

  const handleClick = () => {
    if (hasLink) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div
      id={`project-card-${project.id}`}
      onClick={handleClick}
      className={`group relative overflow-hidden ${hasImage ? 'bg-[#0a0a0a]' : 'bg-black'} ${hasLink ? 'cursor-pointer' : 'cursor-default'} select-none transition-all duration-300 border border-[#1a1a1a] ${className}`}
      role={hasLink ? 'button' : undefined}
      tabIndex={hasLink ? 0 : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label={hasLink ? `Abrir ${project.title}` : undefined}
    >

      {/* IMAGE */}
      {hasImage && <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.images ? project.images[currentImage] : project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-110 brightness-90 animate-slow-zoom transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-125" />
        <div className="absolute inset-0 bg-[#B40505]/8 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 group-hover:from-black/75 transition-colors duration-300" />
      </div>}

      {/* TAGLINE FROM PROJECT DATA */}
      {project.tagline && !compact && (
        <div
          className={`absolute z-10 text-[9px] font-mono tracking-[0.25em] text-white/70 uppercase leading-relaxed ${editorialPosition === 'top-right'
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
        className={`absolute z-10 ${compact ? 'p-4' : 'p-5 md:p-6'} flex flex-col ${titlePosition === 'top-left'
          ? 'top-0 left-0'
          : 'bottom-0 left-0 right-0'
          }`}
      >

        <h2 className={`font-bebas text-white tracking-wider leading-none mb-1 ${compact ? 'text-[clamp(30px,4.8vh,44px)]' : 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl'}`}>
          {project.title}
        </h2>

        <div className="flex items-center justify-between gap-2 mt-0.5 min-w-0">

          <p className={`min-w-0 flex-1 break-words font-mono text-white/70 uppercase ${compact ? 'text-[9px] leading-snug tracking-[0.12em]' : 'text-[10px] md:text-[11px] tracking-[0.22em]'}`}>
            {project.category}
          </p>

          {hasLink && <div className="w-6 h-6 shrink-0 flex items-center justify-center text-white/70 group-hover:text-[#B40505] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
            <ArrowUpRight
              size={18}
              strokeWidth={2}
            />
          </div>}

        </div>
      </div>

      {/* HOVER BORDER */}
      {hasLink && <div className="absolute inset-0 border border-transparent group-hover:border-[#B40505]/40 transition-colors duration-300 pointer-events-none" />}

    </div>
  );
}
