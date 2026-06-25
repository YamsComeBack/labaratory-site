"use client";

import Image from "next/image";

export const CalendarProject = () => {

  return (
    <div className="w-full">
      <section className="relative w-full" style={{ aspectRatio: 3840/2568 }}>
        <div className="absolute bottom-[-8%] left-0 z-10 w-full translate-y-1/2">
          <div className="relative">
            <img
              src="/images/projects/_content/calendar/vector.svg"
              className="h-auto w-full"
            />
            <div className="absolute w-full flex inset-y-0">
              <h1 className="mx-auto my-auto leading-[100%] text-title text-[2.5vw]">
                Корпоративные календари СКФУ 2024
              </h1>
            </div>
          </div>
        </div>
        <Image
          src="/images/projects/_content/calendar/calendar1.webp"
          alt="Корпоративные календари СКФУ 2024"
          fill
          className="block h-auto w-full"
          priority
          unoptimized
        />
      </section>
      <div className="relative w-full mt-[5.5vw]" style={{ aspectRatio: 1920/1255}}>
        <p className="absolute z-30 w-[40vw] ml-[37vw] mt-[53vw] text-main text-[1.0vw] leading-[120%] whitespace-pre-wrap">
          {"Концепция календарей заключается\nв позиционировании университета\nкак прогрессивного учебного заведения, готового\nк коммуникации на разных уровнях. В результате\nработы над проектом мы разработали три\nсамостоятельных варианта, направленных\nна коммуникацию как в формальном,\nтак и в непринужденном стиле. "}
        </p>
        <p className="absolute z-30 w-[23vw] right-0 mr-[7.4vw] mt-[53vw] text-main text-[1.0vw] leading-[120%] whitespace-pre-wrap">
          {"Календари раскрывают многообразие и разносторонность университетской жизни, представляют известных личностей и студентов СКФУ."}
        </p>
        <Image
          alt=""
          src="/images/projects/_content/calendar/calendar2.webp"
          className="relative h-auto w-full"
          fill
          unoptimized
        />
      </div>
      <div className="relative w-full" style={{ aspectRatio: 3840/2174}}>
        <Image
          alt=""
          src="/images/projects/_content/calendar/calendar3.webp"
          className="h-auto w-full"
          fill
          unoptimized
        />
      </div>
      <div className="relative w-full" style={{ aspectRatio: 3840/2562}}>
        <Image
          alt=""
          src="/images/projects/_content/calendar/calendar4.webp"
          className="h-auto w-full"
          fill
          unoptimized
        />
      </div>
      <div className="relative w-full" style={{ aspectRatio: 3840/1860}}>
        <Image
          alt=""
          src="/images/projects/_content/calendar/calendar5.webp"
          className="h-auto w-full"
          fill
          unoptimized
        />
      </div>

    </div>
  );
};
