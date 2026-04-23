"use client";

import { useState } from "react";
import Image from "next/image";
import { postContact } from "@/lib/api";

export const Contact = () => {
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Сохраняем форму до await
    const form = e.currentTarget;

    if (!agree || loading) return;

    const fd = new FormData(form);
    const fio = String(fd.get("fio") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();

    setLoading(true);
    setStatus(null);

    try {
      await postContact({ fio, email, phone, agree: true });
      setStatus("ok");
      form.reset(); // <- теперь form не null
      setAgree(false);
    } catch (err) {
      console.error(err);
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contacts" className="pt-26 pb-25 bg-black">
      <div className="flex flex-col gap-y-30 xl:flex-row xl:gap-y-0 xl:items-center">
        <div className="relative">
          <Image
            src="/svg/Contact/Circle.svg"
            alt="Логотип"
            width={792}
            height={519}
            priority
            unoptimized
          />
          <p
            className="absolute top-1/2 -translate-y-1/2
          px-[clamp(70px,calc(17.578125vw-65px),160px)] 
          xl:px-[clamp(50px,calc(21.875vw-225px),195px)] 
          text-subtitle text-black whitespace-pre-line"
          >
            {"Присоединяйся\nк команде"}x
          </p>
        </div>
        <div className="flex flex-col gap-6 px-[clamp(40px,calc(-137px+23.07vw),195px)] xl:px-[clamp(50px,6vw,112px)]">
          <div className="flex flex-row items-end gap-6">
            <form
              onSubmit={handleSubmit}
              className="flex w-full xl:w-[clamp(400px,32vw,627px)] flex-col gap-6"
            >
              <input
                type="text"
                name="fio"
                required
                pattern="^[A-Za-zА-Яа-яЁё\s\-]{2,100}$"
                title="Только буквы, дефис и пробел"
                placeholder="ФИО"
                className="h-12.5 xl:h-15 bg-white px-[65px] text-form"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="h-12.5 xl:h-15 bg-white px-[65px] text-form"
              />
              <input
                type="tel"
                name="phone"
                required
                inputMode="tel"
                placeholder="Телефон"
                pattern="^\+?[0-9\s\-]{10,15}$"
                title="Введите 10-15 цифр (можно +, пробел, дефис)"
                className="h-12.5 xl:h-15 bg-white px-[65px] text-form"
              />
              <button
                type="submit"
                aria-disabled={!agree || loading}
                disabled={!agree || loading}
                className={`relative overflow-hidden z-1 h-[63px] px-[68px] bg-primary text-black text-form-2 hover-button-animation`}
              >
                {loading ? "Отправка..." : "Оставить заявку"}
              </button>
              <label className="flex items-center gap-4 w-full xl:w-[clamp(400px,32vw,627px)] text-form text-white">
                <input
                  type="checkbox"
                  className="h-9 w-9 accent-primary"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  required
                />
                <span>Согласие на обработку персональных данных.</span>
              </label>
              {status === "ok" && (
                <p role="status" className="text-primary pt-2">
                  Заявка отправлена!
                </p>
              )}
              {status === "err" && (
                <p role="status" className="text-primary mt-2">
                  Ошибка отправки. Попробуйте позже.
                </p>
              )}
            </form>
            <Image
              src="/svg/Contact/Cat.svg"
              alt="cat"
              width={226}
              height={209}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};
