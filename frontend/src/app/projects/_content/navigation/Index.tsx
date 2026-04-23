"use client";

import Image from "next/image";

export const NavigationProject = () => {
  const images = [
    "/images/projects/_content/navigation/1-image.png",
    "/images/projects/_content/navigation/2-image.png",
    "/images/projects/_content/navigation/3-image.png",
    "/images/projects/_content/navigation/4-image.png",
    "/images/projects/_content/navigation/5-image.png",
    "/images/projects/_content/navigation/6-image.png",
    "/images/projects/_content/navigation/7-image.png",
    "/images/projects/_content/navigation/8-image.png",
    "/images/projects/_content/navigation/9-image.png",
    "/images/projects/_content/navigation/10-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Навигация ${i + 1}`}
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
