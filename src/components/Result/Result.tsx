import { FC } from "react";
import { useTyping } from "../../hooks/useTyping";

const Result: FC = () => {
  const { typedWords, mistakesIndex, reset } = useTyping();
  return (
    <div className="max-w-7xl mx-auto mt-20 text-center text-secondary">
      <h1 className="text-4xl">Typing Test Completed!</h1>
      <p className="text-2xl mt-4">Mistakes: {mistakesIndex.size}</p>
      <p className="text-2xl mt-4">Words per minute (WPM): {typedWords}</p>
      <div className="max-w-7xl mx-auto mt-20 text-center ">
        <button
          onClick={reset}
          className="mt-8 px-6 py-3 bg-blue-500 text-white text-2xl rounded-lg"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Result;
