import React from 'react';
import { MessageCircle } from 'lucide-react';

// Simulando o objeto de constantes (ajuste conforme seu arquivo original)
const CONTACT_INFO = {
  whatsapp: '5521998968146' // Certifique-se de que aqui não existam espaços ou traços
};

const WhatsAppButton: React.FC = () => {
  // Mensagem codificada para o WhatsApp
  const message = encodeURIComponent('Olá gostaria de agendar a minha avaliação');
  
  // Link completo construído
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsapp}&text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      style={{ animation: 'bounce 3s infinite' }} // Adicionando uma animação simples caso o bounce-slow não esteja no seu Tailwind
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-semibold hidden md:inline">Agende sua avaliação</span>
    </a>
  );
};

export default WhatsAppButton;