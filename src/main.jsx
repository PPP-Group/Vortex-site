import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* As fontes da identidade vêm do Google Fonts (index.html), como pede o manual de marca. */
import './styles/index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
