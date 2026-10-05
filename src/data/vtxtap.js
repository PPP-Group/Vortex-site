/**
 * VTX Tap — o produto da Vortex para bares e restaurantes.
 *
 * Texto e preços vêm da landing do produto (tap.vortexsystems.tech) e da
 * tabela em vigor desde 2026-10-03 (assets/js/precos.js do app). Ao mudar um
 * preço lá, mudar aqui também.
 * As telas em /public/vtx-tap são capturas reais do modo demonstração
 * (restaurante fictício Quintal Bistrô).
 */

export const vtxTap = {
  site: 'https://tap.vortexsystems.tech',
  orcamento: 'https://tap.vortexsystems.tech/orcamento',
};

/** Do toque ao painel: três passos. */
export const vtxSteps = [
  {
    icon: 'nfc',
    title: 'O cliente encosta o celular na plaquinha',
    body: 'Ou lê o QR Code. A plaquinha tem NFC e QR, do tamanho de um cartão de crédito, uma por mesa.',
  },
  {
    icon: 'phone',
    title: 'Abre a página do restaurante',
    body: 'Com o número da mesa, no navegador, sem aplicativo para baixar. Ali estão o cardápio, o sino, o clube de pontos, o Wi-Fi e a avaliação.',
  },
  {
    icon: 'monitor',
    title: 'A equipe recebe no painel',
    body: 'No celular, tablet ou computador do salão, com som. Chamados, notas da fidelidade e pedidos do delivery num lugar só.',
  },
];

/**
 * Os módulos da plataforma, na ordem em que o cliente encontra cada um.
 * `tela` é a captura mostrada no celular; `formato: 'paisagem'` usa a moldura
 * de tela larga (painel e telão).
 */
export const vtxModules = [
  {
    id: 'garcom',
    icon: 'bell',
    label: 'Chamar o garçom',
    title: 'O sino na palma da mão',
    body: 'O cliente escolhe o motivo (atendimento, pedido, conta, água) e segura o sino. A equipe vê a mesa, o nome e o tempo de espera.',
    points: [
      'Sem trote: o sino só toca para quem está no restaurante',
      'A mesa ganha um código para passar aos amigos',
      'Incluso na página da mesa',
    ],
    tela: '/vtx-tap/sino.webp',
    alt: 'Tela do VTX Tap com os motivos do chamado e o sino amarelo de chamar o garçom.',
  },
  {
    id: 'cardapio',
    icon: 'book',
    label: 'Cardápio digital',
    title: 'Cardápio com busca e fotos',
    body: 'Categorias, preços, selos (vegetariano, sem glúten, picante) e a lista para o cliente montar o pedido. Importe da sua planilha.',
    points: ['Um cardápio só para a mesa e o delivery', 'Atualiza na hora, sem reimprimir', 'No seu nome, com o número da mesa'],
    tela: '/vtx-tap/cardapio.webp',
    alt: 'Cardápio digital do VTX Tap com busca, categorias e pratos com selos.',
  },
  {
    id: 'fidelidade',
    icon: 'gift',
    label: 'Fidelidade',
    title: 'Clube de pontos pela nota fiscal',
    body: 'Cada compra com CPF na nota vira ponto ou selo: o cliente lê o QR Code da NFC-e, sem aplicativo, sem cartão de papel e sem integração com o caixa.',
    points: [
      'Clube de pontos, cartão de selos ou os dois, cada um no seu horário',
      'Prêmios com foto, níveis Bronze, Prata e Ouro, ranking e indicação',
      'Nota repetida ou de outro CNPJ é barrada na hora',
    ],
    tela: '/vtx-tap/fid-conta.webp',
    alt: 'Conta do clube de pontos com 280 pontos, nível Bronze e ranking do clube.',
  },
  {
    id: 'delivery',
    icon: 'moto',
    label: 'Delivery próprio',
    title: 'Seu delivery, sem comissão',
    body: 'Uma página de pedidos com o seu nome, o seu cardápio e as suas regras. O link vai no Instagram, no WhatsApp e na embalagem.',
    points: [
      'Taxa por distância e área de entrega pelo CEP',
      'O cliente acompanha o pedido até a porta',
      'Pix, cartão ou dinheiro na entrega',
    ],
    tela: '/vtx-tap/dl-menu.webp',
    alt: 'Página de delivery do Quintal Bistrô com o carrinho de pedidos.',
  },
  {
    id: 'happy-hour',
    icon: 'clock',
    label: 'Happy hour',
    title: 'Prorrogação: o happy hour que cresce',
    body: 'A cada chopp vendido, o garçom lê a comanda e o relógio ganha minutos, na TV do bar e no celular de cada mesa.',
    points: ['Ranking ao vivo de quem mais prorrogou', 'Você define os minutos, o máximo e o horário-limite', 'Telão na segunda tela com um toque'],
    tela: '/vtx-tap/hh-mesa.webp',
    alt: 'Relógio da Prorrogação no celular da mesa, com o happy hour em 1:22:53.',
  },
  {
    id: 'painel',
    icon: 'monitor',
    label: 'Painel da equipe',
    title: 'Tudo chega num painel só',
    body: 'Chamados por ordem de espera, mapa do salão, notas para conferir, prêmios para entregar e pedidos do delivery. Cada pessoa entra com o próprio PIN.',
    points: ['Funciona em qualquer celular, tablet ou computador', '“Estou indo” avisa a mesa que alguém está a caminho', 'Comanda impressa com um toque'],
    tela: '/vtx-tap/painel-chamados.webp',
    formato: 'paisagem',
    alt: 'Painel da equipe com os chamados das mesas abertos e o mapa do salão.',
  },
];

/** O que mais a página da mesa faz — sem tela própria. */
export const vtxExtras = [
  { icon: 'star', title: 'Avaliação no Google em um toque', body: 'E um canal anônimo direto para a gerência, antes de virar nota baixa.' },
  { icon: 'wifi', title: 'Wi-Fi, Instagram e horários', body: 'Tudo o que o garçom responde dez vezes por noite.' },
  { icon: 'users', title: 'Você conhece quem compra', body: 'Nome, contato e frequência de cada cliente do clube, com consentimento (LGPD).' },
  { icon: 'link', title: 'Domínio próprio', body: 'A página no endereço do restaurante, com HTTPS.' },
];

/** Preços em vigor (mensalidade por serviço). */
export const vtxPlans = [
  { id: 'pagina', name: 'Página da mesa', price: 79, desc: 'Cardápio, sino para chamar o garçom, Wi-Fi, avaliação no Google e comentários.' },
  { id: 'fidelidade', name: 'Fidelidade', price: 229, desc: 'Clube de pontos e cartão de selos pela nota fiscal, sem limite de clientes.' },
  { id: 'delivery', name: 'Delivery próprio', price: 169, desc: 'Pedidos ilimitados, sem porcentagem sobre as vendas.' },
  { id: 'prorrogacao', name: 'Prorrogação', price: 89, desc: 'O relógio do happy hour na TV e no celular de cada mesa.' },
];

export const vtxCombo = {
  price: 399,
  title: 'Página, fidelidade e delivery',
  note: 'Dois serviços juntos têm 10% de desconto; os três principais saem por R$ 399.',
};

export const vtxImplantacao =
  'Implantação a partir de R$ 690 (até 20 mesas): cadastro, cardápio montado, plaquinhas prontas para ligar e 1 hora de treinamento. No contrato de 12 meses, sai pela metade.';
