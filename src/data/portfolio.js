/**
 * PORTFÓLIO.
 *
 * As entradas com `demo: false` são projetos reais no ar — capa é print da
 * própria hero do site, e o modal carrega o domínio de produção no iframe.
 * As entradas com `demo: true` são exemplos estruturais que descrevem o *tipo*
 * de projeto; ficam no fim da grade e a Vortex troca por cases definitivos.
 *
 * Campos:
 *   liveUrl     URL carregada no <iframe> do modal. `null` = sem preview
 *               embutido; o modal já abre no fallback visual.
 *   embeddable  `false` quando o domínio recusa embed (X-Frame-Options ou
 *               CSP frame-ancestors). O navegador NÃO permite descobrir isso
 *               pelo cliente em outra origem — veja o comentário longo em
 *               ProjectModal.jsx. Então quem sabe é você: marque `false` e o
 *               modal abre direto na capa, sem piscar um frame vazio.
 *               Para descobrir, inspecione os cabeçalhos da resposta:
 *               `curl -sI <url>` e procure x-frame-options / content-security-policy.
 *               Os quatro domínios .vercel.app abaixo foram verificados: não
 *               enviam nenhum dos dois cabeçalhos, então embutem normalmente.
 *   externalUrl destino do botão "abrir em nova aba". `null` desabilita.
 *   cover       imagem de capa em /public/portfolio/. Se o arquivo não
 *               existir, o card cai num placeholder gráfico procedural.
 *   demo        `true` marca o card como exemplo estrutural, não case real.
 *   results     métricas do case. `[MÉTRICA A DEFINIR]` = aguardando número
 *               real aprovado pelo cliente — nunca preencher com estimativa.
 */

