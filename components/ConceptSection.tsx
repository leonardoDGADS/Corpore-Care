import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MISSION_STATEMENT, COMPANY_VALUES, CONTACT_INFO } from '../constants';

const ConceptSection: React.FC = () => {
  const assinaturaUrl = (text: string) => {
    const msg = encodeURIComponent(text);
    return `https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsapp}&text=${msg}`;
  };

  const planos = [
    {
      eyebrow: 'Exclusividade Corpore Care',
      title: 'Estética por Assinatura',
      subtitle:
        'A Estética por Assinatura Corpore Care é um modelo exclusivo de cuidado contínuo, ideal para quem deseja resultados progressivos, constância nos tratamentos e melhor custo-benefício.',
      description:
        'Os planos incluem tratamentos corporais personalizados, acompanhamento profissional e frequência regular, promovendo saúde, estética e bem-estar ao longo do tempo.',
      bullets: [] as string[],
      cta: 'Quero ser assinante',
      whatsappText:
        'Olá! Vi o site e quero ser assinante da Estética por Assinatura. Como funcionam os planos e valores?',
    },
    {
      eyebrow: 'Exclusividade Corpore Care',
      title: 'Meu Botox, Minha Vida',
      subtitle: 'Seu Botox planejado. Seu autocuidado contínuo.',
      description:
        'O Meu Botox, Minha Vida da Corpore Care foi criado para transformar o Botox em parte da sua rotina de autocuidado.\n\nCom um modelo de assinatura simples e planejado, você garante 3 aplicações ao longo do ano, com valor mensal fixo, acompanhamento profissional e toda a tranquilidade de um tratamento organizado.',
      bullets: ['Mais previsibilidade.', 'Mais cuidado com você.', 'Mais confiança nos resultados.'],
      cta: 'Quero ser assinante',
      whatsappText:
        'Olá! Tenho interesse no Meu Botox, Minha Vida (assinatura). Como funciona (3 aplicações ao ano) e qual o valor mensal?',
    },
  ];

  return (
    <>
      {/* Introduction Concept */}
      <section id="conceito" className="py-24 bg-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative mb-12 lg:mb-0 order-2 lg:order-1">
              <div className="absolute top-0 -left-4 w-full h-full border border-brand-gold rounded-t-[100px] z-0 hidden lg:block transform translate-x-4 translate-y-4"></div>
              <div className="relative z-10 rounded-t-[100px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                  alt="Tratamento estético delicado"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 block">
                Nossa Missão
              </span>

              <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6 leading-tight">
                Promover saúde, bem-estar e <span className="italic text-brand-teal">autoestima.</span>
              </h2>

              <div className="text-brand-text/80 font-light text-lg leading-relaxed mb-10">
                <p>{MISSION_STATEMENT}</p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {COMPANY_VALUES.slice(0, 4).map((value, idx) => (
                  <div key={idx} className="border-l-2 border-brand-gold/30 pl-4">
                    <h3 className="font-serif text-lg text-brand-text mb-1">{value.title}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#contato"
                  className="text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-brand-darkTeal transition-colors"
                >
                  Conheça todos os nossos valores →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Model */}
      <section id="assinatura" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da seção */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="font-serif italic text-brand-teal text-3xl md:text-4xl leading-tight mb-4 block">
              Exclusividade Corpore Care
            </span>
            <h2 className="text-4xl font-serif text-brand-text">Assinaturas</h2>
            <p className="text-brand-text/70 text-lg font-light leading-relaxed mt-4">
              Escolha o modelo ideal para manter seu autocuidado contínuo — com previsibilidade, acompanhamento e
              tranquilidade.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {planos.map((p) => (
              <div
                key={p.title}
                className="border border-stone-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-500 p-10"
              >
                <span className="font-serif italic text-brand-teal text-2xl leading-tight mb-3 block">
                  {p.eyebrow}
                </span>

                <h3 className="text-3xl font-serif text-brand-text mb-4">{p.title}</h3>

                <p className="text-brand-text/70 text-lg font-light leading-relaxed mb-6">{p.subtitle}</p>

                <p className="text-brand-muted leading-relaxed whitespace-pre-line">{p.description}</p>

                {p.bullets.length > 0 && (
                  <div className="mt-6 space-y-2">
                    {p.bullets.map((b) => (
                      <p key={b} className="text-brand-muted font-light leading-relaxed flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                      {b}
                    </p>
                    ))}
                  </div>
                )}

                <div className="mt-10">
                  <a
                    href={assinaturaUrl(p.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-teal text-white rounded-full text-xs uppercase tracking-widest hover:bg-brand-darkTeal transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <MessageCircle size={18} />
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConceptSection;