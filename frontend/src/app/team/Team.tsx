"use client";

import { useState, useEffect } from "react";
import PeopleSection from "@/components/ui/PeopleSection";
import Image from "next/image";

const tutors = [
  {
    src: [
      "/images/team/Andrey-1.png",
      "/images/team/Andrey-2.png",
      "/images/team/Andrey-3.png"
    ],
    name: "Андрей Охонько",
    descriptor: "руководитель направления «Дизайн»",
    hoverText: "Лучше ответственное неделание,\n чем безответственное\n делание",
  },
  {
    src: [
      "/images/team/Maxim-1.png",
      "/images/team/Maxim-2.png",
      "/images/team/Maxim-3.png"
    ],
    name: "Максим Тизенгаузен",
    descriptor: "руководитель направления «Медиа»",
    hoverText:
      "Внимание,\n спасибо за внимание!",
  },
  {
    src: [
      "/images/team/Shamil-1.png",
      "/images/team/Shamil-2.png",
      "/images/team/Shamil-3.png"
    ],
    name: "Шамиль Баракаев",
    descriptor: "руководитель направления «Медиа»",
    hoverText: "Сложно – не значит невозможно. Сложно  – значит просто сложно",
  },
] as const;

const supports = [
  {
    src: [
      "/images/team/Daniil-1.png",
      "/images/team/Daniil-2.png",
      "/images/team/Daniil-3.png",
    ],
    name: "Даниил Слезавин",
    hoverText: "Категорически всех приветствую",
  },
  {
    src: [
      "/images/team/Margo-1.png",
      "/images/team/Margo-2.png",
      "/images/team/Margo-3.png",
    ],
    name: "Маргарита Гриценко",
    hoverText: "Здесь могла быть\n ваша реклама",
  },
  {
    src: [
      "/images/team/Sopha-1.png",
      "/images/team/Sopha-2.png",
      "/images/team/Sopha-3.png",
    ],
    name: "София Акопян",
    hoverText: "Не копайся в себе, докапывайся\n до других",
  },
  {
    src: [
      "/images/team/Arina-1.png",
      "/images/team/Arina-2.png",
      "/images/team/Arina-3.png",
    ],
    name: "Чотчаева Арина",
    hoverText: "Меня попросили здесь\n что-то написать",
  },
  {
    src: [
      "/images/team/Islam-1.png",
      "/images/team/Islam-2.png",
      "/images/team/Islam-3.png",
    ],
    name: "Кагазежев Ислам",
    hoverText: "Убери, я ничего\n не вижу",
  },
  {
    src: [
      "/images/team/Arianna-1.png",
      "/images/team/Arianna-2.png",
    ],
    name: "Арианна Энгельгардт",
    hoverText: "В резкости",
  },
  {
    src: [
      "/images/team/Lena-1.png",
      "/images/team/Lena-2.png",
      "/images/team/Lena-3.png",
    ],
    name: "Елена Воробьева",
    hoverText: "Убери, я ничего\n не вижу",
  },
  {
    src: [
      "/images/team/NastyaB-1.png",
      "/images/team/NastyaB-2.png",
      "/images/team/NastyaB-3.png",
    ],
    name: "Анастасия Борисова",
    hoverText: "Убери, я ничего\n не вижу",
  },
  {
    src: [
      "/images/team/NastyaG-1.png",
      "/images/team/NastyaG-2.png",
    ],
    name: "Анастасия Горская",
    hoverText: "Плачьте девки,\n я снова в прайме",
  },
  {
    src: [
      "/images/team/Rada-1.png",
      "/images/team/Rada-2.png",
      "/images/team/Rada-3.png",
    ],
    name: "Рада Пашкова",
    hoverText: "график дизайн\n из май пэшн",
  },
  {
    src: [
      "/images/team/Stepan-1.png",
      "/images/team/Stepan-2.png",
      "/images/team/Stepan-3.png",
    ],
    name: "Степан Гонтарь",
    hoverText: "Смысла нет,\n но вы ищите",
  },
  {
    src: [
      "/images/team/Varya-1.png",
      "/images/team/Varya-2.png",
      "/images/team/Varya-3.png",
    ],
    name: "Варвара Долгорук",
    hoverText: "Лучше иметь друга\n чем друг друга",
  },
] as const;

export const Team = () => {
  const [shuffledSupports, setShuffledSupports] = useState(Array.from(supports))

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffled = Array.from(supports)
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setShuffledSupports(shuffled)
  }, [])

  return (
    <section className="bg-none">
      <h1
        className="
      absolute z-2 left-1/2 box-border max-w-full -translate-x-1/2 px-4
      pt-[5%] md:pt-[12%] lg:pt-[14%]
      text-title text-center text-[4rem] leading-[0.95]"
      >
        командос
      </h1>
      <div className="relative w-full h-[65vw] max-w-none">
        {/* <Image
          src="/images/Team/Team.png"
          alt=""
          width={1920}
          height={1280}
          className="z-1 object-cover"
          layout="fill"
          priority
          unoptimized
        /> */}
        <Image
          src="/images/Team/Team.png"
          alt="Общая фотография команды"
          className="z-1 object-cover"
          fill
          priority
          unoptimized
        />
      </div>
      <div className="z-10 mt-[-30%] pt-[30%] mx-auto flex flex-col items-center bg-black pb-15 gap-15">
        <PeopleSection
          id="team"
          className="scroll-mt-11.25"
          title="тьюторы"
          people={tutors}
        />
        <PeopleSection title="саппорты" people={shuffledSupports} />
      </div>
    </section>
  );
};
