import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, User } from "lucide-react";
import { profile } from "../data";
import Wave from "./Wave";
import { useSendEmail } from "./EmailButton";

const pop = { type: "spring", stiffness: 300, damping: 18 } as const;

export default function Hero() {
  const sendEmail = useSendEmail();
  const words = profile.name.split(" ");

  return (
    <section className="bg-primary">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 pt-10 pb-10 md:grid-cols-[1.4fr_1fr] md:gap-12 md:px-8 md:pt-20 md:pb-16">
        <div className="text-center md:text-left">
          <h1 className="h1 m-0 text-primary-foreground">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="block"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ ...pop, delay: i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="font-display mt-5 mb-0 text-[clamp(22px,2.4vw,32px)] font-extrabold text-blue">
            {profile.role}
          </p>
          <p className="mt-4 mb-0 max-w-[60ch] text-primary-foreground">{profile.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <a href="#proyek" className="btn bg-blue text-paper">
              Lihat Proyek
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a href={profile.cv} download className="btn bg-paper text-foreground">
              <Download size={18} strokeWidth={2.5} aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-3 md:justify-start">
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn btn-sm bg-paper px-3 text-foreground">
                <Linkedin size={20} strokeWidth={2.5} aria-hidden="true" />
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn btn-sm bg-paper px-3 text-foreground">
                <Github size={20} strokeWidth={2.5} aria-hidden="true" />
              </a>
            )}
            <button type="button" onClick={sendEmail} aria-label="Kirim email" className="btn btn-sm bg-paper px-3 text-foreground">
              <Mail size={20} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ rotate: -6, scale: 0.9, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.15 }}
          className="order-first mx-auto w-[180px] py-3 md:order-none md:w-full md:max-w-[400px] md:py-6"
        >
          <div className="photo-stack">
            <div className="photo-card">
              <div className="aspect-square overflow-hidden border-2 border-ink bg-tile-yellow md:aspect-[4/5]">
                {profile.photo ? (
                  <img src={profile.photo} alt={`Foto ${profile.name}`} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-ink">
                    <User className="h-14 w-14 md:h-24 md:w-24" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Wave fill="var(--background)" />
    </section>
  );
}
