/**
 * Conteúdo institucional e dados de contato.
 *
 * Tudo marcado com [A DEFINIR] precisa ser substituído pela Vortex antes do deploy.
 * Os textos institucionais (manifesto, eixos, serviços) já são conteúdo final.
 */

export const brand = {
  name: 'Vortex',
  tagline: 'Operação digital de ponta a ponta',
  short:
    'Empresa de tecnologia especializada em soluções digitais para aquisição, atendimento e retenção de clientes.',
  fullName: 'Vortex Systems',
  domain: 'vortexsystems.tech',
};

export const manifesto = {
  /* Quebra em linhas é intencional: o hero compõe o título linha a linha. */
  lines: ['Estruturamos a', 'operação digital', 'de ponta a ponta'],
  body:
    'CRM e automação de atendimento e vendas, integração entre sistemas, e o site, plataforma ou app que a operação precisa — com o design por trás de tudo isso.',
};

export const axes = [
  {
    key: 'automacao',
    label: 'Automação comercial e de relacionamento',
    body:
      'Funil de vendas, CRM, atendimento automatizado por texto e voz, e integração entre as ferramentas que a operação já usa.',
    tools: ['GoHighLevel', 'n8n'],
  },
  {
    key: 'produto',
    label: 'Produto digital',
    body:
      'Sites, sistemas web, plataformas SaaS, aplicativos — e o design visual que sustenta tudo isso.',
    tools: ['React', 'Supabase', 'Flutter'],
  },
];

/**
 * Roteiro dor -> solução. Usado na seção de serviços como entrada de leitura:
 * o visitante se reconhece na dor antes de ler a capacidade técnica.
 */
export const painPoints = [
  {
    pain: 'Perde lead porque ninguém responde rápido',
    fix: 'Follow-up automático e IA de atendimento e voz no GHL',
    service: 'ghl',
  },
  {
    pain: 'Os sistemas não conversam entre si',
    fix: 'Integrações e orquestração de processos com n8n',
    service: 'n8n',
  },
  {
    pain: 'Falta o site, o sistema ou o app da operação',
    fix: 'Desenvolvimento web, plataforma ou aplicativo sob medida',
    service: 'dev',
  },
];

export const principles = [
  {
    title: 'Diagnóstico antes de ferramenta',
    body:
      'Mapeamos o processo que já existe antes de propor qualquer automação. Automatizar um processo quebrado só quebra mais rápido.',
  },
  {
    title: 'A operação fica com você',
    body:
      'Repassamos o que foi construído para a sua equipe: treinamento, documentação e acesso. Você não fica dependente de nós para operar.',
  },
  {
    title: 'Uma frente só não resolve',
    body:
      'Automação sem produto digital vira remendo; produto sem automação vira trabalho manual. Entregamos os dois lados e o visual que amarra.',
  },
  {
    title: 'Manutenção é parte do serviço',
    body:
      'Fluxo de automação não é entrega única. Acompanhamos execução, tratamos erro e ajustamos conforme a operação muda.',
  },
];

export const navigation = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Automação', href: '#automacao' },
  { label: 'VTX Tap', href: '#vtx-tap', novo: true },
];

/**
 * TODO: preencher os socials reais da Vortex antes de publicar.
 * `href: null` faz o componente renderizar o item como texto inerte em vez de
 * um link quebrado.
 */
export const contact = {
  email: 'vortexsoftwareco@gmail.com',
  emailHref: 'mailto:vortexsoftwareco@gmail.com',
  whatsapp: '(37) 98827-1126',
  whatsappHref: 'https://wa.me/5537988271126',
  location: 'Brasil · atendimento remoto',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/vortexsoftwareco', handle: '@vortexsoftwareco' },
    { label: 'LinkedIn', href: null, handle: '/company/[A DEFINIR]' },
    { label: 'GitHub', href: null, handle: '/[A DEFINIR]' },
  ],
};

/**
 * Perguntas frequentes sobre a Vortex: a seção Dúvidas e o FAQPage do JSON-LD
 * (scripts/prerender.mjs). Só o que a empresa de fato faz e como trabalha.
 */
export const faq = [
  [
    'O que a Vortex faz?',
    'A Vortex estrutura a operação digital de empresas: CRM e automação de atendimento e vendas no GoHighLevel, integração entre sistemas com n8n e o desenvolvimento do site, plataforma ou aplicativo que a operação precisa. Também tem produtos próprios, como o VTX Tap, para bares e restaurantes.',
  ],
  [
    'Como começa um projeto?',
    'Com um diagnóstico: mapeamos como o processo funciona hoje, por onde o cliente entra, quem responde e o que ainda é feito à mão. Depois desenhamos o fluxo, construímos em ciclos com entrega visível e repassamos tudo para a sua equipe.',
  ],
  [
    'Vocês atendem fora da minha cidade?',
    'Sim. O atendimento é remoto, em todo o Brasil. Reuniões, implantação e treinamento acontecem online.',
  ],
  [
    'Minha equipe consegue operar depois da entrega?',
    'Sim. A entrega inclui treinamento, documentação e os acessos. A operação fica com você, e seguimos no suporte e na manutenção dos fluxos se quiser.',
  ],
  [
    'Vocês trabalham com as ferramentas que eu já uso?',
    'Na maioria dos casos, sim. Integramos por API com CRM, ERP, banco de dados, planilhas e outros serviços. No diagnóstico dizemos o que dá para aproveitar e o que vale trocar.',
  ],
  [
    'O que é o VTX Tap?',
    'É o produto da Vortex para bares e restaurantes: uma plaquinha com NFC e QR Code na mesa que abre a página do restaurante no celular do cliente, com cardápio, chamar o garçom, fidelidade pela nota fiscal e delivery sem comissão. Mais detalhes em tap.vortexsystems.tech.',
  ],
];
