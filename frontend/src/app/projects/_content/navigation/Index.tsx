"use client";

import Image from "next/image";

export const NavigationProject = () => {
  const headerImage = "/images/projects/_content/navigation/1-image.png";
  const images = [
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
      <section className="relative w-full">
        <img src={headerImage} alt="Навигация для СКФУ" className="block h-auto w-full" />

        <div className="pointer-events-none absolute right-[-1%] top-[35%] z-10 w-[54%]">
          <div className="relative">
            <Image
              src="/images/projects/_content/navigation/vector.svg"
              alt=""
              width={941}
              height={1234}
              className="h-auto w-full"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 px-[clamp(14px,3vw,58px)] py-[clamp(22px,4vw,78px)]">
              <h2 className="text-title text-[clamp(0.26rem,2.2vw,2.6rem)] leading-[1.03] text-black">
                Навигация для СКФУ
              </h2>
              <p className="mt-[clamp(8px,1.2vw,20px)] max-w-[78%] text-main text-[clamp(0.12rem,0.9vw,1.06rem)] leading-[1.16] text-black">
                Проект включает в себя три блока: внешнюю, внутреннюю и цифровую навигацию.
                Концепция проекта направлена на создание дружелюбной атмосферы и коммуникации с
                посетителем университета, чтобы каждый смог легко сориентироваться в пространстве.
              </p>
              <p className="mt-[clamp(82px,15vw,292px)] ml-[clamp(90px,17vw,330px)] max-w-[42%] text-main text-[clamp(0.12rem,0.9vw,1.06rem)] leading-[1.16] text-black">
                Помимо указателей и табличек было разработано приложение, как главный инструмент
                цифровой навигации.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[clamp(190px,35vw,670px)]">
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Навигация ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
