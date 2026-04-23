"use client";

import Image from "next/image";

export const CyberClassProject = () => {
  const images = [
    "/images/projects/_content/cyber_class/1-image.png",
    "/images/projects/_content/cyber_class/2-image.png",
    "/images/projects/_content/cyber_class/3-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Кибер класс ${i + 1}`}
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
