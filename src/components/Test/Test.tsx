import { FC } from "react";
import Letter from "../Letter/Letter";
import { useTyping } from "../../hooks/useTyping";

const Test: FC = () => {
  const { index, mistakesIndex, text, timer } = useTyping();

  return (
    <div className="max-w-7xl mx-auto mt-20 px-4">
      <p className="text-2xl text-orange">Timer: {timer} seconds</p>
      {text.split("").map((letter, i) => {
        return (
          <Letter
            isWrong={mistakesIndex.has(i)}
            letter={letter}
            key={letter + i}
            isTyped={index > i}
          />
        );
      })}
    </div>
  );
};

export default Test;
