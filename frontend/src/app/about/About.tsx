"use client";

import Image from "next/image";
import { useRotateTyping } from "@/hooks/useRotateTyping";
import { useHoverTyping } from "@/hooks/useHoverTyping";

const images = [
  "/images/about/slider-1.png",
  "/images/about/slider-2.png",
  "/images/about/slider-3.png",
  "/images/about/slider-4.png",
];

const phrases = [
  "творчес\u00ADкое сообщест\u00ADво",
  "мастер\u00ADклассы\nи ворк\u00ADшопы",
  "только полезная инфа\nбез воды",
  "возмож\u00ADность повысить\nсвои скиллы",
  "инсайды\nот про\u00ADфессио\u00ADналов",
  "реальные кейсы",
];

const TYPING_SPEED = 50;
const WAIT_BEFORE_ERASE = 1800;
const ERASE_SPEED = 30;
const WAIT_BEFORE_NEXT = 400;

const fullText = "Мемы с котами всегда\nактуальны и к месту";

export const About = () => {
  const scrollSpeed = 20000;

  const text = useRotateTyping(phrases, {
    typingSpeed: TYPING_SPEED,
    waitBeforeErase: WAIT_BEFORE_ERASE,
    eraseSpeed: ERASE_SPEED,
    waitBeforeNext: WAIT_BEFORE_NEXT,
  });

  const { typedText, hovered, handleMouseEnter, handleMouseLeave } =
    useHoverTyping(fullText);

  return (
    <section className="relative w-full bg-black pb-[clamp(208px,17vw,400px)] z-[1]">
      <Image
        src="/images/about/first-image.png"
        alt=""
        width={1920}
        height={1080}
        className="-mt-[clamp(140px,12vw,170px)]"
        priority
        unoptimized
      />
      <div className="overflow-hidden w-full mt-[clamp(14px,calc(-10px+3.13vw),35px)]">
        <div
          className="flex animate-slider-scroll w-max"
          style={{ animationDuration: `${scrollSpeed}ms` }}
        >
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[clamp(266px,calc(0.66px+34.55vw),664px)] mr-[clamp(10px,1.57vw,30px)] overflow-hidden rounded-[10px]"
            >
              <Image
                src={src}
                alt={`slide-${idx}`}
                width={664}
                height={507}
                className="w-full h-full object-cover"
                priority={idx < 2}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <div
        id="about"
        className="flex items-center justify-end w-full py-13 scroll-mt-[45px]"
      >
        <div
          className={`relative w-[274px] h-[76px] transition-transform duration-500 ease-out origin-bottom-right ${
            hovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <Image
            src="/svg/About/dialog.svg"
            alt="dialog"
            fill
            className="object-contain"
            priority
            unoptimized
          />
          <p className="absolute inset-0 flex items-center justify-center pr-4 text-[15px] font-normal font-['Roboto'] text-black text-left leading-tight whitespace-pre-line">
            {typedText}
          </p>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image
            src="/svg/About/cat.svg"
            alt="cat"
            width={125}
            height={138}
            className="shrink-0 cursor-pointer"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="w-full text-white px-[clamp(40px,calc(-137px+23.07vw),195px)] whitespace-pre-line">
        <div className="mx-auto max-w-[1530px] flex flex-col gap-15">
          <h2 className="text-main">Давай к нам, у нас есть</h2>
          <div className="flex items-start gap-[20px]">
            <div
              lang="ru"
              className="relative w-[clamp(490px,calc(58.12px+68.73vw),1377px)] text-writing text-primary leading-snug hyphens-auto break-words"
            >
              {text}
              <span className="inline-block align-text-bottom w-[15px] h-[1.2em] bg-white ml-1 animate-blink" />
            </div>
            <Image
              src="/svg/Logo.svg"
              alt="logo"
              width={135}
              height={155}
              className="shrink-0 object-contain self-start
               w-[clamp(68px,calc(43.35px+4.77vw),135px)] "
              priority
              unoptimized
            />
          </div>

          <p className="max-w-[1085px] text-main leading-relaxed">
            {`Мы встречаемся три раза в неделю.\nКаждое занятие – это погружение в реальный рабочий процесс, много практики, комментарии и наставления тьюторов, а ещё перерыв с вкусняшками и шутками-прибаутками.`}
          </p>

          <div className="flex flex-col xl:flex-row items-center text-primary text-main gap-[30px] xl:gap-[clamp(30px,2vw,78px)] ">
            <div className="flex flex-col xl:flex-row items-center gap-[7px] shrink-0">
              <p className="text-[clamp(80px,calc(359px-27.3vw),150px)] font-medium">
                3
              </p>
              <p className="leading-tight text-center xl:text-left">{`раза \nв неделю`}</p>
            </div>
            <Image
              src="/svg/About/More.svg"
              alt="more"
              width={45}
              height={68}
              className="rotate-90 xl:rotate-0 object-contain"
              priority
              unoptimized
            />
            <div className="flex flex-col xl:flex-row items-center gap-[7px]">
              <p className="text-[clamp(80px,calc(359px-27.3vw),150px)] font-medium">
                3
              </p>
              <p className="leading-tight text-center xl:text-left">{`академических\nчаса`}</p>
            </div>
            <Image
              src="/svg/About/Plus.svg"
              alt="plus"
              width={58}
              height={58}
              className="object-contain"
              priority
              unoptimized
            />
            <p className="leading-tight text-center xl:text-left w-auto">
              {`дополнительные занятия с тьюторами,\nмастер-классы и воркшопы`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
