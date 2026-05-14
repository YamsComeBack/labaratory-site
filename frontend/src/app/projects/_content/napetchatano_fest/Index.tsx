"use client";

import { useMuteVideo } from "@/hooks/useMuteVideo";

const FEST_VIDEO_ID = "napetchatano-fest-video";
const FEST_VIDEO_SRC = "/_next-video/fest-video.optimized.mp4";

export const NapetchatanoFestProject = () => {
  const { muted } = useMuteVideo(FEST_VIDEO_ID, true);

  return (
    <section className="w-full bg-black">
      <div className="mx-auto w-full max-w-[1920px]">
        <video
          id={FEST_VIDEO_ID}
          src={FEST_VIDEO_SRC}
          className="block h-auto w-full"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="metadata"
          controls
        />
      </div>
    </section>
  );
};
