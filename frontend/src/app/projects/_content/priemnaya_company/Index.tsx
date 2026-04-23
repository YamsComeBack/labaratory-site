"use client";

import Image from "next/image";

export const PriemnayaCompanyProject = () => {
  const images = [
    "/images/projects/_content/priemnaya_company/1-image.png",
    "/images/projects/_content/priemnaya_company/2-image.png",
    "/images/projects/_content/priemnaya_company/3-image.png",
    "/images/projects/_content/priemnaya_company/4-image.png",
    "/images/projects/_content/priemnaya_company/5-image.png",
    "/images/projects/_content/priemnaya_company/6-image.png",
    "/images/projects/_content/priemnaya_company/7-image.png",
    "/images/projects/_content/priemnaya_company/8-image.png",
    "/images/projects/_content/priemnaya_company/9-image.png",
    "/images/projects/_content/priemnaya_company/10-image.png",
    "/images/projects/_content/priemnaya_company/10-image.png",
  ];

  return (
    <article className="w-full">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Приёмная кампания ${i + 1}`}
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
