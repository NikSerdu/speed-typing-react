import { useCallback, useEffect } from "react";
import { useTypingStore } from "../store/TypingStore";
import { useMediaQuery } from "@uidotdev/usehooks";

export const useTyping = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");
  const {
    text,
    addMistake,
    index,
    increaseIndex,
    decreaseIndex,
    mistakesIndex,
    removeMistake,
    reset,
    isFinished,
    isStarted,
    setIsFinished,
    setIsStarted,
    timer,
    setTimer,
    doubleText,
    increaseTypedWords,
    typedWords,
  } = useTypingStore();

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!isStarted || isFinished) return;

      if (e.key === "Shift") {
        return;
      }
      if (e.key === "Backspace") {
        if (index > 0) {
          decreaseIndex();
          removeMistake(index - 1);
        }
        return;
      }

      if (index === 1) {
        setIsStarted(true);
      }

      const currentChar = text[index];
      const pressedKey = e.key;

      if (currentChar === " ") {
        increaseTypedWords();
      }

      if (currentChar !== pressedKey) {
        addMistake(index);
      }
      increaseIndex();

      if (index + 1 >= text.length) {
        doubleText();
      }
    },
    [
      index,
      text,
      addMistake,
      increaseIndex,
      decreaseIndex,
      removeMistake,
      isFinished,
      isStarted,
      doubleText,
    ]
  );

  useEffect(() => {
    if (isStarted && !isFinished) {
      const interval = setInterval(() => {
        if (timer + 1 >= 60) {
          setIsFinished(true);
          clearInterval(interval);
        } else {
          setTimer(timer + 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStarted, isFinished, timer]);

  useEffect(() => {
    if (isStarted && !isSmallDevice) {
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    }
  }, [handleKeyPress, isStarted]);

  const startTest = () => {
    setIsStarted(true);
  };

  return {
    startTest,
    index,
    text,
    addMistake,
    increaseIndex,
    decreaseIndex,
    removeMistake,
    isFinished,
    isStarted,
    mistakesIndex,
    timer,
    reset,
    typedWords,
    increaseTypedWords,
    handleKeyPress,
    isSmallDevice,
  };
};
