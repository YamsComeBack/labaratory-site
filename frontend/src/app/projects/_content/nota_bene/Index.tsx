"use client";

import Image from "next/image";

export const NotaBeneProject = () => {
  const headerImage = "/images/projects/_content/nota_bene/1-image.png";
  const images = [
    "/images/projects/_content/nota_bene/2-image.png",
    "/images/projects/_content/nota_bene/3-image.png",
    "/images/projects/_content/nota_bene/4-image.png",
    "/images/projects/_content/nota_bene/5-image.png",
    "/images/projects/_content/nota_bene/6-image.png",
  ];

  return (
    <div className="w-full overflow-hidden">
      <section className="relative w-full">
        <div className="absolute top-[50vw] right-0 z-10 w-[55vw]">
          <img
            src="/images/projects/_content/nota_bene/vector.svg"
            className="w-full"
          />
          <h1 className="absolute ml-[6vw] top-[7vw] leading-[100%] text-title text-[2.5vw]">
            Многостраничная вёрстка
          </h1>
          <p className="absolute top-[11vw] ml-[6vw] text-main text-[1.3vw] text-black leading-[120%] text-main whitespace-pre-wrap">
            {"В этих проектах мы работали над обновлением университетского\nжурнала «Nota bene» и буклета конкурса «Первый шаг».\nМы обновили визуальный стиль изданий, добавили новые\nинтерактивные рубрики и интересные фишки, например\nпиктограммы университетских корпусов."}
          </p>
        </div>
        <Image
          alt=""
          src="/images/projects/_content/nota_bene/nota1.png"
          width={2880}
          height={1920}
          className="block h-auto w-full"
          priority
          unoptimized
        />
      </section>

      <div className="relative w-full bg-[#868DA1]" style={{ aspectRatio: 2880/1920}}>
        <div className="absolute z-30 bottom-[-2.4vw] h-[5vw] w-[33vw] bg-(--color-primary)">
          <h1 className="absolute ml-[4vw] mt-[1vw] w-full leading-[100%] text-title text-[2.5vw]">
            Журнал «Nota Bene»
          </h1>
        </div>
        <Image
          alt=""
          src="/images/projects/_content/nota_bene/nota2.png"
          fill
          unoptimized
        />
      </div>
      <div className="relative w-full bg-[#868DA1]" style={{ aspectRatio: 2880/1920}}>
        <Image
          alt=""
          src="/images/projects/_content/nota_bene/nota3.png"
          fill
          unoptimized
        />
      </div>

      <div className="relative w-full bg-[#868DA1]" style={{ aspectRatio: 2880/1920}}>
        <div className="absolute z-30 bottom-[-2.4vw] h-[5vw] w-[33vw] bg-(--color-primary)">
          <h1 className="absolute ml-[4vw] mt-[1vw] w-full leading-[100%] text-title text-[2.5vw]">
            Журнал «First Step»
          </h1>
        </div>
        <Image
          alt=""
          src="/images/projects/_content/nota_bene/nota4.png"
          fill
          unoptimized
        />
      </div>
      <div className="relative w-full bg-[#868DA1]" style={{ aspectRatio: 2880/1920}}>
        <Image
          alt=""
          src="/images/projects/_content/nota_bene/nota5.png"
          fill
          unoptimized
        />
      </div>
      <div className="relative w-full bg-[#868DA1]" style={{ aspectRatio: 2880/1920}}>
        <Image
          alt=""
          src="/images/projects/_content/nota_bene/nota6.png"
          fill
          unoptimized
        />
      </div>
    </div>
  );
};
