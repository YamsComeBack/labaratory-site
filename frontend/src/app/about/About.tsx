"use client";

// import Image from "next/legacy/image";
import Image from "next/image";
import { useRotateTyping } from "@/hooks/useRotateTyping";
import { useHoverTyping } from "@/hooks/useHoverTyping";

const images = [
  "/images/about/slider-1.webp",
  "/images/about/slider-2.webp",
  "/images/about/slider-3.webp",
  "/images/about/slider-4.webp",
  "/images/about/slider-5.webp",
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
    <section className="relative w-full bg-black pb-[20%] z-0">
      <Image
        src="/images/about/first-image.webp"
        alt=""
        width={1920}
        height={1080}
        className="h-auto w-full max-w-none pb-[2vw] sm:pb-[1.5vw] z-0"
        priority
        unoptimized
      />
      <div className="overflow-hidden w-full">
        <div
          className="flex animate-slider-scroll w-max"
          style={{ animationDuration: `${scrollSpeed}ms` }}
        >
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[clamp(266px,calc(0.66px+34.55vw),664px)] mr-[clamp(10px,1.57vw,30px)] overflow-hidden rounded-[10px]"
            >
              <Image
                src={src}
                alt={`slide-${idx}`}
                width={664}
                height={507}
                className="h-auto w-full object-cover"
                priority
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
          className={`relative w-[274px] h-19 transition-transform duration-500 ease-out origin-bottom-right ${
            hovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <img
            src="/svg/about/dialog.svg"
            alt="dialog"
            className="object-contain"
          />
          <p className="absolute inset-0 flex items-center justify-center pr-4 text-[15px] font-normal font-['Roboto'] text-black text-left leading-tight whitespace-pre-line">
            {typedText}
          </p>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src="/svg/about/cat.svg"
            alt="cat"
            width={125}
            height={138}
            className="h-auto w-[125px] shrink-0 cursor-pointer"
          />
        </div>
      </div>

      <div className="box-border w-full max-w-full text-white px-[clamp(24px,7vw,80px)] whitespace-pre-line">
        <div className="mx-auto max-w-[1530px] flex flex-col gap-15">
          <h2 className="text-main">
            Давай к нам, у нас есть
          </h2>
          <div className="flex items-start gap-5">
            <div
              lang="ru"
              className="relative min-h-46 w-full max-w-[1377px] text-writing text-primary leading-snug hyphens-auto wrap-break-words"
            >
              {text}
              <span className="inline-block align-text-bottom w-[15px] h-[1.2em] bg-white ml-1 animate-blink" />
            </div>
            <img
              src="/svg/Logo.svg"
              alt="logo"
              width={135}
              height={155}
              className="hidden sm:block shrink-0 object-contain self-start h-auto w-[clamp(68px,calc(43.35px+4.77vw),135px)] "
            />
          </div>

          <p className="max-w-[1085px] text-main leading-relaxed">
            Мы встречаемся три раза в неделю. Каждое занятие – это погружение в реальный рабочий процесс, много практики, комментарии и наставления тьюторов, а ещё перерыв с вкусняшками и шутками-прибаутками.
          </p>

          <div className="flex flex-col xl:flex-row items-center text-primary text-main gap-7.5 xl:gap-[clamp(30px,2vw,78px)] ">
            <div className="flex flex-col xl:flex-row items-center gap-[7px] shrink-0">
              <p className="text-[clamp(80px,calc(359px-27.3vw),150px)] font-medium">
                3
              </p>
              <p className="leading-tight text-center xl:text-left">{`раза \nв неделю`}</p>
            </div>
            <img
              src="/svg/about/more.svg"
              alt="more"
              width={45}
              height={68}
              className="h-auto w-[45px] rotate-90 object-contain xl:rotate-0"
            />
            <div className="flex flex-col xl:flex-row items-center gap-[7px]">
              <p className="text-[clamp(80px,calc(359px-27.3vw),150px)] font-medium">
                3
              </p>
              <p className="leading-tight text-center xl:text-left">{`академических\nчаса`}</p>
            </div>
            <img
              src="/svg/about/plus.svg"
              alt="plus"
              width={58}
              height={58}
              className="h-[58px] w-auto object-contain"
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
