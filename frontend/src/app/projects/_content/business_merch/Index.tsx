"use client";

import Image from "next/image";

export const BusinessMerchProject = () => {
  const images = [
    "/images/projects/_content/business_merch/1-image.png",
    "/images/projects/_content/business_merch/2-image.png",
    "/images/projects/_content/business_merch/3-image.png",
    "/images/projects/_content/business_merch/4-image.png",
    "/images/projects/_content/business_merch/5-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Бизнес мерч ${i + 1}`}
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
