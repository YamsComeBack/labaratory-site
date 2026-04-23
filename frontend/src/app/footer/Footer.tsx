"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <section className="flex flex-col xl:flex-row items-start gap-14 w-full bg-black pb-11 px-[clamp(40px,calc(-137px+23.07vw),195px)] xl:px-[clamp(50px,6vw,112px)]">
      <div className="relative inline-block order-1 xl:order-2 flex-shrink-0">
        <Image
          src="/svg/Footer/Star.svg"
          alt="star"
          width={646}
          height={331}
          priority
          unoptimized
        />
        <p className="absolute inset-0 mx-auto flex max-w-[320px] items-center justify-center text-contacts text-black text-center whitespace-pre-line">
          {"+7 (962)-444-98-96\nlaboratory_media_design@mail.ru"}
        </p>
      </div>
      <div className="flex flex-col gap-16 flex-1 order-2 xl:order-1">
        <p className="text-primary text-main xl:max-w-[758px]">
          Интересует сотрудничество или обучение с нами? Обращайтесь сюда
        </p>
        <nav className="flex justify-between items-center xl:max-w-[758px] whitespace-nowrap text-main text-white">
          <a href="#home" className="shrink-0 w-[clamp(156px,12vw,212px)]">
            <Image
              src="/svg/Logo_white.svg"
              alt="logo"
              width={212}
              height={138}
              priority
              unoptimized
            />
          </a>
          <a
            href="#about"
            className="hover-underline-animation"
            style={{ "--underline-color": "white" } as React.CSSProperties}
          >
            О нас
          </a>
          <a
            href="#projects"
            className="hover-underline-animation"
            style={{ "--underline-color": "white" } as React.CSSProperties}
          >
            Проекты
          </a>
        </nav>
        <p className="text-white text-form">
          © Лаборатория медиа и дизайна, 2025
        </p>
      </div>
    </section>
  );
};
