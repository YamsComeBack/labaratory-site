"use client";

import Image from "next/image";

export const EtnoMerchProject = () => {
  const headerImage = "/images/projects/_content/etno_merch/etno1.webp";
  const images = [
    "/images/projects/_content/etno_merch/etno2.webp",
    "/images/projects/_content/etno_merch/etno3.webp",
    "/images/projects/_content/etno_merch/etno4.webp",
    "/images/projects/_content/etno_merch/etno5.webp",
    "/images/projects/_content/etno_merch/etno6.webp",
  ];

  return (
    <div className="w-full">
      <section className="relative w-full" style={{ aspectRatio:3840/2598 }}>
        <Image
          src={headerImage}
          alt="Этномерч"
          className="block h-auto w-full"
          fill
          priority
          unoptimized
        />

        <div className="absolute left-0 top-[11%] z-10 w-[38%]">
          <h1 className="absolute z-30 w-[25vw] ml-[4vw] mt-[2.5vw] leading-[100%] text-title text-[2.5vw]">
            Этномерч
          </h1>
          <p className="absolute z-30 w-[35vw] ml-[4vw] mt-[6.5vw] text-main text-[1.3vw] leading-[120%] whitespace-pre-wrap">
            {"Главная цель этого кейса — продвижение\nкультуры народов СКФО. Эта одежда напоминает\nмолодому поколению о том, насколько богаты\nязыки народов Северного Кавказа на яркие\nафоризмы. Древнюю мудрость Кавказа мы\nотразили в стильном и современном дизайне\nфутболок, которые точно впишутся\nв твой гардероб."}
          </p>
          <img
            src="/images/projects/_content/etno_merch/vector.svg"
            className="w-full"
          />
        </div>
      </section>

      {images.map((src, i) => (
        <div key={i} className="relative w-full" style={{ aspectRatio: 3854/2162 }}>
          <Image
            src={src}
            alt={`Этно мерч ${i + 2}`}
            className="block h-auto w-full"
            fill
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};
