import { Github, Linkedin, Mail } from "lucide-react";
import { contact, profile } from "../data";
import Reveal from "./Reveal";
import Wave from "./Wave";
import { useSendEmail } from "./EmailButton";

export default function Contact() {
  const sendEmail = useSendEmail();

  return (
    <section id="kontak" className="bg-primary">
      <Wave fill="var(--background)" flip />
      <Reveal className="mx-auto max-w-[760px] px-4 py-14 text-center md:px-8 md:py-20">
        <h2 className="h2 m-0">{contact.heading}</h2>
        <p className="mx-auto mt-5 mb-0 max-w-[52ch]">{contact.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button type="button" onClick={sendEmail} className="btn bg-blue text-paper">
            <Mail size={18} strokeWidth={2.5} aria-hidden="true" />
            Kirim Email
          </button>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn bg-paper text-foreground">
              <Linkedin size={18} strokeWidth={2.5} aria-hidden="true" />
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn bg-paper text-foreground">
              <Github size={18} strokeWidth={2.5} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
