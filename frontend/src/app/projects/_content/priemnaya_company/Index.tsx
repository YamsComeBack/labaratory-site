"use client";

import Image from "next/image";

export const PriemnayaCompanyProject = () => {
  const headerImage = "/images/projects/_content/priemnaya_company/1-image.png";
  const images = [
    "/images/projects/_content/priemnaya_company/2-image.png",
    "/images/projects/_content/priemnaya_company/3-image.png",
    "/images/projects/_content/priemnaya_company/4-image.png",
    "/images/projects/_content/priemnaya_company/5-image.png",
    "/images/projects/_content/priemnaya_company/6-image.png",
    "/images/projects/_content/priemnaya_company/7-image.png",
    "/images/projects/_content/priemnaya_company/8-image.png",
    "/images/projects/_content/priemnaya_company/9-image.png",
    "/images/projects/_content/priemnaya_company/10-image.png",
    "/images/projects/_content/priemnaya_company/11-image.png",
  ];

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img
          src={headerImage}
          alt="Оформление приёмной кампании СКФУ 2024"
          className="block h-auto w-full"
        />

        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full translate-y-[83%]">
          <div className="relative">
            <Image
              src="/images/projects/vector.svg"
              alt=""
              width={1920}
              height={402}
              className="h-auto w-full"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 flex items-center px-[clamp(14px,6vw,220px)] py-[clamp(16px,3.6vw,70px)]">
              <div className="grid w-full grid-cols-2 gap-[clamp(12px,3.75vw,72px)]">
                <h2 className="text-title text-[clamp(0.2rem,3.2vw,3.6rem)] leading-[1.05] text-black">
                  Оформление приёмной кампании СКФУ 2024
                </h2>
                <p className="text-main text-[clamp(0.12rem,1.2vw,1.5rem)] leading-[1.2] text-black">
                  — важный и самый масштабный кейс лаборатории. Его задача — создание образа
                  современного университета, движущегося на одной волне со своими абитуриентами.
                  Используя наиболее запоминающиеся тренды медиа, мы работали над оформлением
                  сообщества ВУЗа в социальных сетях и мерчем для сотрудников приёмной комиссии,
                  сняли видео-визитку СКФУ и множество ВК-клипов, записали свой трек, а также
                  выпустили яркий комикс и стикеры.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mt-[clamp(44px,11.25vw,216px)]"> */}
      <section className="mt-[14%]">
      {images.map((src, i) => (
        <div key={i} className="w-full">
          <img
            src={src}
            alt={`Приёмная кампания ${i + 1}`}
            className="block h-auto w-full"
          />
        </div>
      ))}
      </section>
    </article>
  );
};
