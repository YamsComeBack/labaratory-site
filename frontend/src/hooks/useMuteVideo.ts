import { useState, useEffect, useCallback } from 'react';

export const useMuteVideo = (videoId: string) => {
  const [muted, setMuted] = useState(true);

  const toggleMuted = useCallback(() => setMuted((m) => !m), []);

  useEffect(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement | null;
    if (video) video.muted = muted;
  }, [muted, videoId]);

  return { muted, toggleMuted };
};
