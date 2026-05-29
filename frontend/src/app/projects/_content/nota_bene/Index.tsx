"use client";

import Image from "next/legacy/image";

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
    <article className="w-full overflow-hidden">
      <section className="relative w-full">
        <img src={headerImage} alt="Многостраничная вёрстка" className="block h-auto w-full" />

        <div className="pointer-events-none absolute top-[58%] right-[-9%] z-10 w-[63%] translate-y-1/2">
          <div className="relative">
            <Image
              src="/images/projects/_content/nota_bene/vector.svg"
              alt=""
              width={1203}
              height={432}
              className="h-auto w-full"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 flex items-center px-[clamp(16px,3.2vw,62px)] py-[clamp(14px,2.9vw,56px)]">
              <div className="w-full">
                <h2 className="text-title text-[clamp(0.32rem,2.4vw,2.8rem)] leading-[1.04] text-black">
                  Многостраничная вёрстка
                </h2>
                <p className="mt-[clamp(6px,1vw,18px)] max-w-[85%] text-main text-[clamp(0.16rem,0.92vw,1.1rem)] leading-[1.18] text-black">
                  В этих проектах мы работали над обновлением университетского журнала «Nota bene» и
                  буклета конкурса «Первый шаг». Мы обновили визуальный стиль изданий, добавили
                  новые интерактивные рубрики и интересные фишки, например пиктограммы
                  университетских корпусов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Nota Bene ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
