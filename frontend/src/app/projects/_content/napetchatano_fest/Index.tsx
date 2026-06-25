"use client";

import { useMuteVideo } from "@/hooks/useMuteVideo";
import Image from "next/image";

const FEST_VIDEO_ID = "napetchatano-fest-video";
const FEST_VIDEO_SRC = "/_next-video/fest-video.mp4";

export const NapetchatanoFestProject = () => {
  const { muted } = useMuteVideo(FEST_VIDEO_ID, true);
  const images = [
    "/images/projects/_content/print_fest/fest3.webp",
    "/images/projects/_content/print_fest/fest4.webp",
    "/images/projects/_content/print_fest/fest5.webp",
    "/images/projects/_content/print_fest/fest6.webp",
    "/images/projects/_content/print_fest/fest7.webp",
    "/images/projects/_content/print_fest/fest8.webp",
    "/images/projects/_content/print_fest/fest9.webp",
  ];

  return (
    <div className="w-full bg-black">
      <div className="relative max-w-none" style={{ aspectRatio:"1920/1080" }}>
        <h1 className="absolute z-30 w-[25vw] ml-[16vw] mt-[32vw] leading-[100%] text-title text-[2.5vw]">
          Арт-фестиваль «Напечатано!»
        </h1>
        <p className="absolute z-30 w-[40vw] ml-[16vw] mt-[38vw] text-main text-[1.3vw] leading-[120%] whitespace-pre-wrap">
          {"В Парке культуры мы провели\nфестиваль печати: разработали\nайдентику, подготовили серию\nпринтов и полностью организовали\nсобытие. Музыкальное настроение\nфестиваля создавала группа «Ноги»."}
        </p>
        <img
          src="/images/projects/_content/print_fest/Vector.svg"
          alt=""
          className="absolute z-10 h-full w-[45vw] mt-[12vw] ml-[4vw]"
        />
        <Image
          src="/images/projects/_content/print_fest/fest1.png"
          alt=""
          fill
          className="block z-0 h-auto w-full"
        />
      </div>
      <div className="mx-auto w-full max-w-480">
        <video
          id={FEST_VIDEO_ID}
          src={FEST_VIDEO_SRC}
          className="block h-auto w-full"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="metadata"
        />
      </div>
      {images.map((src, i) => (
        <div key={i} className="w-full">
          <img src={src} alt={`Навигация ${i + 2}`} className="block h-auto w-full" />
        </div>
      ))}
    </div>
  );
};
