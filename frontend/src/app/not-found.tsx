import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="absolute w-full h-screen bg-black grid place-items-center overflow-hidden">
      <div
        className="
          w-full
          mx-auto
          py-8
          flex flex-col items-center text-center
          gap-0
        "
      >
        <p className="text-not-found text-primary leading-10 text-[2rem] md:text-[3rem] lg:text-[4rem] whitespace-pre-line sm:whitespace-normal">
          {"Друг, меня\nне существует..."}
        </p>
        <Link href="/">
          <Image
            src="/svg/404/404.svg"
            alt="Логотип"
            width={420}
            height={514}
            priority
            className="scale-80"
            unoptimized
          />
        </Link>

        <p className="text-not-found text-primary leading-10 text-[2rem] md:text-[3rem] lg:text-[4rem]">
          Перейди на другую страницу
        </p>
      </div>
    </section>
  );
}
