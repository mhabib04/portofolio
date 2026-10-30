import { useEffect } from "react";

// Satu listener untuk semua tombol dan kartu spotlight:
// menyimpan posisi kursor relatif terhadap elemen ke --mx dan --my.
export function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = e.target as Element | null;
      const els = [target?.closest(".btn"), target?.closest(".spotlight-card")];
      for (const el of els) {
        if (!(el instanceof HTMLElement)) continue;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}
