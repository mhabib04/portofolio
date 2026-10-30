import { useEffect, useState } from "react";
import { gallery } from "../data";
import AccordionGallery from "./AccordionGallery";
import Reveal from "./Reveal";

// Di bawah 520px galeri melebar atas-bawah, di atasnya melebar ke samping
const MOBILE_QUERY = "(max-width: 519px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

export default function Gallery() {
  const isMobile = useIsMobile();
  if (gallery.length === 0) return null;

  return (
    <section id="galeri" className="mx-auto max-w-[1280px] px-4 pb-16 md:px-8 md:pb-24">
      <h2 className="h2 m-0 mb-10 md:mb-14">Galeri</h2>
      <Reveal>
        <AccordionGallery
          key={isMobile ? "vertical" : "horizontal"}
          items={gallery}
          orientation={isMobile ? "vertical" : "horizontal"}
          height={isMobile ? 360 : 460}
          defaultIndex={Math.floor(gallery.length / 2)}
          accentColor="hsl(46, 100%, 58%)"
          overlayColor="hsl(228, 40%, 14%)"
          textColor="hsl(48, 100%, 99%)"
          radius={24}
        />
      </Reveal>
    </section>
  );
}
