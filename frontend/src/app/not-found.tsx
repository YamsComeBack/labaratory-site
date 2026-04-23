import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full bg-black grid place-items-center">
      <div
        className="
          w-full
          max-w-[min(100%,1366px)]
          mx-auto
          py-8
          flex flex-col items-center text-center
          gap-[clamp(80px,10vw,100px)]
        "
      >
        <p className="text-not-found text-primary">
          Друг, меня не существует...
        </p>
        <Link href="/">
          <Image
            src="/svg/404/404.svg"
            alt="Логотип"
            width={420}
            height={514}
            priority
            unoptimized
          />
        </Link>

        <p className="text-not-found text-primary">
          Перейди на другую страницу
        </p>
      </div>
    </section>
  );
}
