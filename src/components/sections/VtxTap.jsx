import { useState } from 'react';
import { Icon } from '../ui/Icon';
import { Fone, Laptop, Tv } from '../vtx/Mockups';
import { Placa3D } from '../vtx/Placa3D';
import { vtxTap, precos, brl } from '../../data/vtxtap';

/**
 * VTX Tap — o lançamento. As seções seguem a landing do produto
 * (tap.vortexsystems.tech): resultados, como funciona, fidelidade (noite),
 * delivery (roxo), Prorrogação (noite), na mesa, plaquinhas, preços e dúvidas.
 */

const orcar = { href: vtxTap.orcamento, target: '_blank', rel: 'noopener noreferrer' };

function SecH({ kicker, id, titulo, children, centro }) {
  return (
    <div className={`sec-h ${centro ? 'centro' : ''}`}>
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{titulo}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ListaFx({ itens }) {
  return (
    <ul className="lista-fx">
      {itens.map(([icon, b, span]) => (
        <li key={b}>
          <span className="ico">
            <Icon name={icon} />
          </span>
          <div>
            <b>{b}</b>
            <span>{span}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Fluxo({ passos }) {
  return (
    <div className="fluxo">
      {passos.map(([strong, span], i) => (
        <div key={strong}>
          <b>{i + 1}</b>
          <strong>{strong}</strong>
          <span>{span}</span>
        </div>
      ))}
    </div>
  );
}

export function VtxTap() {
  return (
    <>
      <Resultados />
      <ComoFunciona />
      <Fidelidade />
      <Delivery />
      <Prorrogacao />
      <div className="orc-faixa" data-reveal>
        <div>
          <b>Quanto fica para o seu restaurante?</b>
          <span>Escolha os serviços e o número de mesas: o preço aparece na hora, com a implantação e as plaquinhas.</span>
        </div>
        <a className="btn btn-roxo" {...orcar}>
          Montar meu orçamento
          <Icon name="arrow" />
        </a>
      </div>
      <NaMesa />
      <Plaquinhas />
      <Precos />
      <Duvidas />
    </>
  );
}

function Resultados() {
  const ganhos = [
    ['gift', '#fidelidade', 'O cliente volta mais', 'Cada compra vira pontos, e os pontos viram prêmios. Quem está perto do próximo prêmio volta para buscar.', 'Ver a fidelidade'],
    ['moto', '#delivery', 'Delivery sem comissão', 'Seu link de pedidos no Instagram e no WhatsApp. Mensalidade fixa: pode vender R$ 5 mil ou R$ 50 mil.', 'Ver o delivery'],
    ['clock', '#prorrogacao', 'Happy hour que vende mais', 'Cada chopp vendido soma minutos no relógio da TV. A mesa pede mais uma rodada para o happy hour não acabar.', 'Ver a Prorrogação'],
    ['bell', '#mesa', 'Atendimento e Google', 'O cliente chama o garçom pelo celular, vê o cardápio e, satisfeito, avalia no Google. A reclamação vai para a gerência, anônima.', 'Ver a mesa'],
  ];
  return (
    <section className="sec" id="vtx-tap" aria-labelledby="ganhosTitulo" data-reveal>
      <div className="produto-marca">
        <img className="logo" src="/marca/vtx-tap-cor.svg" alt="VTX Tap" width="103" height="52" />
        <img className="endosso" src="/marca/endosso-cor.svg" alt="uma solução Vortex" width="173" height="13" />
      </div>
      <SecH kicker="O que muda no seu restaurante" id="ganhosTitulo" titulo="Quatro resultados, um sistema só">
        Você escolhe o que usar e paga só por isso. Juntos saem mais baratos.
      </SecH>
      <div className="ganhos">
        {ganhos.map(([icon, href, h3, p, mais]) => (
          <a key={h3} className="ganho" href={href}>
            <span className="ico">
              <Icon name={icon} />
            </span>
            <h3>{h3}</h3>
            <p>{p}</p>
            <span className="mais">{mais} →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ComoFunciona() {
  const passos = [
    ['O cliente encosta o celular na plaquinha', 'Ou lê o QR Code. A plaquinha tem NFC e QR, do tamanho de um cartão de crédito, uma por mesa.'],
    ['Abre a página do seu restaurante', 'Com o número da mesa. Ali ele vê o cardápio, chama o garçom, entra no clube de pontos, pega o Wi-Fi e avalia no Google.'],
    ['Sua equipe recebe no painel', 'No celular, tablet ou computador do salão, com som. Chamados, notas da fidelidade e pedidos do delivery num lugar só.'],
  ];
  return (
    <section className="sec" aria-labelledby="comoTitulo" data-reveal>
      <SecH kicker="Como funciona" id="comoTitulo" titulo="Encostou, abriu. Sem aplicativo." />
      <div className="passos">
        {passos.map(([h3, p]) => (
          <article key={h3} className="passo">
            <h3>{h3}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Fidelidade() {
  return (
    <section className="destaque destaque--noite" id="fidelidade" aria-labelledby="fidTitulo" data-reveal>
      <SecH kicker="Programa de fidelidade · o coração do VTX Tap" id="fidTitulo" titulo="O cliente que volta é o que mais dá lucro">
        Conquistar um cliente novo custa muito mais do que fazer o de hoje voltar. Com o VTX Tap, cada compra com CPF na
        nota vira ponto ou selo: o cliente lê o QR Code da nota fiscal (NFC-e) com o celular, sem aplicativo, sem cartão
        de papel e sem integração com o seu caixa.
      </SecH>
      <div className="modos">
        <article className="modo">
          <span className="ex">Bom para: jantar, bar, ticket variado</span>
          <h3>Clube de pontos</h3>
          <p>Cada real vira pontos. O cliente troca por prêmios com foto, sobe de nível (Bronze, Prata, Ouro), disputa o ranking e indica amigos.</p>
        </article>
        <article className="modo novo">
          <span className="tag-novo">Novo</span>
          <span className="ex">Bom para: almoço, café, prato do dia</span>
          <h3>Cartão fidelidade</h3>
          <p>O cartão de carimbos, só que no celular: 1 selo por compra e, completou, ganhou. Você escolhe quantos selos (de 3 a 30), o prêmio, o valor mínimo e a validade.</p>
        </article>
        <article className="modo">
          <span className="ex">Bom para: quem abre almoço e noite</span>
          <h3>Os dois, cada um no seu horário</h3>
          <p>Cartão de selos no almoço de segunda a sexta e clube de pontos à noite, por exemplo. O horário da nota fiscal decide o programa, sozinho.</p>
        </article>
      </div>
      <Fluxo
        passos={[
          ['Pagou a conta', 'A nota fiscal sai do seu caixa como sempre.'],
          ['Leu o QR da nota', 'Na página da mesa, com a câmera do celular.'],
          ['Ganhou pontos', 'Na hora (conferência na SEFAZ) ou quando a equipe aprovar.'],
          ['Voltou para trocar', 'Mostra o código do prêmio para o garçom.'],
        ]}
      />
      <div className="dupla">
        <div className="telas">
          <Fone src="/vtx-tap/fid-conta.webp" label="conta do cliente no clube de pontos" alt="Tela do cliente: 280 pontos, nível Bronze faltando 20 pontos para Prata e o ranking do clube" />
          <Fone src="/vtx-tap/fid-ranking.webp" label="ranking do clube" alt="Ranking do clube com pódio dos três primeiros e a lista até o nono lugar" />
        </div>
        <ListaFx
          itens={[
            ['receipt', 'Pontos pela nota fiscal', 'Você define quantos pontos vale cada real. Cada nota vale uma vez só; nota repetida é barrada na hora.'],
            ['gift', 'Prêmios com foto', 'Uma caipirinha, uma sobremesa, um rodízio. O cliente vê quanto falta para cada um, e isso faz ele voltar.'],
            ['layers', 'Níveis do clube', 'Bronze, Prata, Ouro: quem compra mais sobe de nível e ganha mais pontos por real.'],
            ['trophy', 'Ranking com pódio', 'Os 10 clientes que mais pontuaram, com o pódio na página. Competição saudável entre os frequentes.'],
            ['users', 'Indique um amigo', 'Link de indicação: quem indica e quem chega ganham pontos.'],
            ['zap', 'Dias com pontos em dobro', 'Encha a terça-feira: escolha os dias em que cada compra vale mais.'],
          ]}
        />
      </div>
      <div className="fid-sozinho">
        <Fone src="/vtx-tap/fid-selos.webp" label="cartão fidelidade no celular" alt="Cartão do almoço: 7 de 10 selos marcados, faltam 3 selos para 1 prato executivo grátis" />
        <div className="sec-h">
          <p className="kicker">Cartão fidelidade</p>
          <h3 style={{ font: '900 clamp(30px, 4.4vw, 44px)/.95 var(--display)', textTransform: 'uppercase', margin: 0 }}>
            O cartão de carimbos que não se perde na carteira
          </h3>
          <p>
            Pagou, leu a nota, ganhou o selo. O cliente vê quantos faltam para o prêmio toda vez que abre a página da
            mesa. Completou o cartão, aparece um código para mostrar ao garçom, e um cartão novo começa.
          </p>
          <div style={{ marginTop: 8 }}>
            <ListaFx
              itens={[
                ['check', '1 selo por dia, se quiser', 'Evita dividir a conta em várias notas para encher o cartão.'],
                ['receipt', 'Valor mínimo por compra', 'Só vale selo a compra acima do valor que você escolher.'],
                ['clock', 'Validade do cartão', 'Ex.: 90 dias a partir do primeiro selo, para o cliente voltar logo.'],
              ]}
            />
          </div>
        </div>
      </div>
      <div className="fid-nums">
        <div>
          <b>Sem limite</b>
          <span>de clientes no programa</span>
        </div>
        <div>
          <b>0</b>
          <span>aplicativos para o cliente baixar</span>
        </div>
        <div>
          <b>1 nota = 1 vez</b>
          <span>nota repetida ou de outro CNPJ é barrada</span>
        </div>
        <div>
          <b>Seus dados</b>
          <span>nome, contato e frequência de cada cliente (LGPD)</span>
        </div>
      </div>
      <figure className="painel-fig" style={{ margin: 0 }}>
        <Laptop src="/vtx-tap/painel-fid-hoje.webp" label="painel da fidelidade" alt="Painel da equipe na aba Clube de pontos: clientes, compras, pontos em aberto e notas para conferir" />
        <figcaption>O painel da equipe: notas para conferir, prêmios para entregar, clientes e o arquivo de notas do caixa.</figcaption>
      </figure>
      <div className="ctas">
        <a className="btn btn-ouro" {...orcar}>
          Orçar a fidelidade
          <Icon name="arrow" />
        </a>
        <a className="btn btn-linha" style={{ color: '#fff' }} href="#contato">
          <Icon name="msg" />
          Quero ver funcionando
        </a>
        <span style={{ color: 'var(--noite-2)', fontSize: 15 }}>
          <b className="num" style={{ color: '#fff' }}>
            {brl(precos.fidelidade)}
          </b>{' '}
          por mês, pontos e selos inclusos, sem limite de clientes.
        </span>
      </div>
    </section>
  );
}

function Calculadora() {
  const [ped, setPed] = useState(400);
  const [tic, setTic] = useState(70);
  const [com, setCom] = useState(23);
  const vendas = ped * tic;
  const comissao = (vendas * com) / 100;
  const vtx = precos.delivery;
  const eco = Math.max(0, comissao - vtx);
  const max = Math.max(comissao, vtx);
  const pct = `${String(com).replace('.', ',')}%`;

  return (
    <div className="calc">
      <div className="calc-in">
        <h3>Quanto a comissão te custa?</h3>
        <label>
          Pedidos de delivery por mês
          <span className="campo">
            <input type="range" min="50" max="3000" step="10" value={ped} onChange={(e) => setPed(+e.target.value)} />
            <output className="val num">{ped.toLocaleString('pt-BR')}</output>
          </span>
        </label>
        <label>
          Ticket médio
          <span className="campo">
            <input type="range" min="20" max="250" step="1" value={tic} onChange={(e) => setTic(+e.target.value)} />
            <output className="val num">{brl(tic)}</output>
          </span>
        </label>
        <label>
          Comissão que você paga hoje
          <span className="campo">
            <input type="range" min="5" max="35" step="0.5" value={com} onChange={(e) => setCom(+e.target.value)} />
            <output className="val num">{pct}</output>
          </span>
          <small>Coloque a porcentagem do seu contrato com o aplicativo de entrega.</small>
        </label>
      </div>
      <div className="calc-out" aria-live="polite">
        <div className="calc-lado calc-hoje">
          <span className="calc-rot">Hoje, no aplicativo de entrega</span>
          <p className="calc-conta">
            <b>{brl(vendas)}</b> vendidos no mês × <b>{pct}</b> de comissão
          </p>
          <p className="calc-valor">
            <b>{brl(comissao)}</b>
            <small>de comissão por mês</small>
          </p>
          <span className="calc-barra">
            <i style={{ width: `${Math.max(2, (comissao / max) * 100)}%` }} />
          </span>
        </div>
        <div className="calc-lado calc-vtx">
          <span className="calc-rot">Com o seu delivery no VTX Tap</span>
          <p className="calc-conta">
            Mensalidade fixa, <b>sem porcentagem</b> sobre as vendas
          </p>
          <p className="calc-valor">
            <b>{brl(vtx)}</b>
            <small>por mês, com pedidos ilimitados</small>
          </p>
          <span className="calc-barra">
            <i style={{ width: `${Math.max(2, (vtx / max) * 100)}%` }} />
          </span>
        </div>
        <div className="calc-eco">
          <span>Fica no seu caixa</span>
          <b>{eco ? `${brl(eco)} por mês` : 'R$ 0'}</b>
          <small>
            {eco
              ? `${brl(eco * 12)} em um ano. É o que você deixa de pagar de comissão.`
              : 'Com esse volume, a comissão ainda é menor que a mensalidade.'}
          </small>
        </div>
        <small className="calc-nota">
          Só compara comissão com mensalidade, para os pedidos que viessem pelo seu link. Taxas da maquininha e do Pix não
          mudam.
        </small>
      </div>
    </div>
  );
}

function Delivery() {
  return (
    <section className="destaque destaque--roxo" id="delivery" aria-labelledby="dlTitulo" data-reveal>
      <SecH kicker="Delivery próprio" id="dlTitulo" titulo="Seu delivery, seu cliente, sem comissão">
        Uma página de pedidos com o seu nome, o seu cardápio e as suas regras. Coloque o link no Instagram, no WhatsApp e
        na embalagem. O cliente pede direto com você e o dinheiro fica com você.
      </SecH>
      <div className="dupla dupla--inv">
        <div className="telas">
          <Fone src="/vtx-tap/dl-menu.webp" label="cardápio do delivery" alt="Página de pedidos do delivery com o carrinho de 3 itens" />
          <Fone src="/vtx-tap/dl-acomp.webp" label="acompanhamento do pedido" alt="Acompanhamento do pedido: recebido, em preparo, saiu para entrega e entregue" />
        </div>
        <ListaFx
          itens={[
            ['link', 'Link próprio de pedidos', 'No seu endereço, com a sua marca. Nada de lojas concorrentes do lado.'],
            ['map', 'Taxa por distância e área de entrega', 'O CEP preenche o endereço, o sistema calcula a distância e cobra a taxa certa.'],
            ['book', 'O mesmo cardápio da mesa', 'Um cardápio só: marque o que também vai para o delivery.'],
            ['printer', 'Comanda na cozinha', 'O pedido chega no painel com som. Um toque imprime a comanda.'],
            ['clock', 'O cliente acompanha o pedido', 'Recebido, em preparo, saiu para entrega, entregue. Menos gente ligando para perguntar.'],
            ['check', 'Pix, cartão ou dinheiro na entrega', 'Com a sua chave Pix na tela e o troco calculado.'],
          ]}
        />
      </div>
      <figure className="painel-fig" style={{ margin: 0 }}>
        <Laptop src="/vtx-tap/painel-delivery.webp" label="painel do delivery" alt="Painel do delivery com os pedidos em colunas: novos, em preparo e saiu para entrega" />
        <figcaption style={{ color: '#E6D9FF' }}>O painel do delivery: pedidos em colunas, do recebido ao entregue, com o total vendido no dia.</figcaption>
      </figure>
      <Calculadora />
      <div className="ctas">
        <a className="btn btn-ouro" {...orcar}>
          Orçar o delivery
          <Icon name="arrow" />
        </a>
        <span style={{ color: '#E6D9FF', fontSize: 15 }}>
          <b className="num" style={{ color: '#fff' }}>
            {brl(precos.delivery)}
          </b>{' '}
          por mês, fixo, com pedidos ilimitados.
        </span>
      </div>
    </section>
  );
}

function Prorrogacao() {
  return (
    <section className="destaque destaque--noite" id="prorrogacao" aria-labelledby="hhTitulo" data-reveal>
      <SecH kicker="Prorrogação · happy hour" id="hhTitulo" titulo="O happy hour que cresce a cada chopp">
        O relógio do happy hour aparece na TV do bar e no celular de cada mesa. A cada chopp vendido, o garçom lê a
        comanda e o relógio ganha minutos. Quanto mais a casa bebe, mais tempo o happy hour dura.
      </SecH>
      <div className="hh-grid">
        <figure className="painel-fig" style={{ margin: 0 }}>
          <Tv src="/vtx-tap/hh-telao.webp" label="relógio da Prorrogação na TV" alt="Telão da Prorrogação: relógio do happy hour, 23 chopps e o ranking de quem mais prorrogou" />
          <figcaption>Na TV do bar: o painel abre o telão na segunda tela com um toque.</figcaption>
        </figure>
        <Fone src="/vtx-tap/hh-mesa.webp" label="Prorrogação no celular da mesa" alt="Página da mesa com o relógio da Prorrogação" />
      </div>
      <Fluxo
        passos={[
          ['Abre o happy hour', 'Com o tempo inicial, ex.: 60 minutos. Ou no horário marcado, sozinho.'],
          ['Saiu um chopp', 'O garçom lê o QR da comanda (ou encosta no NFC) pelo celular.'],
          ['O relógio cresce', 'Mais minutos na TV e no celular de todo mundo, com animação.'],
          ['A mesa disputa', 'Ranking ao vivo de quem mais prorrogou, por mesa ou comanda.'],
        ]}
      />
      <div className="ctas">
        <a className="btn btn-ouro" {...orcar}>
          Orçar a Prorrogação
          <Icon name="arrow" />
        </a>
        <span style={{ color: 'var(--noite-2)', fontSize: 15 }}>
          <b className="num" style={{ color: '#fff' }}>
            {brl(precos.prorrogacao)}
          </b>{' '}
          por mês, e entra no desconto do combo.
        </span>
      </div>
    </section>
  );
}

function NaMesa() {
  const itens = [
    ['bell', 'Chamar o garçom pelo celular', 'O cliente escolhe o motivo (atendimento, pedido, conta, água) e segura o sino. A equipe vê a mesa, o nome e o tempo de espera.'],
    ['shield', 'Sem trote', 'O sino só toca para quem está no restaurante: a equipe libera o celular uma vez, e a mesa ganha um código para os amigos.'],
    ['book', 'Cardápio digital com busca', 'Fotos, categorias, selos (vegetariano, sem glúten, picante) e a lista para o cliente montar o pedido. Importe da sua planilha.'],
    ['star', 'Avaliação no Google em um toque', 'E um canal de comentário anônimo direto para a gerência, antes de virar nota baixa.'],
    ['wifi', 'Wi-Fi, Instagram, endereço e horários', 'Tudo que o garçom responde dez vezes por noite.'],
  ];
  return (
    <section className="sec" id="mesa" aria-labelledby="mesaTitulo" data-reveal>
      <SecH kicker="Na mesa" id="mesaTitulo" titulo="Cardápio, garçom e Google na palma da mão">
        A página que abre na plaquinha. Bonita no celular, no nome do restaurante, com o número da mesa.
      </SecH>
      <div className="mesa-grid">
        <div className="telas">
          <Fone src="/vtx-tap/sino.webp" label="chamar o garçom" alt="Tela Precisa de algo: motivos do chamado e o sino dourado Chamar garçom" />
          <Fone src="/vtx-tap/cardapio.webp" label="cardápio digital" alt="Cardápio digital com busca, categorias, preços e selos" />
        </div>
        <ul className="lista-cl">
          {itens.map(([icon, b, span]) => (
            <li key={b}>
              <Icon name={icon} />
              <div>
                <b>{b}</b>
                <span>{span}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figure className="painel-fig" style={{ margin: 0 }}>
        <Laptop src="/vtx-tap/painel-chamados.webp" label="painel de chamados" alt="Painel de chamados: mesas chamando com o motivo e o tempo, e o mapa das mesas" />
        <figcaption className="muted">Os chamados no painel: motivo, mesa, nome do cliente e o mapa do salão.</figcaption>
      </figure>
    </section>
  );
}

function Plaquinhas() {
  const artes = [
    ['placa-personalizada-basica', 'Personalizada simples', 'A sua logo no meio do QR, o nome do restaurante escrito e a faixa na cor dele, na frente e no verso.'],
    ['placa-sob-demanda', 'Sob demanda', 'A arte é do seu restaurante: você manda ou conta como quer, e a gente faz. O QR, o convite para aproximar e o código continuam garantidos.'],
  ];
  return (
    <section className="sec" id="plaquinhas" aria-labelledby="placasTitulo" data-reveal>
      <SecH kicker="As plaquinhas" id="placasTitulo" titulo="Pequenas, bonitas, com NFC e QR">
        Do tamanho de um cartão de crédito, impressas dos dois lados. Chegam prontas: para ligar cada uma, alguém da
        equipe aproxima o celular e escolhe a mesa, em menos de 10 segundos. Gire a plaquinha para ver a frente e o verso.
      </SecH>
      <Placa3D />
      <h3 className="c3-sub">Exemplos de artes personalizáveis</h3>
      <div className="placas">
        {artes.map(([arq, h3, p]) => (
          <article key={arq} className="placa" tabIndex={0}>
            <span className="placa-lados">
              <img className="placa-frente" src={`/vtx-tap/${arq}.webp`} width="1200" height="757" alt={`Frente da plaquinha ${h3.toLowerCase()}`} loading="lazy" />
              <img className="placa-verso" src={`/vtx-tap/${arq}-verso.webp`} width="1200" height="757" alt={`Verso da plaquinha ${h3.toLowerCase()}`} loading="lazy" />
            </span>
            <h3>{h3}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Precos() {
  const cards = [
    ['Programa de fidelidade', precos.fidelidade, 'Clube de pontos e cartão de selos pela nota fiscal, prêmios, níveis e ranking.'],
    ['Delivery', precos.delivery, 'Link próprio de pedidos, ilimitados, sem comissão.'],
    ['Prorrogação (happy hour)', precos.prorrogacao, 'Relógio na TV e no celular que ganha minutos a cada chopp.'],
    ['Página da mesa, cardápio e sino', precos.pagina, 'Cardápio, Wi-Fi, Google, comentários e o sino para chamar o garçom.'],
  ];
  const soma = precos.pagina + precos.fidelidade + precos.delivery + precos.prorrogacao;
  return (
    <section className="sec" id="precos" aria-labelledby="precosTitulo" data-reveal>
      <SecH kicker="Preços" id="precosTitulo" titulo="Pague só pelo que usar">
        Mensalidade por serviço, sem comissão e sem cobrança por cliente ou por pedido. Dois juntos têm 10% de desconto,
        três têm 17%, e os quatro saem por um preço fechado.
      </SecH>
      <div className="precos">
        {cards.map(([nome, valor, desc]) => (
          <div key={nome} className="preco-card">
            <h3>{nome}</h3>
            <p className="valor">
              {brl(valor)}
              <span>/mês</span>
            </p>
            <p>{desc}</p>
          </div>
        ))}
        <div className="preco-card combo">
          <span className="tag">Os quatro</span>
          <h3>Tudo junto</h3>
          <p className="valor">
            {brl(precos.todos)}
            <span>/mês</span>
          </p>
          <span className="eco">Economia de {brl(soma - precos.todos)}/mês</span>
          <ul>
            <li>Programa de fidelidade</li>
            <li>Delivery</li>
            <li>Prorrogação (happy hour)</li>
            <li>Página da mesa, cardápio e sino</li>
          </ul>
          <p>Três juntos: 17% de desconto. Página, fidelidade e delivery: {brl(precos.tres)}/mês.</p>
        </div>
      </div>
      <div className="inclui">
        <b>A implantação inclui</b>
        <ul>
          {['Cadastro do restaurante', 'Cardápio montado', 'Mesas e áreas', 'Plaquinhas prontas para ligar (menos de 10 s cada)', '1 hora de treinamento da equipe'].map((t) => (
            <li key={t}>
              <Icon name="check" />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="orc-faixa">
        <div>
          <b>Monte o seu em um minuto</b>
          <span>Simulador com a mensalidade, a implantação e as plaquinhas separadas, para o seu número de mesas.</span>
        </div>
        <a className="btn btn-roxo" {...orcar}>
          Montar meu orçamento
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function Duvidas() {
  const faq = [
    ['O cliente precisa baixar algum aplicativo?', 'Não. Tudo abre no navegador do celular, ao encostar na plaquinha (NFC) ou ler o QR Code. O cadastro no clube de pontos pede só CPF, nome, contato e um PIN de 4 números.'],
    ['Funciona com o meu sistema de caixa (PDV)?', 'Sim. A fidelidade usa a nota fiscal de consumidor (NFC-e) que o seu caixa já emite: não precisa de integração. Se o seu sistema exporta o XML das notas, você pode enviar o arquivo no painel e todas são conferidas de uma vez.'],
    ['Posso contratar só o delivery ou só a fidelidade?', 'Pode. Cada serviço tem a sua mensalidade e você liga só o que quiser. Dá para começar com um e somar outro depois, com desconto.'],
    ['O delivery cobra alguma porcentagem das vendas?', 'Não. É uma mensalidade fixa, com pedidos ilimitados. As taxas da sua maquininha e do seu banco continuam as mesmas de hoje.'],
    ['Os dados dos clientes são meus?', 'Sim. A lista do clube de pontos (com o consentimento de cada cliente, conforme a LGPD) fica no seu painel e pode ser exportada em planilha.'],
    ['Quanto tempo leva para começar e qual é o contrato?', 'A nossa equipe monta o cardápio, cadastra as mesas e treina a equipe. As plaquinhas chegam prontas: menos de 10 segundos para ligar cada uma. O contrato mínimo é de 6 meses; no de 12 meses, a implantação sai pela metade.'],
    ['Preciso de um tablet ou computador novo?', 'Não. O painel da equipe funciona em qualquer celular, tablet ou computador com internet. Cada pessoa da equipe entra com o próprio PIN.'],
  ];
  return (
    <section className="sec" id="duvidas" aria-labelledby="faqTitulo" data-reveal>
      <SecH kicker="Dúvidas sobre o VTX Tap" id="faqTitulo" titulo="Perguntas frequentes" centro />
      <div className="faq">
        {faq.map(([q, r]) => (
          <details key={q}>
            <summary>{q}</summary>
            <div>
              <p>{r}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
