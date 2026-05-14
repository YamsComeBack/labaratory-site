import { useState, useEffect, useCallback, useMemo } from "react";

type VideoIdInput = string | string[];
const STORAGE_KEY = "global-video-muted";
const listeners = new Set<(value: boolean) => void>();

let sharedMuted = true;
let isInitialized = false;

const toIdList = (input: VideoIdInput) => {
  if (Array.isArray(input)) {
    return input;
  }

  return [input];
};

const initSharedMuted = (initialMuted: boolean) => {
  if (isInitialized || typeof window === "undefined") {
    return;
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY);
  sharedMuted = storedValue === null ? initialMuted : storedValue === "true";
  isInitialized = true;
};

const updateSharedMuted = (value: boolean) => {
  sharedMuted = value;

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, String(value));
  }

  listeners.forEach((listener) => listener(value));
};

export const useMuteVideo = (videoIds?: VideoIdInput, initialMuted = true) => {
  const ids = useMemo(
    () => (videoIds === undefined ? [] : toIdList(videoIds)),
    [videoIds],
  );
  const [muted, setMuted] = useState(sharedMuted);

  const toggleMuted = useCallback(() => {
    updateSharedMuted(!sharedMuted);
  }, []);

  const setMutedState = useCallback((value: boolean) => {
    updateSharedMuted(value);
  }, []);

  useEffect(() => {
    initSharedMuted(initialMuted);
    setMuted(sharedMuted);

    const listener = (value: boolean) => {
      setMuted(value);
    };

    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, [initialMuted]);

  useEffect(() => {
    ids.forEach((id) => {
      const video = document.getElementById(id) as HTMLVideoElement | null;
      if (video) {
        video.muted = muted;
      }
    });
  }, [ids, muted]);

  return { muted, toggleMuted, setMuted: setMutedState };
};
