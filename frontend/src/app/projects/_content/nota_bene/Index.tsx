"use client";

import Image from "next/image";

export const NotaBeneProject = () => {
  const images = [
    "/images/projects/_content/nota_bene/1-image.png",
    "/images/projects/_content/nota_bene/2-image.png",
    "/images/projects/_content/nota_bene/3-image.png",
    "/images/projects/_content/nota_bene/4-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Nota Bene ${i + 1}`}
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
