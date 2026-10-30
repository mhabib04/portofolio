import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { profile } from "../data";

// Klik email = salin alamat + buka aplikasi email, supaya tetap berguna
// di komputer yang belum punya aplikasi email.
const EmailContext = createContext<() => void>(() => {});

export function EmailProvider({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  const sendEmail = useCallback(() => {
    navigator.clipboard?.writeText(profile.email).catch(() => {});
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2500);
    window.location.href = `mailto:${profile.email}`;
  }, []);

  return (
    <EmailContext.Provider value={sendEmail}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="ink-card flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-[15px] font-extrabold"
            >
              <Check size={18} strokeWidth={3} aria-hidden="true" />
              Email disalin
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </EmailContext.Provider>
  );
}

export function useSendEmail() {
  return useContext(EmailContext);
}
