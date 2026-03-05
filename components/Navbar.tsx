import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Conceito', href: '#conceito' },
    { name: 'Assinatura', href: '#assinatura' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'O Espaço', href: '#espaco' },
    { name: 'Contato', href: '#contato' },
  ];

  const message = encodeURIComponent('Olá gostaria de agendar a minha avaliação');

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#conceito" className="flex items-center">
              <img
                src="/brand/corporecare.svg"
                alt="Corpore Care"
                className={`w-auto transition-all duration-300 ${
                  scrolled ? 'h-12' : 'h-14'
                }`}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="sr-only">Corpore Care</span>
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-text text-xs uppercase tracking-widest hover:text-brand-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Botão Agendar */}
            <a
              href={`https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsapp}&text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-text/20 text-brand-text px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300"
            >
              Agendar
            </a>
          </div>

          {/* Botão menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="text-brand-text hover:text-brand-gold focus:outline-none"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-stone-100 animate-fade-in">
          <div className="px-6 py-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-brand-text hover:text-brand-gold text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            ))}

            <a
              href={`https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsapp}&text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-xs text-center bg-brand-gold text-white px-6 py-3 mt-6 rounded-full text-xs uppercase tracking-widest font-bold shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;