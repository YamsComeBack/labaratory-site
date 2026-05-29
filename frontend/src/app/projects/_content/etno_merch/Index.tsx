"use client";

import Image from "next/legacy/image";

export const EtnoMerchProject = () => {
  const headerImage = "/images/projects/_content/etno_merch/1-image.png";
  const images = [
    "/images/projects/_content/etno_merch/2-image.png",
    "/images/projects/_content/etno_merch/3-image.png",
    "/images/projects/_content/etno_merch/4-image.png",
    "/images/projects/_content/etno_merch/5-image.png",
    "/images/projects/_content/etno_merch/6-image.png",
  ];

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img src={headerImage} alt="Этномерч" className="block h-auto w-full" />

        <div className="pointer-events-none absolute left-0 top-[11%] z-10 w-[38%]">
          <div className="relative">
            <Image
              src="/images/projects/_content/etno_merch/vector.svg"
              alt=""
              width={733}
              height={452}
              className="h-auto w-full"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 flex items-center mt-[-5%] pl-[15%]">
              <div className="w-[72%]">
                <h2 className="text-title text-[clamp(0.28rem,2.1vw,2.5rem)] leading-[1.03] text-black">
                  Этномерч
                </h2>
                <p className="mt-[clamp(4px,0.8vw,14px)] text-main text-[clamp(0.14rem,0.88vw,1.06rem)] leading-[1.16] text-black">
                  Главная цель этого кейса — продвижение культуры народов СКФО. Эта одежда
                  напоминает молодому поколению о том, насколько богаты языки народов Северного
                  Кавказа на яркие афоризмы. Древнюю мудрость Кавказа мы отразили в стильном и
                  современном дизайне футболок, которые точно впишутся в твой гардероб.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Этно мерч ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
