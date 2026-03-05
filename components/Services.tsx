import React from 'react';
import { SERVICE_CATEGORIES, POPULAR_SERVICES, CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  // Mensagens pré-definidas para cada serviço, codificadas para uso em URLs
  const serviceMessages: Record<string, string> = {
    'estetica-corporal': encodeURIComponent(
      'Olá! Vi a parte de Estética Corporal no site e gostaria de agendar uma avaliação para redução de medidas.'
    ),
    'facial-avancada': encodeURIComponent(
      'Olá! Tenho interesse na Estética Facial Avançada. Gostaria de informações sobre Botox e Ultraformer.'
    ),
    laser: encodeURIComponent(
      'Olá! Gostaria de saber os valores e pacotes para Depilação a Laser.'
    ),
    drenagem: encodeURIComponent(
      'Olá! Gostaria de agendar uma sessão de massagem/drenagem. Vocês têm horário para esta semana?'
    ),
    spa: encodeURIComponent(
      'Olá! Gostaria de conhecer os rituais do SPA para um momento de relaxamento.'
    ),
    criolipolise: encodeURIComponent(
      'Olá! Tenho interesse na Criolipólise de Placas. Como funciona o protocolo de vocês?'
    ),
    pilates: encodeURIComponent(
      'Olá! Gostaria de saber os horários disponíveis e valores das aulas de Pilates.'
    ),
    fisioterapia: encodeURIComponent(
      'Olá! Preciso de um atendimento em Fisioterapia. Vocês aceitam plano ou apenas particular?'
    ),
    ultraformer: encodeURIComponent(
      'Olá! Tenho interesse no tratamento Ultraformer III. Gostaria de saber como funciona e os valores.'
    ),

    'muay-thai-funcional': encodeURIComponent(
      'Olá! Gostaria de saber mais sobre as aulas de Muay Thai Funcional para mulheres. Vocês têm horários disponíveis?'
    ),
  };

  return (
    <section id="servicos" className="py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 block">
              Nossos Tratamentos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text leading-tight">
              Cuidado integral para <br />
              <span className="italic text-brand-teal">Corpo, Mente e Rosto.</span>
            </h2>
          </div>
          {/* Removido o botão "Ver Menu Completo" */}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((category) => {
            const msg = serviceMessages[category.id] ?? '';
            return (
              <a
                key={category.id}
                href={`https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsapp}&text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white h-[450px] overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    style={{ objectPosition: category.id === 'laser' ? 'left center' : 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <category.icon className="text-brand-gold w-6 h-6" />
                    <h3 className="text-2xl font-serif text-white">{category.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-6 opacity-100 line-clamp-4 leading-relaxed font-light">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {category.items.slice(0, 4).map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider text-white border border-white/30 px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Popular Tags */}
        <div className="mt-16 text-center">
          <p className="font-serif text-xl italic text-brand-text mb-6">
            Os protocolos mais procurados:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {POPULAR_SERVICES.map((service, idx) => (
              <span
                key={idx}
                className="px-6 py-2 bg-white border border-stone-100 rounded-full text-brand-text text-sm hover:border-brand-gold hover:text-brand-gold transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;