import { Icon } from '../ui/Icon';
import { Fone } from '../vtx/Mockups';
import { vtxTap, precos, brl } from '../../data/vtxtap';

const recursos = [
  ['bell', 'Chamar o garçom pelo celular'],
  ['book', 'Cardápio digital'],
  ['gift', 'Fidelidade pela nota fiscal'],
  ['moto', 'Delivery sem comissão'],
];

/**
 * VTX Tap: o lançamento, num módulo só, logo depois do hero. É o bloco roxo
 * da página (um por peça, como pede o manual), com o logo do produto em
 * branco. O detalhe do produto mora no site dele.
 */
export function VtxTap() {
  return (
    <section className="destaque destaque--roxo vtx-modulo" id="vtx-tap" aria-labelledby="vtxTitulo" data-reveal>
      <div className="vtx-modulo-txt">
        <div className="produto-marca">
          <img className="logo" src="/marca/vtx-tap-branco.svg" alt="VTX Tap" width="103" height="52" />
          <span className="tag-lanc">Lançamento</span>
        </div>
        <div className="sec-h">
          <p className="kicker">Novo produto da Vortex · para bares e restaurantes</p>
          <h2 id="vtxTitulo">A mesa inteira no celular do cliente</h2>
          <p>
            Uma plaquinha com NFC e QR Code na mesa. O cliente encosta o celular e abre a página do restaurante, sem
            baixar aplicativo. A equipe recebe tudo num painel.
          </p>
        </div>
        <ul className="vtx-recursos">
          {recursos.map(([icon, t]) => (
            <li key={t}>
              <span className="ico">
                <Icon name={icon} />
              </span>
              {t}
            </li>
          ))}
        </ul>
        <div className="ctas">
          <a className="btn btn-ouro" href={vtxTap.site} target="_blank" rel="noopener noreferrer">
            Conhecer o VTX Tap
            <Icon name="arrow" />
          </a>
          <a className="btn btn-linha" href={vtxTap.orcamento} target="_blank" rel="noopener noreferrer">
            Montar orçamento
          </a>
          <span className="vtx-preco">
            A partir de <b className="num">{brl(precos.pagina)}</b> por mês
          </span>
        </div>
      </div>

      <div className="vtx-modulo-foto" aria-hidden="true">
        <img className="vtx-placa" src="/vtx-tap/cartao-vtx-frente.webp" width="1712" height="1080" alt="" loading="lazy" />
        <Fone src="/vtx-tap/sino.webp" zoom={false} className="vtx-fone" />
      </div>
    </section>
  );
}
