"use client";
import Image from "next/image";

export const SkfuPostcardsProject = () => {
    return(
        <div>
            <div className="relative" style={{ aspectRatio:"1920/1062" }}>
                <div className="absolute w-[45vw] h-[23vw] bottom-0">
                    <h1 className="absolute z-30 w-[35vw] ml-[4vw] mt-[4vw] leading-[100%] text-title text-[2.5vw]">
                        Серия открыток для СКФУ
                    </h1>
                    <p className="absolute z-30 w-[38vw] ml-[4vw] mt-[8vw] text-main text-[1.3vw] leading-[120%] whitespace-pre-wrap">
                    {"Мы создали две серии открыток для Северо-Кавказского\nфедерального университета. В одной – забавные\nиллюстрации, показывающие будни студентов."}
                    </p>
                    <img
                        src="/images/projects/_content/ncfu_postcards/vector1.svg"
                        className="absolute z-10 right-0"
                    />
                </div>
                <Image 
                src="/images/projects/_content/ncfu_postcards/postcards1.png"
                alt=""
                fill
                className="w-full"
                />
            </div>
            <div className="relative" style={{ aspectRatio:"1920/1867" }}>
                <Image 
                src="/images/projects/_content/ncfu_postcards/postcards2.png"
                alt=""
                fill
                className="w-full"
                />
            </div>
            <div className="w-full">
                <div className="absolute z-30 w-[26vw] h-[23vw]">
                    <p className="absolute z-30 w-[18vw] ml-[4vw] mt-[3vw] text-main text-[1.3vw] leading-[120%] whitespace-pre-wrap">
                        {"А во второй – фотографии, запечатлевшие ключевые мероприятия университета ушедшего года."}
                    </p>
                    <img
                        src="/images/projects/_content/ncfu_postcards/vector2.svg"
                        className="absolute z-10"
                    />
                </div>
                <video
                    id="otpechatano_video"
                    src="/_next-video/ncfu_postcards.mp4"
                    className="block h-auto w-full"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                />
            </div>
        </div>
    )
};
