import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SocialSidebar } from '@/components/SocialSidebar';

type SectionItem = {
  title: string;
  description: string;
};

const lastUpdated = '09 de outubro de 2025';

const userCommitments: SectionItem[] = [
  {
    title: 'Veracidade das informações',
    description:
      'Fornecer dados completos, atualizados e verdadeiros nos formulários e canais de relacionamento disponibilizados pela Dot Energia.',
  },
  {
    title: 'Uso adequado do conteúdo',
    description:
      'Utilizar o site, materiais e ferramentas apenas para fins legítimos, evitando atos que possam comprometer a integridade, disponibilidade ou performance da plataforma.',
  },
  {
    title: 'Respeito à propriedade intelectual',
    description:
      'Não reproduzir, distribuir ou modificar conteúdos, marcas, imagens ou códigos fonte sem autorização expressa da Dot Energia.',
  },
  {
    title: 'Proteção das credenciais',
    description:
      'Manter a confidencialidade de logins e senhas eventualmente disponibilizados e comunicar imediatamente qualquer uso indevido.',
  },
];

const liabilityLimitations: SectionItem[] = [
  {
    title: 'Disponibilidade do serviço',
    description:
      'Envidamos esforços para manter o site disponível continuamente, mas interrupções temporárias podem ocorrer por manutenção, instabilidades ou fatores externos.',
  },
  {
    title: 'Conteúdos de terceiros',
    description:
      'Não nos responsabilizamos por informações fornecidas por parceiros ou por conteúdos acessados em links externos que não estejam sob o nosso controle.',
  },
  {
    title: 'Decisões de negócios',
    description:
      'Informações publicadas no site têm caráter informativo. Decisões estratégicas devem considerar análises individualizadas e contratos específicos firmados com a Dot Energia.',
  },
];

export const metadata: Metadata = {
  title: 'Termos de Uso | Dot Energia',
  description:
    'Leia os Termos de Uso da Dot Energia e conheça as regras para utilização do site, conteúdos e serviços oferecidos pela companhia.',
};

export default function TermsOfUsePage() {
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
              Termos de Uso do Site Dot Energia
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Ao navegar em nossos canais digitais, você concorda com as
              condições descritas neste documento. Nosso objetivo é estabelecer
              regras claras para o uso do site, mantendo a transparência e a
              segurança na relação entre a Dot Energia e seus visitantes.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-20 pb-24 sm:-mt-28">
          <div className="container-max section-padding">
            <article className="rounded-3xl border border-neutral-100 bg-white shadow-2xl shadow-secondary-900/5">
              <div className="flex flex-col gap-6 border-b border-neutral-100 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-2xl font-semibold text-secondary-900 sm:text-3xl">
                    Aceitação e escopo
                  </h2>
                  <p className="text-base leading-relaxed text-secondary-600">
                    Estes Termos regulam a navegação, o acesso e o uso de todas
                    as funcionalidades disponíveis em www.dotenergia.com.br. A
                    utilização do site implica na aceitação integral das
                    condições aqui descritas. Se você não concorda com algum
                    ponto, recomendamos interromper o uso.
                  </p>
                </div>
                <div className="w-full max-w-sm rounded-2xl bg-neutral-50 px-6 py-5 text-sm text-secondary-600 shadow-inner shadow-secondary-100">
                  <p className="font-semibold text-secondary-900">
                    Última atualização
                  </p>
                  <p>{lastUpdated}</p>
                  <p className="mt-3 text-xs text-secondary-500">
                    Dúvidas adicionais podem ser encaminhadas para{' '}
                    <a
                      href="mailto:juridico@dotenergia.com.br"
                      className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-700"
                    >
                      juridico@dotenergia.com.br
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="space-y-12 px-6 py-10 sm:px-12 sm:py-14">
                <section id="definicoes" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    1. Definições
                  </h3>
                  <p>
                    Para fins destes Termos, aplicam-se as seguintes definições:
                    “Usuário” é toda pessoa física ou jurídica que acessa o
                    site; “Conteúdo” abrange textos, imagens, vídeos,
                    infográficos e demais materiais publicados; “Serviços” são
                    as soluções e consultorias ofertadas pela Dot Energia.
                  </p>
                </section>

                <section id="acesso" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    2. Condições de acesso e uso
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                      <p>
                        O acesso ao site é gratuito e depende de conexão com a
                        internet. Eventuais custos de equipamentos ou serviços
                        de telecomunicação são de responsabilidade do Usuário.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                      <p>
                        Algumas funcionalidades podem exigir o preenchimento de
                        formulários ou a criação de contas específicas. Nesses
                        casos, as credenciais são pessoais e intransferíveis.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                      <p>
                        Reservamo-nos o direito de suspender ou cancelar
                        cadastros que violem estes Termos ou utilizem o site
                        para fins ilícitos.
                      </p>
                    </li>
                  </ul>
                </section>

                <section id="servicos" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    3. Serviços apresentados no site
                  </h3>
                  <p>
                    As informações disponibilizadas têm caráter institucional e
                    demonstrativo. A contratação de qualquer serviço da Dot
                    Energia depende de análise individualizada, assinatura de
                    contratos específicos e cumprimento das exigências legais
                    aplicáveis ao setor elétrico brasileiro.
                  </p>
                </section>

                <section id="compromissos" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    4. Obrigações dos Usuários
                  </h3>
                  <p>
                    Ao utilizar nossos ambientes digitais, o Usuário
                    compromete-se a seguir as boas práticas abaixo:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {userCommitments.map(({ title, description }) => (
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

                <section id="propriedade" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    5. Propriedade intelectual
                  </h3>
                  <p>
                    Todo o conteúdo do site, incluindo layout, identidade
                    visual, marcas, domínios, textos, gráficos e materiais
                    audiovisuais, pertence à Dot Energia ou é licenciado por
                    terceiros. Qualquer uso não autorizado constitui violação de
                    direitos autorais e poderá gerar responsabilização civil e
                    penal.
                  </p>
                </section>

                <section id="limitacao" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    6. Limitação de responsabilidade
                  </h3>
                  <ul className="space-y-3">
                    {liabilityLimitations.map(({ title, description }) => (
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

                <section id="links" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    7. Links externos
                  </h3>
                  <p>
                    O site pode apresentar links para páginas de terceiros. A
                    Dot Energia não se responsabiliza pelo conteúdo, práticas de
                    privacidade ou disponibilidade dessas páginas. Recomendamos
                    que o Usuário leia os termos e políticas aplicáveis antes de
                    interagir com esses ambientes.
                  </p>
                </section>

                <section id="alteracoes" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    8. Atualizações destes Termos
                  </h3>
                  <p>
                    Podemos atualizar este documento para refletir melhorias em
                    nossos serviços, adequações legislativas ou mudanças
                    estratégicas. Sempre que alterações significativas
                    ocorrerem, publicaremos a nova versão com a respectiva data
                    de vigência.
                  </p>
                </section>

                <section id="foro" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    9. Foro e legislação aplicável
                  </h3>
                  <p>
                    Estes Termos são regidos pelas leis da República Federativa
                    do Brasil. Fica eleito o foro da comarca de Ribeirão
                    Preto/SP para dirimir eventuais controvérsias, com renúncia
                    expressa a qualquer outro, por mais privilegiado que seja.
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
