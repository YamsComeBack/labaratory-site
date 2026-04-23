"use client";

import Image from "next/image";

export const CalendarProject = () => {
  const images = [
    "/images/projects/_content/calendar/1-image.png",
    "/images/projects/_content/calendar/2-image.png",
    "/images/projects/_content/calendar/3-image.png",
    "/images/projects/_content/calendar/4-image.png",
    "/images/projects/_content/calendar/5-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Календарь ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}
    </article>
  );
};
