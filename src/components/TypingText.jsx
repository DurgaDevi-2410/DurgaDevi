// src/components/TypingText.jsx
import React, { useEffect, useState } from "react";

export default function TypingText({
  words = ["Full Stack Developer"],
  typingSpeed = 80,    // ms per char
  deletingSpeed = 40,  // ms per char when deleting
  pauseTime = 1500,    // pause after full word typed
  loop = true,
  className = ""
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && display.length < currentWord.length) {
      // type next char
      timer = setTimeout(() => {
        setDisplay(current => current + currentWord.charAt(display.length));
      }, typingSpeed);
    } else if (!isDeleting && display.length === currentWord.length) {
      // pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && display.length > 0) {
      // delete
      timer = setTimeout(() => {
        setDisplay(current => current.slice(0, -1));
      }, deletingSpeed);
    } else if (isDeleting && display.length === 0) {
      // move to next word
      setIsDeleting(false);
      setWordIndex(idx => idx + 1);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`typing-text ${className}`}>
      {display}
      <span className="typing-cursor" aria-hidden="true">|</span>
    </span>
  );
}
