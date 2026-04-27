"use client";

import Image from "next/image";

export const BusinessMerchProject = () => {
  const headerImage = "/images/projects/_content/business_merch/1-image.png";
  const images = [
    "/images/projects/_content/business_merch/2-image.png",
    "/images/projects/_content/business_merch/3-image.png",
    "/images/projects/_content/business_merch/4-image.png",
    "/images/projects/_content/business_merch/5-image.png",
  ];

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img src={headerImage} alt="Мерч для интенсива «Открой свой бизнес»" className="block h-auto w-full" />

        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full translate-y-1/2">
          <div className="relative">
            <Image
              src="/images/projects/_content/business_merch/vector.svg"
              alt=""
              width={1920}
              height={736}
              className="h-auto w-full"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 flex items-center px-[clamp(12px,4.7vw,90px)] py-[clamp(18px,5.2vw,100px)]">
              <div className="grid w-full grid-cols-2 gap-[clamp(12px,4.4vw,84px)]">
                <h2 className="text-title text-[clamp(0.26rem,2.6vw,3rem)] leading-[1.03] text-black">
                  Мерч для интенсива ‭«Открой свой бизнес»
                </h2>
                <p className="text-main text-[clamp(0.16rem,1.08vw,1.3rem)] leading-[1.18] text-black">
                  Специально для курса «Я открываю бизнес», созданным СКФУ, мы разработали
                  оригинальный мерч, который даже после окончания курса будет напоминать о
                  полученных знаниях и мотивировать двигаться к успеху. Мерч раскрывает суть курса
                  – вдохновить школьников уже сейчас начинать развиваться в бизнес-сфере.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[clamp(120px,38.3vw,736px)]">
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Бизнес мерч ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
