import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SocialSidebar } from '@/components/SocialSidebar';

type ListItem = {
  title: string;
  description: string;
};

const lastUpdated = '09 de outubro de 2025';

const dataCollectionItems: ListItem[] = [
  {
    title: 'Dados de identificação e contato',
    description:
      'Nome completo, CPF/CNPJ quando aplicável, cargo, empresa, e-mail, telefone, cidade e informações fornecidas voluntariamente em formulários ou atendimentos.',
  },
  {
    title: 'Informações de navegação',
    description:
      'Endereço IP, tipo de dispositivo, navegador, páginas acessadas, tempo de permanência e origem de tráfego, coletados automaticamente para garantir segurança e aprimorar nossos serviços.',
  },
  {
    title: 'Dados de relacionamento comercial',
    description:
      'Informações sobre interesses em nossos produtos, histórico de contatos, registros de reuniões e respostas a campanhas de marketing.',
  },
  {
    title: 'Dados sensíveis',
    description:
      'Somente coletamos dados sensíveis em situações específicas e com consentimento explícito, tais como informações necessárias para análises de crédito, risco ou viabilidade energética.',
  },
];

const dataUsageItems: ListItem[] = [
  {
    title: 'Atendimento e relacionamento',
    description:
      'Responder solicitações, enviar propostas personalizadas, agendar consultorias e dar suporte em todo o ciclo de atendimento.',
  },
  {
    title: 'Comunicação institucional e marketing',
    description:
      'Compartilhar conteúdos relevantes sobre o mercado de energia, eventos, novidades de produtos e oportunidades de economia, sempre com opção de descadastramento.',
  },
  {
    title: 'Melhoria contínua dos serviços',
    description:
      'Aprimorar a experiência no site, desenvolver novas soluções e realizar análises estratégicas a partir de dados agregados e anonimizados.',
  },
  {
    title: 'Cumprimento de obrigações legais',
    description:
      'Atender exigências regulatórias, emitir contratos, notas fiscais e manter registros para auditorias e prestações de contas.',
  },
];

const dataSharingItems: ListItem[] = [
  {
    title: 'Parceiros estratégicos e fornecedores',
    description:
      'Empresas que nos auxiliam em hospedagem de dados, CRM, automação de marketing, serviços contábeis e jurídicos, todos comprometidos com padrões elevados de privacidade.',
  },
  {
    title: 'Autoridades públicas',
    description:
      'Órgãos reguladores, fiscalizadores ou judiciais, quando houver obrigação legal ou solicitação formal.',
  },
  {
    title: 'Transferências internacionais',
    description:
      'Caso seja necessário transferir dados para outros países, adotaremos salvaguardas adequadas, como contratos padrão e avaliação de conformidade.',
  },
];

const securityItems: ListItem[] = [
  {
    title: 'Criptografia e controle de acesso',
    description:
      'Utilizamos protocolos seguros (HTTPS), criptografia em repouso e em trânsito, além de políticas de acesso restritivas.',
  },
  {
    title: 'Monitoramento contínuo',
    description:
      'Realizamos auditorias periódicas, testes de vulnerabilidade e planos de resposta a incidentes.',
  },
  {
    title: 'Treinamento da equipe',
    description:
      'Todos os colaboradores e parceiros recebem orientações sobre boas práticas de segurança da informação e proteção de dados.',
  },
];

const holderRights = [
  'Confirmação da existência de tratamento de dados.',
  'Acesso às informações armazenadas.',
  'Correção de dados incompletos, inexatos ou desatualizados.',
  'Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.',
  'Portabilidade para outro fornecedor de serviço, quando aplicável.',
  'Eliminação dos dados tratados com consentimento.',
  'Informação sobre compartilhamento com terceiros.',
  'Revogação do consentimento, quando esta for a base legal utilizada.',
];

