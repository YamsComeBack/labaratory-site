"use client";

import Image from "next/legacy/image";
import Link from "next/link";

/* Utility — объединение классов */
const c = (...cls: (string | false | undefined)[]) =>
  cls.filter(Boolean).join(" ");

export interface ProjectCardProps {
  size?: "large" | "small";
  slug: string;
  title: string;
  descriptor?: string;
  logo: { src: string; alt?: string };
  image: { src: string; alt?: string };
  className?: string;
}

export default function ProjectCard({
  size = "large",
  slug,
  title,
  descriptor,
  logo,
  image,
  className,
}: ProjectCardProps) {
  /* адаптивные параметры для двух размеров карточек */
  const v =
    size === "large"
      ? {
          aspect: "aspect-[1530/947] lg:aspect-[730/439]",
          logo: "w-[128px] h-auto",
          imgSz: "(max-width:1023px) 100vw, (min-width:1024px) 700px",
        }
      : {
          aspect: "aspect-[757/425]",
          logo: "w-[128px] h-auto",
          imgSz: "(max-width:1023px) 100vw, (min-width:1024px) 700px",
        };

  const gap = "gap-[15px]";
  const maxTextW = "max-w-[585px]";

  return (
    <Link
      href={`/projects/${slug}`}
      className={c(
        "group relative block overflow-hidden rounded-2xl",
        v.aspect,
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt ?? title}
        layout="fill"
        sizes={v.imgSz}
        className="object-cover"
        priority
        unoptimized
      />
      <div
        className={c(
          "pointer-events-none absolute inset-0 grid place-items-center bg-primary",
          "opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        )}
      >
        <div className={c("flex flex-col items-center justify-center", gap)}>
          <Image
            src={logo.src}
            alt={logo.alt ?? `${title} logo`}
            className={c("object-contain", v.logo)}
            width={1}
            height={1}
            priority
            unoptimized
          />
          <h3
            lang="ru"
            className={c(
              "title-project-card text-[1.75rem] font-black leading-tight mb-[-10] mt-[-10] text-center",
              "w-full hyphens-auto wrap-break-word whitespace-pre-line",
              maxTextW
            )}
          >
            {title}
          </h3>

          {/* Описание */}
          {descriptor && (
            <p
              lang="ru"
              className={c(
                "text-project-card text-[1.16rem] leading-snug text-center",
                "w-full hyphens-auto wrap-break-word whitespace-pre-line",
                maxTextW
              )}
            >
              {descriptor}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
