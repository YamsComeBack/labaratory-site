"use client";

import Image from "next/legacy/image";

export const NavigationProject = () => {
  const headerImage = "/images/projects/_content/navigation/nav1.webp";
  const images = [
    "/images/projects/_content/navigation/nav2.webp",
    "/images/projects/_content/navigation/nav3.webp",
    "/images/projects/_content/navigation/nav4.webp",
    "/images/projects/_content/navigation/nav5.webp",
    "/images/projects/_content/navigation/nav6.webp",
    "/images/projects/_content/navigation/nav7.webp",
    "/images/projects/_content/navigation/nav8.webp",
  ];

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img src={headerImage} alt="Навигация для СКФУ" className="block h-auto w-full" />

        <div className="pointer-events-none absolute right-0 top-[35%] z-10 w-[50%]">
          <div className="absolute right-0">
            <img
              src="/images/projects/_content/navigation/vector.svg"
              alt=""
              className="h-auto mt-[12vw] w-[45vw]"
            />
            <div className="pointer-events-auto absolute inset-0 px-[10%] py-[10%]">
              <h2 className="w-full ml-[6%] mt-[27%] leading-[100%] absolute text-title text-[2.5vw]">
                Навигация для СКФУ
              </h2>
              <p className="w-[70%] ml-[6%] mt-[35%] absolute text-main text-[1.3vw] leading-[120%]">
                  Проект включает в себя три блока: внешнюю, внутреннюю и цифровую навигацию. Концепция проекта направлена на создание дружелюбной атмосферы и коммуникации с посетителем университета, чтобы каждый смог легко сориентироваться в пространстве.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Навигация ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
