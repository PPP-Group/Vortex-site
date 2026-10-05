import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ZoomDialog } from './components/vtx/Mockups';

import { Hero } from './components/sections/Hero';
import { VtxTap } from './components/sections/VtxTap';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { AutomationDemo } from './components/sections/AutomationDemo';
import { Process } from './components/sections/Process';
import { FinalCta } from './components/sections/FinalCta';

import { useRevealObserver } from './hooks/useReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useReducedMotion } from './hooks/useMediaQuery';

/**
 * A página segue a landing do VTX Tap (tap.vortexsystems.tech): uma coluna
 * de 1120px (.wrap) com 72px entre as seções. Primeiro o lançamento, o VTX
 * Tap; depois a Vortex: serviços, portfólio, automação e processo.
 */
export default function App() {
  const reduced = useReducedMotion();

  useRevealObserver();
  useSmoothScroll(!reduced); // rolagem nativa para quem pediu menos movimento

  return (
    <>
      <Header />
      <main className="wrap" id="conteudo">
        <Hero />
        <VtxTap />
        <Services />
        <Portfolio />
        <AutomationDemo />
        <Process />
        <FinalCta />
        <Footer />
      </main>
      <ZoomDialog />
    </>
  );
}
