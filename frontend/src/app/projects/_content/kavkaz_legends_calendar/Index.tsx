"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import SliderArrow from "@/components/ui/SliderArrow";

const slides = [
  "/images/projects/_content/tabletop_calendar/slider/kalendar_01.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_02.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_03.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_04.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_05.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_06.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_07.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_08.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_09.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_10.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_11.webp",
  "/images/projects/_content/tabletop_calendar/slider/kalendar_12.webp",
];

const sourceSlideWidth = 6559;
const sourceSlideHeight = 2792;

export const KavkazLegendsCalendarProject = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offsetPercent, setOffsetPercent] = useState(-100);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = slides.length;
  const touchStartXRef = useRef<number | null>(null);
  const preloadedImagesRef = useRef<HTMLImageElement[]>([]);
  const swipeThreshold = 48;

  useEffect(() => {
    const preload = async () => {
      const loaded = await Promise.all(
        slides.map(async (src) => {
          const img = new window.Image();
          img.src = src;
          try {
            await img.decode();
          } catch {
            // decode can fail for cached cross-browser cases; src assignment still preloads
          }
          return img;
        }),
      );

      preloadedImagesRef.current = loaded;
    };

    void preload();
  }, []);

  const startSlide = (direction: "prev" | "next") => {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    setOffsetPercent(direction === "next" ? -200 : 0);
  };

  const goPrev = () => {
    startSlide("prev");
  };

  const goNext = () => {
    startSlide("next");
  };

  const handleTransitionEnd = () => {
    if (!isTransitioning) {
      return;
    }

    if (offsetPercent === -200) {
      setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    } else if (offsetPercent === 0) {
      setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    }

    setIsTransitioning(false);
    setOffsetPercent(-100);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touchStartX = touchStartXRef.current;

    if (touchStartX === null || isTransitioning) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) < swipeThreshold) {
      touchStartXRef.current = null;
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goPrev();
    }

    touchStartXRef.current = null;
  };

  const prevIndex = activeIndex === 0 ? totalSlides - 1 : activeIndex - 1;
  const nextIndex = activeIndex === totalSlides - 1 ? 0 : activeIndex + 1;

  return (
    <>
      <div className="relative" style={{ aspectRatio:"1920/1090" }}>
        <Image
          src="/images/projects/_content/tabletop_calendar/ttc1.webp"
          alt=""
          className="w-full"
          fill
        />
        <div className="absolute right-0">
          <h1 className="z-30 w-[70%] ml-[15vw] top-[23vw] leading-[100%] absolute text-title text-[2.5vw]">
            Календарь по мотивам игры «Легенды Кавказа» 
          </h1>
          <p className="z-30 w-[60%] ml-[15vw] top-[29vw] leading-[110%] absolute text-main text-[1.3vw]">
            В его визуальном решении мы опирались на уже сформированный стиль проекта: использовали фотографии с тематической фотосессии от Ильи Хачатуряна, а также фирменные шрифты и кавказские орнаменты в цветах игры, формирующие цельный и выразительный образ.
          </p>
          <img
            src="/images/projects/_content/tabletop_calendar/Vector.svg"
            alt=""
            width={1000}
            height={1000}
            className="z-20 w-[55vw] translate-y-[8vw]"
          />
        </div>
      </div>
      <div className="relative max-w-none" style={{ aspectRatio:"1920/2004"}}>
        <Image
          src="/images/projects/_content/tabletop_calendar/ttc2.jpg"
          alt=""
          className="z-1 w-full"
          fill
        />
      </div>
      <div className="relative max-w-none" style={{ aspectRatio:"1920/1080"}}>
        <Image
          src="/images/projects/_content/tabletop_calendar/ttc3.webp"
          alt=""
          className="w-full"
          fill
        />
      </div>
      <section className="w-lvw aspect-video overflow-hidden bg-[#293766]">
        <div className="relative w-full h-full">
          <SliderArrow direction="left" onClick={goPrev}></SliderArrow>
          <div
            className="relative z-1 w-full h-full overflow-hidden touch-pan-y"
            style={{ aspectRatio: `${sourceSlideWidth} / ${sourceSlideHeight}` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex h-full"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translate3d(${offsetPercent}%, 0, 0)`,
                transition: isTransitioning ? "transform 360ms ease" : "none",
                willChange: "transform",
              }}
            >
              {[slides[prevIndex], slides[activeIndex], slides[nextIndex]].map((src, idx) => (
                <div key={`${src}-${idx}`} className="flex h-full w-full shrink-0 justify-center">
                  <div className="relative w-full max-w-none shrink-0">
                    <Image
                      src={src}
                      alt={`Слайд календаря ${idx === 0 ? prevIndex + 1 : idx === 1 ? activeIndex + 1 : nextIndex + 1}`}
                      layout="fill"
                      className="block scale-130 object-contain"
                      priority={idx === 1}
                      loading="eager"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SliderArrow direction="right" onClick={goNext}></SliderArrow>
        </div>
      </section>
      <div className="relative max-w-none" style={{ aspectRatio:"1920/1080"}}>
        <Image
          src="/images/projects/_content/tabletop_calendar/ttc5.webp"
          alt=""
          className="w-full"
          fill
        />
      </div>
    </>
  );
};
