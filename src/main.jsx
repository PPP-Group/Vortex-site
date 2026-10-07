import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

/* As fontes da identidade vêm do Google Fonts (index.html), como pede o manual de marca. */
import './styles/index.css';
import App from './App';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// No build, o HTML já vem pré-renderizado (scripts/prerender.mjs): o React só
// assume a página. No modo de desenvolvimento, o #root vem vazio.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
