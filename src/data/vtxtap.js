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
