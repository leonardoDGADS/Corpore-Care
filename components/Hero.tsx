import React from "react";
import { CONTACT_INFO } from "../constants";

const HERO_BG =
  "https://i.im.ge/2026/02/13/eACbVx.Front.jpeg"; // sua imagem "Front"

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-sand"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          className="w-full h-full object-cover object-center opacity-90"
          alt="Tratamento facial estético"
          loading="eager"
        />

        <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-brand-sand/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20">
        <span className="inline-block py-1 px-3 border border-brand-text/30 rounded-full text-brand-text text-xs tracking-[0.2em] uppercase mb-8 backdrop-blur-sm bg-white/30">
          Jacarepaguá • Rio de Janeiro
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-text mb-6 leading-tight">
          Cuidar de <br />
          <span className="italic text-brand-teal">você faz bem</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-brand-text/80 max-w-2xl mx-auto font-light leading-relaxed">
          Uma clínica humana, acessível e responsável.
          <br className="hidden md:block" />
          Especialistas em estética por assinatura e bem-estar integrado.
        </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            {/* Link para o WhatsApp com mensagem pré-preenchida */}
            <a
              href={`https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsapp}&text=Olá%20gostaria%20de%20agendar%20a%20minha%20avaliação`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-brand-teal text-white rounded-full text-xs uppercase tracking-widest hover:bg-brand-darkTeal transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agendar Avaliação
            </a>

            {/* Botão para rolar até a seção Conceito */}
            <a
              href="#conceito"
              className="px-10 py-4 bg-white/50 backdrop-blur-md border border-white text-brand-text rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all"
            >
              Conheça a Clínica
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;
