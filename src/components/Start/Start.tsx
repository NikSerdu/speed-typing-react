import { FC } from "react";
import { useTyping } from "../../hooks/useTyping";

const Start: FC = () => {
  const { startTest } = useTyping();
  return (
    <div className="max-w-7xl mx-auto mt-20 text-center ">
      <button
        onClick={startTest}
        className="mt-8 px-6 py-3 bg-blue-500 text-white text-2xl rounded-lg"
      >
        Start Test
      </button>
    </div>
  );
};

export default Start;
