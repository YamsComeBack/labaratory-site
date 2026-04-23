"use client";

import { useState } from "react";
import Image from "next/image";

import { useMuteVideo } from "@/hooks/useMuteVideo";
import { useScrolled } from "@/hooks/useScrolled";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

const navItems = [
  { name: "главная", href: "/#home" },
  { name: "о нас", href: "/#about" },
  { name: "проекты", href: "/#projects" },
  { name: "командос", href: "/#team" },
  { name: "контакты", href: "/#contacts" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { muted, toggleMuted } = useMuteVideo("bg-video");
  const isScrolled = useScrolled();
  useBodyScrollLock(menuOpen);

  return (
    <>
      <header
        data-site-header
        className={`fixed inset-x-0 top-0 z-50 h-[69px] transition-colors ${
          isScrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between px-[clamp(40px,4vw,160px)]">
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
            className="h-[60px] w-[60px]"
          >
            <Image
              src={muted ? "/svg/Header/din-off.svg" : "/svg/Header/din-on.svg"}
              alt=""
              width={60}
              height={60}
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
              src="/svg/Header/burger-on.svg"
              alt=""
              width={40}
              height={40}
              priority
              unoptimized
            />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-1/2 max-w-[320px] bg-black transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-end px-[clamp(40px,calc(-137px+23.07vw),195px)]">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Закрыть меню"
            className="pt-6"
          >
            <Image
              src="/svg/Header/burger-off.svg"
              alt=""
              width={40}
              height={40}
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
              priority
              unoptimized
            />
          </div>
        </div>
      </aside>
    </>
  );
};
