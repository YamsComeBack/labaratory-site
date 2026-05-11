"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import Image from "next/image";
import { projectsData as projects } from "@/app/projects/data";

//_under_construction
const SHOW_UNDER_CONSTRUCTION_CARD = true;
const isLargeCard = false;

export const Projects = () => {
  const underConstructionSize: "large" | "small" = isLargeCard ? "large" : "small";

  const underConstructionCard = {
    size: underConstructionSize,
    img: "under_construction.png",
    title: "",
    descriptor: "",
    slug: "under_construction",
    isUnderConstruction: true as const,
  };

  const cards = SHOW_UNDER_CONSTRUCTION_CARD
    ? [underConstructionCard, ...projects]
    : projects;

  const shouldCenterUnderConstructionSmall =
    SHOW_UNDER_CONSTRUCTION_CARD && !isLargeCard && cards[1]?.size !== "small";

  return (
    <section className="relative w-full -mt-34 z-2 overflow-x-clip bg-black">
      <Image
        src={"/images/projects/last-image.png"}
        alt={``}
        width={1920}
        height={1080}
        className="h-auto w-full max-w-none"
        priority
        unoptimized
      />
      <div
        id="projects"
        className="relative box-border py-[clamp(70px,8vw,90px)] px-[clamp(40px,calc(-137px+23.07vw),195px)]"
      >
        <h1 className="box-border w-full max-w-full pb-15 text-title text-[clamp(2.5rem,11vw,9.375rem)] leading-[0.95]">
          Наши проекты
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-0 lg:grid-cols-2 lg:gap-y-[10px] lg:gap-x-[10px]">
          {cards.map((p, index) => (
            <ProjectCard
              key={`${p.slug}-${p.img}`}
              size={p.size}
              className={
                p.size === "large"
                  ? "md:col-span-2"
                  : index === 0 &&
                      "isUnderConstruction" in p &&
                      p.isUnderConstruction &&
                      shouldCenterUnderConstructionSmall
                    ? "lg:col-span-2 lg:mx-auto lg:w-[calc((100%-10px)/2)]"
                    : undefined
              }
              slug={p.slug}
              title={p.title}
              descriptor={p.descriptor}
              logo={{ src: "/svg/Logo-full_black.svg", alt: "Logo" }}
              isUnderConstruction={
                "isUnderConstruction" in p ? p.isUnderConstruction : false
              }
              image={{
                src: `/images/projects/${p.img}`,
                alt:
                  "isUnderConstruction" in p && p.isUnderConstruction
                    ? "Under construction"
                    : p.title,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
