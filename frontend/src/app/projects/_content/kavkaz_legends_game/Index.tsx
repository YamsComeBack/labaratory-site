"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const topSliderImages = [
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-40.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-37.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-58-22.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-36.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-21.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-58-47.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-18.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-31.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-35.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-58-17.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-58-37.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-33.jpg",
];

const bottomSliderImages = [
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-30.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-36.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-43.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-00.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-57-08.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-28.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-57-16.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-18.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-57-11.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-17.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-37.jpg",
  "/images/projects/_content/tabletop_game/bottom/photo_2026-05-11_14-56-41.jpg",
];

const mainText = `Наша команда провела турниры в семи республиках Северного\n Кавказа, показав нашу игру и зарядив всех позитивными\n эмоциями. В каждой республике мы оставили по одному комплекту\n настольной игры, чтобы участники могли продолжать проводить\n турниры на своих площадках.`;

const sliderDuration = 28000;
const normalPlaybackRate = 1;
const slowPlaybackRate = 1 / 3;
const baseCardWidth = "clamp(190px, 16vw, 310px)";
const baseCardHeight = "clamp(106px, 9vw, 174px)";
const expandedCardWidth = "clamp(228px, 19.2vw, 372px)";
const expandedCardHeight = "clamp(127px, 10.8vw, 209px)";

type SliderRowProps = {
  images: string[];
  reverse?: boolean;
  sectionName: "top" | "bottom";
};

const SliderRow = ({ images, reverse = false, sectionName }: SliderRowProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<Animation | null>(null);
  const initRafRef = useRef<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const setPlaybackRate = (rate: number) => {
    const animation = animationRef.current;

    if (!animation) {
      return;
    }

    if (typeof animation.updatePlaybackRate === "function") {
      animation.updatePlaybackRate(rate);
      return;
    }

    animation.playbackRate = rate;
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const resolveAnimation = () => {
      const animation = track.getAnimations().find(
        (candidate): candidate is CSSAnimation =>
          candidate instanceof CSSAnimation && candidate.animationName === "slider-scroll",
      );

      if (animation) {
        animationRef.current = animation;
        setPlaybackRate(normalPlaybackRate);
        return;
      }

      initRafRef.current = window.requestAnimationFrame(resolveAnimation);
    };

    resolveAnimation();

    return () => {
      if (initRafRef.current !== null) {
        window.cancelAnimationFrame(initRafRef.current);
      }
    };
  }, []);

  const handleRowMouseEnter = () => {
    setPlaybackRate(slowPlaybackRate);
  };

  const handleRowMouseLeave = () => {
    setPlaybackRate(normalPlaybackRate);
    setHoveredCardIndex(null);
  };

  return (
    <div
      className="relative z-10 flex h-[clamp(127px,10.8vw,209px)] w-full items-center overflow-hidden"
      onMouseEnter={handleRowMouseEnter}
      onMouseLeave={handleRowMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-[clamp(8px,1.1vw,20px)] animate-slider-scroll"
        style={{
          animationDuration: `${sliderDuration}ms`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...images, ...images].map((src, index) => {
          const isHovered = hoveredCardIndex === index;

          return (
            <div
              key={`${sectionName}-${src}-${index}`}
              className={`relative shrink-0 overflow-hidden rounded-[clamp(8px,0.65vw,12px)] transition-[width,height] duration-300 ease-out ${isHovered ? "z-30" : "z-10"}`}
              style={{
                width: isHovered ? expandedCardWidth : baseCardWidth,
                height: isHovered ? expandedCardHeight : baseCardHeight,
              }}
              onMouseEnter={() => setHoveredCardIndex(index)}
            >
              <Image
                src={src}
                alt={`Фотография турнира ${index + 1}`}
                width={762}
                height={426}
                className="h-full w-full object-cover"
                priority={index < 6}
                unoptimized
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const KavkazLegendsGameProject = () => {
  return (
    <section className="w-full h-250 overflow-hidden bg-white py-[clamp(42px,4.5vw,86px)]">
      <div className="relative mx-auto flex w-full flex-col gap-[300px] mt-13 z-2">
        <SliderRow images={topSliderImages} sectionName="top" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex w-[48%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Image
            src="/images/projects/_content/tabletop_game/Vector.svg"
            alt=""
            width={1086}
            height={1086}
            className="h-auto w-full"
            priority
            unoptimized
          />
          <p className="text-main-2 absolute z-1 mx-auto w-[clamp(370px,39vw,760px)] text-center text-black whitespace-pre-line">
            {mainText}
          </p>
        </div>

        <SliderRow images={bottomSliderImages} reverse sectionName="bottom" />
      </div>
    </section>
  );
};
