import React from "react";
import { PARTNERS } from "../constants";
import { MapPin, Maximize, Users } from "lucide-react";
import VideoCarousel from "./VideoCarousel";

import PartnersMarquee from "./PartnersMarquee";


const SpaceAndPartners: React.FC = () => {
  return (
    <>
      <section id="espaco" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 block">
              Estrutura Premium
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
              Um refúgio urbano
            </h2>
            <p className="max-w-2xl mx-auto text-brand-muted text-lg font-light">
              Mais de 120m² projetados para oferecer privacidade, conforto e uma
              experiência sensorial única em Jacarepaguá.
            </p>
          </div>

          {/* Carrossel de vídeos responsivo em substituição à grade de imagens */}
          <VideoCarousel />

          {/* Grade de recursos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-stone-100 pt-12">
            <div>
              <Maximize className="w-8 h-8 mx-auto text-brand-teal mb-4" />
              <h4 className="font-serif text-xl mb-2">Amplo Espaço</h4>
              <p className="text-sm text-brand-muted">Conforto em cada detalhe.</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto text-brand-teal mb-4" />
              <h4 className="font-serif text-xl mb-2">Pilates Studio</h4>
              <p className="text-sm text-brand-muted">Equipamentos de ponta.</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto text-brand-teal mb-4" />
              <h4 className="font-serif text-xl mb-2">Localização</h4>
              <p className="text-sm text-brand-muted">Fácil acesso no Pechincha.</p>
            </div>
          </div>
        </div>
      </section>

        <PartnersMarquee />

      {/* Tour modal removido – o carrossel já exibe os vídeos diretamente */}
    </>
  );
};

export default SpaceAndPartners;