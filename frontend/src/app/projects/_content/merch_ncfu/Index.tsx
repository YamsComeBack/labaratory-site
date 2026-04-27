"use client";

export const MerchNcfuProject = () => {
  const headerImage = "/images/projects/_content/merch_ncfu/1-image.png";
  const images = [
    "/images/projects/_content/merch_ncfu/2-image.png",
    "/images/projects/_content/merch_ncfu/3-image.png",
    "/images/projects/_content/merch_ncfu/4-image.png",
    "/images/projects/_content/merch_ncfu/5-image.png",
    "/images/projects/_content/merch_ncfu/6-image.png",
  ];

  return (
    <article className="w-full">
      <section className="relative w-full">
        <img src={headerImage} alt="Одеждомагазин" className="block h-auto w-full" />

        <div className="pointer-events-none absolute left-[37%] top-[12%] w-[54%]">
          <h2 className="text-title text-[clamp(0.3rem,2.7vw,3.2rem)] leading-[1.03] text-black">
            Одеждомагазин
          </h2>
          <p className="mt-[clamp(6px,1.1vw,20px)] text-main text-[clamp(0.12rem,0.9vw,1.06rem)] leading-[1.16] text-black">
            Мы переосмыслили идею университетского мерча, основывая дизайн одежды и сувенирной
            продукции на юморе и актуальных темах для студентов и сотрудников СКФУ. Наш мерч — это
            способ выразить себя и свою уникальность в контексте большого дружного сообщества
            университета — Будь собой, будь любым, будь в СКФУ. У нас получилась стильная
            коллекция, в которой каждый может найти что-то для себя — наш мерч подходит как для
            официальных мероприятий, так и для повседневной жизни. Результатом проекта стал показ
            коллекции на сцене университета и создание сайта Одеждомагазина — интернет-площадки для
            продажи мерча.
          </p>
        </div>
      </section>

      <section className="w-full">
        {images.map((src, i) => (
          <div key={i} className="w-full">
            <img src={src} alt={`Мерч СКФУ ${i + 2}`} className="block h-auto w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};
