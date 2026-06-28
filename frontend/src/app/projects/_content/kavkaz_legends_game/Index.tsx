"use client";

import Image from "next/image";
import SliderArrow from "@/components/ui/SliderArrow";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const topSliderImages = [
  "/images/projects/_content/tabletop_game/top/1.webp",
  "/images/projects/_content/tabletop_game/top/2.webp",
  "/images/projects/_content/tabletop_game/top/3.webp",
  "/images/projects/_content/tabletop_game/top/4.webp",
  "/images/projects/_content/tabletop_game/top/5.webp",
  "/images/projects/_content/tabletop_game/top/6.webp",
  "/images/projects/_content/tabletop_game/top/7.webp",
  "/images/projects/_content/tabletop_game/top/8.webp",
  "/images/projects/_content/tabletop_game/top/9.webp",
  "/images/projects/_content/tabletop_game/top/10.webp",
  "/images/projects/_content/tabletop_game/top/11.webp",
  "/images/projects/_content/tabletop_game/top/12.webp",
];

const bottomSliderImages = [
  "/images/projects/_content/tabletop_game/bottom/1.webp",
  "/images/projects/_content/tabletop_game/bottom/2.webp",
  "/images/projects/_content/tabletop_game/bottom/3.webp",
  "/images/projects/_content/tabletop_game/bottom/4.webp",
  "/images/projects/_content/tabletop_game/bottom/5.webp",
  "/images/projects/_content/tabletop_game/bottom/6.webp",
  "/images/projects/_content/tabletop_game/bottom/7.webp",
  "/images/projects/_content/tabletop_game/bottom/8.webp",
  "/images/projects/_content/tabletop_game/bottom/9.webp",
  "/images/projects/_content/tabletop_game/bottom/10.webp",
  "/images/projects/_content/tabletop_game/bottom/11.webp",
  "/images/projects/_content/tabletop_game/bottom/12.webp",
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
  const slides = [
    "/images/projects/_content/tabletop_game/slider/1.webp",
    "/images/projects/_content/tabletop_game/slider/2.webp",
    "/images/projects/_content/tabletop_game/slider/3.webp",
    "/images/projects/_content/tabletop_game/slider/4.webp",
    "/images/projects/_content/tabletop_game/slider/5.webp",
    "/images/projects/_content/tabletop_game/slider/6.webp",
    "/images/projects/_content/tabletop_game/slider/7.webp",
  ]
  const totalSlides = slides.length;
  const currentIndex = useRef<number>(0)
  const [currentSlidePath, setCurrentSlidePath] = useState(slides[currentIndex.current]);
  console.log('TOTAL', totalSlides)

  const goPrev = () => {
    console.log('go prev')
    if(currentIndex.current !== 0){
      currentIndex.current -= 1
    }
    else{
      currentIndex.current = totalSlides - 1;
    };
    setCurrentSlidePath(slides[currentIndex.current])
  }
  const goNext = () => {
    console.log('go next')
    if(currentIndex.current !== (totalSlides - 1)){
      currentIndex.current += 1;
    }
    else{
      currentIndex.current = 0;
    };
    setCurrentSlidePath(slides[currentIndex.current])
  }

  return (
    <div className="max-w-none">
      <div className="relative z-10 max-w-none">
        <div className="relative z-10 max-w-none" style={{ aspectRatio:"5830/3487" }}>
          <Image 
            src="/images/projects/_content/tabletop_game/tt1.webp"
            alt=""
            fill
            className="w-full"
            priority
            unoptimized
          />
        </div>
        <div className="absolute translate-y-[-34%] z-10 overflow-visible mb-[-20%] w-full max-w-none">
          <h1 className="w-[25%] ml-[15%] mt-[6%] leading-[100%] absolute text-title text-[2.5vw]">
            Настольная игра «Легенды Кавказа. Эхо древних гор»
          </h1>
          <p className="w-[35%] ml-[50%] mt-[6.5%] absolute text-main text-[1.3vw] leading-[120%]">
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
          src="/images/projects/_content/tabletop_game/tt2.webp"
          alt=""
          fill
          className="w-full aspect-video"
          unoptimized
        />
      </div>
      <div className="bg-[#142458]">
        <div className="relative max-w-none" style={{ aspectRatio:"1920/1008" }}>
          <Image 
            src="/images/projects/_content/tabletop_game/tt3.webp"
            alt=""
            fill
            className="w-full"
            unoptimized
          />
        </div>
        <div className="relative" style={{ aspectRatio:"1920/1137" }}>
          <Image 
            src="/images/projects/_content/tabletop_game/tt4.webp"
            alt=""
            fill
            className="w-full"
            unoptimized
          />
        </div>
        <div className="relative" style={{ aspectRatio:"1920/1226" }}>
          <Image 
            src="/images/projects/_content/tabletop_game/tt5.webp"
            alt=""
            fill
            className="w-full"
            unoptimized
          />
        </div>
      </div>
      <div className="relative" style={{ aspectRatio:"1920/1080" }}>
        <Image 
          src="/images/projects/_content/tabletop_game/tt6.webp"
          alt=""
          fill
          className="w-full"
          unoptimized
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
      <div className="relative" style={{ aspectRatio:"6000/4000" }}>
        {/* <div className="absolute z-30 mt-[2vw] w-[30vw] h-[15vw] rounded-r-[17px] bg-white/10 backdrop:saturate-100 backdrop-blur-md transition-colors"> */}
        <div className="absolute z-30 mt-[2vw] w-[30vw] h-[15vw] rounded-r-[17px] bg-(--color-primary)">
          <p className="w-[20vw] ml-[5vw] mt-[3.7vw] absolute text-main text-[1.3vw] leading-[110%]">
            Специально для этого проекта Лаборатория организовала профессиональную фотосессию вместе с фотографом Ильёй Хачатуряном в тематике игры.
          </p>
        </div>
        <SliderArrow direction="left" onClick={goPrev}></SliderArrow>
        <Image 
          src={ currentSlidePath }
          alt=""
          fill
          className="w-full"
          priority={currentIndex.current === 1}
          loading="eager"
          unoptimized
        />
        <SliderArrow direction="right" onClick={goNext}></SliderArrow>
      </div>
    </div>
  );
};
