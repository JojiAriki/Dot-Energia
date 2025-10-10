import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SocialSidebar } from '@/components/SocialSidebar';

type CookieCategory = {
  title: string;
  description: string;
};

const lastUpdated = '09 de outubro de 2025';

const cookieCategories: CookieCategory[] = [
  {
    title: 'Cookies estritamente necessários',
    description:
      'Garantem o funcionamento básico do site, permitindo carregar páginas, armazenar suas preferências de privacidade e manter sessões seguras.',
  },
  {
    title: 'Cookies de desempenho e analytics',
    description:
      'Coletam dados agregados sobre como o site é utilizado, como páginas mais visitadas e tempo de permanência, ajudando-nos a melhorar conteúdos e funcionalidades.',
  },
  {
    title: 'Cookies de funcionalidade',
    description:
      'Memorizam escolhas realizadas, como idioma, região ou campos previamente preenchidos, proporcionando uma navegação personalizada.',
  },
  {
    title: 'Cookies de marketing e mídia',
    description:
      'Permitem medir a efetividade de campanhas, exibir anúncios relevantes e limitar a frequência com que determinadas mensagens aparecem.',
  },
];

const controlOptions = [
  'Configuração no banner de consentimento exibido ao acessar o site.',
  'Gerenciamento das preferências diretamente nas configurações do navegador.',
  'Uso de ferramentas de opt-out disponibilizadas por plataformas de publicidade (como Google Ads ou Meta Ads).',
];

export const metadata: Metadata = {
  title: 'Política de Cookies | Dot Energia',
  description:
    'Entenda como a Dot Energia utiliza cookies e tecnologias similares para entregar uma experiência personalizada e segura em seus canais digitais.',
};

export default function CookiesPolicyPage() {
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
              Política de Cookies
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Esta Política descreve como a Dot Energia utiliza cookies, pixels
              e tecnologias similares para proporcionar uma experiência
              otimizada, segura e relevante em nossos canais digitais.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-20 pb-24 sm:-mt-28">
          <div className="container-max section-padding">
            <article className="rounded-3xl border border-neutral-100 bg-white shadow-2xl shadow-secondary-900/5">
              <div className="flex flex-col gap-6 border-b border-neutral-100 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-2xl font-semibold text-secondary-900 sm:text-3xl">
                    Transparência no uso de dados de navegação
                  </h2>
                  <p className="text-base leading-relaxed text-secondary-600">
                    Queremos que você entenda com clareza como os cookies
                    impactam sua navegação. Entre nossas prioridades estão a
                    proteção de informações pessoais, o cumprimento da LGPD e a
                    oferta de conteúdos relevantes ao seu interesse.
                  </p>
                </div>
                <div className="w-full max-w-sm rounded-2xl bg-neutral-50 px-6 py-5 text-sm text-secondary-600 shadow-inner shadow-secondary-100">
                  <p className="font-semibold text-secondary-900">
                    Última atualização
                  </p>
                  <p>{lastUpdated}</p>
                  <p className="mt-3 text-xs text-secondary-500">
                    Em caso de dúvidas, escreva para{' '}
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
                <section id="conceito" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    1. O que são cookies?
                  </h3>
                  <p>
                    Cookies são pequenos arquivos instalados no dispositivo do
                    Usuário quando ele acessa um site. Os cookies armazenam
                    informações sobre a navegação e permitem reconhecer
                    preferências, identificar padrões de uso e personalizar
                    conteúdos.
                  </p>
                </section>

                <section id="tipos" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    2. Tipos de cookies que utilizamos
                  </h3>
                  <p>
                    Utilizamos diferentes categorias de cookies, próprias
                    (first-party) e de terceiros (third-party), para garantir a
                    melhor experiência.
                  </p>
                  <ul className="mt-4 space-y-3">
                    {cookieCategories.map(({ title, description }) => (
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

                <section id="pixels" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    3. Pixels e tecnologias similares
                  </h3>
                  <p>
                    Além dos cookies, utilizamos pixels, tags e scripts que nos
                    ajudam a medir a eficácia das campanhas de marketing,
                    entender o comportamento dos Usuários e oferecer
                    recomendações personalizadas. Esses recursos coletam dados
                    agregados e não permitem a identificação direta do
                    indivíduo.
                  </p>
                </section>

                <section id="controle" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    4. Como controlar cookies
                  </h3>
                  <p>
                    Você pode gerenciar sua experiência de acordo com suas
                    preferências. As principais opções são:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {controlOptions.map((option) => (
                      <li key={option} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                        <p className="text-secondary-600">{option}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-secondary-500">
                    A revogação do consentimento pode impactar a disponibilidade
                    de certas funcionalidades. Em casos de bloqueio total,
                    alguns conteúdos poderão não carregar corretamente.
                  </p>
                </section>

                <section id="retencao" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    5. Prazo de retenção
                  </h3>
                  <p>
                    Os cookies possuem prazos de validade distintos. Enquanto
                    alguns são excluídos ao encerrar o navegador (cookies de
                    sessão), outros permanecem armazenados por períodos mais
                    longos para lembrar suas preferências em visitas futuras
                    (cookies persistentes). Respeitamos os prazos indicados
                    pelos fornecedores de tecnologia e adotamos ciclos de
                    revisão periódica.
                  </p>
                </section>

                <section id="atualizacoes" className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-900 sm:text-2xl">
                    6. Atualizações desta Política
                  </h3>
                  <p>
                    Podemos revisar este documento sempre que houver alterações
                    regulatórias, tecnológicas ou de estratégia. A versão
                    vigente estará sempre disponível neste endereço, acompanhada
                    da data de atualização.
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
