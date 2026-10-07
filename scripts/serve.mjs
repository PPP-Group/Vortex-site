/**
 * Servidor de produção (Easypanel / Nixpacks): entrega só a pasta dist/,
 * com o tipo MIME certo de cada arquivo, cache longo nos assets com hash
 * e o index.html como resposta para qualquer rota que não seja arquivo.
 * Sem dependências: só o Node.
 *
 *   PORT (padrão 80) — a porta que o Easypanel encaminha.
 */
import { createServer } from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.env.PORT) || 80;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
};
const COMPRIME = /^(text\/|application\/(json|manifest\+json|xml)|image\/svg)/;

const indexHtml = await readFile(path.join(dist, 'index.html'));

async function arquivo(url) {
  let rel = decodeURIComponent(url.split('?')[0]);
  if (rel.endsWith('/')) rel += 'index.html';
  const alvo = path.join(dist, path.normalize(rel));
  if (!alvo.startsWith(dist)) return null; // nada fora de dist/
  try {
    const s = await stat(alvo);
    return s.isFile() ? alvo : null;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const alvo = await arquivo(req.url || '/');
  const ext = alvo ? path.extname(alvo).toLowerCase() : '.html';
  const tipo = MIME[ext] || 'application/octet-stream';
  const headers = {
    'Content-Type': tipo,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': req.url.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'public, max-age=300',
  };

  // Rota que não é arquivo (ou arquivo que não existe sem extensão): a página.
  if (!alvo) {
    const pedeArquivo = path.extname((req.url || '').split('?')[0]);
    res.writeHead(pedeArquivo ? 404 : 200, { ...headers, 'Content-Type': MIME['.html'] });
    res.end(pedeArquivo ? 'Não encontrado' : indexHtml);
    return;
  }

  const gzip = COMPRIME.test(tipo) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (gzip) headers['Content-Encoding'] = 'gzip';
  headers.Vary = 'Accept-Encoding';
  res.writeHead(200, headers);
  if (req.method === 'HEAD') return res.end();
  const fluxo = createReadStream(alvo);
  (gzip ? fluxo.pipe(createGzip()) : fluxo).pipe(res);
}).listen(port, () => console.log(`Vortex no ar na porta ${port}, servindo ${dist}`));
