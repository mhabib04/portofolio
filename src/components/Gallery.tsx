import { useEffect, useRef, useState } from "react";
import { gallery } from "../data";
import AccordionGallery from "./AccordionGallery";
import Reveal from "./Reveal";

// Di bawah 520px galeri melebar atas-bawah, di atasnya melebar ke samping
const MOBILE_QUERY = "(max-width: 519px)";

// Panel yang sedang terbuka selalu berasio 9:16
const RATIO = 9 / 16;
const GAP = 10;
const DESKTOP_HEIGHT = 640;
const DESKTOP_COLLAPSED = 80;
// Sama dengan tinggi minimum panel di AccordionGallery (max-[520px]:min-h-[84px])
const MOBILE_COLLAPSED = 84;

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

function useWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setWidth(el.clientWidth);
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

export default function Gallery() {
  const isMobile = useIsMobile();
  const [ref, width] = useWidth();
  const n = gallery.length;
  if (n === 0) return null;

  const gaps = GAP * (n - 1);
  let layout: { height: number; expandRatio: number; maxWidth?: number };

  if (isMobile) {
    // Atas-bawah: tinggi panel aktif = lebar layar × 16/9
    const activeH = width / RATIO;
    const total = activeH + (n - 1) * MOBILE_COLLAPSED + gaps;
    // AccordionGallery mode vertikal memakai tinggi = height × 1,6
    layout = { height: total / 1.6, expandRatio: activeH / (total - gaps) };
  } else {
    // Ke samping: lebar panel aktif = tinggi × 9/16
    const activeW = DESKTOP_HEIGHT * RATIO;
    const maxWidth = activeW + (n - 1) * DESKTOP_COLLAPSED + gaps;
    const usable = Math.min(width, maxWidth) - gaps;
    layout = { height: DESKTOP_HEIGHT, expandRatio: activeW / usable, maxWidth };
  }

  return (
    <section id="galeri" className="mx-auto max-w-[1280px] px-4 pb-16 md:px-8 md:pb-24">
      <h2 className="h2 m-0 mb-10 md:mb-14">Galeri</h2>
      <Reveal>
        <div ref={ref} className="mx-auto w-full" style={{ maxWidth: layout.maxWidth }}>
          {width > 0 && (
            <AccordionGallery
              key={isMobile ? "vertical" : "horizontal"}
              items={gallery}
              orientation={isMobile ? "vertical" : "horizontal"}
              height={layout.height}
              expandRatio={layout.expandRatio}
              mediaScale={1}
              gap={GAP}
              defaultIndex={Math.floor(n / 2)}
              accentColor="hsl(46, 100%, 58%)"
              overlayColor="hsl(228, 40%, 14%)"
              textColor="hsl(48, 100%, 99%)"
              radius={24}
            />
          )}
        </div>
      </Reveal>
    </section>
  );
}
