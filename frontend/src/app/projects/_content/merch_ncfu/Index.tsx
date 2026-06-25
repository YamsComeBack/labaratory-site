"use client";
import Image from "next/image";

export const MerchNcfuProject = () => {
  const images = [
    {
      src: "/images/projects/_content/merch_ncfu/merch_store2.webp",
      height: 1920,
      width: 1080
    },
    {
      src: "/images/projects/_content/merch_ncfu/merch_store3.webp",
      height: 1920,
      width: 1085
    },
    {
      src: "/images/projects/_content/merch_ncfu/merch_store4.webp",
      height: 1920,
      width: 1221
    },
    {
      src: "/images/projects/_content/merch_ncfu/merch_store5.webp",
      height: 1920,
      width: 977
    },
    {
      src: "/images/projects/_content/merch_ncfu/merch_store6.webp",
      height: 1920,
      width: 1061
    },
    {
      src: "/images/projects/_content/merch_ncfu/merch_store7.webp",
      height: 1920,
      width: 1082
    },
    {
      src: "/images/projects/_content/merch_ncfu/merch_store8.webp",
      height: 1920,
      width: 1174
    },
  ];

  return (
    <article className="w-full">
      <div className="relative w-full" style={{ aspectRatio: 1920/1456 }}>
        <Image
          src="/images/projects/_content/merch_ncfu/merch_store1.webp"
          alt="Одеждомагазин"
          fill
          className="block h-auto w-full"
          priority
          unoptimized
        />
  

        <div className="absolute right-[6.5vw] top-[3.8vw] w-[50%]">
          <h1 className="absolute z-30 w-[25vw] ml-[16vw] mt-[1vw] leading-[100%] text-title text-[2.5vw]">
            Одеждомагазин
          </h1>
          <p className="absolute z-30 ml-[16vw] mt-[5vw] text-main text-[1.3vw] leading-[120%] whitespace-pre-wrap">
            {"Мы переосмыслили университетский мерч СКФУ,\nсделав его стильным, актуальным и близким\nстудентам и сотрудникам. Коллекция сочетает\nюмор, современные темы и универсальный\nдизайн для учёбы, мероприятий и повседневной\nжизни. Итогом проекта стали показ коллекции\nна сцене университета и запуск сайта\nОдеждомагазина для продажи мерча."}
          </p>
        </div>
      </div>

        {images.map((img, i) => (
          <div key={i} className="relative w-full">
            <Image
              src={img.src}
              alt={`Мерч СКФУ ${i + 2}`}
              width={img.width}
              height={img.height}
              className="block h-auto w-full"
              unoptimized
            />
          </div>
        ))}
    </article>
  );
};
