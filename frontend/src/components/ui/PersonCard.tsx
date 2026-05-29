"use client";

import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface PersonCardProps {
  src: string | readonly string[];
  alt?: string;
  name: string;
  hoverText: string;
  descriptor?: string;
  className?: string;
}

export default function PersonCard({
  src,
  alt = "",
  name,
  descriptor,
  hoverText,
  className,
}: PersonCardProps) {
  const images = Array.isArray(src) ? (src as readonly string[]) : [src as string];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div
      className={cn(
        // ключевые изменения ↓
        "flex-none w-[200px] flex flex-col items-center",
        className
      )}
    >
      <div className="relative group aspect-square w-full">
        {/* используем fill, чтобы картинка масштабировалась ровно как родитель */}
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
          {images.map((s, i) => (
            <Image
              key={s}
              src={s}
              alt={alt}
              layout="fill"
              sizes="200px"
              className={cn(
                "object-cover",
                i === activeIndex ? "opacity-100" : "opacity-0"
              )}
              priority
              unoptimized
            />
          ))}
        </div>

        {hoverText && (
          <div
            className="
              pointer-events-none absolute inset-0 rounded-full bg-primary
              flex items-center justify-center opacity-0 
              transition-opacity duration-300 group-hover:opacity-100
            "
          >
            <p className="max-w-[190px] text-center whitespace-pre-line leading-snug text-black text-quote">
              {hoverText}
            </p>
          </div>
        )}
      </div>

      <p className="mt-[23px] max-w-[235px] text-center text-name text-white">
        {name}
      </p>

      {descriptor && (
        <p className="mt-2 max-w-[133px] text-center whitespace-pre-line text-description text-white">
          {descriptor}
        </p>
      )}
    </div>
  );
}
