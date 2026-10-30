import { ExternalLink, GraduationCap } from "lucide-react";
import { education } from "../data";
import Reveal from "./Reveal";
import Tag from "./Tag";

export default function Education() {
  return (
    <section id="pendidikan" className="mx-auto max-w-[1280px] px-4 pb-16 md:px-8 md:pb-24">
      <h2 className="h2 m-0 mb-10 md:mb-14">Pendidikan</h2>

      <Reveal>
        <article className="ink-card flex gap-6 rounded-[28px] bg-paper p-5 md:p-8">
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-ink bg-primary md:flex">
            <GraduationCap size={32} strokeWidth={2} aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="m-0 mb-1 text-[15px] font-extrabold text-blue md:hidden">{education.period}</p>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display m-0 text-[22px] leading-tight font-extrabold md:text-[28px]">
                <span className="md:hidden">{education.campusShort}</span>
                <span className="hidden md:inline">{education.campus}</span>
              </h3>
              <p className="m-0 hidden font-extrabold md:block">{education.period}</p>
            </div>
            <div className="mt-1 flex flex-wrap justify-between gap-x-6 text-muted-foreground">
              <p className="m-0">
                <span className="md:hidden">{education.degreeShort}</span>
                <span className="hidden md:inline">{education.degree}</span>
              </p>
              <p className="m-0">{education.gpa}</p>
            </div>

            <div className="mt-6 border-t-2 border-ink pt-5">
              <p className="m-0 text-[15px] font-extrabold text-muted-foreground">Tugas Akhir</p>
              <p className="m-0 mt-1 italic">{education.thesis}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Tag className="bg-pink">Terpublikasi</Tag>
                <span className="text-muted-foreground">
                  <span className="md:hidden">{education.journalShort}</span>
                  <span className="hidden md:inline">{education.journal}</span>
                </span>
                <a
                  href={education.journalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-full bg-paper text-foreground sm:w-auto"
                >
                  Baca jurnal
                  <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
