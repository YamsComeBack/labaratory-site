"use client";

import Image from "next/image";

export const SuncMerchProject = () => {
  const images = [
    "/images/projects/_content/sunc_merch/1-image.png",
    "/images/projects/_content/sunc_merch/2-image.png",
    "/images/projects/_content/sunc_merch/3-image.png",
    "/images/projects/_content/sunc_merch/4-image.png",
    "/images/projects/_content/sunc_merch/5-image.png",
    "/images/projects/_content/sunc_merch/6-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`СУНЦ Мерч ${i + 1}`}
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
