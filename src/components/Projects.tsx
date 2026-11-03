import clsx from "clsx";
import { motion } from "motion/react";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { projects, type Project } from "../data";
import Reveal from "./Reveal";
import Tag from "./Tag";
import Wave from "./Wave";
import { PhotoButton } from "./Lightbox";

function Thumbnail({ project, featured }: { project: Project; featured?: boolean }) {
  const Icon = project.kind === "web" ? Globe : Smartphone;
  // Kartu besar di mobile mengikuti rasio asli gambar supaya tidak terpotong
  const featuredBox = project.image ? "" : "aspect-[16/10] md:aspect-auto";
  return (
    <div
      className={clsx(
        "flex items-center justify-center overflow-hidden border-ink",
        featured ? `${featuredBox} border-b-2 md:h-full md:border-r-2 md:border-b-0` : "aspect-[16/9] border-b-2",
        project.kind === "web" ? "bg-tile-yellow" : "bg-tile-blue",
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`Tampilan ${project.title}`}
          className={featured ? "block h-auto w-full md:h-full md:object-cover" : "h-full w-full object-cover"}
        />
      ) : (
        <Icon size={featured ? 72 : 56} strokeWidth={1.5} aria-hidden="true" />
      )}
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  const links = project.links.filter((link) => link.href);
  return (
    <div className="flex flex-1 flex-col p-5 md:p-7">
      <div className="mb-3 flex flex-wrap gap-2">
        {project.labels.map((label, i) => (
          <Tag key={label} className={i === 0 ? "bg-primary" : "bg-pink"}>
            {label}
          </Tag>
        ))}
      </div>
      <h3 className="font-display m-0 text-[26px] leading-tight font-extrabold md:text-[32px]">{project.title}</h3>
      <p className="mt-2 mb-0 text-muted-foreground">{project.summary}</p>
      <ul className="mt-3 mb-0 pl-5">
        {project.points.map((point) => (
          <li key={point} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
        {project.tags.map((tag) => (
          <Tag key={tag} className="bg-background">
            {tag}
          </Tag>
        ))}
        <PhotoButton photos={project.photos} title={project.title} />
      </div>
      {links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm bg-paper text-foreground"
            >
              {link.label}
              <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="proyek" className="bg-blue">
      <Wave fill="var(--background)" flip />
      <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-20">
        <h2 className="h2 m-0 mb-10 text-paper md:mb-14">Proyek</h2>

        <Reveal>
          <motion.div whileHover={{ y: -6 }} className="spotlight-card">
            <article className="ink-card grid overflow-hidden rounded-[28px] bg-paper md:grid-cols-[1.1fr_1fr]">
              <Thumbnail project={featured} featured />
              <ProjectBody project={featured} />
            </article>
          </motion.div>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} index={i + 1} className="flex">
              <motion.div whileHover={{ y: -6 }} className="spotlight-card flex w-full">
                <article className="ink-card flex w-full flex-col overflow-hidden rounded-[28px] bg-paper">
                  <Thumbnail project={project} />
                  <ProjectBody project={project} />
                </article>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
      <Wave fill="var(--background)" />
    </section>
  );
}
