"use client";

import { useState } from "react";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import { useMuteVideo } from "@/hooks/useMuteVideo";
import { useScrolled } from "@/hooks/useScrolled";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

const navItems = [
  { name: "главная", href: "/#home" },
  { name: "о нас", href: "/#about" },
  { name: "проекты", href: "/#projects" },
  { name: "командос", href: "/#team" },
  { name: "контакты", href: "/#footer" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const { muted, toggleMuted } = useMuteVideo(["bg-video", "napetchatano-fest-video"]);
  const isScrolled = useScrolled();
  useBodyScrollLock(menuOpen);
  const isMainPage = pathname === "/";
  // const headerBgClass = isMainPage && !isScrolled ? "bg-transparent" : "bg-primary";

  return (
    <div>
        <header
          data-site-header
          className={`
            fixed
            left-0
            right-0
            z-50
            h-9
            w-full
            max-w-full
            transition-colors
            backdrop-blur-md
            backdrop-saturate-100
            pt-[env(safe-area-inset-top)]
            bg-white/10`}
        >
          <div className="mx-auto flex h-full w-full items-center text-black justify-between px-[clamp(40px,4vw,160px)]">
            <nav className="mx-auto hidden items-center gap-[clamp(16px,calc(13.89vw-90.67px),176px)] whitespace-nowrap md:flex">
              {navItems.map(({ href, name }) => (
                <a
                  key={href}
                  href={href}
                  className="text-form-2 hover-underline-animation"
                  style={{ "--underline-color": "black" } as React.CSSProperties}
                >
                  {name}
                </a>
              ))}
            </nav>
            <button
              onClick={toggleMuted}
              aria-label={muted ? "Включить звук" : "Выключить звук"}
              className="h-18 w-18 sm:h-14 sm:w-14 translate-x-[-30px] border-none outline-none cursor-pointer"
            >
              <Image
                src={muted ? "/svg/header/din-off.svg" : "/svg/header/din-on.svg"}
                alt=""
                width={90}
                height={90}
                className="h-[90px] w-auto outline-0"
                priority
                unoptimized
              />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden"
              aria-label="Открыть меню"
            >
              <Image
                src="/svg/header/burger-on.svg"
                alt=""
                width={25}
                height={25}
                className="h-3 w-auto translate-y-0.5"
                priority
                unoptimized
              />
            </button>
          </div>
        </header>
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 h-dvh w-full bg-black/60 md:hidden"
          />
        )}
        {menuOpen && (
          <aside
            className="fixed inset-0 z-50 flex h-dvh w-full justify-end md:hidden"
          >
            <div
              data-mobile-menu
              className="flex h-full w-1/2 max-w-[320px] flex-col items-end bg-black px-[clamp(40px,calc(-137px+23.07vw),195px)]"
            >
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Закрыть меню"
                className="pt-6"
              >
                <Image
                  src="/svg/header/burger-off.svg"
                  alt=""
                  width={25}
                  height={25}
                  className="h-10 w-auto"
                  priority
                  unoptimized
                />
              </button>

              <nav className="mt-12 flex flex-col items-end gap-12.5">
                {navItems.map(({ href, name }) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                    <span className="text-form-2 text-white">{name}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-auto mb-8 flex justify-center">
                <Image
                  src="/svg/Logo_white.svg"
                  alt="logo"
                  width={157}
                  height={102}
                  className="h-auto w-[157px]"
                  priority
                  unoptimized
                />
              </div>
          </div>
          </aside>
        )}
    </div>
  );
};
