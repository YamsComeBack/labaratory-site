"use client";

import Image from "next/image";
import { SuncMerchHeroSection } from "./HeroSection";

type SectionItem = {
  id: string;
  bgSrc: string;
  fgSrc: string;
  sectionBg: string;
  containerClassName: string;
  bgWrapperClassName: string;
  bgClassName?: string;
  fgWrapperClassName: string;
  fgClassName?: string;
  priority?: boolean;
};

const SHARED_CONTAINER_CLASS = "max-w-[1920px] aspect-[48/27]";
const FULL_BLEED_CONTAINER_CLASS = "aspect-[48/32]";
const RIGHT_BG_WRAPPER_CLASS =
  "absolute inset-y-0 right-[3%] w-[58%] md:right-[5%] md:w-[45%]";
const LEFT_BG_WRAPPER_CLASS =
  "absolute inset-y-0 left-[2%] w-[58%] md:left-[4%] md:w-[45%]";

const SECTION_ITEMS: readonly SectionItem[] = [
  {
    id: "merch_1",
    bgSrc: "/images/projects/_content/sunc_merch/2-image.png",
    fgSrc: "/images/projects/_content/sunc_merch/22-image.png",
    sectionBg: "#FFFFFF",
    containerClassName: SHARED_CONTAINER_CLASS,
    bgWrapperClassName: RIGHT_BG_WRAPPER_CLASS,
    bgClassName: "object-contain object-right-bottom scale-[1.5]",
    fgWrapperClassName:
      "absolute left-[6%] top-1/2 h-[411px] w-[489px] -translate-y-1/2 md:left-[10%]",
    fgClassName: "object-contain object-left-center scale-100",
    priority: true,
  },
  {
    id: "merch_2",
    bgSrc: "/images/projects/_content/sunc_merch/3-image.png",
    fgSrc: "/images/projects/_content/sunc_merch/33-image.png",
    sectionBg: "#ECECEC",
    containerClassName: SHARED_CONTAINER_CLASS,
    bgWrapperClassName: LEFT_BG_WRAPPER_CLASS,
    bgClassName: "ml-[140px] object-contain object-left-bottom scale-[1.5]",
    fgWrapperClassName:
      "absolute right-[7%] top-1/2 h-[36%] w-[34%] -translate-y-1/2 md:right-[11%] md:h-[33%] md:w-[26%]",
    fgClassName: "object-contain object-right-center scale-100",
  },
  {
    id: "merch_3",
    bgSrc: "/images/projects/_content/sunc_merch/4-image.png",
    fgSrc: "/images/projects/_content/sunc_merch/44-image.png",
    sectionBg: "#FFFFFF",
    containerClassName: SHARED_CONTAINER_CLASS,
    bgWrapperClassName: RIGHT_BG_WRAPPER_CLASS,
    bgClassName: "object-contain object-right-bottom scale-[1.5] pb-[60px]",
    fgWrapperClassName:
      "absolute left-[9%] top-1/2 h-[33%] w-[37%] -translate-y-1/2 md:left-[12%] md:h-[30%] md:w-[29%]",
    fgClassName: "object-contain object-left-center scale-100",
  },
  {
    id: "merch_4",
    bgSrc: "/images/projects/_content/sunc_merch/5-image.png",
    fgSrc: "/images/projects/_content/sunc_merch/55-image.png",
    sectionBg: "#ECECEC",
    containerClassName: SHARED_CONTAINER_CLASS,
    bgWrapperClassName:
      "absolute inset-y-0 left-[2%] mb-[56px] w-[58%] md:left-[4%] md:w-[45%]",
    bgClassName: "object-contain object-left-bottom scale-[1.5]",
    fgWrapperClassName:
      "absolute right-[8%] top-1/2 h-[587px] w-[492px] -translate-y-1/2 md:right-[12%]",
    fgClassName: "object-contain object-right-center scale-100",
  },
  {
    id: "merch_5",
    bgSrc: "/images/projects/_content/sunc_merch/6-image.png",
    fgSrc: "/images/projects/_content/sunc_merch/66-image.png",
    sectionBg: "#FFFFFF",
    containerClassName: FULL_BLEED_CONTAINER_CLASS,
    bgWrapperClassName:
      "absolute inset-0 w-full",
    bgClassName: "object-cover object-bottom",
    fgWrapperClassName:
      "absolute left-1/2 top-[9%] h-[11%] w-[24%] -translate-x-1/2 md:top-[8%] md:h-[10%] md:w-[20%]",
    fgClassName: "object-contain object-top",
  },
] as const;

const TwoLayerSection = ({
  bgSrc,
  fgSrc,
  sectionBg,
  containerClassName,
  bgWrapperClassName,
  bgClassName,
  fgWrapperClassName,
  fgClassName,
  priority = false,
}: SectionItem) => {
  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor: sectionBg }}>
      <div className={`relative mx-auto w-full overflow-hidden ${containerClassName ?? ""}`}>
        <div className={bgWrapperClassName}>
          <Image
            src={bgSrc}
            alt=""
            fill
            className={bgClassName ?? "object-contain object-center"}
            sizes="100vw"
            priority={priority}
            unoptimized
          />
        </div>
        <div className={fgWrapperClassName}>
          <Image
            src={fgSrc}
            alt=""
            fill
            className={fgClassName ?? "object-contain object-center"}
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export const SuncMerchProject = () => {
  return (
    <article className="w-full overflow-x-clip bg-black text-black">
      <SuncMerchHeroSection />
      {SECTION_ITEMS.map((item) => (
        <TwoLayerSection key={item.id} {...item} />
      ))}
    </article>
  );
};
