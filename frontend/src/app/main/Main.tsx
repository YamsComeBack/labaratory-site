"use client";

import React from "react";

export const Main = () => {
  return (
    <section id="home" className="relative w-full z-1 mb-[-60%]">
      <div className="h-fit w-full bg-(--color-primary)" style={{ aspectRatio:1920/1080 }}>
        <video
          id="bg-video"
          src="/_next-video/lab-video.mp4"
          className="relative z-0 block h-auto w-full max-w-none"
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
      <div className="z-2 mt-[-8%] mb-[50%]">
        <img
          src="/svg/main/Wave-top.svg"
          width={1000}
          height={1000}
          className="scale-250 shrink-0 w-fit"
          loading="eager"
        />
        <div className="bg-(--color-primary) py-[5%] my-[3%]">
          <p className="w-fit lg:w-[70vw] h-auto px-[7%] pt-[5%] text-main text-left whitespace-pre-line">
            {`Лаборатория – это концентрат дизайна и медиа будущего. Здесь мы учимся на реальных кейсах в реальном времени, а тьюторы и кураторы задают работе правильное направление, делятся ценным опытом и секретами профессионального сообщества.`}
          </p>
        </div>
        <img
          src="/svg/main/Wave-bottom.svg"
          width={1000}
          height={1000}
          className="h-auto w-fit scale-250 shrink-0"
          loading="eager"
        />
      </div>
    </section>
  );
};
