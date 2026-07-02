import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Shield, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    // Dispatch a popstate-like event to trigger routing updates
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="privacy-policy" className="bg-brand-sand min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/"
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-darkTeal font-medium transition-colors group text-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </a>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xs border border-stone-100 p-8 sm:p-12 text-brand-text">
          
          {/* Header */}
          <div className="text-center border-b border-stone-100 pb-10 mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-sand text-brand-teal mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-brand-text mb-4">
              Política de Privacidade
            </h1>
            <p className="text-brand-muted text-sm max-w-lg mx-auto">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-stone max-w-none space-y-6 text-brand-text/85 leading-relaxed font-light">
            <p>
              A <strong>Corpore Care Estética Avançada Ltda.</strong>, valoriza a privacidade dos seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os seus dados pessoais, em total conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº 13.709/2018</strong>.
            </p>
            <p>
              Ao utilizar nosso site, entrar em contato conosco pelo WhatsApp ou contratar nossos planos e serviços, você concorda e aceita os termos e condições aqui descritos.
            </p>

            {/* Section 1 */}
            <div className="pt-4">
              <h2 className="font-serif text-xl font-bold text-brand-text mb-3">
                1. Quais dados pessoais coletamos?
              </h2>
              <p className="mb-3">
                Coletamos informações essenciais para a prestação dos nossos serviços estéticos, atendimento e ações de marketing. Esses dados incluem:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Dados de Contato e Identificação:</strong> Nome completo, endereço de e-mail e número de telefone/WhatsApp.
                </li>
                <li>
                  <strong>Dados Relacionados à Saúde e Estética:</strong> Informações de anamnese, histórico de tratamentos estéticos anteriores, alergias, condições médicas específicas ou objetivos estéticos, coletados unicamente para a segurança e personalização dos procedimentos contratados.
                </li>
                <li>
                  <strong>Dados de Navegação:</strong> Informações sobre seu comportamento ao navegar em nosso site através de cookies e tecnologias similares.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="pt-4">
              <h2 className="font-serif text-xl font-bold text-brand-text mb-3">
                2. Como os dados são coletados?
              </h2>
              <p className="mb-2">Seus dados pessoais são coletados de três formas principais:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Interações Diretas:</strong> Quando você preenche formulários em nosso site, entra em contato conosco por WhatsApp ou e-mail, ou fornece informações durante as avaliações presenciais na clínica.
                </li>
                <li>
                  <strong>De forma automatizada:</strong> Por meio de cookies e scripts instalados quando você navega em nosso site (por exemplo, estatísticas de acesso e publicidade direcionada).
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="pt-4">
              <h2 className="font-serif text-xl font-bold text-brand-text mb-3">
                3. Cookies, Remarketing e Ferramentas de Análise
              </h2>
              <p>
                Utilizamos tecnologias de terceiros para entender o comportamento de navegação no nosso site e otimizar campanhas publicitárias:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Coleta dados anônimos de acesso (páginas visitadas, tempo de permanência, origem do tráfego) para nos ajudar a melhorar o desempenho do site e a experiência dos usuários.
                </li>
                <li>
                  <strong>Google Ads e Remarketing:</strong> Usamos cookies de publicidade para apresentar anúncios relevantes baseados nas suas visitas anteriores ao nosso site, permitindo uma comunicação mais eficiente e alinhada aos seus interesses.
                </li>
              </ul>
              <p className="mt-3">
                Você pode gerenciar ou bloquear o uso de cookies a qualquer momento diretamente nas configurações do seu navegador de internet.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-4">
              <h2 className="font-serif text-xl font-bold text-brand-text mb-3">
                4. Compartilhamento de Dados com Ferramentas de Tecnologia
              </h2>
              <p>
                Não vendemos nem comercializamos seus dados pessoais sob nenhuma circunstância. No entanto, os seus dados podem ser processados por parceiros tecnológicos autorizados de extrema confiança, como:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provedores de hospedagem e servidores de internet.</li>
                <li>Ferramentas de envio de e-mails, agendamento online e gerenciamento de CRM.</li>
                <li>Plataformas de mensagens integradas (como a API do WhatsApp).</li>
              </ul>
              <p className="mt-3">
                Todos esses provedores de serviços são contratados sob a premissa de manter o sigilo absoluto e a segurança dos seus dados pessoais.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-4">
              <h2 className="font-serif text-xl font-bold text-brand-text mb-3">
                5. Seus Direitos como Titular dos Dados (LGPD)
              </h2>
              <p className="mb-3">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direitos plenos sobre suas informações pessoais. É garantido a você, a qualquer momento, mediante requisição direta:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmação da existência de tratamento dos seus dados.</li>
                <li>Acesso aos seus dados pessoais armazenados por nós.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li>
                <li>Revogação do consentimento para envio de comunicações de marketing.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="pt-4">
              <h2 className="font-serif text-xl font-bold text-brand-text mb-3">
                6. Retenção e Segurança dos Dados
              </h2>
              <p>
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, inclusive para fins de cumprimento de obrigações legais, contratuais, fiscais ou de prestação de contas.
              </p>
              <p>
                Adotamos rígidas medidas de segurança físicas, técnicas e organizacionais para proteger as suas informações contra perdas, acessos não autorizados, alterações ou divulgações acidentais.
              </p>
            </div>

            {/* Section 7 */}
            <div className="pt-4 border-t border-stone-100 mt-10">
              <h2 className="font-serif text-xl font-bold text-brand-text mb-4">
                7. Contato e Responsável pelo Tratamento (DPO)
              </h2>
              <p className="mb-6">
                Para exercer qualquer um dos seus direitos, tirar dúvidas sobre esta Política de Privacidade ou solicitar a remoção dos seus dados de nossa base, entre em contato diretamente com o nosso Encarregado pelo Tratamento de Dados Pessoais:
              </p>

              <div className="bg-brand-sand rounded-2xl p-6 grid sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-brand-text mb-1 uppercase tracking-wider text-xs">Razão Social</h4>
                    <p className="font-light">Corpore Care Estética Avançada Ltda.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text mb-1 uppercase tracking-wider text-xs">Endereço</h4>
                    <p className="font-light flex items-start gap-1">
                      <MapPin className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                      Av. Geremário Dantas, 526, loja H<br />Pechincha - Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-brand-text mb-1 uppercase tracking-wider text-xs">E-mail</h4>
                    <a href="mailto:carecorpore@gmail.com" className="text-brand-teal hover:underline font-light flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      carecorpore@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text mb-1 uppercase tracking-wider text-xs">WhatsApp para Contato</h4>
                    <a href="https://wa.me/5521998968146" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline font-light flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      +55 21 99896-8146
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
