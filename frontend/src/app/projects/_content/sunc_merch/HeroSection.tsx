"use client";

import Image from "next/image";

const HERO_BG = "/images/projects/_content/sunc_merch/1-image.png";
const HERO_HOODIE = "/images/projects/_content/sunc_merch/11-image.png";

/** viewBox 0 0 1116 511 — matches `public/.../vector.svg` */
const VECTOR_PATH =
  "M0 506.208V4.76284C80.8295 18.5219 149.767 61.1138 192.097 119.723C236.091 47.8016 314.001 0 402.769 0C485.019 0 557.952 41.0758 603.174 104.339C631.609 41.0758 677.4 0 729.073 0C769.279 0 805.922 24.8671 833.582 65.7111C852.736 24.8671 877.899 0 905.928 0C933.957 0 959.459 25.2022 978.645 66.5615C993.236 25.2022 1012.65 0 1033.95 0C1079.32 0 1116.05 114.389 1116 255.5C1115.95 396.611 1079.14 511 1033.78 511C1012.48 511 993.11 485.798 978.517 444.439C959.304 485.798 933.577 511 905.756 511C877.934 511 852.58 486.133 833.454 445.289C805.767 486.133 769.107 511 728.901 511C677.258 511 631.465 469.924 603.072 406.661C557.807 469.924 484.877 511 402.597 511C313.829 511 235.98 463.199 192.005 391.277C149.665 449.845 80.7659 492.419 0 506.208Z";

const HERO_DESCRIPTION =
  "СУНЦ — это профильная школа нового типа, в которой учатся талантливые и крутые старшеклассники. Специально для таких классных ребят мы разработали мерч, который передаёт их упорство и стремление достигать новые вершины. Именно в этих футболках наши юные учёные ездят на различные форумы и олимпиады, демонстрируя там свои знания и достижения и прославляя родной Федеральный.";

export const SuncMerchHeroSection = () => {
  return (
    <section
      className="relative isolate min-h-[min(100svh,960px)] w-full overflow-x-clip overflow-y-visible bg-black md:min-h-[min(88svh,920px)] md:max-h-[min(100svh,980px)]"
      aria-labelledby="sunc-merch-hero-title"
    >
      <Image
        src={HERO_BG}
        alt=""
        fill
        className="z-0 object-cover object-center"
        sizes="100vw"
        priority
        unoptimized
      />

      <div className="absolute inset-0 z-1 flex items-center justify-start overflow-visible pt-12 md:overflow-visible md:py-0">
        {/* One box: vector + hoodie scale together; hoodie is % of this box */}
        {/* min inner width ≈ 674px copy + px clamp + pr-56 so body text can actually hit max-w-[674px] */}
        <div className="relative w-[min(108vw,1040px)] max-w-[1116px] translate-x-[-4%] md:w-[min(max(74vw,786px),1116px)] md:translate-x-[-2%]">
          <svg
            viewBox="0 0 1116 511"
            className="relative z-0 h-auto w-full"
            aria-hidden
            preserveAspectRatio="xMinYMid meet"
          >
            <path
              fill="var(--color-primary)"
              fillRule="evenodd"
              clipRule="evenodd"
              d={VECTOR_PATH}
            />
          </svg>

          {/* Footprint is % of vector box only → moves/scales with vector; 2× via scale from bottom-right = glued corner */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 z-15 mx-[-16px] my-0 h-[506px] w-0"
            aria-hidden
          >
            <div className="relative h-[907px] w-[579px] origin-bottom-right scale-[2] py-0">
              <Image
                src={HERO_HOODIE}
                alt="Худи с принтом СКФУ"
                fill
                className="object-contain object-bottom-right"
                sizes="(max-width: 768px) 90vw, 45vw"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center overflow-visible px-[clamp(1.25rem,4.2vw,3.5rem)] py-[clamp(0.75rem,2.5vw,2rem)] pr-[56px]">
            <h1
              id="sunc-merch-hero-title"
              className="font-['SF Compact Text',sans-serif] text-[clamp(1.65rem,3.6vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-black"
            >
              Мерч для СУНЦ СКФУ
            </h1>
            <p className="mt-4 w-[min(674px,calc(100vw-3rem))] shrink-0 self-start text-[20px] text-form-2 leading-snug text-black md:mt-6">
              {HERO_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
