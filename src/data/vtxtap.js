/**
 * VTX Tap — o produto da Vortex para bares e restaurantes.
 *
 * O texto das seções vem da landing do produto (tap.vortexsystems.tech,
 * lp/index.html do repositório app-vtx-tap). Os preços são os de
 * assets/js/precos.js do app, em vigor desde 2026-10-03: ao mudar lá, mudar aqui.
 * As telas em /public/vtx-tap são capturas reais do modo demonstração
 * (restaurante fictício Quintal Bistrô).
 */

export const vtxTap = {
  site: 'https://tap.vortexsystems.tech',
  orcamento: 'https://tap.vortexsystems.tech/orcamento',
};

/** Mensalidade por serviço (Precos.SERVICOS e Precos.ADICIONAIS). */
export const precos = {
  pagina: 79,
  fidelidade: 229,
  delivery: 169,
  prorrogacao: 89,
  /** Os quatro juntos (Precos.TODOS). */
  todos: 449,
  /** Página, fidelidade e delivery: 17% de desconto, terminado em 9. */
  tres: 399,
};

export const brl = (v) => `R$ ${Math.round(v).toLocaleString('pt-BR')}`;

/** Perguntas frequentes do VTX Tap: a seção Dúvidas e o FAQPage do JSON-LD. */
export const faqVtx = [
  ['O cliente precisa baixar algum aplicativo?', 'Não. Tudo abre no navegador do celular, ao encostar na plaquinha (NFC) ou ler o QR Code. O cadastro no clube de pontos pede só CPF, nome, contato e um PIN de 4 números.'],
  ['Funciona com o meu sistema de caixa (PDV)?', 'Sim. A fidelidade usa a nota fiscal de consumidor (NFC-e) que o seu caixa já emite: não precisa de integração. Se o seu sistema exporta o XML das notas, você pode enviar o arquivo no painel e todas são conferidas de uma vez.'],
  ['Posso contratar só o delivery ou só a fidelidade?', 'Pode. Cada serviço tem a sua mensalidade e você liga só o que quiser. Dá para começar com um e somar outro depois, com desconto.'],
  ['O delivery cobra alguma porcentagem das vendas?', 'Não. É uma mensalidade fixa, com pedidos ilimitados. As taxas da sua maquininha e do seu banco continuam as mesmas de hoje.'],
  ['Os dados dos clientes são meus?', 'Sim. A lista do clube de pontos (com o consentimento de cada cliente, conforme a LGPD) fica no seu painel e pode ser exportada em planilha.'],
  ['Quanto tempo leva para começar e qual é o contrato?', 'A nossa equipe monta o cardápio, cadastra as mesas e treina a equipe. As plaquinhas chegam prontas: menos de 10 segundos para ligar cada uma. O contrato mínimo é de 6 meses; no de 12 meses, a implantação sai pela metade.'],
  ['Preciso de um tablet ou computador novo?', 'Não. O painel da equipe funciona em qualquer celular, tablet ou computador com internet. Cada pessoa da equipe entra com o próprio PIN.'],
];
