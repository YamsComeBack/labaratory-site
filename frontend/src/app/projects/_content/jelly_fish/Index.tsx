"use client";

import Image from "next/image";

export const JellyFishProject = () => {
  const headerImage = "/images/projects/_content/jelly_fish/1-image.png";
  const secondImage = "/images/projects/_content/jelly_fish/2-image.png";

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img
          src={headerImage}
          alt="Упаковка для мармелада Jellyfish"
          className="block h-auto w-full"
        />

        <div className="pointer-events-none absolute left-[8%] top-[26%] z-10 w-[61%]">
          <div className="relative">
            <Image
              src="/images/projects/_content/jelly_fish/Vector.svg"
              alt=""
              width={1175}
              height={668}
              className="h-auto w-full"
              unoptimized
            />
            <Image
              src="/images/projects/_content/jelly_fish/bear.png"
              alt=""
              width={511}
              height={634}
              className="absolute left-[18%] top-[-16%] h-auto w-[23%]"
              unoptimized
            />
            <div className="pointer-events-auto absolute inset-0 px-[clamp(16px,3.2vw,62px)] py-[clamp(16px,3vw,58px)]">
              <h2 className="text-title text-[clamp(0.26rem,2.2vw,2.6rem)] leading-[1.03] text-black">
                Упаковка для мармелада Jellyfish
              </h2>
              <p className="mt-[clamp(8px,1.1vw,20px)] max-w-[78%] text-main text-[clamp(0.12rem,0.9vw,1.06rem)] leading-[1.16] text-black">
                Проект создавался в сотрудничестве со студенческим стартапом из ИТМО. Упаковка
                выполнена в трёх ярких цветах, для каждого вкуса мы разработали остроумную фразу,
                вызывающую ассоциации со вкусом мармелада. Минималистичный дизайн подчеркивает, что
                мармеладки относятся к категории полезного питания.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <img src={secondImage} alt="Jelly Fish 2" className="block h-auto w-full" />
      </section>
    </article>
  );
};
