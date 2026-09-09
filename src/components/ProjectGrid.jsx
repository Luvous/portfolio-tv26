import React from 'react';
import ProjectCard from './ProjectCard';
import { editorialElements } from '../data/projects';

export default function ProjectGrid({ projects }) {
  // Map projects by id for precise positioning
  const pBanda =
    projects.find((p) => p.id === 'banda') || projects[0];

  const pOcelotes =
    projects.find((p) => p.id === 'ocelotes') || projects[1];

  const pSnowball =
    projects.find((p) => p.id === 'snowball') || projects[2];

  const pGalapago =
    projects.find((p) => p.id === 'galapago') || projects[3];

  const pSportswear =
    projects.find((p) => p.id === 'sportswear') || projects[4];

  const pConcepts =
    projects.find((p) => p.id === 'concepts') || projects[5];

  return (
    <div
      id="main-project-grid-container"
      className="w-full h-full"
    >
      {/* ============================================================ */}
      {/* DESKTOP */}
      {/* ============================================================ */}

      <div className="hidden md:flex flex-col h-screen w-full overflow-hidden bg-[#000000]">

        {/* ========================================================== */}
        {/* ROW 1 */}
        {/* ========================================================== */}

        <div className="flex h-1/2 w-full border-b border-[#1a1a1a]">

          {/* 01 — BANDA */}
          <div className="w-[41%] h-full border-r border-[#1a1a1a]">
            <ProjectCard
              project={pBanda}
              className="w-full h-full"
              editorialPosition="top-right"
              titlePosition="bottom-left"
            />
          </div>

          {/* 02 — OCELOTES */}
          <div className="w-[41%] h-full border-r border-[#1a1a1a]">
            <ProjectCard
              project={pOcelotes}
              className="w-full h-full"
              titlePosition="bottom-left"
            />
          </div>

          {/* Editorial vertical column */}
          <div className="w-[18%] h-full flex flex-col">

            {/* Material / Textile */}
            <div className="relative h-1/2 w-full border-b border-[#1a1a1a] overflow-hidden bg-[#050505] group">

              <img
                src={editorialElements.materials.image}
                alt="Materiales y Textura"
                className="w-full h-full object-cover filter contrast-125 brightness-80 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute top-4 right-4 text-right z-10 text-[9px] font-mono tracking-[0.25em] text-white/70 uppercase leading-relaxed">
                {editorialElements.materials.labels.map((material) => (
                  <div key={material}>
                    {material}
                  </div>
                ))}

                <div className="text-[#B40505] font-bold mt-1">
                  —
                </div>
              </div>
            </div>

            {/* TV block */}
            <div className="relative h-1/2 w-full bg-[#B40505] p-4 flex flex-col justify-end items-end select-none">
              <span className="font-bebas text-2xl lg:text-3xl text-black font-bold tracking-tight">
                TV©
              </span>
            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* ROW 2 */}
        {/* ========================================================== */}

        <div className="flex h-1/2 w-full">

          {/* 03 — SNOWBALL */}
          <div className="w-[24%] h-full border-r border-[#1a1a1a]">
            <ProjectCard
              project={pSnowball}
              className="w-full h-full"
              editorialPosition="bottom-left"
              titlePosition="top-left"
            />
          </div>

          {/* ======================================================== */}
          {/* Editorial Manifesto */}
          {/* ======================================================== */}

          <div className="relative w-[23%] h-full bg-[#B40505] border-r border-[#1a1a1a] p-5 lg:p-6 flex flex-col justify-between overflow-hidden select-none">

            {/* Big Graphic Typography */}
            <div className="z-10">
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-[42px] leading-[0.92] text-black tracking-tight font-extrabold">
                {editorialElements.manifesto.title.map((line) => (
                  <div key={line}>
                    {line}
                  </div>
                ))}
              </h2>
            </div>

            {/* Signature / Scribble */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-85">

              <svg
                viewBox="0 0 200 160"
                className="w-full h-36 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >

                <path
                  d="M37.58,95.85c-2.36,1.66-4.71,3.34-7.08,4.99-5.19,3.62-10.38,7.25-15.6,10.82-.94,.65-2.03,1.11-3.08,1.58-.54,.24-1.15,.39-1.74,.46-2.44,.29-4.02-1.29-3.48-3.69,.48-2.12,1.1-4.23,1.89-6.26,2.49-6.4,5.65-12.48,8.93-18.51,6.23-11.47,13.23-22.46,20.58-33.23,5.75-8.43,11.83-16.62,18.5-24.35,5.29-6.13,10.78-12.08,17.29-16.96,1.82-1.36,3.85-2.44,5.81-3.59,.48-.28,1.08-.4,1.64-.52,2.19-.43,3.9,.87,3.78,3.09-.09,1.58-.42,3.19-.92,4.7-1.55,4.61-3.84,8.9-6.13,13.16-3.14,5.84-6.33,11.65-9.52,17.46-3.43,6.25-6.93,12.47-10.3,18.76-3.09,5.76-6.04,11.58-9.05,17.38-.61,1.18-1.19,2.38-1.78,3.58-.12,.24-.21,.49-.21,.83,1.12-.73,2.24-1.46,3.36-2.2,15.2-10.11,30.42-20.21,46.08-29.6,7.36-4.42,14.88-8.59,22.34-12.84,.93-.53,1.96-.91,2.96-1.29,.58-.22,1.18-.17,1.51,.45,.35,.65,.07,1.21-.47,1.57-.83,.56-1.7,1.06-2.57,1.56-7.43,4.31-14.94,8.49-22.28,12.95-8,4.86-15.91,9.9-23.76,15.01-9.26,6.03-18.4,12.25-27.62,18.34-2.19,1.44-3.58,3.41-4.7,5.73-4.94,10.22-9.88,20.44-14.97,30.58-2.33,4.64-5,9.11-7.54,13.64-.22,.4-.56,.73-.84,1.09-.1-.05-.21-.1-.31-.14,.07-.45,.1-.91,.21-1.34,1.13-4.55,2.76-8.93,4.78-13.15,4.05-8.47,8.19-16.9,12.28-25.35,.73-1.5,1.44-3.01,2.16-4.52-.06-.05-.13-.1-.19-.15ZM82.71,9.63l-.21-.07c.02-1.12-.41-1.53-1.41-1.1-1.39,.6-2.78,1.29-4.03,2.15-4.57,3.17-8.44,7.13-12.21,11.17-6.21,6.66-11.83,13.81-17.22,21.15-7.75,10.56-14.89,21.51-21.59,32.77-4.11,6.91-7.97,13.95-11.42,21.22-1.84,3.88-3.68,7.76-4.87,11.91-.16,.55-.27,1.12-.34,1.69-.06,.41,.17,.63,.6,.51,.31-.09,.64-.16,.92-.32,1.52-.87,3.11-1.67,4.54-2.68,7.85-5.56,15.67-11.17,23.49-16.77,1.33-.95,2.38-2.16,3.11-3.63,5.71-11.44,11.66-22.76,17.91-33.92,4.83-8.63,9.7-17.25,14.44-25.93,2.34-4.29,4.47-8.71,6.57-13.12,.76-1.59,1.16-3.35,1.73-5.03Z"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M187.59,30.9c-.31,.2-.6,.45-.93,.6-3.54,1.68-7.11,3.3-10.62,5.03-10.55,5.19-21.12,10.33-31.59,15.66-10.09,5.14-20.17,10.32-30.06,15.82-7.79,4.33-15.37,9.03-22.89,13.82-5.78,3.68-11.36,7.68-16.92,11.68-4.08,2.93-7.98,6.11-11.55,9.66-.43,.42-.86,.85-1.31,1.24-.22,.19-.5,.34-.77,.48-1.09,.53-2.15,.39-2.76-.35-.62-.74-.64-1.87,.08-2.79,.71-.9,1.48-1.78,2.32-2.56,3.85-3.59,8.05-6.74,12.32-9.8,13.23-9.47,27.17-17.81,41.53-25.44,14.06-7.47,28.35-14.49,42.78-21.21,7.65-3.57,15.3-7.13,23.22-10.09,1.9-.71,3.85-1.3,5.79-1.92,.39-.12,.81-.13,1.22-.18,.05,.11,.09,.22,.14,.33Z"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M58.75,105.02c-1.48-.8-1.8-3.26-1.29-4.77,.5-2,.92-3.01,1.58-4.93,.26-.42,1.52-.55,1.77-.36,.52,.59,.94,1.61,1.12,2.37,.35,.89,1.19,1.55,1.05,2.49-.1,.69-.64,1.17-.79,1.84-.19,.86,.18,1.58-.41,2.38-.76,1.04-1.99,1.55-3.05,.98Z"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </svg>
            </div>

            {/* Bottom Signature & Concepts */}
            <div className="z-10">

              <div className="font-bebas text-2xl text-black font-bold mb-1">
                TV
              </div>

              <div className="text-[9px] font-mono tracking-[0.24em] text-black/80 uppercase font-semibold leading-relaxed">
                {editorialElements.manifesto.concepts.map((concept) => (
                  <div key={concept}>
                    {concept}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* 04 — GALÁPAGO STUDIO */}
          <div className="w-[35%] h-full border-r border-[#1a1a1a]">
            <ProjectCard
              project={pGalapago}
              className="w-full h-full"
              editorialPosition="bottom-left"
              titlePosition="top-left"
            />
          </div>

          {/* Locations / Statement */}
          <div className="w-[18%] h-full bg-[#000000] p-5 lg:p-6 flex flex-col justify-between select-none">

            {/* Locations */}
            <div className="text-[9px] font-mono tracking-[0.26em] text-white/50 uppercase leading-relaxed">

              {editorialElements.locations.map((location, index) => (
                <React.Fragment key={location}>

                  <div>
                    {location}
                  </div>

                  {index !== editorialElements.locations.length - 1 && (
                    <div className="text-[#B40505] my-1 font-bold">
                      —
                    </div>
                  )}

                </React.Fragment>
              ))}

            </div>

            {/* Statement */}
            <div className="text-[9px] font-mono tracking-[0.25em] text-white/70 uppercase leading-relaxed">
              {editorialElements.statement}
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE & TABLET */}
      {/* ============================================================ */}

      <div className="md:hidden flex flex-col w-full min-h-screen pt-14 bg-[#000000] pb-12">

        {/* 01 — BANDA */}
        <div className="w-full h-80 border-b border-[#1a1a1a]">
          <ProjectCard
            project={pBanda}
            className="w-full h-full"
            editorialPosition="top-right"
          />
        </div>

        {/* 02 — OCELOTES */}
        <div className="w-full h-80 border-b border-[#1a1a1a]">
          <ProjectCard
            project={pOcelotes}
            className="w-full h-full"
            editorialPosition="top-right"
          />
        </div>

        {/* Editorial Manifesto */}
        <div className="w-full bg-[#B40505] p-7 border-b border-[#1a1a1a] flex flex-col justify-between relative overflow-hidden">

          <h2 className="font-bebas text-4xl text-black tracking-tight leading-[0.95] mb-6">
            {editorialElements.manifesto.title.map((line) => (
              <div key={line}>
                {line}
              </div>
            ))}
          </h2>

          <div className="flex items-end justify-between">

            <span className="font-bebas text-3xl text-black font-bold">
              TV
            </span>

            <div className="text-[9px] font-mono tracking-[0.22em] text-black/90 uppercase font-semibold text-right leading-tight">
              {editorialElements.manifesto.concepts.map((concept) => (
                <div key={concept}>
                  {concept}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 03 — SNOWBALL */}
        <div className="w-full h-80 border-b border-[#1a1a1a]">
          <ProjectCard
            project={pSnowball}
            className="w-full h-full"
            editorialPosition="top-right"
          />
        </div>

        {/* 04 — GALÁPAGO STUDIO */}
        <div className="w-full h-80 border-b border-[#1a1a1a]">
          <ProjectCard
            project={pGalapago}
            className="w-full h-full"
            editorialPosition="top-right"
          />
        </div>
        {/* Mobile Footer */}
        <div className="p-6 bg-[#050505] border-t border-[#1a1a1a] flex flex-col gap-4 text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase">

          <div className="flex justify-between items-center">

            <span>
              {editorialElements.locations.join(" / ")}
            </span>

            <span className="text-[#B40505]">
              TV© {new Date().getFullYear()}
            </span>

          </div>

          <div>
            {editorialElements.statement}
          </div>

        </div>

      </div>
    </div>
  );
}