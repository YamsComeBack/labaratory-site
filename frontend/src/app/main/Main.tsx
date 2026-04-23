"use client";

import React from "react";

export const Main = () => {
  return (
    <section id="home" className="relative w-full">
      <video
        id="bg-video"
        src="/_next-video/lab-video.mp4"
        className="z-[1]"
        muted
        autoPlay
        loop
        playsInline
      />
      <div className="relative flex items-center -mt-[clamp(88px,16vw,228px)] z-[2] bg-[url('/svg/Main/Wave.svg')] bg-no-repeat bg-cover bg-bottom">
        <div className=" grid place-items-center w-full max-w-[1530px] 
          h-[clamp(682px,calc(593px+11.61vw),760px)]
          px-[clamp(40px,calc(-137px+23.07vw),195px)]
          pt-[clamp(145px,calc(431px-13.54vw),236px)] 
          pb-[clamp(121px,calc(272px-7.14vw),169px)]"
        >
          <p className="max-w-[1080px] w-full text-main text-left whitespace-pre-line">
            {`Лаборатория – это концентрат дизайна и медиа будущего. Здесь мы учимся на реальных кейсах в реальном времени, а тьюторы и кураторы задают работе правильное направление, делятся ценным опытом и секретами профессионального сообщества.`}
          </p>
        </div>
      </div>
    </section>
  );
};
