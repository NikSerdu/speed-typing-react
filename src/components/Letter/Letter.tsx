import { FC, memo } from "react";
import cn from "clsx";

type TProps = {
  letter: string;
  isWrong: boolean;
  isTyped: boolean;
};

const Letter: FC<TProps> = ({ isWrong, letter, isTyped }) => {
  return (
    <div
      className={cn("inline text-4xl", {
        "text-secondary": !isTyped,
        "text-red-700": isWrong && isTyped,
        "text-green-500": !isWrong && isTyped,
        "px-2": letter === " ",
      })}
    >
      {letter}
    </div>
  );
};

export default memo(Letter);
