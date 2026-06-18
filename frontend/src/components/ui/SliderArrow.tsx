import React from "react";

type SliderArrowProps = {
    direction: "left" | "right";
    onClick: () => void;
}

export default function SliderArrow({
    direction,
    onClick,
}: SliderArrowProps){
    return(
        <button
        type="button"
        onClick={onClick}
        aria-label="Предыдущий слайд"
        className={`absolute top-1/2 ${(direction === "right")? 'right-0 mr-4 md:mr-15': 'ml-4 md:ml-15'} z-10 -translate-y-1/2 cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4e300] focus-visible:ring-offset-2 focus-visible:ring-offset-[#293766] w-[3.75%]`}
        >
        <img
            src={`/images/projects/_content/tabletop_game/slider/svg/slider_${direction}.svg`}
            alt=""
            width={72}
            height={72}
            className="h-auto w-full bg-white/10 backdrop:saturate-100 backdrop-blur-md transition-colors rounded-full hover:bg-(--color-primary)"
        />
        </button>
    )
}