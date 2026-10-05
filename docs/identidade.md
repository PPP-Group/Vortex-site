# Vortex — identidade de marca e sistema de design

Documento de referência único. Cobre quem é a empresa, o que ela comunica, como
ela se parece e por quê. Toda decisão aqui está implementada em código; quando
houver divergência entre este documento e o código, **o código é a verdade** —
corrija o documento.

| | |
| --- | --- |
| **Implementação** | `src/styles/index.css` (tokens), `src/data/` (conteúdo) |
| **Instruções de build e placeholders** | [`../README.md`](../README.md) |
| **Última revisão** | 2026-10-05 (refatoração para o manual inteiro e seção do VTX Tap) |

---

## 1. A empresa

**Vortex** é uma empresa de tecnologia especializada em soluções digitais para
**aquisição, atendimento e retenção de clientes**.

O que a distingue não é dominar uma ferramenta, é cobrir as duas pontas que a
maioria dos clientes contrata em lugares diferentes: a **automação comercial**
e o **produto digital** que ela alimenta — mais o design que amarra os dois.

### Os dois eixos

| Eixo | O que é | Ferramentas |
| --- | --- | --- |
| **Automação comercial e de relacionamento** | Funil de vendas, CRM, atendimento automatizado por texto e voz, integração entre as ferramentas que a operação já usa | GoHighLevel, n8n |
| **Produto digital** | Sites, sistemas web, plataformas SaaS, aplicativos — e o design visual que sustenta tudo | React, Supabase, Flutter |

Os eixos são **paralelos, não sequenciais**. Isso tem consequência visual: eles
nunca são numerados (ver §9.4).

### Os três serviços

1. **Automação e CRM com GoHighLevel** — pipelines, workflows multicanal,
   follow-up e recuperação de lead, agentes de IA de atendimento, Voice AI que
   atende ligação e agenda na própria chamada, escalonamento para humano, modo
   SaaS white-label, dashboards de pipeline e receita.
2. **Processos e integrações com n8n** — orquestração com triggers e lógica
   condicional, integração por API com qualquer serviço HTTP, sincronização e
   transformação de dados entre sistemas, agentes de IA autônomos dentro do
   fluxo, infraestrutura self-hosted ou cloud.
3. **Sites, plataformas e software** — institucionais e landing pages com SEO,
   sistemas web sob medida, plataformas SaaS e dashboards alimentados por
   automação, apps mobile multiplataforma, processo com Git e deploy em nuvem.

Frentes complementares: consultoria em automação (diagnóstico + desenho),
treinamento e repasse técnico, suporte e manutenção contínua.

> Fonte: `src/data/services.js` e `src/data/site.js`. Editar o conteúdo lá, não
> nos componentes.

---

## 2. Posicionamento e mensagem

### Manifesto

> **Estruturamos a operação digital de ponta a ponta.**
>
> CRM e automação de atendimento e vendas, integração entre sistemas, e o site,
> plataforma ou app que a operação precisa — com o design por trás de tudo isso.

É o texto do hero e a formulação canônica. Use-o inteiro em apresentações,
propostas e bio de rede social.

### A ideia que sustenta tudo

**Automação sem produto digital vira remendo. Produto sem automação vira
trabalho manual.** A Vortex entrega os dois lados e o visual que amarra — por isso
ninguém precisa traduzir o escopo de um fornecedor para o outro.

### Roteiro dor → solução

A entrada de leitura preferida não é o nome da ferramenta, é o problema que o
cliente reconhece em si:

| Dor | Solução |
| --- | --- |
| "Perde lead porque ninguém responde rápido" | Follow-up automático e IA de atendimento e voz no GHL |
| "Os sistemas não conversam entre si" | Integrações e orquestração de processos com n8n |
| "Falta o site, o sistema ou o app da operação" | Desenvolvimento web, plataforma ou aplicativo sob medida |

### Os quatro compromissos

Ocupam o lugar de prova social enquanto não há depoimentos aprovados. São
afirmações **verificáveis**, não adjetivos:

1. **Diagnóstico antes de ferramenta** — automatizar processo quebrado só
   quebra mais rápido.
2. **A operação fica com você** — treinamento, documentação e acesso; sem
   dependência do fornecedor para operar.
3. **Uma frente só não resolve** — os dois lados e o visual que amarra.
4. **Manutenção é parte do serviço** — fluxo não é entrega única.

---

## 3. Tom de voz

O tom vem do mesmo lugar que o visual: quem opera automação fala em execução,
não em transformação digital.

**Princípios**

