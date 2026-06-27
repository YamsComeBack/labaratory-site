"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const TG_LINK = "https://t.me/laboratory_laba"
const BEHANCE_LINK = "https://www.behance.net/laboratoria"
const DPROFILE_LINK = "https://dprofile.ru/laboratoria"
const PHONE = "+7 (962)-444-98-96";
const EMAIL = "laboratory_media_design";
const EMAIL_AT = "@mail.ru";
const FORM_LINK = "laboratory_media_design@mail.ru";

type CopiedField = "phone" | "email" | null;

export const Footer = () => {
  const [copied, setCopied] = useState<CopiedField>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const copyToClipboard = useCallback(
    async (text: string, field: Exclude<CopiedField, null>) => {
      try {
        await navigator.clipboard.writeText(text);
        clearHideTimer();
        setCopied(field);
        hideTimer.current = setTimeout(() => setCopied(null), 1000);
      } catch {
        /* ignore */
      }
    },
    [clearHideTimer]
  );

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  return (
    <section
      id="footer"
      className="flex flex-col xl:flex-row items-start gap-12 w-full bg-black outline-0 pb-15 px-[clamp(40px,calc(-137px+23.07vw),195px)] xl:px-[clamp(50px,6vw,112px)] z-30"
    >
      <div className="relative outline-none w-[150vw] sm:w-2xl translate-x-[-35vw] -translate-y-5 sm:translate-x-0 mx-auto inline-block order-1 xl:order-2 shrink-0 overflow-visible">
        <Image
          src="/svg/footer/Star.svg"
          alt="star"
          width={646}
          height={331}
          className="h-auto w-full"
          priority
          unoptimized
        />
        <div className="absolute inset-0 mx-auto flex max-w-[min(720px,calc(100%-32px))] flex-col items-center justify-center gap-2 overflow-visible px-2 pb-4 text-center font-[roboto] text-[1.3rem] text-black">
          <div className="relative flex flex-row gap-4 py-1 place-items-center">
            <div>
              <a href={TG_LINK} target="blank">
                <img
                  src="/svg/footer/tg.svg"
                  width={45}
                  height={45}
                  title="Наш телеграм-канал"
                  className="hover:scale-107 transition-transform"
                />
              </a>
            </div>
            <div>
              <a href={BEHANCE_LINK} target="blank">
                <img
                  src="/svg/footer/behance.svg"
                  width={50}
                  height={50}
                  title="Мы на Behance"
                  className="hover:scale-106 transition-transform"
                />
              </a>
            </div>
            <div>
              <a href={DPROFILE_LINK} target="blank">
                <img
                  src="/svg/footer/Dprofile.svg"
                  width={48}
                  height={48}
                  title="Мы на Dprofile"
                  className="hover:scale-106 transition-transform"
                />
              </a>
            </div>
          </div>
          <div className="relative inline-block hover:scale-103 transition-transform">
            {copied === "phone" && (
              <div
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2"
                role="status"
                aria-live="polite"
              >
                <div
                  className="inline-flex min-h-20 w-max max-w-[min(340px,calc(100vw-48px))] items-center justify-center bg-center bg-no-repeat px-14 py-4"
                  style={{
                    backgroundImage: "url(/svg/footer/blob.svg)",
                    backgroundSize: "90% 90%",
                  }}
                >
                  <span className="text-form text-[1rem] text-white whitespace-nowrap">Скопировано!</span>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => copyToClipboard(PHONE, "phone")}
              title="Копировать номер телефона"
              className="max-w-full cursor-pointer whitespace-nowrap rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {PHONE}
            </button>
          </div>
          <div className="relative inline-block">
            {copied === "email" && (
              <div
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2"
                role="status"
                aria-live="polite"
              >
                <div
                  className="inline-flex min-h-20 w-max max-w-[min(340px,calc(100vw-48px))] items-center justify-center bg-center bg-no-repeat px-14 py-4"
                  style={{
                    backgroundImage: "url(/svg/footer/blob.svg)",
                    backgroundSize: "90% 90%",
                  }}
                >
                  <span className="text-form text-[1rem] text-white whitespace-nowrap">Скопировано!</span>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => copyToClipboard(EMAIL, "email")}
              className="max-w-full hover:scale-102 transition-transform cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex flex-col sm:flex-row leading-6"
              title="Копировать почту"
            >
              <span>{EMAIL}</span>
              <span>{EMAIL_AT}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 flex-1 order-2 xl:order-1 text-main text-[1.3rem]">
        <p className="text-primary text-main xl:max-w-175 sm:whitespace-pre-wrap"> 
          {"Интересует сотрудничество с нами?\nОбращайтесь"} <a href={FORM_LINK} target="_blank" title="Форма обратной связи" className="underline hover:text-white">сюда</a>
        </p>
        <nav className="flex flex-col items-center gap-6 whitespace-nowrap text-white sm:max-w-[758px] sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <a href="/#home" className="hidden sm:block shrink-0 w-[clamp(156px,12vw,212px)]">
            <Image
              src="/svg/Logo_white.svg"
              alt="Логотип"
              width={212}
              height={138}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </a>
          <div className="flex w-full justify-center gap-8 sm:contents">
            <a
              href="/#about"
              className="hover-underline-animation"
              style={{ "--underline-color": "white" } as React.CSSProperties}
            >
              О нас
            </a>
            <a
              href="/#projects"
              className="hover-underline-animation"
              style={{ "--underline-color": "white" } as React.CSSProperties}
            >
              Проекты
            </a>
          </div>
        </nav>
        <div className="flex flex-row justify-between place-items-center">
          <p className="text-white text-form">© Лаборатория, {new Date().getFullYear()}</p>
          <a href="/#home" className="block sm:hidden shrink-0">
            <Image
              src="/svg/logomark.svg"
              alt="Логотип"
              width={50}
              height={50}
              className="h-auto w-12"
              priority
              unoptimized
            />
          </a>
        </div>
      </div>
    </section>
  );
};
