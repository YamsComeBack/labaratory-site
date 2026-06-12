"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const topSliderImages = [
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-40.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-37.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-58-22.jpg",
  "/images/projects/_content/tabletop_game/top/photo_2026-05-11_14-57-36.jpg",
  "/images/projects/_content/tabletop_game/top/NCFU9172.jpg",
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

const sliderDuration = 10000;
const normalPlaybackRate = 0.5;
const slowPlaybackRate = 0.25;
const baseCardWidth = "20%";
const baseCardHeight = "20%";
const expandedCardWidth = "25%";
const expandedCardHeight = "25%";

type SliderRowProps = {
  images: string[];
  reverse?: boolean;
  sectionName: "top" | "bottom";
};

const SliderRow = ({ images, reverse = false, sectionName }: SliderRowProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<Animation | null>(null);
  const [trackDistance, setTrackDistance] = useState<number>(0);
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

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateDistance = () => {
      if (!trackRef.current) {
        return;
      }

      const distance = trackRef.current.scrollWidth / 2;
      setTrackDistance(distance);
    };

    updateDistance();
    window.addEventListener("resize", updateDistance);

    return () => {
      window.removeEventListener("resize", updateDistance);
    };
  }, [images.length]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || trackDistance <= 0) {
      return;
    }

    const currentTime = animationRef.current?.currentTime ?? 0;
    animationRef.current?.cancel();

    const animation = track.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${trackDistance}px)` },
      ],
      {
        duration: sliderDuration,
        easing: "linear",
        iterations: Infinity,
        direction: reverse ? "reverse" : "normal",
      },
    );

    animation.currentTime = currentTime;
    animationRef.current = animation;
    setPlaybackRate(normalPlaybackRate);

    return () => animation.cancel();
  }, [trackDistance, reverse]);

  const handleCardMouseEnter = (index: number) => {
    setHoveredCardIndex(index);
    setPlaybackRate(slowPlaybackRate);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
    setPlaybackRate(normalPlaybackRate);
  };

  return (
    <div className="relative z-10 flex h-[30vw] w-full items-center overflow-hidden">
      <div
        ref={trackRef}
        className="flex items-center h-[185%] gap-[1%] w-max"
      >
        {[...images, ...images].map((src, index) => {
          const isHovered = hoveredCardIndex === index;

          return (
            <div
              key={`${sectionName}-${src}-${index}`}
              className={`relative h-full shrink-0 overflow-hidden rounded-[clamp(8px,0.65vw,12px)] transition-transform duration-300 ease-out ${isHovered ? "z-30" : "z-10"}`}
              style={{
                width: baseCardWidth,
                height: baseCardHeight,
                transform: isHovered ? "scale(1.25)" : "scale(1)",
                transformOrigin: "center center",
              }}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <Image
                src={src}
                alt={`Фотография турнира ${index + 1}`}
                width={762}
                height={426}
                className="object-cover"
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
    <div className="mb-[10%] sm:mb-0 max-w-none">
      <div className="relative z-10 max-w-none" style={{ aspectRatio:"1920/1308" }}>
        <Image 
          src="/images/projects/_content/tabletop_game/tt1.png"
          alt=""
          fill
          className="w-full"
        />
        <div className="translate-y-[300%] z-10 overflow-visible mb-[-20%] max-w-none">
          <h1 className="w-[25%] ml-[15%] mt-[6%] leading-[100%] absolute text-title text-[2.5vw]">
            Настольная игра «Легенды Кавказа. Эхо древних гор»
          </h1>
          <p className="w-[35%] ml-[50%] mt-[6.5%] absolute text-main text-[1.3vw] leading-[110%]">
            Проект-победитель грантового конкурса Росмолодёжи. Мы придумали механику, историю и визуальный язык игры — получился атмосферный мир, в котором сочетаются легенды, культура и азарт.
          </p>
          <img
            src="/images/projects/_content/tabletop_game/Vector-head.svg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="relative z-1 w-full h-full mt-[8vw]" style={{ aspectRatio:"1920/1106" }}>
        <Image 
          src="/images/projects/_content/tabletop_game/tt2.png"
          alt=""
          fill
          className="w-full aspect-video"
        />
      </div>
      <div className="bg-[#142458]">
        <div className="relative max-w-none" style={{ aspectRatio:"1920/1008" }}>
          <Image 
            src="/images/projects/_content/tabletop_game/tt3.png"
            alt=""
            fill
            className="w-full"
          />
        </div>
        <div className="relative" style={{ aspectRatio:"1920/1137" }}>
          <Image 
            src="/images/projects/_content/tabletop_game/tt4.png"
            alt=""
            fill
            className="w-full"
          />
        </div>
        <div className="relative" style={{ aspectRatio:"1920/1226" }}>
          <Image 
            src="/images/projects/_content/tabletop_game/tt5.png"
            alt=""
            fill
            className="w-full"
          />
        </div>
      </div>
      <div className="relative" style={{ aspectRatio:"1920/1080" }}>
        <Image 
          src="/images/projects/_content/tabletop_game/tt6.png"
          alt=""
          fill
          className="w-full"
        />
      </div>
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative mx-auto flex w-full flex-col gap-[140] z-2">
          <SliderRow images={topSliderImages} sectionName="top" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex w-[60%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Image
              src="/images/projects/_content/tabletop_game/Vector.svg"
              alt=""
              width={1086}
              height={1086}
              className="h-auto w-full"
              priority
              unoptimized
            />
            <p className="text-main-2 text-[1.2vw] absolute z-1 mx-auto w-[45vw] text-center text-black whitespace-pre-line">
              {mainText}
            </p>
          </div>

          <SliderRow images={bottomSliderImages} reverse sectionName="bottom" />
        </div>
      </section>
    </div>
  );
};
