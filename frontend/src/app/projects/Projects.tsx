"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import Image from "next/legacy/image";
import { projectsData as projects } from "@/app/projects/data";

export const Projects = () => {
  return (
    <section className="relative w-full -mt-34 z-2 overflow-x-clip bg-white">
      <Image
        src={"/images/projects/last-image.png"}
        alt={``}
        width={3840}
        height={2804}
        className="h-auto w-full max-w-none"
        priority
        unoptimized
      />
      <div
        id="projects"
        className="relative box-border pb-5 px-[clamp(40px,calc(-137px+23.07vw),195px)]"
      >
        <h1 className="box-border text-w-full max-w-full pb-15 text-title text-black text-[4rem] leading-[0.95]">
          Наши проекты
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-0 lg:grid-cols-2 md:gap-y-5 md:gap-x-5">
          {projects.map((p) => (
            <ProjectCard
              key={`${p.slug}-${p.img}`}
              size={p.size}
              className={p.size === "large" ? "md:col-span-2" : undefined}
              slug={p.slug}
              title={p.title}
              descriptor={p.descriptor}
              logo={{ src: "/svg/Logo-full_black.svg", alt: "Logo" }}
              image={{
                src: `/images/projects/${p.img}`,
                alt: p.title,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
