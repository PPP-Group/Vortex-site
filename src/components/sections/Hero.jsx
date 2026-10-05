import { Icon } from '../ui/Icon';
import { Fone } from '../vtx/Mockups';
import { vtxTap } from '../../data/vtxtap';

/**
 * Hero: o lançamento do VTX Tap, no mesmo desenho do hero da landing do
 * produto — bloco noite com anéis, título com a segunda linha em lilás,
 * botão ouro e, à direita, o celular com o clube de pontos e a plaquinha.
 */
export function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="heroTitulo">
      <div className="hero-txt">
        <a href="#vtx-tap" className="lanc" style={{ textDecoration: 'none' }}>
          <b>Lançamento</b>
          <img src="/marca/vtx-tap-negativo.svg" alt="VTX Tap" width="44" height="22" />
          para bares e restaurantes
        </a>
        <h1 id="heroTitulo">
          Faça o cliente voltar. <em>E pedir direto com você.</em>
        </h1>
        <p className="hero-sub">
          O novo produto da Vortex: um <b>programa de fidelidade pela nota fiscal</b>, um{' '}
          <b>delivery próprio sem comissão</b>, o <b>happy hour que cresce a cada chopp</b> e a mesa inteira no celular
          do cliente: cardápio, chamar o garçom e avaliação no Google. Tudo por uma plaquinha na mesa,{' '}
          <b>sem aplicativo para baixar</b>.
        </p>
        <div className="ctas">
          <a className="btn btn-ouro" href={vtxTap.orcamento} target="_blank" rel="noopener noreferrer">
            Montar meu orçamento
            <Icon name="arrow" />
          </a>
          <a className="btn btn-linha" href="#vtx-tap">
            Conhecer o VTX Tap
          </a>
        </div>
        <ul className="selos">
          {['Sem comissão por pedido', 'Funciona com qualquer caixa (PDV)', 'Implantação e treinamento inclusos'].map((t) => (
            <li key={t}>
              <Icon name="check" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-fotos" aria-hidden="true">
        <Fone src="/vtx-tap/fid-conta.webp" zoom={false} eager />
        <span className="hero-placa">
          <img src="/vtx-tap/cartao-vtx-verso.webp" width="1080" height="1712" alt="" />
        </span>
        <span className="hero-etq hero-etq--a">
          <span className="pt">+13</span>
          <span>
            pontos<small>nota fiscal lida</small>
          </span>
        </span>
        <span className="hero-etq hero-etq--b">
          <Icon name="moto" className="h-5 w-5 text-[#1B7F52]" />
          <span>
            Pedido #4<small>R$ 0 de comissão</small>
          </span>
        </span>
      </div>
    </section>
  );
}
