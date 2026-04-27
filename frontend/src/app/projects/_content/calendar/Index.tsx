"use client";

import Image from "next/image";

export const CalendarProject = () => {
  const headerImage = "/images/projects/_content/calendar/1-image.png";
  const images = [
    "/images/projects/_content/calendar/2-image.png",
    "/images/projects/_content/calendar/3-image.png",
    "/images/projects/_content/calendar/4-image.png",
    "/images/projects/_content/calendar/5-image.png",
    "/images/projects/_content/calendar/6-image.png",
  ];

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img
          src={headerImage}
          alt="Корпоративные календари СКФУ 2024"
          className="block h-auto w-full"
        />

        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full translate-y-1/2">
          <div className="relative">
            <Image
              src="/images/projects/_content/calendar/vector.svg"
              alt=""
              width={1920}
              height={512}
              className="h-auto w-full"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 flex items-center px-[clamp(24px,5.2vw,100px)] py-[clamp(18px,4vw,76px)]">
              <h2 className="text-title text-[clamp(0.34rem,2.48vw,2.9rem)] leading-[1.04] text-black">
                Корпоративные календари СКФУ 2024
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[clamp(84px,26.67vw,512px)]">
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Календарь ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
