import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFlutuante } from './components/ui/WhatsAppFlutuante';

import { Hero } from './components/sections/Hero';
import { VtxTap } from './components/sections/VtxTap';
import { Services } from './components/sections/Services';
import { Sobre } from './components/sections/Sobre';
import { Portfolio } from './components/sections/Portfolio';
import { AutomationDemo } from './components/sections/AutomationDemo';
import { Process } from './components/sections/Process';
import { Duvidas } from './components/sections/Duvidas';
import { FinalCta } from './components/sections/FinalCta';

import { useRevealObserver } from './hooks/useReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useReducedMotion } from './hooks/useMediaQuery';

/**
 * Site da Vortex. Coluna de 1120px (.wrap) com 72px entre as seções, no
 * sistema visual de marca.css. A empresa primeiro (hero com o polvo); logo
 * depois, um módulo curto do VTX Tap, o lançamento; e então os serviços,
 * quem somos, portfólio, automação, processo, dúvidas e contato.
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
        <Sobre />
        <Portfolio />
        <AutomationDemo />
        <Process />
        <Duvidas />
        <FinalCta />
        <Footer />
      </main>
      <WhatsAppFlutuante />
    </>
  );
}