- **Frase declarativa, verbo simples.** "Estruturamos a operação", não
  "potencializamos a jornada".
- **Específico ganha de esperto.** "Voice AI que consulta a agenda e confirma o
  horário na própria chamada" é melhor que "atendimento inteligente".
- **A dor antes da ferramenta.** O visitante se reconhece no problema; o nome
  do produto vem depois.
- **Número com origem, ou número marcado.** Métrica sem lastro fica marcada
  como `[MÉTRICA A DEFINIR]` na interface. Não inventamos resultado.
- **Sem apologia e sem urgência fabricada.** Nada de "não perca", "última
  chance", contadores regressivos.

**Vocabulário da casa** — fluxo, execução, nó, gatilho, pipeline, integração,
repasse, diagnóstico, operação.

**Evitar** — solução inovadora, revolucionar, transformação digital, sinergia,
disruptivo, "cuidamos de tudo para você", exclamação em copy institucional.

**Registro** — segunda pessoa direta ("conta o processo, a gente devolve o
mapa"), primeira pessoa do plural para a empresa. Sentence case em títulos e
botões; caixa alta apenas nos rótulos em mono, onde a caixa é um recurso
tipográfico e não ênfase.

---

## 4. A tese visual

Desde 2026-10-05 o site segue o manual de marca à risca, no mesmo vocabulário
das landing pages do VTX Tap: **peça clara**, com página em `nevoa`, cartões
brancos com hairline, blocos `noite` com anéis concêntricos e um único bloco
roxo. Proporção do manual para peça clara: névoa e branco 62, noite 24, roxo 11,
ouro 3.

- **Blocos noite** (canto 32): hero, "a plataforma por dentro" do VTX Tap,
  automação e chamada final. Cada um tem um conjunto de anéis sangrando de um
  canto.
- **Bloco roxo**: só a chamada do VTX Tap.
- **Ouro**: selo "Novo" do VTX Tap, ícones sobre noite e o botão de WhatsApp da
  chamada final (o segundo botão de conversão).

O grafo de workflow continua, agora dentro do bloco noite da seção de automação:
ali ele demonstra em vez de decorar.

---

## 5. Marca

A marca segue o **manual de marca da Vortex**
(<https://claude.ai/artifact/D8xhyUX47RHdSoA82a9Xj4>). A fonte das marcas e o
gerador ficam em `Vortex/ppps/manual-de-marca/fonte/`. Não redesenhe nada aqui:
copie os SVGs de lá para `public/marca/`.

| Arquivo | Onde vai no site |
| --- | --- |
| `public/marca/assinatura-cor.svg` | Cabeçalho (`Logo`, assinatura horizontal sobre claro) |
| `public/marca/vortex-systems-negativo.svg` | Rodapé (nome completo, sobre preto) |
| `public/marca/vtx-tap-cor.svg` / `vtx-tap-branco.svg` | Seção VTX Tap (claro) e chamada roxa (`VtxTapLogo`) |
| `public/marca/endosso-cor.svg` | "uma solução VORTEX", ao lado do logo do VTX Tap |
| `public/marca/polvo-roxo.svg` | Ilustração da chamada final (mascote) |
| `public/marca/cabeca-roxo.svg` | Favicon |
| `public/apple-touch-icon.png` | Ícone na tela inicial do celular (cabeça roxa sobre noite) |
| `public/og-cover.png` | Imagem de compartilhamento (assinatura sobre noite com anéis) |

Todos os SVGs do manual (assinaturas, logotipo, cabeça, polvo e VTX Tap) estão em
`public/marca/`, copiados da fonte em 2026-10-05 (letreiro v13, logo do VTX Tap v21).

Regras: nunca redigite o nome numa fonte, não estique, não recolora fora das
versões do manual. Mínimo da assinatura horizontal: 110px de largura.

---

## 6. Cor

Os tokens de `src/styles/index.css` usam os nomes do manual. No tema claro,
`ink`, `ink-2`, `muted` e `line` viraram `tinta`, `tinta-2`, `apoio` e `fio`,
porque os nomes antigos continuam servindo ao que mora sobre noite.

| Token | Valor | Papel |
| --- | --- | --- |
| `nevoa` | `#F4F2F9` | Fundo da página |
| `branco` | `#FFFFFF` | Cartão, seção do portfólio |
| `surface-2` | `#EDE9F6` | Chip, cartão quieto, trilho |
| `tinta` / `tinta-2` / `apoio` | `#160E33` / `#2F2752` / `#625A80` | Texto no claro (16,5, 13,7 e 5,7:1) |
| `fio` | `#E1DCEE` | Hairline |
| `roxo` | `#7D27FC` | Botão principal, número, marca |
| `roxo-ink` | `#6A1BE0` | Kicker, link, ênfase no título sobre claro |
| `roxo-soft` | `#EEE5FF` | Ladrilho de ícone, plano em destaque |
| `noite` / `preto` | `#140B33` / `#0C0820` | Blocos escuros / rodapé |
| `noite-ink` / `noite-2` / `lilas` | `#F1ECFF` / `#CFC6F2` / `#A874FF` | Texto e ênfase sobre noite |
| `ouro` / `on-ouro` | `#FFC61A` / `#1D1400` | Acento quente e texto sobre ele |

Tokens escuros (`ink-000`…`ink-300`, `line`, `paper`, `muted`, `faint`, `volt`,
`pulse`, `flare`, `ok`) servem ao grafo, aos diálogos e às capas do portfólio.

- Gradiente: só o do bloco roxo (150°, `#7D27FC → #5B14C9 → #3C0A8E`).
- Grafismo: anéis concêntricos (`.aneis`) nos blocos noite; `.aneis--branco` no roxo.

---

## 7. Tipografia

- **Títulos**: Big Shoulders Display 900, caixa alta, entrelinha .95
  (`.display`, `.display-hero` 82, `.display-final` 66, `.display-secao` 54,
  `.display-cartao` 30). Ênfase com `<em>`: `roxo-ink` no claro, `lilas` sobre noite.
- **Texto e botões**: Schibsted Grotesk. Botão em pílula, 700, caixa de frase.
- **Números, preços e código**: IBM Plex Mono com algarismos tabulares (`.num`).
  Os preços grandes usam o Big Shoulders (`display-numero`).
- As três vêm do Google Fonts, carregadas em `index.html`.

---

## 8. Layout e malha

| Variável | Valor | Papel |
| --- | --- | --- |
| `--shell` | `min(1120px, 100% - 36px)` | `largura-conteudo` do manual, 18px de margem no celular |
| blocos | `min(1240px, 100% - 24px)` | blocos noite e roxo, um pouco mais largos que o conteúdo |
| `--header-h` | `76px` | altura da barra fixa |

Espaço entre seções: 72px (`gap-secoes`), 96px a partir de `md`. Grade de
cartões com 14px (`gap-grade`), cartão com 22px de padding (`pad-cartao`).

Ordem da página: Hero → **VTX Tap** (o lançamento, com o maior espaço) →
Serviços → Portfólio → Automação → Processo → Contato.

### Numeração

Só os passos do VTX Tap e "Como trabalhamos" são numerados: ali a ordem carrega
informação.

---

## 9. Movimento

**Um mecanismo, não vários efeitos espalhados.**

### Curvas

```css
--ease-out-soft:    cubic-bezier(0.16, 1, 0.3, 1);   /* entradas e revelações */
--ease-in-out-soft: cubic-bezier(0.65, 0, 0.35, 1);  /* transições simétricas */
```

### Scroll reveal

Um único `IntersectionObserver` cobre o site inteiro. Qualquer elemento com
`data-reveal` entra com fade + deslocamento de 22px em 0,75s. Escalonamento de
70ms por item, **limitado a 6 posições** para o último item de uma lista longa
não ficar esperando visivelmente.

O estado inicial mora sob `html.reveal-ready`, classe adicionada pelo JS: **se o
script falhar, o conteúdo simplesmente aparece.** Nunca escreva um estado
inicial invisível fora desse escopo.

### Ritmo do grafo

| Etapa | Duração |
| --- | --- |
| permanência no nó (`dwell`) | 620ms |
| viagem pela aresta (`travel`) | 760ms |
| pausa no fim (`hold`) | 1500ms |

Ciclo completo: hero 7,0s · demonstração 11,2s.

### Onde o movimento é permitido

Só onde significa alguma coisa (entrada ao rolar: 18px em 0,6s, como no manual):

- o pacote percorrendo o grafo — **é o conteúdo, não o enfeite**;
- a plaquinha do VTX Tap em 3D, que balança sozinha só enquanto está na tela e
  gira ao arrastar;
- a troca de tela no explorador de módulos do VTX Tap;
- botão sobe 1px no hover e encolhe para .97 no toque.

### `prefers-reduced-motion`

**Não desliga o design, troca por uma versão estática.** O grafo vira um
diagrama completo, com todos os nós acesos e cada log impresso. O Lenis (scroll
suave) nem chega a ser baixado. A plaquinha fica parada até alguém girar.

Giro por arrasto continua valendo mesmo em movimento reduzido: é ação direta do
usuário, não movimento imposto a ele.

---

## 10. Elementos proprietários

Quatro peças que só existem neste projeto. São elas que tornam o site
irreconhecível como template.

### 10.1 O grafo de workflow

O elemento-assinatura. Um pacote sai do gatilho, percorre cada aresta
desenhando a corrente, e cada nó imprime a saída da própria etapa ao receber o
pacote.

- **Dados, não marcação**: os fluxos vivem em `src/data/automations.js`, com
  posições num espaço 0–100 que descreve intenção de leitura.
- **Dois modos**: horizontal em telas largas, coluna no celular — não é o
  horizontal encolhido, é uma releitura.
- **Estado "aceso"** é comunicado por borda, contraste de rótulo e impressão do
  log. Parece um nó que **executou**, não um nó iluminado. Sem glow difuso.
- **Tom por tipo de nó**: `trigger` → volt · `ai` → pulse · `action` →
  line-strong · `sink` → ok.
- `npm run check` valida a geometria nos dois modos. Rode depois de mexer nos
  fluxos.

### 10.2 A seção VTX Tap

O produto novo tem o maior espaço da página (`src/components/sections/VtxTap.jsx`,
conteúdo em `src/data/vtxtap.js`):

1. logo do VTX Tap com o endosso "uma solução VORTEX", título e os três passos;
2. **explorador de módulos** num bloco noite: abas acessíveis (setas, Home, End)
   e a tela real no aparelho — garçom, cardápio, fidelidade, delivery, happy
   hour e painel da equipe;
3. o que mais a página da mesa faz (Google, Wi-Fi, LGPD, domínio próprio);
4. a plaquinha padrão em 3D (`Placa3D.jsx`) e as artes personalizáveis;
5. preços em vigor e a chamada no bloco roxo.

As telas e as artes em `public/vtx-tap/` vêm do repositório do app
(`assets/img/lp` e `assets/img/placas`). Preços: os de `assets/js/precos.js` do
app — ao mudar lá, mudar em `src/data/vtxtap.js`.

### 10.3 O que saiu em 2026-10-05

A espinha lateral de workflow, o notebook 3D do hero, o cursor customizado, o
tilt dos cards e as métricas sem origem do hero. Nenhum deles está no manual, e
as métricas eram placeholders ("número só com origem").

---

## 11. Componentes

| Componente | Regra de identidade |
| --- | --- |
| **Cartão** (`.cartao`) | Branco, hairline `fio`, canto 22. Hover em link: borda `roxo` e sobe 2px. `.cartao--plano` = roxo-soft com borda roxa de 2px. |
| **Ladrilho de ícone** (`.ico`, `IconTile`) | 46px, `roxo-soft` + `roxo-ink`; sobre noite, branco 10% e traço `ouro`. |
| **Ícones** (`Icon`) | Os de traço do manual (24px, traço 2, pontas redondas); os que faltam seguem o Lucide. |
| **Botão** (`Button`) | Pílula, Schibsted 700 16px, 50px. `roxo` (principal), `ouro` (um por página), `linha`, `branco` (sobre roxo), `quieto`. |
| **Kicker** (`.kicker`) | 12,5px 700, .12em, caixa alta, `roxo-ink`; `lilas` sobre noite, `ouro` sobre roxo. |
| **Selo** (`.selo`) | Pílula roxo-soft com ponto; `.selo--ouro` para "Novo". |
| **Blocos** (`.bloco--noite`, `.bloco--roxo`) | Canto 32, padding até 52px, anéis (`.aneis`). |
| **Aparelho** (`.aparelho`) | Moldura de celular para as telas reais do VTX Tap. |
| **Diálogo** | Peça noite. Foco preso, fecha no ESC e no clique do fundo, devolve o foco a quem abriu. |
| **Barra de navegação** | Assinatura cor; vira pílula branca com hairline ao rolar. |

---

## 12. Acessibilidade como parte da identidade

Não é checklist de conformidade, é parte do padrão de acabamento.

- **Contraste** conferido em todos os pares de texto e fundo (§6).
- **Foco visível** em tudo: contorno `volt` de 2px com 3px de deslocamento.
- **Modais** com foco preso, ESC e devolução de foco.
- **Acordeão e menu** usam `inert` quando fechados — nada de alvo de tabulação
  invisível.
- **Alvos de toque** ≥ 24px.
- **Um `h1` por página**, sem salto de nível de heading.
- **Movimento reduzido** respeitado com fallback estático elegante.
- **SVG decorativo** com `aria-hidden`; SVG informativo com `role="img"` e
  `aria-label` descrevendo o conteúdo, não a forma.
- **Contadores animados** expõem o valor final em `aria-label` — leitor de tela
  não deve ouvir a contagem.

---

## 13. O que foi deliberadamente recusado

Registrado para não voltar por engano:

- **Partículas flutuando e "rede neural"** — o clichê da categoria, idêntico em
  qualquer agência de tecnologia.
- **Gradiente em título** — empurra para o genérico e compete com a corrente.
- **Glow difuso nos nós** — o nó precisa parecer que *executou*, não que está
  iluminado.
- **Glassmorphism nos cards** — trocado por plano com hairline.
- **Azul corporativo chapado** — a corrente é indigo→ciano, com magenta
  guardado para um único momento.
- **Numerar o que não é sequência** — os eixos e os serviços são paralelos.
- **Métrica inventada** — placeholder marcado na interface até a Vortex confirmar.
- **Nome de cliente real no portfólio** — as entradas descrevem o *tipo* de
  projeto até os cases definitivos entrarem.
- **Uma capa gerada por IA** (card de marketplace) — tinha emenda retangular
  visível e lia como banco de imagens; o wireframe procedural comunica melhor.

---

## 14. Aplicação fora do site

Para manter coerência em peças que não são o site.

**Apresentações e propostas**
Fundo `ink-000`. Título em Archivo 700 com `font-stretch` entre 105% e 118%.
Corpo em Hanken Grotesk. Rótulo de seção, número de slide e legenda de dado em
JetBrains Mono caixa alta. Um acento por slide, no máximo.

**Redes sociais**
A malha de canvas (pontos a cada 26px) funciona como textura de fundo
reconhecível. Diagramas de fluxo com nós e arestas são o formato nativo da
marca — prefira-os a foto de banco de imagens. Magenta só em peça de conversão.

**Motion**
Curva padrão `cubic-bezier(0.16, 1, 0.3, 1)`. O movimento característico é o
**pacote percorrendo uma aresta** e o **nó acendendo ao recebê-lo**, nesta
ordem. Evite fade genérico entre cenas: prefira a transição que parece uma
execução avançando.

**Documento e e-mail**
Fundo claro é aceitável fora do site. Nesse caso: texto `#07070C` sobre
`#FAFAFC`, acento `pulse` `#6A5AE0` (que sobre claro passa em contraste), e o
símbolo em `#07070C` sólido, nunca em `paper`.

---

## 15. Referência rápida

```css
/* Tinta */
--color-ink-000: #07070c;  --color-ink-050: #0a0a11;
--color-ink-100: #0e0e17;  --color-ink-200: #13131e;
--color-ink-300: #1a1a28;
--color-line: #22222f;     --color-line-strong: #2e2e42;

/* Texto */
--color-paper: #ececf3;    --color-muted: #9a9ab0;
--color-faint: #7c7c96;

/* Corrente */
--color-pulse: #6a5ae0;    --color-pulse-soft: #9b8eff;
--color-volt:  #3fd8e6;    --color-flare: #e0479a;
--color-ok:    #43d18e;

/* Gradientes */
--current:       linear-gradient(100deg, #6a5ae0, #3fd8e6);
--current-flare: linear-gradient(100deg, #6a5ae0, #e0479a);

/* Tipografia */
--font-display: 'Archivo Variable';
--font-body:    'Hanken Grotesk Variable';
--font-mono:    'JetBrains Mono Variable';

/* Layout */
--shell:     min(1240px, 100% - 2.5rem);
--header-h:  72px;

/* Movimento */
--ease-out-soft:    cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-soft: cubic-bezier(0.65, 0, 0.35, 1);
```

---

## 16. Pendências

Itens abertos que afetam a identidade:

- **Contato e redes** — todos os canais estão como `[A DEFINIR]` em
  `src/data/site.js`.
- **Métricas** — os quatro contadores do hero usam números ilustrativos, com
  nota explícita na interface. Remover a nota junto com os placeholders.
- **Portfólio** — seis projetos de exemplo; nenhum nome de cliente real.
- **Depoimentos** — a seção de princípios ocupa o lugar da prova social até
  haver depoimentos aprovados.
- **Notebook 3D** — as quinas ainda apresentam vão em ângulos de rotação
  acentuados. Correção em andamento; ver §10.3 e o README.

A lista completa de placeholders, com caminhos de arquivo:

```bash
grep -rn "A DEFINIR\|TODO:" src/ index.html
```
