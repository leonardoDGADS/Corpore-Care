import React, { useState } from 'react';
import { CONTACT_INFO, SERVICE_CATEGORIES } from '../constants';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  // ✅ arquivo dentro de public/brand
  const footerLogoSrc = '/brand/logosecundaria.svg';

  const serviceWhatsAppLink = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse em ${serviceTitle}. Pode me passar detalhes e valores?`
    );
    return `https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsapp}&text=${text}`;
  };

  return (
    <footer id="contato" className="bg-white border-t border-stone-100 pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-10">
          {!logoError ? (
            <img
              src={footerLogoSrc}
              alt="Corpore Care"
              className="h-14 w-auto mx-auto"
              loading="lazy"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="text-2xl font-serif font-bold tracking-tight text-brand-text">
              Corpore <span className="text-brand-gold italic">Care</span>
            </div>
          )}
        </div>

        {/* Social */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text hover:text-brand-gold transition-colors transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>

          <a
            href="#"
            className="text-brand-text hover:text-brand-gold transition-colors transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-brand-text hover:text-brand-gold transition-colors transform hover:scale-110"
            aria-label="E-mail"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Services + Address + Contact */}
        <div className="grid md:grid-cols-3 gap-10 mb-16 text-brand-text/70 font-light">
          {/* Serviços */}
          <div className="flex flex-col items-center">
            <span className="uppercase tracking-widest text-xs font-bold text-brand-text mb-4">
              Serviços
            </span>

            <div className="flex flex-col gap-3 text-sm">
              {SERVICE_CATEGORIES.map((s) => (
                <a
                  key={s.id}
                  href={serviceWhatsAppLink(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Endereço */}
          <div className="flex flex-col items-center">
            <span className="uppercase tracking-widest text-xs font-bold text-brand-text mb-4">
              Endereço
            </span>
            <p className="text-center">
              {CONTACT_INFO.address}
              <br />
              {CONTACT_INFO.district}, {CONTACT_INFO.city}
              <br />
              CEP: {CONTACT_INFO.zip}
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center">
            <span className="uppercase tracking-widest text-xs font-bold text-brand-text mb-4">
              Fale Conosco
            </span>
            <p className="mb-2">{CONTACT_INFO.email}</p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline font-medium"
            >
              {CONTACT_INFO.whatsappDisplay}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-100 pt-8 text-xs text-brand-muted uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Corpore Care. Todos os direitos reservados.</p>
          <p className="mt-2 opacity-50">CNPJ: {CONTACT_INFO.cnpj}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;