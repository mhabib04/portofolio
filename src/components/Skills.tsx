import { skillRows } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="tech" className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24">
      <h2 className="h2 m-0 mb-10 md:mb-14">Tech</h2>
      <div className="flex flex-col gap-6">
        {skillRows.map((row, i) => (
          <Reveal key={row[0]} index={i}>
            <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
              {row.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border-2 border-ink bg-paper px-5 py-2.5 text-[15px] font-extrabold shadow-[3px_3px_0_var(--border)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
