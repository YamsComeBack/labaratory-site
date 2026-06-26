"use client";
import React, { useState } from "react";
import Image from "next/image";

export const ErnestPrintIdentityProject = () => {
    const postcards = [
        {
            id: "1",
            image:"/images/projects/_content/ernest/postcards/1.webp",
            video:"/images/projects/_content/ernest/postcards/animation/1.mp4"
        },
        {
            id: "2",
            image:"/images/projects/_content/ernest/postcards/2.webp",
            video:"/images/projects/_content/ernest/postcards/animation/2.mp4"
        },
        {
            id: "3",
            image:"/images/projects/_content/ernest/postcards/3.webp",
            video:"/images/projects/_content/ernest/postcards/animation/3.mp4"
        },
        {
            id: "4",
            image:"/images/projects/_content/ernest/postcards/4.webp",
            video:"/images/projects/_content/ernest/postcards/animation/4.mp4"
        },
        {
            id: "5",
            image:"/images/projects/_content/ernest/postcards/5.webp",
            video:"/images/projects/_content/ernest/postcards/animation/5.mp4"
        },
        {
            id: "6",
            image:"/images/projects/_content/ernest/postcards/6.webp",
            video:"/images/projects/_content/ernest/postcards/animation/6.mp4"
        },
        {
            id: "7",
            image:"/images/projects/_content/ernest/postcards/7.webp",
            video:"/images/projects/_content/ernest/postcards/animation/7.mp4"
        },
        {
            id: "8",
            image:"/images/projects/_content/ernest/postcards/8.webp",
            video:"/images/projects/_content/ernest/postcards/animation/8.mp4"
        },
    ]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return(
        <div>
            <div className="relative w-full h-full" style={{ aspectRatio:"1920/1106" }}>
                <h1 className="z-10 w-[30%] right-0 mr-[20vw] mt-[20vw] leading-[100%] absolute text-title text-[2.5vw]">
                    Разработка айдентики для «Эрнест печатает»
                </h1>
                <p className="z-10 w-[30%] right-0 mr-[20vw] mt-[26.5%] absolute text-main text-[1.3vw] leading-[120%] whitespace-pre-line">
                    {"В рамках проекта мы провели ребрендинг,\n разработали фирменные пакеты\n и серию открыток для демонстрации\n возможностей печати."}
                </p>
                <img
                    src="/images/projects/_content/ernest/head_vector.svg"
                    alt=""
                    className="absolute z-1 mt-[8vw] right-0 h-[40vw]"
                />
                <Image 
                    src="/images/projects/_content/ernest/ernest1.webp"
                    alt=""
                    fill
                    className="z-0 w-full aspect-video"
                />
            </div>
            <div className="relative z-1 w-full h-full" style={{ aspectRatio:"1920/992" }}>
                <p className="z-10 w-[40%] right-0 mr-[-2vw] mt-[25.3%] absolute text-main text-[1.3vw] leading-[120%] whitespace-pre-line">
                    {"В новом решении мы переосмыслили предыдущий\n логотип и сделали его частью обновленной айдентики.\n Концепция строится вокруг палитры Pantone:\n возможность гибко работать с оттенками подчеркивает\n точность, качество печати и широкий спектр задач,\n с которыми работает мастерская."}
                </p>
                <Image 
                src="/images/projects/_content/ernest/ernest2.webp"
                alt=""
                fill
                className="w-full aspect-video"
                />
            </div>
            <div className="relative z-1 w-full h-full" style={{ aspectRatio:"1920/1080" }}>
                <p className="z-10 w-[40%] ml-[4vw] mt-[11%] absolute text-main text-[1.3vw] leading-[120%] whitespace-pre-line">
                    {"Для серии разработана\n обечайка с фигурной вырубкой.\n Дизайн открыток был анимирован\n для адаптации в социальных сетях."}
                </p>
                <img
                    src="/images/projects/_content/ernest/body_vector.svg"
                    alt=""
                    className="absolute z-1 mt-[4vw] h-[21vw]"
                />
                <Image 
                src="/images/projects/_content/ernest/ernest3.webp"
                alt=""
                fill
                className="w-full aspect-video"
                />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-0">
                {postcards.map((src, index) => {
                    return(
                        <div key={index} className="relative h-[34vw] w-[25vw] overflow-hidden">
                            {(hoveredIndex === index)?
                                <video 
                                    id={src.id}
                                    src={src.video}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="z-10 absolute block inset-0 h-full w-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                /> : null
                            }
                            <Image 
                                src={src.image}
                                alt=""
                                fill
                                className="z-0 absolute object-cover h-full w-full inset-0"
                                onMouseEnter={() => setHoveredIndex(index)}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="relative z-0 w-full h-full" style={{ aspectRatio:"1920/1292" }}>
                <Image 
                src="/images/projects/_content/ernest/ernest5.webp"
                alt=""
                fill
                className="w-full"
                />
            </div>
        </div>
    )
}