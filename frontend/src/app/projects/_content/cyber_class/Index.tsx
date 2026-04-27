"use client";

import Image from "next/image";

export const CyberClassProject = () => {
  const headerImage = "/images/projects/_content/cyber_class/1-image.png";
  const images = [
    "/images/projects/_content/cyber_class/2-image.png",
    "/images/projects/_content/cyber_class/3-image.png",
  ];

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img src={headerImage} alt="Оформление кибер-класса СКФУ" className="block h-auto w-full" />

        <div className="pointer-events-none absolute bottom-0 left-[-1%] z-10 w-[67%] translate-y-[30%]">
          <div className="relative">
            <Image
              src="/images/projects/_content/cyber_class/vector.svg"
              alt=""
              width={1278}
              height={591}
              className="h-auto w-full"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 px-[clamp(16px,4vw,74px)] py-[clamp(18px,4.4vw,82px)]">
              <h2 className="text-title text-[clamp(0.28rem,2.3vw,2.7rem)] leading-[1.03] text-black">
                Оформление кибер-класса СКФУ
              </h2>
              <p className="mt-[clamp(8px,1.2vw,20px)] max-w-[73%] text-main text-[clamp(0.13rem,0.94vw,1.1rem)] leading-[1.17] text-black">
                Оформление пространства для кибер-класса СКФУ с абстрактной кибернетической
                композицией, созданной нейросетью, отражает синергию между человеком и машиной,
                передаёт атмосферу технологий будущего.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[clamp(86px,19.7vw,378px)]">
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Кибер класс ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
