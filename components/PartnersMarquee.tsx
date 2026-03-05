import React from "react";
import { PARTNERS } from "../constants";

const PartnersMarquee: React.FC = () => {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-[#1a1a1a] py-16 overflow-hidden">
      
      {/* CSS da animação */}
      <style>{`
        @keyframes marqueeAnimation {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marqueeAnimation 30s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* título */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-[#8e8e8e] tracking-[0.3em] text-sm font-light uppercase">
          Parceiros Oficiais
        </h2>
      </div>

      {/* container */}
      <div className="relative w-full overflow-hidden marquee">

       <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10 bg-gradient-to-r from-[#1a1a1a] to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10 bg-gradient-to-l from-[#1a1a1a] to-transparent" />

        {/* esteira */}
        <div className="marquee-track flex w-max">

          {track.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex flex-col items-center justify-center gap-4 px-12 py-4 min-w-[240px]"
            >

              {/* SLOT FIXO PARA LOGO */}
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.src = `https://via.placeholder.com/220x80/333/ffffff?text=${encodeURIComponent(
                      partner.name.split(" ")[0]
                    )}`;
                  }}
                  className="
                    max-h-16 max-w-44 object-contain
                    opacity-80
                    transition duration-300
                    hover:opacity-100 hover:scale-105
                  "
                />
              </div>

              {/* nome */}
              <span className="text-gray-400 text-[11px] tracking-wider italic font-serif text-center">
                {partner.name}
              </span>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;