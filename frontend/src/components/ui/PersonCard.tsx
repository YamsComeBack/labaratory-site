"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

interface PersonCardProps {
  src: string;
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
        <Image
          src={src}
          alt={alt}
          fill
          sizes="200px"
          className="rounded-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          priority
          unoptimized
        />

        {hoverText && (
          <div
            className="
              pointer-events-none absolute inset-0 rounded-full bg-primary
              flex items-center justify-center opacity-0 
              transition-opacity duration-300 group-hover:opacity-100
            "
          >
            <p className="max-w-[190px] text-center leading-snug text-black text-quote">
              {hoverText}
            </p>
          </div>
        )}
      </div>

      <p className="mt-[23px] max-w-[235px] text-center text-name text-white">
        {name}
      </p>

      {descriptor && (
        <p className="mt-2 max-w-[133px] text-center text-description text-white">
          {descriptor}
        </p>
      )}
    </div>
  );
}
