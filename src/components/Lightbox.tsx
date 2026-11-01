import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import type { Photo } from "../data";

function Lightbox({ photos, title, onClose }: { photos: Photo[]; title: string; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const many = photos.length > 1;

  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + photos.length) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [go, onClose]);

  const photo = photos[index];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-paper"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="m-0 min-w-0 truncate font-extrabold">
          {title}
          {many && (
            <span className="ml-2 font-normal text-paper/70">
              {index + 1} / {photos.length}
            </span>
          )}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Tutup" className="btn btn-sm bg-paper px-3 text-foreground">
          <X size={20} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.caption ?? `Foto ${index + 1} ${title}`}
            onClick={(e) => e.stopPropagation()}
            drag={many ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="max-h-full max-w-full cursor-grab rounded-2xl border-2 border-paper object-contain active:cursor-grabbing"
            draggable={false}
          />
        </AnimatePresence>

        {many && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Foto sebelumnya"
              className="btn btn-sm absolute left-6 hidden bg-paper px-3 text-foreground md:inline-flex"
            >
              <ChevronLeft size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Foto berikutnya"
              className="btn btn-sm absolute right-6 hidden bg-paper px-3 text-foreground md:inline-flex"
            >
              <ChevronRight size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div className="px-4 pt-3 pb-6 text-center md:px-8" onClick={(e) => e.stopPropagation()}>
        {photo.caption && <p className="m-0 mx-auto max-w-[60ch] text-[15px]">{photo.caption}</p>}
        {many && (
          <div className="mt-3 flex justify-center gap-4 md:hidden">
            <button type="button" onClick={() => go(-1)} aria-label="Foto sebelumnya" className="btn btn-sm bg-paper px-3 text-foreground">
              <ChevronLeft size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Foto berikutnya" className="btn btn-sm bg-paper px-3 text-foreground">
              <ChevronRight size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Tombol "Lihat Foto" yang membuka lightbox. Tidak tampil kalau daftar foto kosong.
export function PhotoButton({ photos, title }: { photos?: Photo[]; title: string }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  if (!photos || photos.length === 0) return null;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="btn btn-sm bg-primary text-primary-foreground">
        <Images size={16} strokeWidth={2.5} aria-hidden="true" />
        Lihat Foto
      </button>
      {createPortal(
        <AnimatePresence>{open && <Lightbox photos={photos} title={title} onClose={close} />}</AnimatePresence>,
        document.body,
      )}
    </>
  );
}
