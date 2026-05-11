"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PHONE = "+7 (962)-444-98-96";
const EMAIL = "laboratory_media_design@mail.ru";

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
    <section className="flex flex-col xl:flex-row items-start gap-14 w-full bg-black pb-11 px-[clamp(40px,calc(-137px+23.07vw),195px)] xl:px-[clamp(50px,6vw,112px)]">
      <div className="relative w-[115%] sm:w-2xl translate-[-30px] sm:translate-0 inline-block order-1 xl:order-2 shrink-0 overflow-visible">
        <Image
          src="/svg/Footer/Star.svg"
          alt="star"
          width={646}
          height={331}
          className="h-auto w-full"
          priority
          unoptimized
        />
        <div className="absolute inset-0 mx-auto flex max-w-[min(720px,calc(100%-32px))] flex-col items-center justify-center gap-1 overflow-visible px-2 pb-4 text-center font-[roboto] text-[1.4rem] sm:text-[30px] text-black">
          <div className="relative inline-block">
            {copied === "phone" && (
              <div
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2"
                role="status"
                aria-live="polite"
              >
                <div
                  className="inline-flex min-h-[80px] w-max max-w-[min(340px,calc(100vw-48px))] items-center justify-center bg-center bg-no-repeat px-14 py-4"
                  style={{
                    backgroundImage: "url(/svg/Footer/blob.svg)",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <span className="text-form text-white whitespace-nowrap">Скопировано!</span>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => copyToClipboard(PHONE, "phone")}
              className="max-w-full cursor-pointer whitespace-nowrap rounded-sm hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
                  className="inline-flex min-h-[80px] w-max max-w-[min(340px,calc(100vw-48px))] items-center justify-center bg-center bg-no-repeat px-14 py-4"
                  style={{
                    backgroundImage: "url(/svg/Footer/blob.svg)",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <span className="text-form text-white whitespace-nowrap">Скопировано!</span>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => copyToClipboard(EMAIL, "email")}
              className="max-w-full cursor-pointer whitespace-nowrap rounded-sm hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {EMAIL}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 flex-1 order-2 xl:order-1">
        <p className="text-primary text-main xl:max-w-[758px]">
          Интересует сотрудничество или обучение с нами? Обращайтесь сюда
        </p>
        <nav className="flex flex-col items-start gap-6 whitespace-nowrap text-main text-white sm:max-w-[758px] sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <a href="#home" className="shrink-0 w-[clamp(156px,12vw,212px)]">
            <Image
              src="/svg/Logo_white.svg"
              alt="logo"
              width={212}
              height={138}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </a>
          <div className="flex items-center gap-8 sm:contents">
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
          </div>
        </nav>
        <p className="text-white text-form">© Лаборатория, {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};
