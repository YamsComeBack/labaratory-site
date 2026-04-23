import { useState, useEffect } from "react";

interface Options {
  typingSpeed: number;
  waitBeforeErase: number;
  eraseSpeed: number;
  waitBeforeNext: number;
}

export const useRotateTyping = (
  phrases: string[],
  { typingSpeed, waitBeforeErase, eraseSpeed, waitBeforeNext }: Options
) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "erasing">(
    "typing"
  );
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = phrases[index];
    let t: NodeJS.Timeout;

    if (phase === "typing") {
      if (charIndex < current.length) {
        t = setTimeout(() => {
          setText(current.slice(0, charIndex + 1));
          setCharIndex((v) => v + 1);
        }, typingSpeed);
      } else {
        t = setTimeout(() => setPhase("waiting"), waitBeforeErase);
      }
    } else if (phase === "waiting") {
      t = setTimeout(() => setPhase("erasing"), waitBeforeNext);
    } else if (phase === "erasing") {
      if (charIndex > 0) {
        t = setTimeout(() => {
          setText(current.slice(0, charIndex - 1));
          setCharIndex((v) => v - 1);
        }, eraseSpeed);
      } else {
        setIndex((v) => (v + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(t);
  }, [
    phase,
    charIndex,
    index,
    phrases,
    typingSpeed,
    waitBeforeErase,
    eraseSpeed,
    waitBeforeNext,
  ]);

  return text;
};
