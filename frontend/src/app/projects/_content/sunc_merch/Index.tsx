"use client";

import Image from "next/image";

export const SuncMerchProject = () => {
  const body = [
    "/images/projects/_content/sunc_merch/sunc2.webp",
    "/images/projects/_content/sunc_merch/sunc3.webp",
    "/images/projects/_content/sunc_merch/sunc4.webp",
    "/images/projects/_content/sunc_merch/sunc5.webp",
  ]
  return (
    <div>
      <div className="relative" style={{ aspectRatio:"1920/1080" }}>
        <div className="absolute z-10 w-[62vw] h-full flex inset-0">
          <h1 className="absolute z-30 w-[35vw] ml-[4vw] mt-[21vw] leading-[100%] text-title text-[2.5vw]">
            Мерч для СУНЦ СКФУ
          </h1>
          <p className="absolute z-30 w-[50vw] ml-[4vw] mt-[25vw] text-main text-[1.3vw] leading-[120%] whitespace-pre-wrap">
              {"СУНЦ — это профильная школа нового типа, в которой учатся\nталантливые и крутые старшеклассники. Специально для таких\nклассных ребят мы разработали мерч, который передаёт их упорство\nи стремление достигать новые вершины. Именно в этих футболках наши\nюные учёные ездят на различные форумы и олимпиады, демонстрируя\nтам свои знания и достижения и прославляя университет"}
          </p>
          <Image
            alt=""
            src="/images/projects/_content/sunc_merch/sunc1-tshirt.webp"
            priority
            className="absolute scale-[105%] right-[-34vw] bottom-[-7vw]"
            width={1935}
            height={1833}
            unoptimized
          />
          <img
            src="/images/projects/_content/sunc_merch/vector.svg"
          />
        </div>
        <Image
          alt=""
          src="/images/projects/_content/sunc_merch/sunc1-bg.webp"
          className="w-full"
          fill
          priority
          unoptimized
        />
      </div>

      {body.map((src, i) => (
        <div key={i} className="relative bg-gray-700" style={{ aspectRatio:"1920/1238" }}>
          <Image
            alt=""
            src={src}
            className="w-full"
            fill
            unoptimized
          />
        </div>
      ))}

      <div className="relative bg-gray-700" style={{ aspectRatio:"1920/1351" }}>
        <Image
          alt=""
          src="/images/projects/_content/sunc_merch/sunc6.webp"
          className="w-full"
          fill
          unoptimized
        />
      </div>
    </div>
  );
};
