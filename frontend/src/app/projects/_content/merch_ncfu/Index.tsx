"use client";

import Image from "next/image";

export const MerchNcfuProject = () => {
  const images = [
    "/images/projects/_content/merch_ncfu/1-image.png",
    "/images/projects/_content/merch_ncfu/2-image.png",
    "/images/projects/_content/merch_ncfu/3-image.png",
    "/images/projects/_content/merch_ncfu/4-image.png",
    "/images/projects/_content/merch_ncfu/5-image.png",
    "/images/projects/_content/merch_ncfu/6-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Мерч СКФУ ${i + 1}`}
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
