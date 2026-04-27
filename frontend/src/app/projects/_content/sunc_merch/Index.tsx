"use client";

import Image from "next/image";
import { SuncMerchHeroSection } from "./HeroSection";

const SHARED_CONTAINER_CLASS = "max-w-[1920px] aspect-[48/27]";
const FULL_BLEED_CONTAINER_CLASS = "aspect-[48/32]";

export const SuncMerchProject = () => {
  return (
    <article className="w-full overflow-x-clip bg-black text-black">
      <SuncMerchHeroSection />
      <section className="w-full overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <div className={`relative mx-auto w-full overflow-hidden ${SHARED_CONTAINER_CLASS}`}>
          <div className="absolute inset-y-0 w-[58%] right-[12%]">
            <Image
              src="/images/projects/_content/sunc_merch/2-image.png"
              alt=""
              fill
              className="object-contain object-bottom-right scale-[1.5]"
              sizes="100vw"
              priority
              unoptimized
            />
          </div>
          <div className="absolute left-[6%] top-1/2 -translate-y-1/2 md:left-[7%] h-[40%] w-[40%]">
            <Image
              src="/images/projects/_content/sunc_merch/22-image.png"
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
        <div className={`relative mx-auto w-full overflow-hidden ${SHARED_CONTAINER_CLASS}`}>
          <div className="absolute inset-y-0 left-[15%] w-[45%]"> 
            <Image
              src="/images/projects/_content/sunc_merch/3-image.png"
              alt=""
              fill
              className="object-contain object-bottom-left scale-[1.4]"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[4%] h-[53%] w-[46%]">
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

      <section className="w-full overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <div className={`relative mx-auto w-full overflow-hidden ${SHARED_CONTAINER_CLASS}`}>
          <div className="absolute bottom-[12%] top-[12%] right-[5%] w-[45%]"> 
            <Image
              src="/images/projects/_content/sunc_merch/4-image.png"
              alt=""
              fill
              className="object-contain object-bottom-right scale-[1.5]"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-[0%] h-[50%] w-[49%]">
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
        <div className={`relative mx-auto w-full overflow-hidden ${SHARED_CONTAINER_CLASS}`}>
          <div className="absolute inset-y-0 mt-[6%] h-[80%] w-[80%] left-[16%]">
            <Image
              src="/images/projects/_content/sunc_merch/5-image.png"
              alt=""
              fill
              className="object-contain object-bottom-left scale-[1.5]"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] h-[60%] w-[60%]">
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

      <section className="w-full overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <div className={`relative mx-auto w-full overflow-hidden ${FULL_BLEED_CONTAINER_CLASS}`}>
          <div className="absolute inset-0 w-full">
            <Image
              src="/images/projects/_content/sunc_merch/6-image.png"
              alt=""
              fill
              className="object-cover object-bottom"
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="absolute left-1/2 top-[9%] h-[11%] w-[24%] -translate-x-1/2 md:top-[8%] md:h-[10%] md:w-[20%]">
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