export const projects = [
  {
    id: 'portfolio-candidaturas',
    title: 'Portfólio de sites de campanha',
    category: 'Portfólio digital',
    year: '2026',
    summary:
      'A vitrine das campanhas eleitorais que a Vortex colocou no ar, com prazo de urna contando na própria página.',
    description:
      'Portfólio próprio da Vortex para a frente eleitoral: reúne as campanhas já publicadas, o que entra em cada site e o prazo até o primeiro turno. A contagem regressiva e os contadores da página são calculados a partir da data da eleição, não escritos à mão — a página envelhece sozinha até o dia da urna.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://vortex-portfolio-candidaturas.vercel.app/',
    embeddable: true,
    externalUrl: 'https://vortex-portfolio-candidaturas.vercel.app/',
    cover: '/portfolio/portfolio-candidaturas.webp',
    accent: 'flare',
    demo: false,
    results: [
      { value: '7 campanhas', label: 'sites de candidatura no ar' },
      { value: '4 estados', label: 'alcance das campanhas publicadas' },
    ],
  },
  {
    id: 'renascer-epi',
    title: 'Renascer — distribuidora de EPIs',
    category: 'Site institucional',
    year: '2026',
    summary:
      'Catálogo de equipamentos de proteção, área de atendimento e mapa de cobertura para captação de empresas.',
    description:
      'Site institucional de distribuidora de EPIs: apresenta o catálogo por categoria, a área de cobertura num mapa interativo e leva o visitante a falar com um consultor. O formulário e o botão de WhatsApp são os dois caminhos de captação, pensados para o comprador industrial que decide rápido.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Leaflet'],
    liveUrl: 'https://renascer-sigma.vercel.app/',
    embeddable: true,
    externalUrl: 'https://renascer-sigma.vercel.app/',
    cover: '/portfolio/renascer-epi.webp',
    accent: 'volt',
    demo: false,
    results: [
      { value: '[MÉTRICA A DEFINIR]', label: 'aumento em contatos de consultor' },
      { value: '[MÉTRICA A DEFINIR]', label: 'nota de performance' },
    ],
  },
  {
    id: 'lp-academia',
    title: 'Landing page para academia',
    category: 'Landing page',
    year: '2026',
    summary:
      'Template de captação para academia e box: planos, aulas e localização num fluxo só até o botão de matrícula.',
    description:
      'Template de landing page para academias e boxes de treino. Hero em carrossel, grade de planos comparáveis lado a lado, agenda de aulas e localização — tudo numa página que termina em matrícula. Construído para receber a automação de recuperação de lead desde o primeiro dia.',
    stack: ['React', 'Vite', 'Vercel'],
    liveUrl: 'https://lp-gym-topaz.vercel.app/',
    embeddable: true,
    externalUrl: 'https://lp-gym-topaz.vercel.app/',
    cover: '/portfolio/lp-academia.webp',
    accent: 'pulse',
    demo: false,
    results: [
      { value: 'Template', label: 'pronto para adaptar à marca da academia' },
      { value: 'Página única', label: 'planos, aulas e localização até a matrícula' },
    ],
  },
  {
    id: 'site-candidatura',
    title: 'Site de campanha eleitoral',
    category: 'Site de campanha',
    year: '2026',
    summary:
      'Template de candidatura com simulador de urna, trajetória e propostas — o número decorado antes do voto.',
    description:
      'Template para site de candidatura. O simulador de urna na hero existe por um motivo específico: o eleitor decora o número digitando, não lendo. Em volta dele ficam a trajetória, as entregas já feitas item por item e as propostas — e o WhatsApp fica sempre a um toque, que é por onde a campanha realmente conversa.',
    stack: ['React', 'Vite', 'Vercel'],
    liveUrl: 'https://candidato-template.vercel.app/',
    embeddable: true,
    externalUrl: 'https://candidato-template.vercel.app/',
    cover: '/portfolio/site-candidatura.webp',
    accent: 'flare',
    demo: false,
    results: [
      { value: 'Simulador de urna', label: 'o número decorado antes da eleição' },
      { value: 'Template', label: 'adaptável a qualquer candidatura e número' },
    ],
  },
  {
    id: 'gestao-academia',
    /* TODO: substituir por case real do cliente */
    title: 'Plataforma de gestão para academia',
    category: 'Plataforma SaaS',
    year: '[ANO]',
    summary:
      'Painel de alunos, planos e frequência, com o comercial alimentado por automação de recuperação de matrícula.',
    description:
      'Sistema web onde a recepção acompanha matrículas ativas, inadimplência e frequência em tempo real. O cadastro de aluno dispara um fluxo que sincroniza o CRM, agenda a avaliação física e devolve o status para o painel — sem ninguém digitar duas vezes.',
    stack: ['React', 'Supabase', 'n8n', 'GoHighLevel'],
    liveUrl: '/preview/plataforma-academia.html',
    embeddable: true,
    externalUrl: null,
    cover: '/portfolio/gestao-academia.webp',
    accent: 'pulse',
    demo: true,
    results: [
      { value: '[MÉTRICA A DEFINIR]', label: 'redução no tempo de matrícula' },
      { value: '[MÉTRICA A DEFINIR]', label: 'recuperação de inadimplência' },
    ],
  },
  {
    id: 'site-engenharia',
    /* TODO: substituir por case real do cliente */
    title: 'Site institucional para engenharia',
    category: 'Site institucional',
    year: '[ANO]',
    summary: 'Apresentação de obras e serviços com captação qualificada direto no CRM.',
    description:
      'Site de apresentação com portfólio de obras, páginas de serviço otimizadas para busca e formulário que entrega o lead já classificado por tipo de obra e porte no pipeline certo do CRM.',
    stack: ['React', 'Vite', 'GoHighLevel'],
    liveUrl: '/preview/site-engenharia.html',
    embeddable: true,
    externalUrl: null,
    cover: '/portfolio/site-engenharia.webp',
    accent: 'volt',
    demo: true,
    results: [
      { value: '[MÉTRICA A DEFINIR]', label: 'aumento em leads qualificados' },
      { value: '[MÉTRICA A DEFINIR]', label: 'nota de performance' },
    ],
  },
  {
    id: 'dashboard-receita',
    /* TODO: substituir por case real do cliente */
    title: 'Dashboard de atribuição de receita',
    category: 'Dashboard interno',
    year: '[ANO]',
    summary: 'Painel que junta CRM, tráfego pago e faturamento numa fonte só de verdade.',
    description:
      'Fluxos no n8n coletam dados de CRM, plataformas de anúncio e financeiro, normalizam e gravam num banco único. O painel mostra origem do lead, estágio do pipeline e receita atribuída sem exportação manual de planilha.',
    stack: ['n8n', 'Supabase', 'React'],
    liveUrl: null,
    embeddable: true, // sem efeito enquanto liveUrl for null
    // Slot vazio: sem arquivo, o card desenha o wireframe do tipo de projeto.
    // Basta apontar para /portfolio/<arquivo>.webp quando o print real existir.
    externalUrl: null,
    cover: null,
    accent: 'pulse',
    demo: true,
    results: [
      { value: '[MÉTRICA A DEFINIR]', label: 'horas de planilha eliminadas' },
      { value: '[MÉTRICA A DEFINIR]', label: 'fontes de dados unificadas' },
    ],
  },
  {
    id: 'area-membros',
    /* TODO: substituir por case real do cliente */
    title: 'Área de membros e curso online',
    category: 'Plataforma de conteúdo',
    year: '[ANO]',
    summary: 'Curso, comunidade e liberação de acesso automática após a compra.',
    description:
      'Área de membros com trilha de aulas, progresso e comunidade. A compra libera o acesso, matricula na turma e inicia a sequência de onboarding automaticamente — nenhum passo manual entre pagar e assistir.',
    stack: ['GoHighLevel', 'n8n'],
    liveUrl: null,
    embeddable: true, // sem efeito enquanto liveUrl for null
    externalUrl: null,
    cover: null, // slot vazio — ver nota no projeto acima
    accent: 'volt',
    demo: true,
    results: [
      { value: '[MÉTRICA A DEFINIR]', label: 'conclusão do onboarding' },
      { value: '[MÉTRICA A DEFINIR]', label: 'tempo de liberação de acesso' },
    ],
  },
];
