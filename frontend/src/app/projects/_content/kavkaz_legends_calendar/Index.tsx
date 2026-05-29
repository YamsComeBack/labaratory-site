"use client";

import Image from "next/legacy/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";

const slides = [
  "/images/projects/_content/calendar/slider/kalendar_01.png",
  "/images/projects/_content/calendar/slider/kalendar_02.png",
  "/images/projects/_content/calendar/slider/kalendar_03.png",
  "/images/projects/_content/calendar/slider/kalendar_04.png",
  "/images/projects/_content/calendar/slider/kalendar_05.png",
  "/images/projects/_content/calendar/slider/kalendar_06.png",
  "/images/projects/_content/calendar/slider/kalendar_07.png",
  "/images/projects/_content/calendar/slider/kalendar_08.png",
  "/images/projects/_content/calendar/slider/kalendar_09.png",
  "/images/projects/_content/calendar/slider/kalendar_10.png",
  "/images/projects/_content/calendar/slider/kalendar_11.png",
  "/images/projects/_content/calendar/slider/kalendar_12.png",
];

const sourceSlideWidth = 6559;
const sourceSlideHeight = 2792;
const designWidth = 1920;
const designArrowSize = 72;
const designArrowOffset = 22;
const arrowSizePercent = (designArrowSize / designWidth) * 100;
const arrowOffsetPercent = (designArrowOffset / designWidth) * 100;

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
      <section className="bg-gray-900 w-lvw aspect-video" >
        <h1>hello</h1>
      </section>
      <section className="w-lvw aspect-video overflow-hidden bg-[#293766]">
        <div className="relative w-full h-full">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Предыдущий слайд"
            className="absolute top-1/2 ml-4 md:ml-15 z-10 -translate-y-1/2 cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4e300] focus-visible:ring-offset-2 focus-visible:ring-offset-[#293766]"
            style={{
              left: `${arrowOffsetPercent}%`,
              width: `${arrowSizePercent}%`,
            }}
          >
            <Image
              src="/images/projects/_content/calendar/slider/svg/slider_left.svg"
              alt=""
              width={72}
              height={72}
              className="h-auto w-full"
              unoptimized
            />
          </button>

          <div
            className="relative w-full h-full overflow-hidden touch-pan-y"
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

          <button
            type="button"
            onClick={goNext}
            aria-label="Следующий слайд"
            className="absolute top-1/2 mr-4 md:mr-15 z-10 -translate-y-1/2 cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4e300] focus-visible:ring-offset-2 focus-visible:ring-offset-[#293766]"
            style={{
              right: `${arrowOffsetPercent}%`,
              width: `${arrowSizePercent}%`,
            }}
          >
            <Image
              src="/images/projects/_content/calendar/slider/svg/slider_right.svg"
              alt=""
              width={72}
              height={72}
              className="h-auto w-full"
              unoptimized
            />
          </button>
        </div>
      </section>
    </>
  );
};