export const metadata: Metadata = {
  title: 'Política de Privacidade | Dot Energia',
  description:
    'Conheça a Política de Privacidade da Dot Energia e entenda como tratamos, protegemos e utilizamos os dados pessoais coletados em nossos canais digitais.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-neutral-50 text-secondary-700">
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 text-white"
        >
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary-500 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary-700 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent-500 blur-2xl opacity-70"></div>
          </div>

          <div className="relative z-10 container-max section-padding py-28 lg:py-36">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-primary-200">
              Documento Legal
            </span>
            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Transparência é um valor essencial para a Dot Energia. Este
              documento explica como coletamos, utilizamos, armazenamos e
              protegemos seus dados pessoais quando você interage com nossos
              serviços, website, campanhas e canais de atendimento.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-20 pb-24 sm:-mt-28">
          <div className="container-max section-padding">
            <article className="rounded-3xl border border-neutral-100 bg-white shadow-2xl shadow-secondary-900/5">
              <div className="flex flex-col gap-6 border-b border-neutral-100 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-2xl font-semibold text-secondary-900 sm:text-3xl">
                    Nosso compromisso com a sua privacidade
                  </h2>
                  <p className="text-base leading-relaxed text-secondary-600">
                    A Dot Energia trata os dados pessoais em conformidade com a
                    Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/18) e
                    demais normas aplicáveis. Utilizamos apenas as informações
                    necessárias para oferecer uma experiência relevante, segura
                    e personalizada.
                  </p>
                </div>
                <div className="w-full max-w-sm rounded-2xl bg-neutral-50 px-6 py-5 text-sm text-secondary-600 shadow-inner shadow-secondary-100">
                  <p className="font-semibold text-secondary-900">
                    Última atualização
                  </p>
                  <p>{lastUpdated}</p>
                  <p className="mt-3 text-xs text-secondary-500">
                    Caso surjam dúvidas sobre este documento, escreva para{' '}
                    <a
                      href="mailto:privacidade@dotenergia.com.br"
                      className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-700"
                    >
                      privacidade@dotenergia.com.br
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="space-y-12 px-6 py-10 sm:px-12 sm:py-14">
                <section id="dados_coletados" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    1. Quais dados coletamos
                  </h3>
                  <p>
                    Coletamos informações pessoais estritamente necessárias para
                    o relacionamento entre você e a Dot Energia. Os dados podem
                    ser obtidos de forma direta (quando você os fornece) ou
                    automática (por meio de tecnologias de rastreamento
                    autorizadas).
                  </p>
                  <ul className="mt-4 space-y-3">
                    {dataCollectionItems.map(({ title, description }) => (
                      <li key={title} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                        <div>
                          <p className="font-medium text-secondary-900">
                            {title}
                          </p>
                          <p className="text-secondary-600">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="uso_dos_dados" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    2. Como utilizamos seus dados
                  </h3>
                  <p>
                    Utilizamos as informações coletadas sempre com base em
                    fundamentos legais previstos na LGPD, como execução de
                    contratos, cumprimento de obrigações legais, legítimo
                    interesse e consentimento. As principais finalidades são:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {dataUsageItems.map(({ title, description }) => (
                      <li key={title} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                        <div>
                          <p className="font-medium text-secondary-900">
                            {title}
                          </p>
                          <p className="text-secondary-600">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="compartilhamento" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    3. Compartilhamento de dados pessoais
                  </h3>
                  <p>
                    A Dot Energia não vende dados pessoais. Compartilhamos
                    informações estritamente quando necessário para viabilizar
                    nossos serviços ou cumprir obrigações legais, sempre com
                    cláusulas contratuais de segurança e confidencialidade.
                  </p>
                  <ul className="mt-4 space-y-3">
                    {dataSharingItems.map(({ title, description }) => (
                      <li key={title} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                        <div>
                          <p className="font-medium text-secondary-900">
                            {title}
                          </p>
                          <p className="text-secondary-600">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="direitos" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    4. Seus direitos como titular
                  </h3>
                  <p>
                    Conforme a LGPD, você pode exercer a qualquer momento os
                    direitos relativos aos seus dados pessoais. Para isso,
                    utilize nossos canais de atendimento ou envie um e-mail para{' '}
                    <a
                      href="mailto:privacidade@dotenergia.com.br"
                      className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-700"
                    >
                      privacidade@dotenergia.com.br
                    </a>
                    . Respondemos às solicitações dentro dos prazos legais.
                  </p>
                  <ul className="mt-4 grid gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-6 sm:grid-cols-2">
                    {holderRights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                        <span className="text-secondary-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="seguranca" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    5. Segurança da informação
                  </h3>
                  <p>
                    Empregamos medidas técnicas e administrativas proporcionais
                    ao risco do tratamento para proteger seus dados contra
                    acessos não autorizados, perda, alteração ou divulgação
                    indevida.
                  </p>
                  <ul className="mt-4 space-y-3">
                    {securityItems.map(({ title, description }) => (
                      <li key={title} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                        <div>
                          <p className="font-medium text-secondary-900">
                            {title}
                          </p>
                          <p className="text-secondary-600">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="cookies" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    6. Cookies e tecnologias de rastreamento
                  </h3>
                  <p>
                    Utilizamos cookies, pixels e ferramentas similares para
                    garantir o funcionamento adequado do site, medir audiência,
                    personalizar conteúdos e exibir campanhas relevantes. Você
                    pode gerenciar suas preferências diretamente no navegador ou
                    em nossa{' '}
                    <a
                      href="/cookies"
                      className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-700"
                    >
                      Política de Cookies
                    </a>
                    .
                  </p>
                </section>

                <section id="retenção" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    7. Prazo de armazenamento
                  </h3>
                  <p>
                    Manteremos seus dados apenas pelo período necessário para
                    cumprir as finalidades desta Política, respeitando prazos
                    legais e contratuais. Ao final do ciclo de vida, os dados
                    serão eliminados ou anonimizados, salvo se houver
                    justificativa legal para mantê-los.
                  </p>
                </section>

                <section id="alteracoes" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    8. Alterações nesta Política
                  </h3>
                  <p>
                    Esta Política pode ser atualizada para refletir mudanças
                    legislativas, ajustes operacionais ou melhorias em nossos
                    processos. Sempre indicaremos a data da última revisão e
                    manteremos versões anteriores disponíveis mediante
                    solicitação.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <SocialSidebar />
    </>
  );
}
