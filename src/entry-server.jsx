import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Entrada de pré-renderização: o build gera o HTML da página com todo o
 * conteúdo, para buscadores e IAs lerem sem rodar JavaScript.
 * Ver scripts/prerender.mjs.
 */
export function render() {
  return renderToString(<App />);
}

export { brand, contact, manifesto } from './data/site';
export { services } from './data/services';
export { projects } from './data/portfolio';
export { vtxTap, precos, faqVtx } from './data/vtxtap';
