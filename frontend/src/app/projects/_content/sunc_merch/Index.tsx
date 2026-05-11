"use client";

import Image from "next/image";
import { SuncMerchHeroSection } from "./HeroSection";

// Tune these values to make backgrounds shorter/taller everywhere.
// Bigger first number or smaller second number => shorter section.
const SHARED_BG_ASPECT_RATIO = "48 / 30";

export const SuncMerchProject = () => {
  return (
    <article className="w-full overflow-x-clip bg-black text-black">
      <SuncMerchHeroSection />
      <section className="w-full overflow-hidden bg-white">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: SHARED_BG_ASPECT_RATIO }}>
          <div className="absolute bottom-0 right-[10%] h-full w-[34%]">
            <Image
              src="/images/projects/_content/sunc_merch/2-image.png"
              alt=""
              fill
              className="origin-bottom object-contain object-bottom-right scale-[1.5]"
              sizes="100vw"
              priority
              unoptimized
            />
          </div>
          <div className="absolute left-[9%] top-1/2 h-[35%] w-[35%] -translate-y-1/2">
            <Image
              src="/images/projects/_content/sunc_merch/22-image.png"
              alt=""
              fill
              className="object-contain object-left-center"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden" style={{ backgroundColor: "#ECECEC" }}>
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: SHARED_BG_ASPECT_RATIO }}>
          <div className="absolute bottom-0 left-0 h-full w-[40%]">
            <Image
              src="/images/projects/_content/sunc_merch/3-image.png"
              alt=""
              fill
              className="origin-bottom ml-[20%] scale-[1.2] object-contain object-bottom-left"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute right-[-15%] top-1/2 h-[60%] w-full -translate-y-1/2">
            <Image
              src="/images/projects/_content/sunc_merch/33-image.png"
              alt=""
              fill
              className="object-contain object-right-center scale-100"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-white">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: SHARED_BG_ASPECT_RATIO }}>
          <div className="absolute bottom-[-4%] right-[10%] h-full w-[41%]">
            <Image
              src="/images/projects/_content/sunc_merch/4-image.png"
              alt=""
              fill
              className="origin-bottom object-contain object-bottom-right scale-[1.5] pb-[5.6%]"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute left-[15%] top-1/2 h-full w-[25%] -translate-y-1/2">
            <Image
              src="/images/projects/_content/sunc_merch/44-image.png"
              alt=""
              fill
              className="object-contain object-left-center scale-100"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden" style={{ backgroundColor: "#ECECEC" }}>
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: SHARED_BG_ASPECT_RATIO }}>
          <div className="absolute bottom-[5%] left-[9%] h-full w-[38%]">
            <Image
              src="/images/projects/_content/sunc_merch/5-image.png"
              alt=""
              fill
              className="origin-bottom object-contain object-bottom-left scale-[1.5]"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute right-0 top-1/2 h-[60%] w-[60%] -translate-y-1/2">
            <Image
              src="/images/projects/_content/sunc_merch/55-image.png"
              alt=""
              fill
              className="object-contain object-right-center scale-100"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-white">
        <div className="relative mx-auto w-full overflow-hidden aspect-12/8">
          <div className="absolute inset-x-0 bottom-0 h-full w-full">
            <Image
              src="/images/projects/_content/sunc_merch/6-image.png"
              alt=""
              fill
              className="object-cover object-bottom"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute left-1/2 top-[9%] h-[16%] w-full -translate-x-1/2">
            <Image
              src="/images/projects/_content/sunc_merch/66-image.png"
              alt=""
              fill
              className="object-contain object-top"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </section>
    </article>
  );
};
