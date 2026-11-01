import { experiences } from "../data";
import Reveal from "./Reveal";
import Tag from "./Tag";
import { PhotoButton } from "./Lightbox";

export default function Experience() {
  return (
    <section id="pengalaman" className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24">
      <h2 className="h2 m-0 mb-10 md:mb-14">Pengalaman</h2>

      <ol className="m-0 list-none p-0">
        {experiences.map((exp, i) => {
          const isLast = i === experiences.length - 1;
          return (
            <li key={exp.title} className="grid grid-cols-[28px_1fr] md:grid-cols-[200px_40px_1fr]">
              <div className="hidden pt-1 md:block">
                <p className="m-0 font-extrabold">{exp.start}</p>
                <p className="m-0 text-muted-foreground">{exp.end}</p>
              </div>

              <div className="relative" aria-hidden="true">
                {!isLast && <span className="absolute top-3 bottom-0 left-[9px] w-[2px] bg-ink md:left-[13px]" />}
                <span
                  className={
                    "absolute top-1.5 left-0 h-5 w-5 rounded-full border-2 border-ink md:left-1 " +
                    (i === 0 ? "bg-primary" : "bg-paper")
                  }
                />
              </div>

              <Reveal index={i} className={isLast ? "pl-2 md:pl-4" : "pb-12 pl-2 md:pl-4"}>
                <p className="m-0 mb-1 text-[15px] font-extrabold text-blue md:hidden">
                  {exp.start} – {exp.end}
                </p>
                <h3 className="font-display m-0 text-[24px] leading-tight font-extrabold md:text-[28px]">{exp.title}</h3>
                <p className="m-0 mt-1 text-muted-foreground">
                  {exp.org} · {exp.type}
                </p>
                <ul className="mt-3 mb-0 max-w-[70ch] pl-5">
                  {exp.points.map((point) => (
                    <li key={point} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                {exp.photos?.length ? (
                  <div className="mt-5">
                    <PhotoButton photos={exp.photos} title={exp.title} />
                  </div>
                ) : null}
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
