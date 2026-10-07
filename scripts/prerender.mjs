/**
 * Pré-renderização (SEO, AEO e GEO).
 *
 * Roda depois do `vite build` e do build SSR (ver "build" no package.json):
 *   1. renderiza o <App /> para HTML e coloca dentro do #root de dist/index.html,
 *      para buscadores e IAs lerem o conteúdo sem executar JavaScript;
 *   2. injeta o JSON-LD (Organization, WebSite, serviços, VTX Tap com preços e
 *      o FAQPage), gerado dos mesmos dados que a página mostra;
 *   3. escreve dist/sitemap.xml com a data do build.
 *
 * O domínio vem de SITE_URL (padrão: https://vortexsystems.tech).
 */
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(raiz, 'dist');
const ssr = path.join(raiz, '.ssr');
const SITE = (process.env.SITE_URL || 'https://vortexsystems.tech').replace(/\/$/, '');

const m = await import(pathToFileURL(path.join(ssr, 'entry-server.js')).href);
const { render, brand, contact, manifesto, services, projects, vtxTap, precos, faqVtx } = m;

const html = render();

const org = `${SITE}/#organizacao`;
const instagram = contact.socials.filter((s) => s.href).map((s) => s.href);
const oferta = (nome, preco, desc) => ({
  '@type': 'Offer',
  name: nome,
  description: desc,
  price: String(preco),
  priceCurrency: 'BRL',
  priceSpecification: { '@type': 'UnitPriceSpecification', price: preco, priceCurrency: 'BRL', unitText: 'mês' },
});

const grafo = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': org,
      name: brand.fullName,
      alternateName: brand.name,
      url: `${SITE}/`,
      logo: `${SITE}/marca/cabeca-roxo.svg`,
      image: `${SITE}/og-cover.png`,
      description: brand.short,
      email: contact.email,
      telephone: '+55 37 98827-1126',
      areaServed: { '@type': 'Country', name: 'Brasil' },
      sameAs: [...instagram, vtxTap.site],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+55 37 98827-1126',
        email: contact.email,
        availableLanguage: 'Portuguese',
        url: contact.whatsappHref,
      },
      knowsAbout: [
        'Automação comercial',
        'CRM',
        'GoHighLevel',
        'n8n',
        'Integração de sistemas',
        'Desenvolvimento de sites',
        'Plataformas SaaS',
        'Aplicativos',
        'Cardápio digital',
        'Programa de fidelidade para restaurantes',
        'NFC',
      ],
      makesOffer: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.lead, provider: { '@id': org } },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#site`,
      url: `${SITE}/`,
      name: brand.fullName,
      inLanguage: 'pt-BR',
      publisher: { '@id': org },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE}/#pagina`,
      url: `${SITE}/`,
      name: 'Vortex Systems — VTX Tap, automação comercial e produto digital',
      description: `${manifesto.lines.join(' ')}. ${manifesto.body}`,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': `${SITE}/#site` },
      about: { '@id': org },
      mainEntity: { '@id': `${SITE}/#vtx-tap` },
      dateModified: new Date().toISOString().slice(0, 10),
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE}/#vtx-tap`,
      name: 'VTX Tap',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web (navegador do celular), sem aplicativo para baixar',
      url: vtxTap.site,
      description:
        'Plaquinha com NFC e QR Code na mesa de bares e restaurantes. O cliente encosta o celular e abre a página do restaurante: chama o garçom, vê o cardápio digital, junta pontos no programa de fidelidade pela nota fiscal, pede delivery sem comissão e avalia no Google. A equipe recebe tudo num painel.',
      featureList: [
        'Chamar o garçom pelo celular',
        'Cardápio digital com busca',
        'Programa de fidelidade pela nota fiscal (clube de pontos e cartão de selos)',
        'Delivery próprio sem comissão',
        'Prorrogação: happy hour que cresce a cada chopp',
        'Avaliação no Google e comentário anônimo',
        'Painel da equipe',
      ],
      image: `${SITE}/vtx-tap/cartao-vtx-frente.webp`,
      screenshot: [`${SITE}/vtx-tap/painel-chamados.webp`, `${SITE}/vtx-tap/fid-conta.webp`, `${SITE}/vtx-tap/sino.webp`],
      publisher: { '@id': org },
      offers: [
        oferta('Página da mesa, cardápio e sino', precos.pagina, 'Cardápio, Wi-Fi, Google, comentários e o sino para chamar o garçom.'),
        oferta('Programa de fidelidade', precos.fidelidade, 'Clube de pontos e cartão de selos pela nota fiscal.'),
        oferta('Delivery', precos.delivery, 'Link próprio de pedidos, ilimitados, sem comissão.'),
        oferta('Prorrogação (happy hour)', precos.prorrogacao, 'Relógio do happy hour na TV e no celular.'),
        oferta('Os quatro serviços', precos.todos, 'Fidelidade, delivery, Prorrogação e página da mesa.'),
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/#duvidas`,
      mainEntity: faqVtx.map(([q, r]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: r },
      })),
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE}/#portfolio`,
      name: 'Portfólio da Vortex',
      itemListElement: projects
        .filter((p) => !p.demo)
        .map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'CreativeWork', name: p.title, description: p.summary, url: p.externalUrl || undefined },
        })),
    },
  ],
};

const jsonld = `<script type="application/ld+json">${JSON.stringify(grafo).replace(/</g, '\\u003c')}</script>`;

let pagina = await readFile(path.join(dist, 'index.html'), 'utf8');
if (!pagina.includes('<div id="root"></div>')) throw new Error('dist/index.html sem <div id="root"></div>');
pagina = pagina
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  .replace('<!--jsonld-->', jsonld)
  .replaceAll('https://vortexsystems.tech', SITE);
await writeFile(path.join(dist, 'index.html'), pagina);

const hoje = new Date().toISOString().slice(0, 10);
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE}/</loc><lastmod>${hoje}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${SITE}/llms.txt</loc><lastmod>${hoje}</lastmod><changefreq>monthly</changefreq><priority>0.3</priority></url>
</urlset>
`,
);
for (const f of ['robots.txt', 'llms.txt']) {
  const p = path.join(dist, f);
  await writeFile(p, (await readFile(p, 'utf8')).replaceAll('https://vortexsystems.tech', SITE));
}

await rm(ssr, { recursive: true, force: true });
console.log(`pré-renderizado: ${(html.length / 1024).toFixed(0)} kB de HTML, JSON-LD e sitemap para ${SITE}`);
