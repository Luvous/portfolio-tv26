import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Globe } from 'lucide-react';

export default function Contact({ setActiveView }) {
  const [copied, setCopied] = useState(false);
  const email = "thomasvarela2001@outlook.es";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: "EMAIL DIRECTO",
      label: email,
      href: `mailto:${email}`,
      isAction: true,
      action: handleCopyEmail,
      actionLabel: copied ? "COPIADO" : "COPIAR"
    },
    {
      name: "BEHANCE",
      label: "behance.net/thvarela",
      href: "https://www.behance.net/thvarela",
      isExternal: true
    },
    {
      name: "LINKEDIN",
      label: "linkedin.com/in/tomvarela",
      href: "https://www.linkedin.com/in/tomvarela/",
      isExternal: true
    },
    {
      name: "INSTAGRAM",
      label: "@tomvarela.design",
      href: "https://www.instagram.com/tomvarela.design",
      isExternal: true
    }
  ];

  return (
    <div id="contact-section" className="w-full h-full min-h-screen md:h-screen overflow-y-auto md:overflow-hidden bg-[#000000] text-white flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 pt-16 md:pt-12">
      
      {/* Top Header info */}
      <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4 select-none">
        <div className="flex items-center gap-3">
          <span className="font-bebas text-2xl text-[#B40505]">TV</span>
          <span className="w-8 h-[1px] bg-[#B40505]"></span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/50 uppercase">
            CONTACTO & COLABORACIONES
          </span>
        </div>
        
        <button
          onClick={() => setActiveView('home')}
          className="text-[10px] font-mono tracking-[0.25em] text-white/50 hover:text-[#B40505] uppercase transition-colors"
        >
          [ VOLVER A PROYECTOS ]
        </button>
      </div>

      {/* Main Massive Editorial Display Typography */}
      <div className="my-auto py-8 md:py-4">
        <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.88] select-none">
          HAGAMOS<br />
          <span className="text-[#B40505]">QUE TU IDEA</span><br />
          HABLE.
        </h1>
        <p className="mt-4 text-xs sm:text-sm font-mono tracking-[0.25em] text-white/50 uppercase max-w-xl">
          DISPONIBLE PARA PROYECTOS DE BRANDING, INDUMENTARIA DEPORTIVA, DIRECCIÓN DE ARTE Y CONSULTORÍA CREATIVA.
        </p>
      </div>

      {/* Bottom Contact Links Grid */}
      <div className="border-t border-[#1a1a1a] pt-6 md:pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {socialLinks.map((link, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#070707] border border-[#1a1a1a] hover:border-[#B40505]/60 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
                    {link.name}
                  </span>
                  {link.isAction ? (
                    <button
                      onClick={link.action}
                      title="Copiar email al portapapeles"
                      className="text-[#B40505] hover:text-white transition-colors flex items-center gap-1 text-[9px] font-mono tracking-wider"
                    >
                      {copied ? <Check size={12} /> : <Copy size={12} />}
                      <span>{link.actionLabel}</span>
                    </button>
                  ) : (
                    <ArrowUpRight size={14} className="text-white/40 group-hover:text-[#B40505] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </div>

                <a
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="font-bebas text-lg md:text-xl text-white tracking-wider hover:text-[#B40505] transition-colors truncate block"
                >
                  {link.label}
                </a>
              </div>

              <div className="mt-3 pt-2 border-t border-[#141414] text-[9px] font-mono tracking-[0.2em] text-white/30">
                0{idx + 1} // ENLACE
              </div>
            </div>
          ))}
        </div>

        {/* Global Signature Line */}
        <div className="mt-6 flex flex-wrap items-center justify-between text-[9px] font-mono tracking-[0.28em] text-white/30 uppercase pt-4 border-t border-[#121212]">
          <span>TOM VARELA © {new Date().getFullYear()}</span>
          <span className="text-[#B40505]">BUENOS AIRES — MONTEVIDEO — REMOTO</span>
        </div>
      </div>

    </div>
  );
}
