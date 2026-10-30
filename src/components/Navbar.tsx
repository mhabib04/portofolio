import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-background">
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-4 md:h-[84px] md:px-8">
        <a href="#" className="font-display text-[28px] font-extrabold tracking-tight text-foreground no-underline">
          {profile.logo}
        </a>

        <ul className="hidden list-none items-center gap-8 p-0 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-extrabold text-foreground no-underline hover:text-blue">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          className="btn btn-sm bg-primary text-primary-foreground md:hidden"
        >
          <Menu size={20} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-primary px-4 md:hidden"
          >
            <div className="flex h-[72px] items-center justify-between">
              <span className="font-display text-[28px] font-extrabold">{profile.logo}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="btn btn-sm bg-paper text-foreground"
              >
                <X size={20} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </div>
            <ul className="mt-8 flex list-none flex-col gap-4 p-0">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="h2 block text-foreground no-underline"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
